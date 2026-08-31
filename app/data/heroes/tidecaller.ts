import type { HeroRecord } from "../types";

export const tidecaller: HeroRecord = {
  slug: "tidecaller",
  name: "Ice Blue Snowbud",
  aliases: ["Tidecaller", "SP Tidecaller"],
  className: "Summon",
  rarity: "SP",
  role: "Invocação / exército de elementais de água / economia de mana",
  summary:
    "Invocadora SP de água: Tidal Summon cria um Tidal Elemental no início da batalha e um Water Elemental a cada skill lançada. O kit escala com mortes no campo — mana por unidade morta (nível 5), a dourada Recycle (crescimento do elemental até 20 acúmulos) e a dourada tsunami (onda em área a cada X mortes).",
  fieldNote:
    "Ficha do nível 1 documentada com tooltips, progressão de talentos completa dos níveis 3 a 45 e Blessing Bestiary do kit Tidal Summon fechado (12 blessings, sendo 2 douradas). Gameplay observado em runs de co-op em 21 ago.: Tidal Elemental gigante com contador de acúmulos chegando a 20 (coerente com o teto da Recycle) acompanhado de um exército de Water Elementals.",
  image: "/screenshots/sp-heroes/tidecaller-profile.jpg",
  artImage: "/screenshots/art/tidecaller-card.jpg",
  identity: [
    "Título exibido: SP Tidecaller",
    "Nome exibido na ficha: Ice Blue Snowbud",
    "Profissão: Summon",
    "Posição exibida: 4",
    "Obtida como \"New Hero\" dentro do Abyss Realm (Abyss Treasure, Floor 1) em 21 ago.",
    "Aparece como opção selecionável de Mythic Hero no Abyss Realm e no seletor de \"UP hero\" do Mythical Summon.",
  ],
  stats: [
    "Snapshot no nível 1 (21-22 ago.): poder 14.279 · ataque 13,04K · HP 159,27K · defesa 5.450 · Dano Crítico global +1,6% · fragmentos 1/5",
    "Em batalha (co-op, 21 ago., observado): HP da Tidecaller entre 164.017 e 168.795; Tidal Elemental gigante com 65.606-67.518 HP e Water Elementals entre ~10.977 e ~33.759 HP",
  ],
  levelSkills: [
    {
      name: "Tidal Summon (habilidade base)",
      description: "Invoca um Tidal Elemental no início da batalha e invoca um Water Elemental sempre que uma skill é lançada.",
      source: "Cabeçalho do Blessing Bestiary.",
    },
    {
      name: "Nível 3 — Hydro Arrow Mastery",
      description:
        "Começa a batalha com Hydro Arrow Mastery obtido. O tooltip aberto na ficha exibe \"Water Arrow Mastery — o water element vira uma flecha d'água ao morrer, atacando inimigos aleatórios\"; a linha do talento diz Hydro Arrow Mastery e o Bestiary diz Water Arrow Mastery — aparentemente dois nomes para a mesma blessing (inconsistência de tradução).",
      source: "Texto confirmado na ficha; tooltip confirmado na tela.",
    },
    {
      name: "Nível 5 — mana por mortes",
      description: "A cada 1 unidade que morre, uma pequena quantidade de mana é restaurada.",
      source: "Texto confirmado na ficha.",
    },
    {
      name: "Nível 8 — Tidal Counterstrike",
      description:
        "Começa a batalha com Tidal Counterstrike obtido. O tooltip do próprio Tidal Counterstrike não foi capturado; na mesma tela um tooltip mostrou \"tidal blowback — ataques do Tidal element causam dano em área\". Hipótese: Tidal Counterstrike e tidal blowback seriam a mesma blessing com nomes divergentes — não confirmado.",
      source: "Texto confirmado na ficha.",
    },
    {
      name: "Nível 10 — Tsunami / Reclaim",
      description:
        "\"Tsunami: Tidal Wave também inflige 1s extra de Stun / Reclaim: cada aumento do multiplicador de dano do Deep-Sea Behemoth é aprimorado ainda mais.\" Primeira menção ao nome Deep-Sea Behemoth (hipótese: seria o Tidal Elemental gigante).",
      source: "Texto confirmado na tela de progressão.",
    },
    {
      name: "Nível 12 — Blessing adicional",
      description: "Ganha uma Blessing adicional depois de selecionar uma Ultimate Skill.",
      source: "Texto confirmado na tela de progressão.",
    },
    {
      name: "Nível 15 — sustain do Tidal Element",
      description:
        "\"Tidal Element restaura vida a si mesmo a cada vez que ataca 5\" — o número/complemento após o 5 possivelmente está cortado no print; o valor completo não é exibido.",
      source: "Texto confirmado na tela de progressão (final possivelmente cortado).",
    },
    {
      name: "Nível 20 — Tsunami / Reclaim",
      description: "\"Tsunami: após lançar Tidal Wave, invoca 3 Water Elementals / Reclaim: Tidal Elementals têm chance de ganhar 2 upgrades extras.\"",
      source: "Texto confirmado na tela de progressão.",
    },
    {
      name: "Nível 25 — Tsunami / Reclaim",
      description:
        "\"Tsunami: Tidal Wave exige menos unidades mortas / Reclaim: quando um Tidal Elemental atinge o crescimento máximo, ganha imunidade a controle e restaura uma grande quantidade de HP.\"",
      source: "Texto confirmado na tela de progressão.",
    },
    {
      name: "Nível 30 — bônus de profissão",
      description: "Aumenta em 8% o dano dos personagens da profissão Summon.",
      source: "Texto confirmado na tela de progressão (\"Increase the DMG of this profession by 8%\").",
    },
    {
      name: "Nível 35 — bônus de profissão",
      description: "Aumenta em 8% o dano dos personagens da profissão Summon.",
      source: "Texto confirmado na tela de progressão.",
    },
    {
      name: "Nível 40 — bônus de profissão",
      description: "Aumenta em 8% o dano dos personagens da profissão Summon.",
      source: "Texto confirmado na tela de progressão.",
    },
    {
      name: "Nível 45 — bônus de profissão",
      description: "Aumenta em 8% o dano dos personagens da profissão Summon.",
      source: "Texto confirmado na tela de progressão.",
    },
    {
      name: "Bestiary — Water Arrow Mastery",
      description: "O water element vira uma flecha d'água ao morrer, atacando inimigos aleatórios. Mesma blessing listada como Hydro Arrow Mastery no talento de nível 3 (inconsistência de tradução).",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — tidal blowback",
      description: "Ataques do Tidal element causam dano em área.",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — Summon Mastery",
      description: "Quantidade de water elements invocados +2.",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — tidal growth",
      description: "O Tidal Elemental aumenta dano e tamanho a cada 3 segundos vivo.",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — Basic attack mastery",
      description: "Há chance de invocar um water element durante o ataque básico.",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — Tidal energy storage",
      description: "Cada skill lançada aumenta o ATK do Tidal Elemental por 3 segundos.",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — Healing Mastery",
      description: "O Water Elemental cura o aliado com menos vida ao morrer.",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — Tidal rebirth",
      description: "O Tidal Element pode ser ressuscitado 1 vez após a morte.",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — Damage Mastery",
      description: "O water element tem a vida reduzida e o poder de ataque muito aumentado.",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — tidal regeneration",
      description:
        "Cada vez que uma skill é liberada, restaura vida (\"blood volume\") aos tidal elements. No Bestiary aparece como \"Locked / Unlock display after trigger\" (texto parcialmente visível); o texto completo foi confirmado no seletor de blessing em batalha e numa carta de escolha do co-op.",
      source: "Blessing Bestiary (bloqueada) + seletor em batalha + carta de co-op",
    },
    {
      name: "Bestiary — tsunami (dourada)",
      description:
        "Sempre que um certo número de unidades morre no campo de batalha, ondas gigantes são liberadas, causando dano a todos os inimigos. Hipótese: corresponde à skill chamada \"Tidal Wave\" nas melhorias de progressão (nomes divergentes).",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — Recycle (dourada)",
      description:
        "A morte de cada unidade no campo de batalha aumenta o dano e o tamanho do tidal element, até 20 vezes. Hipótese: corresponde ao ramo \"Reclaim\" das melhorias de progressão (nomes divergentes). Em run de co-op o Tidal Elemental gigante foi observado com contador de acúmulos em 20.",
      source: "Blessing Bestiary",
    },
  ],
  kit: {
    engine:
      "Duas economias de invocação rodando ao mesmo tempo, e elas se alimentam. De um lado o Water Elemental, descartável, um por skill lançada, cujo valor está em morrer. Do outro o Tidal Elemental, único e permanente, cujo valor está em crescer. Quase toda blessing da Tidecaller ou fabrica corpos descartáveis, ou converte a morte deles em recurso, ou engorda o colosso.",
    loops: [
      {
        name: "O elemental de água nasce para morrer",
        text: "Cada skill lançada invoca um Water Elemental. Water Arrow Mastery faz o corpo virar flecha ao morrer; Healing Mastery faz ele curar o aliado mais ferido ao morrer; o talento de nível 5 devolve mana a cada unidade que morre. Morrer é o pagamento, e a mana devolvida financia a próxima skill, que invoca o próximo corpo. O ciclo se fecha sozinho.",
      },
      {
        name: "Morte no campo engorda o colosso",
        text: "A dourada Recycle sobe dano e tamanho do Tidal Elemental a cada unidade morta, até 20 acúmulos, e a dourada tsunami solta uma onda a cada tantas mortes. tidal growth acrescenta crescimento por tempo vivo. O contador que manda no dano dela não é o relógio: é o número de corpos que caíram.",
      },
      {
        name: "Onde os dois ciclos se cruzam",
        text: "Se as unidades que ela mesma invoca contam como mortes no campo, os Water Elementals descartáveis deixam de ser dano de raspão e viram o combustível do colosso — ela fabricaria o próprio contador. As duas descrições usam a mesma expressão (\"cada unidade que morre\" / \"cada unidade no campo de batalha\") sem dizer de que lado, e a diferença muda a heroína inteira. Está na lista de pendências.",
      },
      {
        name: "Duas estradas a partir do nível 10",
        text: "Os níveis 10, 20 e 25 sempre oferecem a mesma bifurcação. Tsunami empurra para área: stun extra, três elementais por onda e onda mais barata em mortes. Reclaim empurra para o colosso: upgrades extras, crescimento melhorado e, no 25, imunidade a controle mais cura grande no acúmulo máximo. Não é escolha cosmética — são dois heróis diferentes saindo da mesma ficha.",
      },
    ],
  },
  combos: [
    {
      name: "Fábrica de corpos",
      status: "hipótese",
      needs: ["Summon Mastery", "Basic attack mastery", "tidal regeneration"],
      text: "Summon Mastery soma +2 elementais por invocação e Basic attack mastery dá chance de invocar no ataque básico, tirando a invocação da dependência de lançar skill. Com tidal regeneration devolvendo vida aos tidal elements a cada skill, o campo fica permanentemente povoado — e cada corpo a mais é uma morte futura, ou seja, mana, cura, flecha e acúmulo de Recycle.",
    },
    {
      name: "Colosso de 20 acúmulos",
      status: "em teste",
      needs: ["Recycle (dourada)", "tidal growth", "Tidal rebirth", "Reclaim (níveis 10/20/25)"],
      text: "O objetivo declarado da build principal: levar o Tidal Elemental aos 20 acúmulos. tidal growth adianta o crescimento por tempo, Reclaim melhora cada degrau e o 25 fecha com imunidade a controle e cura grande no topo. Tidal rebirth existe justamente porque perder o colosso apaga a run inteira — é seguro, não dano. Já houve run de co-op com o contador observado em 20.",
    },
    {
      name: "Onda barata",
      status: "hipótese",
      needs: ["tsunami (dourada)", "Tsunami (nível 25)", "Summon Mastery"],
      text: "A dourada dispara a onda a cada certo número de mortes e o nível 25 reduz esse número. Se as invocações próprias contarem, encher o campo de elementais descartáveis passa a ser a forma mais barata de girar a onda — a mesma pergunta em aberto do ciclo cruzado decide se este combo existe.",
    },
    {
      name: "Elemental de vidro",
      status: "hipótese",
      needs: ["Damage Mastery", "Water Arrow Mastery", "nível 5"],
      text: "Damage Mastery corta a vida do water element e sobe muito o ataque dele. Numa heroína em que morrer é o pagamento, vida baixa não é defeito: acelera a flecha da Water Arrow Mastery, a cura da Healing Mastery e a mana do nível 5. É a peça mais contraintuitiva do kit e provavelmente a mais forte.",
    },
  ],
  breakpoints:
    "O nível 5 dela é provavelmente o degrau mais barato do elenco vermelho em relação ao que entrega: mana a cada unidade que morre, numa heroína cuja profissão fabrica unidades descartáveis. Custa 20 fragmentos desde o 1 e liga o ciclo econômico inteiro. Os degraus 20 e 25 melhoram muito o kit, mas entram na faixa em que o fragmento por nível já é sessenta.",
  strengths: [
    "Presença permanente no campo: ela ocupa espaço com corpos, o que divide aggro sem gastar peça defensiva",
    "Economia fechada de mana — as mortes que ela mesma provoca pagam as próximas invocações",
    "Escala com bagunça: quanto mais unidades morrem por segundo, mais rápido o colosso cresce e mais ondas saem",
    "Duas rotas legítimas na mesma ficha, então o draft raramente fica sem caminho",
    "Um corpo grande e resistente que, no topo do Reclaim, ganha imunidade a controle",
  ],
  weaknesses: [
    "Rampa longa: 20 acúmulos não chegam cedo, e antes disso o colosso é um invocado comum",
    "Boss sem acompanhantes é o pior cenário — sem mortes no campo não há Recycle nem tsunami, e sobra o dano base",
    "Perder o Tidal Elemental apaga o acúmulo da run; Tidal rebirth cobre uma vez e mais nada",
    "A ficha é um campo minado de nomes: Hydro/Water Arrow Mastery, Tsunami/Tidal Wave, Reclaim/Recycle, Tidal Counterstrike/tidal blowback — quatro pares divergentes só nesta heroína, o que dificulta reconhecer no draft o que já se tem",
    "O ponto central do kit — se invocação própria conta como morte no campo — não está confirmado, e ele decide se ela é autossuficiente ou dependente do time",
  ],
  builds: [
    {
      name: "Colosso de maré (Recycle)",
      status: "rascunho",
      summary:
        "Direção derivada do Bestiary e de uma run de co-op observada: empilhar Recycle com mortes em massa para transformar o Tidal Elemental num gigante de 20 acúmulos, sustentado por tidal regeneration e alimentado por invocações constantes (Summon Mastery, Basic attack mastery).",
      priorities: ["Recycle (dourada)", "Summon Mastery", "tidal regeneration", "Tidal energy storage", "tidal growth", "Basic attack mastery"],
    },
  ],
  synergies: [
    "Hipótese — a recuperação de mana por mortes tende a combinar com exércitos de summons descartáveis (Maya, Necromancer)",
    "Hipótese — o talento de nível 5 (mana por morte), a Recycle e a tsunami escalam todos com quantidade de mortes no campo; conteúdo com hordas favorece o kit inteiro",
    "Observado — funcionou como suporte de invocação em times de co-op com Sword Demon, Bounty Hunter, Onmyoji e Dragon Warrior (dano próprio modesto: 625,8K-893,54K no estágio 15 de boss; 2,61M-2,78M no andar 15 do co-op, contra 9,64M-11,75M do Sword Demon nas mesmas runs)",
  ],
  evidence: [
    "Ficha SP Tidecaller no nível 1 (22 ago. 2026)",
    "Obtenção como New Hero no Abyss Realm / Abyss Treasure (21 ago. 2026)",
    "Ficha nível 1 com tooltips de Water Arrow Mastery e tidal blowback (21 ago. 2026)",
    "Progressão de talentos completa dos níveis 3 a 45 (21 ago. 2026)",
    "Blessing Bestiary \"Tidal Summon\" em 3 telas — 12 blessings, incluindo as douradas tsunami e Recycle",
    "Seletores de blessing em batalha (estágio 10 Elite e Level 12) e painel de co-op Level 7",
    "Carta de escolha no co-op Level 2 com o texto completo de tidal regeneration",
    "Runs de co-op Levels 7-15 com Tidal Elemental gigante (stack 20) e exército de Water Elementals; painéis de dano dos andares/estágios 15",
  ],
  evidenceImages: [
    { src: "/screenshots/sp-heroes/tidecaller-profile.jpg", caption: "Ficha SP Tidecaller — Ice Blue Snowbud no nível 1" },
    { src: "/screenshots/tidecaller/profile-level-1-water-arrow.jpg", caption: "Ficha nível 1 com tooltip de Water Arrow Mastery" },
    { src: "/screenshots/tidecaller/talents-3-8-tidal-blowback.jpg", caption: "Talentos dos níveis 3-8 com tooltip de tidal blowback" },
    { src: "/screenshots/tidecaller/progression-10-12.jpg", caption: "Progressão do nível 10 (Tsunami/Reclaim, Deep-Sea Behemoth)" },
    { src: "/screenshots/tidecaller/progression-12-15.jpg", caption: "Progressão dos níveis 12 e 15" },
    { src: "/screenshots/tidecaller/progression-20-25.jpg", caption: "Progressão do nível 20 (Tsunami/Reclaim)" },
    { src: "/screenshots/tidecaller/progression-25-30.jpg", caption: "Progressão do nível 25 e início do 30" },
    { src: "/screenshots/tidecaller/bestiary-tidal-summon-1.jpg", caption: "Blessing Bestiary — Tidal Summon, parte 1" },
    { src: "/screenshots/tidecaller/bestiary-tidal-summon-2.jpg", caption: "Blessing Bestiary — Tidal Summon, parte 2" },
    { src: "/screenshots/tidecaller/bestiary-tidal-summon-3.jpg", caption: "Blessing Bestiary — parte 3, com as douradas tsunami e Recycle" },
    { src: "/screenshots/tidecaller/coop-tidal-regeneration-card.jpg", caption: "Carta de co-op com o texto completo de tidal regeneration" },
  ],
  pending: [
    "Confirmar se a morte de invocações próprias conta para Recycle, para tsunami e para a mana do nível 5 — decide se a Tidecaller é um motor fechado ou dependente do campo inimigo",
    "Comparar as rotas Tsunami e Reclaim numa mesma faixa de estágio; hoje só a rota do colosso tem run observada",
    "Abrir o tooltip específico de Tidal Counterstrike (confirmar ou descartar a hipótese de que é a tidal blowback)",
    "Confirmar o final possivelmente cortado do talento de nível 15 (\"...every time it attacks 5\")",
    "Verificar se existe linha de progressão no nível 50 (a ficha documentada vai até o 45)",
    "Confirmar se Deep-Sea Behemoth é o Tidal Elemental gigante e se Tidal Wave/tsunami e Reclaim/Recycle são os mesmos efeitos com nomes divergentes",
    "Documentar a Exclusive Gem, a Story e a aba Summon da ficha (botões vistos, não abertos)",
    "Registrar os desbloqueios reais ao subir de nível (todos os talentos foram lidos com o herói ainda no nível 1)",
  ],
};
