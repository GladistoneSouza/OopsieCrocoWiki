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
  image?: string;
  identity?: string[];
  story?: string[];
  stats?: string[];
  exclusiveGems?: { name: string; slot: string; baseStat: string; effect: string }[];
  levelSkills: HeroSkill[];
  builds: HeroBuild[];
  synergies: string[];
  evidence: string[];
  evidenceImages?: { src: string; alt?: string; caption?: string }[];
  pending: string[];
};

export const heroes: HeroRecord[] = [
  {
    slug: "lilith",
    name: "Lilith · Charmflame",
    aliases: ["Dark Knight", "Lilith", "Calamity dourada"],
    className: "Calamity",
    rarity: "SSR",
    role: "Dano contínuo / debuff / sustentação",
    summary: "Dark Knight SSR baseada em Nightmare: combina dano contínuo, redução de cura, propagação, controle e recuperação própria.",
    fieldNote: "A tela atual mostra Lilith no nível 13. Nightmare é a mecânica própria dela e não deve ser confundida com o Fear do Sword Demon.",
    image: "/screenshots/lilith/lilith-hero.jpg",
    identity: [
      "Nome exibido na ficha: Lilith · Charmflame",
      "Gênero: feminino",
      "Raça: Demon Race",
      "Profissão: Calamity",
    ],
    story: [
      "Lilith é descrita como pequena, destrutiva e travessa dentro do clã demoníaco. Luta de perto com armas revestidas de ossos e cristais mágicos e também domina magia de pesadelos.",
      "Em Runecity, usou ilusões de Nightmare para espalhar medo e confusão, escapar dos guardas e preparar armadilhas. Os magos da cidade começaram a atravessar as ilusões, revelando resistência mágica e uma força desconhecida.",
      "Os capítulos seguintes da história são liberados nos níveis 15, 20, 25 e 30.",
    ],
    stats: [
      "Nível observado: 13",
      "Poder mais recente: 18.894",
      "Ataque mais recente: 14,13K",
      "HP mais recente: 256,12K",
      "Defesa mais recente: 8.825",
      "Fragmentos: 22/30",
      "Recompensa global: Dano Crítico +18,2%",
      "Snapshot no nível 12: poder 16.067 · ataque 12,04K · HP 214,74K · defesa 7.577",
      "No snapshot do nível 12: 32/30 fragmentos e Dano Crítico global +16,8%",
    ],
    exclusiveGems: [
      {
        name: "Sapphire",
        slot: "Helmet",
        baseStat: "DEF +4%",
        effect: "Depois de lançar Nightmare, o dano da própria Dark Knight aumenta em 6%.",
      },
      {
        name: "Amethyst",
        slot: "Weapon",
        baseStat: "ATK +6%",
        effect: "Nightmare Curse tem 35% de chance de ser lançada novamente.",
      },
      {
        name: "Ruby",
        slot: "Shield",
        baseStat: "ATK +8%",
        effect: "Crítico da Dark Knight +8%.",
      },
    ],
    levelSkills: [
      {
        name: "Habilidade base — Apply Nightmare",
        description: "Causa dano a um inimigo aleatório e aplica Nightmare. Nightmare causa dano contínuo e reduz a recuperação de vida do inimigo.",
        source: "Texto confirmado no tooltip da habilidade.",
      },
      {
        name: "Nível 3 — Twins Nightmare",
        description: "Começa a batalha com Twins Nightmare obtido.",
        source: "Texto confirmado na tela de progressão.",
      },
      {
        name: "Nível 5 — recuperação de HP",
        description: "Cada Nightmare lançado no inimigo restaura vida para a própria Lilith.",
        source: "Texto confirmado na tela de progressão.",
      },
      {
        name: "Nível 8 — Sepsis Curse / Septic Curse",
        description: "Começa com a Curse obtida. O tooltip usa o nome Septic Curse e informa que inimigos carregando Nightmare têm seus efeitos de cura reduzidos.",
        source: "A lista mostra Sepsis Curse; o tooltip mostra Septic Curse.",
      },
      {
        name: "Nível 10 — Dream Erosion",
        description: "Inimigos carregando Nightmare recebem dano muito aumentado.",
        source: "Texto confirmado na tela de progressão.",
      },
      {
        name: "Nível 10 — Eternal Reincarnation",
        description: "Aumenta a chance de transferência do Nightmare e fortalece a redução de cura.",
        source: "Texto confirmado na tela de progressão.",
      },
      {
        name: "Nível 12 — Blessing adicional",
        description: "Ganha uma Blessing adicional depois de selecionar uma Ultimate Skill.",
        source: "Confirmada no print de progressão do nível 13.",
      },
      {
        name: "Nível 15 — recuperação de mana",
        description: "Cada Nightmare lançado no inimigo restaura mana para a própria Lilith.",
        source: "Texto confirmado na tela; nível ainda bloqueado.",
      },
      {
        name: "Nível 20 — Dream Erosion",
        description: "Nightmare passa a causar mais dano a cada segundo.",
        source: "Texto confirmado na tela; nível ainda bloqueado.",
      },
      {
        name: "Nível 20 — Nightmare Reincarnation",
        description: "Nightmare causa dano quando termina.",
        source: "Texto confirmado na tela; nível ainda bloqueado.",
      },
      {
        name: "Níveis 25, 30, 35, 40, 45 e 50 — bônus de profissão",
        description: "Cada um desses níveis aumenta em 6% o dano dos personagens desta profissão.",
        source: "Todos os seis breakpoints foram confirmados nas telas de progressão.",
      },
    ],
    builds: [
      {
        name: "Nightmare ofensivo",
        status: "em teste",
        summary: "Prioriza a pressão de dano contínuo e o dano de encerramento do Nightmare.",
        priorities: ["Fierce Nightmare", "Crazy Nightmare", "Dream Erosion", "Nightmare Reincarnation"],
      },
      {
        name: "Sustentação",
        status: "em teste",
        summary: "Combina a recuperação natural do kit com Blessings de cura.",
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
        priorities: ["Twin Nightmare", "Overtime Nightmare", "Nightmare Reincarnation"],
      },
    ],
    synergies: [
      "Composições Calamity voltadas a debuffs e lutas prolongadas",
      "Fases com vários inimigos, onde Nightmare pode se espalhar",
      "Inimigos com cura ou sustain elevado",
      "Sword Demon como núcleo de Fear, mantendo Nightmare como mecânica separada",
    ],
    evidence: [
      "Ficha de identidade e visual oficial",
      "Histórias 1 e 2 e travas dos capítulos seguintes",
      "Habilidade base e telas de progressão dos níveis 3 a 50",
      "Snapshot histórico da conta no nível 12",
      "Tela completa das três gemas exclusivas",
    ],
    evidenceImages: [
      { src: "/screenshots/lilith/hero-background.jpg", caption: "Identidade oficial, raça, profissão e background" },
      { src: "/screenshots/lilith/story-1.jpg", caption: "Story 1" },
      { src: "/screenshots/lilith/story-2.jpg", caption: "Story 2" },
      { src: "/screenshots/lilith/level-12-15.jpg", caption: "Níveis 12 e 15, atributos e recompensa global" },
      { src: "/screenshots/lilith/level-15-20.jpg", caption: "Níveis 15 e 20" },
      { src: "/screenshots/lilith/level-20-25.jpg", caption: "Níveis 20 e 25" },
      { src: "/screenshots/lilith/apply-nightmare.jpg", caption: "Habilidade base Apply Nightmare" },
      { src: "/screenshots/lilith/levels-3-8.jpg", caption: "Níveis 3, 5 e 8" },
      { src: "/screenshots/lilith/septic-curse.jpg", caption: "Tooltip de Septic Curse" },
      { src: "/screenshots/lilith/level-12-snapshot.jpg", caption: "Snapshot histórico no nível 12" },
      { src: "/screenshots/lilith/exclusive-gems.jpg", caption: "Sapphire, Amethyst e Ruby exclusivas" },
      { src: "/screenshots/lilith/level-10-12.jpg", caption: "Níveis 10 e 12" },
      { src: "/screenshots/lilith/profession-levels-25-40.jpg", caption: "Bônus de profissão dos níveis 25 a 40" },
      { src: "/screenshots/lilith/profession-levels-35-50.jpg", caption: "Bônus de profissão dos níveis 35 a 50" },
    ],
    pending: [
      "Adicionar os prints do Blessing Bestiary e mapear a árvore completa",
      "Confirmar os valores numéricos, duração e chance de cada Nightmare",
      "Testar se Twin Nightmare gera cura e mana separadamente por alvo",
      "Confirmar qual variante do sobrenome é canônica nas traduções: Charmflame, Flamecharm ou Meiyan",
    ],
  },
  {
    slug: "mia-morning-dew",
    name: "Mia Morning Dew",
    aliases: ["SSR Fire Spirit Master", "Flame Spirit Master", "Summoner dourada"],
    className: "Summon",
    rarity: "SSR",
    role: "Invocação / queimadura / amplificação de dano",
    summary: "Invocadora SSR que cria Elementais de Fogo por 8 segundos e converte a presença e a morte deles em dano, mana e fortalecimento do grupo.",
    fieldNote: "Ficha baseada somente nas descrições exibidas pelo jogo. As telas não informam porcentagens, duração, limite de acúmulos nem a chance exata de divisão.",
    levelSkills: [
      {
        name: "Habilidade base — Summon Fire Elemental",
        description: "Invoca um Elemental de Fogo por 8 segundos.",
        source: "Tela Blessing Bestiary",
      },
      {
        name: "Nível 3 — Deathrattle • Self-destruction",
        description: "Obtida inicialmente. Quando morre, o Elemental de Fogo causa dano a inimigos aleatórios.",
        source: "Ficha do personagem e tooltip",
      },
      {
        name: "Nível 5 — Fireballs",
        description: "Ao invocar um Elemental de Fogo, dispara 3 bolas de fogo contra inimigos aleatórios.",
        source: "Ficha do personagem",
      },
      {
        name: "Nível 8 — Enhance • Burn",
        description: "A ficha informa que uma bênção de Burn é obtida inicialmente; o tooltip mostrado na mesma tela identifica Strengthen • Incinerate, que causa dano aos inimigos próximos a cada segundo.",
        source: "Ficha do personagem e tooltip",
      },
      {
        name: "Wildfire Rebirth — aumento da chance de divisão",
        description: "A progressão aumenta a chance de divisão de Wildfire Rebirth. O número do nível está cortado no print disponível.",
        source: "Ficha do personagem",
      },
      {
        name: "Nível 12 — bênção adicional",
        description: "Recebe uma bênção adicional depois de selecionar uma Ultimate Skill.",
        source: "Ficha do personagem",
      },
      {
        name: "Nível 15 — buff por morte",
        description: "Para cada Elemental de Fogo que morre, o dano de todos os aliados aumenta.",
        source: "Ficha do personagem",
      },
    ],
    builds: [
      {
        name: "Rota Death is the Beginning",
        status: "confirmada",
        summary: "Ultimate que libera bolas de fogo a cada 8 segundos; cada Elemental de Fogo morto aumenta em 1 a quantidade de bolas de fogo.",
        priorities: [
          "Deathrattle • Self-destruction — dano aleatório quando o elemental morre",
          "Deathrattle • Recycling — restaura mana da Mia e aumenta seu dano quando o elemental morre",
          "Deathrattle • Ignite — incendeia a área do inimigo e causa dano contínuo quando o elemental morre",
          "Death is the Beginning — converte mortes acumuladas em mais bolas de fogo periódicas",
        ],
      },
      {
        name: "Rota Wildfire Rebirth",
        status: "confirmada",
        summary: "Ultimate que dá ao Elemental de Fogo uma chance de se dividir em 1 novo Elemental de Fogo quando morre.",
        priorities: [
          "Summon • Echo — quantidade de Elementais de Fogo invocados +1",
          "Summon • First Strike — invoca 3 Elementais de Fogo no início da batalha",
          "Reinforcement • Resonance — cada elemental sobrevivente aumenta o poder de ataque de todos os elementais",
          "Wildfire Rebirth — chance de criar outro elemental após uma morte",
        ],
      },
      {
        name: "Bênçãos Strengthen",
        status: "confirmada",
        summary: "Conjunto de bênçãos que adiciona dano contínuo, vulnerabilidade nos inimigos e fortalecimento das forças aliadas.",
        priorities: [
          "Strengthen • Incinerate — dano aos inimigos próximos a cada segundo",
          "Strengthen • Attack — ataques podem incendiar o inimigo e causar dano contínuo",
          "Reinforced and vulnerable — inimigos próximos passam a receber mais dano",
          "Strengthen and feed back — quando o elemental aparece, aumenta o dano de todas as forças aliadas",
        ],
      },
    ],
    synergies: [
      "Mais elementais vivos fortalecem o ataque dos próprios elementais por Reinforcement • Resonance.",
      "A morte dos elementais ativa Deathrattles e o aumento de dano de todos os aliados do nível 15.",
      "Wildfire Rebirth pode prolongar a presença de elementais ao gerar uma nova unidade após a morte.",
    ],
    evidence: [
      "Blessing Bestiary completo da Mia",
      "Ficha SSR Fire Spirit Master no nível 15",
      "Tooltips de Self-destruction e Incinerate",
    ],
    evidenceImages: [
      { src: "/screenshots/mia-bestiary-ultimates.jpg", alt: "Bestiário da Mia mostrando as Ultimates Death is the Beginning e Wildfire Rebirth" },
      { src: "/screenshots/mia-bestiary-summon.jpg", alt: "Bestiário da Mia mostrando Ignite, Attack, Echo e Resonance" },
      { src: "/screenshots/mia-bestiary-deathrattle.jpg", alt: "Bestiário da Mia mostrando Self-destruction, Incinerate, Recycling e vulnerabilidade" },
      { src: "/screenshots/mia-level-3.jpg", alt: "Ficha da Mia no nível 15 com tooltip de Deathrattle Self-destruction" },
      { src: "/screenshots/mia-level-8.jpg", alt: "Ficha da Mia no nível 15 com tooltip de Strengthen Incinerate" },
      { src: "/screenshots/mia-level-15.jpg", alt: "Progressão da Mia mostrando os efeitos dos níveis 12 e 15" },
    ],
    pending: [
      "Confirmar o número do nível que aumenta a chance de divisão de Wildfire Rebirth.",
      "Registrar porcentagens, duração e limite de acúmulos dos aumentos de dano.",
      "Confirmar a chance base e a chance melhorada de Wildfire Rebirth.",
      "Verificar se elementais criados por Wildfire Rebirth também ativam normalmente todos os efeitos de morte.",
      "Esclarecer a diferença de nomenclatura entre Enhance • Burn e Strengthen • Incinerate na tela do nível 8.",
    ],
  },
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
