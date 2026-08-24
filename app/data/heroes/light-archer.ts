import type { HeroRecord } from "../types";

export const lightArcher: HeroRecord = {
  slug: "light-archer",
  name: "Veliana Purple Flame",
  aliases: ["Light Archer", "SP Light Archer"],
  className: "Arqueiro",
  rarity: "SP",
  role: "Arqueira / velocidade de ataque",
  summary:
    "Arqueira SP com curva de velocidade de ataque: começa rápida e desacelera com o tempo, apoiada por Demon-Slaying Arrow · Speed.",
  fieldNote:
    "Apenas a ficha do nível 1 foi documentada. O talento do nível 8 aparece cortado na tela e ainda não foi identificado.",
  image: "/screenshots/sp-heroes/light-archer-profile.jpg",
  identity: [
    "Título exibido: SP Light Archer",
    "Nome exibido na ficha: Veliana Purple Flame",
    "Profissão: Archer",
    "Posição exibida: 5",
  ],
  stats: ["Nível 1: poder 14.279 · ataque 13,04K · HP 159,27K · defesa 5.450 · Dano Crítico global +1,6%"],
  levelSkills: [
    { name: "Nível 3 — Demon-Slaying Arrow · Speed", description: "Começa a batalha com Demon-Slaying Arrow · Speed obtido.", source: "Texto confirmado na ficha; nível bloqueado." },
    { name: "Nível 5 — curva de velocidade", description: "A velocidade de ataque aumenta no início da batalha e diminui depois de um período.", source: "Texto confirmado na ficha; nível bloqueado." },
    { name: "Nível 8 — [não identificado]", description: "O texto do talento está cortado na captura.", source: "Ilegível no print disponível." },
  ],
  builds: [],
  synergies: [],
  evidence: ["Ficha SP Light Archer no nível 1 (22 ago. 2026)"],
  evidenceImages: [{ src: "/screenshots/sp-heroes/light-archer-profile.jpg", caption: "Ficha SP Light Archer — Veliana Purple Flame no nível 1" }],
  pending: ["Recuperar o talento do nível 8", "Documentar o Blessing Bestiary"],
};
