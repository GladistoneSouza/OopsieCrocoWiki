#!/usr/bin/env python3
"""Recorta screenshots brutos do jogo em evidências enfáticas para a wiki.

Uso:
  python3 scripts/shots.py detect img_game/*.jpg        # sugere caixas de corte
  python3 scripts/shots.py build scripts/shots.json     # processa o manifesto

Cada entrada do manifesto vira um arquivo em public/screenshots/.
"""
from __future__ import annotations

import json
import sys
from dataclasses import dataclass, field
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageFilter

ROOT = Path(__file__).resolve().parent.parent
OUT_ROOT = ROOT / "public" / "screenshots"

# Painel modal do jogo aparece claro sobre um overlay escurecido.
PANEL_LUMA = 100
PANEL_FILL = 0.30
PANEL_EDGE = 0.75  # fração mínima para considerar a linha/coluna "dentro" do painel
DEFAULT_MAX_WIDTH = 900
DEFAULT_QUALITY = 86
MATTE_INK = "#2b2543"


# --------------------------------------------------------------------------- #
# Detecção
# --------------------------------------------------------------------------- #
def longest_run(profile: np.ndarray, threshold: float) -> tuple[int, int]:
    """Maior faixa contígua em que o perfil fica acima do limiar."""
    on = profile > threshold
    best_len, best = 0, (0, len(profile))
    start = None
    for i, v in enumerate(on):
        if v and start is None:
            start = i
        elif not v and start is not None:
            if i - start > best_len:
                best_len, best = i - start, (start, i)
            start = None
    if start is not None and len(on) - start > best_len:
        best = (start, len(on))
    return best


def tighten(profile: np.ndarray, lo: int, hi: int, threshold: float) -> tuple[int, int]:
    """Encolhe a faixa até as bordas sólidas do painel, descartando a franja do overlay."""
    while lo < hi and profile[lo] < threshold:
        lo += 1
    while hi > lo and profile[hi - 1] < threshold:
        hi -= 1
    return lo, hi


def detect_panel(path: Path, luma: int = PANEL_LUMA, fill: float = PANEL_FILL) -> tuple[int, int, int, int]:
    """Caixa do painel claro sobre fundo escurecido, por projeção de linhas/colunas."""
    gray = np.asarray(Image.open(path).convert("L"), dtype=np.uint8)
    mask = gray > luma
    rows = mask.mean(axis=1)
    y0, y1 = tighten(rows, *longest_run(rows, fill), PANEL_EDGE)
    if y1 <= y0:
        raise ValueError(f"{path.name}: nenhum painel claro encontrado — informe a caixa manualmente")
    cols = mask[y0:y1].mean(axis=0)
    x0, x1 = tighten(cols, *longest_run(cols, fill), PANEL_EDGE)
    if x1 <= x0:
        raise ValueError(f"{path.name}: nenhum painel claro encontrado — informe a caixa manualmente")
    return x0, y0, x1, y1


# --------------------------------------------------------------------------- #
# Tratamento
# --------------------------------------------------------------------------- #
@dataclass
class Focus:
    """Fundo neutro atrás do recorte, para tirar o contexto irrelevante do caminho."""

    matte: str = MATTE_INK
    radius: int = 28
    inset: int = 44
    shadow: bool = True
    fade_bottom: int = 0  # px em que a arte se dissolve no fundo, em vez de cortar a faca


@dataclass
class Patch:
    """Cobre um pedaço de HUD com um trecho de fundo vizinho, com borda esfumada.

    Só para elementos decorativos (ícones de menu sobre o fundo do banner) — nunca
    sobre texto ou número que sirva de evidência.
    """

    box: list[int]
    source: list[int] | None = None  # sem source, o buraco vira gradiente do entorno
    axis: str = "y"  # eixo do gradiente: "y" amostra acima/abaixo, "x" amostra dos lados
    feather: int = 12


@dataclass
class Shot:
    src: str
    out: str
    crop: str | list[int] = "auto"
    pad: int = 0
    max_width: int = DEFAULT_MAX_WIDTH
    quality: int = DEFAULT_QUALITY
    focus: Focus | None = None
    patches: list[Patch] = field(default_factory=list)
    note: str = ""


def resolve_box(shot: Shot, src: Path, size: tuple[int, int]) -> tuple[int, int, int, int]:
    if shot.crop == "auto":
        x0, y0, x1, y1 = detect_panel(src)
    else:
        x0, y0, x1, y1 = shot.crop
    w, h = size
    p = shot.pad
    return max(0, x0 - p), max(0, y0 - p), min(w, x1 + p), min(h, y1 + p)


def rounded_mask(size: tuple[int, int], radius: int) -> Image.Image:
    mask = Image.new("L", size, 0)
    ImageDraw.Draw(mask).rounded_rectangle([(0, 0), (size[0] - 1, size[1] - 1)], radius, fill=255)
    return mask


def neighbour_gradient(image: Image.Image, box: list[int], axis: str = "y", band: int = 24) -> Image.Image:
    """Gradiente entre as cores medianas dos dois lados da caixa, no eixo pedido."""
    bx0, by0, bx1, by1 = box
    a = np.asarray(image, dtype=np.uint8)
    h, w = by1 - by0, bx1 - bx0

    def median_of(region: np.ndarray) -> np.ndarray | None:
        return np.median(region.reshape(-1, 3), axis=0) if region.size else None

    if axis == "x":
        near = median_of(a[by0:by1, max(0, bx0 - band) : bx0])
        far = median_of(a[by0:by1, bx1 : bx1 + band])
        ramp = np.linspace(0.0, 1.0, w)[:, None]
    else:
        near = median_of(a[max(0, by0 - band) : by0, bx0:bx1])
        far = median_of(a[by1 : by1 + band, bx0:bx1])
        ramp = np.linspace(0.0, 1.0, h)[:, None]

    # Caixa encostada na borda da imagem: só um dos lados tem amostra.
    if near is None and far is None:
        raise ValueError(f"patch {box} não tem vizinhança para amostrar")
    near = far if near is None else near
    far = near if far is None else far

    line = near[None, :] * (1 - ramp) + far[None, :] * ramp
    field = np.repeat(line[None, :, :], h, axis=0) if axis == "x" else np.repeat(line[:, None, :], w, axis=1)

    return Image.fromarray(field.astype(np.uint8), "RGB")


def apply_patches(image: Image.Image, patches: list[Patch]) -> Image.Image:
    out = image.copy()
    for patch in patches:
        bx0, by0, bx1, by1 = patch.box
        if patch.source:
            piece = image.crop(tuple(patch.source)).resize((bx1 - bx0, by1 - by0), Image.LANCZOS)
        else:
            piece = neighbour_gradient(image, patch.box, patch.axis)
        mask = Image.new("L", piece.size, 255)
        d = ImageDraw.Draw(mask)
        d.rectangle([(0, 0), (piece.width - 1, piece.height - 1)], outline=0, width=patch.feather)
        out.paste(piece, (bx0, by0), mask.filter(ImageFilter.GaussianBlur(patch.feather)))
    return out


def fade_into_matte(crop: Image.Image, matte: str, depth: int) -> Image.Image:
    """Dissolve a base do recorte na cor de fundo — corte reto vira transição."""
    ramp = np.zeros((crop.height, 1), dtype=np.uint8)
    ramp[:, 0] = 255
    tail = np.linspace(255, 0, depth, dtype=np.uint8)
    ramp[crop.height - depth :, 0] = tail[:, None][:, 0]
    mask = Image.fromarray(np.repeat(ramp, crop.width, axis=1), "L")
    return Image.composite(crop, Image.new("RGB", crop.size, matte), mask)


def apply_focus(crop: Image.Image, focus: Focus) -> Image.Image:
    """Assenta o recorte como um cartão arredondado sobre um fundo neutro."""
    if focus.fade_bottom:
        crop = fade_into_matte(crop, focus.matte, focus.fade_bottom)
    inset = focus.inset
    canvas = Image.new("RGB", (crop.width + inset * 2, crop.height + inset * 2), focus.matte)
    mask = rounded_mask(crop.size, focus.radius)

    if focus.shadow:
        blur = max(8, inset // 2)
        shadow = Image.new("L", canvas.size, 0)
        shadow.paste(mask, (inset, inset + blur // 3))
        shadow = shadow.filter(ImageFilter.GaussianBlur(blur))
        canvas = Image.composite(Image.new("RGB", canvas.size, "#15112a"), canvas, shadow.point(lambda v: v * 3 // 5))

    canvas.paste(crop, (inset, inset), mask)
    return canvas


def build_shot(shot: Shot) -> dict:
    src = ROOT / shot.src
    image = Image.open(src).convert("RGB")
    if shot.patches:
        image = apply_patches(image, shot.patches)
    box = resolve_box(shot, src, image.size)
    crop = image.crop(box)

    if shot.focus:
        crop = apply_focus(crop, shot.focus)

    if crop.width > shot.max_width:
        ratio = shot.max_width / crop.width
        crop = crop.resize((shot.max_width, round(crop.height * ratio)), Image.LANCZOS)

    dest = OUT_ROOT / shot.out
    dest.parent.mkdir(parents=True, exist_ok=True)
    crop.save(dest, quality=shot.quality, optimize=True, progressive=True)

    return {
        "out": shot.out,
        "box": list(box),
        "size": crop.size,
        "kb": dest.stat().st_size // 1024,
        "note": shot.note,
    }


# --------------------------------------------------------------------------- #
# CLI
# --------------------------------------------------------------------------- #
def load_manifest(path: Path) -> list[Shot]:
    shots = []
    for raw in json.loads(path.read_text()):
        focus = raw.pop("focus", None)
        patches = [Patch(**p) for p in raw.pop("patches", [])]
        shots.append(
            Shot(**raw, focus=Focus(**focus) if isinstance(focus, dict) else None, patches=patches)
        )
    return shots


def cmd_detect(paths: list[str]) -> None:
    for p in paths:
        src = Path(p)
        w, h = Image.open(src).size
        x0, y0, x1, y1 = detect_panel(src)
        cover = (x1 - x0) * (y1 - y0) / (w * h)
        print(f"{src.name}\n  {w}x{h} -> [{x0}, {y0}, {x1}, {y1}]  ({x1-x0}x{y1-y0}, {cover:.0%} da tela)")


def cmd_build(manifest: str) -> None:
    results = [build_shot(s) for s in load_manifest(Path(manifest))]
    for r in results:
        print(f"{r['out']:<52} {r['size'][0]}x{r['size'][1]:<5} {r['kb']:>4}KB  {r['note']}")
    print(f"\n{len(results)} recortes -> public/screenshots/")


def main() -> int:
    if len(sys.argv) < 3:
        print(__doc__)
        return 1
    cmd, args = sys.argv[1], sys.argv[2:]
    if cmd == "detect":
        cmd_detect(args)
    elif cmd == "build":
        cmd_build(args[0])
    else:
        print(f"comando desconhecido: {cmd}")
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
