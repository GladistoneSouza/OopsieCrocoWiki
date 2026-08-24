import type { HeroRecord } from "../types";

export const dragonWarrior: HeroRecord = {
  slug: "dragon-warrior",
  name: "Rain Flame Soul",
  aliases: ["Dragon Warrior", "SP Dragon Warrior"],
  className: "Guerreiro",
  rarity: "SP",
  role: "Tank / redução de dano / vínculo com aliados",
  summary:
    "Guerreiro SP construído em torno de Dragon Soul Link: compartilha o dano dos aliados, acumula Dragon Heart para crescer o HP máximo e escala redução de dano própria e do grupo.",
  fieldNote:
    "Ficha documentada do nível 1 ao 5 em 23 ago. 2026, com o Blessing Bestiary completo. Ainda não há run registrada com o personagem, então todo o desempenho prático permanece pendente.",
  image: "/screenshots/dragon-warrior/profile-level-1.jpg",
  identity: [
    "Título exibido: SP Dragon Warrior",
    "Nome exibido na ficha: Rain Flame Soul",
    "Profissão: Warrior",
    "Alcance/posição exibida: 1 (frontline)",
  ],
  stats: [
    "Nível 1: poder 14.728 · ataque 8.561 · HP 237,22K · defesa 8.079 · Dano Crítico global +1,6%",
    "Nível 3: poder 16.894 · ataque 9.820 · HP 272,11K · defesa 9.267 · Dano Crítico global +4,8%",
    "Nível 4: poder 17.652 · ataque 10,26K · HP 284,32K · defesa 9.683 · Dano Crítico global +6,4%",
    "Nível 5: poder 18.410 · ataque 10,7K · HP 296,53K · defesa 10,1K · Dano Crítico global +8,0%",
    "Snapshot anterior no nível 1 (22 ago.): poder 14.304 · ataque 8.298 · HP 230,05K · defesa 7.874",
  ],
  levelSkills: [
    {
      name: "Ultimate — Dragon Soul Link",
      description: "Ganha redução de dano e compartilha 30% do dano recebido por 1 a 3 aliados.",
      source: "Texto confirmado no Blessing Bestiary.",
    },
    {
      name: "Nível 3 — Dragon Heart · Protection",
      description:
        "Começa com Dragon Heart · Protection. Tooltip: Dragon Soul Link dura 2 segundos e concede Dragon Heart a cada segundo; Dragon Heart aumenta permanentemente o HP máximo.",
      source: "Ficha e tooltip confirmados na tela.",
    },
    {
      name: "Nível 5 — redução de dano por HP baixo",
      description: "Quanto menor a vida, maior a redução de dano.",
      source: "Texto confirmado na tela de progressão.",
    },
    {
      name: "Nível 8 — Link · Thick Skin",
      description:
        "Começa com Link · Thick Skin. Tooltip: para cada 1 aliado com dano compartilhado, a própria redução de dano aumenta bastante.",
      source: "Ficha e tooltip confirmados na tela.",
    },
    {
      name: "Nível 10 — Summon Dragon / Dragon God's Blessing",
      description:
        "Summon Dragon: o sopro do dragão passa a provocar todos os inimigos e concede escudos aos aliados. Dragon God's Blessing: aumenta a redução de dano do Dragon Warrior e fortalece o efeito de compartilhamento do Link.",
      source: "Texto da progressão; os textos do Bestiary para as mesmas ultimates são diferentes (ver pendências).",
    },
    {
      name: "Nível 12 — Blessing adicional",
      description: "Ganha uma Blessing adicional depois de selecionar uma Ultimate Skill.",
      source: "Texto confirmado na tela de progressão.",
    },
    {
      name: "Nível 15 — escudo pós-Link",
      description:
        "Depois de liberar Dragon Soul Link, o Dragon Warrior e o aliado com menor vida ganham um escudo.",
      source: "Texto confirmado na tela de progressão; nível ainda bloqueado.",
    },
    {
      name: "Bestiary — Dragonheart · Sustain",
      description: "Duração de Dragon Soul Link aumentada; ganha Dragonheart por segundo, aumentando permanentemente o HP máximo.",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — Dragonheart · Feedback",
      description: "Durante Dragon Soul Link, ser atingido tem chance de causar dano aos inimigos próximos e restaurar o próprio HP.",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — Dragonheart · Sword Intent",
      description: "Ataques causam dano adicional e têm chance de conceder Dragonheart.",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — Dragonheart · Intimidation",
      description: "Durante Dragon Soul Link, causa dano por segundo aos inimigos próximos e reduz o ataque deles.",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — Dragonheart · Scale Armor",
      description: "Ao ativar Dragon Soul Link, provoca inimigos próximos e ganha um escudo.",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — Link · Enhancement",
      description: "A cada 1 instância de dano recebida, ganha um pouco de redução de dano.",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — Link · Spread",
      description: "Dragon Soul Link vincula todos os aliados.",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — Link · Nourishment",
      description: "Com HP baixo, restaura vida continuamente.",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — Link · Survival",
      description: "Com HP baixo, ganha redução de dano.",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — Summon Dragon (dourada)",
      description: "Invoca um dragão gigante que causa dano a todos os inimigos e reduz a defesa deles.",
      source: "Blessing Bestiary; diverge do texto do nível 10 (provocar + escudos).",
    },
    {
      name: "Bestiary — Dragon God's Blessing (dourada)",
      description: "Na primeira vez que o HP chega a 0, revive e recupera uma grande quantidade de vida.",
      source: "Blessing Bestiary; diverge do texto do nível 10 (redução de dano + link).",
    },
  ],
  builds: [
    {
      name: "Âncora de frontline",
      status: "rascunho",
      summary:
        "Direção sugerida pelo próprio Bestiary: manter Dragon Soul Link ativo no maior número de aliados e converter o dano recebido em defesa e sustain. Ainda sem run registrada.",
      priorities: ["Link · Spread", "Dragonheart · Sustain", "Link · Thick Skin", "Dragonheart · Scale Armor", "Link · Nourishment"],
    },
  ],
  synergies: [
    "Composições que sofrem dano constante — o compartilhamento converte pressão em redução de dano via Link · Thick Skin",
    "Aliados frágeis de retaguarda protegidos pelo escudo do nível 15",
    "Times de invocação: mais corpos vivos para vincular com Link · Spread",
  ],
  evidence: [
    "Fichas dos níveis 1, 3, 4 e 5 com atributos completos",
    "Tooltips de Dragon Heart · Protection e Link · Thick Skin",
    "Progressão dos níveis 10, 12 e 15",
    "Blessing Bestiary completo (3 telas)",
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
  ],
  pending: [
    "Registrar uma run completa para validar a direção de build",
    "Esclarecer a divergência entre os textos do nível 10 e do Bestiary para Summon Dragon e Dragon God's Blessing (tradução inconsistente)",
    "Confirmar os valores numéricos de Dragon Heart, escudos e redução de dano",
    "Mapear os breakpoints dos níveis 20+",
  ],
};
