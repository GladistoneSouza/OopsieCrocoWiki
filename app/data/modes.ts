// Um dia inteiro de Guild Raid fotografado em 31 ago. 2026, com as tres
// tentativas e o ranking de dano de cada uma. E a primeira medicao real de
// quem carrega o dano desta conta.
export const guildRaidDay = {
  kicker: "UM DIA DE IGRIS, MEDIDO",
  title: "Três tentativas, e a arqueira dourada fez 74% do dano na melhor delas",
  intro:
    "As regras do modo a wiki já tinha. O que faltava era desempenho. Em 31 ago. 2026 as três tentativas do dia foram fotografadas do começo ao fim, com o ranking de dano aberto — e o resultado não é o que as análises de kit vinham supondo.",
  columns: ["Tentativa", "Dano", "Acumulado", "Boss Damage Boost", "Quem liderou"],
  rows: [
    { n: "1ª", dano: "50,62M", acc: "50,62M", boost: "+215% → +220%", lider: "Eria — Bounty Hunter, 37,71M" },
    { n: "2ª", dano: "45,16M", acc: "95,78M", boost: "+230%", lider: "Eria — Bounty Hunter" },
    { n: "3ª", dano: "19,45M", acc: "115,23M", boost: "—", lider: "Karl — Shadow Wolf, 5,9M" },
  ],
  split:
    "O ranking da melhor tentativa: Bounty Hunter 37,71M, Sword Demon 10,95M, Shadow Wolf 1,09M, Fire Spirit Master 607,85K e Rumble 68,45K. A arqueira sozinha responde por 74% do total, e o Kazres — o projeto vermelho principal da conta — por 22%.",
  reading:
    "Isso desloca uma suposição que atravessa toda a análise de personagem: a discussão vinha girando em torno de qual vermelho carrega, e quem carrega é uma SSR de classe Archer. Não invalida o kit de ninguém, mas mostra que kit lido e dano medido não são a mesma coisa — e que só o Kazres e a Eria têm número.",
  boost:
    "O Boss Damage Boost foi lido em +215%, +220% e +230% em tentativas sucessivas, o que combina com o registro anterior de que ele sobe com o tempo. A barra do Igris começou a primeira tentativa em 113,77M e a segunda em 37,12M: o HP não reseta entre tentativas do mesmo dia.",
  pending: [
    "Repetir o dia com a composição trocada para isolar quanto do resultado é a Eria e quanto é a ordem das blessings sorteadas",
    "Medir o momento exato em que o Boss Damage Boost começa a subir",
    "Registrar a recompensa recebida por tentativa, não só a fixa de 40 emblemas por vitória",
  ],
};

export const otherModes = [
  {
    kicker: "BOSS DA GUILDA • IGRIS",
    title: "3 tentativas diárias, dano acumulado",
    text: "Igris é o boss da guilda: 3 tentativas por dia, com o dano somado entre elas (Current / Accumulated / Best Damage) e recompensa fixa de 40 emblemas de coroa por vitória. O boss começa sem fúria; depois de um tempo (algo entre 50 e 80 segundos, ainda sem medição exata) ele se bufa com Boss Damage Boost +200% e o valor sobe a cada segundo (+210% → +230% capturados). Barras de HP vistas: 575M a 2,26B, conforme o nível da escada.",
  },
  {
    kicker: "ABYSS REALM",
    title: "Layers sazonais com heróis míticos",
    text: "Modo por camadas (Layers) com fraqueza de classe por andar e seleção de 2 heróis míticos. Abyss Treasure entrega baús por floor (chaves: 2 por herói Mythic invocado na Hero Season; 1 a cada 2 pets roxos sintetizados na Pet Season). Baús observados: Layers 5-6 com 150 diamantes + 5 cubos; Layer 20 com gemas rosas. Tudo reseta por temporada e as chaves não acumulam entre seasons.",
  },
  {
    kicker: "EXPEDITION SQUAD",
    title: "Expedições idle de 12 horas",
    text: "Quatro times de 2 heróis partem em expedições de 12h. A qualidade da aventura (SP/SSR) muda a tabela de recompensas — medalhas de classe e orbes em quantidades diferentes. Tem Quick Deploy para preencher os times automaticamente.",
  },
  {
    kicker: "DUNGEON • DRAFT",
    title: "Dungeon com escolha de heróis",
    text: "Dungeon de 15 níveis em que o próprio time é montado por cartas: 2 heróis no nível 1 e cartas extras nas rodadas seguintes, com 1 refresh por rodada. Existe um item consumível \"Go to Level 10\" que pula direto para o nível 10.",
  },
  {
    kicker: "ARENA",
    title: "PvP com recompensa diária por ranking",
    text: "São 3 tentativas normais por dia; tickets extras custam 100 diamantes (limite 5/dia). Recompensas diárias por faixa de colocação (1º lugar leva item exclusivo + 100 diamantes + 15 tickets; faixas até 101-150 documentadas).",
  },
];

export const inRunMechanics = [
  {
    kicker: "LUCKY SPIN",
    title: "Roleta da carroça",
    text: "Evento aleatório dentro da run: roleta de 12 casas misturando blessings de herói e bônus de atributo (+5%/+7%/+10% de ATK, HP, redução de dano...). São até 3 giros — o primeiro é grátis (ou via anúncio) e o segundo custa 15% do HP atual.",
  },
  {
    kicker: "ALCHEMY MASTER",
    title: "Transmutação de blessing",
    text: "Evento que permite rerolar uma blessing já obtida (\"Start Alchemy\"), com opção de sair mantendo a atual. Na captura, a taxa de sucesso exibida era 100%.",
  },
  {
    kicker: "REFRESH & TIMER",
    title: "Regras da escolha de blessings",
    text: "A tentativa começa escolhendo 2 de 4 heróis. Depois, as rodadas de Choose misturam novas entradas de herói com blessings e melhorias dos heróis já presentes. Cada rodada mostrou 1 refresh próprio; a partir do meio da tentativa também aparecem refreshes por anúncio, com 3 anúncios disponíveis por rodada. Se o tempo esgotar, o jogo escolhe sozinho — timers observados de 2 a 14 segundos.",
  },
  {
    kicker: "ESCOLHAS • ROTA",
    title: "Escolhas criam ou travam a formação",
    text: "A primeira tentativa do estágio 83 mostrou o sistema em prática: Sword Demon + Onmyoji foram escolhidos no início, Bounty Hunter entrou depois, e as ofertas seguintes passaram a puxar linhas específicas como munições, Yang/Yin e Fear. Como heróis fora da rota continuam aparecendo, cada escolha também decide quais famílias de cartas vão disputar espaço nas próximas rodadas.",
  },
  {
    kicker: "INIMIGOS • VARIAÇÃO",
    title: "Restrições dependem do estágio",
    text: "Os inimigos não parecem mudar aleatoriamente por tentativa: cada estágio/mapa observado tem seu próprio conjunto. Por isso, efeitos que prejudicam Mage, Calamity, Archer/Shooter ou Summon devem ser registrados no estágio correto. O 82 Silver Beach tinha inimigos com resposta contra Calamity; o 83 Moonshade mostrou Restrain contra Summon, sem evidência de anti-Calamity nesse mapa. Bone Desert aparece nas capturas como 11.Bone Desert, com Not Recommended para Summon e boss/elite fracos contra azul.",
  },
  {
    kicker: "CLASS BONUS",
    title: "Classes sorteadas com +30%",
    text: "No início de runs de Co-op, o jogo sorteia classes que recebem +30% de dano naquela run (ex.: Archer e Summon na dificuldade 5 capturada) — muda a escolha de carry a cada tentativa.",
  },
];

export const inRunMechanicShots = [
  {
    src: "/screenshots/campaign/early-campaign-green-restrain-opening-pick.jpg",
    alt: "Escolha inicial de heróis em Bone Desert com Restrain contra Summon",
    caption: "11.Bone Desert: escolha 2 de 4 heróis, item Go to Level 10 e Restrain contra Summon.",
  },
  {
    src: "/screenshots/campaign/stage-11-bone-desert-map.jpg",
    alt: "Mapa Bone Desert com Not Recommended para Summon",
    caption: "11.Bone Desert: mapa marcado como Not Recommended para Summon.",
  },
  {
    src: "/screenshots/campaign/stage-11-bone-desert-bosses.jpg",
    alt: "Ficha de Bone Desert com Stone Giant e Land Shark King",
    caption: "Bone Desert: Stone Giant e Land Shark King aparecem como alvos principais fracos contra azul.",
  },
  {
    src: "/screenshots/campaign/early-campaign-poison-bug-tooltip.jpg",
    alt: "Tooltip do Poison Bug em campanha inicial",
    caption: "Poison Bug: exemplo de inimigo da sequência inicial, com veneno por ataque básico.",
  },
] as const;
