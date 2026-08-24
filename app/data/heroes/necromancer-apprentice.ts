import type { HeroRecord } from "../types";

export const necromancerApprentice: HeroRecord = {
  slug: "necromancer-apprentice", name: "Necromancer Apprentice", aliases: ["Necromancer", "Necro"], className: "Summon", role: "Invocações / controle de campo",
  summary: "Invocador que adiciona esqueletos, ressurreição e ataques em área, aumentando o número de unidades presentes no campo.",
  fieldNote: "Mesmo no nível 5 e muito abaixo dos carregadores, alcançou 1,21M no andar 15 e ofereceu utilidade por meio das invocações.",
  levelSkills: [],
  builds: [{ name: "Exército de esqueletos", status: "confirmada", summary: "Prioriza quantidade e qualidade dos esqueletos, ressurreição e recuperação de mana ao invocar.", priorities: ["Esqueleto adicional", "Guerreiro esqueleto aprimorado", "Ressurreição", "Redemoinho em área", "Mana ao invocar"] }],
  synergies: ["Sword Demon", "Onmyoji", "Efeitos que escalam com o número de invocações"],
  evidence: ["Run andar 15: 1,21M no nível 5"], evidenceImages: [{ src: "/screenshots/runs/summon-army-necromancer.jpg", alt: "Árvore do Necromancer Apprentice no andar 15" }],
  pending: ["Registrar nomes oficiais das habilidades", "Confirmar classe e raridade", "Testar o desempenho em nível equivalente aos demais heróis"],
};
