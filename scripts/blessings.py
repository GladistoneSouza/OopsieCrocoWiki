#!/usr/bin/env python3
"""Corta as cartas de bencao de um painel do Blessing Bestiary.

O painel e uma grade de 2 colunas com passo fixo. As coordenadas abaixo sao
fracoes da imagem, medidas nos paineis ja publicados em public/screenshots.

Uso:
  python3 scripts/blessings.py <painel.jpg> <destino/> <prefixo> [linhas]
"""
from __future__ import annotations

import sys
from pathlib import Path

from PIL import Image

# Fracoes medidas no painel de 720x1600 publicado (catwoman/bestiary-hunt-1).
COL_X = (0.139, 0.517)     # inicio das duas colunas
CARD_W = 0.347             # largura da carta
ROW_Y0 = 0.3950            # topo da primeira linha, 2px acima da borda
ROW_PITCH = 0.1538         # distancia entre linhas
# A carta tem um losango que pende abaixo do corpo. Cortar na borda do corpo
# decepa esse losango e, nas cartas de texto longo, a ultima linha.
CARD_H = 0.1425            # corpo + losango


def complete(card: Image.Image) -> bool:
    """Carta inteira tem o corpo claro ate embaixo; a cortada mostra o fundo escuro.

    A ultima linha de um painel quase sempre aparece pela metade, e um recorte
    desses so entrega o icone sem o texto.
    """
    grey = card.convert("L")
    w, h = grey.size
    base = grey.crop((int(w * 0.2), int(h * 0.78), int(w * 0.8), h))
    histograma = base.histogram()
    total = sum(histograma)
    media = sum(i * n for i, n in enumerate(histograma)) / total
    return media > 150


def cut(panel: Path, out_dir: Path, prefix: str, rows: int = 3) -> list[Path]:
    image = Image.open(panel).convert("RGB")
    w, h = image.size
    out_dir.mkdir(parents=True, exist_ok=True)
    written: list[Path] = []
    for row in range(rows):
        top = ROW_Y0 + row * ROW_PITCH
        if top + CARD_H > 0.99:
            break
        for col, x0 in enumerate(COL_X):
            box = (int(w * x0), int(h * top), int(w * (x0 + CARD_W)), int(h * (top + CARD_H)))
            card = image.crop(box)
            if not complete(card):
                continue
            target = out_dir / f"{prefix}-{row * 2 + col + 1}.jpg"
            card.save(target, quality=88)
            written.append(target)
    return written


if __name__ == "__main__":
    panel = Path(sys.argv[1])
    out_dir = Path(sys.argv[2])
    prefix = sys.argv[3]
    rows = int(sys.argv[4]) if len(sys.argv) > 4 else 3
    for path in cut(panel, out_dir, prefix, rows):
        print(f"  {path}")
