import type { HeroRecord } from "../types";

export const redQueen: HeroRecord = {
  slug: "red-queen",
  name: "Livia · Flameveil",
  aliases: ["Red Queen", "SP Red Queen"],
  className: "Mago",
  rarity: "SP",
  role: "Maga de fogo / conjuração repetida",
  summary:
    "Maga SP de fogo: talentos iniciais em torno de Wind Flame · Hell, Firestorm com chance de conjuração consecutiva e Earth Fire · Penetration.",
  fieldNote: "Apenas a ficha do nível 1 foi documentada; os três talentos visíveis estavam bloqueados.",
  image: "/screenshots/sp-heroes/red-queen-profile.jpg",
  identity: [
    "Título exibido: SP Red Queen",
    "Nome exibido na ficha: Livia · Flameveil",
    "Profissão: Mage",
    "Posição exibida: 8",
  ],
  stats: ["Nível 1: poder 14.279 · ataque 13,04K · HP 159,27K · defesa 5.450 · Dano Crítico global +1,6%"],
  levelSkills: [
    { name: "Nível 3 — Wind Flame · Hell", description: "Começa a batalha com Wind Flame · Hell obtido.", source: "Texto confirmado na ficha; nível bloqueado." },
    { name: "Nível 5 — Firestorm consecutivo", description: "Firestorm tem chance de ser conjurado consecutivamente.", source: "Texto confirmado na ficha; nível bloqueado." },
    { name: "Nível 8 — Earth Fire · Penetration", description: "Começa a batalha com Earth Fire · Penetration obtido.", source: "Texto confirmado na ficha; nível bloqueado." },
  ],
  builds: [],
  synergies: [],
  evidence: ["Ficha SP Red Queen no nível 1 (22 ago. 2026)"],
  evidenceImages: [{ src: "/screenshots/sp-heroes/red-queen-profile.jpg", caption: "Ficha SP Red Queen — Livia · Flameveil no nível 1" }],
  pending: ["Documentar Firestorm e o Blessing Bestiary", "Registrar os desbloqueios dos níveis 10+"],
};
