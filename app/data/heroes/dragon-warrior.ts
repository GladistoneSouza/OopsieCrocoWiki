import type { HeroRecord } from "../types";

export const dragonWarrior: HeroRecord = {
  slug: "dragon-warrior",
  name: "Rain Flame Soul",
  aliases: ["Dragon Warrior", "SP Dragon Warrior"],
  className: "Warrior",
  rarity: "SP",
  role: "Tank / redução de dano / vínculo com aliados",
  summary:
    "Tank SP da classe Warrior construído em torno de Dragon Soul Link: compartilha o dano dos aliados, acumula Dragon Heart para crescer o HP máximo e escala redução de dano própria e do grupo.",
  fieldNote:
    "Ficha documentada entre 21 e 23 ago. 2026: progressão agora mapeada até o nível 30, Blessing Bestiary completo e primeiros registros do herói em batalha (painel de skill, escolhas de blessing e ranking de dano em 21 ago.). Ainda não há run dedicada em que o Dragon Warrior seja o foco do time.",
  image: "/screenshots/dragon-warrior/profile-level-1.jpg",
  artImage: "/screenshots/art/dragon-warrior-card.jpg",
  identity: [
    "Título exibido: SP Dragon Warrior",
    "Nome exibido na ficha: Rain Flame Soul",
    "Profissão: Warrior",
    "Alcance/posição exibida: 1 (frontline)",
    "Obtenção observada: tela \"New Hero\" em 21 ago. (invocação); aparece como opção de Probability UP no Mythical Summon e como herói selecionável no Mythic Hero Select Chest e no Abyss Realm",
  ],
  stats: [
    "Nível 1: poder 14.728 · ataque 8.561 · HP 237,22K · defesa 8.079 · Dano Crítico global +1,6%",
    "Nível 3: poder 16.894 · ataque 9.820 · HP 272,11K · defesa 9.267 · Dano Crítico global +4,8%",
    "Nível 4: poder 17.652 · ataque 10,26K · HP 284,32K · defesa 9.683 · Dano Crítico global +6,4%",
    "Nível 5: poder 18.410 · ataque 10,7K · HP 296,53K · defesa 10,1K · Dano Crítico global +8,0%",
    "Snapshot anterior no nível 1 (21–22 ago.): poder 14.304 · ataque 8.298 · HP 230,05K · defesa 7.874",
    "Snapshot no nível 5 divergente (21 ago., tela Hero Details em contexto co-op): CP 13,7K · ataque 8.056 · HP 223,02K · defesa 7.337 — valores menores que o próprio nível 1 registrado; ver pendências",
    "Tela \"New Hero\" na obtenção (21 ago.): ataque 8.225 · HP 228,01K · defesa 780[valor cortado, não exibido por inteiro]",
    "Em batalha (21 ago., painel do herói): HP 328.976/328.976 · ataque 9.583 · defesa 8.661 — valores observados durante uma run, com buffs ativos (3 ícones: 1 / 1 / 20 stacks; tooltip de um deles: \"Healing — Stacks: 1 — Continuously recover HP\")",
  ],
  levelSkills: [
    {
      name: "Ultimate — Dragon Soul Link",
      description: "Ganha redução de dano e compartilha 30% do dano recebido por 1 a 3 aliados.",
      source:
        "Texto confirmado no Blessing Bestiary, na tela Hero Details e no painel do herói em batalha (mesmo texto nas três telas).",
    },
    {
      name: "Nível 3 — Dragon Heart · Protection",
      description:
        "Começa com Dragon Heart · Protection. Tooltip: Dragon Soul Link dura 2 segundos e concede Dragon Heart a cada segundo; Dragon Heart aumenta permanentemente o HP máximo.",
      source: "Ficha e tooltip confirmados na tela.",
    },
    {
      name: "Nível 5 — redução de dano por HP baixo",
      description: "Quanto menor a vida, maior a redução de dano. O Bestiary traz Link · Survival ('When HP is low, gain DMG Reduction') com efeito parecido, mas a redação difere: a progressão descreve ganho proporcional à vida perdida e a carta descreve um ganho ao cruzar um limiar. Não dá para dizer pelas telas se são a mesma bênção.",
      source: "Texto confirmado na tela de progressão."
    },
    {
      name: "Nível 8 — Link · Thick Skin",
      description:
        "Começa com Link · Thick Skin. Tooltip: para cada 1 aliado com dano compartilhado, a própria redução de dano aumenta bastante. Nota de tradução: o tooltip da ficha diz \"For every 1 teammate shared, one's own DMG reduction will be greatly increased\" e o Bestiary/picker em batalha diz \"For each 1 ally you share damage with, your DMG Reduction increases greatly\" — duas traduções para o mesmo efeito.",
      source: "Ficha, tooltip, Bestiary e picker em batalha confirmados na tela.",
      image: "/screenshots/bencaos/dragon-warrior/p1-2.jpg",
    },
    {
      name: "Nível 10 — Summon Dragon / Dragon God's Blessing (melhoria)",
      description:
        "Summon Dragon: o sopro do dragão passa adicionalmente a provocar todos os inimigos e concede escudos aos aliados. Dragon God's Blessing: aumenta a redução de dano do Dragon Warrior e fortalece o efeito de compartilhamento do Link.",
      source:
        "Texto da progressão. Hipótese reforçada pelos níveis 20 e 25: as linhas de progressão são melhorias incrementais das duas ultimates douradas do Bestiary (\"additionally\"), não redefinições delas.",
    },
    {
      name: "Nível 12 — Blessing adicional",
      description: "Ganha uma Blessing adicional depois de selecionar uma Ultimate Skill.",
      source:
        "Texto confirmado na tela de progressão; coerente com o picker em batalha marcado \"Level 12\" oferecendo 6 opções, incluindo a dourada Dragon God's Blessing.",
    },
    {
      name: "Nível 15 — escudo pós-Link",
      description:
        "Depois de liberar Dragon Soul Link, o Dragon Warrior e o aliado com menor vida ganham um escudo.",
      source: "Texto confirmado na tela de progressão.",
    },
    {
      name: "Nível 20 — Summon Dragon / Dragon God's Blessing (melhoria)",
      description:
        "Summon Dragon: inimigos provocados causam dano reduzido. Dragon God's Blessing: restaura o HP perdido do Dragon Warrior a cada segundo.",
      source: "Texto confirmado na tela de progressão (nível ainda bloqueado).",
    },
    {
      name: "Nível 25 — Summon Dragon / Dragon God's Blessing (melhoria)",
      description:
        "Summon Dragon: o Dragon Breath concede a todos os aliados redução de dano aumentada. Dragon God's Blessing: aumenta a taxa de reflexão (reflect ratio) do Dragon Warrior.",
      source: "Texto confirmado na tela de progressão (nível ainda bloqueado).",
    },
    {
      name: "Nível 30 — dano da profissão",
      description: "Aumenta o DMG desta profissão em 8%.",
      source: "Texto confirmado na tela de progressão (nível ainda bloqueado).",
    },
    {
      name: "Bestiary — Dragonheart · Sustain",
      description: "Duração de Dragon Soul Link aumentada; ganha Dragonheart por segundo, aumentando permanentemente o HP máximo. Texto do card: 'Dragon Soul Link duration increased; gain Dragonheart every second, permanently increasing Max HP'.",
      source: "Blessing Bestiary; também vista como opção em picker de batalha (21 ago.).",
      image: "/screenshots/bencaos/dragon-warrior/p1-1.jpg",
    },
    {
      name: "Bestiary — Dragonheart · Feedback",
      description: "Durante Dragon Soul Link, ser atingido tem chance de causar dano aos inimigos próximos e restaurar o próprio HP. Texto do card: 'During Dragon Soul Link, being hit has a chance to deal damage to nearby enemies and restore your HP'.",
      source: "Blessing Bestiary; também vista como opção em picker de batalha (21 ago.).",
      image: "/screenshots/bencaos/dragon-warrior/p1-3.jpg",
    },
    {
      name: "Bestiary — Dragonheart · Sword Intent",
      description: "Ataques causam dano adicional e têm chance de conceder Dragonheart. Texto do card: 'Attacks deal additional damage and have a chance to grant Dragonheart'.",
      source: "Blessing Bestiary; também vista como opção em picker de batalha (21 ago.).",
      image: "/screenshots/bencaos/dragon-warrior/p2-1.jpg",
    },
    {
      name: "Bestiary — Dragonheart · Intimidation",
      description: "Durante Dragon Soul Link, causa dano por segundo aos inimigos próximos e reduz o ataque deles. Texto do card: 'During Dragon Soul Link, deal damage to nearby enemies every second and reduce their ATK'.",
      source: "Blessing Bestiary; não apareceu nos pickers de batalha registrados.",
      image: "/screenshots/bencaos/dragon-warrior/p2-3.jpg",
    },
    {
      name: "Bestiary — Dragonheart · Scale Armor",
      description: "Ao ativar Dragon Soul Link, provoca inimigos próximos e ganha um escudo. Texto do card: 'When Dragon Soul Link is activated, taunt nearby enemies and gain a shield'.",
      source: "Blessing Bestiary; também vista como opção em picker de batalha (21 ago.).",
      image: "/screenshots/bencaos/dragon-warrior/p3-1.jpg",
    },
    {
      name: "Bestiary — Link · Enhancement",
      description: "A cada 1 instância de dano recebida, ganha um pouco de redução de dano. Texto do card: 'Each time you take 1 instance of damage, gain some DMG Reduction'.",
      source: "Blessing Bestiary; não apareceu nos pickers de batalha registrados.",
      image: "/screenshots/bencaos/dragon-warrior/p1-4.jpg",
    },
    {
      name: "Bestiary — Link · Spread",
      description: "Dragon Soul Link vincula todos os aliados. Texto do card: 'Dragon Soul Link links all allies'.",
      source: "Blessing Bestiary; também vista como opção em picker de batalha (21 ago.).",
      image: "/screenshots/bencaos/dragon-warrior/p2-2.jpg",
    },
    {
      name: "Bestiary — Link · Nourishment",
      description: "Com HP baixo, restaura vida continuamente. Texto do card: 'When HP is low, continuously restore HP'.",
      source: "Blessing Bestiary; também vista como opção em picker de batalha (21 ago.).",
      image: "/screenshots/bencaos/dragon-warrior/p2-4.jpg",
    },
    {
      name: "Bestiary — Link · Survival",
      description: "Com HP baixo, ganha redução de dano. Texto do card: 'When HP is low, gain DMG Reduction'.",
      source: "Blessing Bestiary; também vista como opção em picker de batalha (21 ago.).",
      image: "/screenshots/bencaos/dragon-warrior/p3-2.jpg",
    },
    {
      name: "Bestiary — Summon Dragon (dourada)",
      description: "Invoca um dragão gigante que causa dano a todos os inimigos e reduz a defesa deles. Texto do card: 'Summon a giant dragon to deal damage to all enemies and reduce their DEF'.",
      source:
        "Blessing Bestiary; também oferecida como dourada em picker de batalha (21 ago.). As linhas de progressão dos níveis 10/20/25 acrescentam efeitos a esta ultimate (hipótese).",
      image: "/screenshots/bencaos/dragon-warrior/p3-3.jpg",
    },
    {
      name: "Bestiary — Dragon God's Blessing (dourada)",
      description: "Na primeira vez que o HP chega a 0, revive e recupera uma grande quantidade de vida. Texto do card: 'The first time HP reaches 0, revive and recover a large amount of HP'.",
      source:
        "Blessing Bestiary; também oferecida como dourada em picker de batalha nível 12 (21 ago.). As linhas de progressão dos níveis 10/20/25 acrescentam efeitos a esta ultimate (hipótese).",
      image: "/screenshots/bencaos/dragon-warrior/p3-4.jpg",
    },
  ],
  kit: {
    engine:
      "Dragon Soul Link é o eixo, e quase toda blessing começa com \"durante o Link\", \"por aliado vinculado\" ou \"ao receber dano\". O Dragon Warrior não converte tempo em dano: converte dano recebido em redução de dano, em HP máximo permanente e em retaliação passiva. Quem escolhe as peças dele está escolhendo quanto tempo o Link fica de pé e quantos aliados ele alcança.",
    loops: [
      {
        name: "Tempo de Link vira HP permanente",
        text: "Dragon Heart · Protection e Dragonheart · Sustain entregam um Dragonheart por segundo enquanto o Link está ativo, e cada Dragonheart aumenta permanentemente o HP máximo. Duração do Link não é conforto momentâneo: é atributo que fica. Dragonheart · Sword Intent adiciona uma segunda torneira, dando chance de Dragonheart no ataque básico.",
      },
      {
        name: "Quanto mais gente no Link, mais duro ele fica",
        text: "Link · Thick Skin aumenta bastante a própria redução de dano para cada aliado no compartilhamento, e Link · Spread vincula o time inteiro. Sozinha, Thick Skin é um bônus pequeno; com Spread, ela passa a contar o time todo. São as duas peças que mais mudam o patamar do herói, e só valem juntas.",
      },
      {
        name: "Apanhar é o recurso",
        text: "Link · Enhancement soma redução de dano a cada instância recebida, o talento de nível 5 e Link · Survival aumentam a redução conforme a vida cai, e Link · Nourishment restaura vida no HP baixo. O kit inteiro fica melhor exatamente quando ele está sendo focado — a pior hora dele é a sala em que ninguém o ataca.",
      },
      {
        name: "O dano é efeito colateral",
        text: "Dragonheart · Feedback devolve dano ao ser atingido, Dragonheart · Intimidation causa dano por segundo e reduz o ataque de quem está perto, e o nível 25 sobe a taxa de reflexão. Nenhuma dessas peças pede que ele ataque: ele machuca por estar no meio apanhando.",
      },
    ],
  },
  combos: [
    {
      name: "Spread antes de Thick Skin",
      status: "hipótese",
      needs: ["Link · Spread", "Link · Thick Skin"],
      text: "Thick Skin conta aliados vinculados e o Link base alcança de 1 a 3. Spread leva para o time inteiro. Pegar Thick Skin sem Spread é comprar a metade fraca do combo; pegar Spread primeiro faz Thick Skin valer o dobro ou mais quando aparecer. É a única ordem de prioridade do kit que dá para afirmar sem medir número.",
    },
    {
      name: "Provocar para escolher quem apanha",
      status: "hipótese",
      needs: ["Dragonheart · Scale Armor", "Summon Dragon (nível 10)", "Link · Enhancement"],
      text: "Scale Armor provoca ao ativar o Link e o nível 10 faz o sopro do dragão provocar todo mundo. Puxar o aggro não é só proteger a retaguarda: é alimentar Link · Enhancement, que soma redução a cada instância de dano recebida. Provocação vira geração de recurso.",
    },
    {
      name: "A segunda vida",
      status: "hipótese",
      needs: ["Dragon God's Blessing (dourada)", "Dragonheart · Sustain"],
      text: "A dourada revive uma vez ao chegar a 0 e devolve muita vida. Como o HP máximo dele cresce com os Dragonhearts acumulados na run, a revivida vale mais quanto mais tempo de Link ele somou antes — a mesma blessing vale pouco no começo e muito no fim.",
    },
  ],
  levelShots: [
    { label: "Níveis 3, 5 e 8", src: "/screenshots/niveis/dragon-warrior-3-8.jpg", caption: "O nível 5 aumenta a redução de dano conforme a vida cai — o kit lê pressão como recurso." },
    { label: "O nome do nível 8", src: "/screenshots/niveis/dragon-warrior-8-tooltip.jpg", caption: "Link · Thick Skin: para cada aliado no compartilhamento, a própria redução de dano aumenta bastante." },
    { label: "Níveis 10 e 12", src: "/screenshots/niveis/dragon-warrior-10-12.jpg", caption: "Summon Dragon provoca todos e escuda os aliados; Dragon God's Blessing sobe a redução e fortalece o Link." },
    { label: "Níveis 15 e 20", src: "/screenshots/niveis/dragon-warrior-15-20.jpg", caption: "Escudo pós-Link no 15; no 20, inimigos provocados causam menos dano ou o HP perdido volta por segundo." },
    { label: "Níveis 25 e 30", src: "/screenshots/niveis/dragon-warrior-25-30.jpg", caption: "No 25 o Dragon Breath dá redução de dano ao time todo, ou sobe a taxa de reflexão." },
  ],
  strengths: [
    "Melhora sob pressão: metade do kit lê dano recebido como recurso, então ele fica mais duro na sala mais perigosa",
    "HP máximo cresce permanentemente dentro da run via Dragonheart, então cada sala longa o deixa maior para a próxima",
    "Contribui sem precisar de espaço de dano: provoca, reduz ataque inimigo, reflete e escuda como efeito colateral de existir",
    "Escala com o tamanho do time — Link · Spread transforma cada aliado vivo num multiplicador de redução",
  ],
  weaknesses: [
    "Dano próprio irrelevante: no ranking observado no estágio 15 ele fechou 1,88M enquanto o time passava de 20M — ele não fecha sala nenhuma sozinho",
    "Sala em que ele não é atacado é sala em que metade do kit não liga",
    "Depende de aliados vivos: com o time reduzido, Spread e Thick Skin perdem a base de contagem justamente quando a defesa faria falta",
    "Nenhum valor numérico do kit aparece na tela — \"greatly increased\", \"reflect ratio\", nada quantificado —, então não dá para comparar duas escolhas defensivas a não ser por direção",
    "Sem run dedicada registrada: toda a leitura acima vem do Bestiary e de pickers fotografados, não de desempenho medido",
  ],
  builds: [
    {
      name: "Âncora de frontline",
      status: "rascunho",
      summary:
        "Direção sugerida pelo próprio Bestiary: manter Dragon Soul Link ativo no maior número de aliados e converter o dano recebido em defesa e sustain. Há registros do herói em batalha (21 ago.), mas as telas mostram apenas as opções oferecidas nos pickers, não quais blessings foram escolhidas.",
      priorities: ["Link · Spread", "Dragonheart · Sustain", "Link · Thick Skin", "Dragonheart · Scale Armor", "Link · Nourishment"],
    },
  ],
  synergies: [
    "Composições que sofrem dano constante — o compartilhamento converte pressão em redução de dano via Link · Thick Skin",
    "Aliados frágeis de retaguarda protegidos pelo escudo do nível 15",
    "Times de invocação: mais corpos vivos para vincular com Link · Spread",
    "Composição observada em batalha (21 ago., boss do estágio 15): Bounty Hunter, Sword Demon, Robin e Tidecaller ao lado do Dragon Warrior — no ranking de dano ele fez 1,65M → 1,88M, papel claramente não ofensivo",
  ],
  evidence: [
    "Fichas dos níveis 1, 3, 4 e 5 com atributos completos",
    "Tooltips de Dragon Heart · Protection e Link · Thick Skin",
    "Progressão dos níveis 10, 12, 15, 20, 25 e 30 (telas de 21 e 23 ago.)",
    "Blessing Bestiary completo (3 telas)",
    "Pickers de blessing em batalha (21 ago.), incluindo as douradas Summon Dragon e Dragon God's Blessing",
    "Painel do herói em batalha com stats e texto de Dragon Soul Link (21 ago.)",
    "Ranking de dano de batalha contra boss do estágio 15 (21 ago.)",
    "Tela Hero Details nível 5 em contexto co-op com stats divergentes (21 ago.)",
  ],
  evidenceImages: [
    { src: "/screenshots/dragon-warrior/profile-level-1.jpg", caption: "Ficha SP Dragon Warrior — Rain Flame Soul no nível 1" },
    { src: "/screenshots/dragon-warrior/tooltip-dragon-heart-protection.jpg", caption: "Tooltip de Dragon Heart · Protection" },
    { src: "/screenshots/dragon-warrior/progression-level-10.jpg", caption: "Desbloqueios do nível 10: Summon Dragon e Dragon God's Blessing" },
    { src: "/screenshots/dragon-warrior/progression-levels-12-15.jpg", caption: "Desbloqueios dos níveis 12 e 15" },
    { src: "/screenshots/dragon-warrior/bestiary-1.jpg", caption: "Bestiary: Sustain, Thick Skin, Feedback e Enhancement" },
    { src: "/screenshots/dragon-warrior/bestiary-2.jpg", caption: "Bestiary: Sword Intent, Spread, Intimidation e Nourishment" },
    { src: "/screenshots/dragon-warrior/bestiary-3.jpg", caption: "Bestiary: Scale Armor, Survival e as douradas Summon Dragon e Dragon God's Blessing" },
    { src: "/screenshots/dragon-warrior/profile-level-3.jpg", caption: "Ficha no nível 3" },
    { src: "/screenshots/dragon-warrior/profile-level-4.jpg", caption: "Ficha no nível 4" },
    { src: "/screenshots/dragon-warrior/profile-level-5.jpg", caption: "Ficha no nível 5" },
    { src: "/screenshots/dragon-warrior/progression-level-20.jpg", caption: "Progressão do nível 20: melhorias de Summon Dragon e Dragon God's Blessing" },
    { src: "/screenshots/dragon-warrior/progression-levels-25-30.jpg", caption: "Progressão dos níveis 25 e 30 (+8% DMG da profissão)" },
    { src: "/screenshots/dragon-warrior/battle-panel-dragon-soul-link.jpg", caption: "Painel do herói em batalha: stats, Dragon Soul Link e buff Healing" },
    { src: "/screenshots/dragon-warrior/battle-damage-ranking.jpg", caption: "Ranking de dano em batalha de boss (estágio 15) com Dragon Warrior no time" },
    { src: "/screenshots/dragon-warrior/battle-blessing-picker-level-12.jpg", caption: "Picker de blessing nível 12 em batalha com a dourada Dragon God's Blessing" },
    { src: "/screenshots/dragon-warrior/battle-blessing-picker-summon-dragon.jpg", caption: "Picker de blessing em batalha com a dourada Summon Dragon" },
    { src: "/screenshots/dragon-warrior/hero-details-level-5-coop.jpg", caption: "Hero Details nível 5 em contexto co-op, com stats divergentes da ficha própria" },
  ],
  pending: [
    "Definir se o nível 5 concede Link · Survival ou uma redução de dano própria: o nível 3 concede Dragonheart · Sustain e o nível 8 concede Link · Thick Skin, então o padrão sugere que sim, mas as duas redações descrevem curvas diferentes.",
    "Resolver a direção do compartilhamento do Dragon Soul Link: ele absorve parte do dano dos aliados ou despeja 30% do próprio dano neles? O texto (\"compartilha 30% do dano recebido por 1 a 3 aliados\") aceita as duas leituras, e a build inteira muda conforme a resposta",
    "Medir o ganho de Link · Thick Skin com 1, 2 e 4 aliados vinculados para saber se Link · Spread vale prioridade máxima",
    "Registrar uma run completa focada no Dragon Warrior para validar a direção de build (os registros de 21 ago. mostram pickers e ranking, mas não quais blessings foram escolhidas)",
    "Confirmar a hipótese de que as linhas de progressão dos níveis 10/20/25 são melhorias das ultimates do Bestiary, e não textos alternativos",
    "Esclarecer a ficha nível 5 divergente de 21 ago. (CP 13,7K, stats abaixo do próprio nível 1): pela cronologia, foi vista via Hero Details em co-op antes de o herói ser obtido — hipótese: ficha do Dragon Warrior de outro jogador",
    "Confirmar os valores numéricos de Dragon Heart, escudos, reflexão e redução de dano",
    "Identificar os dois buffs sem tooltip vistos no painel de batalha (ícones com 1 e 20 stacks)",
    "Mapear os breakpoints acima do nível 30 (a tela registrada termina no nível 30)",
  ],
};
