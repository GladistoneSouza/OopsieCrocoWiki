import type { HeroRecord } from "../types";

export const redQueen: HeroRecord = {
  slug: "red-queen",
  name: "Livia · Flameveil",
  aliases: ["Red Queen", "SP Red Queen"],
  className: "Mage",
  rarity: "SP",
  role: "Maga de fogo / dano em área contínuo (Flame Storm + Lava Tiles)",
  summary:
    "Maga SP de fogo construída em torno de Flame Storm: tempestades que pulsam dano em área por 3 segundos e deixam Lava Tiles no chão. O Bestiary abre duas rotas — acelerar/multiplicar as tempestades ou potencializar o campo de lava — coroadas pelas douradas Hell of Fire is Coming (285% de ataque em área a cada 2 tempestades) e Molten Core (120% de ataque por segundo em todos os inimigos).",
  fieldNote:
    "Ficha documentada no nível 1 em duas datas (21 e 22 ago., com poder divergente — ver Stats). Progressão de talentos lida na tela até o nível 30 (nível 35 aparece cortado) e Blessing Bestiary de Flame Storm transcrito por completo. As telas do jogo alternam as grafias Flame Storm / Fire Storm / Firestorm e Lava Tiles / lava block / plots / Lava Terrace / lava fields para os mesmos elementos — inconsistência de tradução registrada como está.",
  image: "/screenshots/sp-heroes/red-queen-profile.jpg",
  artImage: "/screenshots/art/red-queen-card.jpg",
  identity: [
    "Título exibido: SP Red Queen",
    "Nome exibido na ficha: Livia · Flameveil",
    "Profissão: Mage",
    "Posição exibida: 8",
    "Hero Exchange: pode ser trocada por 3.000 Hero Coins (limite semanal 1/1)",
    "Aparece como opção selecionável de 'Probability UP' no Mythical Summon",
  ],
  stats: [
    "Snapshot no nível 1 (22 ago.): poder 14.279 · ataque 13,04K · HP 159,27K · defesa 5.450 · Dano Crítico global +1,6% · fragmentos 2/5 · essência Mage 1524/60 · ALL 396",
    "Snapshot no nível 1 (21 ago.): poder 14.026 · ataque 12,81K · HP 156,44K · defesa 5.354 · Dano Crítico global +1,6% · fragmentos 2/5 · essência Mage 1427/60 · ALL 256",
    "Observação: os dois snapshots são do mesmo nível 1 em datas diferentes e divergem em poder/ataque/HP/defesa (14.026 → 14.279); a causa não aparece na tela — ambos os valores ficam registrados.",
    "Nível 16 observado no Hero Comp (5/60 fragmentos), em time com Onmyoji, Sword Demon e Bounty Hunter (observado).",
    "Poder em campo observado: 244.616 numa run do Level 15 (boss cogumelo) e 219.514 na luta contra Igris — neste último a identificação da heroína é incerta no print (observado).",
  ],
  levelSkills: [
    {
      name: "Flame Storm (skill base)",
      description:
        "Invoca uma Flame Storm que causa dano em área aos inimigos a cada segundo por 3 segundos; ao terminar, gera 6 Lava Tiles que causam dano menor contínuo.",
      source: "Blessing Bestiary — texto da skill base.",
    },
    {
      name: "Bestiary — Wind Flame · Hell",
      description: "\"Firestorm Damage greatly increased\" — dano da Firestorm muito aumentado; o valor não é exibido.",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — Earth Fire · Penetration",
      description:
        "\"Every time 6 plots are summoned, the defense penetration effect is increased.\" — a cada 6 blocos invocados, aumenta a penetração de defesa. Atenção: o tooltip da mesma blessing na ficha diz \"lava block DMG slightly increased\" (dano do bloco de lava levemente aumentado) — os dois textos divergem e ambos ficam registrados.",
      source: "Blessing Bestiary + tooltip na ficha de progressão.",
    },
    {
      name: "Bestiary — Wind Flame · Singing",
      description: "Depois de invocar uma Fire Storm, acelera a velocidade de conjuração da Fire Storm.",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — Earth fire · Frequent occurrence",
      description: "Quantidade de blocos de lava gerados +3.",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — Wind Flame · Twins",
      description: "Quantidade de Firestorm +1.",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — Earth fire · boiling",
      description: "Intervalo de dano do bloco de lava encurtado.",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — The wind and flames never cease",
      description: "Duração da Fire Storm +2 segundos.",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — Ground fire · spread",
      description: "O bloco de lava tem probabilidade de se espalhar quando termina.",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — Wind Flame · Rage",
      description: "A Fire Storm causa dano adicional toda vez que causa dano.",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — Earth Fire · Melt",
      description: "O bloco de lava tem chance de causar dano adicional igual a 1% da vida atual do inimigo.",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — Hell of Fire is Coming (dourada)",
      description: "Depois de cada 2 Fire Storms invocadas, causa dano igual a 285% do poder de ataque a todos os inimigos.",
      source: "Blessing Bestiary — blessing dourada (ultimate).",
    },
    {
      name: "Bestiary — Molten Core (dourada)",
      description: "Depois de liberar uma certa quantidade de campos de lava, causa dano igual a 120% do poder de ataque a todos os inimigos em campo a cada segundo.",
      source: "Blessing Bestiary — blessing dourada (ultimate).",
    },
    {
      name: "Nível 3 — Wind Flame · Hell",
      description: "Começa a batalha com Wind Flame · Hell obtido. Tooltip aberto na ficha: \"Firestorm damage greatly increased\".",
      source: "Texto confirmado na tela de progressão; nível bloqueado no print.",
    },
    {
      name: "Nível 5 — Firestorm consecutivo",
      description: "Firestorm tem chance de ser conjurado consecutivamente; a chance não é exibida.",
      source: "Texto confirmado na tela de progressão.",
    },
    {
      name: "Nível 8 — Earth Fire · Penetration",
      description: "Começa a batalha com Earth Fire · Penetration obtido. Tooltip aberto na ficha: \"lava block DMG slightly increased\" (texto divergente do Bestiary — ver a entrada da blessing).",
      source: "Texto confirmado na tela de progressão; nível bloqueado no print.",
    },
    {
      name: "Nível 10 — Inferno Descends / Molten Heart",
      description:
        "Inferno Descends: as bolas de fogo invocadas explodem ao atingir, causando dano em área. Molten Heart: cada instância de dano tem chance de acertar 2 vezes extras.",
      source: "Texto confirmado na tela de progressão; nível bloqueado no print.",
    },
    {
      name: "Nível 12 — Blessing adicional",
      description: "Ganha uma Blessing adicional depois de selecionar uma Ultimate Skill.",
      source: "Texto confirmado na tela de progressão; nível bloqueado no print.",
    },
    {
      name: "Nível 15 — dano crescente",
      description: "Fire Storm e Lava Terrace adicionam uma pequena quantidade de dano toda vez que causam dano.",
      source: "Texto confirmado na tela de progressão; nível bloqueado no print.",
    },
    {
      name: "Nível 20 — Inferno Descends / Molten Heart",
      description: "Inferno Descends: aumenta a velocidade de conjuração depois de matar inimigos. Molten Heart: também aumenta a penetração de defesa por 3 segundos.",
      source: "Texto confirmado na tela de progressão; nível bloqueado no print.",
    },
    {
      name: "Nível 25 — Inferno Descends / Molten Heart",
      description: "Inferno Descends: gera 3 bolas de fogo que atingem inimigos aleatórios. Molten Heart: cada instância de dano tem chance de acertar 1 vez extra.",
      source: "Texto confirmado na tela de progressão; nível bloqueado no print.",
    },
    {
      name: "Nível 30 — bônus de profissão",
      description: "Aumenta em 8% o dano dos personagens da profissão Mage.",
      source: "Texto confirmado na tela de progressão; nível bloqueado no print.",
    },
    {
      name: "Nível 35 — bônus de profissão (parcial)",
      description: "O início do texto visível repete \"Increase the DMG of this profession by 8%\", mas a linha aparece cortada no print.",
      source: "Tela de progressão — texto parcialmente cortado.",
    },
  ],
  kit: {
    engine:
      "Duas famílias com nome próprio no Bestiary: Wind Flame para a tempestade e Earth/Ground Fire para o chão de lava. Elas não são paralelas — a tempestade fabrica o chão, porque toda Flame Storm termina deixando 6 blocos. Quem investe em tempestade recebe lava de brinde; quem investe em lava não recebe tempestade nenhuma. Essa assimetria é a coisa mais importante da ficha.",
    loops: [
      {
        name: "A tempestade produz o terreno",
        text: "Wind Flame · Twins soma uma tempestade, The wind and flames never cease soma 2 segundos de duração e Wind Flame · Singing acelera a conjuração depois de cada invocação. Como cada tempestade encerrada gera 6 blocos, cada peça do ramo do vento também multiplica o ramo do chão sem custar escolha.",
      },
      {
        name: "O chão se replanta",
        text: "Earth fire · Frequent occurrence soma +3 blocos, Ground fire · spread dá chance de o bloco se espalhar quando termina e Earth fire · boiling encurta o intervalo de dano. Com spread no jogo, o campo deixa de precisar de reposição constante e passa a se manter sozinho.",
      },
      {
        name: "Duas douradas, dois contadores",
        text: "Hell of Fire is Coming conta tempestades — a cada 2, 285% do ataque em todos os inimigos. Molten Core conta campos de lava liberados — passado um limiar, 120% do ataque por segundo em todos. Cada família alimenta a sua dourada, e como a tempestade fabrica lava, a rota do vento carrega as duas ao mesmo tempo. A rota do chão carrega uma só.",
      },
      {
        name: "Multiplicar instância, não dano",
        text: "Molten Heart dá chance de cada instância de dano acertar 2 vezes extras no nível 10 e mais 1 no 25, e o talento de nível 15 soma dano toda vez que tempestade ou lava causam dano. Como o kit dela é feito de muitos tiques pequenos, encurtar o intervalo do bloco e alongar a duração da tempestade não somam dano: aumentam a quantidade de eventos que esses multiplicadores podem pegar.",
      },
    ],
  },
  combos: [
    {
      name: "A rota do vento cobra em dobro",
      status: "hipótese",
      needs: ["Wind Flame · Twins", "The wind and flames never cease", "Wind Flame · Singing", "Hell of Fire is Coming (dourada)", "Molten Core (dourada)"],
      text: "Priorizar tempestade é a única escolha da ficha que carrega os dois contadores dourados ao mesmo tempo, porque cada tempestade encerrada entrega 6 blocos para o contador da Molten Core. É a razão para tratar o ramo Wind Flame como padrão e o Earth Fire como especialização.",
    },
    {
      name: "Fábrica de instâncias",
      status: "hipótese",
      needs: ["Earth fire · boiling", "The wind and flames never cease", "Molten Heart (níveis 10 e 25)"],
      text: "boiling encurta o intervalo do bloco e never cease alonga a tempestade: as duas aumentam quantos tiques de dano acontecem por segundo. Molten Heart multiplica por tique. Empilhar frequência antes de multiplicador é o que faz a diferença entre um ganho somado e um ganho composto.",
    },
    {
      name: "Derreter vida grande",
      status: "hipótese",
      needs: ["Earth Fire · Melt", "Earth fire · Frequent occurrence", "Earth fire · boiling"],
      text: "Melt faz o bloco causar 1% da vida atual do inimigo. Dano percentual não olha o ataque dela, olha a frequência: mais blocos e intervalo mais curto viram mais aplicações do percentual. É a resposta da Red Queen a alvo de vida alta, e a única parte do kit que não depende de escalar ataque.",
    },
    {
      name: "Sala cheia acelera a próxima",
      status: "hipótese",
      needs: ["Inferno Descends (nível 20)", "Inferno Descends (nível 25)", "Wind Flame · Singing"],
      text: "O nível 20 aumenta a velocidade de conjuração depois de matar inimigos e o 25 gera 3 bolas de fogo em alvos aleatórios. Com Singing acelerando a cada invocação, sala com muitos alvos fracos vira um ciclo em que matar acelera conjurar, que mata mais rápido.",
    },
  ],
  strengths: [
    "Dano em área permanente sem precisar mirar: a lava fica no chão trabalhando enquanto ela conjura a próxima tempestade",
    "Duas douradas independentes com contadores próprios, então há duas condições de vitória no draft em vez de uma",
    "Earth Fire · Melt entrega dano percentual, coisa rara no elenco e a melhor ferramenta contra alvo de vida alta",
    "A rota do vento carrega os dois contadores dourados ao mesmo tempo — eficiência de escolha que nenhuma outra ficha oferece",
  ],
  weaknesses: [
    "Nenhuma peça defensiva no kit inteiro: nem escudo, nem redução, nem cura, nem mobilidade",
    "O dano é por tempo, não por explosão — inimigo que entra e sai rápido, ou que precisa morrer agora, é o pior caso dela",
    "A lava é terreno, então depende de o inimigo estar em cima; nenhum texto do jogo confirma o que acontece contra alvo que se move muito, e isso não foi testado",
    "Earth Fire · Penetration tem dois textos oficiais que se contradizem — penetração de defesa a cada 6 blocos no Bestiary, dano do bloco levemente aumentado no tooltip da ficha",
    "Quase nenhum valor exibido nas peças do vento: \"greatly increased\", \"slightly increased\" e chances não numeradas dominam o ramo",
  ],
  builds: [
    {
      name: "Tempestade incessante",
      status: "rascunho",
      summary:
        "Direção derivada apenas do Bestiary: maximizar frequência, quantidade e duração das Fire Storms para alimentar a dourada Hell of Fire is Coming (285% de ataque em área a cada 2 tempestades).",
      priorities: ["Wind Flame · Singing", "Wind Flame · Twins", "The wind and flames never cease", "Wind Flame · Hell", "Wind Flame · Rage", "Hell of Fire is Coming (dourada)"],
    },
    {
      name: "Campo de lava",
      status: "rascunho",
      summary:
        "Direção derivada apenas do Bestiary: multiplicar e intensificar os blocos de lava (quantidade +3, intervalo menor, espalhamento, 1% da vida atual) até destravar Molten Core (120% de ataque por segundo em todos os inimigos).",
      priorities: ["Earth fire · Frequent occurrence", "Earth fire · boiling", "Ground fire · spread", "Earth Fire · Melt", "Earth Fire · Penetration", "Molten Core (dourada)"],
    },
  ],
  synergies: [
    "Observado em campo: escalada em time com Onmyoji, Sword Demon e Bounty Hunter (Hero Comp e runs do Level 15/Igris) — composição observada, sem sinergia descrita em tela.",
  ],
  evidence: [
    "Ficha SP Red Queen no nível 1 (22 ago. 2026) — poder 14.279",
    "Ficha SP Red Queen no nível 1 (21 ago. 2026) — poder 14.026, com tooltips de Wind Flame · Hell e Earth Fire · Penetration",
    "Blessing Bestiary de Flame Storm completo em 3 páginas (10 blessings + 2 douradas)",
    "Telas de progressão dos níveis 10-12, 15-20 e 25-30 (nível 35 cortado)",
    "Hero Exchange: Red Queen por 3.000 Hero Coins (limite semanal 1/1)",
    "Hero Comp com Red Queen nível 16 e runs com poder em campo 244.616 / 219.514 (observado)",
  ],
  evidenceImages: [
    { src: "/screenshots/sp-heroes/red-queen-profile.jpg", caption: "Ficha SP Red Queen — Livia · Flameveil no nível 1 (22 ago., poder 14.279)" },
    { src: "/screenshots/red-queen/bestiary-flame-storm-1.jpg", caption: "Bestiary de Flame Storm (1ª página): skill base, Wind Flame · Hell, Earth Fire · Penetration, Wind Flame · Singing e Earth fire · Frequent occurrence" },
    { src: "/screenshots/red-queen/bestiary-flame-storm-2.jpg", caption: "Bestiary de Flame Storm (2ª página): Wind Flame · Twins, Earth fire · boiling, The wind and flames never cease e Ground fire · spread" },
    { src: "/screenshots/red-queen/bestiary-flame-storm-douradas.jpg", caption: "Bestiary de Flame Storm (3ª página): Wind Flame · Rage, Earth Fire · Melt e as douradas Hell of Fire is Coming e Molten Core" },
    { src: "/screenshots/red-queen/profile-nivel-1-tooltip-wind-flame-hell.jpg", caption: "Ficha nível 1 (21 ago., poder 14.026) com tooltip de Wind Flame · Hell aberto" },
    { src: "/screenshots/red-queen/profile-nivel-1-tooltip-earth-fire-penetration.jpg", caption: "Ficha nível 1 com tooltip de Earth Fire · Penetration (\"lava block DMG slightly increased\")" },
    { src: "/screenshots/red-queen/progressao-10-12.jpg", caption: "Progressão: nível 10 (Inferno Descends / Molten Heart) e nível 12 (Blessing adicional)" },
    { src: "/screenshots/red-queen/progressao-15-20.jpg", caption: "Progressão: nível 15 (dano crescente de Fire Storm/Lava Terrace) e nível 20 (Inferno Descends / Molten Heart)" },
    { src: "/screenshots/red-queen/progressao-25-30.jpg", caption: "Progressão: nível 25 (Inferno Descends / Molten Heart), nível 30 (+8% de dano da profissão) e início do nível 35 cortado" },
  ],
  pending: [
    "Abrir os tooltips das demais blessings para obter os valores ocultos (\"greatly increased\", intervalos, chances de espalhamento)",
    "Esclarecer a divergência de texto de Earth Fire · Penetration (Bestiary fala em penetração de defesa a cada 6 blocos; tooltip da ficha fala em dano do bloco de lava levemente aumentado)",
    "Registrar a chance do Firestorm consecutivo do nível 5",
    "Confirmar a progressão do nível 35 em diante (texto cortado no print)",
    "Explicar a divergência de poder no nível 1 entre 21 ago. (14.026) e 22 ago. (14.279)",
    "Hipótese a verificar: os stats do nível 1 de 21 ago. são idênticos aos da Light Archer nível 1 (14.026 · 12,81K · 156,44K · 5.354), sugerindo stats base compartilhados entre SPs",
    "Confirmar as identificações incertas da Red Queen nos prints de batalha (Igris 219.514 e Abyss Realm), marcadas com \"?\" na triagem",
    "Documentar o Hero Background e as Stories da Red Queen (ainda não capturados)",
  ],
};
