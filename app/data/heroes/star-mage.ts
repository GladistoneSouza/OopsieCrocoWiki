import type { HeroRecord } from "../types";

export const starMage: HeroRecord = {
  slug: "star-mage",
  name: "Liana · Nightrose",
  aliases: ["SSR Star Mage", "Star Mage", "Liana"],
  className: "Mage",
  rarity: "SSR",
  role: "Dano em área / spells de Starfall e Star Waterfall",
  summary:
    "Maga SSR focada em dano em área: invoca Comets que causam dano menor e possuem chance de disparar Starfall/Star Waterfall, com dano pesado em vários inimigos. As blessings escalam a quantidade de cometas e a frequência da cachoeira estelar, culminando nas douradas Super Comet (250% do ataque em área) e Milky Way Fall (campo de mana galáctico, 75% do ataque por segundo).",
  fieldNote:
    "Ficha registrada no nível 9 (30 jul.), com o marco de nível 8 já obtido. Painel de blessings em batalha visto no nível 10 (17 ago.) confirma 7 blessings da linha Starfall/Star Waterfall. A descrição de seleção in-run resume o kit como \"Starfall / High Area Damage Spells\".",
  image: "/screenshots/star-mage/profile-level-9.jpg",
  identity: [
    "Título exibido: SSR Star Mage",
    "Nome exibido na ficha: Liana · Nightrose",
    "Classe: Mage (Mage)",
    "Posição/alvo exibido na ficha: 8",
    "Descrição de seleção in-run: \"Starfall / High Area Damage Spells\"",
    "Disponível no Hero Exchange por 500 Hero Coins (50% off, limite semanal 8/8)",
  ],
  stats: [
    "Snapshot no nível 9 (30 jul.): poder 8.362 · ataque 7,70K (7697) · HP 93,24K · defesa 3.132 · Dano Crítico global +12,6% · essência 371/384 · fragmentos 0/10",
    "No primeiro print da ficha o poder aparecia parcialmente coberto (~8362) e o HP cortado (\"…24K\"); o segundo print confirmou poder 8.362, ATK 7697 e HP 93,24K.",
  ],
  levelSkills: [
    {
      name: "Starfall (habilidade base)",
      description:
        "Invoca 2 Comets que causam dano menor. Após a invocação, possui chance de disparar Starfall, causando dano pesado a 3 inimigos.",
      source: "Tooltip da ficha de herói e cabeçalho do Blessing Bestiary.",
    },
    {
      name: "Nível 8 — Starfall · Diffusion",
      description:
        "\"Initially obtained Starfall · Diffusion\" — começa com a blessing Starfall · Diffusion. Tooltip do talento: \"Star Waterfall will cause DMG to all enemies\" (Star Waterfall passa a causar dano a todos os inimigos). No Bestiary a mesma blessing aparece grafada \"Star Falls · Diffusion\" — inconsistência de tradução.",
      source: "Texto confirmado na ficha nível 9, com tooltip aberto.",
    },
    {
      name: "Nível 10 — Super Comet / Galaxy Descent",
      description:
        "Marco bloqueado na ficha nível 9. Super Comet: \"Super Comet has a cha[nce] to release 1 extra\" — o restante do texto está cortado no print. Galaxy Descent: após invocar o Stellar Mana Field, aumenta a própria penetração de defesa (valor não exibido).",
      source: "Texto confirmado na tela de progressão (marco bloqueado).",
    },
    {
      name: "Bestiary — Comet · Continuous Hair",
      description: "O número de cometas invocados pela spell Starfall aumenta em 3.",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — Star Falls · Diffusion",
      description:
        "Star Waterfall causa dano a todos os inimigos. Mesma blessing do marco de nível 8, onde é grafada \"Starfall · Diffusion\".",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — Comet · Automatic",
      description: "A cada 3 segundos, invoca automaticamente 1 cometa.",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — Star Falls · Penetration",
      description:
        "Cada vez que Star Waterfall é disparada, aumenta a própria penetração de defesa; o valor está cortado no próprio texto do jogo (a frase termina em \"by .\").",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — Comet · Power",
      description: "O dano dos cometas aumenta significativamente.",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — Star Waterfall · Singing",
      description: "Quando Star Waterfall é liberada, a velocidade de conjuração de Starfall é acelerada.",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — Comet · Charge",
      description: "Quando um cometa acerta, há chance de aumentar levemente o próprio dano.",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — Star waterfall · continuous hair",
      description:
        "Star Waterfall possui probabilidade de atingir 3 vezes. Grafada com iniciais minúsculas no jogo, diferente de \"Comet · Continuous Hair\".",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — Comet · Echo",
      description: "Quando um cometa acerta, há chance de gerar 1 cometa adicional.",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — Star Falls · Affinity",
      description: "A probabilidade de geração de Star Waterfall aumenta bastante.",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — super comet (dourada)",
      description:
        "A cada 5 cometas invocados, cometas gigantes caem, causando dano em área igual a 250% do poder de ataque. Grafada em minúsculas no Bestiary.",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — Milky Way Fall (dourada)",
      description:
        "Após invocar Star Waterfall 3 vezes, invoca um campo de mana galáctico que causa dano igual a 75% do poder de ataque a todos os inimigos dentro do campo a cada segundo. O marco de nível 10 (Galaxy Descent) menciona um \"Stellar Mana Field\" — provavelmente o mesmo campo, com tradução divergente.",
      source: "Blessing Bestiary",
    },
  ],
  builds: [
    {
      name: "Enxame de cometas",
      status: "rascunho",
      summary:
        "Direção derivada apenas do Bestiary: maximizar a quantidade e o dano de cometas para alimentar a dourada super comet (cometas gigantes a cada 5 invocações, 250% do ataque em área).",
      priorities: [
        "Comet · Continuous Hair",
        "Comet · Automatic",
        "Comet · Echo",
        "Comet · Power",
        "super comet (dourada)",
      ],
    },
    {
      name: "Cachoeira estelar",
      status: "rascunho",
      summary:
        "Direção derivada apenas do Bestiary: elevar a frequência e o alcance de Star Waterfall (Affinity + Diffusion + continuous hair) para acionar Milky Way Fall e manter o campo de 75% do ataque por segundo ativo.",
      priorities: [
        "Star Falls · Affinity",
        "Star Falls · Diffusion",
        "Star waterfall · continuous hair",
        "Star Waterfall · Singing",
        "Milky Way Fall (dourada)",
      ],
    },
  ],
  synergies: [
    "Hipótese: como fonte de dano em área pura (\"High Area Damage Spells\"), combina com suportes de cura/buff em área como Flower Spirit e com frontline de mitigação como Holy Knight — os quatro (com Shadow Wolf) aparecem juntos na mesma tela de seleção co-op.",
    "Hipótese: Star Waterfall · Singing cria um ciclo de aceleração (cachoeira acelera Starfall, que gera mais cachoeiras via Affinity); ainda sem run observada para confirmar.",
  ],
  evidence: [
    "Ficha SSR Star Mage — Liana · Nightrose no nível 9, com tooltip de Starfall (30 jul.).",
    "Segundo print da ficha nível 9 com stats completos e tooltip de Starfall · Diffusion.",
    "Blessing Bestiary de Starfall completo em 3 telas, incluindo as douradas super comet e Milky Way Fall.",
    "Painel de blessings em batalha no nível 10 com 7 blessings da linha Starfall/Star Waterfall (17 ago.).",
    "Tela de seleção co-op com a descrição \"Starfall / High Area Damage Spells\".",
    "Loja Hero Exchange listando Star Mage por 500 Hero Coins (50% off, limite semanal 8/8).",
  ],
  evidenceImages: [
    { src: "/screenshots/star-mage/profile-level-9.jpg", alt: "Liana · Nightrose, SSR Star Mage, no nível 9 com tooltip de Starfall" },
    { src: "/screenshots/star-mage/profile-level-9-stats.jpg", alt: "Ficha nível 9 com poder 8.362, ATK 7697, HP 93,24K e tooltip de Starfall · Diffusion" },
    { src: "/screenshots/star-mage/bestiary-starfall-1.jpg", alt: "Bestiary Starfall página 1: Comet · Continuous Hair, Star Falls · Diffusion, Comet · Automatic e Star Falls · Penetration" },
    { src: "/screenshots/star-mage/bestiary-starfall-2.jpg", alt: "Bestiary Starfall página 2: Comet · Power, Star Waterfall · Singing, Comet · Charge e Star waterfall · continuous hair" },
    { src: "/screenshots/star-mage/bestiary-starfall-3.jpg", alt: "Bestiary Starfall página 3: Comet · Echo, Star Falls · Affinity e as douradas super comet e Milky Way Fall" },
    { src: "/screenshots/star-mage/blessings-level-10-panel.jpg", alt: "Painel de blessings em batalha do Star Mage no nível 10 com 7 blessings" },
    { src: "/screenshots/star-mage/coop-selection-starfall.jpg", alt: "Seleção co-op com Star Mage descrito como Starfall / High Area Damage Spells" },
    { src: "/screenshots/star-mage/hero-exchange.jpg", alt: "Hero Exchange com Star Mage por 500 Hero Coins (50% off)" },
  ],
  pending: [
    "Obter o valor de penetração de defesa de Star Falls · Penetration — o número está cortado no próprio texto do jogo.",
    "Ler o texto completo do marco de nível 10 Super Comet (\"has a cha[nce] to release 1 extra …\" está cortado no print).",
    "Confirmar se Starfall, Star Waterfall, Star Falls e \"Star waterfall\" designam a mesma mecânica ou mecânicas distintas (cometas vs. cachoeira) — as grafias variam entre ficha, tooltip e Bestiary.",
    "Confirmar se o Stellar Mana Field (Galaxy Descent, nível 10) é o mesmo campo do Milky Way Fall (\"galactic mana field\").",
    "Capturar marcos de progressão acima do nível 10 (12, 15, 20…) — nenhum foi visto.",
    "Capturar Hero Background/Stories e eventuais gemas exclusivas — nada foi registrado nos prints.",
    "Observar uma run com o Star Mage para validar as direções de build (nenhuma run capturada).",
  ],
};
