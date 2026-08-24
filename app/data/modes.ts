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
    text: "Os inimigos não parecem mudar aleatoriamente por tentativa: cada estágio/mapa observado tem seu próprio conjunto. Por isso, efeitos que prejudicam Mago, Calamity, Arqueiro/Shooter ou Summon devem ser registrados no estágio correto. O 82 Silver Beach tinha inimigos com resposta contra Calamity; o 83 Moonshade mostrou Restrain contra Summon, sem evidência de anti-Calamity nesse mapa. Bone Desert aparece nas capturas como 11.Bone Desert, com Not Recommended para o ícone verde/pata e boss/elite fracos contra azul.",
  },
  {
    kicker: "CLASS BONUS",
    title: "Classes sorteadas com +30%",
    text: "No início de runs de Co-op, o jogo sorteia classes que recebem +30% de dano naquela run (ex.: Archer e Summoner na dificuldade 5 capturada) — muda a escolha de carry a cada tentativa.",
  },
];

export const inRunMechanicShots = [
  {
    src: "/screenshots/campaign/early-campaign-green-restrain-opening-pick.jpg",
    alt: "Escolha inicial de heróis em campanha inicial com Restrain verde/pata",
    caption: "Exemplo de campanha inicial: escolha 2 de 4 heróis, item Go to Level 10 e Restrain verde/pata.",
  },
  {
    src: "/screenshots/campaign/stage-11-bone-desert-map.jpg",
    alt: "Mapa Bone Desert com Not Recommended para ícone verde/pata",
    caption: "Bone Desert: mapa marcado como Not Recommended para o ícone verde/pata.",
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
