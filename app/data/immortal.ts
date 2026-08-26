// Immortal Hero · Limited-Time Recruitment — o sistema que entrega os heróis UR.
// Fonte: capturas de 26 ago. 2026 (evento com Athena e Artemis, 6d21h restantes).

export const immortalEvent = {
  kicker: "IMMORTAL HERO",
  title: "Limited-Time Recruitment",
  text:
    "Evento rotativo de sete dias que destaca dois Immortal Heroes por edição. É a única fonte de heróis UR observada até agora — os dois UR catalogados na wiki, Athena e Artemis, vieram desta linha.",
};

export const eventRules = [
  {
    title: "Sete dias por edição",
    original: "The event lasts for 7 days.",
    text: "O relógio do banner marcava 06d:21h:39m na captura.",
  },
  {
    title: "Grail fica, Lucky Star some",
    original: "After the event ends, Grails will be kept, but Lucky Stars will be cleared.",
    text: "Guardar Grail entre edições funciona; guardar Lucky Star não. É a regra que define todo o caminho gratuito.",
  },
  {
    title: "Dois heróis por edição",
    original: "Each event features 2 core Immortal Heroes.",
    text: "Nesta edição: Athena e Artemis.",
  },
];

export const drawRules = [
  {
    title: "8 prêmios fixos",
    original: "The prize pool contains 8 fixed rewards, and you can obtain all rewards in up to 8 draws.",
    text: "Oito posições, garantidas em no máximo oito draws.",
  },
  {
    title: "Prêmio maior encerra o pool",
    original: "If you draw the grand prize early, you will immediately receive all remaining rewards.",
    text: "Sair cedo entrega tudo de uma vez — e, com isso, interrompe o sorteio antes das oito Lucky Stars.",
  },
  {
    title: "10 Grails por draw",
    original: "Each draw costs 10 Grails and guarantees 1 Lucky Star.",
    text: "A estrela é garantida, não sorteada.",
  },
  {
    title: "Lucky Star compra o herói",
    original: "Accumulated Lucky Stars can be exchanged for the selectable Immortal Hero of the current event.",
    text: "A troca vale para o herói selecionável da edição corrente.",
  },
  {
    title: "Troca encarece a cada rodada",
    original: "The Lucky Star exchange cost increases progressively with each exchange round: 8,12,24,24…",
    text: "O jogo escreve as reticências e não mostra o resto da escada.",
  },
];

export const currencies = [
  {
    kicker: "MOEDA DO SORTEIO",
    title: "Grail",
    text:
      "10 por draw. Vem da Immortal Shop e da Expedition Squad, e é o único dos dois recursos que sobrevive ao fim do evento.",
  },
  {
    kicker: "MOEDA DA ESCOLHA",
    title: "Lucky Star",
    text:
      "O losango dourado com a gema roxa. Cada draw devolve 1, e os Grail Packs III, IV e V vendem o item direto — ×4, ×8 e ×16. É trocado pelo Immortal Hero selecionável da edição, e zera quando o evento acaba.",
  },
];

export const selectionLadder = {
  kicker: "TROCA DO HERÓI SELECIONÁVEL",
  title: "8 · 12 · 24 · 24…",
  text:
    "O contador da tela de draw marca Selectable Immortal Hero 0/8: a primeira troca custa 8 Lucky Stars, e a regra 5 diz que o custo sobe \"a cada exchange round\".",
  note:
    "O que \"round\" significa ainda não foi observado, e a resposta muda toda a economia — ver a leitura dupla abaixo.",
};

export const eventCadence = {
  kicker: "RITMO DO EVENTO",
  title: "Semana sim, semana não — e reseta tudo",
  text:
    "Relato do jogador: o Immortal Hero volta em semanas alternadas e, a cada retorno, zera tudo — a escada da troca começa de novo em 8 e as Lucky Stars da edição anterior já não existem. Isso torna cada edição um jogo independente: nada do que sobrar atravessa, exceto o Grail.",
  note: "Observação de campo, ainda sem print de uma segunda edição para confirmar.",
};

export const freePathReality = {
  title: "Sem pagar, uma cópia custa mais de um ano",
  text:
    "A regra do evento é explícita: no fim de cada edição o Grail fica e a Lucky Star some. Como a escada volta a 8 a cada retorno, as oito estrelas precisam sair todas dentro dos mesmos sete dias — e o sorteio só entrega uma por draw até o prêmio principal encerrar o pool. Com a renda medida em campo, cerca de 0,9 Grail por dia, cada ciclo de duas semanas rende 12 Grails, enquanto uma tentativa consome 45 em média (dez por draw, até o prêmio principal aparecer). Dá para tentar mais ou menos a cada quatro ciclos, e cada tentativa fecha as 8 estrelas em 12,5% das vezes — quando o prêmio principal calha de ser a última das oito posições. O tempo esperado até a primeira cópia gratuita passa de um ano.",
  note:
    "Modelo da wiki sobre regras confirmadas e uma medição de campo de duas semanas. O Grail gasto não é perdido: um sorteio que encerra cedo consome menos, e o saldo atravessa para a edição seguinte. Sorte muda tudo para os dois lados.",
};

export const ladderAmbiguity = {
  title: "\"Exchange round\" é troca dentro da edição, e o contador reinicia a cada volta",
  text:
    "A leitura que sobrevive ao relato de campo: round é cada troca dentro da mesma edição — 8, depois 12, depois 24 — e a escada inteira volta a 8 quando o evento reabre na semana seguinte. Isso explica por que o jogo zera as Lucky Stars no fim: elas pertencem a uma edição só. Falta o print do contador logo depois de uma primeira troca, que mostraria 0/12 e fecharia a questão.",
};


export const currencySources = [
  {
    currency: "Grail",
    subtitle: "Tooltip do jogo: \"Used for Immortal Summon\"",
    sources: [
      { name: "Immortal Shop", text: "Loja do evento — pacotes pagos e o Daily Benefits gratuito." },
      { name: "Expedition Squad", text: "Fonte gratuita: dois dos quatro times trouxeram Grail na coleta observada." },
    ],
  },
  {
    currency: "Lucky Star",
    subtitle: "Tooltip do jogo: \"Exchange for a selected Immortal Hero\"",
    sources: [
      { name: "Expedition Squad", text: "Listada pelo jogo como fonte, mas não apareceu em nenhuma lista Chance to Obtain do ciclo observado." },
      { name: "Immortal Summon", text: "O próprio draw: 1 Lucky Star garantida por invocação, além das vendidas nos packs III, IV e V." },
    ],
  },
];

export const prizePool = {
  intro:
    "O pool exibido tem oito posições. O prêmio central é o par de Immortal Heroes da edição; quatro posições entregam a esfera UR em quantidades diferentes; as demais aparecem como baú e como carta fechada.",
  slots: [
    { label: "Par de Immortal Heroes", detail: "Prêmio central (ícone com Athena e Artemis)" },
    { label: "Esfera UR ×200", detail: "" },
    { label: "Esfera UR ×100", detail: "" },
    { label: "Esfera UR ×60", detail: "" },
    { label: "Esfera UR ×40", detail: "" },
    { label: "Baú de gemas", detail: "Conteúdo não legível na captura" },
    { label: "Carta fechada ×3", detail: "Não revelada antes do draw" },
    { label: "Carta fechada ×2", detail: "Não revelada antes do draw" },
  ],
  note:
    "Interpretação provável: a esfera colorida marcada como UR é EXP de herói Immortal — a linha Daily Immortal EXP da loja vende exatamente esse ícone (×1000). O tooltip do item não foi capturado.",
};

export const shopColumns = [
  { key: "pack", label: "Oferta" },
  { key: "content", label: "Conteúdo" },
  { key: "limit", label: "Limite" },
  { key: "price", label: "Preço" },
  { key: "stars", label: "Lucky Stars totais" },
  { key: "perStar", label: "US$ por Lucky Star" },
] as const;

export const immortalShop = [
  { pack: "Daily Benefits", content: "Saco de recompensa (conteúdo não legível)", limit: "1/dia", price: "Grátis", stars: "—", perStar: "—", badge: "" },
  { pack: "Grail Pack I", content: "2 Grails + 300 diamantes", limit: "5/semana", price: "US$ 6,99", stars: "—", perStar: "—", badge: "400%" },
  { pack: "Grail Pack II", content: "10 Grails + 980 diamantes", limit: "2/semana", price: "US$ 17,99", stars: "1", perStar: "17,99", badge: "560%" },
  { pack: "Grail Pack III", content: "20 Grails + 4 Lucky Stars + UR ×200", limit: "1/semana", price: "US$ 41,99", stars: "6", perStar: "7,00", badge: "740%" },
  { pack: "Grail Pack IV", content: "40 Grails + 8 Lucky Stars + UR ×400", limit: "1/semana", price: "US$ 69,99", stars: "12", perStar: "5,83", badge: "900%" },
  { pack: "Grail Pack V", content: "80 Grails + 16 Lucky Stars + UR ×700", limit: "2/semana", price: "US$ 139,99", stars: "24", perStar: "5,83", badge: "910%" },
  { pack: "Grail Pack VI", content: "80 Grails + 1.280 diamantes", limit: "12/dia", price: "US$ 139,99", stars: "8", perStar: "17,50", badge: "575%" },
  { pack: "Daily Immortal EXP", content: "UR ×1.000", limit: "1/dia", price: "2.000 diamantes", stars: "—", perStar: "—", badge: "" },
  { pack: "Mythic Selection", content: "Baú de herói mítico — aleatório ou à escolha, não confirmado", limit: "1/semana", price: "3.000 diamantes", stars: "—", perStar: "—", badge: "" },
];

export const shopNote =
  "A coluna de Lucky Stars soma o que o pacote entrega direto com o que os Grails do próprio pacote rendem em draws (1 estrela por draw). É a leitura que desfaz o empate aparente: os packs V e VI custam os mesmos US$ 139,99 e ambos trazem 80 Grails, mas o V embute 16 Lucky Stars e o VI nenhuma — 24 estrelas contra 8. Contando só Grail, os dois pareciam idênticos. Valores em dólar conforme exibidos na conta observada.";

export const eventMath = [
  {
    kicker: "POOL COMPLETO · PIOR CASO",
    title: "80 Grails",
    text: "8 draws × 10 Grails garantem as oito posições. Os mesmos 8 draws devolvem 8 Lucky Stars — exatamente a primeira troca.",
  },
  {
    kicker: "POOL COMPLETO · CASO MÉDIO",
    title: "45 Grails",
    text: "Tirar o prêmio principal encerra o pool na hora e entrega o resto. Se ele ocupa uma das oito posições com igual chance, a média cai para 4,5 draws.",
  },
  {
    kicker: "CAMINHO MAIS BARATO À ESCOLHA",
    title: "Grail Pack IV",
    text: "US$ 69,99 entregam 8 Lucky Stars na mão mais 40 Grails (4 draws, 4 estrelas): 12 no total, a primeira troca com folga.",
  },
  {
    kicker: "O EMPATE QUE NÃO EXISTE",
    title: "Pack V ≫ Pack VI",
    text: "Mesmo preço, mesmos 80 Grails — mas o V embute 16 Lucky Stars e o VI nenhuma. 24 estrelas contra 8, por US$ 139,99 nos dois.",
  },
  {
    kicker: "CAMINHO GRATUITO",
    title: "≈ 93 dias de expedição",
    text: "Medido em campo: 12 Grails em duas semanas. Os 80 Grails de oito draws levam mais de treze semanas — e ainda assim as estrelas precisam sair todas dentro de uma única edição.",
  },
];

export const grandPrizeGamble = {
  kicker: "A APOSTA DO PRÊMIO PRINCIPAL",
  title: "Sair cedo é bom e ruim",
  text:
    "A regra 2 do draw corta o pool assim que o prêmio principal aparece. Com 40 Grails na mão são 4 draws — metade das posições, e portanto cerca de 50% de chance de levar o pool inteiro pagando metade. O reverso é que cada draw também é 1 Lucky Star: acabar em 4 draws significa 4 estrelas em vez de 8.",
  odds: [
    { draws: "1 draw", grails: "10 Grails", chance: "12%", stars: "1 Lucky Star" },
    { draws: "2 draws", grails: "20 Grails", chance: "25%", stars: "2 Lucky Stars" },
    { draws: "4 draws", grails: "40 Grails", chance: "50%", stars: "4 Lucky Stars" },
    { draws: "6 draws", grails: "60 Grails", chance: "75%", stars: "6 Lucky Stars" },
    { draws: "8 draws", grails: "80 Grails", chance: "100%", stars: "8 Lucky Stars" },
  ],
  note:
    "Modelo da wiki assumindo posição uniforme do prêmio principal — a aba Probability não foi capturada. E fica em aberto se o draw continua liberado depois do pool esvaziar; se não continuar, o prêmio precoce trava a renda de Lucky Star da edição.",
};

export const comboNote = {
  title: "Combinar pacotes fecha redondo — mas nem sempre compensa",
  text:
    "Dois Grail Pack II mais um Pack III dão 40 Grails e exatamente 8 Lucky Stars, sem sobra, por US$ 77,97. O Grail Pack IV sozinho dá os mesmos 40 Grails e 12 estrelas por US$ 69,99. Os mesmos draws, quatro estrelas a mais e quase oito dólares a menos: no primeiro degrau a sobra sai de graça, e evitá-la custa caro. O método só vira o melhor caminho na terceira cópia, onde um Pack III somado a dois Pack V dá exatamente as 44 estrelas do alvo, sem desperdiçar nenhuma — mas aí o fechamento depende de o sorteio entregar 8 draws, o que a regra 2 raramente permite.",
};

export const copyPaths = {
  intro:
    "A regra 2 encerra o pool assim que sai o prêmio principal, então uma edição rende no máximo 8 draws — e portanto no máximo 8 Lucky Stars de sorteio. Somando as 44 estrelas compráveis dentro dos limites semanais, o teto de uma edição é 52. Isso põe a quarta cópia fora de alcance e transforma a terceira numa aposta. Aritmética da wiki, não texto do jogo.",
  columns: ["Compra", "Custo", "Estrelas garantidas", "Teto", "Alvo", "Chance de fechar"],
  rows: [
    {
      path: "Grail Pack IV",
      cost: "US$ 69,99",
      direct: "8 diretas",
      ceiling: "12",
      target: "1ª cópia · 8",
      chance: "100% — as diretas já bastam",
    },
    {
      path: "Grail Pack V",
      cost: "US$ 139,99",
      direct: "16 diretas",
      ceiling: "24",
      target: "2ª cópia · 20",
      chance: "62% — precisa do prêmio principal cair da 4ª posição em diante",
    },
    {
      path: "Grail Pack III + V ×2",
      cost: "US$ 321,97",
      direct: "36 diretas",
      ceiling: "44",
      target: "3ª cópia · 44",
      chance: "12% — só se o prêmio principal for a última posição",
    },
    {
      path: "Qualquer compra",
      cost: "—",
      direct: "44 é o máximo comprável",
      ceiling: "52",
      target: "4ª cópia · 68",
      chance: "Inalcançável dentro de uma edição",
    },
  ],
};

export const packVINote = {
  title: "O Pack VI nunca compensa enquanto houver Pack V",
  text:
    "Os dois custam US$ 139,99 e trazem os mesmos 80 Grails. Todo o resto é uma troca direta: 16 Lucky Stars no V contra 1.280 diamantes no VI. E os 1.280 diamantes têm preço de tabela — a loja de diamantes vende esse pacote exato por US$ 26,99. Do outro lado, 16 Lucky Stars cobrem a primeira troca (8 estrelas) com 8 sobrando, e o caminho avulso mais barato até um Immortal Hero escolhido é o Pack IV, a US$ 69,99. O Pack VI, portanto, entrega US$ 27 de diamante no lugar de algo que a própria loja não vende por menos de US$ 70. Ele só passa a existir depois que o limite de 2 por semana do Pack V se esgota — e mesmo aí segue sem render estrela nenhuma.",
};

export const packVNote = {
  title: "O Pack V é dois Pack IV colados",
  text:
    "Dois Grail Pack IV custam US$ 139,98 e entregam 80 Grails com 16 Lucky Stars — os mesmos 80 Grails e as mesmas 16 estrelas do Grail Pack V, que sai por US$ 139,99. Um centavo de diferença. O que separa os dois é o limite: o IV é 1 por semana e a edição dura 7 dias, então comprar dois é impossível dentro do evento. O Pack V existe para vender, num só clique, o degrau que o limite do IV proíbe — e ele é 2 por semana.",
};


export const strandedTrap = {
  title: "Os dois primeiros degraus sempre sobram 4",
  text:
    "O Pack IV rende 12 estrelas e a primeira troca custa 8; o Pack V rende 24 e as duas primeiras custam 20. Nos dois casos sobram exatamente 4 Lucky Stars, que não sobrevivem ao fim da edição — e converter essa sobra exigiria mais 8, que só vêm de outro pacote. Acima disso o padrão se desfaz, e por um motivo pior: como o sorteio para de render estrela depois do oitavo draw, dobrar a compra não dobra o resultado. Dois Pack V somam 40 estrelas, não 48, e param na segunda cópia com 20 sobrando; três somam 56 e alcançam a terceira. Comprar mais Grail depois do teto só enche o estoque para a próxima edição.",
};

export const weeklyCeiling = {
  kicker: "TETO DE UMA EDIÇÃO",
  title: "52 Lucky Stars",
  text:
    "Os limites semanais deixam comprar 44 Lucky Stars diretas (2× Pack V, 1× IV, 1× III). O sorteio acrescenta no máximo 8, porque a regra 2 fecha o pool no prêmio principal. Total: 52 — o suficiente para a terceira cópia (44) e nunca para a quarta (68), por mais dinheiro que se ponha na mesa dentro dos sete dias.",
  note:
    "Correção: a primeira versão desta página anunciava a quarta cópia por US$ 427,94. Aquela conta convertia 240 Grails em 24 draws, o que a regra 2 não permite.",
};

export const immortalGallery = [
  {
    src: "/screenshots/immortal-hero/banner-athena-artemis.jpg",
    alt: "Banner do evento Immortal Hero com Athena e Artemis",
    title: "Os dois heróis da edição",
    caption: "Athena (Goddess of Wisdom) e Artemis (Goddess of the Hunt) como core Immortal Heroes.",
  },
  {
    src: "/screenshots/immortal-hero/draw-prize-pool.jpg",
    alt: "Tela de draw com o pool de oito prêmios",
    title: "Pool e custo do draw",
    caption: "Oito posições, 10 Grails por draw e o contador de Immortal Hero selecionável em 0/8.",
  },
  {
    src: "/screenshots/immortal-hero/event-rules.jpg",
    alt: "Diálogo Event Rules e Draw Rules do evento",
    title: "Regras oficiais",
    caption: "Duração, retenção de Grail, garantia de 8 draws e a escala de troca 8/12/24/24.",
  },
  {
    src: "/screenshots/immortal-hero/grail-sources.jpg",
    alt: "Tooltip do item Grail com suas fontes",
    title: "De onde vem o Grail",
    caption: "Immortal Shop e Expedition Squad são as duas fontes listadas pelo jogo.",
  },
  {
    src: "/screenshots/immortal-hero/lucky-star-sources.jpg",
    alt: "Tooltip do item Lucky Star com suas fontes",
    title: "A moeda da escolha",
    caption: "Lucky Star: troca por um Immortal Hero escolhido. Fontes: Expedition Squad e Immortal Summon.",
  },
  {
    src: "/screenshots/immortal-hero/shop-grail-packs-1-3.jpg",
    alt: "Immortal Shop mostrando Daily Benefits e Grail Packs I a III",
    title: "Loja · topo",
    caption: "Daily Benefits gratuito e os três primeiros pacotes, de US$ 6,99 a US$ 41,99.",
  },
  {
    src: "/screenshots/immortal-hero/shop-grail-packs-3-6.jpg",
    alt: "Immortal Shop mostrando Grail Packs III a VI",
    title: "Loja · meio",
    caption: "Packs IV a VI, incluindo os dois de US$ 139,99 com limites bem diferentes.",
  },
  {
    src: "/screenshots/immortal-hero/shop-daily-exp-mythic.jpg",
    alt: "Immortal Shop mostrando Daily Immortal EXP e Mythic Selection",
    title: "Loja · base",
    caption: "As duas ofertas em diamante: EXP diário por 2.000 e seleção mítica por 3.000.",
  },
  {
    src: "/screenshots/immortal-hero/gem-store.jpg",
    alt: "Loja de diamantes com os seis pacotes e seus preços",
    title: "O preço do diamante",
    caption: "1.280 diamantes por US$ 26,99 — a referência que precifica a troca do Grail Pack VI.",
  },
];

// Roteiro de captura para quando o evento voltar — o que só a próxima edição responde.
export const nextEditionChecklist = {
  kicker: "NA PRÓXIMA EDIÇÃO",
  title: "Seis telas que fecham as maiores dúvidas",
  intro:
    "Boa parte do que ficou em aberto depende de ver o evento reabrir. Em ordem de impacto sobre o que está publicado aqui:",
  items: [
    "O contador logo depois da primeira troca. Se marcar 0/12 ainda na mesma edição, confirma a escada interna; se sumir ou travar em 8, a tabela de escalada muda de sentido.",
    "O botão Draw depois de o prêmio principal encerrar o pool. Decide se o teto de 8 draws por edição é real — e com ele o teto de 52 Lucky Stars.",
    "A tela de abertura do evento, para confirmar a cadência de semanas alternadas e o reset da escada em 8.",
    "A dupla de heróis da nova edição, para saber se a rotação troca os dois ou mantém um.",
    "A aba Probability do draw, com as taxas oficiais — hoje o pool é modelado com posição uniforme, sem taxa publicada.",
    "O e-mail de recompensa do ranking semanal, que pode ser a fonte da Mythical Hero Selection Box.",
  ],
};

export const immortalPending = [
  "Abrir a aba Probability e registrar as taxas oficiais do draw",
  "Confirmar o conteúdo do Daily Benefits e quantos Grails ele rende por dia",
  "Revelar as duas cartas fechadas do pool (×3 e ×2)",
  "Capturar o tooltip da esfera UR e da gema roxa dos pacotes",
  "Registrar se o par de heróis do prêmio central entrega os dois ou apenas um",
  "Fotografar o contador logo depois da primeira troca — se virar 0/12, confirma a escada dentro da edição",
  "Confirmar em print a cadência de semanas alternadas e o reset da escada na volta",
  "Descobrir se o botão Draw continua ativo depois de o prêmio principal encerrar o pool",
  "Descobrir o custo da 5ª troca em diante — o jogo escreve \"8,12,24,24…\" e não mostra o resto",
  "Verificar se o draw segue liberado depois que o pool esvazia — decide se o prêmio principal precoce corta a renda de Lucky Star",
  "Achar a Lucky Star na Expedition Squad — o jogo a lista como fonte, mas ela não apareceu em nenhum Chance to Obtain observado",
  "Acompanhar a próxima edição para confirmar se a rotação troca os dois heróis",
];
