import type { HeroRecord } from "../types";

export const catwoman: HeroRecord = {
  slug: "catwoman",
  name: "Mitia",
  aliases: ["Catwoman", "SP Catwoman"],
  className: "Assassino",
  rarity: "SP",
  role: "Assassina / snowball de dano",
  summary:
    "Assassina SP com talentos de caça: coleciona presas e converte abates em dano permanente crescente.",
  fieldNote:
    "Ficha documentada no nível 3. O talento do nível 5 descreve aumento permanente de dano por abate — potencial de snowball em runs longas, ainda sem teste prático.",
  image: "/screenshots/sp-heroes/catwoman-profile.jpg",
  identity: [
    "Título exibido: SP Catwoman",
    "Nome exibido na ficha: Mitia",
    "Profissão: Assassin",
    "Posição exibida: 1",
  ],
  stats: ["Nível 3: poder 16.374 · ataque 16,32K · HP 162,39K · defesa 5.558 · Dano Crítico global +4,8%"],
  levelSkills: [
    { name: "Nível 3 — Prey Collection", description: "Começa a batalha com Prey Collection obtido.", source: "Texto confirmado na ficha; talento desbloqueado." },
    { name: "Nível 5 — dano permanente por abate", description: "Depois de matar um inimigo, o próprio dano aumenta permanentemente.", source: "Texto confirmado na ficha; nível bloqueado." },
    { name: "Nível 8 — Devouring Prey", description: "Começa a batalha com Devouring Prey obtido.", source: "Texto confirmado na ficha; nível bloqueado." },
  ],
  builds: [],
  synergies: ["Hipótese — fases com muitas ondas de inimigos fracos alimentam o acúmulo permanente de dano"],
  evidence: ["Ficha SP Catwoman no nível 3 (22 ago. 2026)"],
  evidenceImages: [{ src: "/screenshots/sp-heroes/catwoman-profile.jpg", caption: "Ficha SP Catwoman — Mitia no nível 3" }],
  pending: [
    "Confirmar o valor do aumento permanente por abate",
    "Documentar o Blessing Bestiary",
    "Comparar com Shadow Wolf como carry de execução",
  ],
};
