import type { HeroRecord } from "../types";

export const onmyoji: HeroRecord = {
  slug: "onmyoji",
  name: "Sakura",
  aliases: ["Onmyoji", "SSR Onmyoji", "Healer dourada"],
  className: "Support",
  rarity: "SSR",
  role: "Cura / escudo / buffs e debuffs",
  summary:
    "Support SSR do círculo Yin-Yang: mantém formações vivas com cura, escudos e aceleração, enquanto enfraquece os inimigos dentro do círculo.",
  fieldNote:
    "Identidade consolidada em 21 ago.: a ficha exibe SSR Onmyoji com o nome Sakura — a wiki tratava “Sakura” e “Onmyoji” como personagens separados e as duas fichas foram fundidas. Nas runs documentadas, o dano pessoal é baixo porque a contribuição principal vem de cura, escudos, mitigação e Attack Speed.",
  identity: [
    "Título exibido: SSR Onmyoji",
    "Nome exibido na ficha: Sakura",
    "Profissão: Support",
    "Alcance/posição exibida: 4",
  ],
  stats: [
    "Nível 15: poder 20.184 · ataque 16,69K · HP 250,9K · defesa 8.587 · Dano Crítico global +21,0% · fragmentos 7/60",
    "Snapshot no nível 9 (30 jul.): poder 8.359 · ataque 6.998 · HP 103,6K · defesa 3.481 · Dano Crítico global +12,6%",
  ],
  levelSkills: [
    {
      name: "Ultimate — Yin-Yang Magic Array",
      description: "Invoca o círculo mágico Yin-Yang, que cura continuamente os aliados dentro do alcance e reduz o Attack Speed dos inimigos.",
      source: "Tooltip da ultimate na ficha.",
    },
    { name: "Nível 8 — Shadow · Fragile", description: "Começa a batalha com Shadow · Fragile obtido.", source: "Texto confirmado na ficha do nível 9." },
    {
      name: "Nível 10 — Heaven and Earth Infinite / Yin · Yang Twins",
      description: "Na ficha do nível 9: Heaven and Earth Infinite limpa debuffs dos aliados dentro da formação ao ativar; Yin · Yang Twins torna aliados imunes a controle.",
      source: "Texto confirmado na ficha (nível bloqueado na época).",
    },
    { name: "Nível 15 — Yin Yang", description: "Aumenta o dano dos aliados.", source: "Texto confirmado na ficha do nível 15." },
    {
      name: "Nível 20 — Heaven and Earth Infinite / Yin · Yang Twins",
      description: "Na ficha do nível 15: Heaven and Earth Infinite aumenta a duração; Yin · Yang Twins faz ataques aliados causarem dano extra. Os textos divergem dos exibidos para o nível 10 — provável evolução por nível ou tradução inconsistente.",
      source: "Texto confirmado na ficha; nível ainda bloqueado.",
    },
    { name: "Yang · Growth", description: "O efeito de cura do círculo mágico é aprimorado.", source: "Painel de blessings em run." },
    { name: "Yang · Block", description: "O dano recebido pelos aliados dentro do círculo é reduzido.", source: "Painel de blessings em run." },
    { name: "Yang · Rapid", description: "O tempo de recarga das habilidades dos aliados dentro do círculo é acelerado. É o núcleo mais universal da build observada.", source: "Painel de blessings em run." },
    { name: "Yang · Protection", description: "Aliados dentro do círculo recebem escudos continuamente.", source: "Painel de blessings em run." },
    { name: "Yang · Healing", description: "Enquanto os aliados permanecem dentro do círculo, o efeito de cura continua aumentando.", source: "Painel de blessings em run." },
    { name: "Yin · Easily Damaged", description: "Inimigos dentro do círculo recebem mais dano.", source: "Painel de blessings em run." },
    { name: "Yin · Weakness", description: "Deixa inimigos no círculo mais vulneráveis a acertos críticos.", source: "Painel de blessings em run." },
    { name: "Yin · Blinding", description: "A taxa de acerto dos inimigos dentro do círculo é reduzida.", source: "Painel de blessings em run." },
    { name: "Yin · Revenge", description: "Quando inimigos dentro do círculo atacam, recebem dano de contra-ataque.", source: "Painel de blessings em run." },
    { name: "Yin · Evil Retribution", description: "Quando um inimigo morre dentro do círculo, explode e causa dano aos inimigos próximos.", source: "Painel de blessings em run." },
    { name: "The World Is Infinite (dourada)", description: "Expande o alcance do círculo mágico de Yin e Yang.", source: "Painel de blessings em run." },
    { name: "Yin and Yang Twins (dourada)", description: "Ao liberar o círculo, aplica buffs a 2 aliados adicionais e debuffs a 2 inimigos adicionais.", source: "Painel de blessings em run (custo 5)." },
  ],
  builds: [
    {
      name: "Aceleração ofensiva",
      status: "confirmada",
      summary: "Usada quando o time já sobrevive e quer acelerar todos os motores de dano.",
      priorities: ["Yang · Rapid", "Yin · Weakness", "Yin · Easily Damaged", "The World Is Infinite"],
    },
    {
      name: "Sustentação adaptativa",
      status: "confirmada",
      summary: "Mantém Yang · Rapid e escolhe cura, escudo ou redução de dano conforme a pressão da fase.",
      priorities: ["Yang · Rapid", "Yang · Growth", "Yang · Protection", "Yang · Block", "The World Is Infinite"],
    },
    {
      name: "Proteção ampliada",
      status: "confirmada",
      summary: "Alterna entre ampliar a área defensiva e espalhar buffs e debuffs, conforme a formação da fase.",
      priorities: ["The World Is Infinite", "Yin and Yang Twins", "Yang · Healing", "Yang · Protection", "Yang · Block"],
    },
  ],
  synergies: [
    "Acelera Blood/Bite do Shadow Wolf",
    "Aumenta a frequência de Blade Storm do Kazres",
    "Acelera a reposição dos esqueletos da Maya",
    "Composições com muitas unidades agrupadas dentro do círculo",
    "O contra-ataque global pode escalar com summons, mas isso ainda precisa de teste",
  ],
  evidence: [
    "Fichas SSR Onmyoji — Sakura nos níveis 9 (30 jul.) e 15 (21 ago.)",
    "Tooltip da ultimate Yin-Yang Magic Array",
    "Painéis de blessings em dungeon e co-op (jul.-ago.)",
    "Duas runs completas do andar 15",
  ],
  evidenceImages: [
    { src: "/screenshots/runs/summon-army-onmyoji.jpg", alt: "Árvore defensiva do Onmyoji" },
    { src: "/screenshots/onmyoji/blessings-level-10.jpg", alt: "Painel com Yang Block, Yang Rapid, Yang Protection e Yin Blinding" },
    { src: "/screenshots/onmyoji/blessings-coop.jpg", alt: "Painel em co-op com Yin Evil Retribution e Yin Revenge" },
  ],
  pending: [
    "Esclarecer os textos divergentes de Heaven and Earth Infinite e Yin · Yang Twins entre os níveis 10 e 20",
    "Confirmar valores e duração dos buffs do círculo",
    "Confirmar se existe sobrenome além de Sakura na ficha",
  ],
};
