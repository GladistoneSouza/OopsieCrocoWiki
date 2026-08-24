import type { HeroRecord } from "../types";

export const tidecaller: HeroRecord = {
  slug: "tidecaller",
  name: "Ice Blue Snowbud",
  aliases: ["Tidecaller", "SP Tidecaller"],
  className: "Summon",
  rarity: "SP",
  role: "Invocação / economia de mana",
  summary:
    "Invocadora SP baseada em água: os primeiros talentos giram em torno de Hydro Arrow Mastery, recuperação de mana por mortes de unidades e Tidal Counterstrike.",
  fieldNote:
    "Apenas a ficha do nível 1 foi documentada. Os três talentos visíveis estavam bloqueados; nenhum tooltip foi aberto ainda.",
  image: "/screenshots/sp-heroes/tidecaller-profile.jpg",
  identity: [
    "Título exibido: SP Tidecaller",
    "Nome exibido na ficha: Ice Blue Snowbud",
    "Profissão: Summon",
    "Posição exibida: 4",
  ],
  stats: ["Nível 1: poder 14.279 · ataque 13,04K · HP 159,27K · defesa 5.450 · Dano Crítico global +1,6%"],
  levelSkills: [
    { name: "Nível 3 — Hydro Arrow Mastery", description: "Começa a batalha com Hydro Arrow Mastery obtido.", source: "Texto confirmado na ficha; nível bloqueado." },
    { name: "Nível 5 — mana por mortes", description: "A cada 1 unidade que morre, uma pequena quantidade de mana é restaurada.", source: "Texto confirmado na ficha; nível bloqueado." },
    { name: "Nível 8 — Tidal Counterstrike", description: "Começa a batalha com Tidal Counterstrike obtido.", source: "Texto confirmado na ficha; nível bloqueado." },
  ],
  builds: [],
  synergies: ["Hipótese — a recuperação de mana por mortes tende a combinar com exércitos de summons descartáveis (Maya, Necromancer)"],
  evidence: ["Ficha SP Tidecaller no nível 1 (22 ago. 2026)"],
  evidenceImages: [{ src: "/screenshots/sp-heroes/tidecaller-profile.jpg", caption: "Ficha SP Tidecaller — Ice Blue Snowbud no nível 1" }],
  pending: [
    "Abrir os tooltips de Hydro Arrow Mastery e Tidal Counterstrike",
    "Documentar o Blessing Bestiary",
    "Registrar os desbloqueios dos níveis 10+",
  ],
};
