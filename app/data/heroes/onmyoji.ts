import type { HeroRecord } from "../types";

export const onmyoji: HeroRecord = {
  slug: "onmyoji", name: "Onmyoji", className: "Suporte", role: "Cura / escudo / buffs e debuffs",
  summary: "Suporte de sustentação que mantém formações de invocação vivas e pode espalhar seus efeitos para múltiplos alvos.",
  fieldNote: "Nas runs documentadas, seu dano pessoal foi baixo porque a contribuição principal veio de cura, escudos, mitigação e Attack Speed.",
  levelSkills: [],
  builds: [{ name: "Proteção ampliada", status: "confirmada", summary: "Alterna entre ampliar a área defensiva e espalhar buffs e debuffs, conforme a formação da fase.", priorities: ["The World Is Infinite", "Yin and Yang Twins", "Cura crescente", "Escudo contínuo", "Redução de dano"] }],
  synergies: ["Sword Demon", "Necromancer Apprentice", "Composições com muitas unidades agrupadas"],
  evidence: ["Duas runs completas do andar 15"], evidenceImages: [{ src: "/screenshots/runs/summon-army-onmyoji.jpg", alt: "Árvore defensiva do Onmyoji" }],
  pending: ["Registrar os nomes oficiais de toda a árvore", "Confirmar valores e duração dos buffs", "Separar as duas variantes de build em árvores completas"],
};
