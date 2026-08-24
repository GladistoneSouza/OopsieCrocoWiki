import type { HeroRecord } from "../types";

export const bountyHunter: HeroRecord = {
  slug: "bounty-hunter",
  name: "Bounty Hunter",
  aliases: ["Pistoleira"],
  className: "Arqueiro",
  role: "DPS por munições",
  summary: "Atiradora baseada em munições especiais, velocidade de ataque, acúmulo de ataque e Barrage.",
  fieldNote: "Foi MVP numa run documentada da dificuldade 5, com 4,31M, e depois alcançou 17,58M no andar 15 mesmo sob efeitos que neutralizavam atiradores.",
  levelSkills: [],
  builds: [
    {
      name: "Barrage de munições",
      status: "confirmada",
      summary: "Converte frequência de ataques e variedade de munições em escala de dano.",
      priorities: ["Ammunition Expert", "Gunsling Loading", "Steel Core", "Mercury ou Tear", "Double Shot", "Barrage Time +1"],
    },
  ],
  synergies: ["Attack Speed", "Efeitos que aumentam o número de balas", "Boss vulnerável a Arqueiro"],
  evidence: ["Run dificuldade 5: MVP com 4,31M", "Run andar 15: 17,58M sob counter de atirador", "Árvores exibidas durante as runs"],
  evidenceImages: [
    { src: "/screenshots/runs/marksman-counter-bounty-hunter.jpg", alt: "Build da Bounty Hunter no andar 15" },
    { src: "/screenshots/runs/marksman-counter-result.jpg", alt: "Bounty Hunter encerra o andar 15 com 17,58M de dano" },
  ],
  pending: ["Catalogar todas as munições", "Confirmar o nome da habilidade de acúmulo de ataque", "Identificar o inimigo responsável por confiscar munição de Marksman"],
};
