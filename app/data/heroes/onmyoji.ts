import type { HeroRecord } from "../types";

export const onmyoji: HeroRecord = {
  slug: "onmyoji",
  name: "Onmyoji",
  className: "Suporte",
  role: "Cura / escudo / buffs e debuffs",
  summary: "Suporte de sustentação que mantém formações de invocação vivas e pode espalhar seus efeitos para múltiplos alvos.",
  fieldNote: "Nas runs documentadas, seu dano pessoal foi baixo porque a contribuição principal veio de cura, escudos, mitigação e Attack Speed.",
  levelSkills: [
    { name: "Yang · Growth", description: "O efeito de cura do círculo mágico é aprimorado.", source: "Painel de blessings em run." },
    { name: "Yang · Block", description: "O dano recebido pelos aliados dentro do círculo é reduzido.", source: "Painel de blessings em run." },
    { name: "Yang · Rapid", description: "O tempo de recarga das habilidades dos aliados dentro do círculo é acelerado.", source: "Painel de blessings em run." },
    { name: "Yang · Protection", description: "Aliados dentro do círculo recebem escudos continuamente.", source: "Painel de blessings em run." },
    { name: "Yang · Healing", description: "Enquanto os aliados permanecem dentro do círculo, o efeito de cura continua aumentando.", source: "Painel de blessings em run." },
    { name: "Yin · Easily Damaged", description: "Inimigos dentro do círculo recebem mais dano.", source: "Painel de blessings em run." },
    { name: "Yin · Blinding", description: "A taxa de acerto dos inimigos dentro do círculo é reduzida.", source: "Painel de blessings em run." },
    { name: "Yin · Revenge", description: "Quando inimigos dentro do círculo atacam, recebem dano de contra-ataque.", source: "Painel de blessings em run." },
    { name: "Yin · Evil Retribution", description: "Quando um inimigo morre dentro do círculo, explode e causa dano aos inimigos próximos.", source: "Painel de blessings em run." },
    { name: "The World Is Infinite (dourada)", description: "Expande o alcance do círculo mágico de Yin e Yang.", source: "Painel de blessings em run." },
  ],
  builds: [
    {
      name: "Proteção ampliada",
      status: "confirmada",
      summary: "Alterna entre ampliar a área defensiva e espalhar buffs e debuffs, conforme a formação da fase.",
      priorities: ["The World Is Infinite", "Yin and Yang Twins", "Cura crescente", "Escudo contínuo", "Redução de dano"],
    },
  ],
  synergies: ["Sword Demon", "Necromancer Apprentice", "Composições com muitas unidades agrupadas"],
  evidence: ["Duas runs completas do andar 15", "Painéis de blessings em dungeon e co-op (22-23 ago.)"],
  evidenceImages: [
    { src: "/screenshots/runs/summon-army-onmyoji.jpg", alt: "Árvore defensiva do Onmyoji" },
    { src: "/screenshots/onmyoji/blessings-level-10.jpg", alt: "Painel com Yang Block, Yang Rapid, Yang Protection e Yin Blinding" },
    { src: "/screenshots/onmyoji/blessings-coop.jpg", alt: "Painel em co-op com Yin Evil Retribution e Yin Revenge" },
  ],
  pending: [
    "Confirmar valores e duração dos buffs",
    "Localizar Yin and Yang Twins no painel (citada nas runs, ainda sem texto transcrito)",
    "Separar as duas variantes de build em árvores completas",
  ],
};
