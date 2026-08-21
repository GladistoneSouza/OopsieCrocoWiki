export type HeroSkill = {
  name: string;
  description: string;
  source?: string;
};

export type HeroBuild = {
  name: string;
  status: "confirmada" | "em teste" | "rascunho";
  summary: string;
  priorities: string[];
};

export type HeroRecord = {
  slug: string;
  name: string;
  aliases?: string[];
  className: string;
  rarity?: string;
  role: string;
  summary: string;
  fieldNote: string;
  levelSkills: HeroSkill[];
  builds: HeroBuild[];
  synergies: string[];
  evidence: string[];
  pending: string[];
};

export const heroes: HeroRecord[] = [
  {
    slug: "shadow-wolf",
    name: "Shadow Wolf",
    aliases: ["Lobão"],
    className: "Assassino",
    rarity: "SR",
    role: "Dano bruto / boss",
    summary: "Carregador físico que cresce muito com múltiplos hits e condições de HP baixo.",
    fieldNote: "Já foi observado ultrapassando 100M de dano quando a build encaixa e o alvo está abaixo de 50% de HP.",
    levelSkills: [
      { name: "Wild Bite", description: "Executa múltiplos golpes e fortalece o próprio personagem." },
    ],
    builds: [
      {
        name: "Dupla mordida + sangue duplo",
        status: "confirmada",
        summary: "Build preferida para concentrar dano em bosses.",
        priorities: ["Dupla mordida", "Sangue duplo", "3 hits a cada 3 segundos", "Bônus com HP abaixo de 50%"],
      },
    ],
    synergies: ["Cura e mitigação para mantê-lo vivo em HP baixo", "Redução de cura contra inimigos com sustain"],
    evidence: ["Runs e telas compartilhadas pelo jogador"],
    pending: ["Registrar a árvore completa com nomes oficiais", "Separar habilidades gratuitas por nível"],
  },
  {
    slug: "bounty-hunter",
    name: "Bounty Hunter",
    aliases: ["Pistoleira"],
    className: "Arqueiro",
    role: "DPS por munições",
    summary: "Atiradora baseada em munições especiais, velocidade de ataque, acúmulo de ataque e Barrage.",
    fieldNote: "Foi MVP numa run documentada da dificuldade 5, com 4,31M de dano.",
    levelSkills: [],
    builds: [
      {
        name: "Barrage de munições",
        status: "confirmada",
        summary: "Converte frequência de ataques e variedade de munições em escala de dano.",
        priorities: ["Ammunition Expert", "Gunsling Loading", "Steel Core", "Mercury ou Tear", "Barrage Time"],
      },
    ],
    synergies: ["Attack Speed", "Efeitos que aumentam o número de balas", "Boss vulnerável a Arqueiro"],
    evidence: ["Run dificuldade 5: MVP com 4,31M", "Árvores exibidas nos andares 9 e 10"],
    pending: ["Catalogar todas as munições", "Confirmar o nome da habilidade de acúmulo de ataque"],
  },
  {
    slug: "artemis",
    name: "Artemis",
    aliases: ["Arqueira UR"],
    className: "Arqueiro",
    rarity: "UR",
    role: "DPS de marca / área",
    summary: "Arqueira UR com caminhos de marca, águia e Moonlit; exige muitos upgrades dentro da run para chegar ao late game.",
    fieldNote: "No nível observado, entra sem as duas habilidades gratuitas que personagens mais evoluídos costumam possuir.",
    levelSkills: [],
    builds: [
      {
        name: "Moon Goddess Descends",
        status: "em teste",
        summary: "Caminho voltado ao dano de boss e à escala Moonlit.",
        priorities: ["Moonlit Enhancement", "Moonlit Haste", "Moonlit Star Piercer", "Moonlit Charge", "Hunter Mark Spirit"],
      },
      {
        name: "Marca + águia",
        status: "em teste",
        summary: "Alternativa de área que espalha dano e utiliza uma ultimate diferente.",
        priorities: ["Marcas", "Águia", "Moonlit Chain Break quando o foco for AOE"],
      },
    ],
    synergies: ["Boss fraco contra Arqueiro", "Attack Speed para acelerar aplicação de marcas"],
    evidence: ["Testes comparativos com Eria", "Árvore completa discutida em runs anteriores"],
    pending: ["Importar os prints completos da árvore", "Mapear habilidade por nível", "Confirmar nomes oficiais traduzidos"],
  },
  {
    slug: "sakura",
    name: "Sakura",
    aliases: ["Healer dourada"],
    className: "Suporte",
    rarity: "SSR",
    role: "Cura e sustentação",
    summary: "Mantém a composição viva durante runs longas e libera escolhas para o carregador principal.",
    fieldNote: "Priest Healing +12,5% foi documentado em gema equipada.",
    levelSkills: [],
    builds: [],
    synergies: ["Carregadores que operam com HP baixo", "Composições frágeis de retaguarda"],
    evidence: ["Telas de equipamentos e runs compartilhadas"],
    pending: ["Nome oficial completo", "Árvore de habilidades", "Breakpoints por nível"],
  },
];

export function getHero(slug: string) {
  return heroes.find((hero) => hero.slug === slug);
}
