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
    "Ler o final do texto do marco de nível 12 (cortado em \"Gain an additional Blessing after selecting...\").",
    "Capturar os marcos de nível 15+ (não exibidos nos prints).",
    "Abrir a Story (badge \"!\" na ficha) e o Hero Background para registrar identidade e história.",
    "Verificar se a heroína possui Exclusive Gems e capturar a tela correspondente.",
    "Confirmar em jogo se Sacred Crest Mark, Holy Emblem Mark, holy symbol mark e Sacred Insignia são de fato a mesma mecânica, e se Divine Wing Blessing = Holy Wings of Protection.",
    "Esclarecer a relação entre o marco nv10 \"Holy Light Burst\" e a blessing dourada homônima do Bestiary.",
    "Obter o valor de recuperação de Shelter · Cure (não exibido no texto do jogo).",
  ],
};
