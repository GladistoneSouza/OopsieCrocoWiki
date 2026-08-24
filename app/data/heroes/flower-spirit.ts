import type { HeroRecord } from "../types";

export const flowerSpirit: HeroRecord = {
  slug: "flower-spirit",
  name: "Lia",
  aliases: ["Flower Spirit", "SP Flower Spirit"],
  className: "Suporte",
  rarity: "SP",
  role: "Suporte / flores de campo",
  summary:
    "Suporte SP cujos talentos iniciais giram em torno de Flower Spirit Bloom e Tenacious Flower Leaf.",
  fieldNote:
    "Ficha documentada no nível 3, com o talento do nível 3 já desbloqueado. O texto do talento do nível 5 aparece parcialmente cortado na tela.",
  image: "/screenshots/sp-heroes/flower-spirit-profile.jpg",
  identity: [
    "Título exibido: SP Flower Spirit",
    "Nome exibido na ficha: Lia",
    "Profissão: Support",
    "Posição exibida: 4",
  ],
  stats: ["Nível 3: poder 16.388 · ataque 13,6K · HP 202,99K · defesa 6.948 · Dano Crítico global +4,8%"],
  levelSkills: [
    { name: "Nível 3 — Flower Spirit Bloom", description: "Começa a batalha com Flower Spirit Bloom obtido.", source: "Texto confirmado na ficha; talento desbloqueado." },
    { name: "Nível 5 — floração adicional", description: "…floresce naturalmente e tem chance de ser liberada adicionalmente. O início do texto está cortado na tela.", source: "Texto parcial na ficha; nível bloqueado." },
    { name: "Nível 8 — Tenacious Flower Leaf", description: "Começa a batalha com Tenacious Flower Leaf obtido.", source: "Texto confirmado na ficha; nível bloqueado." },
  ],
  builds: [],
  synergies: [],
  evidence: ["Ficha SP Flower Spirit no nível 3 (22 ago. 2026)"],
  evidenceImages: [{ src: "/screenshots/sp-heroes/flower-spirit-profile.jpg", caption: "Ficha SP Flower Spirit — Lia no nível 3" }],
  pending: [
    "Recuperar o texto completo do talento do nível 5",
    "Documentar o Blessing Bestiary e o papel prático em run",
  ],
};
