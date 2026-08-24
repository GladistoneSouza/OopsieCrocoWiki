import type { HeroRecord } from "../types";

export const mayaNecromancerApprentice: HeroRecord = {
  slug: "maya-necromancer-apprentice",
  name: "Maya",
  aliases: ["Necromancer Apprentice", "Necromancer", "Summoner roxa"],
  className: "Summon",
  rarity: "SR",
  role: "Exército de esqueletos / aggro / dano constante",
  summary: "Invocadora SR que cria uma linha de corpos substituíveis, recupera mana ao invocar e escala os esqueletos até Skeleton King.",
  fieldNote: "Nível 15 confirmado. Nesse breakpoint, concede +4% de dano aos personagens da profissão Summon.",
  stats: ["Nível observado: 15", "Snapshot anterior no nível 14: poder 13.046", "Fragmentos observados: 11/60"],
  levelSkills: [
    { name: "Nível 3 — Skeleton Enhancement", description: "Começa a batalha com a melhoria de Skeleton Warrior obtida." },
    { name: "Nível 5 — explosão ao morrer", description: "Esqueletos causam dano em área quando morrem." },
    { name: "Nível 8 — Sea of Remains", description: "Começa a batalha com a Blessing de quantidade de summons obtida." },
    { name: "Nível 10 — Lifesteal", description: "Skeleton Soldiers passam a recuperar vida ao atacar." },
    { name: "Nível 12 — Blessing adicional", description: "Ganha uma Blessing adicional depois de selecionar uma Ultimate Skill." },
    { name: "Nível 15 — bônus de profissão", description: "Aumenta em 4% o dano dos personagens da profissão Summon." },
  ],
  builds: [
    {
      name: "Fábrica de Skeleton Kings",
      status: "confirmada",
      summary: "Maximiza quantidade, evolução, reposição e permanência das unidades invocadas.",
      priorities: ["Skeleton Strengthening", "Sea of Dead Bodies", "Dead Recharge", "Skeleton Resurrection", "Skeleton Advanced", "Scourge of the Undead"],
    },
    {
      name: "Rage of the Dead",
      status: "em teste",
      summary: "Sacrifica HP dos esqueletos para aumentar fortemente o ataque; promissora contra boss quando a reposição é rápida.",
      priorities: ["Rage of the Dead", "Dead Recharge", "Sea of Dead Bodies", "Skeleton Advanced"],
    },
  ],
  synergies: ["Sakura acelera novas invocações com Yang: Rapid", "Corpos descartáveis desviam ataques do frontline e da retaguarda", "Ressurreição e duração dobrada reduzem o custo prático das mortes"],
  evidence: ["Ficha no nível 14", "Composição mostrando Maya no nível 15 e 11/60 fragmentos", "Progressão permanente dos níveis 3, 5, 8, 10, 12 e 15", "Build completa registrada numa run"],
  pending: ["Comparar o dano total do tornado/Wild com Rage of the Dead", "Confirmar se efeitos globais de contra-ataque também afetam esqueletos", "Registrar nomes oficiais de todas as Blessings pelo Bestiary"],
};
