import type { HeroRecord } from "../types";

export const holyKnight: HeroRecord = {
  slug: "holy-knight",
  name: "Serena · Dawn",
  aliases: ["SSR Holy Knight", "Holy Knight"],
  className: "Warrior",
  rarity: "SSR",
  role: "Frontline / tank de marcas / redução de dano / escudos",
  summary:
    "Guerreira SSR que acumula Sacred Crest Mark com Sacred Wing Shelter para aumentar a própria redução de dano (até 5 camadas) e, via Bestiary, converte as marcas e o estado Holy Wings of Protection em escudos, cura e controle de área.",
  fieldNote:
    "Confirmada no nível 10 em 30 de julho; no snapshot do roster de 16 de agosto já aparecia no nível 12. A descrição de seleção co-op resume o kit como redução de dano + buff permanente. Boa parte dos textos do Bestiary usa nomes traduzidos de forma inconsistente para a mesma mecânica (ver identidade/pendências).",
  image: "/screenshots/holy-knight/profile-level-10.jpg",
  artImage: "/screenshots/art/holy-knight-card.jpg",
  identity: [
    "Título exibido: SSR Holy Knight",
    "Nome exibido na ficha: Serena · Dawn",
    "Classe exibida: Warrior",
    "Alvos: 1",
    "Ícone de Story com badge \"!\" na ficha (história disponível, ainda não aberta nos prints).",
    "Inconsistência de tradução: a marca da heroína aparece como \"Sacred Crest Mark\" (tooltip da ficha), \"Holy Emblem Mark\" (Bestiary), \"holy symbol mark\" (blessings douradas/imunidade) e \"Sacred Insignia\" (marco nv10) — aparentemente a mesma mecânica.",
    "Inconsistência de tradução: o estado protetor aparece como \"Holy Wings of Protection\" (Bestiary), \"Divine Wing Blessing\" (marco nv10) e possivelmente o prefixo \"Shelter\"/\"Asylum\" das blessings.",
  ],
  stats: [
    "Snapshot no nível 12 (16 ago., tela Hero Comp): fragmentos 2/30; demais atributos não exibidos.",
    "Snapshot no nível 10 (30 jul., ficha): DEF 4688 · Dano Crítico global +14,0% · recursos ALL 230, 447/520 · fragmentos 0/30.",
    "Poder no nível 10: parcialmente coberto pelo tooltip no print (~\"2648\" ou \"8648\"; o valor não é legível).",
    "HP no nível 10: cortado no print — apenas o final \",55K\" é visível; o valor completo não é exibido.",
    "ATK no nível 10: não exibido nos prints disponíveis.",
  ],
  levelSkills: [
    { name: "Nível 15 — escudo de emergência", description: "Com a vida abaixo de 30%, ela ganha um escudo e reduz o dano recebido por 5 segundos. A partir do nível 15 esse é o talento exibido no campo Exclusive Passive.", source: "Telas de upgrade de 30 ago. 2026, nos níveis 14 e 15." },
    { name: "Nível 20 — Holy Light Burst / Spear of Judgment", description: "Holy Light Burst restaura HP por segundo durante o Holy Wings of Protection; Spear of Judgment escala com cada camada de marca.", source: "Tela de upgrade de 30 ago. 2026." },
    {
      name: "Sacred Wing Shelter",
      description:
        "Ganha 1 camada de Sacred Crest Mark. Cada camada de Sacred Crest Mark aumenta a Redução de Dano, até 5 camadas.",
      source: "Tooltip confirmado na ficha nv10 e no cabeçalho do Blessing Bestiary.",
    },
    {
      name: "Nível 10 — Holy Light Burst / Judgment Spear",
      description:
        "Holy Light Burst: Divine Wing Blessing aumenta o HP máximo, o tamanho cresce e o número de provocações (taunt) aumenta em 1. Judgment Spear: a redução de dano de Sacred Insignia é dobrada. O texto estava parcialmente coberto por um popup de Coop Invite no print.",
      source: "Texto confirmado na tela de progressão (ficha nv10).",
    },
    {
      name: "Nível 12 — Blessing adicional (bloqueado)",
      description:
        "\"Gain an additional Blessing after selecting...\" — texto cortado no print; presumivelmente o padrão \"após selecionar uma Ultimate Skill\", mas o final não é exibido.",
      source: "Texto confirmado (parcial) na tela de progressão; marco ainda bloqueado.",
    },
    {
      name: "Bestiary — Shelter · Shield",
      description:
        "Durante Holy Wings of Protection, há chance de ganhar um escudo ao ser atacada.",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — Mark · Haste",
      description:
        "Durante Holy Wings of Protection, a cada 3 segundos você ganha 1 nível de Holy Emblem Mark.",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — Shelter · Continuation",
      description: "Duração de Holy Wings of Protection +3 segundos.",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — Mark · Shield",
      description: "Cada vez que ganha 1 camada de Holy Emblem Mark, ganha um escudo.",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — Shelter · Cure",
      description:
        "Durante Holy Wings of Protection, há chance de recuperar o valor máximo de vida a cada segundo (texto do jogo; a porcentagem/valor exato não é exibida).",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — Imprint · Resonance",
      description: "Ataques normais têm chance de obter Holy Emblem Mark.",
      source: "Blessing Bestiary (grafada \"imprint · resonance\" em minúsculas no jogo)",
    },
    {
      name: "Bestiary — Asylum · Suppression",
      description:
        "Ao usar Holy Wings of Protection, reduz a velocidade de ataque dos inimigos próximos. (\"Asylum\" aparenta ser tradução alternativa de \"Shelter\".)",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — Imprint · Free of Control",
      description: "Ao possuir 10 camadas de holy symbol mark, fica imune a controle.",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — Shelter · Guard",
      description:
        "Ao entrar em Holy Wings of Protection, fornece escudo baseado na vida máxima para si mesma e para o aliado com menor vida.",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — Imprint · Sublimation",
      description: "Limite máximo de Holy Emblem Mark +5.",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — Holy Light Burst (dourada)",
      description:
        "Ao obter Holy Wings of Protection, ganha escudo de vida máxima e causa dano alto aos inimigos ao redor. (Mesmo nome do marco de nível 10; a relação entre os dois não é explicada nos prints.)",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — Spear of Judgment (dourada)",
      description:
        "Com 5 níveis de holy symbol mark, os ataques normais se tornam dano em área. (O marco nv10 chama a opção correspondente de \"Judgment Spear\" — aparente inconsistência de tradução.)",
      source: "Blessing Bestiary",
    },
  ],
  kit: {
    engine:
      "Dois sistemas encaixados: a marca, que acumula e vira defesa, e o estado Holy Wings of Protection, que é a janela em que quase tudo acontece. A marca sobe a redução de dano até 5 camadas; o estado gera marcas, escudos e cura enquanto dura. Ler esta ficha é decidir quanto tempo o estado fica de pé e até que teto a marca pode subir.",
    loops: [
      {
        name: "O estado fabrica marca, a marca fabrica defesa",
        text: "Mark · Haste entrega 1 camada a cada 3 segundos dentro do estado e Imprint · Resonance dá chance de marca no ataque normal. Cada camada sobe a redução de dano. Manter o estado de pé é, literalmente, gerar armadura ao longo do tempo.",
      },
      {
        name: "Marca também vira escudo",
        text: "Mark · Shield concede um escudo a cada camada ganha. Combinada com Mark · Haste, a taxa de geração de marca deixa de ser progresso rumo a um teto e passa a ser vazão contínua de escudo — o teto de 5 camadas para de ser um limite e vira uma esteira.",
      },
      {
        name: "O teto de 5 é uma trava",
        text: "Imprint · Free of Control exige 10 camadas para dar imunidade a controle, mas o teto base é 5. Sem Imprint · Sublimation, que soma +5 ao limite, a imunidade é inalcançável. É a única dependência dura entre duas blessings encontrada em toda a wiki de personagens — supondo que Sacred Crest Mark, Holy Emblem Mark e holy symbol mark sejam a mesma marca, o que os textos sugerem mas nunca afirmam.",
      },
      {
        name: "Defesa vira ataque nas 5 camadas",
        text: "Spear of Judgment torna os ataques normais em dano de área ao atingir 5 níveis de marca, e a dourada Holy Light Burst converte a entrada no estado em escudo mais dano alto em volta. A partir do meio da run ela para de só absorver e começa a limpar.",
      },
    ],
  },
  combos: [
    {
      name: "Sublimation antes de Free of Control",
      status: "hipótese",
      needs: ["Imprint · Sublimation", "Imprint · Free of Control"],
      text: "A imunidade a controle pede 10 camadas e o teto base é 5. Pegar Free of Control sem antes somar +5 ao limite é comprar uma peça que nunca liga. É a checagem mais concreta que a wiki de personagens tem para oferecer no meio de um draft.",
    },
    {
      name: "Estado longo, marca contínua",
      status: "hipótese",
      needs: ["Shelter · Continuation", "Mark · Haste", "Shelter · Cure"],
      text: "Mais 3 segundos de estado significam mais uma camada pela Mark · Haste e mais segundos de chance de cura pela Shelter · Cure. As três leem o mesmo relógio, então esticar o estado melhora as outras duas sem custar escolha.",
    },
    {
      name: "Esteira de escudo",
      status: "hipótese",
      needs: ["Mark · Shield", "Mark · Haste", "Imprint · Resonance"],
      text: "Com escudo por camada ganha e duas fontes gerando camada — o relógio de 3 segundos e o ataque normal —, a defesa dela deixa de depender do teto e passa a depender de vazão. É a rota que sustenta frontline em luta longa.",
    },
    {
      name: "Cobrir o aliado mais fraco",
      status: "hipótese",
      needs: ["Shelter · Guard", "Holy Light Burst (nível 10)"],
      text: "Shelter · Guard escuda ela e o aliado com menos vida ao entrar no estado, e o nível 10 aumenta o HP máximo e soma uma provocação. Juntos formam o único pacote do elenco documentado que protege um aliado específico enquanto puxa o aggro do resto.",
    },
  ],
  levelShots: [
    { label: "Níveis 12 e 15", src: "/screenshots/niveis/holy-knight-12-15.jpg", caption: "O texto do 12 aparece inteiro pela primeira vez — Blessing adicional após a Ultimate. E o 15, que a ficha listava como não capturado: com a vida abaixo de 30%, ela ganha escudo e reduz o dano recebido por 5 segundos." },
    { label: "O 15 como passiva exclusiva", src: "/screenshots/niveis/holy-knight-15-20.jpg", caption: "Ao chegar no 15 o campo Exclusive Passive passa a exibir esse mesmo talento, seguindo a regra da tela." },
    { label: "Nível 20", src: "/screenshots/niveis/holy-knight-20.jpg", caption: "Holy Light Burst restaura HP por segundo durante o Holy Wings of Protection; Spear of Judgment escala por camada de marca." },
  ],
  strengths: [
    "Defesa em camadas de tipos diferentes — redução de dano, escudo, cura e imunidade a controle — o que a torna difícil de derrubar por uma única via",
    "Protege um aliado nomeado, não só a si mesma: Shelter · Guard cobre quem estiver com menos vida",
    "Converte defesa em ofensa ao chegar a 5 camadas, com ataques normais virando dano em área",
    "O acúmulo de marca é contínuo e previsível, sem depender de sorte de proc para a função principal",
  ],
  weaknesses: [
    "A peça mais forte do kit — imunidade a controle — está travada atrás de um teto que exige outra blessing específica para ser alcançado",
    "Tudo de bom mora dentro do estado; fora dele o kit inteiro fica ocioso",
    "A pior confusão de nomes da wiki: Sacred Crest Mark, Holy Emblem Mark, holy symbol mark e Sacred Insignia parecem ser a mesma coisa, Shelter e Asylum também, e Holy Light Burst existe como dourada e como talento de nível 10 com textos diferentes",
    "Dano próprio baixo até as 5 camadas, então a primeira metade da run ela contribui pouco além de absorver",
    "Vários valores não aparecem: a cura da Shelter · Cure, o tamanho dos escudos e a redução por camada",
  ],
  builds: [
    {
      name: "Muralha de marcas e escudos",
      status: "rascunho",
      summary:
        "Direção derivada apenas do Bestiary: gerar Holy Emblem Mark rapidamente (Mark · Haste, Imprint · Resonance) e converter cada camada em escudo (Mark · Shield), estendendo Holy Wings of Protection e protegendo o aliado mais frágil com Shelter · Guard. Douradas fecham com burst de área ao ativar a proteção (Holy Light Burst) ou ataques em área permanentes (Spear of Judgment).",
      priorities: [
        "Mark · Haste",
        "Mark · Shield",
        "Imprint · Resonance",
        "Shelter · Continuation",
        "Shelter · Guard",
        "Holy Light Burst (dourada) ou Spear of Judgment (dourada)",
      ],
    },
  ],
  synergies: [
    "Descrição de seleção co-op resume o papel: \"Gain Damage Reduction and Permanent Buff\" — tanque com buff permanente que segura a linha para carries como Shadow Wolf e Sword Demon (composições vistas em Hero Comp).",
    "Vista na tela de seleção co-op ao lado de Flower Spirit (cura em área), Shadow Wolf e Star Mage — pareamento natural com healers, já que o kit é defensivo e sem cura própria garantida (Shelter · Cure é baseada em chance).",
  ],
  evidence: [
    "Ficha SSR Holy Knight — Serena · Dawn no nível 10 (30 jul.), com tooltip de Sacred Wing Shelter, DEF 4688 e Dano Crítico global +14,0%.",
    "Blessing Bestiary de Sacred Wing Shelter completo em 3 telas (10 blessings comuns + 2 douradas).",
    "Tela de seleção de heróis co-op com a descrição \"Sacred Wing Shelter / Gain Damage Reduction and Permanent Buff\".",
    "Telas de Hero Comp: Holy Knight nv10 em batalha (30 jul.) e nv12 com 2/30 fragmentos no roster (16 ago.).",
    "Hero Exchange: Holy Knight disponível por 500 Hero Coins (50% off), limite semanal 8/8 (telas de 16 ago.).",
  ],
  evidenceImages: [
    { src: "/screenshots/holy-knight/profile-level-10.jpg", alt: "Ficha da SSR Holy Knight Serena · Dawn no nível 10 com tooltip de Sacred Wing Shelter", caption: "Ficha nv10: DEF 4688, Dano Crítico global +14,0% e marco Holy Light Burst / Judgment Spear." },
    { src: "/screenshots/holy-knight/profile-level-10-attack-pose.jpg", alt: "Mesma ficha nível 10 em pose de ataque", caption: "Segunda captura da ficha nv10 confirmando tooltip e marcos." },
    { src: "/screenshots/holy-knight/bestiary-page-1.jpg", alt: "Bestiary de Sacred Wing Shelter, página 1", caption: "Shelter · Shield, Mark · Haste, Shelter · Continuation e Mark · Shield." },
    { src: "/screenshots/holy-knight/bestiary-page-2.jpg", alt: "Bestiary de Sacred Wing Shelter, página 2", caption: "Shelter · Cure, Imprint · Resonance, Asylum · Suppression e Imprint · Free of Control." },
    { src: "/screenshots/holy-knight/bestiary-golden.jpg", alt: "Bestiary de Sacred Wing Shelter, página 3 com blessings douradas", caption: "Shelter · Guard, Imprint · Sublimation e as douradas Holy Light Burst e Spear of Judgment." },
    { src: "/screenshots/holy-knight/coop-selection.jpg", alt: "Tela de seleção co-op com o card do Holy Knight", caption: "Descrição de seleção: Sacred Wing Shelter / Gain Damage Reduction and Permanent Buff." },
    { src: "/screenshots/holy-knight/hero-comp-level-10.jpg", alt: "Hero Comp com Holy Knight nível 10 em batalha", caption: "Comp 1 (30 jul.): Holy Knight nv10, 0/30 fragmentos, classe Warrior." },
    { src: "/screenshots/holy-knight/hero-exchange-500.jpg", alt: "Hero Exchange com Holy Knight por 500 Hero Coins", caption: "Hero Exchange: 500 Hero Coins com 50% off, limite semanal 8/8." },
  ],
  pending: [
    "Reabrir a ficha sem tooltip/popup para ler poder, ATK e HP completos no nível atual (poder e HP saíram cobertos/cortados nos prints).",
    
    
    "Abrir a Story (badge \"!\" na ficha) e o Hero Background para registrar identidade e história.",
    "Verificar se a heroína possui Exclusive Gems e capturar a tela correspondente.",
    "Confirmar em jogo se Sacred Crest Mark, Holy Emblem Mark, holy symbol mark e Sacred Insignia são de fato a mesma mecânica, e se Divine Wing Blessing = Holy Wings of Protection.",
    "Esclarecer a relação entre o marco nv10 \"Holy Light Burst\" e a blessing dourada homônima do Bestiary.",
    "Obter o valor de recuperação de Shelter · Cure (não exibido no texto do jogo).",
  ],
};
