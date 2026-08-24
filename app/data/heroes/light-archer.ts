import type { HeroRecord } from "../types";

export const lightArcher: HeroRecord = {
  slug: "light-archer",
  name: "Veliana Purple Flame",
  aliases: ["Light Archer", "SP Light Archer"],
  className: "Arqueiro",
  rarity: "SP",
  role: "Arqueira / velocidade de ataque / Demon-Banishing State",
  summary:
    "Arqueira SP construída em torno de Demon-Banishing Holy Arrow: a cada 5 ataques entra em Demon-Banishing State por 4s, causando dano extra e podendo disparar Light Arrows. O kit se divide em dois eixos — reforçar o estado (velocidade, área, crítico, ricochete) ou multiplicar as Light Arrows até o modo Overclock.",
  fieldNote:
    "Ficha documentada no nível 1 com a progressão visível até o nível 25 (níveis acima de 3 bloqueados na conta). O talento do nível 8, antes cortado, foi identificado: Light Arrow · Mastery. O Blessing Bestiary de Demon-Banishing Holy Arrow foi capturado completo (10 blessings + 2 douradas). Nenhuma run com a heroína foi registrada ainda.",
  image: "/screenshots/sp-heroes/light-archer-profile.jpg",
  identity: [
    "Título exibido: SP Light Archer",
    "Nome exibido na ficha: Veliana Purple Flame",
    "Profissão: Archer",
    "Posição exibida: 5",
    "É um dos 8 heróis míticos selecionáveis como 'UP' no Mythical Summon (junto de Sword Demon, Tidecaller, Succubus, Flower Spirit, Catwoman, Dragon Warrior e Red Queen) e também aparece na seleção de heróis míticos do Abyss Realm.",
    "Disponível no Hero Exchange por Hero Coins; o preço apareceu como 3000 em duas capturas e como 1000 em outra — inconsistência entre prints, possivelmente promoção ou mudança de preço.",
  ],
  stats: [
    "Snapshot no nível 1 (22 ago. 2026): poder 14.279 · ataque 13,04K · HP 159,27K · defesa 5.450 · Dano Crítico global +1,6% · fragmentos 0/5",
    "Snapshot no nível 1 (21 ago. 2026): poder 14.026 · ataque 12,81K · HP 156,44K · defesa 5.354 · Dano Crítico global +1,6% · fragmentos 0/5",
    "Os dois snapshots são do mesmo nível 1 com valores diferentes em dias diferentes; nos mesmos lotes, a Red Queen nível 1 exibiu exatamente os mesmos números em cada dia. Hipótese: os atributos exibidos incluem algum bônus de conta/temporada que mudou entre os dias.",
  ],
  levelSkills: [
    {
      name: "Skill base — Demon-Banishing Holy Arrow",
      description:
        "A cada 5 ataques, entra em Demon-Banishing State uma vez por 4s, causando dano extra e com chance de disparar uma Light Arrow.",
      source: "Blessing Bestiary (descrição da skill base).",
    },
    {
      name: "Nível 3 — Demon-Slaying Arrow · Speed",
      description:
        "Começa a batalha com Demon-Slaying Arrow · Speed obtido. O tooltip aberto na ficha mostra 'Demon-Slaying Arrow · Swift — Attack speed +105% under enchantment state'; no Bestiary a mesma blessing aparece como 'Demon-killing Arrow · Speed'. Speed/Swift e Slaying/killing parecem ser traduções divergentes da mesma blessing.",
      source: "Texto confirmado na ficha (nível bloqueado) e tooltip aberto na tela de progressão.",
    },
    {
      name: "Nível 5 — curva de velocidade",
      description: "A velocidade de ataque aumenta no início da batalha e diminui depois de um período.",
      source: "Texto confirmado na ficha; nível bloqueado.",
    },
    {
      name: "Nível 8 — Light Arrow · Mastery",
      description:
        "Começa a batalha com Light Arrow · Mastery obtido. Tooltip: 'The triggering probability of light arrow is greatly increased' — a probabilidade de disparar Light Arrow aumenta bastante.",
      source: "Texto confirmado na tela de progressão com tooltip aberto (21 ago. 2026); resolve o talento antes cortado.",
    },
    {
      name: "Nível 10 — Demon-Banishing Upgrade / Holy Light Upgrade",
      description:
        "Demon-Banishing Upgrade: em Demon-Banishing State, os ataques ignoram 60% da defesa inimiga. Holy Light Upgrade: menos gatilhos necessários para o modo Overclock.",
      source: "Texto confirmado na tela de progressão; nível bloqueado.",
    },
    {
      name: "Nível 12 — Blessing adicional",
      description: "Ganha uma Blessing adicional depois de selecionar uma Ultimate Skill.",
      source: "Texto confirmado na tela de progressão; nível bloqueado.",
    },
    {
      name: "Nível 15 — velocidade após o encantamento",
      description:
        "Depois de liberar o 'sacred enchantment', a própria velocidade de ataque aumenta. 'Sacred enchantment' parece ser outra tradução do Demon-Banishing State (o Bestiary também usa 'Holy Enchantment' e 'demon-killing state' para a mesma mecânica).",
      source: "Texto confirmado na tela de progressão; nível bloqueado.",
    },
    {
      name: "Nível 20 — Demon-Banishing Upgrade / Holy Light Upgrade",
      description:
        "Demon-Banishing Upgrade: gatilhos necessários para Starlight Arrow -1. Holy Light Upgrade: em estado Overclock, chance de atacar consecutivamente.",
      source: "Texto confirmado na tela de progressão; nível bloqueado.",
    },
    {
      name: "Nível 25 — Demon-Banishing Upgrade / Holy Light Upgrade",
      description:
        "Demon-Banishing Upgrade: Starlight Arrow adicionalmente aumenta a velocidade de ataque. Holy Light Upgrade: em estado Overclock, aumenta a chance de disparar mais Light Arrows.",
      source: "Texto confirmado na tela de progressão; nível bloqueado.",
    },
    {
      name: "Bestiary — Demon-killing Arrow · Speed",
      description:
        "Velocidade de ataque +105% em demon-killing state. Mesmo efeito do tooltip 'Demon-Slaying Arrow · Swift' da ficha (traduções divergentes).",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — Light Arrow · Mastery",
      description: "A probabilidade de disparar Light Arrow aumenta bastante.",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — Exorcist Arrow Company",
      description: "Em demon-killing state, atacar o mesmo alvo 3 vezes causa dano adicional.",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — Light Arrow · Judgment",
      description: "Light Arrows causam dano adicional.",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — Demon-killing arrow · scatter",
      description: "Em demon-killing state, os ataques causam dano em área.",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — Light Arrow · Start",
      description: "O Holy Enchantment exige 2 ataques normais a menos (entra no estado mais cedo).",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — Demon-killing arrow · Broken",
      description: "Em demon-killing state, ao atacar o mesmo alvo, a taxa de crítico aumenta gradualmente.",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — Light Arrow · Focus",
      description: "A cada 3 ataques, o dano da Light Arrow aumenta.",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — Demon-killing arrows and bullets",
      description: "Em demon-killing state, o ataque ricocheteia 2 vezes.",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — Light Arrow · Fashion",
      description: "Disparar Light Arrow aumenta a própria velocidade de ataque.",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — Advanced level of demon slaying (dourada)",
      description:
        "O demon-killing state passa a durar permanentemente. O texto transcrito segue com tradução truncada: 'Every time 3 is attacked, a 6 starlight arrow will be designed continuously, causing damage based on the enemy's health value' — aparentemente, a cada 3 ataques dispara 6 Starlight Arrows em sequência, com dano baseado na vida do inimigo (leitura aproximada; o texto original está mal traduzido).",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — Overclocking mode (dourada)",
      description:
        "Depois de disparar Light Arrow 8 vezes, entra em Overclock; cada disparo passa a soltar de 1 a 5 Light Arrows aleatoriamente.",
      source: "Blessing Bestiary",
    },
  ],
  builds: [
    {
      name: "Metralhadora de Light Arrows (Overclock)",
      status: "rascunho",
      summary:
        "Maximiza a frequência e o dano das Light Arrows até destravar Overclocking mode, que dispara 1-5 flechas por gatilho. Direção derivada apenas do Bestiary e dos talentos de nível (8/10/20/25 reforçam Overclock); ainda não testada em run.",
      priorities: [
        "Light Arrow · Mastery",
        "Light Arrow · Start",
        "Light Arrow · Fashion",
        "Light Arrow · Judgment",
        "Light Arrow · Focus",
        "Overclocking mode (dourada)",
      ],
    },
    {
      name: "Estado permanente de exorcismo",
      status: "rascunho",
      summary:
        "Foca no Demon-Banishing/demon-killing State: velocidade +105%, área, crítico crescente e ricochete, coroado por Advanced level of demon slaying, que torna o estado permanente. Direção derivada apenas do Bestiary; ainda não testada em run.",
      priorities: [
        "Demon-killing Arrow · Speed",
        "Light Arrow · Start",
        "Demon-killing arrow · scatter",
        "Demon-killing arrow · Broken",
        "Demon-killing arrows and bullets",
        "Advanced level of demon slaying (dourada)",
      ],
    },
  ],
  synergies: [],
  evidence: [
    "Ficha SP Light Archer no nível 1 (22 ago. 2026)",
    "Ficha SP Light Archer no nível 1 com tooltips e progressão nv3-25 (21 ago. 2026)",
    "Blessing Bestiary completo de Demon-Banishing Holy Arrow (10 blessings + 2 douradas)",
    "Telas de Mythical Summon, Abyss Realm e Hero Exchange listando a Light Archer",
  ],
  evidenceImages: [
    { src: "/screenshots/sp-heroes/light-archer-profile.jpg", caption: "Ficha SP Light Archer — Veliana Purple Flame no nível 1 (22 ago.)" },
    { src: "/screenshots/light-archer/profile-lv1-tooltip-swift.jpg", caption: "Ficha nível 1 (21 ago.) com tooltip Demon-Slaying Arrow · Swift: velocidade de ataque +105% no estado encantado" },
    { src: "/screenshots/light-archer/profile-lv1-talents-3-5.jpg", caption: "Talentos dos níveis 3 e 5 com o nome completo Demon-Slaying Arrow · Speed" },
    { src: "/screenshots/light-archer/progression-8-10-tooltip-mastery.jpg", caption: "Nível 8 com tooltip Light Arrow · Mastery e nível 10 (ignora 60% da defesa / Overclock)" },
    { src: "/screenshots/light-archer/progression-8-10.jpg", caption: "Progressão dos níveis 8 e 10 sem tooltip" },
    { src: "/screenshots/light-archer/progression-12-15.jpg", caption: "Progressão dos níveis 12 (Blessing adicional) e 15 (velocidade após o encantamento)" },
    { src: "/screenshots/light-archer/progression-20.jpg", caption: "Nível 20: Starlight Arrow -1 gatilho / ataques consecutivos em Overclock" },
    { src: "/screenshots/light-archer/progression-25.jpg", caption: "Nível 25: Starlight Arrow aumenta velocidade / mais Light Arrows em Overclock" },
    { src: "/screenshots/light-archer/bestiary-page-1.jpg", caption: "Bestiary de Demon-Banishing Holy Arrow — página 1 (Speed, Mastery, Exorcist Arrow Company, Judgment)" },
    { src: "/screenshots/light-archer/bestiary-page-2.jpg", caption: "Bestiary — página 2 (scatter, Start, Broken, Focus)" },
    { src: "/screenshots/light-archer/bestiary-legendary.jpg", caption: "Bestiary — página 3 com as douradas Advanced level of demon slaying e Overclocking mode" },
  ],
  pending: [
    "Capturar a progressão do nível 30 em diante (a rolagem parou no nível 25)",
    "Confirmar se Demon-Slaying Arrow · Speed, · Swift e Demon-killing Arrow · Speed são de fato a mesma blessing (traduções divergentes)",
    "Esclarecer o texto truncado de Advanced level of demon slaying (relação exata entre 3 ataques e 6 Starlight Arrows)",
    "Entender a divergência de atributos entre os dois snapshots de nível 1 (21 e 22 ago.) — possivelmente bônus de conta/temporada",
    "Confirmar o preço real no Hero Exchange (3000 vs 1000 Hero Coins)",
    "Registrar uma run com a Light Archer para validar as builds rascunhadas",
  ],
};
