import type { HeroRecord } from "../types";

export const catwoman: HeroRecord = {
  slug: "catwoman",
  name: "Mitia",
  aliases: ["Catwoman", "SP Catwoman"],
  className: "Assassino",
  rarity: "SP",
  role: "Assassina / snowball de dano / execução de presas",
  summary:
    "Assassina SP construída em torno da skill Hunt: marca inimigos com Prey, converte abates em dano permanente crescente e fica mais forte quanto menos inimigos restam, culminando em execução direta de alvos com pouca vida.",
  fieldNote:
    "Ficha documentada no nível 3, com Blessing Bestiary de Hunt completo e progressão transcrita até o nível 30. O kit inteiro empurra na mesma direção: acumular marcas de Prey e abates para escalar dano, velocidade de ataque e crítico conforme o campo esvazia — potencial de snowball em runs longas, ainda sem teste prático.",
  image: "/screenshots/sp-heroes/catwoman-profile.jpg",
  identity: [
    "Título exibido: SP Catwoman",
    "Nome exibido na ficha: Mitia",
    "Profissão: Assassin",
    "Posição/alvo exibido: 1",
    "Disponível no Hero Exchange por 3.000 Hero Coins (limite semanal 1/1)",
    "Aparece entre os 8 heróis selecionáveis do banner Mythical Summon (Probability UP) e do seletor de Mythic Hero do Abyss Realm",
  ],
  stats: [
    "Snapshot no nível 3 (22 ago. 2026): poder 16.374 · ataque 16,32K · HP 162,39K · defesa 5.558 · Dano Crítico global +4,8% · fragmentos 1/5",
    "Snapshot no nível 3 (21 ago. 2026): poder 16.082 · ataque 16,03K · HP 159,51K · defesa 5.460 · Dano Crítico global +4,8% · fragmentos 1/5",
    "Observação: os dois snapshots são do mesmo nível 3 em dias seguidos com valores diferentes (16.082 → 16.374). Hipótese: o poder incorpora bônus externos à ficha (equipamentos/melhorias globais) que mudaram entre os prints; ambos os valores ficam registrados.",
  ],
  levelSkills: [
    {
      name: "Hunt",
      description:
        "Skill base: teleporta (blink) para a frente do inimigo e desfere 3 golpes de Claw Strike; cada golpe causa dano e aplica Prey, aumentando o dano recebido pelo alvo.",
      source: "Blessing Bestiary — descrição da skill base.",
    },
    {
      name: "Bestiary — hunting habits",
      description:
        "A morte de uma unidade inimiga aumenta o próprio dano. Quando resta apenas 1 inimigo, ganha alta velocidade de ataque e roubo de vida. Texto idêntico ao tooltip do talento Prey Collection — aparentemente a mesma blessing com dois nomes (inconsistência de tradução).",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — nibbling prey",
      description:
        "Quanto menos inimigos houver, maior o próprio índice de crítico. Texto quase idêntico ao tooltip de Devour prey/Devouring Prey — aparentemente a mesma blessing com nomes distintos (inconsistência de tradução).",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — murderous habit",
      description: "Ataques têm chance de disparar Hunt.",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — execute prey",
      description:
        "Texto na tela: \"If the enemy stacks up 3 and the prey triggers to execute, low health enemies can be killed directly.\" — com 3 acúmulos de Prey, inimigos com pouca vida podem ser executados diretamente (tradução da tela é confusa; interpretação como hipótese).",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — bloodthirsty habits",
      description: "Lança Hunt automaticamente no inimigo com menor HP; recarga de 5 segundos.",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — search for prey",
      description: "A cada 7 segundos, causa dano a todos os inimigos e aplica 3 acúmulos de Prey.",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — Claw Habits",
      description: "Cada lançamento de Hunt aumenta o próprio dano; acumulável.",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — mark prey",
      description: "Ataques básicos também marcam o inimigo com Prey.",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — cruel habits",
      description: "Hunt causa dano adicional baseado em parte do HP perdido do alvo.",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — Play with prey",
      description: "Após lançar Hunt em um alvo com Prey, aumenta a velocidade de ataque; acumulável.",
      source: "Blessing Bestiary",
    },
    {
      name: "Bestiary — Cat Claw Magic (dourada)",
      description: "A cada 8 segundos, lança 5 ataques consecutivos de Hunt em inimigos aleatórios.",
      source: "Blessing Bestiary — blessing dourada (ultimate).",
    },
    {
      name: "Bestiary — wild hunt (dourada)",
      description:
        "A cada 7 segundos, lança Hunt em todos os inimigos marcados com Prey, causando dano extra conforme a quantidade de acúmulos de Prey. Nome exibido em minúsculas na tela; não confundir com o ramo de talento Wild Hunt dos níveis 20/25.",
      source: "Blessing Bestiary — blessing dourada (ultimate).",
    },
    {
      name: "Nível 3 — Prey Collection",
      description:
        "Começa a batalha com Prey Collection obtido. Tooltip: a morte de uma unidade inimiga aumenta o próprio dano; quando resta apenas 1 inimigo, ganha alta velocidade de ataque e roubo de vida (blood-stealing).",
      source: "Texto confirmado na tela de progressão; tooltip aberto no print.",
    },
    {
      name: "Nível 5 — dano permanente por abate",
      description: "Depois de matar um inimigo, o próprio dano aumenta permanentemente. O valor do aumento não é exibido.",
      source: "Texto completo confirmado na tela de progressão.",
    },
    {
      name: "Nível 8 — Devouring Prey",
      description:
        "Começa a batalha com Devouring Prey obtido. Tooltip (exibido como \"Devour prey\"): quanto menor o número de inimigos, maior a taxa de acerto crítico.",
      source: "Texto confirmado na tela de progressão; tooltip aberto no print.",
    },
    {
      name: "Nível 10 — Cat Claw Divine Art / Wild Pursuit",
      description:
        "Cat Claw Divine Art: cada lançamento de Hunt tem chance de ser lançado mais uma vez em um inimigo aleatório. Wild Pursuit: quando um inimigo marcado com Prey morre, aumenta a esquiva por 3 segundos — o percentual aparece literalmente como \"x%\" na tela (valor não exibido).",
      source: "Texto confirmado na tela de progressão (nível bloqueado).",
    },
    {
      name: "Nível 12 — Blessing adicional",
      description: "Ganha uma Blessing adicional depois de selecionar uma Ultimate Skill.",
      source: "Texto confirmado na tela de progressão (nível bloqueado).",
    },
    {
      name: "Nível 15 — assassinato de emergência",
      description: "Quando o HP está baixo, libera um assassinato e restaura vida (texto na tela: \"When health is low, release to assassinate and restore health.\").",
      source: "Texto confirmado na tela de progressão (nível bloqueado).",
    },
    {
      name: "Nível 20 — Catclaw Mastery / Wild Hunt",
      description:
        "Catclaw Mastery: texto na tela \"Killing Time is more likely to trigger\" — provável erro de tradução; o que \"Killing Time\" designa não fica claro. Wild Hunt: matar um inimigo tem chance de disparar o efeito 1 vez extra.",
      source: "Texto confirmado na tela de progressão (nível bloqueado).",
    },
    {
      name: "Nível 25 — Catclaw Mastery / Wild Hunt",
      description:
        "Catclaw Mastery: Claw Strike tem chance de disparar um golpe extra. Wild Hunt: quando termina, todos os inimigos ganham 3 acúmulos de Prey.",
      source: "Texto confirmado na tela de progressão (nível bloqueado).",
    },
    {
      name: "Nível 30 — bônus de profissão",
      description: "Aumenta em 8% o dano dos personagens desta profissão (Assassin).",
      source: "Texto confirmado na tela de progressão (nível bloqueado).",
    },
  ],
  builds: [
    {
      name: "Motor de Prey e execução",
      status: "rascunho",
      summary:
        "Direção derivada apenas do Bestiary, sem teste em run: espalhar Prey pelo máximo de fontes (ataques básicos, pulso periódico, Wild Hunt dourada) e converter os acúmulos em execução direta e dano crescente conforme o campo esvazia.",
      priorities: ["mark prey", "search for prey", "execute prey", "murderous habit", "Claw Habits", "wild hunt (dourada)"],
    },
  ],
  synergies: [
    "Hipótese — fases com muitas ondas de inimigos fracos alimentam o acúmulo permanente de dano",
    "Hipótese — hunting habits + nibbling prey invertem a curva usual: Mitia fica mais forte quanto menos inimigos restam, apontando para dueto com um limpador de ondas que deixe o boss para ela",
  ],
  evidence: [
    "Ficha SP Catwoman no nível 3 (22 ago. 2026) — poder 16.374",
    "Ficha nível 3 com tooltips de Prey Collection e Devour prey (21 ago. 2026) — poder 16.082",
    "Tela de progressão dos níveis 10 a 30 (21 ago. 2026)",
    "Blessing Bestiary da skill Hunt em 3 páginas, incluindo as 2 blessings douradas (21 ago. 2026)",
    "Hero Exchange listando Catwoman por 3.000 Hero Coins (limite semanal 1/1)",
    "Catwoman entre os heróis selecionáveis do Mythical Summon e do Abyss Realm",
  ],
  evidenceImages: [
    { src: "/screenshots/sp-heroes/catwoman-profile.jpg", caption: "Ficha SP Catwoman — Mitia no nível 3 (poder 16.374)" },
    { src: "/screenshots/catwoman/profile-tooltip-prey-collection.jpg", caption: "Ficha no nível 3 (poder 16.082) com o tooltip de Prey Collection aberto" },
    { src: "/screenshots/catwoman/profile-tooltip-devour-prey.jpg", caption: "Tooltip de Devour prey e texto completo do talento de nível 5" },
    { src: "/screenshots/catwoman/progression-10.jpg", caption: "Nível 10 — Cat Claw Divine Art / Wild Pursuit (esquiva exibida como \"x%\")" },
    { src: "/screenshots/catwoman/progression-12-15.jpg", caption: "Níveis 12 (Blessing adicional) e 15 (assassinato com recuperação de vida)" },
    { src: "/screenshots/catwoman/progression-20.jpg", caption: "Nível 20 — Catclaw Mastery / Wild Hunt" },
    { src: "/screenshots/catwoman/progression-25-30.jpg", caption: "Níveis 25 e 30 da progressão" },
    { src: "/screenshots/catwoman/bestiary-hunt-1.jpg", caption: "Bestiary de Hunt — skill base, hunting habits, nibbling prey, murderous habit e execute prey" },
    { src: "/screenshots/catwoman/bestiary-hunt-2.jpg", caption: "Bestiary de Hunt — bloodthirsty habits, search for prey, Claw Habits e mark prey" },
    { src: "/screenshots/catwoman/bestiary-hunt-ultimates.jpg", caption: "Bestiary de Hunt — cruel habits, Play with prey e as douradas Cat Claw Magic e wild hunt" },
  ],
  pending: [
    "Confirmar o valor do aumento permanente de dano por abate (nível 5) — o texto está completo, mas o número não é exibido",
    "Obter o percentual de esquiva de Wild Pursuit (nível 10), mostrado literalmente como \"x%\" na tela",
    "Esclarecer o que \"Killing Time\" significa no talento de nível 20 (provável erro de tradução de Hunt/Claw Strike)",
    "Confirmar se hunting habits = Prey Collection e nibbling prey = Devouring Prey/Devour prey (textos idênticos, nomes distintos)",
    "Entender a divergência de poder no nível 3 (16.082 em 21 ago. vs 16.374 em 22 ago.) — provável efeito de bônus externos à ficha",
    "Abrir Hero Background e histórias da Mitia (ainda não documentados)",
    "Verificar se a Catwoman possui gemas exclusivas",
    "Comparar com Shadow Wolf como carry de execução",
    "Testar em run o snowball de Prey e a build rascunho do Bestiary",
  ],
};
