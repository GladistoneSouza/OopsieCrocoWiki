export const summonRules = {
  kicker: "HERO SUMMON",
  title: "10 tickets por invocação",
  text: "Cada invocação de herói consome 10 Hero Summon Tickets. Invocar dá EXP de banner: o Banner Level sobe (Lv.1 → Lv.4 observados) e melhora as recompensas da tabela de taxas.",
};

export const heroSummonRates = {
  intro: "Taxas oficiais exibidas no Rate Details por nível de banner. No Lv.1 não há SSR na tabela; o SSR entra a partir do Lv.2. A captura de 31 ago. 2026 fechou a aba Lv.4, incluindo ficha mítica e EXP de classe — e identificou de passagem a esfera azul com \"?\" que aparecia sem nome no loot da expedição e nos Diamond Packs: é Random Class Exp, EXP de classe sorteada.",
  rows: [
    { item: "SSR", lv1: "—", lv2: "1,99%", lv3: "2,22%", lv4: "2,50%" },
    { item: "Mythic Summon Ticket", lv1: "—", lv2: "—", lv3: "0,98%", lv4: "1,94%" },
    { item: "SR", lv1: "5,24%", lv2: "—", lv3: "6,46%", lv4: "9,58%" },
    { item: "R", lv1: "19,82%", lv2: "—", lv3: "19,46%", lv4: "19,14%" },
    { item: "Gold ×100", lv1: "—", lv2: "—", lv3: "15,22%", lv4: "14,85%" },
    { item: "Gem Cube", lv1: "—", lv2: "—", lv3: "2,28%", lv4: "2,23%" },
    { item: "Random Class Exp ×40", lv1: "—", lv2: "—", lv3: "1,14%", lv4: "1,49%" },
    { item: "Random Class Exp ×20", lv1: "—", lv2: "—", lv3: "1,98%", lv4: "2,23%" },
    { item: "Random Class Exp ×10", lv1: "—", lv2: "—", lv3: "4,57%", lv4: "4,46%" },
  ],
  note: "Células com — não foram capturadas naquele nível de banner, não significam taxa zero (exceto o SSR no Lv.1, ausente da tabela oficial). Só a coluna Lv.4 tem print; as demais vêm de leituras avulsas anteriores, e por isso a tabela continua cheia de buracos. O contador de Legendary garantido apareceu com valores diferentes em momentos distintos (35, 39 e 45) — pendente confirmar a regra exata.",
  gallery: [
    { src: "/screenshots/summon/hero-summon-rates-lv4.jpg", alt: "Rate Details do Hero Summon no Lv.4", title: "Lv.4 oficial", caption: "SSR 2,50%, ficha mítica 1,94%, SR 9,58% e R 19,14%." },
  ],
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
  text: "Hero Coins vêm dos baús de marco de invocação e compram fragmentos de herói com limite semanal. A varredura completa da loja em 31 ago. 2026 mostrou que preço e limite não variam por herói: variam por raridade.",
  rows: [
    { hero: "SP — os oito míticos", price: "3.000", limit: "1/semana" },
    { hero: "SSR", price: "1.000", limit: "8/semana" },
    { hero: "SR", price: "250", limit: "13/semana" },
  ],
};

// A leitura de 31 ago. 2026 desfez os conflitos de preco que estavam registrados
// como "tambem visto a X": nao eram precos diferentes, era a mesma tabela com
// metade dos cartoes em promocao.
export const exchangeStructure = {
  kicker: "COMO A LOJA ESTÁ ORGANIZADA",
  title: "Três preços, e um desconto que engana",
  intro:
    "A loja lista todos os heróis já obtidos numa grade única. O que parecia preço irregular por personagem é uma regra simples com uma promoção por cima: o limite semanal denuncia a faixa antes do preço.",
  columns: ["Faixa", "Limite semanal", "Preço cheio", "Com o selo 50% off"],
  rows: [
    { tier: "SP", limit: "1/1", full: "3.000", off: "não observado" },
    { tier: "SSR", limit: "x/8", full: "1.000", off: "500" },
    { tier: "SR", limit: "x/13", full: "250", off: "125" },
  ],
  proof:
    "O preço cheio de cada faixa aparece nos cartões sem o selo: Pharaoh a 1.000 (SSR, 5/8) e Shadow Wolf a 250 (SR, 10/13), lado a lado com vizinhos da mesma faixa marcados a 500 e 125 com o selo. Os oito SP nunca apareceram com desconto — Dragon Warrior, Catwoman, Flower Spirit, Light Archer, Tidecaller, Succubus, Sword Demon e Red Queen, todos a 3.000 e todos com limite 1/1.",
  resolves:
    "Isso encerra três divergências que a wiki carregava como \"também visto a\": Light Archer a 3.000 é o preço cheio de SP e nunca foi 1.000; Onmyoji a 500 e a 1.000 é o mesmo cartão SSR com e sem o selo; Bounty Hunter idem. Não havia promoção rotativa mudando o preço de um herói — havia um selo de 50% cobrindo parte da grade.",
  gallery: [
    { src: "/screenshots/summon/hero-exchange-sp.jpg", alt: "Faixa SP do Hero Exchange, todos a 3.000 com limite 1/1", title: "SP: 3.000, um por semana", caption: "Os oito míticos, preço uniforme e sem selo de desconto." },
    { src: "/screenshots/summon/hero-exchange-ssr.jpg", alt: "Faixa SSR com Pharaoh a 1.000 sem desconto ao lado de dois a 500", title: "SSR: o preço cheio aparece", caption: "Pharaoh a 1.000 sem selo, ao lado de Dark Knight e Holy Knight a 500 com selo." },
    { src: "/screenshots/summon/hero-exchange-sr.jpg", alt: "Faixa SR com Shadow Wolf a 250 sem desconto ao lado de dois a 125", title: "SR: mesma lógica", caption: "Shadow Wolf a 250 sem selo; Pumpkin e Pain Sorceress a 125 com selo." },
  ],
  pending: [
    "Descobrir o que determina quais cartões recebem o selo de 50% e por quanto tempo",
    "Confirmar se a faixa SP algum dia entra em promoção",
    "Medir quantas Hero Coins um ciclo de invocação rende, para precificar a compra de fragmento em fichas",
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
    "Existe um segundo item, distinto, e agora fotografado: o Mythic Hero Select Chest. A tela lista os oito míticos e diz \"Select one Mythic Hero\" — um herói por baú, com um seletor de quantidade e o saldo restante embaixo (\"Remaining item quantity: 2\" na captura). É por aí que sai o efeito descrito pelo dono da conta: gastando um baú em cada herói, ele reparte os fragmentos entre vários desbloqueios em vez de fechar um de cada vez.",
  legendarySelection:
    "Cuidado para não confundir com a Legendary Hero Selection, que é do andar de baixo: cartas douradas, oito SSR (Fire Spirit Master, Pharaoh, Holy Knight, Dark Knight, Star Mage, Bounty Hunter, Phantom e Onmyoji) e o texto \"please check the heroes you want to redeem\", com caixas de marcação. Ali sim dá para marcar vários de uma vez. As duas telas são quase gêmeas no leiaute e foram capturadas com nove segundos de diferença — o que separa uma da outra é o título e a cor das cartas.",
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
    { src: "/screenshots/summon/mythic-hero-select-chest.jpg", alt: "Mythic Hero Select Chest com os oito míticos", title: "A caixa de seleção mítica", caption: "\"Select one Mythic Hero\": um SP por baú, com seletor de quantidade." },
    { src: "/screenshots/summon/legendary-hero-selection.jpg", alt: "Legendary Hero Selection com oito SSR marcáveis", title: "A prima dourada", caption: "Andar de baixo: oito SSR e marcação múltipla. Não confundir com a mítica." },
    { src: "/screenshots/summon/battle-pass.jpg", alt: "Trilha do Battle Pass com fichas míticas", title: "Battle Pass", caption: "Fichas míticas ao longo da trilha; Deluxe a US$ 13,99 na temporada capturada." },
  ],
  pending: [
    "Confirmar se a Mythical Hero Random Box pode repetir um herói já desbloqueado",
    "Confirmar no Mythic Hero Select Chest se gastar vários baús no mesmo herói acumula fragmentos, já que a tela só deixa marcar um por vez",
  "Abrir a linha Mythic Selection da Immortal Shop e registrar se é a caixa aleatória ou a de seleção",
  "Fotografar o e-mail de recompensa do ranking semanal do evento — possível fonte de Selection Box",
    "Registrar quantas fichas míticas a trilha completa do Battle Pass entrega, por faixa",
    "Catalogar as demais fontes de seleção mítica em eventos e pacotes",
    "Verificar se o pity de 50 reinicia ao trocar o herói com Probability UP",
  ],
};

// Evento de invocação — capturado dormente ("Event Not Started") em 26 ago. 2026,
// durante a semana do evento de pet. Os valores são legíveis; o progresso, não.
export const passTrack = {
  kicker: "A TRILHA",
  title: "Trinta níveis, e a ficha mítica só nas faixas pagas",
  intro:
    "A trilha termina no nível 30 — a linha fica fixa no rodapé enquanto se rola. As fichas míticas aparecem só nos marcos de cinco em cinco, e quase todas na coluna Deluxe.",
  columns: ["Nível", "Coluna", "Fichas míticas"],
  rows: [
    { level: "5", column: "Deluxe", scrolls: "10" },
    { level: "10", column: "Advanced", scrolls: "5" },
    { level: "15", column: "Deluxe", scrolls: "5" },
    { level: "20", column: "Deluxe", scrolls: "10" },
    { level: "25", column: "Deluxe", scrolls: "5" },
    { level: "30", column: "Advanced", scrolls: "10" },
  ],
  totals:
    "Somando: a coluna Free não entrega ficha mítica nenhuma. A Advanced rende 15 na temporada inteira, e a Deluxe acrescenta outras 30 — mais um baú mítico no nível 10. Como o pity exige 50, nenhuma das faixas fecha um Mythic sozinha, mas a Deluxe chega perto.",
  reach:
    "Alcançar o fim da trilha é barato em tempo: da conta observada, no nível 23, faltavam 600 de stamina para o 25 e mais 2.000 até o 30, cerca de 2.600 no total. Com o teto diário de 1.500, menos de dois dias — contra os 9,7 que restavam de temporada. O gargalo do passe é o custo por nível, não o calendário.",
  correction:
    "Correção: esta página dizia antes que \"a trilha distribui fichas — dez de uma vez no nível 30\". Aquelas dez estão na coluna Advanced, não na gratuita; sem comprar nenhuma faixa, o passe não dá ficha mítica alguma.",
  gallery: [
    { src: "/screenshots/summon/pass-track-1-5.jpg", alt: "Trilha do Battle Pass nos níveis 1 a 5", title: "Início da trilha", caption: "O nível 5 já traz 10 fichas míticas, na coluna Deluxe." },
    { src: "/screenshots/summon/pass-track-16-20.jpg", alt: "Trilha do Battle Pass nos níveis 16 a 20", title: "O marco do 20", caption: "Outras 10 fichas no Deluxe; o Advanced dá ficha de herói comum." },
    { src: "/screenshots/summon/pass-track-26-30.jpg", alt: "Trilha do Battle Pass nos níveis 26 a 30", title: "Fim da trilha", caption: "O nível 30 encerra a temporada com 10 fichas míticas na coluna Advanced." },
  ],
};

export const deluxeTiming = {
  kicker: "QUANDO COMPRAR O DELUXE",
  title: "No nível 25, e o ponto é exato",
  text:
    "A faixa Deluxe custa US$ 13,99 e vem com \"Extra 5 Levels\" — cinco níveis somados a partir de onde você estiver. Como o custo por nível sobe em degraus e a trilha termina no 30, o valor desse empurrão depende inteiramente do momento da compra.",
  columns: ["Compra no nível", "Salta para", "Stamina poupada"],
  rows: [
    { at: "10", to: "15", saved: "1.000" },
    { at: "15", to: "20", saved: "1.250" },
    { at: "20", to: "25", saved: "1.500" },
    { at: "24", to: "29", saved: "1.900" },
    { at: "25", to: "30", saved: "2.000 — o máximo" },
    { at: "26", to: "30", saved: "1.600, e perde um nível" },
  ],
  totalCost:
    "A trilha inteira, do 1 ao 30 sem comprar nada, custa 7.000 de stamina — 4,7 dias no teto diário. O raciocínio que fixa o 25 é simples: até ali você sobe com energia própria de qualquer jeito, então os cinco níveis de brinde têm que cair no trecho mais caro. Comprando no 25, o total sai de 7.000 para 5.000; comprando no 10, só cai para 6.000.",
  why:
    "O pico é estreito. No 24, dois dos cinco níveis pulados ainda estão na faixa de 300. No 26, o trigésimo primeiro nível não existe e um dos cinco se perde. Só no 25 os cinco caem inteiros na faixa de 400 sem desperdício: 2.000 de stamina, ou um dia e um terço do teto diário.",
  retroactive:
    "Comprar a faixa libera retroativamente tudo que já passou — verificado em jogo pelo dono da conta. É o que fecha a estratégia: no nível 25, a compra entrega de uma vez os marcos de 5, 15 e 20 que ficaram para trás, e os Extra 5 Levels levam até o 30 destravando também o 25 e o 30. A coluna Deluxe inteira, os trinta níveis, cai no colo numa única compra.",
  payoff:
    "Somando: US$ 13,99 no nível 25 rendem as 30 fichas míticas da coluna Deluxe, o baú mítico do nível 10, todo o resto da faixa e ainda poupam 2.000 de stamina. Comprar cedo entrega as mesmas recompensas, só que pagando os cinco níveis mais caros da trilha com energia.",
  pending: [
    "Verificar se os \"Extra 5 Levels\" são creditados na hora da compra ou entram como bônus de progresso",
  ],
};

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
    { label: "Trilha", value: "30 níveis — o nível 30 é o último" },
    { label: "Temporada capturada", value: "09d:17h restantes, conta no nível 23" },
    { label: "Faixa paga", value: "Deluxe a US$ 13,99, com Extra 5 Levels" },
    { label: "Rebate anunciado", value: "7.900%" },
  ],
  relevance:
    "Importa para a linha mítica pelo que a trilha distribui nos marcos de cinco — detalhado abaixo. Com o custo subindo de 100 para 400 e o teto diário fixo em 1.500, o ritmo cai de quinze níveis por dia para três, mas a temporada é longa o bastante para absorver isso.",
  pending: [
    "Confirmar em print os degraus das faixas 1–5, 5–10 e 15–20 — só visíveis recomeçando do nível 1, ou seja, na virada de temporada (a capturada terminava por volta de 5 set. 2026)",
    "Verificar em qual faixa exatamente aparece o custo de 200 — mesma janela da virada de temporada",
    "Confirmar se a escada continua subindo depois do 25 ou estaciona em 400",
      "Confirmar a duração total de uma temporada — só temos o tempo restante, não o total",
    "Verificar se o teto de 1.500 de stamina por dia é fixo ou escala com o nível da conta",
  ],
};
