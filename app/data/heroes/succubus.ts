import type { HeroRecord } from "../types";

export const succubus: HeroRecord = {
  slug: "succubus",
  name: "Selina · Frostcharm",
  aliases: ["Succubus", "SP Succubus"],
  className: "Control",
  rarity: "SP",
  role: "Controle / charm e stun",
  summary:
    "Controladora SP baseada em Charm: encanta inimigos com ataques básicos e pode converter o fim do encanto em atordoamento.",
  fieldNote:
    "Personagem ainda bloqueada na conta observada — a ficha lista os talentos, mas nenhum valor prático foi testado.",
  image: "/screenshots/sp-heroes/succubus-profile.jpg",
  identity: [
    "Título exibido: SP Succubus",
    "Nome exibido na ficha: Selina · Frostcharm",
    "Profissão: Control",
    "Posição exibida: 4",
    "Status na conta observada: bloqueada (Locked)",
  ],
  stats: ["Prévia da ficha bloqueada: poder 14.287 · ataque 11,86K · HP 176,97K · defesa 6.057"],
  levelSkills: [
    { name: "Nível 3 — Charm · Continuation", description: "Começa a batalha com Charm · Continuation obtido.", source: "Texto confirmado na ficha; herói bloqueado." },
    { name: "Nível 5 — charm no ataque básico", description: "Ataques básicos têm chance de encantar (charm) o inimigo.", source: "Texto confirmado na ficha; herói bloqueado." },
    { name: "Nível 8 — Heartbreak · Echo", description: "Começa a batalha com Heartbreak · Echo obtido.", source: "Texto confirmado na ficha; herói bloqueado." },
    { name: "Enraptured", description: "Depois que o charm termina, tem 30% de chance de atordoar adicionalmente por 2 segundos.", source: "Texto confirmado na ficha; herói bloqueado." },
  ],
  builds: [],
  synergies: ["Hipótese — candidata natural à quinta vaga de Controller do Núcleo 4+1, competindo com a Karin"],
  evidence: ["Prévia da ficha SP Succubus bloqueada (22 ago. 2026)"],
  evidenceImages: [{ src: "/screenshots/sp-heroes/succubus-profile.jpg", caption: "Prévia da ficha SP Succubus — Selina · Frostcharm (bloqueada)" }],
  pending: ["Desbloquear a personagem e confirmar os talentos", "Medir duração do charm e interação com bosses"],
};
