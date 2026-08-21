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
  {
    slug: "lilith",
    name: "Lilith",
    aliases: ["Dark Knight", "Calamity dourada"],
    className: "Calamity",
    rarity: "SSR",
    role: "Dano contínuo / debuff / sustentação",
    summary: "Calamity dourada baseada em Nightmare: aplica dano contínuo, reduz cura recebida e pode combinar propagação, controle e autocura.",
    fieldNote: "Observada no nível 13. É uma alternativa SSR para a função Calamity, mas sua mecânica de Nightmare é distinta do Fear do Sword Demon.",
    levelSkills: [
      {
        name: "Apply Nightmare",
        description: "Causa dano a um inimigo aleatório e aplica Nightmare; o efeito causa dano contínuo e reduz a cura recebida pelo alvo.",
        source: "Confirmada em telas do personagem.",
      },
      {
        name: "Nível 3 — Twin Nightmare",
        description: "Ao entrar em batalha, aplica Nightmare a dois inimigos.",
        source: "Confirmada em tela de evolução.",
      },
      {
        name: "Nível 5 — sustain de Nightmare",
        description: "Cada Nightmare aplicado restaura HP da própria Lilith.",
        source: "Confirmada em tela de evolução.",
      },
      {
        name: "Nível 8 — Septic Curse",
        description: "Fortalece a redução de cura associada ao Nightmare.",
        source: "Confirmada em tela de evolução.",
      },
      {
        name: "Nível 10 — Dream Erosion / Eternal Reincarnation",
        description: "Dream Erosion fortalece o dano contínuo; Eternal Reincarnation aumenta a propagação do Nightmare quando ele termina e reforça a redução de cura.",
        source: "Confirmada em telas de evolução e bênçãos.",
      },
      {
        name: "Nível 12 — bênção adicional",
        description: "Depois de concluir a Ultimate, Lilith recebe uma bênção adicional.",
        source: "Confirmada em tela de evolução.",
      },
      {
        name: "Nível 15 — recuperação de mana",
        description: "Cada Nightmare aplicado restaura mana da própria Lilith.",
        source: "Confirmada em tela de evolução; nível ainda não alcançado na conta observada.",
      },
    ],
    builds: [
      {
        name: "Nightmare ofensivo",
        status: "em teste",
        summary: "Prioriza o dano contínuo e a pressão de Nightmare.",
        priorities: ["Fierce Nightmare", "Crazy Nightmare", "Dream Erosion"],
      },
      {
        name: "Sustentação",
        status: "em teste",
        summary: "Combina a cura natural do kit com bênçãos de recuperação.",
        priorities: ["Bloodthirsty Curse", "Soul-Draining Curse"],
      },
      {
        name: "Controle e anti-cura",
        status: "em teste",
        summary: "Reduz a capacidade de resposta e sustentação dos inimigos.",
        priorities: ["Paralyzing Curse", "Weaken Curse", "Septic Curse"],
      },
      {
        name: "Propagação de Nightmare",
        status: "em teste",
        summary: "Espalha Nightmare entre múltiplos alvos e prolonga sua presença em combate.",
        priorities: ["Twin Nightmare", "Overtime Nightmare", "Eternal Reincarnation"],
      },
    ],
    synergies: [
      "Composições Calamity que aproveitam debuffs e lutas prolongadas",
      "Fases com vários inimigos, onde Nightmare pode se espalhar",
      "Inimigos com cura ou sustain elevado",
      "Sword Demon como núcleo de Fear, sem confundir Nightmare com Fear",
    ],
    evidence: [
      "Telas do kit, bênçãos e desbloqueios por nível compartilhadas pelo jogador",
      "Tela de evolução para o nível 13: poder 16.591, ataque 12,44K, HP 221,74K e defesa 7.824",
      "Estado observado: nível 13 e 2/30 fragmentos após a evolução",
    ],
    pending: [
      "Testar se Twin Nightmare gera uma instância separada de cura por alvo",
      "No nível 15, testar se Twin Nightmare também gera mana separadamente por alvo",
      "Confirmar valores numéricos e duração de cada Nightmare e bênção",
      "Documentar a Ultimate completa e o requisito exato para concluí-la",
      "Adicionar os prints da Lilith ao repositório como evidência visual",
    ],
  },
];

export function getHero(slug: string) {
  return heroes.find((hero) => hero.slug === slug);
}
