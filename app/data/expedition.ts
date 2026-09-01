// Expedition Squad — sistema próprio, documentado junto dos UR porque é a fonte
// gratuita de Grail. Fonte: ciclo completo observado em 26 ago. 2026, mais o
// painel de regras oficiais do próprio jogo.

export const expeditionIntro = {
  kicker: "EXPEDITION SQUAD",
  title: "Quatro times, doze horas, coleta única",
  text:
    "Heróis saem em quatro times de dois. Cada time exibe uma Adventure Quality e o Total Level, e volta com um loot próprio ao fim do ciclo. É a única fonte de Grail que não passa pela loja.",
};

export const expeditionRules = [
  {
    title: "Quick Deploy monta sozinho",
    original: "Your expedition squad will be configured with one tap using the optimal strategy.",
    text: "Um toque preenche os quatro times com a estratégia que o jogo considera ótima.",
  },
  {
    title: "O pior herói define o time",
    original: "Rewards will be based on the lowest-quality heroes assigned to the squad.",
    text: "Não adianta carregar um bom herói ao lado de um fraco — o gargalo é sempre o pior do par.",
  },
  {
    title: "Qualidade escolhe o pool",
    original: "The higher the quality, the better the items you can obtain.",
    text: "É o que decide se o Grail sequer aparece na lista Chance to Obtain: nos três times SP apareceu, no SSR não.",
  },
  {
    title: "Nível decide quantos saem",
    original: "The higher the heroes' total level, the more items you can obtain.",
    text: "Com o pool já definido pela qualidade, o nível somado do par governa quantos daqueles itens realmente caem.",
  },
  {
    title: "12 horas por expedição",
    original: "Each expedition lasts 12 hours. Don't forget to claim your rewards after it is completed.",
    text: "A coleta é manual: ciclo não recolhido é ciclo não reiniciado.",
  },
  {
    title: "Herói Immortal não participa",
    original: "Immortal-quality heroes do not take part in expeditions.",
    text: "As UR não farmam o próprio recurso de recrutamento.",
  },
];

export const cycleLoop = {
  kicker: "O LOOP DE UM CICLO",
  title: "Montar, esperar, coletar, montar de novo",
  steps: [
    { title: "Formação", text: "Um time incompleto trava com \"Not enough team members\" e não parte. O Quick Deploy preenche as quatro duplas de uma vez." },
    { title: "Partida", text: "O Depart libera o ciclo e o contador cai de 12:00:00 — a captura pegou 11:59:58 logo depois." },
    { title: "Conclusão", text: "Cada time troca o tempo restante por \"Expedition Complete!\" e o botão vira Claim Rewards." },
    { title: "Reinício", text: "Coletar devolve todos os heróis: as quatro duplas voltam ao estado vazio e precisam ser remontadas antes da próxima partida. Ciclo não recolhido é ciclo não reiniciado." },
  ],
};

export const expeditionTeams = {
  intro:
    "As duas colunas do jogo se combinam assim no ciclo observado: os três times de qualidade SP tinham Grail na lista de possibilidades e a esfera azul em ×50; o time SSR não tinha Grail algum e a esfera caía para ×15.",
  columns: ["Time", "Qualidade", "Total Level", "Chance to Obtain", "Loot recebido"],
  rows: [
    {
      team: "Team 1",
      quality: "SP",
      level: "20",
      chance: "Ticket · saco ×5 · esfera ×50 · Grail",
      got: "Tudo, Grail incluído",
    },
    {
      team: "Team 2",
      quality: "SP",
      level: "6",
      chance: "Ticket · saco ×5 · esfera ×50 · Grail",
      got: "Sem o Grail",
    },
    {
      team: "Team 3",
      quality: "SP",
      level: "2",
      chance: "Ticket · saco ×5 · esfera ×50 · Grail",
      got: "Tudo, Grail incluído",
    },
    {
      team: "Team 4",
      quality: "SSR",
      level: "17",
      chance: "Saco ×5 · esfera ×15 · ticket",
      got: "Saco e esfera",
    },
  ],
  reading:
    "A lista é \"Chance to Obtain\", não garantia: o Team 2 tinha Grail na lista e voltou sem. Como o Team 3 partiu com Total Level 2 e trouxe Grail enquanto o Team 4, de Total Level 17, sequer tinha a chance, o degrau de qualidade pesa mais que qualquer diferença de nível — o nível mexe na quantidade dentro da faixa que a qualidade já definiu.",
};

export const expeditionHaul = {
  kicker: "COLETA COMPLETA",
  title: "Grail ×2 no ciclo",
  text:
    "O popup Reward somou: saco de recurso ×15, Grail ×2, saco menor ×5, ticket dourado ×3 e oito fichas circulares de classe (17, 19, 9, 10, 10, 15, 8 e 12). Só o Grail foi identificado por nome — os demais ícones não tiveram tooltip capturado.",
};

export const expeditionMath = [
  {
    kicker: "MEDIDO EM CAMPO",
    title: "≈ 0,9 Grail por dia",
    text: "Duas semanas de expedição renderam 12 Grails na conta observada — o mesmo saldo que o tooltip do item mostra como \"Owned: 12\". É o número que vale; a projeção de 4/dia, tirada de um único ciclo, não sobreviveu ao teste.",
  },
  {
    kicker: "POR QUE A PROJEÇÃO ERROU",
    title: "O ciclo de 12h raramente rende duas vezes",
    text: "Dois ciclos por dia só acontecem se você coletar e remontar os times duas vezes por dia. Coletando uma vez, o ciclo da madrugada se perde e a renda cai pela metade — e o ciclo que fotografamos, com 2 Grails, ficou acima da média.",
  },
  {
    kicker: "PARA 8 DRAWS",
    title: "≈ 93 dias",
    text: "Os 80 Grails que permitem tentar as oito posições do pool pedem mais de treze semanas de farm. O Grail sobrevive entre edições, então o acúmulo funciona — é só lento.",
  },
];

export const dropVariance = {
  kicker: "O GRAIL É BURSTY",
  title: "36% dos ciclos vêm secos",
  text:
    "O jogo não publica chance nenhuma — nem as seis regras nem a tela de partida trazem porcentagem. O que existe é observação de campo: costuma levar de duas a cinco expedições até sair um Grail, com sequências de três dias em branco e dias em que caem dois de uma vez.",
  distribution: {
    intro:
      "Ajustando uma chance independente por time SP à renda medida (0,86 Grail/dia), sai uma taxa de cerca de 29% por time — três times sorteando por ciclo. O modelo reproduz os dois extremos relatados:",
    rows: [
      { outcome: "Nenhum Grail", chance: "36%" },
      { outcome: "1 Grail", chance: "44%" },
      { outcome: "2 Grails", chance: "18%" },
      { outcome: "3 Grails", chance: "2%" },
    ],
    note:
      "Três ciclos seguidos em branco: 4,8% — raro o bastante para chamar atenção, comum o bastante para acontecer. Num ciclo de evento de duas semanas a soma fica em 12 Grails na média, mas a faixa típica vai de 6 a 18. Planejar pela média é arriscado: um ciclo azarado custa a tentativa inteira da edição. Ajuste da wiki a partir de uma medição de duas semanas, não taxa oficial — e uma média, não uma taxa por time: ver a ressalva do nível abaixo.",
  },
};

export const levelLever = {
  kicker: "A ALAVANCA QUE SOBRA",
  title: "Subir o nível dos times aumenta o Grail",
  definition:
    "Total Level é a soma dos níveis dos dois heróis daquele time — não um número da conta. Confirmado nos quatro times observados: Lv.15 + Lv.5 = 20, Lv.3 + Lv.3 = 6, Lv.1 + Lv.1 = 2 e Lv.1 + Lv.16 = 17. A Adventure Quality vem colorida na mesma linha: SP em vermelho, SSR em dourado.",
  text:
    "A regra 3 decide o pool e a regra 4 decide quantos itens saem dele. Na prática as duas se somam a favor do Grail: como ele já está dentro do pool dos times SP, tirar mais itens desse pool é tirar mais Grail. Subir o nível não melhora a lista — melhora quantas vezes você a percorre.",
  note:
    "Os três times SP observados tinham a mesma lista Chance to Obtain mas Total Level 20, 6 e 2, então a taxa única de 29% por time é uma média entre eles, não uma constante. Como a regra 2 amarra tudo ao pior herói do par, o caminho para mais Grail gratuito é nivelar as duplas por baixo: tirar o time de Total Level 2 do chão rende mais que reforçar o de 20. Falta medir a renda por faixa de nível para dimensionar o ganho.",
};

export const unlockFirst = {
  kicker: "PRIORIDADE",
  title: "Um SP nível 1 já vale vaga inteira",
  text:
    "Qualidade é porteiro, nível é multiplicador — e o porteiro não cobra nível nenhum. O Team 3 do ciclo observado era Lv.1 + Lv.1, Total Level 2, e trouxe quatro itens com Grail: exatamente o mesmo que o Team 1, de Total Level 20. Enquanto isso o Team 4, com Total Level 17 mas qualidade SSR, voltou com dois itens e sem Grail. Naquele ciclo a qualidade explicou tudo e o efeito do nível não apareceu.",
  conclusion:
    "A intuição natural é a oposta — um SP nível 1 parece recurso desperdiçado, já que você nunca o colocaria numa run. A expedição quebra essa leitura porque lê qualidade, não poder: um SP que não serve em campo é uma vaga de expedição completa. Daí a conclusão prática: para o Grail cair nos quatro slots basta ter os oito heróis SP desbloqueados, em qualquer nível. Desbloquear primeiro, subir nível depois.",
  note:
    "Um único ciclo — a regra 4 promete ganho por nível e deve aparecer numa amostra maior. O que o ciclo mostra é a ordem de grandeza: o degrau de qualidade é maior que qualquer diferença de nível observada.",
};

export const rosterFit = {
  kicker: "O ELENCO CABE EXATO",
  title: "8 míticos, 8 vagas",
  text:
    "Marco atingido em 31 ago. 2026: os oito SP estão desbloqueados — Kazres no 15, Succubus e Dragon Warrior no 8, Mitia no 5, Lia no 3, e Tidecaller, Veliana e Livia no 1. O pré-requisito de quatro times de qualidade SP está cumprido; o que resta é nível, não desbloqueio. O Mythical Summon lista oito heróis no Probability UP — Sword Demon, Tidecaller, Succubus, Light Archer, Flower Spirit, Catwoman, Dragon Warrior e Red Queen — e são exatamente os oito com raridade SP catalogados na wiki. A expedição pede quatro times de dois. Coleção completa e grade cheia dão o mesmo número, o que sugere que a expedição foi dimensionada para um elenco SP inteiro.",
  note: "Coincidência aritmética entre dois dados confirmados, não afirmação de intenção do desenvolvedor.",
};

export const acquisitionPlan = {
  kicker: "COMO ABRIR AS OITO VAGAS",
  title: "Uma cópia de cada, depois um só até o 15",
  text:
    "As rotas de desbloqueio e a diferença de mira entre elas estão detalhadas na seção de invocação mítica. O que importa aqui: enquanto faltam heróis, a caixa aleatória rende porque quase tudo que sai é novidade; quando sobram poucos, só o pity dirigido do Mythical Summon alcança o que falta.",
  phase2:
    "Com as oito vagas abertas, o fragmento deixa de comprar vaga e volta a comprar poder — e aí concentrar num só herói vence espalhar. O nível 15 aparece como parada natural: é onde as fichas da wiki registram um talento novo em heróis de raridades diferentes (Catwoman SP, Onmyoji e Lilith SSR) e onde a Lilith teve a passiva exclusiva liberada, ainda bloqueada no nível 13.",
  note:
    "Falta confirmar se todo herói SP ganha passiva exclusiva no 15 como a Lilith.",
};

// Curva de custo de nível de herói, em fragmentos — dado geral de progressão,
// documentado aqui porque é o que decide entre abrir uma vaga nova e subir um herói.
export const levelCostCurve = {
  kicker: "O QUE CUSTA SUBIR",
  title: "Faixas de cinco, e o preço passa de 5 para 100",
  intro:
    "Custos em fragmentos confirmados nas grades de elenco fotografadas em 31 ago. 2026. O custo aparece ao lado de cada herói e bate entre SSR e SR: a curva é por nível, não por raridade.",
  columns: ["Faixa", "Por nível", "Total da faixa", "Acumulado desde o 1"],
  rows: [
    { band: "1 – 5", per: "5", total: "20", acc: "20" },
    { band: "5 – 10", per: "10", total: "50", acc: "70" },
    { band: "10 – 15", per: "30", total: "150", acc: "220" },
    { band: "15 – 20", per: "60", total: "300", acc: "520" },
    { band: "Acima do 20", per: "100 no nível 22", total: "a confirmar", acc: "a confirmar" },
  ],
  note:
    "Evidências lidas em 31 ago. 2026: nível 3 com 0/5; níveis 5 e 8 com x/10; níveis 13-14 com x/30; níveis 15-18 com x/60. As quatro primeiras faixas aparecem em vários heróis e em duas raridades, então estão fechadas. A última linha vale menos: há um único herói acima do 20 no elenco, no nível 22, e ele pede 100. Isso prova que o degrau sobe depois do 20, não que a faixa inteira custe 100 — o total e o acumulado ficam em branco até aparecer um segundo ponto.",
};

// Fragmento nao e a unica moeda de upgrade. O rodape da ficha mostra duas barras,
// e a wiki so vinha contando uma — o que subestimava o custo de subir um heroi.
export const upgradeInputs = {
  kicker: "A SEGUNDA MOEDA",
  title: "Fragmento não sobe herói sozinho",
  intro:
    "O botão Upgrade fica ao lado de três fichas, e as duas primeiras nunca tinham entrado na conta da wiki. Subir um nível consome fragmentos do herói **e** EXP da classe dele. Ter fragmento sobrando não adianta se a classe está zerada, e o contrário também vale.",
  columns: ["Ficha", "O que é", "De onde vem"],
  rows: [
    {
      item: "EXP de classe",
      what: "Um item por classe — Warrior Class Exp, Archer Class Exp, Summoner Class Exp e assim por diante. O texto do jogo diz \"item required for hero upgrade of the <classe>\".",
      from: "Level Challenge, AFK e Black Market",
    },
    {
      item: "All Class Exp",
      what: "Curinga: \"can be used for hero upgrade of any class\".",
      from: "Black Market",
    },
    {
      item: "Random Class Exp",
      what: "A esfera azul com \"?\" que aparecia sem identificação no loot, nos Diamond Packs e na tabela de taxas. É EXP de classe sorteada — você não escolhe qual classe recebe.",
      from: "Hero Summon: 1,49% para ×40, 2,23% para ×20 e 4,46% para ×10 na aba Lv.4",
    },
  ],
  observed:
    "O requisito é por nível e raridade, não por herói: Catwoman e Succubus marcam 240 no nível 5, e Succubus e Dragon Warrior marcam 420 no 8. Escada SP lida até aqui: 60 no nível 1, 120 no 3, 240 no 5, 420 no 8 e 1.680 no 15 — de 3 a 8 sobe 60 por nível certinho, mas o 15 é o dobro do que essa reta previa, então a taxa muda em algum ponto entre os dois. Do lado SSR: 384 no 9, 520 no 10, 1.344 no 15, 1.536 no 16 e 1.728 no 17. Leituras do rodapé, na ordem ALL · EXP da classe · fragmentos: Sword Demon SP em 26 ago. com 8 · 1.163/1.680 · 10/60, e o mesmo herói em 30 ago. com 1.549 · 2.439/1.680 · 10/60 — a barra de EXP já transbordava e o gargalo era o fragmento. A Mia SSR no nível 16 pedia 1.536 de EXP e 60 fragmentos. As fichas da Succubus deram os dois degraus baixos: 120 de EXP com 5 fragmentos por nível, e 420 de EXP com 10 fragmentos por nível. Os quatro pontos — 120, 420, 1.536 e 1.680 — sobem junto com a faixa de fragmento, o que sugere uma segunda curva paralela; quatro pontos não a desenham.",
  consequence:
    "Isso mexe com a conta de espalhar contra concentrar. Os oito SP estão em oito classes diferentes, então subir todos em paralelo saca de oito reservas separadas ao mesmo tempo, e só o All Class Exp atravessa a fronteira. Enquanto os heróis estão em nível baixo o EXP pedido é pequeno e a conta do fragmento manda; se as reservas de classe acompanham quatro times subindo juntos é coisa que ainda não foi medida.",
  gallery: [
    { src: "/screenshots/progression/warrior-class-exp.jpg", alt: "Popup do Warrior Class Exp com as três fontes", caption: "Warrior Class Exp, 953 em estoque, vindo de Level Challenge, AFK e Black Market." },
    { src: "/screenshots/progression/sword-demon-lv12-15.jpg", alt: "Rodapé da ficha do Sword Demon com as duas barras e os fragmentos", caption: "O rodapé que a wiki ignorava: ALL 8, EXP de classe 1.163/1.680 e fragmentos 10/60." },
  ],
  pending: [
    "Levantar a curva de EXP de classe por nível, como já existe para fragmento",
    "Confirmar se existe um item de EXP para cada uma das classes catalogadas",
    "Medir quanto EXP de classe rendem Level Challenge, AFK e Black Market por dia",
    "Verificar se o Black Market cobra ouro, diamante ou outra moeda pelo EXP",
  ],
};

// Toda ficha mostra uma linha "Global reward: Critical DMG +X%". Cruzando os
// numeros espalhados pelas fichas, o valor e simplesmente nivel x uma taxa fixa
// da raridade — o que muda a conta de "vale subir um heroi que nao jogo?".
// O fragmento por nivel e igual para todas as raridades; o EXP de classe nao e.
// Cruzando isso com a recompensa global, a raridade mais barata para comprar
// critico de conta nao e a vermelha.
// Junta tres coisas que a wiki ja tinha separadas: a curva de fragmento por
// faixa, o nivel atual de cada heroi lido nas telas de 30-31 ago. e o degrau que
// a ficha dele aponta como o proximo que muda alguma coisa. O resultado e o
// custo real de atravessar cada breakpoint.
// A conta que decide entre espalhar e aprofundar, com numeros reais.
// Sete fichas de exibicao capturadas na mesma noite de 30 ago. 2026 respondem
// uma pergunta que atravessava todas as comparacoes de heroi: os atributos sao
// do heroi ou do nivel?
export const statProfile = {
  kicker: "ATRIBUTO NÃO É DO HERÓI",
  title: "Três vermelhas de classes diferentes, no nível 1, com os números idênticos",
  intro:
    "As telas de exibição de 30 ago. 2026 põem sete SP lado a lado na mesma noite. Red Queen, Tidecaller e Light Archer — Mage, Summon e Archer — estão no nível 1 e exibem exatamente o mesmo poder, o mesmo ataque, a mesma vida e a mesma defesa. Não é aproximado: é o mesmo número.",
  columns: ["Herói", "Classe", "Nível", "Poder", "ATK", "HP", "DEF"],
  rows: [
    { hero: "Livia — Red Queen", cls: "Mage", lv: "1", power: "17.501", atk: "16,01K", hp: "195,04K", def: "6.661" },
    { hero: "Ice Blue Snowbud — Tidecaller", cls: "Summon", lv: "1", power: "17.501", atk: "16,01K", hp: "195,04K", def: "6.661" },
    { hero: "Veliana — Light Archer", cls: "Archer", lv: "1", power: "17.501", atk: "16,01K", hp: "195,04K", def: "6.661" },
    { hero: "Lia — Flower Spirit", cls: "Support", lv: "3", power: "20.081", atk: "16,69K", hp: "248,59K", def: "8.491" },
    { hero: "Mitia — Catwoman", cls: "Assassin", lv: "5", power: "21.871", atk: "21,83K", hp: "216,72K", def: "7.401" },
    { hero: "Selina · Frostcharm — Succubus", cls: "Control", lv: "8", power: "24.586", atk: "20,44K", hp: "304,36K", def: "10,4K" },
    { hero: "Rain Flame Soul — Dragon Warrior", cls: "Warrior", lv: "8", power: "24.604", atk: "14,31K", hp: "395,67K", def: "13,51K" },
  ],
  reading:
    "Duas leituras saem daí. O poder acompanha o nível, não o herói: Succubus e Dragon Warrior, ambos no 8, ficam a 18 pontos um do outro — 24.586 contra 24.604, sete centésimos de por cento. E a repartição desse poder acompanha a classe: no mesmo nível 8, a Control tem 20,44K de ataque com 304K de vida, enquanto o Warrior tem 14,31K de ataque com 395K. A Assassin no nível 5 bate mais forte (21,83K) que a Control no 8.",
  consequence:
    "Isso encerra uma pergunta que aparece em toda comparação de herói: \"qual deles tem os melhores atributos?\" Nenhum. Os atributos são do nível e da classe, e o herói entra com o kit. Citar \"os 16K de ataque dela\" como característica de uma heroína é citar uma propriedade do nível 1 de qualquer SP. O que separa um vermelho do outro é exclusivamente o que o kit faz — que é justamente onde a wiki gasta o esforço.",
  drift:
    "Os números também se mexem sem o herói subir. A Succubus no nível 1 aparece com 16.826 às 10h20 e 16.920 às 10h41 do mesmo dia, e o Dragon Warrior no nível 5 sai de 19.671 em 25 ago. para 20.899 em 30 ago. O poder exibido embute bônus de conta que crescem por fora, então comparar fichas de dias diferentes não vale — só serve o mesmo instante.",
  succubusLadder: {
    title: "A escada completa de uma SP, do 1 ao 8",
    intro: "A Succubus foi fotografada em cada nível na mesma janela, o que dá a primeira progressão nível a nível da wiki.",
    columns: ["Nível", "Poder", "ATK", "HP", "DEF"],
    rows: [
      { lv: "1", power: "16.920", atk: "14,06K", hp: "207,64K", def: "7.218" },
      { lv: "2", power: "18.412", atk: "15,3K", hp: "225,97K", def: "7.855" },
      { lv: "3", power: "19.408", atk: "16,13K", hp: "238,18K", def: "8.280" },
      { lv: "4", power: "20.279", atk: "16,85K", hp: "248,87K", def: "8.652" },
      { lv: "5", power: "21.150", atk: "17,58K", hp: "259,56K", def: "9.023" },
      { lv: "8", power: "24.586", atk: "20,44K", hp: "304,36K", def: "10,4K" },
    ],
    note: "Do 2 ao 5 o ganho é quase constante — cerca de 0,73K de ataque, 10,7K de vida e 371 de defesa por nível. Do 5 ao 8 a média sobe para 0,95K de ataque por nível, o que levanta a hipótese de o ganho também mudar nas faixas de cinco, como o custo em fragmento. Três pontos não fecham isso.",
  },
  pending: [
    "Fotografar duas raridades diferentes no mesmo nível e no mesmo instante para ver se o poder também é igual entre SR, SSR e SP",
    "Confirmar se o ganho de atributo por nível muda nas faixas de cinco, como o custo em fragmento",
    "Descobrir que bônus de conta são somados ao poder exibido, já que ele muda sem o herói subir",
  ],
};

export const breadthVsDepth = {
  kicker: "LARGURA CONTRA PROFUNDIDADE",
  title: "Quatro heróis até o degrau que transforma custam menos que um sozinho subindo cinco níveis",
  intro:
    "A escada de fragmento é tão íngreme que a comparação deixa de ser opinião. Levar quatro heróis do nível em que estão até o degrau que muda o funcionamento deles custa menos do que qualquer um dos dois avanços de topo disponíveis hoje.",
  bundle: [
    { step: "Tidecaller do 1 ao 5", frags: "20", opens: "Mana a cada unidade que morre" },
    { step: "Mitia do 5 ao 10", frags: "50", opens: "Hunt que pode se relançar" },
    { step: "Veliana do 1 ao 10", frags: "70", opens: "Motor de velocidade fechado e a bifurcação" },
    { step: "Lia do 3 ao 10", frags: "60", opens: "Segunda camada da Ultimate" },
  ],
  bundleTotal: "200 fragmentos",
  alternatives: [
    { step: "Lia sozinha, do 15 ao 25", frags: "800", note: "quatro vezes o pacote inteiro" },
    { step: "Kazres sozinho, do 15 ao 20", frags: "300", note: "uma vez e meia o pacote inteiro" },
  ],
  reading:
    "Não é que o nível 25 da Lia seja fraco — ele faz a Petal Leaf aumentar permanentemente o ATK de quem a recebe, o que é enorme. É que ele custa quatro vezes o preço de ligar o motor de quatro heroínas diferentes. Enquanto a curva de fragmento sextuplicar de faixa em faixa, largura vence profundidade por uma margem que nenhuma diferença de qualidade de kit cobre.",
  shapes:
    "As curvas de investimento não têm todas o mesmo formato, e isso importa mais que a nota do kit. A Tidecaller é adiantada: o essencial dela abre no nível 5 e o resto é luxo. A Mitia e a Veliana são progressivas: cada degrau faz as peças anteriores conversarem melhor, então aprofundar rende. A Lia é escada: degraus independentes e fortes no 10, no 12, no 15 e no 25, o que permite comprar um, parar, e voltar depois — coisa que não faz sentido nas outras duas.",
  rule:
    "A qualidade do herói decide se vale desenvolvê-lo. O custo do próximo degrau decide se vale desenvolvê-lo agora. São perguntas separadas, e um herói excelente pode ser exatamente aquele em que não se deve gastar o próximo fragmento.",
  pending: [
    "Testar em run se o pacote largo rende mais que o avanço profundo, jogando a mesma faixa de estágio com as duas configurações",
    "Confirmar se \"permanentemente\" na Petal Leaf dura a run inteira ou só a batalha",
  ],
};

export const breakpointMap = {
  kicker: "ONDE O FRAGMENTO RENDE MAIS",
  title: "O mesmo avanço custa doze vezes mais em um herói que em outro",
  intro:
    "Qualidade de kit e prioridade de investimento são perguntas diferentes, e a wiki vinha respondendo só a primeira. Esta tabela responde a segunda: quanto custa, em fragmentos, levar cada herói do nível em que ele está até o próximo degrau que muda alguma coisa nele — e quanto de crítico de conta esse mesmo gasto compra de quebra.",
  columns: ["Herói", "Nível hoje", "Próximo degrau", "Fragmentos", "Crítico global", "Crítico por fragmento", "O que liga"],
  rows: [
    { hero: "Lia — Flower Spirit", now: "3", target: "5", frags: "10", crit: "+3,2%", eff: "0,320%", opens: "Floresce sozinha e ganha chance de lançamento extra" },
    { hero: "Lia — Flower Spirit", now: "3", target: "10", frags: "60", crit: "+11,2%", eff: "0,187%", opens: "A Ultimate escolhida ganha a segunda camada — cura +50% ou folha com redução de dano" },
    { hero: "Lia — Flower Spirit", now: "3", target: "12", frags: "120", crit: "+14,4%", eff: "0,120%", opens: "Blessing adicional depois da Ultimate — muda a economia de escolhas dela" },
    { hero: "Lia — Flower Spirit", now: "3", target: "15", frags: "210", crit: "+19,2%", eff: "0,091%", opens: "Petal Leaf passa a dar HP máximo permanente ao alvo" },
    { hero: "Veliana — Light Archer", now: "5", target: "8", frags: "30", crit: "+4,8%", eff: "0,160%", opens: "Light Arrow · Mastery — a segunda peça do motor" },
    { hero: "Ice Blue Snowbud — Tidecaller", now: "1", target: "5", frags: "20", crit: "+6,4%", eff: "0,320%", opens: "Mana a cada unidade que morre — liga o ciclo econômico dela" },
    { hero: "Livia — Red Queen", now: "1", target: "5", frags: "20", crit: "+6,4%", eff: "0,320%", opens: "Chance de Firestorm consecutivo" },
    { hero: "Veliana — Light Archer", now: "5", target: "10", frags: "50", crit: "+8,0%", eff: "0,160%", opens: "A bifurcação: penetração de defesa ou Overclock mais cedo" },
    
    { hero: "Mitia — Catwoman", now: "5", target: "8", frags: "30", crit: "+4,8%", eff: "0,160%", opens: "Devouring Prey — crítico crescente conforme o campo esvazia" },
    { hero: "Mitia — Catwoman", now: "5", target: "10", frags: "50", crit: "+8,0%", eff: "0,160%", opens: "Cat Claw Divine Art — o Hunt que pode se relançar" },
    { hero: "Rain Flame Soul — Dragon Warrior", now: "8", target: "10", frags: "20", crit: "+3,2%", eff: "0,160%", opens: "Summon Dragon ou Dragon God's Blessing" },
    { hero: "Selina · Frostcharm — Succubus", now: "8", target: "10", frags: "20", crit: "+3,2%", eff: "0,160%", opens: "Stun de 2s em 30% ou corte de 20% na cura inimiga — os únicos números exibidos em qualquer kit vermelho" },
    { hero: "Kazres · Darkblade", now: "15", target: "20", frags: "300", crit: "+8,0%", eff: "0,027%", opens: "Fear em cada corte e reinvocação de clone" },
  ],
  reading:
    "Os mesmos +8,0% de crítico de conta custam 50 fragmentos na Mitia e 300 no Kazres. O degrau mais barato do elenco é a Tidecaller do 1 ao 5 — vinte fragmentos ligam o motor de mana dela inteiro. E a Veliana do 1 ao 3 sai por dez, entregando a peça de velocidade que o kit dela usa como multiplicador de tudo.",
  twoRankings:
    "Vale separar as duas perguntas de vez. Qualidade de kit mede o herói ignorando o preço; prioridade de investimento pesa nível atual, custo do próximo degrau, função que falta no time e redundância com quem você já tem. Um herói excelente pode não ser prioridade justamente porque a maior parte da função dele chega cedo — é o caso da Tidecaller, cujo ciclo abre no nível 5 e cujos degraus seguintes custam sessenta por nível. E o contrário também existe: a Mitia melhora conforme as peças passam a conversar entre si, então ela é a que mais pede recurso continuado.",
  caveat:
    "Atualizado em 1 set. 2026: a Veliana saiu do nível 1 e está no 5 — os três degraus baratos dela já foram comprados, e a linha dela na tabela agora parte daí. Quatro ressalvas. A primeira é específica: o degrau mais barato da tabela é o da Tidecaller, e a wiki já catalogou um inimigo que devora uma invocação a cada 5 segundos, além de Restrain contra Summon no estágio 83 — o herói mais barato de ligar é também o que tem counter conhecido. Os níveis vêm das telas de 30-31 ago. 2026 e envelhecem. A tabela conta só fragmento, e subir também consome EXP de classe, que é por classe e pode ser o gargalo real. E o crítico por fragmento é um critério entre outros: ele ignora completamente o que o degrau faz em combate, que é justamente o motivo de a coluna \"o que liga\" existir ao lado.",
  pending: [
    "Refazer a tabela com os níveis atuais sempre que houver uma leva nova de prints do elenco",
    "Acrescentar o custo em EXP de classe por degrau, quando a curva desse recurso estiver levantada",
    "Medir em run se o degrau mais barato da Tidecaller entrega mesmo a maior parte da função dela",
  ],
};

export const rarityCostCompare = {
  kicker: "QUEM PAGA MAIS BARATO",
  title: "No mesmo nível, o roxo compra crítico mais barato que o vermelho",
  intro:
    "Três heróis parados no nível 15, um de cada raridade, mostram as duas metades do custo. O fragmento pedido é idêntico — 60 para os três. O EXP de classe não: sai numa razão limpa de 3 para 4 para 5.",
  columns: ["Raridade", "Fragmentos no nível 15", "EXP de classe", "Crítico global", "Crítico por 1.000 de EXP"],
  rows: [
    { tier: "SR — Karl", frags: "60", exp: "1.008", crit: "18,0%", eff: "17,9%" },
    { tier: "SSR — Lilith", frags: "60", exp: "1.344", crit: "21,0%", eff: "15,6%" },
    { tier: "SP — Kazres", frags: "60", exp: "1.680", crit: "24,0%", eff: "14,3%" },
  ],
  reading:
    "O vermelho paga mais crítico global por nível, mas cobra mais EXP de classe do que paga a mais: a recompensa sobe na razão 6:7:8 e o custo sobe na razão 3:4:5. Por unidade de EXP de classe, o roxo entrega cerca de 25% mais crítico de conta que o vermelho.",
  caveat:
    "Isso não diz \"suba roxos em vez de vermelhos\". Vermelho é melhor em combate, tem kit próprio e é o que abre time de expedição SP. Diz outra coisa, mais estreita: se a intenção for especificamente comprar crítico de conta com um estoque de EXP de classe parado, o roxo é a compra mais eficiente — e a reserva de EXP é por classe, então nem sempre o estoque que sobra é o do herói que você quer subir.",
  naming:
    "Atenção ao ler as fichas antigas: quatro delas registram esse mesmo recurso como \"essência\" (Red Queen, Star Mage, Shadow Wolf) ou como \"material de upgrade\" (Lilith). É o EXP de classe com outro nome, anotado antes de o sistema ser catalogado.",
  pending: [
    "Levantar o EXP de classe pedido em outros níveis para desenhar a curva; hoje só o nível 15 tem as três raridades juntas",
    "Confirmar se a razão 3:4:5 se mantém fora do nível 15",
    
  ],
};

export const globalCritReward = {
  kicker: "O QUE TODO NÍVEL PAGA",
  title: "Subir qualquer herói aumenta o crítico da conta",
  intro:
    "Cada ficha exibe uma linha de recompensa global em Dano Crítico, e ela não é um marco solto: é o nível do herói multiplicado por uma taxa que só depende da raridade. Vinte pares de herói e nível, espalhados por onze fichas, fecham na conta exata, sem sobra.",
  columns: ["Raridade", "Por nível", "Leituras que fecham", "No nível 15"],
  rows: [
    { tier: "SR", rate: "1,2%", points: "1 leitura — Karl no 15", at15: "18,0%" },
    { tier: "SSR", rate: "1,4%", points: "9 leituras, 5 heroínas, dos níveis 9 ao 15", at15: "21,0%" },
    { tier: "SP", rate: "1,6%", points: "9 leituras, 6 heróis, dos níveis 1 ao 15", at15: "24,0%" },
    { tier: "UR", rate: "3,0%", points: "1 leitura — Artemis no 2", at15: "45,0% (projeção)" },
  ],
  proof:
    "O Dragon Warrior sozinho fecha a escada do SP em quatro degraus seguidos: 1,6% no nível 1, 4,8% no 3, 6,4% no 4 e 8,0% no 5. A Lilith faz o mesmo do lado SSR: 12,6% no 9, 16,8% no 12, 18,2% no 13 e 21,0% no 15. E no mesmo nível 15 as três raridades se separam limpo — Karl a 18,0%, Bounty Hunter a 21,0% e Kazres a 24,0%.",
  consequence:
    "Isso muda a pergunta \"vale subir um herói que eu nem escalo?\". Vale em parte, porque o crítico entra na conta inteira e não naquele herói. Mas a taxa é linear e o custo em fragmento não é: da faixa 1-5 para a 15-20 o fragmento por nível salta de 5 para 60, então o mesmo 1,6% custa doze vezes mais no topo. Subir vários heróis pelos primeiros níveis compra crítico global muito mais barato que empurrar um só para cima.",
  accountTotal:
    "A soma existe na tela e a wiki a registrava sem saber de onde vinha. O painel Hero Comp exibe um \"Global Critical DMG\" que é o acumulado da conta inteira, e ele cresce à medida que os heróis sobem: 500,0% · 627,8% · 647,0% · 656,4% · 663,0% e 672,2% no snapshot pós-estágio 82. Cada linha de recompensa global que aparece numa ficha é uma parcela desse total — o que dá um jeito prático de medir qualquer decisão de investimento: anote o número antes, suba o herói, anote depois.",
  urCaveat:
    "A linha UR vem de um ponto só — Artemis no nível 2 com 6,0%. A taxa de 3,0% por nível é quase o dobro da SP e faria de cada nível UR a compra mais eficiente do jogo, mas um ponto não fecha uma escada. Falta uma segunda leitura em outro nível.",
  pending: [
    "Confirmar a taxa UR com uma segunda leitura da Artemis em outro nível",
    "Confirmar a taxa SR com um segundo herói roxo, já que Karl é a única leitura",
    "Verificar se a recompensa global existe para outros atributos além de Dano Crítico",
    "Descobrir se o bônus de profissão do nível 30 (+8% de dano da classe) também é de conta ou só do herói",
  ],
};

export const levelMilestones = {
  kicker: "OS NÍVEIS QUE IMPORTAM",
  title: "12, 15 e 20",
  intro:
    "Nem todo nível vale igual. Três deles mudam o que o herói faz, e o resto entre eles é atributo.",
  rows: [
    {
      level: "12",
      cost: "130 fragmentos desde o 1",
      what: "Libera o potencial completo de skills: duas blessings iniciais assim que o personagem é escolhido, e uma sétima escolha depois da ultimate — antes o draft se encerrava nela.",
    },
    {
      level: "15",
      cost: "220 fragmentos desde o 1",
      what: "Upgrade forte em SP e SSR. Na Lilith é onde a passiva exclusiva abre, ainda bloqueada no 13.",
    },
    {
      level: "20",
      cost: "520 fragmentos desde o 1",
      what: "O próximo pico de poder. Os níveis 16 a 19 entregam só atributos, então a faixa inteira de 300 fragmentos existe para chegar aqui.",
    },
  ],
  note: "Efeitos relatados pelo jogador a partir de uso; o nível 15 tem confirmação parcial nas fichas de Lilith, Onmyoji e Catwoman. O custo de fragmentos agora tem prova de tela nas grades de roster.",
};

export const fragmentSource = {
  kicker: "DE ONDE VEM O FRAGMENTO",
  title: "Um mítico repetido dá 10, sempre",
  text:
    "A primeira vez que um mítico sai, ele libera o personagem. Da segunda em diante rende exatamente 10 fragmentos, sem variação. É o câmbio que liga a invocação à expedição — e ele torna o momento do gasto mais importante que o volume.",
  leverage: {
    title: "O mesmo repetido vale 12 vezes mais num herói nível 1",
    columns: ["Herói na faixa", "Custo por nível", "O que 10 fragmentos compram"],
    rows: [
      { band: "1 – 5", cost: "5", buys: "2 níveis inteiros" },
      { band: "5 – 10", cost: "10", buys: "1 nível" },
      { band: "10 – 15", cost: "30", buys: "um terço de nível" },
      { band: "15 – 20", cost: "60", buys: "um sexto de nível" },
      { band: "Acima do 20", cost: "100 no nível 22", buys: "um décimo de nível" },
    ],
    note:
      "É a prova aritmética do que a expedição já sugeria: enquanto houver herói SP em nível baixo, cada repetido gasto ali rende doze vezes o que renderia no vermelho que você está empurrando para o 20.",
  },
  price: {
    title: "O que isso custa em invocação",
    intro:
      "O pity garante um mítico a cada 50 fichas, então 50 fichas equivalem a 10 fragmentos depois que os oito estão desbloqueados. Convertendo pelo Sprint Pack 2, que vende 20 fichas por US$ 6,99 — o preço do diamante avulso:",
    columns: ["Trecho", "Fragmentos", "Fichas míticas", "Custo aproximado"],
    rows: [
      { span: "Nível 1 → 5", frags: "20", scrolls: "100", cost: "US$ 35" },
      { span: "Nível 5 → 10", frags: "50", scrolls: "250", cost: "US$ 87" },
      { span: "Nível 10 → 15", frags: "150", scrolls: "750", cost: "US$ 262" },
      { span: "Nível 15 → 20", frags: "300", scrolls: "1.500", cost: "US$ 524" },
      { span: "Nível 1 → 20", frags: "520", scrolls: "2.600", cost: "US$ 909" },
    ],
    note:
      "Teto, não preço de tabela: o pity é \"dentro de 50\", e a taxa base de 2,47% adianta parte das invocações. Também ignora fragmento vindo de baú, evento ou loja. Serve para dimensionar a ordem de grandeza — um único vermelho do 1 ao 20 custa, em invocação comprada, quase mil dólares.",
  },
  urCaveat:
    "Nada disso vale para UR. Athena e Artemis correm numa escala à parte, com a própria moeda e a própria escada de troca; a curva de fragmento medida aqui é dos heróis SP.",
};

export const spreadVsFocus = {
  kicker: "A CONTA DA BIFURCAÇÃO",
  title: "300 fragmentos rendem o dobro espalhados",
  intro:
    "Trezentos fragmentos é exatamente o que custa levar um vermelho do 15 ao 20. Partindo de oito heróis no nível 1, dá para comparar os dois destinos.",
  columns: ["Destino", "Resultado", "Total Level somado dos 4 times"],
  rows: [
    { path: "Tudo num herói", result: "Um vermelho no nível 16, os outros sete no 1", total: "23" },
    { path: "Espalhado entre os oito", result: "Seis no nível 7 e dois no 6", total: "54" },
  ],
  reading:
    "Para a expedição a resposta é clara: espalhar mais que dobra o Total Level somado, e é ele que a regra 4 converte em itens. O herói concentrado ainda ficaria no 16, sem alcançar nenhum dos marcos que importam — o 20 pede 520 fragmentos desde o nível 1.",
  counterpoint:
    "O contrário também é verdade e não se anula: oito heróis no nível 7 não passam de figurantes numa run, enquanto um no 12 já traz o kit completo de skills. A escolha é entre destravar renda e destravar poder, e a conta acima só mede o lado da renda.",
};

export const fragmentCurveGallery = [
  { src: "/screenshots/progression/fragment-curve-roster-1.jpg", alt: "Grade de roster mostrando custos 5, 10, 60 e 100 fragmentos", caption: "Roster: nível 22 já pede 100 fragmentos; níveis 15-18 pedem 60." },
  { src: "/screenshots/progression/fragment-curve-roster-2.jpg", alt: "Grade de roster mostrando níveis 13 a 15 e custos 30/60", caption: "Roster: níveis 13-14 pedem 30 e nível 15 passa para 60." },
];


export const fragmentTradeoff = {
  kicker: "ONDE GASTAR FRAGMENTO SP",
  title: "Espalhar até o oitavo, concentrar depois",
  text:
    "Relato de campo: desbloquear um herói SP custa 80 fragmentos, e a curva de custo acima mostra que os mesmos 80 levam um herói do nível 1 ao 10, com 20 de sobra. Olhando só para o combate, dez níveis ganham fácil — é por isso que a intuição manda não espalhar. A expedição inverte a conta enquanto houver vaga: cada desbloqueio abre uma dupla nova, e uma dupla nova é chance permanente de Grail. O quarto time SP acrescenta cerca de 0,29 Grail por ciclo, o que soma 4 por edição, 26 em três meses e 105 num ano — ganho que se acumula, contra um degrau único de poder.",
  rule:
    "A troca só vale até o oitavo SP, porque são quatro times de dois e depois disso não existe vaga nova para abrir. Passado esse ponto a lógica se inverte de volta: um herói vermelho muito forte vale mais que vários meia-boca, e o fragmento volta a ser nível. E isso muda a prioridade de início de jogo — pegar SP cedo rende mais do que parecia, mesmo os que você não pretende levar para runs.",
  note:
    "Os 80 fragmentos de desbloqueio ainda vêm da experiência do jogador. A curva de nível tem prova de tela até o 20; acima disso há um único ponto medido. O ganho de Grail é projeção sobre a taxa ajustada de 29% por time SP.",
};

export const fourthSlot = {
  kicker: "O QUARTO TIME",
  title: "8 heróis SP abrem as quatro vagas",
  text:
    "Pela regra 2 a qualidade do time é a do pior herói do par, então basta um SSR na dupla para o Grail sumir da lista. Com oito heróis SP os quatro times ficam SP, e — pelo padrão observado, em que os três times SP tinham o Grail no Chance to Obtain e o SSR não tinha — as quatro vagas passam a sortear Grail.",
  columns: ["Times SP", "Média por ciclo", "Ciclo em branco", "Grails em 14 ciclos", "Dias até 80 Grails"],
  rows: [
    { teams: "3 (situação atual)", avg: "0,86", dry: "36%", cycle: "12", days: "93" },
    { teams: "4 (com 8 heróis SP)", avg: "1,15", dry: "26%", cycle: "16", days: "70" },
  ],
  note:
    "Ganho de cerca de 33% no Grail, ou 23 dias a menos para juntar os 80 de oito draws. E o time SSR observado tinha um Lv.1 ao lado de um Lv.16: pela regra 2, trocar só o herói fraco já converteria a dupla inteira. Projeção sobre a taxa ajustada de 29% por time — nunca vimos um quarto time SP em campo.",
};

export const expeditionGallery = [
  {
    src: "/screenshots/expedition/squad-rules.jpg",
    alt: "Painel Expedition Rules com as seis regras oficiais",
    title: "As regras oficiais",
    caption: "Inclui a regra 6: herói de qualidade Immortal não participa de expedições.",
  },
  {
    src: "/screenshots/expedition/squad-ready.jpg",
    alt: "Quatro times prontos com a lista Chance to Obtain",
    title: "Antes de partir",
    caption: "O Grail aparece na lista dos três times SP e em nenhum momento no time SSR.",
  },
  {
    src: "/screenshots/expedition/squad-exploring.jpg",
    alt: "Expedição recém-iniciada com o tempo restante",
    title: "Ciclo de 12h",
    caption: "Remaining Time 11:59:58 logo após o Depart.",
  },
  {
    src: "/screenshots/expedition/squad-complete.jpg",
    alt: "Quatro expedições concluídas com o loot por time",
    title: "Ciclo concluído",
    caption: "O Team 2 tinha chance de Grail e voltou sem — a lista é probabilidade, não promessa.",
  },
  {
    src: "/screenshots/expedition/squad-empty.jpg",
    alt: "Expedition Squad vazia depois da coleta",
    title: "Depois de coletar",
    caption: "Times zerados com \"Not enough team members\", ciclo estimado de 12h e o Quick Deploy destacado.",
  },
  {
    src: "/screenshots/expedition/reward-top.jpg",
    alt: "Popup Reward com Grail e ticket dourado",
    title: "A coleta",
    caption: "Grail ×2 e ticket dourado ×3, além dos sacos de recurso.",
  },
  {
    src: "/screenshots/expedition/reward-bottom.jpg",
    alt: "Popup Reward com as fichas circulares de classe",
    title: "Fichas de classe",
    caption: "Oito fichas circulares com ícones por profissão — nomes não capturados.",
  },
];

export const expeditionPending = [
  "Contar Grails por ciclo ao longo de 30+ coletas para medir a taxa real por time, em vez do ajuste atual",
  "Verificar se a chance por time varia com a Adventure Quality acima de SP",
  "Medir a renda de Grail por faixa de Total Level — a regra 4 promete ganho, falta dimensionar",
  "Confirmar em campo que um quarto time SP também recebe o Grail no Chance to Obtain",
  "Fotografar a tela de desbloqueio de um SP para registrar o custo em fragmentos",
  "Confirmar com mais prints se a faixa 20-25 permanece inteira em 100 fragmentos por nível",
  "Confirmar em print os efeitos dos níveis 12, 15 e 20",
  "Medir a curva de fragmento dos heróis UR, que segue escala própria e não foi observada",
  "Confirmar se todo herói SP abre passiva exclusiva no nível 15, como a Lilith",
  "Catalogar as demais fontes de seleção mítica em eventos e pacotes",
  "Confirmar se coletar duas vezes ao dia realmente dobra a renda, ou se há teto diário",
  "Confirmar se existe qualidade acima de SP na expedição e o que ela acrescenta",
  "Isolar o efeito do Total Level dentro de uma mesma qualidade",
  "Descobrir se a Adventure Quality usa a raridade do herói ou outro atributo",
  "Capturar os tooltips do ticket dourado, dos sacos e das fichas circulares",
  "Verificar se o Quick Deploy realmente maximiza a qualidade do time mais fraco",
];
