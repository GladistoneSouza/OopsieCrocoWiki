export const newlyDocumentedEnemies = [
  { name: "Shrinkshell Seaweed", skill: "Seaweed Tangle", effect: "Após cada 4 ataques, paralisa Arqueiros por 3 segundos.", confidence: "confirmada na tela" },
  { name: "Inimigo confiscador de munição", skill: "Confiscating the Marksman's bullets!", effect: "Durante a run, mensagens indicaram confisco ou neutralização das balas de personagens Marksman. O nome do inimigo e a regra completa ainda precisam de ficha própria.", confidence: "observada em run" },
  { name: "Catfish Monster", skill: "Mud Armor", effect: "Começa a batalha com Mud Armor, reduzindo o dano recebido. A armadura desaparece quando o HP cai abaixo de 40%.", confidence: "confirmada na tela" },
  { name: "Hardshell Rhinoceros Beetle", skill: "Iron Steel Shell", effect: "Imune a efeitos de Calamity — counter direto para Sword Demon e Lilith.", confidence: "confirmada na tela" },
] as const;

export type DocumentedBoss = {
  name: string;
  context: string;
  weakness?: string;
  skills: { name: string; text: string }[];
  notes?: string;
  image?: string;
};

export const documentedBosses: DocumentedBoss[] = [
  {
    name: "Land Shark King",
    context: "Boss de dungeon (Level 10 observado)",
    weakness: "Fraqueza: Arqueiro",
    skills: [
      { name: "Charge", text: "Lança uma onda de investida contra o alvo mais distante." },
      { name: "Hardened Hide", text: "Começa a batalha com um escudo que bloqueia 40 instâncias de dano." },
    ],
    image: "/screenshots/enemies/land-shark-king.jpg",
  },
  {
    name: "Igris",
    context: "Boss de desafio com vários níveis — o HP escala de alguns milhões até a casa dos bilhões",
    skills: [
      { name: "Boss Rage Mode", text: "Durante a luta, o boss entra em modo fúria com o banner “Boss Rage Mode! Damage +20000%!”." },
      { name: "Boss Damage Boost", text: "A interface exibiu um multiplicador crescente de Boss Damage Boost (+205% a +210% observados)." },
    ],
    notes: "Barras de HP registradas em níveis diferentes: 1,02B e 999,99M nos prints do repositório e 1,93B numa run relatada — coerente com a progressão por níveis observada pelo jogador (de milhões nos primeiros até bilhões, talvez além). Na run capturada, Shadow Wolf concentrou o dano (104,86M) enquanto o time inteiro caía durante o Rage Mode.",
    image: "/screenshots/enemies/igris-rage-mode.jpg",
  },
  {
    name: "Corrosive Empress",
    context: "Boss do estágio 82 — Silver Beach",
    weakness: "Fraqueza: classe Beast",
    skills: [
      { name: "Devorar e autocura", text: "Descrição oficial: monstro que gosta de devorar inimigos e tem poderosa capacidade de autocura." },
    ],
    notes: "O elite do mesmo estágio é o Venomous Catfish King. O estágio exibiu um Counter Notice restringindo a classe Calamity.",
    image: "/screenshots/enemies/silver-beach-corrosive-empress.jpg",
  },
];

export const enemyShots = [
  { src: "/screenshots/enemies/catfish-monster.jpg", alt: "Ficha do Catfish Monster com Mud Armor", caption: "Catfish Monster: Mud Armor até o HP cair abaixo de 40%." },
  { src: "/screenshots/enemies/hardshell-rhinoceros-beetle.jpg", alt: "Ficha do Hardshell Rhinoceros Beetle imune a Calamity", caption: "Hardshell Rhinoceros Beetle: imune a efeitos de Calamity." },
  { src: "/screenshots/enemies/land-shark-king.jpg", alt: "Ficha do boss Land Shark King", caption: "Land Shark King: escudo de 40 instâncias e fraqueza contra Arqueiro." },
  { src: "/screenshots/enemies/igris-rage-mode.jpg", alt: "Boss Igris em Rage Mode com dano +20000%", caption: "Igris: Rage Mode com dano +20000% no fim da luta." },
  { src: "/screenshots/enemies/silver-beach-corrosive-empress.jpg", alt: "Estágio 82 Silver Beach com Corrosive Empress", caption: "Silver Beach (estágio 82): Corrosive Empress e Venomous Catfish King." },
];
