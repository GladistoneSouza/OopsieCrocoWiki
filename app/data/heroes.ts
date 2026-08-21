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
    fieldNote: "Ficha baseada somente nas descrições exibidas pelo jogo. Diversos efeitos informam que o dano ou a chance aumenta, mas omitem o multiplicador, a duração, a porcentagem e o limite de acúmulos. Esses valores permanecem como não informados, sem estimativa pela tradução.",
    image: "/screenshots/mia/mia-profession-bonuses.jpg",
    identity: [
      "Nome exibido na ficha: Mia Morning Dew",
      "Gênero: feminino",
      "Raça: Human Race",
      "Profissão: Summon",
      "Alcance exibido: 4",
      "Visual padrão: Yaoyac",
      "Skin alternativa: Iridescent, liberada no nível 20",
      "A tela informa que desbloquear skins aumenta todos os atributos",
      "Organização citada: Forbidden Rune Sect, em Runecity, capital da Valern Federation",
    ],
    story: [
      "Mia é uma jovem invocadora reconhecida pela Forbidden Rune Sect. Desde a infância demonstra forte afinidade com o elemento fogo, controlando chamas e invocando pequenos espíritos de fogo ágeis e abrasadores. Ela utiliza a Flame Bell, forjada em uma antiga prata secreta, como meio de conjuração e artefato rúnico ligado à alma do elemento fogo. Seu crescimento não foi tranquilo: um acidente provocado pela perda de controle das chamas fez a seita considerá-la uma presença perigosa. Depois de anos de disciplina, transformou o fogo selvagem em poder de proteção e contra-ataque e conquistou gradualmente o reconhecimento da seita. Sua missão envolve tanto dominar uma poderosa magia de fogo quanto investigar a relação entre os elementais e os Dragon's Breath Crystals. Onde os fragmentos se espalham, os elementais acumulam enorme poder destrutivo; Mia pretende controlá-lo sem ser consumida e evitar a repetição dos desastres da antiga guerra dos deuses.",
      "No primeiro capítulo, Mia aparece na biblioteca da seita de feitiços proibidos, em Runecity, segurando a Flame Bell. Ela promete usar os mistérios do fogo para proteger o mundo, apesar de um antigo descontrole quase ter lhe custado tudo. Persistindo, converteu a loucura das chamas em proteção e contra-ataque e conquistou gradualmente a aceitação da seita. Quando sua invocação amadureceu, notícias sobre fragmentos de Dragonbreath espalhados pelos reinos interromperam a paz: elementais de fogo estavam se agitando de maneira anormal, anunciando um perigo maior.",
      "Quando a poluição provocada pelos fragmentos de Dragonbreath começa a se espalhar, Mia decide investigar a origem da anomalia nos elementais de fogo. Ela reconhece o poder destrutivo dos fragmentos e teme que uma tragédia do passado se repita. Ao reunir magia na Flame Bell, sente uma ligação mais profunda com o fogo — simultaneamente fonte de poder e grande perigo. Os espíritos invocados demonstram raiva e ansiedade, confirmando uma ameaça oculta; sua intuição indica que demônios podem estar conspirando secretamente contra a plant race.",
      "Acompanhada por seus espíritos de fogo, Mia avança até a origem da contaminação e encontra um mago sombrio manipulando elementais para transformá-los em armas. Ela identifica o mago como responsável pela poluição da fonte do fogo e participante central da conspiração dos demônios. Mia declara que o fogo jamais servirá às trevas e decide enfrentá-lo, combinando invocação, espíritos de fogo e tecnologia rúnica. Quando o confronto começa, porém, sua chama interior se descontrola e parece contrariar sua vontade; ela precisa estabilizar rapidamente a mente para canalizar o poder corretamente.",
      "Os capítulos seguintes são liberados nos níveis 20, 25 e 30.",
    ],
    stats: [
      "Nível observado: 15",
      "Poder: 19.848",
      "Ataque: 18,15K",
      "HP: 220,27K",
      "Defesa: 7.589",
      "Atributos exibidos na tela de skins: Ataque 10, Defesa 5 e HP 150",
      "Fragmentos: 35/60",
      "Recompensa global: Dano Crítico +21%",
    ],
    exclusiveGems: [
      {
        name: "Pink Diamond",
        slot: "Armor",
        baseStat: "DEF +4%",
        effect: "Ao ser invocado, o Fire Element concede a um aliado aleatório um bônus de 20% de ataque. A duração, o acúmulo e a possibilidade de renovação não são informados na tela.",
      },
      {
        name: "Jade",
        slot: "Necklace",
        baseStat: "Max HP +6%",
        effect: "Quando morre, o Fire Element restaura 15% de mana para um aliado aleatório.",
      },
      {
        name: "Amber",
        slot: "Ring",
        baseStat: "Max HP +8%",
        effect: "Pyromancer Crit +8%.",
      },
    ],
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
        name: "Nível 10 — Death is Only the Beginning",
        description: "A Ultimate começa com 3 bolas de fogo.",
        source: "Texto confirmado na tela de progressão.",
      },
      {
        name: "Nível 10 — Wildfire Rebirth",
        description: "A chance de divisão dos Elementais de Fogo aumenta.",
        source: "Texto confirmado na tela de progressão.",
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
      {
        name: "Nível 20 — Death is Only the Beginning",
        description: "As bolas de fogo ricocheteiam 1 vez adicional.",
        source: "Texto confirmado na tela; nível ainda bloqueado.",
      },
      {
        name: "Nível 20 — Wildfire Rebirth",
        description: "Os Elementais de Fogo passam a ter chance de se dividir em dois Elementais de Fogo.",
        source: "Texto confirmado na tela; nível ainda bloqueado.",
      },
      {
        name: "Níveis 25, 30, 35, 40, 45 e 50 — bônus de profissão",
        description: "Cada um desses níveis aumenta em 6% o dano dos personagens desta profissão.",
        source: "Os seis breakpoints foram confirmados nas telas de progressão.",
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
      "Progressão confirmada até o nível 50",
      "Tela das três gemas exclusivas",
      "Tela de alcance e tela das skins Yaoyac e Iridescent",
      "Background e capítulos 1–3 da história",
    ],
    evidenceImages: [
      { src: "/screenshots/mia-bestiary-ultimates.jpg", alt: "Bestiário da Mia mostrando as Ultimates Death is the Beginning e Wildfire Rebirth" },
      { src: "/screenshots/mia-bestiary-summon.jpg", alt: "Bestiário da Mia mostrando Ignite, Attack, Echo e Resonance" },
      { src: "/screenshots/mia-bestiary-deathrattle.jpg", alt: "Bestiário da Mia mostrando Self-destruction, Incinerate, Recycling e vulnerabilidade" },
      { src: "/screenshots/mia-level-3.jpg", alt: "Ficha da Mia no nível 15 com tooltip de Deathrattle Self-destruction" },
      { src: "/screenshots/mia-level-8.jpg", alt: "Ficha da Mia no nível 15 com tooltip de Strengthen Incinerate" },
      { src: "/screenshots/mia-level-15.jpg", alt: "Progressão da Mia mostrando os efeitos dos níveis 12 e 15" },
      { src: "/screenshots/mia/mia-exclusive-gems.jpg", alt: "Gemas exclusivas Pink Diamond, Jade e Amber da Mia" },
      { src: "/screenshots/mia/mia-level-10.jpg", alt: "Progressão da Mia mostrando os dois efeitos do nível 10" },
      { src: "/screenshots/mia/mia-level-20.jpg", alt: "Progressão da Mia mostrando os dois efeitos do nível 20" },
      { src: "/screenshots/mia/mia-profession-bonuses.jpg", alt: "Bônus de 6% de dano da profissão nos níveis 25, 30, 35 e 40" },
      { src: "/screenshots/mia/mia-profession-bonuses-45-50.jpg", alt: "Bônus de 6% de dano da profissão nos níveis 35, 40, 45 e 50" },
      { src: "/screenshots/mia/mia-range-4.jpg", alt: "Ficha da Mia exibindo alcance 4" },
      { src: "/screenshots/mia/mia-skins.jpg", alt: "Skins Yaoyac e Iridescent da Mia; Iridescent é liberada no nível 20" },
      { src: "/screenshots/mia/story-background.jpg", alt: "Hero Background da Mia com identidade e origem da personagem" },
      { src: "/screenshots/mia/story-1.jpg", alt: "Primeiro capítulo da história da Mia" },
      { src: "/screenshots/mia/story-2.jpg", alt: "Segundo capítulo da história da Mia sobre os fragmentos de Dragonbreath" },
      { src: "/screenshots/mia/story-3.jpg", alt: "Terceiro capítulo da história da Mia e o encontro com o mago sombrio" },
      { src: "/screenshots/mia/story-background-continuation.jpg", alt: "Continuação do Hero Background sobre o descontrole das chamas de Mia" },
      { src: "/screenshots/mia/story-background-mission.jpg", alt: "Continuação do Hero Background sobre a missão de Mia e os Dragon's Breath Crystals" },
      { src: "/screenshots/mia/story-background-ending.jpg", alt: "Final do Hero Background sobre evitar os desastres da antiga guerra dos deuses" },
      { src: "/screenshots/mia/story-1-continuation.jpg", alt: "Continuação do capítulo 1 sobre o acidente e a rejeição da seita" },
      { src: "/screenshots/mia/story-1-ending.jpg", alt: "Final do capítulo 1 sobre os fragmentos de Dragonbreath" },
      { src: "/screenshots/mia/story-2-ending.jpg", alt: "Final do capítulo 2 sobre a ameaça demoníaca contra a plant race" },
      { src: "/screenshots/mia/story-3-ending.jpg", alt: "Final do capítulo 3 sobre o confronto de Mia com o mago sombrio" },
      { src: "/screenshots/mia/story-4-level-20.jpg", alt: "Capítulo 4 da história da Mia bloqueado até o nível 20" },
      { src: "/screenshots/mia/story-5-level-25.jpg", alt: "Capítulo 5 da história da Mia bloqueado até o nível 25" },
      { src: "/screenshots/mia/story-6-level-30.jpg", alt: "Capítulo 6 da história da Mia bloqueado até o nível 30" },
    ],
    pending: [
      "Registrar porcentagens, duração e limite de acúmulos dos aumentos de dano.",
      "Confirmar a chance base e a chance melhorada de Wildfire Rebirth.",
      "Verificar se elementais criados por Wildfire Rebirth também ativam normalmente todos os efeitos de morte.",
      "Esclarecer a diferença de nomenclatura entre Enhance • Burn e Strengthen • Incinerate na tela do nível 8.",
      "Testar a duração, o acúmulo, a renovação e os possíveis alvos do bônus de 20% de ataque da Pink Diamond; a tela não informa esses parâmetros.",
      "Confirmar a inconsistência de nomes entre Mia Morning Dew, Mia Morningdew e Mia Chenlu nas telas da história.",
      "Registrar o conteúdo dos capítulos 4–6 quando forem desbloqueados.",
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
      { name: "Bite: Break Armor", description: "Rota de Bite voltada a reduzir a defesa do alvo e ampliar o dano concentrado." },
      { name: "Bloody: Rapid", description: "Prolonga a duração de Bloodlust." },
      { name: "Bloody: Surging", description: "Dobra os acúmulos de Blood recebidos." },
      { name: "Bite: Crazy", description: "Dobra a quantidade de ataques executados por Bite." },
      { name: "Bloody and Violent", description: "Ao alcançar 10 camadas de Blood, entra em Berserk. A duração do estado ainda precisa ser confirmada." },
      { name: "Night Raid", description: "Com menos de 50% de HP, dispara Bite automaticamente." },
      { name: "Bite: Continuous Attack", description: "Três acertos da mesma habilidade no mesmo alvo ativam dano adicional." },
    ],
    builds: [
      {
        name: "Dupla mordida + sangue duplo",
        status: "confirmada",
        summary: "Build preferida para concentrar dano em bosses.",
        priorities: ["Bloody: Surging", "Bite: Crazy", "Bloody and Violent", "Night Raid", "Bite: Continuous Attack", "Bite: Break Armor"],
      },
    ],
    synergies: ["Yang: Rapid da Sakura acelera o motor de habilidades", "Cura e mitigação permitem explorar Night Raid sem perder o personagem", "Bite: Crazy facilita os procs de Bite: Continuous Attack contra boss"],
    evidence: ["Build completa registrada numa run de 15 níveis", "Dano acima de 100M observado em condições favoráveis"],
    pending: ["Confirmar se Berserk permanece até o fim da batalha depois da primeira ativação", "Medir Continuous Attack contra outras Blessings ofensivas", "Separar habilidades gratuitas por nível permanente"],
  },  {
    slug: "kazers-darkblade",
    name: "Kazer’s Darkblade",
    aliases: ["Demon King", "Sword Demon", "Calamity do Fear"],
    className: "Calamity",
    rarity: "SP",
    role: "Frontline / Fear / dano explosivo",
    summary: "Frontliner vermelho que transforma giros frequentes em Fear acumulado e depois converte os acúmulos em dano explosivo.",
    fieldNote: "Não confundir com Lilith: Kazer’s Darkblade usa Fear; Lilith usa Nightmare. A build documentada já fecha o motor ofensivo, mas ainda não tinha nível suficiente para obter a recuperação de HP durante o giro.",
    levelSkills: [
      { name: "Dreadblade", description: "Blade Storm aplica 2 acúmulos de Fear." },
      { name: "Swift Wind Swordsmanship", description: "Faz Blade Storm acontecer com mais frequência." },
      { name: "Fear Attacks", description: "Causa dano adicional por segundo contra inimigos afetados por Fear." },
      { name: "Fear Blow", description: "Permite que ataques básicos também apliquem Fear." },
      { name: "Fear Abyss", description: "Aumenta em 20 o limite de acúmulos de Fear." },
      { name: "Fear Resolution", description: "A cada 10 segundos, executa vários cortes; o dano cresce conforme a quantidade de Fear." },
      { name: "Cura durante Blade Storm", description: "Blessing ainda bloqueada no nível observado. Recupera HP enquanto gira e é o breakpoint de sustain mais importante identificado." },
    ],
    builds: [
      {
        name: "Motor completo de Fear",
        status: "confirmada",
        summary: "Aumenta a frequência de Blade Storm, espalha Fear por giro e ataques básicos e consome a pressão acumulada em cortes periódicos.",
        priorities: ["Swift Wind Swordsmanship", "Dreadblade", "Fear Blow", "Fear Attacks", "Fear Abyss", "Fear Resolution"],
      },
      {
        name: "Fear com sustain",
        status: "em teste",
        summary: "Mesma rota ofensiva acrescida da recuperação de HP durante Blade Storm quando o nível permanente liberar a escolha.",
        priorities: ["Cura durante Blade Storm", "Swift Wind Swordsmanship", "Dreadblade", "Fear Abyss", "Fear Resolution"],
      },
    ],
    synergies: ["Yang: Rapid da Sakura produz mais giros", "Summons dividem o aggro enquanto Fear cresce", "Fear Resolution aproveita lutas longas e alvos resistentes"],
    evidence: ["Build de Fear fechada numa run de 15 níveis", "Relato de campo sobre a Blessing bloqueada de cura durante o giro"],
    pending: ["Registrar raridade e nome exatamente como aparecem na ficha", "Obter o tooltip completo da cura durante Blade Storm", "Mapear os breakpoints permanentes por nível"],
  },
  {
    slug: "maya-necromancer-apprentice",
    name: "Maya",
    aliases: ["Necromancer Apprentice", "Necromancer", "Summoner roxa"],
    className: "Summon",
    rarity: "SR",
    role: "Exército de esqueletos / aggro / dano constante",
    summary: "Invocadora SR que cria uma linha de corpos substituíveis, recupera mana ao invocar e escala os esqueletos até Skeleton King.",
    fieldNote: "Nível 14 confirmado. Já passou pelo breakpoint do nível 12, que concede uma Blessing adicional depois de selecionar uma Ultimate.",
    stats: ["Nível observado: 14", "Poder observado: 13.046"],
    levelSkills: [
      { name: "Nível 3 — Skeleton Enhancement", description: "Começa a batalha com a melhoria de Skeleton Warrior obtida." },
      { name: "Nível 5 — explosão ao morrer", description: "Esqueletos causam dano em área quando morrem." },
      { name: "Nível 8 — Sea of Remains", description: "Começa a batalha com a Blessing de quantidade de summons obtida." },
      { name: "Nível 10 — Lifesteal", description: "Skeleton Soldiers passam a recuperar vida ao atacar." },
      { name: "Nível 12 — Blessing adicional", description: "Ganha uma Blessing adicional depois de selecionar uma Ultimate Skill." },
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
    evidence: ["Ficha no nível 14", "Progressão permanente dos níveis 3, 5, 8, 10 e 12", "Build completa registrada numa run"],
    pending: ["Comparar o dano total do tornado/Wild com Rage of the Dead", "Confirmar se efeitos globais de contra-ataque também afetam esqueletos", "Registrar nomes oficiais de todas as Blessings pelo Bestiary"],
  },
  {
    slug: "karin-pharaoh",
    name: "Karin · Pharaoh",
    aliases: ["Karin", "Maga de controle"],
    className: "Control",
    role: "Stun / debuff / amplificação",
    summary: "Controller centrada em Solar Flare e Sun Beams, capaz de aplicar stun, reduzir o dano inimigo e ampliar o dano dos aliados.",
    fieldNote: "O kit é coerente no papel, mas o controle foi pouco impactante nos testes. Deve ser tratada como ferramenta situacional até que duração, resistência de bosses e tempo de conjuração sejam medidos.",
    levelSkills: [
      { name: "Solar Flare", description: "Aplica stun e libera Sun Beams." },
      { name: "+1 Solar Flare", description: "Adiciona uma conjuração de Solar Flare." },
      { name: "Stun prolongado", description: "Aumenta em 1 segundo a duração do stun." },
      { name: "Stun no ataque básico", description: "Ataques básicos ganham chance de atordoar por 2 segundos." },
      { name: "Sun Beam com stun", description: "Permite que os beams também apliquem stun." },
    ],
    builds: [
      {
        name: "Interrupção e amplificação",
        status: "em teste",
        summary: "Combina stuns com redução de Attack Speed, redução de dano inimigo e aumento do dano recebido pelo alvo.",
        priorities: ["+1 Solar Flare", "+1 segundo de stun", "Sun Beam com stun", "Redução de Attack Speed", "Aumento de dano recebido"],
      },
    ],
    synergies: ["Fases com muitos inimigos vulneráveis a controle", "Interrupção de uma habilidade decisiva", "Amplificação para carries já protegidos"],
    evidence: ["Ficha e Bestiary exibidos no nível 10", "Testes de campo com stun e tempo de conjuração"],
    pending: ["Confirmar raridade e nome completo na ficha", "Medir resistência ou imunidade de bosses a stun", "Comparar uma vaga de Karin com a proteção indireta produzida por summons"],
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
  },
];

export function getHero(slug: string) {
  return heroes.find((hero) => hero.slug === slug);
}
