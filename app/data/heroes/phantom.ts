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
