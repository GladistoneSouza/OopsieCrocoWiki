import type { HeroRecord } from "../types";

export const catwoman: HeroRecord = {
  slug: "catwoman",
  name: "Mitia",
  aliases: ["Catwoman", "SP Catwoman"],
  className: "Assasin",
  rarity: "SP",
  role: "Assassina / snowball de dano / execução de presas",
  summary:
    "Assassina SP construída em torno da skill Hunt: marca inimigos com Prey, converte abates em dano permanente crescente e fica mais forte quanto menos inimigos restam, culminando em execução direta de alvos com pouca vida.",
  fieldNote:
    "Ficha documentada no nível 3, com Blessing Bestiary de Hunt completo e progressão transcrita até o nível 30. O kit inteiro empurra na mesma direção: acumular marcas de Prey e abates para escalar dano, velocidade de ataque e crítico conforme o campo esvazia — potencial de snowball em runs longas, ainda sem teste prático.",
  image: "/screenshots/sp-heroes/catwoman-profile.jpg",
  artImage: "/screenshots/art/catwoman-card.jpg",
  identity: [
    "Título exibido: SP Catwoman",
    "Nome exibido na ficha: Mitia",
    "Profissão: Assassin",
    "Posição/alvo exibido: 1",
    "Disponível no Hero Exchange por 3.000 Hero Coins (limite semanal 1/1)",
    "Aparece entre os 8 heróis selecionáveis do banner Mythical Summon (Probability UP) e do seletor de Mythic Hero do Abyss Realm",
  ],
  stats: [
    "Snapshot no nível 3 (22 ago. 2026): poder 16.374 · ataque 16,32K · HP 162,39K · defesa 5.558 · Dano Crítico global +4,8% · fragmentos 1/5",
    "Snapshot no nível 3 (21 ago. 2026): poder 16.082 · ataque 16,03K · HP 159,51K · defesa 5.460 · Dano Crítico global +4,8% · fragmentos 1/5",
    "Observação: os dois snapshots são do mesmo nível 3 em dias seguidos com valores diferentes (16.082 → 16.374). Hipótese: o poder incorpora bônus externos à ficha (equipamentos/melhorias globais) que mudaram entre os prints; ambos os valores ficam registrados.",
  ],
  levelSkills: [
    {
      name: "Hunt",
      description:
        "Skill base: teleporta (blink) para a frente do inimigo e desfere 3 golpes de Claw Strike; cada golpe causa dano e aplica Prey, aumentando o dano recebido pelo alvo.",
      source: "Blessing Bestiary — descrição da skill base.",
    },
    {
      name: "Bestiary — hunting habits",
      description:
        "A morte de uma unidade inimiga aumenta o próprio dano. Quando resta apenas 1 inimigo, ganha alta velocidade de ataque e roubo de vida. Texto idêntico ao tooltip do talento Prey Collection — aparentemente a mesma blessing com dois nomes (inconsistência de tradução).",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — nibbling prey",
      description:
        "Quanto menos inimigos houver, maior o próprio índice de crítico. Texto quase idêntico ao tooltip de Devour prey/Devouring Prey — aparentemente a mesma blessing com nomes distintos (inconsistência de tradução).",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — murderous habit",
      description: "Ataques têm chance de disparar Hunt.",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — execute prey",
      description:
        "Texto na tela: \"If the enemy stacks up 3 and the prey triggers to execute, low health enemies can be killed directly.\" — com 3 acúmulos de Prey, inimigos com pouca vida podem ser executados diretamente (tradução da tela é confusa; interpretação como hipótese).",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — bloodthirsty habits",
      description: "Lança Hunt automaticamente no inimigo com menor HP; recarga de 5 segundos.",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — search for prey",
      description: "A cada 7 segundos, causa dano a todos os inimigos e aplica 3 acúmulos de Prey.",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — Claw Habits",
      description: "Cada lançamento de Hunt aumenta o próprio dano; acumulável.",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — mark prey",
      description: "Ataques básicos também marcam o inimigo com Prey.",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — cruel habits",
      description: "Hunt causa dano adicional baseado em parte do HP perdido do alvo.",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — Play with prey",
      description: "Após lançar Hunt em um alvo com Prey, aumenta a velocidade de ataque; acumulável.",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — Cat Claw Magic (dourada)",
      description: "A cada 8 segundos, lança 5 ataques consecutivos de Hunt em inimigos aleatórios.",
      source: "Blessing Bestiary — blessing dourada (ultimate).",
    },
    {
      name: "Bestiary — wild hunt (dourada)",
      description:
        "A cada 7 segundos, lança Hunt em todos os inimigos marcados com Prey, causando dano extra conforme a quantidade de acúmulos de Prey. Nome exibido em minúsculas na tela; não confundir com o ramo de talento Wild Hunt dos níveis 20/25.",
      source: "Blessing Bestiary — blessing dourada (ultimate).",
    },
    {
      name: "Nível 3 — Prey Collection",
      description:
        "Começa a batalha com Prey Collection obtido. Tooltip: a morte de uma unidade inimiga aumenta o próprio dano; quando resta apenas 1 inimigo, ganha alta velocidade de ataque e roubo de vida (blood-stealing).",
      source: "Texto confirmado na tela de progressão; tooltip aberto no print.",
    },
    {
      name: "Nível 5 — dano permanente por abate",
      description: "Depois de matar um inimigo, o próprio dano aumenta permanentemente. O valor do aumento não é exibido.",
      source: "Texto completo confirmado na tela de progressão.",
    },
    {
      name: "Nível 8 — Devouring Prey",
      description:
        "Começa a batalha com Devouring Prey obtido. Tooltip (exibido como \"Devour prey\"): quanto menor o número de inimigos, maior a taxa de acerto crítico.",
      source: "Texto confirmado na tela de progressão; tooltip aberto no print.",
    },
    {
      name: "Nível 10 — Cat Claw Divine Art / Wild Pursuit",
      description:
        "Cat Claw Divine Art: cada lançamento de Hunt tem chance de ser lançado mais uma vez em um inimigo aleatório. Wild Pursuit: quando um inimigo marcado com Prey morre, aumenta a esquiva por 3 segundos — o percentual aparece literalmente como \"x%\" na tela (valor não exibido).",
      source: "Texto confirmado na tela de progressão (nível bloqueado).",
    },
    {
      name: "Nível 12 — Blessing adicional",
      description: "Ganha uma Blessing adicional depois de selecionar uma Ultimate Skill.",
      source: "Texto confirmado na tela de progressão (nível bloqueado).",
    },
    {
      name: "Nível 15 — assassinato de emergência",
      description: "Quando o HP está baixo, libera um assassinato e restaura vida (texto na tela: \"When health is low, release to assassinate and restore health.\").",
      source: "Texto confirmado na tela de progressão (nível bloqueado).",
    },
    {
      name: "Nível 20 — Catclaw Mastery / Wild Hunt",
      description:
        "Catclaw Mastery: texto na tela \"Killing Time is more likely to trigger\" — provável erro de tradução; o que \"Killing Time\" designa não fica claro. Wild Hunt: matar um inimigo tem chance de disparar o efeito 1 vez extra.",
      source: "Texto confirmado na tela de progressão (nível bloqueado).",
    },
    {
      name: "Nível 25 — Catclaw Mastery / Wild Hunt",
      description:
        "Catclaw Mastery: Claw Strike tem chance de disparar um golpe extra. Wild Hunt: quando termina, todos os inimigos ganham 3 acúmulos de Prey.",
      source: "Texto confirmado na tela de progressão (nível bloqueado).",
    },
    {
      name: "Nível 30 — bônus de profissão",
      description: "Aumenta em 8% o dano dos personagens desta profissão (Assassin).",
      source: "Texto confirmado na tela de progressão (nível bloqueado).",
    },
  ],
  kit: {
    engine:
      "O kit inteiro tem um verbo só: Hunt. Toda blessing da Mitia ou dispara Hunt, ou marca Prey para o Hunt render mais, ou converte abate em atributo permanente. Não existe uma segunda linha de dano competindo por espaço — o que faz dela a heroína mais fácil de montar do elenco vermelho e a mais fácil de estragar, porque uma run que não ofereça gatilho de Hunt não oferece nada.",
    loops: [
      {
        name: "Prey amplifica, não só conta",
        text: "A descrição da Hunt diz que cada marca aumenta o dano recebido pelo alvo — Prey não é apenas o contador que a execução lê, é multiplicador de dano em cima do inimigo. Se esse aumento valer para qualquer fonte de dano e não só para a Mitia, ela deixa de ser uma carry egoísta e vira amplificadora do time inteiro: espalha 3 marcas e todo mundo bate mais forte no mesmo alvo. O texto do jogo não diz de quem é o dano amplificado, e essa é a pergunta mais cara em aberto da ficha dela.",
      },
      {
        name: "O gatilho se realimenta",
        text: "murderous habit faz ataque básico disparar Hunt. Cada Hunt lançado soma dano em Claw Habits e, se o alvo tinha Prey, soma velocidade de ataque em Play with prey. Mais velocidade de ataque significa mais ataques básicos, que significam mais Hunt. O ciclo fecha sozinho e não depende de aliado nenhum.",
      },
      {
        name: "Prey vira munição",
        text: "mark prey põe Prey no básico, search for prey põe 3 acúmulos em todo mundo a cada 7 segundos, e a dourada wild hunt lança Hunt em todos os marcados com dano proporcional aos acúmulos. Marcar deixou de ser preparação e virou a própria fonte de dano em área.",
      },
      {
        name: "A catraca do abate",
        text: "hunting habits sobe o dano a cada morte, o talento de nível 5 torna parte desse ganho permanente e Wild Hunt no nível 20 dá chance de o abate contar duas vezes. Nada disso volta atrás dentro da run: cada inimigo morto deixa a Mitia melhor para o próximo.",
      },
      {
        name: "A curva ao contrário",
        text: "nibbling prey aumenta o crítico conforme o campo esvazia e hunting habits entrega alta velocidade de ataque e roubo de vida quando resta um único inimigo. Ela é o oposto do padrão do jogo: chega no boss mais forte do que começou a sala.",
      },
    ],
  },
  combos: [
    {
      name: "Execução automática a cada 7 segundos",
      status: "hipótese",
      needs: ["search for prey", "execute prey"],
      text: "execute prey abre execução direta em inimigos com pouca vida quando o alvo acumula 3 marcas de Prey. search for prey aplica exatamente 3 acúmulos em todos os inimigos a cada 7 segundos. As duas juntas armam a execução no campo inteiro em pulso, sem precisar mirar nada. O casamento do número é forte demais para ser coincidência, mas nenhuma run registrada confirmou o disparo.",
    },
    {
      name: "A segunda fonte dos três acúmulos",
      status: "hipótese",
      needs: ["Wild Hunt (nível 25)", "execute prey"],
      text: "O talento de nível 25 termina dando 3 acúmulos de Prey a todos os inimigos — de novo o número exato que execute prey pede. Quem chegar ao 25 tem a execução armada mesmo sem a search for prey aparecer no draft.",
    },
    {
      name: "Cinco Hunts de uma vez",
      status: "hipótese",
      needs: ["Cat Claw Magic (dourada)", "Claw Habits", "Play with prey"],
      text: "A dourada dispara 5 Hunts consecutivos a cada 8 segundos. Como Claw Habits e Play with prey contam por lançamento, o pulso entrega cinco camadas de dano e cinco de velocidade de ataque de uma vez em vez de uma. É o maior multiplicador de acúmulo do kit.",
    },
    {
      name: "Dobrar tudo no nível 10",
      status: "hipótese",
      needs: ["Cat Claw Divine Art (nível 10)"],
      text: "Cada Hunt ganha chance de ser lançado outra vez em alvo aleatório. Como praticamente todo ganho da Mitia é contado por lançamento, esse talento não soma dano: multiplica a taxa de acúmulo do kit inteiro. Falta saber se o Hunt gerado pelo próprio talento pode disparar o talento de novo — se puder, a dourada Cat Claw Magic deixa de ser 5 lançamentos e vira a raiz de uma árvore de disparos. É a diferença entre um multiplicador fixo e uma cascata.",
    },
    {
      name: "O que sobra contra um alvo só",
      status: "hipótese",
      needs: ["cruel habits"],
      text: "cruel habits faz o Hunt causar dano proporcional ao HP que o alvo já perdeu. É a única peça do kit que não depende de haver muitos inimigos, e por isso a escolha obrigatória em sala de boss sem acompanhantes.",
    },
  ],
  breakpoints:
    "A escada geral da wiki aponta 12, 15 e 20 como os níveis que mudam um herói. Na Mitia os degraus que importam vêm antes: o 5 liga a catraca (dano permanente por abate), o 8 acrescenta crítico crescente conforme o campo esvazia e o 10 abre o Hunt recursivo, que é o único talento capaz de mudar o comportamento do kit em vez de somar a ele. Ela já está no 5, então o próximo alvo real é o 8 — não o 6.",
  strengths: [
    "Catraca de abate: o ganho de dano por morte é permanente dentro da run, então cada sala deixa a próxima mais barata",
    "Curva invertida — fica mais forte conforme o campo esvazia, o que a entrega no boss no melhor momento dela",
    "Execução por acúmulo ignora barra de vida: passar de 3 marcas de Prey vale mais que somar dano bruto",
    "O motor fecha sozinho, sem depender de aliado, escudo ou buff externo",
    "Kit de direção única: quase toda escolha oferecida empurra para o mesmo lugar, o que torna o draft difícil de errar",
  ],
  weaknesses: [
    "Tudo passa por Hunt: uma run que não ofereça gatilho de Hunt não entrega motor nenhum, e não há linha alternativa de dano",
    "Ela começa pior — a catraca só existe depois dos primeiros abates, e é justo na sala cheia que ela ainda não tem nada",
    "Sala de boss sem acompanhantes é o pior cenário: sem mortes não há catraca, sem multidão não há bônus por campo vazio, e só cruel habits continua funcionando",
    "Nenhuma redução de dano, nenhum escudo; o assassinato do nível 15 é o único sustain e depende de já estar com vida baixa",
    "Quase nenhum valor numérico aparece na tela — o percentual da esquiva do nível 10 sai literalmente como \"x%\" —, então priorizar entre duas escolhas é comparação qualitativa",
  ],
  builds: [
    {
      name: "Motor de Prey e execução",
      status: "rascunho",
      summary:
        "Direção derivada apenas do Bestiary, sem teste em run: espalhar Prey pelo máximo de fontes (ataques básicos, pulso periódico, Wild Hunt dourada) e converter os acúmulos em execução direta e dano crescente conforme o campo esvazia.",
      priorities: ["mark prey", "search for prey", "execute prey", "murderous habit", "Claw Habits", "wild hunt (dourada)"],
    },
  ],
  synergies: [
    "Comparação a medir — a leitura corrente é que a Mitia domina sala com muitos abates, pelo efeito da catraca, e a Light Archer domina alvo único prolongado, por acumular crítico no mesmo alvo. As duas disputam a mesma vaga de dano e nenhuma tem run medida",
    "Hipótese de composição — se o aumento de dano recebido do Prey valer para o time, ela vira preparadora de alvo: espalha 3 marcas com search for prey e os heróis de pico entram no alvo amplificado. Depende inteiramente da pendência sobre a quem o aumento se aplica",
    "Hipótese — fases com muitas ondas de inimigos fracos alimentam o acúmulo permanente de dano",
    "Hipótese — hunting habits + nibbling prey invertem a curva usual: Mitia fica mais forte quanto menos inimigos restam, apontando para dueto com um limpador de ondas que deixe o boss para ela",
  ],
  evidence: [
    "Ficha SP Catwoman no nível 3 (22 ago. 2026) — poder 16.374",
    "Ficha nível 3 com tooltips de Prey Collection e Devour prey (21 ago. 2026) — poder 16.082",
    "Tela de progressão dos níveis 10 a 30 (21 ago. 2026)",
    "Blessing Bestiary da skill Hunt em 3 páginas, incluindo as 2 blessings douradas (21 ago. 2026)",
    "Hero Exchange listando Catwoman por 3.000 Hero Coins (limite semanal 1/1)",
    "Catwoman entre os heróis selecionáveis do Mythical Summon e do Abyss Realm",
  ],
  evidenceImages: [
    { src: "/screenshots/sp-heroes/catwoman-profile.jpg", caption: "Ficha SP Catwoman — Mitia no nível 3 (poder 16.374)" },
    { src: "/screenshots/catwoman/profile-tooltip-prey-collection.jpg", caption: "Ficha no nível 3 (poder 16.082) com o tooltip de Prey Collection aberto" },
    { src: "/screenshots/catwoman/profile-tooltip-devour-prey.jpg", caption: "Tooltip de Devour prey e texto completo do talento de nível 5" },
    { src: "/screenshots/catwoman/progression-10.jpg", caption: "Nível 10 — Cat Claw Divine Art / Wild Pursuit (esquiva exibida como \"x%\")" },
    { src: "/screenshots/catwoman/progression-12-15.jpg", caption: "Níveis 12 (Blessing adicional) e 15 (assassinato com recuperação de vida)" },
    { src: "/screenshots/catwoman/progression-20.jpg", caption: "Nível 20 — Catclaw Mastery / Wild Hunt" },
    { src: "/screenshots/catwoman/progression-25-30.jpg", caption: "Níveis 25 e 30 da progressão" },
    { src: "/screenshots/catwoman/bestiary-hunt-1.jpg", caption: "Bestiary de Hunt — skill base, hunting habits, nibbling prey, murderous habit e execute prey" },
    { src: "/screenshots/catwoman/bestiary-hunt-2.jpg", caption: "Bestiary de Hunt — bloodthirsty habits, search for prey, Claw Habits e mark prey" },
    { src: "/screenshots/catwoman/bestiary-hunt-ultimates.jpg", caption: "Bestiary de Hunt — cruel habits, Play with prey e as douradas Cat Claw Magic e wild hunt" },
  ],
  pending: [
    "Testar se o aumento de dano recebido do Prey vale para o time todo ou só para a Mitia — decide se ela é carry egoísta ou amplificadora de composição",
    "Testar se um Hunt disparado pela Cat Claw Divine Art pode disparar a Cat Claw Divine Art de novo, abrindo cascata em vez de um multiplicador fixo",
    "Medir a diferença de dano dela entre sala com ondas antes do boss e sala de boss isolado — o kit inteiro prevê uma diferença grande e nenhuma run mediu",
    "Confirmar o valor do aumento permanente de dano por abate (nível 5) — o texto está completo, mas o número não é exibido",
    "Obter o percentual de esquiva de Wild Pursuit (nível 10), mostrado literalmente como \"x%\" na tela",
    "Esclarecer o que \"Killing Time\" significa no talento de nível 20 (provável erro de tradução de Hunt/Claw Strike)",
    "Confirmar se hunting habits = Prey Collection e nibbling prey = Devouring Prey/Devour prey (textos idênticos, nomes distintos)",
    "Entender a divergência de poder no nível 3 (16.082 em 21 ago. vs 16.374 em 22 ago.) — provável efeito de bônus externos à ficha",
    "Abrir Hero Background e histórias da Mitia (ainda não documentados)",
    "Verificar se a Catwoman possui gemas exclusivas",
    "Comparar com Shadow Wolf como carry de execução",
    "Testar em run o snowball de Prey e a build rascunho do Bestiary",
  ],
};
