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
  title: "Estágio 83 Moonshade alcançado",
  text: "A conta passou do estágio 82 Silver Beach e chegou ao 83 Moonshade em 24 ago. 2026. O ponto zero do estágio 83 foi registrado antes da primeira tentativa: Highest Record Wave 0/15, conta Lv.85 e 132,02K de poder geral. A composição pós-clear do 82 também ficou capturada: Sword Demon, guerreiro vermelho, Fire Spirit Master, suporte de chapéu e Bounty Hunter/Gunner, com Global Critical DMG de 672,2%.",
  confidence: "confirmada na tela" as const,
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
    text: "A mecânica de Raid instantânea entrega, por 10 de energia, o equivalente à produção AFK acumulada (renda exibida por hora). Snapshot de 12 ago., no estágio 69: 87,41K de poder geral, 361 gold/h + 16 recursos/h. Snapshot de 24 ago., após o 82 Silver Beach: 395 gold/h + 17 recursos/h, limite de 12 horas e recompensas incluindo EXP, gold, materiais, livros/scrolls e equipamentos Lv.80.",
    confidence: "observada em run",
  },
  {
    kicker: "ESTÁGIO 83 • REGENERATION",
    title: "Moonshade é outro teste contra cura",
    text: "A ficha do 83 documenta a Corrosive Empress com Devour, Split e Regeneration. A cura é formalmente canalizada: ela restaura HP continuamente e a cura aumenta conforme o tempo de canalização. Isso separa o 83 do histórico do 75: o 75 registra uma solução prática anti-heal/DOT, enquanto o 83 traz evidência direta de uma mecânica oficial de Regeneration.",
    confidence: "confirmada na tela",
  },
  {
    kicker: "ESTÁGIO 83 • PRIMEIRA TENTATIVA",
    title: "O primeiro bloqueio veio antes da chefe",
    text: "A primeira tentativa documentada de Moonshade caiu no nível 10/15, ainda contra a sequência do elite Octopus King. O estágio 83 mostrou Restrain contra Summon e fraqueza azul nos alvos principais, sem evidência de inimigo anti-Calamity nesse mapa. O bloqueio prático veio antes da Corrosive Empress.",
    confidence: "confirmada na tela",
  },
  {
    kicker: "BLESSINGS • ROTA",
    title: "Monte a formação por rota, não por carta isolada",
    text: "Não basta pegar a carta mais forte da rodada: é preciso decidir cedo a rota da tentativa e escolher dentro dela — chefe, ondas, sobrevivência ou resposta direta à mecânica perigosa da fase. Uma escolha fora da rota ocupa a vaga de uma peça importante e pode atrasar a habilidade final que fecha a formação.",
    confidence: "estratégia do jogador",
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
    kicker: "FRAGMENTOS • GANHO MARGINAL",
    title: "Compare o que o mesmo pacote melhora no núcleo",
    text: "Regra mais ampla que o breakpoint: antes de investir, compare quanto o mesmo pacote de fragmentos melhora efetivamente o núcleo da conta em cada opção — em vez de despejar automaticamente no herói de maior raridade. Um SR do núcleo fechando breakpoint costuma render mais que um SP parado no banco.",
    confidence: "estratégia do jogador",
  },
  {
    kicker: "HERÓIS R/AZUIS",
    title: "Herói barato também paga o investimento",
    text: "Os níveis de heróis R/azuis destravam bônus globais (Dano Crítico da conta) e bônus de profissão que valem para TODOS os personagens daquela classe. Quando a profissão é a mesma do carry do núcleo, subir o herói barato é das formas mais baratas de fortalecer o time inteiro — mesmo que ele nunca entre em campo.",
    confidence: "estratégia do jogador",
  },
  {
    kicker: "BOUNTY HUNTER",
    title: "Por que a linha de munições funciona",
    text: "Leitura da linha confirmada: a diversidade de balas especiais (Steel Core, Mercury, Tear, Explosion) alimenta o Ammunition Expert (ATK até 50 acúmulos); velocidade de ataque (Loading, Frenzy, Kinetic Energy) aumenta a frequência das ativações; e Barrage Time converte esse acúmulo em limpeza de área ao dobrar a habilidade final.",
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
