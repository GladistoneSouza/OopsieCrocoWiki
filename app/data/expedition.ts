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

// Curva de custo de nível de herói — dado geral de progressão, documentado aqui
// porque é o que decide entre desbloquear uma vaga nova e subir um herói existente.
export const levelCostCurve = {
  kicker: "O QUE CUSTA SUBIR",
  title: "5, depois 10, depois 30",
  intro:
    "Custos em fragmentos por nível, relatados pelo jogador. Os acumulados conferem entre si — 20 no nível 5, 30 no 7, 60 no 10, 90 no 11.",
  columns: ["Nível", "Custo", "Acumulado"],
  rows: [
    { level: "1 → 5", cost: "5 por nível", total: "20" },
    { level: "5 → 7", cost: "5 por nível", total: "30" },
    { level: "7 → 10", cost: "10 por nível", total: "60" },
    { level: "10 → 11", cost: "30", total: "90" },
    { level: "15 → 16", cost: "60", total: "não medido" },
    { level: "20 → 21", cost: "100", total: "não medido" },
  ],
  note:
    "Os degraus entre 11 e 15 e entre 16 e 20 não foram medidos. Se o custo se mantivesse em 30 por nível até o 15, chegar lá custaria cerca de 210 fragmentos — mas o salto para 60 no 15→16 sugere que ele sobe antes disso. Nível 21 é o teto alcançado na conta observada.",
};

export const fragmentTradeoff = {
  kicker: "ONDE GASTAR FRAGMENTO SP",
  title: "Espalhar até o oitavo, concentrar depois",
  text:
    "Relato de campo: desbloquear um herói SP custa 80 fragmentos, e a curva de custo acima mostra que os mesmos 80 levam um herói do nível 1 ao 10, com 20 de sobra. Olhando só para o combate, dez níveis ganham fácil — é por isso que a intuição manda não espalhar. A expedição inverte a conta enquanto houver vaga: cada desbloqueio abre uma dupla nova, e uma dupla nova é chance permanente de Grail. O quarto time SP acrescenta cerca de 0,29 Grail por ciclo, o que soma 4 por edição, 26 em três meses e 105 num ano — ganho que se acumula, contra um degrau único de poder.",
  rule:
    "A troca só vale até o oitavo SP, porque são quatro times de dois e depois disso não existe vaga nova para abrir. Passado esse ponto a lógica se inverte de volta: um herói vermelho muito forte vale mais que vários meia-boca, e o fragmento volta a ser nível. E isso muda a prioridade de início de jogo — pegar SP cedo rende mais do que parecia, mesmo os que você não pretende levar para runs.",
  note:
    "Os 80 fragmentos e a curva de nível vêm da experiência do jogador, não de print. O ganho de Grail é projeção sobre a taxa ajustada de 29% por time SP.",
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
  "Medir os degraus de custo entre os níveis 11 e 15 e entre 16 e 20 — as duas lacunas da curva",
  "Confirmar se todo herói SP abre passiva exclusiva no nível 15, como a Lilith",
  "Catalogar as demais fontes de seleção mítica em eventos e pacotes",
  "Confirmar se coletar duas vezes ao dia realmente dobra a renda, ou se há teto diário",
  "Confirmar se existe qualidade acima de SP na expedição e o que ela acrescenta",
  "Isolar o efeito do Total Level dentro de uma mesma qualidade",
  "Descobrir se a Adventure Quality usa a raridade do herói ou outro atributo",
  "Capturar os tooltips do ticket dourado, dos sacos e das fichas circulares",
  "Verificar se o Quick Deploy realmente maximiza a qualidade do time mais fraco",
];
