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
    "O Mythical Summon lista oito heróis no Probability UP — Sword Demon, Tidecaller, Succubus, Light Archer, Flower Spirit, Catwoman, Dragon Warrior e Red Queen — e são exatamente os oito com raridade SP catalogados na wiki. A expedição pede quatro times de dois. Coleção completa e grade cheia dão o mesmo número, o que sugere que a expedição foi dimensionada para um elenco SP inteiro.",
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
