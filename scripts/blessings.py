#!/usr/bin/env python3
"""Corta as cartas de bencao de um painel do Blessing Bestiary.

As cartas nao tem todas a mesma altura: as douradas trazem moldura em
zigue-zague e uma coroa embaixo, e ficam mais altas que as cinzas. Por isso o
corte nao usa uma caixa fixa — ele abre uma janela generosa em volta da
posicao esperada, descobre a cor do fundo do painel pelos cantos dessa janela
e devolve o retangulo do que difere desse fundo. Serve para os dois tipos.

Uso:
  python3 scripts/blessings.py <painel.jpg> <destino/> <prefixo> [linhas]
"""
from __future__ import annotations

import sys
from pathlib import Path

import numpy as np
from PIL import Image

COL_X = (0.139, 0.517)     # inicio das duas colunas
CARD_W = 0.347             # largura nominal da carta
ROW_Y0 = 0.395             # topo da primeira linha
ROW_PITCH = 0.1538         # distancia entre linhas
JANELA_H = 0.1640          # janela por linha: cabe a carta mais alta, nao a seguinte
CONTEUDO_FIM = 0.795       # onde o painel deixa de mostrar carta inteira
LIMIAR = 26                # diferenca de cor que conta como "carta"
VAO = 16                   # vao tolerado: pula o zigue-zague da dourada e o rabicho


def bounding_box(window: np.ndarray, fundo: np.ndarray) -> tuple[int, int, int, int] | None:
    """Retangulo do conteudo que difere do fundo do painel.

    O fundo vem do corredor entre as duas colunas, nao dos cantos da janela: a
    carta chega perto das bordas e os cantos caem em cima dela.
    """
    mask = np.abs(window - fundo).sum(axis=2) > LIMIAR
    # O losango que pende sob a carta e estreito: exigir 35% da linha o descarta
    # e o corte decepa o rabicho. Na vertical basta qualquer conteudo.
    linhas = np.where(mask.mean(axis=1) > 0.03)[0]
    colunas = np.where(mask.mean(axis=0) > 0.30)[0]
    if linhas.size < 40 or colunas.size < 40:
        return None
    # Para no primeiro vao de fundo depois do corpo: a janela precisa ser alta o
    # bastante para a carta dourada caber, e sem isso ela alcanca a carta de baixo.
    fim = linhas[0]
    for atual, seguinte in zip(linhas, linhas[1:]):
        if seguinte - atual > VAO:
            break
        fim = seguinte
    else:
        fim = linhas[-1]
    return int(colunas[0]), int(linhas[0]), int(colunas[-1]) + 1, int(fim) + 1


def cut(panel: Path, out_dir: Path, prefix: str, rows: int = 3) -> list[Path]:
    image = Image.open(panel).convert("RGB")
    array = np.asarray(image, dtype=float)
    w, h = image.size
    out_dir.mkdir(parents=True, exist_ok=True)
    written: list[Path] = []
    for row in range(rows):
        topo = ROW_Y0 + row * ROW_PITCH - 0.004
        base = topo + JANELA_H
        # a ultima linha de um painel quase sempre vem cortada pelo print
        if base > CONTEUDO_FIM:
            break
        for col, x0 in enumerate(COL_X):
            janela = (int(w * (x0 - 0.02)), int(h * topo),
                      int(w * (x0 + CARD_W + 0.02)), int(h * base))
            recorte = array[janela[1]:janela[3], janela[0]:janela[2]]
            corredor = array[janela[1]:janela[3], int(w * 0.487):int(w * 0.505)]
            fundo = corredor.reshape(-1, 3).mean(axis=0)
            caixa = bounding_box(recorte, fundo)
            if caixa is None:
                continue
            cx0, cy0, cx1, cy1 = caixa
            card = image.crop((janela[0] + cx0 - 3, janela[1] + cy0 - 3,
                               janela[0] + cx1 + 3, janela[1] + cy1 + 3))
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
