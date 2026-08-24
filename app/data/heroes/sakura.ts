import type { HeroRecord } from "../types";

export const sakura: HeroRecord = {
  slug: "sakura",
  name: "Sakura",
  aliases: ["Healer dourada"],
  className: "Suporte",
  rarity: "SSR",
  role: "Cura e sustentação",
  summary: "Mantém a composição viva durante runs longas e libera escolhas para o carregador principal.",
  fieldNote: "Priest Healing +12,5% foi documentado em gema equipada.",
  levelSkills: [
    { name: "Yang: Growth", description: "Aumenta a cura produzida pelo círculo." },
    { name: "Yin: Easily Damaged", description: "Inimigos dentro do círculo passam a receber mais dano." },
    { name: "Yang: Rapid", description: "Acelera o uso de habilidades dos aliados dentro do círculo; é o núcleo mais universal da build observada." },
    { name: "Yin: Weakness", description: "Deixa inimigos no círculo mais vulneráveis a acertos críticos." },
    { name: "Campo ampliado", description: "Especial que amplia o círculo e distribui seus efeitos em uma área muito maior." },
  ],
  builds: [
    {
      name: "Aceleração ofensiva",
      status: "confirmada",
      summary: "Usada quando o time já sobrevive e quer acelerar todos os motores de dano.",
      priorities: ["Yang: Rapid", "Yin: Weakness", "Yin: Easily Damaged", "Campo ampliado"],
    },
    {
      name: "Sustentação adaptativa",
      status: "confirmada",
      summary: "Mantém Yang: Rapid e escolhe cura, shield ou redução de dano conforme a pressão da fase.",
      priorities: ["Yang: Rapid", "Yang: Growth", "Shield constante", "Redução do dano inimigo", "Campo ampliado"],
    },
  ],
  synergies: ["Acelera Blood/Bite do Shadow Wolf", "Aumenta a frequência de Blade Storm do Kazer’s Darkblade", "Acelera a reposição dos esqueletos da Maya", "O contra-ataque global pode escalar com summons, mas isso ainda precisa de teste"],
  evidence: ["Build fechada numa run de 15 níveis", "Telas de equipamentos e runs compartilhadas"],
  pending: ["Nome oficial completo", "Mapear os breakpoints por nível", "Confirmar se summons recebem o contra-ataque global"],
};
