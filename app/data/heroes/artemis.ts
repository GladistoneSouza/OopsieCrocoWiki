import type { HeroRecord } from "../types";

export const artemis: HeroRecord = {
  slug: "artemis",
  name: "Artemis",
  aliases: ["UR Goddess of the Hunt", "Goddess of the Hunt", "Arqueira UR"],
  className: "Arqueiro",
  rarity: "UR",
  role: "DPS de marca / área",
  summary:
    "Arqueira UR (título em jogo: UR Goddess of the Hunt) com dois motores de dano — Hunt Mark e a linha Moonlit, coroada pela ultimate Moon Goddess Descends; exige muitos upgrades dentro da run para chegar ao late game.",
  fieldNote:
    "No nível observado, entra sem as duas habilidades gratuitas que personagens mais evoluídos costumam possuir (os talentos nv3 e nv8, que concedem blessings iniciais, aparecem bloqueados na ficha nv2).",
  image: "/screenshots/artemis/profile-level-2.jpg",
  identity: [
    "Título exibido: UR Goddess of the Hunt",
    "Nome exibido na ficha: Artemis",
    "Classe: Archer, alcance 5",
    "A ficha exibe ícones de Story, Blessing Bestiary e Exclusive Gem (ainda não abertos)",
  ],
  stats: [
    "Snapshot no nível 2 (16 ago.): poder 19.688 · ATK 17,85K · HP 223,39K · DEF 7.515 · recompensa global: Dano Crítico +6,0% · Breakthrough 0/1",
    "Snapshot anterior no nível 2 (registro antigo do guia, sem data de print): poder 16.147 · ATK 14,51K · HP 180,9K · DEF 6.377 — valores divergentes para o mesmo nível 2; divergência anotada (hipótese: bônus externos de conta/Hero Comp entre os registros).",
    "Fragmentos observados: 0/1 (tela Hero Comp, 16 ago.)",
  ],
  levelSkills: [
    {
      name: "Moonlit Arrow Rain (skill base)",
      description:
        "Deals multiple hits of damage and applies Marks, triggering additional damage — causa múltiplos hits e aplica Marcas, disparando dano adicional.",
      source: "Texto da carta de herói UR em draft in-run (Level 3 da dungeon).",
    },
    {
      name: "Nível 3 — Hunt Mark · Precision",
      description:
        "Initially gains Hunt Mark · Precision — começa a batalha com Hunt Mark · Precision. Aparecia bloqueado na ficha nv2; o texto da blessing em si ainda não foi capturado em print.",
      source: "Texto confirmado na tela de progressão (ficha nv2).",
    },
    {
      name: "Nível 5 — Crit +5% (dobrado com Athena)",
      description:
        "Increases crit rate by 5%; when Athena is also deployed, this bonus is doubled — +5% de chance de crítico, dobrado quando \"Athena\" também está em campo. \"Athena\" é uma referência ainda não identificada na wiki (nenhum herói catalogado com esse nome até agora).",
      source: "Texto confirmado na tela de progressão (ficha nv2, bloqueado).",
    },
    {
      name: "Nível 8 — Moonlit · Enhancement",
      description:
        "Initially gains Moonlit · Enhancement — começa a batalha com Moonlit · Enhancement. Aparecia bloqueado na ficha nv2; o texto da blessing em si ainda não foi capturado em print.",
      source: "Texto confirmado na tela de progressão (ficha nv2).",
    },
    {
      name: "Bestiary — Hunt Mark · Rapid Fire",
      description:
        "After applying Hunt Mark, the next attack deals three hits with increased damage — após aplicar Hunt Mark, o próximo ataque acerta três vezes com dano aumentado. (nv 1 na carta)",
      source: "Blessing Bestiary (draft in-run de 16 ago.)",
    },
    {
      name: "Bestiary — Hunt Mark · Spirit Blessing",
      description:
        "Each time 1 Hunter Deity Mark is triggered, permanently increases Attack and one companion's Max HP by 1%, up to 30 stacks — cada Hunter Deity Mark ativada aumenta permanentemente o Ataque e o HP máximo de um companheiro em 1%, até 30 stacks. (nv 1 na carta) Nota: o texto usa \"Hunter Deity Mark\" enquanto as demais blessings usam \"Hunt Mark\" — aparente inconsistência de tradução para a mesma mecânica.",
      source: "Blessing Bestiary (obtida via Lucky Spin, 16 ago.)",
    },
    {
      name: "Bestiary — Moonlit · Star Piercer",
      description:
        "Basic Attacks have a chance to fire Star-Piercing Arrow, dealing damage that ignores Defense to a column of enemies. Star-Piercing Arrow accelerates the triggering of Moonlit Arrow Rain — ataques básicos têm chance de disparar a Star-Piercing Arrow, que ignora Defesa numa coluna de inimigos e acelera o gatilho de Moonlit Arrow Rain. (nv 2 na carta)",
      source: "Blessing Bestiary (draft in-run de 16 ago.)",
    },
    {
      name: "Bestiary — Moonlit · Chain Break",
      description:
        "Moonlit Arrow Rain triggers area damage when it hits the same target consecutively — Moonlit Arrow Rain dispara dano em área ao acertar o mesmo alvo consecutivamente. (nv 3 na carta)",
      source: "Blessing Bestiary (draft in-run de 16 ago.)",
    },
    {
      name: "Bestiary — Moonlit · Haste",
      description:
        "Moonlit Arrow Rain trigger requirement -2 — reduz em 2 o requisito de ativação de Moonlit Arrow Rain. (nv 4 na carta)",
      source: "Blessing Bestiary (draft in-run de 16 ago.)",
    },
    {
      name: "Bestiary — Moon Goddess Descends (dourada)",
      description:
        "Ultimate. Every 2 casts of Moonlit Arrow Rain, rapidly fires 13 powerful moonlight arrows. Consecutive hits on the same enemy increase subsequent damage — a cada 2 casts de Moonlit Arrow Rain, dispara rapidamente 13 flechas de luar poderosas; hits consecutivos no mesmo inimigo aumentam o dano subsequente. (nv 5 na carta)",
      source: "Blessing Bestiary (carta Ultimate no Level 10 da run de 16 ago.)",
    },
  ],
  builds: [
    {
      name: "Moon Goddess Descends",
      status: "em teste",
      summary:
        "Caminho voltado ao dano de boss e à escala Moonlit. Set observado em run real (16 ago.): Hunt Mark · Rapid Fire, Hunt Mark · Spirit Blessing, Moonlit · Star Piercer, Moonlit · Chain Break, Moonlit · Haste e a ultimate Moon Goddess Descends — Artemis fechou em 2º no painel de dano (2,96M), atrás só do Sword Demon (5,68M).",
      priorities: [
        "Moonlit · Enhancement",
        "Moonlit · Haste",
        "Moonlit · Star Piercer",
        "Moonlit · Chain Break",
        "Hunt Mark · Spirit Blessing",
        "Moon Goddess Descends (ultimate)",
      ],
    },
    {
      name: "Marca + águia",
      status: "em teste",
      summary: "Alternativa de área que espalha dano e utiliza uma ultimate diferente.",
      priorities: ["Marcas", "Águia", "Moonlit Chain Break quando o foco for AOE"],
    },
  ],
  synergies: [
    "Boss fraco contra Arqueiro",
    "Attack Speed para acelerar aplicação de marcas",
    "Talento nv5: crit +5% dobra quando \"Athena\" também está em campo (referência ainda não identificada na wiki)",
    "Hunt Mark · Spirit Blessing buffa permanentemente o ATK dela e o HP máximo de um companheiro (até 30 stacks) — valoriza runs longas com aliados de linha de frente",
  ],
  evidence: [
    "Ficha UR Goddess of the Hunt — Artemis nv2 (16 ago.): stats e talentos nv3/5/8",
    "Run de aventura de 16 ago. (Sword Demon + Goddess of the Hunt + Dark Knight + Onmyoji): set completo de 6 blessings da run",
    "Painel de dano da run: Goddess of the Hunt 2,96M (2º lugar)",
    "Runs do Igris (13 ago.): Goddess of the Hunt nos painéis Ally com 720,95K / ~756,61K / 676,97K",
    "Carta de herói in-run com o texto base de Moonlit Arrow Rain",
    "Testes comparativos com Eria",
    "Árvore completa discutida em runs anteriores",
  ],
  evidenceImages: [
    { src: "/screenshots/artemis/profile-level-2.jpg", alt: "Ficha UR Goddess of the Hunt — Artemis no nível 2", caption: "Poder 19.688, ATK 17,85K, HP 223,39K, DEF 7.515; talentos nv3/5/8 bloqueados." },
    { src: "/screenshots/artemis/hero-card-moonlit-arrow-rain.jpg", alt: "Carta de herói UR Goddess of the Hunt em draft in-run", caption: "Texto base de Moonlit Arrow Rain: múltiplos hits e aplicação de Marcas." },
    { src: "/screenshots/artemis/blessing-hunt-mark-rapid-fire.jpg", alt: "Blessing Hunt Mark · Rapid Fire em draft in-run", caption: "Após aplicar Hunt Mark, o próximo ataque acerta três vezes." },
    { src: "/screenshots/artemis/blessing-hunt-mark-spirit-blessing.jpg", alt: "Blessing Hunt Mark · Spirit Blessing obtida no Lucky Spin", caption: "ATK e HP máximo de um companheiro +1% por marca, até 30 stacks." },
    { src: "/screenshots/artemis/blessing-moonlit-star-piercer.jpg", alt: "Blessing Moonlit · Star Piercer em draft com Ultimate", caption: "Star-Piercing Arrow ignora Defesa em coluna e acelera Moonlit Arrow Rain." },
    { src: "/screenshots/artemis/blessing-moonlit-chain-break.jpg", alt: "Blessing Moonlit · Chain Break em draft in-run", caption: "Hits consecutivos no mesmo alvo disparam dano em área." },
    { src: "/screenshots/artemis/blessing-moonlit-haste.jpg", alt: "Blessing Moonlit · Haste em draft in-run", caption: "Requisito de ativação de Moonlit Arrow Rain -2." },
    { src: "/screenshots/artemis/ultimate-moon-goddess-descends.jpg", alt: "Carta Ultimate Moon Goddess Descends no Level 10", caption: "A cada 2 casts de Moonlit Arrow Rain, 13 flechas de luar." },
    { src: "/screenshots/artemis/bestiary-run-set-completo.jpg", alt: "Painel da Goddess of the Hunt com as 6 blessings da run", caption: "Set completo: Rapid Fire, Spirit Blessing, Star Piercer, Chain Break, Haste e a ultimate." },
    { src: "/screenshots/artemis/run-damage-panel.jpg", alt: "Painel de dano da run de 16 ago.", caption: "Goddess of the Hunt em 2º com 2,96M, atrás do Sword Demon (5,68M)." },
  ],
  pending: [
    "Identificar quem é \"Athena\" (citada no talento nv5) — nenhum herói com esse nome catalogado até agora",
    "Capturar os textos das blessings Hunt Mark · Precision e Moonlit · Enhancement (concedidas pelos talentos nv3/nv8, ainda sem print do tooltip)",
    "Capturar em print as demais blessings do kit citadas em observações antigas (Divine Eagle, Pursuit, Moonlit · Charge) e os tooltips das skills base na ficha (Moonlit Arrow Rain / Hunter God Mark)",
    "Mapear a progressão acima do nível 8 (nv10, 12, 15...)",
    "Abrir Story, Blessing Bestiary e Exclusive Gem da ficha",
    "Esclarecer a divergência dos dois snapshots de nível 2 (poder 16.147 vs 19.688)",
    "Confirmar nomes oficiais traduzidos",
  ],
};
