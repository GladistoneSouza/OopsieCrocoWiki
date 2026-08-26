export const summonRules = {
  kicker: "HERO SUMMON",
  title: "10 tickets por invocação",
  text: "Cada invocação de herói consome 10 Hero Summon Tickets. Invocar dá EXP de banner: o Banner Level sobe (Lv.1 → Lv.3 observados) e melhora as recompensas da tabela de taxas.",
};

export const heroSummonRates = {
  intro: "Taxas oficiais exibidas no Rate Details por nível de banner. No Lv.1 não há SSR na tabela; o SSR entra a partir do Lv.2.",
  rows: [
    { item: "SSR", lv1: "—", lv2: "1,99%", lv3: "2,22%" },
    { item: "Mythic Summon Ticket", lv1: "—", lv2: "—", lv3: "0,98%" },
    { item: "SR", lv1: "5,24%", lv2: "—", lv3: "6,46%" },
    { item: "R", lv1: "19,82%", lv2: "—", lv3: "19,46%" },
    { item: "Gold ×100", lv1: "—", lv2: "—", lv3: "15,22%" },
    { item: "Gem Cube", lv1: "—", lv2: "—", lv3: "2,28%" },
    { item: "Random Class Exp ×40 / ×20 / ×10", lv1: "—", lv2: "—", lv3: "1,14% / 1,98% / 4,57%" },
  ],
  note: "Células com — não foram capturadas naquele nível de banner, não significam taxa zero (exceto o SSR no Lv.1, ausente da tabela oficial). O contador de Legendary garantido apareceu com valores diferentes em momentos distintos (35 e 39) — pendente confirmar a regra exata.",
};

export const mythicalSummon = {
  kicker: "MYTHICAL SUMMON",
  title: "Pity duplo: Legendary em 10, Mythic em 50",
  text: "Consome 1 Mythic Summon Scroll por invocação. Garantias exibidas: Legendary a cada 10 e herói Mythic a cada 50 invocações. O jogador escolhe o herói com Probability UP entre 8 míticos (Sword Demon, Tidecaller, Succubus, Light Archer, Flower Spirit, Catwoman, Dragon Warrior, Red Queen). Season Bonus: cada Mythic invocado dá 2 chaves do Abyss Realm.",
  rates: [
    { item: "Herói SP (Mythic)", chance: "2,47%" },
    { item: "Herói SSR", chance: "10,28%" },
    { item: "All Class Exp ×5", chance: "8,88%" },
    { item: "All Class Exp ×10", chance: "78,37%" },
  ],
};

export const heroExchange = {
  kicker: "HERO EXCHANGE",
  title: "Fragmentos por Hero Coins",
  text: "Hero Coins vêm dos baús de marco de invocação e compram fragmentos de herói com limites semanais. Preços observados variaram entre capturas — provavelmente promoções rotativas; os conflitos ficam registrados.",
  rows: [
    { hero: "Sword Demon, Red Queen, Catwoman, Flower Spirit", price: "3.000", limit: "1/semana" },
    { hero: "Light Archer", price: "3.000 (também visto a 1.000)", limit: "1/semana" },
    { hero: "Onmyoji, Phantom, Star Mage, Dark Knight (Lilith), Holy Knight, Pharaoh, Fire Spirit Master", price: "500 com 50% off (Onmyoji também visto a 1.000)", limit: "8/semana" },
    { hero: "Bounty Hunter", price: "1.000 (também vista a 500 com 50% off)", limit: "5-8/semana" },
    { hero: "Snow Witch, Necromancer Apprentice", price: "125", limit: "13/semana" },
  ],
};

// Aquisição de heróis SP (míticos) — confirmado em 26 ago. 2026.
// Documentado aqui porque a expedição precisa de oito SP para abrir as quatro vagas.
export const mythicAcquisition = {
  kicker: "COMO SE DESBLOQUEIA UM SP",
  title: "Duas rotas, só uma com alvo",
  rules: [
    { original: "Use 1 [Mythic Summon Scroll] for 1 [Mythic Summon]", text: "Uma ficha mítica por invocação." },
    { original: "Guaranteed 1 Legendary Hero within 10 [Mythic Summons]", text: "Pity curto, de Legendary." },
    { original: "Guaranteed 1 Mythic Hero within 50 [Mythic Summons]", text: "Pity longo, o que realmente desbloqueia um SP." },
    { original: "View summon rates in Reward Preview", text: "As taxas ficam na aba de prévia." },
  ],
  targeting:
    "O Mythical Summon deixa escolher o herói com Probability UP entre os oito, e a tela mostra o progresso do pity ao lado do alvo: na captura, SP 19/50 com o aviso \"Get Dragon Warrior after 31\". É a única rota que mira um herói específico.",
  randomBox:
    "A Mythical Hero Random Box entrega \"a random Mythic Hero\" entre os oito, sem escolha — e é rara: em cerca de três meses de jogo ativo o dono da conta tirou uma ou duas. Ela aparece como a recompensa \"Chance to Obtain\" do baú Lifetime Pass no marco de 50 invocações do Hero Summon, que já garante 2 fichas míticas por marco.",
  selectionBox:
    "Existe um segundo item, distinto, e a diferença entre os dois foi verificada em jogo pelo dono da conta: a caixa de seleção — Mythical Hero Selection Box ou nome muito próximo — vem de eventos e pacotes, e nela o jogador escolhe qual herói SP quer. Recebendo mais de uma, ainda decide quantos fragmentos de cada herói levar, o que permite adiantar vários desbloqueios em paralelo em vez de fechar um de cada vez. Comportamento observado em uso repetido; o que falta é só o print da tela e o nome exato.",
  shopAmbiguity:
    "A linha Mythic Selection da Immortal Shop (3.000 diamantes, 1 por semana) usa o mesmo ícone da Random Box — baú vermelho com o medalhão dourado —, mas o conteúdo dela nunca foi aberto num print. Se é a caixa aleatória ou a de seleção continua em aberto, e a diferença é grande: uma repete heróis que você já tem, a outra não.",
  consequence:
    "As duas caixas se comportam de forma oposta, e isso foi testado em jogo: uma sorteia, a outra deixa escolher. Na prática sobram duas rotas confiáveis, e ambas são dirigidas: o pity de 50 do Mythical Summon e a Selection Box de eventos e pacotes. A Random Box é boa quando cai — enquanto faltam muitos dos oito, quase tudo que sai é novidade — mas cair uma ou duas em três meses tira dela qualquer papel de planejamento.",
  otherSources:
    "O Battle Pass distribui fichas míticas ao longo da trilha (a Deluxe custa US$ 13,99 na temporada capturada). Outros baús de seleção aparecem em eventos e pacotes, ainda não catalogados.",
  gallery: [
    { src: "/screenshots/summon/mythical-rules.jpg", alt: "Painel Mythical Summoning Rules", title: "As regras", caption: "Pity de Legendary em 10 e de Mythic em 50 invocações." },
    { src: "/screenshots/summon/mythic-up-selection.jpg", alt: "Tela de seleção do herói UP com os oito míticos", title: "Os oito", caption: "Sword Demon, Tidecaller, Succubus, Light Archer, Flower Spirit, Catwoman, Dragon Warrior e Red Queen." },
    { src: "/screenshots/summon/mythic-pity-counter.jpg", alt: "Contador de pity do Mythical Summon", title: "O pity é visível e dirigido", caption: "SP 19/50 com o alvo escolhido: Get Dragon Warrior after 31." },
    { src: "/screenshots/summon/mythical-rates.jpg", alt: "Rate Details do Mythical Summon", title: "Taxas oficiais", caption: "Mythic 2,47% · Legendary 10,28% · All Class Exp ×5 8,88% e ×10 78,37%." },
    { src: "/screenshots/summon/draw-milestone-chest.jpg", alt: "Draw Milestone Chest no marco de 50 invocações", title: "O marco de 50", caption: "Lifetime Pass garante 2 fichas míticas e dá chance da caixa aleatória." },
    { src: "/screenshots/summon/mythical-hero-random-box.jpg", alt: "Mythical Hero Random Box com os oito heróis", title: "A caixa aleatória", caption: "Um Mythic aleatório entre os oito — sem escolha." },
    { src: "/screenshots/summon/battle-pass.jpg", alt: "Trilha do Battle Pass com fichas míticas", title: "Battle Pass", caption: "Fichas míticas ao longo da trilha; Deluxe a US$ 13,99 na temporada capturada." },
  ],
  pending: [
    "Confirmar se a Mythical Hero Random Box pode repetir um herói já desbloqueado",
  "Capturar a Mythical Hero Selection Box — o comportamento já está testado, falta o print da tela e o nome exato",
  "Abrir a linha Mythic Selection da Immortal Shop e registrar se é a caixa aleatória ou a de seleção",
  "Fotografar o e-mail de recompensa do ranking semanal do evento — possível fonte de Selection Box",
    "Registrar quantas fichas míticas a trilha completa do Battle Pass entrega, por faixa",
    "Catalogar as demais fontes de seleção mítica em eventos e pacotes",
    "Verificar se o pity de 50 reinicia ao trocar o herói com Probability UP",
  ],
};

// Evento de invocação — capturado dormente ("Event Not Started") em 26 ago. 2026,
// durante a semana do evento de pet. Os valores são legíveis; o progresso, não.
export const summonEvent = {
  kicker: "EVENTO DE INVOCAÇÃO",
  title: "Onde a ficha mítica fica barata",
  intro:
    "O evento paga pontos por invocar heróis e vende pacotes próprios. Capturado com o aviso \"Event Not Started\" — a semana era do evento de pet —, então preços e conteúdos aparecem, mas as barras de progresso e os contadores de compra são resíduo da edição anterior.",
  headline: {
    title: "As fichas míticas vêm de graça junto dos diamantes",
    text:
      "O Sprint Pack 1 custa US$ 1,39 e entrega 60 diamantes; a loja de diamantes vende esses mesmos 60 por US$ 1,39. O Sprint Pack 2 custa US$ 6,99 e entrega 300 diamantes; a loja cobra US$ 6,99 pelos mesmos 300. Nos dois casos o preço é exatamente o do diamante avulso — as 5 e as 20 fichas míticas, mais o All Class Exp, entram sem custo adicional.",
  },
  columns: ["Pacote", "Conteúdo", "Limite em 7 dias", "Preço"],
  rows: [
    { pack: "Free Pack", content: "20 diamantes", limit: "1/dia", price: "Grátis" },
    { pack: "Sprint Diamond Pack 1", content: "20 fichas de herói + esfera azul ×20", limit: "3", price: "Não legível (esgotado)" },
    { pack: "Sprint Diamond Pack 2", content: "30 fichas de herói + esfera azul", limit: "3", price: "680 diamantes" },
    { pack: "Sprint Diamond Pack 3", content: "100 fichas de herói + esfera azul ×200", limit: "3", price: "2.980 diamantes" },
    { pack: "Sprint Pack 1", content: "5 fichas míticas + 60 diamantes + All Class Exp ×100", limit: "3", price: "US$ 1,39" },
    { pack: "Sprint Pack 2", content: "20 fichas míticas + 300 diamantes + All Class Exp ×300", limit: "3", price: "US$ 6,99" },
  ],
  pityMath:
    "O teto semanal são 3 de cada. Três Sprint Pack 2 dão 60 fichas míticas por US$ 20,97 — sozinhos já ultrapassam o pity de 50 que garante um Mythic, e o herói é escolhido no Probability UP. Somando os três Sprint Pack 1, sobem para 75 fichas por US$ 25,14. Para comparar: o baú Mythic Selection da Immortal Shop custa 3.000 diamantes, cerca de US$ 62, e nem se sabe se deixa escolher.",
  challenge:
    "A aba Challenge Objective paga por Hero Recruitment Points acumulados, em degraus de 30, 60, 90, 120, 240 e 450. Cada degrau devolve esferas azuis (30 nos três primeiros, 50 nos demais) e 5 fichas de herói. Concluir a rodada de 4 rende 100 diamantes, um baú e All Class Exp ×300.",
  gallery: [
    { src: "/screenshots/summon/event-packs.jpg", alt: "Event Packs do evento de invocação", title: "Os pacotes", caption: "Sprint Packs entregam ficha mítica; Sprint Diamond Packs entregam ficha de herói comum." },
    { src: "/screenshots/summon/event-challenge-objective.jpg", alt: "Challenge Objective do evento de invocação", title: "Pontos por invocar", caption: "Seis degraus de Hero Recruitment Points, de 30 a 450." },
  ],
  pending: [
    "Recapturar com o evento ativo: preço do Sprint Diamond Pack 1 e a quantidade de esferas do Pack 2",
    "Identificar a esfera azul com \"?\" — aparece aqui, no loot da expedição e nos Diamond Packs",
    "Confirmar quantos Hero Recruitment Points cada invocação rende",
    "Registrar o conteúdo do baú da rodada de 4 do Challenge Objective",
  ],
};

// Battle Pass — mecânica lida no print de 26 ago. 2026, temporada com 09d:17h restantes.
export const battlePass = {
  kicker: "BATTLE PASS",
  title: "O custo sobe de cinco em cinco níveis",
  text:
    "A trilha não sobe por missão: o texto diz \"Consume stamina to level up\". E o custo não é fixo — ele degrau em faixas de cinco níveis. A captura pegou a conta no nível 23 com a barra em 10/300, e o contador do dia em 180 de um teto de 1.500.",
  tiers: {
    title: "A escada de custo",
    intro:
      "Faixas de cinco níveis. As duas do topo foram testadas pelo jogador, e o print do nível 23 pagando 300 confirma a faixa 20–25 de forma independente.",
    columns: ["Faixa de nível", "Stamina por nível", "Níveis que o teto diário compra", "Confiança"],
    rows: [
      { band: "1 – 5", cost: "100", perDay: "15", trust: "Provável, não confirmado" },
      { band: "5 – 10", cost: "150", perDay: "10", trust: "Provável, não confirmado" },
      { band: "10 – 15", cost: "200", perDay: "7", trust: "Valor visto em jogo; faixa a confirmar" },
      { band: "15 – 20", cost: "250", perDay: "6", trust: "Provável, não confirmado" },
      { band: "20 – 25", cost: "300", perDay: "5", trust: "Testado, e batendo com o print do nível 23" },
      { band: "25 em diante", cost: "400", perDay: "3", trust: "Testado" },
    ],
    note:
      "Correção: a primeira versão desta página tratava os 300 da barra como custo constante e anunciava cinco níveis por dia como número fixo. É só o degrau da faixa 20–25.",
  },
  facts: [
    { label: "Teto diário", value: "1.500 de stamina contabilizada" },
    { label: "Temporada capturada", value: "09d:17h restantes, conta no nível 23" },
    { label: "Faixa paga", value: "Deluxe a US$ 13,99, com Extra 5 Levels" },
    { label: "Rebate anunciado", value: "7.900%" },
  ],
  relevance:
    "Importa para a linha mítica porque a trilha distribui fichas — dez de uma vez no nível 30 da faixa observada. Com o custo dobrando entre o começo e o nível 25, e o teto diário fixo em 1.500, o ritmo cai de quinze níveis por dia para três. Passar do 25 é questão de tempo de temporada; maratona não compensa o degrau.",
  pending: [
    "Confirmar em print os degraus das faixas 1–5, 5–10 e 15–20 — só visíveis recomeçando do nível 1, ou seja, na virada de temporada (a capturada terminava por volta de 5 set. 2026)",
    "Verificar em qual faixa exatamente aparece o custo de 200 — mesma janela da virada de temporada",
    "Confirmar se a escada continua subindo depois do 25 ou estaciona em 400",
    "Registrar a trilha completa: quantas fichas míticas por faixa e em quais níveis",
    "Confirmar a duração total de uma temporada de Battle Pass",
    "Verificar se o teto de 1.500 de stamina por dia é fixo ou escala com o nível da conta",
  ],
};
