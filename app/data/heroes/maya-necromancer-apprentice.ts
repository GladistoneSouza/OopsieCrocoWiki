import type { HeroRecord } from "../types";

export const mayaNecromancerApprentice: HeroRecord = {
  slug: "maya-necromancer-apprentice",
  name: "Maya Spirit Vine",
  aliases: ["Maya", "Necromancer Apprentice", "Necromancer", "Necro", "Summon roxa"],
  className: "Summon",
  rarity: "SR",
  role: "Exército de esqueletos / aggro / dano constante",
  summary:
    "Invocadora SR que cria uma linha de corpos substituíveis, recupera mana ao invocar e escala os esqueletos até Skeleton King.",
  fieldNote:
    "Identidade consolidada: a ficha exibe SR Necromancer Apprentice com o nome Maya Spirit Vine — a wiki tratava “Maya” e “Necromancer Apprentice” como personagens separados e as fichas foram fundidas. Uma run antiga registrou 1,21M no andar 15 com ela ainda no nível 5, sustentando o time com invocações.",
  identity: [
    "Título exibido: SR Necromancer Apprentice",
    "Nome exibido na ficha: Maya Spirit Vine",
    "Profissão: Summon",
    "Alcance/posição exibida: 4",
  ],
  stats: [
    "Nível 15: poder 18.080 · ataque 16,51K · HP 201,71K · defesa 6.903 · Dano Crítico global +18,0% · fragmentos 32/60",
    "Snapshot no nível 14 (12 ago.): poder 13.046 · ataque 11,71K · HP 147,94K · defesa 5.105 · Dano Crítico global +16,8% · fragmentos 11/30",
  ],
  levelSkills: [
    { name: "Nível 3 — Skeleton Enhancement", description: "Começa a batalha com a melhoria de Skeleton Warrior obtida.", source: "Texto confirmado na ficha." },
    { name: "Nível 5 — explosão ao morrer", description: "Esqueletos causam dano em área quando morrem.", source: "Texto confirmado na ficha." },
    { name: "Nível 8 — Sea of Remains", description: "Começa a batalha com a Blessing de quantidade de summons obtida.", source: "Texto confirmado na ficha." },
    { name: "Nível 10 — Undead Scourge", description: "Aumenta o lifesteal dos Skeleton Soldiers.", source: "Texto confirmado na ficha." },
    { name: "Nível 12 — Blessing adicional", description: "Ganha uma Blessing adicional depois de selecionar uma Ultimate Skill.", source: "Texto confirmado na ficha." },
    { name: "Níveis 15, 20, 25 e 30 — bônus de profissão", description: "Cada um desses níveis aumenta em 4% o dano dos personagens da profissão Summon.", source: "Escada confirmada na ficha do nível 15." },
    { name: "Habilidade base — Summon Skeleton Warrior", description: "Invoca Skeleton Warriors para a linha de frente.", source: "Carta de escolha em co-op." },
    { name: "Bestiary — Skeleton Strengthening", description: "Fortalece os Skeleton Warriors invocados.", source: "Painel de blessings em run." },
    { name: "Bestiary — Sea of Dead Bodies", description: "Quantidade de esqueletos invocados +1.", source: "Painel de blessings em run." },
    { name: "Bestiary — Dead Recharge", description: "Restaura mana ao invocar.", source: "Painel de blessings em run." },
    { name: "Bestiary — Skeleton Resurrection", description: "Esqueletos têm chance de ressuscitar.", source: "Painel de blessings em run." },
    { name: "Bestiary — Skeleton Advanced", description: "Skeleton Warrior pode evoluir para Skeleton King.", source: "Painel de blessings em run." },
    { name: "Bestiary — Skeleton Power", description: "O ataque dos esqueletos é aumentado.", source: "Painel de blessings em run." },
    { name: "Bestiary — Skeleton War", description: "Quando um esqueleto corpo a corpo ataca, tem chance de liberar um whirlwind em área.", source: "Painel de blessings em run." },
    { name: "Bestiary — Rage of the Dead", description: "Sacrifica HP dos esqueletos para aumentar fortemente o ataque.", source: "Painel de blessings em run." },
    { name: "Bestiary — Corpse Sacrifice", description: "Cura quando um esqueleto morre.", source: "Painel de blessings em run." },
    { name: "Bestiary — Corpse Transfer", description: "Chance de invocar um Skeleton Mage.", source: "Painel de blessings em run." },
    { name: "Bestiary — Scourge of the Undead (dourada)", description: "Ultimate: a duração das invocações é dobrada.", source: "Painel de blessings em run." },
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
  synergies: [
    "Sakura acelera novas invocações com Yang · Rapid",
    "Corpos descartáveis desviam ataques do frontline e da retaguarda",
    "Ressurreição e duração dobrada reduzem o custo prático das mortes",
    "Sword Demon e Onmyoji nas composições de invocação documentadas",
  ],
  evidence: [
    "Fichas SR Necromancer Apprentice — Maya Spirit Vine nos níveis 14 e 15",
    "Progressão permanente dos níveis 3 a 30",
    "Painéis de blessings de esqueleto em múltiplas runs (jul.-ago.)",
    "Run antiga do andar 15: 1,21M ainda no nível 5",
  ],
  evidenceImages: [
    { src: "/screenshots/runs/summon-army-necromancer.jpg", alt: "Árvore do Necromancer Apprentice no andar 15" },
  ],
  pending: [
    "Comparar o dano total do tornado/Wild com Rage of the Dead",
    "Confirmar se efeitos globais de contra-ataque também afetam esqueletos",
    "Capturar o Blessing Bestiary pela tela própria para fixar a lista completa e os textos oficiais",
  ],
};
