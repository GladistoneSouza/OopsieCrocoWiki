// Caderno de estratégia: conclusões do jogador registradas nas conversas de
// 23-24 ago. 2026. Nada aqui é regra confirmada pela tela — são leituras
// práticas, sempre rotuladas, que orientam as decisões documentadas nas runs.

export type StrategyNote = {
  kicker: string;
  title: string;
  text: string;
  confidence: "confirmada na tela" | "observada em run" | "estratégia do jogador" | "interpretação provável";
};

export const campaignStatus = {
  kicker: "CAMPANHA",
  title: "Estágio 83 alcançado",
  text: "A conta passou do estágio 82 (Silver Beach, Corrosive Empress com counter de Calamity) e está no 83. A run da virada foi um draft em que os dois personagens iniciais entraram só com as blessings gratuitas do nível permanente — a Bounty Hunter começou com contador 3 e o Sword Demon com 2. Prints do estágio 83 ainda não foram capturados; a página do estágio fica pendente.",
  confidence: "observada em run" as const,
};

export const strategyNotes: StrategyNote[] = [
  {
    kicker: "ARENA",
    title: "3 tentativas normais por dia",
    text: "Além das recompensas por ranking já documentadas, a Arena dá somente 3 tentativas normais diárias; acima disso, só comprando tickets a 100 diamantes (limite 5/dia).",
    confidence: "observada em run",
  },
  {
    kicker: "ARENA • REFINO",
    title: "God of Arena é investimento fraco para esta conta",
    text: "Avaliação do jogador: com só 3 partidas por dia, adversários geralmente mais fracos e sem intenção de comprar tickets com diamantes, travar um slot de refino com God of Arena rende pouco comparado aos Masteries de modo.",
    confidence: "estratégia do jogador",
  },
  {
    kicker: "REFINO • CICLO 1",
    title: "Co-op Spire Mastery alimenta o motor de equipamentos",
    text: "Mais dano no Co-op → mais andares e ondas vencidas → mais equipamentos dropados → mais desmontagens → mais poções de refino → mais refinos. O Co-op Spire Mastery é o efeito que gira esse ciclo inteiro, por isso vale travar antes dos bônus situacionais.",
    confidence: "estratégia do jogador",
  },
  {
    kicker: "REFINO • CICLO 2",
    title: "Stage Mastery gira o ciclo da campanha",
    text: "Avançar estágios aumenta renda passiva, drops, desbloqueios e summons — que fortalecem a conta e permitem avançar de novo. Stage Mastery acelera exatamente esse loop, sendo a segunda prioridade natural de refino.",
    confidence: "estratégia do jogador",
  },
  {
    kicker: "RAID • AFK",
    title: "Raid instantânea converte 10 de energia em horas de produção",
    text: "A mecânica de Raid instantânea entrega, por 10 de energia, o equivalente à produção AFK acumulada (renda exibida “por hora”). Os valores exatos por hora ainda não foram capturados em print.",
    confidence: "observada em run",
  },
  {
    kicker: "INVOCAÇÕES",
    title: "Segurar summons para o Event Summon",
    text: "Estratégia situacional (não regra permanente): acumular tickets durante a semana e gastar tudo dentro do Event Summon seguinte, para que as mesmas invocações paguem simultaneamente os marcos de 50 (baús + moedas + fichas míticas) e os pontos/rankings do evento.",
    confidence: "estratégia do jogador",
  },
  {
    kicker: "FRAGMENTOS",
    title: "Preço cheio só quando fecha um breakpoint",
    text: "Comprar fragmentos a preço cheio no Hero Exchange só compensa quando a compra completa imediatamente um nível decisivo (ex.: levar uma heroína de 14 para 15, destravando o talento do breakpoint). Apenas “aproximar” do nível não justifica o custo.",
    confidence: "estratégia do jogador",
  },
  {
    kicker: "BOUNTY HUNTER",
    title: "Por que a build de munições funciona",
    text: "Leitura fina da build confirmada: a diversidade de balas especiais (Steel Core, Mercury, Tear, Explosion) alimenta o Ammunition Expert (ATK até 50 acúmulos); Attack Speed (Loading, Frenzy, Kinetic Energy) multiplica a frequência dos procs; e o Barrage Time converte todo esse acúmulo em limpeza de área ao dobrar a ultimate.",
    confidence: "interpretação provável",
  },
  {
    kicker: "COMPOSIÇÃO TEÓRICA",
    title: "Núcleo com Dragon Warrior",
    text: "Composição desenhada no papel, ainda sem run: Dragon Warrior provocando e acumulando HP/sustain via Dragon Soul Link; Sword Demon gerando clone a cada 8s e espalhando Fear; Bounty Hunter limpando com Barrage; Onmyoji/healer sustentando; quinta vaga flexível — provavelmente um Summoner para dar corpos ao Link · Spread.",
    confidence: "estratégia do jogador",
  },
];

export const levelGrowth = {
  kicker: "PROGRESSÃO",
  title: "Quanto um nível vale em atributos",
  text: "Usando a escada limpa do Dragon Warrior (níveis 3→4→5 capturados na mesma sessão), cada nível rendeu de forma praticamente linear: +758 de poder, +440 de ataque, +12,21K de HP e +416-417 de defesa. Já a diferença entre snapshots de datas distintas (ex.: os dois níveis 1 dele, ou os níveis 3 da Flower Spirit em julho vs. agosto) NÃO serve para essa conta: os valores da ficha embutem bônus globais que mudam com a progressão geral. Comparações válidas exigem capturas na mesma sessão.",
  confidence: "confirmada na tela" as const,
};
