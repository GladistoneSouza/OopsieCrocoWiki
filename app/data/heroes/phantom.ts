import type { HeroRecord } from "../types";

export const phantom: HeroRecord = {
  slug: "phantom",
  name: "Selina Shadowblade",
  aliases: ["SSR Phantom", "Phantom"],
  className: "Assasin",
  rarity: "SSR",
  role: "Assassina de alvo único / lâminas em sequência (White, Pink e Red Blade)",
  summary:
    "Assassina SSR de alvo único cuja ultimate, Prismatic Slash, lança White Blade, Pink Blade e Red Blade em sequência com dano crescente. O kit gira em torno de amplificar cada cor de lâmina, ganhar recast ao abater inimigos e explodir alvos com pouca vida.",
  fieldNote:
    "Ficha confirmada no nível 10 (30 jul.). Atenção à colisão de prenomes: esta é Selina Shadowblade (SSR Phantom, Assassin) — personagem diferente da Succubus Selina · Frostcharm; as duas compartilham apenas o prenome Selina.",
  image: "/screenshots/phantom/profile-level-10.jpg",
  artImage: "/screenshots/art/phantom-card.jpg",
  identity: [
    "Título exibido: SSR Phantom",
    "Disponível no Hero Exchange por 1.000 Hero Coins, limite semanal 8/8 — sai por 500 quando o cartão está com o selo de 50% off. A base de 1.000 deixou de ser hipótese em 31 ago. 2026: na mesma grade, Pharaoh aparece a 1.000 sem selo enquanto os vizinhos SSR aparecem a 500 com ele.",
    "Nome exibido na ficha: Selina Shadowblade",
    "Classe: Assassin",
    "Alvos: 1 (alvo único)",
    "Observação de colisão de nomes: existe outra heroína com o mesmo prenome — a Succubus \"Selina · Frostcharm\" (ficha própria em succubus). São personagens diferentes; não confundir ao catalogar prints que citem apenas \"Selina\".",
  ],
  stats: [
    "Snapshot no nível 13 (16 ago.): apenas o nível e fragmentos 2/30 visíveis no roster da tela Hero Comp; demais atributos não exibidos.",
    "Snapshot no nível 10 (30 jul.): poder 8.668 · ataque 8.701 · HP 85,87K · defesa 2.884 · recompensa global: Dano Crítico +14,0% · recursos: ALL 230, fragmentos 93/520, gema 3/30.",
    "Na tela Hero Comp de 30 jul., Phantom aparece no nível 10 com fragmentos 3/30 (leitura parcial, carta cortada).",
  ],
  levelSkills: [
    {
      name: "Prismatic Slash (ultimate)",
      description: "Lança sequencialmente White Blade, Pink Blade e Red Blade em um único alvo, com o dano aumentando gradualmente.",
      source: "Texto confirmado no topo do Blessing Bestiary.",
    },
    {
      name: "Nível 3 — Phantom White · Fragile",
      description: "Começa a batalha com Phantom White · Fragile. Tooltip: White Blade reduz o dano do inimigo em 30% por 3 segundos.",
      source: "Texto confirmado na ficha (lista de talentos + tooltip aberto).",
    },
    {
      name: "Nível 5 — mana ao abater",
      description: "Após matar um inimigo, restaura uma grande quantidade de mana. O final do texto está cortado por um popup de Coop no print (\"larg...\").",
      source: "Texto confirmado parcialmente na ficha.",
    },
    {
      name: "Nível 8 — Ultimate Intent · White",
      description: "Começa a batalha com Ultimate Intent · White. O tooltip correspondente aparece como \"Supreme Technique · White — ataques básicos têm chance de disparar 1 instância de White Blade com 3x de dano\" — mesmo talento com dois nomes (inconsistência de tradução).",
      source: "Texto confirmado na ficha (lista de talentos + tooltip aberto).",
    },
    {
      name: "Nível 10 — Phantom Flourish Slash / Ultimate Flash Strike",
      description: "Phantom Flourish Slash: conjura novamente de imediato após matar um inimigo. Ultimate Flash Strike: após entrar no estado Ultimate Flash Strike, abates aumentam adicionalmente a própria esquiva.",
      source: "Texto confirmado na ficha de nível 10.",
    },
    {
      name: "Bestiary — Phantom White · Fragile",
      description: "White Blade reduz o dano do inimigo em 30% por 3 segundos.",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — Extremely white",
      description: "Ataques básicos têm chance de disparar 1 instância de White Blade com 3x de dano.",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — Phantom Powder · Blade",
      description: "Pink Blade aumenta o próprio dano em +30%, acumulável até 3 vezes.",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — Jiyi · Powder",
      description: "Ataques básicos têm chance de disparar 1 instância de Pink Blade com 4x de dano.",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — Phantom Red · Deadly",
      description: "Red Blade causa +200% de dano.",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — Extremely Red",
      description: "Ataques básicos têm chance de disparar 1 instância de Red Blade com 5x de dano.",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — Phantom · Almighty",
      description: "Todos os efeitos de aura de lâmina +60%.",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — Extremely colorful",
      description: "Nos primeiros 10 segundos de batalha, a velocidade de ataque aumenta em 240%.",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — Phantom · Combo",
      description: "Quanto menor o HP do alvo, maior o dano de Prismatic Slash.",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — Extreme intention · kill",
      description: "Ataques básicos têm chance de conjurar Phantasmal Prism Slash.",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — Phantom Huazhan (dourada)",
      description: "A cada 8 segundos, causa dano massivo; para cada vez que Prismatic Slash foi conjurado, causa 1 acerto adicional.",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — Ultimate instant strike (dourada)",
      description: "A cada 8 segundos, teleporta até o inimigo com o menor HP para atacar; velocidade de ataque e dano aumentam muito e ganha invisibilidade por 5 segundos.",
      source: "Blessing Bestiary",
    },
  ],
  kit: {
    engine:
      "A ultimate dispara três lâminas em ordem — White, Pink e Red — com dano crescente, e o Bestiary repete a mesma dupla para cada cor: uma peça que engorda a lâmina e uma que faz o ataque básico disparar aquela lâmina sozinho. Os multiplicadores das segundas sobem com a cor: 3x no branco, 4x no rosa, 5x no vermelho. Escolher a Phantom é escolher em qual cor investir, e o vermelho é objetivamente o maior número.",
    loops: [
      {
        name: "O básico vira ultimate",
        text: "Extremely white, Jiyi · Powder e Extremely Red dão ao ataque comum a chance de soltar uma instância da lâmina correspondente. A partir daí velocidade de ataque deixa de ser dano somado e vira frequência de ultimate — motivo pelo qual Extremely colorful, com +240% de velocidade nos primeiros 10 segundos, é um abre-alas e não um bônus pequeno.",
      },
      {
        name: "Abater devolve o recurso",
        text: "O talento de nível 5 restaura muita mana ao matar e Phantom Flourish Slash, no 10, conjura de novo imediatamente após um abate. Em sala com vários alvos isso vira corrente: matar paga o próximo lançamento, que mata de novo. Contra alvo único a corrente não existe.",
      },
      {
        name: "Tudo aponta para quem está fraco",
        text: "Phantom · Combo aumenta o dano da Prismatic Slash conforme o HP do alvo cai e a dourada Ultimate instant strike teleporta a cada 8 segundos até o inimigo com menos vida, com velocidade e dano muito aumentados mais 5 segundos de invisibilidade. O kit não abre luta: fecha.",
      },
      {
        name: "A dourada conta lançamentos",
        text: "Phantom Huazhan causa dano massivo a cada 8 segundos e soma 1 acerto para cada vez que a Prismatic Slash já foi conjurada na luta. Ela transforma o ciclo de recast em catraca — quanto mais cedo a corrente de abates começa, maior o pico no fim.",
      },
    ],
  },
  combos: [
    {
      name: "Vermelho puro",
      status: "hipótese",
      needs: ["Phantom Red · Deadly", "Extremely Red", "Phantom · Combo"],
      text: "+200% no Red Blade, instâncias de 5x saindo do ataque básico e dano crescente conforme o alvo enfraquece. É a maior concentração de multiplicador de alvo único do elenco documentado, e a rota que a wiki já registrava como direção principal.",
    },
    {
      name: "Corrente de abates",
      status: "hipótese",
      needs: ["mana ao abater (nível 5)", "Phantom Flourish Slash (nível 10)", "Ultimate instant strike (dourada)", "Phantom Huazhan (dourada)"],
      text: "Matar devolve mana, o abate reconjura na hora e a dourada teleporta para o próximo mais fraco. Cada elo alimenta o contador da Phantom Huazhan, que paga tudo de volta a cada 8 segundos. É a rota que transforma sala cheia em execução em cadeia.",
    },
    {
      name: "Abrir a luta a 240%",
      status: "hipótese",
      needs: ["Extremely colorful", "qualquer peça da linha Extremely"],
      text: "Os primeiros 10 segundos com +240% de velocidade de ataque, num kit em que o básico dispara lâminas de 3x, 4x e 5x, concentram uma quantidade desproporcional de dano na abertura. Vale em sala que precisa acabar rápido e é desperdício em luta longa.",
    },
    {
      name: "O branco é a peça defensiva",
      status: "hipótese",
      needs: ["Phantom White · Fragile", "Extremely white"],
      text: "White Blade corta 30% do dano do inimigo por 3 segundos, e Extremely white faz o básico aplicar isso sozinho. É a única mitigação do kit inteiro — quem joga a Phantom sem frontline precisa desta dupla, mesmo ela sendo a de menor multiplicador.",
    },
  ],
  strengths: [
    "Os maiores multiplicadores de alvo único registrados na wiki: +200% no Red Blade e instâncias de 5x saindo de ataque básico",
    "Ciclo de abate que se retroalimenta — mana, reconjuração imediata e teleporte para o alvo mais fraco",
    "Execução embutida: dois efeitos separados leem o HP baixo do alvo, então ela fecha lutas que outros arrastam",
    "Tem uma opção defensiva real dentro do próprio kit, coisa rara entre as assassinas: o corte de 30% do White Blade",
  ],
  weaknesses: [
    "Nenhum dano em área em lugar nenhum do kit documentado — sala cheia só é boa por causa da corrente de abates, não do alcance",
    "Contra boss sozinho a corrente inteira morre: sem abates não há mana, nem recast, nem teleporte",
    "O abre-alas de 240% dura 10 segundos e não volta, o que torna a heroína pior exatamente nas lutas longas",
    "Corpo a corpo sem fuga documentada além da invisibilidade da dourada, e nenhuma run com a Phantom foi observada",
    "Nomes divergentes na linha de nível 8 (Ultimate Intent · White contra Supreme Technique · White) e no par Ultimate Flash Strike / Ultimate instant strike",
  ],
  builds: [
    {
      name: "Execução Red Blade",
      status: "rascunho",
      summary:
        "Direção derivada apenas do Bestiary: empilhar os multiplicadores de Red Blade (+200% e instâncias de 5x) com Phantom · Combo para executar alvos com pouca vida, fechando com as lendárias de golpes periódicos.",
      priorities: ["Phantom Red · Deadly", "Extremely Red", "Phantom · Combo", "Phantom · Almighty", "Phantom Huazhan (dourada)", "Ultimate instant strike (dourada)"],
    },
    {
      name: "Abertura acelerada",
      status: "rascunho",
      summary:
        "Direção derivada apenas do Bestiary: usar Extremely colorful (+240% de velocidade de ataque nos 10s iniciais) para multiplicar as ativações de lâmina dos ataques básicos (Extremely white / Jiyi · Powder / Extremely Red) logo no começo da luta.",
      priorities: ["Extremely colorful", "Extremely Red", "Jiyi · Powder", "Extremely white", "Extreme intention · kill"],
    },
  ],
  synergies: [
    "Sinergia interna observada no kit: o talento de nível 10 (recast ao abater) e a mana ao abater do nível 5 favorecem cenários com muitos inimigos fracos — hipótese, sem run observada.",
  ],
  evidence: [
    "Ficha SSR Phantom — Selina Shadowblade no nível 10 (30 jul.), com talento de nível 10 e recompensa global.",
    "Lista de talentos Lv.3/5/8 e tooltips de Phantom White · Fragile e Supreme Technique · White.",
    "Blessing Bestiary completo em 3 páginas, incluindo as 2 lendárias douradas.",
    "Hero Exchange (16 ago.): Phantom trocável por 500 Hero Coins (50% off), limite semanal 8/8.",
    "Roster do Hero Comp (16 ago.): Phantom no nível 13, fragmentos 2/30.",
  ],
  evidenceImages: [
    { src: "/screenshots/phantom/profile-level-10.jpg", alt: "Ficha SSR Phantom — Selina Shadowblade no nível 10, com talento de nível 10" },
    { src: "/screenshots/phantom/talents-3-5-8.jpg", alt: "Lista de talentos dos níveis 3, 5 e 8 (nível 5 parcialmente coberto por popup)" },
    { src: "/screenshots/phantom/talent-3-phantom-white-fragile.jpg", alt: "Tooltip de Phantom White · Fragile: White Blade reduz o dano inimigo em 30% por 3s" },
    { src: "/screenshots/phantom/talent-8-supreme-technique-white.jpg", alt: "Tooltip de Supreme Technique · White: chance de White Blade com 3x de dano" },
    { src: "/screenshots/phantom/bestiary-page-1.jpg", alt: "Bestiary pág. 1: Phantom White · Fragile, Extremely white, Phantom Powder · Blade e Jiyi · Powder" },
    { src: "/screenshots/phantom/bestiary-page-2.jpg", alt: "Bestiary pág. 2: Phantom Red · Deadly, Extremely Red, Phantom · Almighty e Extremely colorful" },
    { src: "/screenshots/phantom/bestiary-page-3-legendary.jpg", alt: "Bestiary pág. 3: Phantom · Combo, Extreme intention · kill e as lendárias Phantom Huazhan e Ultimate instant strike" },
    { src: "/screenshots/phantom/hero-exchange.jpg", alt: "Hero Exchange com Phantom por 500 Hero Coins (50% off), limite semanal 8/8" },
  ],
  pending: [
    "Recuperar o texto completo do talento de nível 5 (final cortado por popup de Coop).",
    "Abrir os talentos acima do nível 10 (12, 15 etc.) — não vistos em nenhum print.",
    "Verificar se Phantom possui gemas exclusivas (nenhuma tela de gemas capturada).",
    "Abrir Hero Background e Stories (nenhum print de história).",
    "Confirmar a relação entre o estado \"Ultimate Flash Strike\" do talento de nível 10 e a blessing lendária \"Ultimate instant strike\" — hipótese de serem o mesmo mecanismo com traduções diferentes.",
    "Registrar stats completos em nível 13 ou superior (no roster de 16 ago. só o nível e 2/30 são visíveis).",
    "Nenhuma run com Phantom foi observada; comportamento em combate ainda sem evidência.",
  ],
};
