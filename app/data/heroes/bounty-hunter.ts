import type { HeroRecord } from "../types";

export const bountyHunter: HeroRecord = {
  slug: "bounty-hunter",
  name: "Eria · Ironwing",
  aliases: ["Bounty Hunter", "Pistoleira", "SSR Bounty Hunter"],
  className: "Archer",
  rarity: "SSR",
  role: "DPS por munições",
  summary: "Atiradora SSR baseada em munições especiais, velocidade de ataque, acúmulo de ataque e Barrage.",
  fieldNote:
    "Foi MVP numa run documentada da dificuldade 5, com 4,31M, e depois alcançou 17,58M no andar 15 mesmo sob efeitos daquela tentativa que prejudicavam atiradores. Identidade confirmada em 23 ago.: SSR Bounty Hunter, Eria · Ironwing.",
  image: "/screenshots/bounty-hunter/profile-level-15.jpg",
  artImage: "/screenshots/art/bounty-hunter-card.jpg",
  identity: [
    "Título exibido: SSR Bounty Hunter",
    "Nome exibido na ficha: Eria · Ironwing",
    "Profissão: Archer",
    "Posição exibida: 5",
  ],
  stats: [
    "Nível 15: poder 21.398 · ataque 19,57K · HP 238,82K · defesa 8.136 · Dano Crítico global +21,0% · fragmentos 19/60",
    "Snapshot no nível 13: poder 17.149 · ataque 15,54K · HP 194,83K · defesa 6.545",
    "Snapshot no nível 10 (jul.-ago.): poder 8.664 · ataque 7.975 · HP 96,61K · defesa 3.245",
  ],
  levelSkills: [
    {
      name: "Ultimate — Let the Bullets Fly",
      description: "Depois de 8 ataques, dispara uma rajada de balas (descrição de seleção: Deal Burst Damage). Em batalha, ela acumula os buffs Sharpness (aumenta dano) e Frenzy (aumenta velocidade de ataque) — observados 10→20 acúmulos de Sharpness elevando o ATK de 20,8K para 22,69K.",
      source: "Carta de seleção e painel do herói em batalha.",
    },
    { name: "Nível 15 — Wild Rapid Fire", description: "A contagem de balas de Wild Rapid Fire aumenta em +5.", source: "Texto confirmado na ficha do nível 15." },
    {
      name: "Nível 20 — Call for Backup / Barrage Time",
      description:
        "Call for Backup reduz a resistência a crítico dos alvos de Bounty. Barrage Time faz as balas de Let the Bullets Fly ricochetearem 1 vez, com dano levemente reduzido nesse acerto.",
      source: "Texto confirmado na ficha; nível ainda bloqueado e parcialmente coberto na captura.",
    },
    { name: "Ammunition · Steel Core", description: "Ataques normais têm probabilidade de disparar uma steel core bullet, causando dano adicional.", source: "Painel de blessings em run." },
    { name: "Ammunition · Mercury", description: "Ataques normais têm probabilidade de disparar mercury bullets, que causam dano crescente ao mesmo alvo. O fim do texto aparece truncado no próprio jogo.", source: "Painel de blessings em run; texto truncado pelo jogo." },
    { name: "Ammunition · Tear", description: "A cada 2 acertos de special bullet, causa 1 acerto adicional de dano massivo.", source: "Painel de blessings em run." },
    { name: "Ammunition · Explosion", description: "Ataques normais têm probabilidade de disparar bombas explosivas, causando dano em área.", source: "Painel de blessings em run." },
    { name: "Ammunition Expert", description: "Cada tipo de Special Bullet disparado aumenta o ATK, até 50 acúmulos.", source: "Painel de blessings em run — é a habilidade de acúmulo de ataque citada nas runs antigas." },
    { name: "Gunsling · Loading", description: "Antes de Wild Burst ser disparado, velocidade de ataque +200%.", source: "Painel de blessings em run." },
    { name: "Gunsling · Frenzy", description: "Ao liberar Wild Bursts, a velocidade de ataque aumenta.", source: "Painel de blessings em run; texto truncado pelo jogo." },
    { name: "Gunsling · Improvement", description: "A cada 1 uso de Wild Barrage, a quantidade de balas do próximo uso aumenta em +1.", source: "Painel de blessings em run." },
    { name: "Spearmanship · Double Shot", description: "Ataques têm chance de burst adicional.", source: "Painel de blessings em run." },
    { name: "Spearmanship · Kinetic Energy", description: "Cada ataque aumenta a velocidade de ataque.", source: "Painel de blessings em run." },
    { name: "Barrage Time (dourada)", description: "Let the Bullets Fly tem chance de ser liberada 2 vezes consecutivas.", source: "Painel de blessings em run." },
    { name: "Call for Support (dourada)", description: "O ataque tem probabilidade de travar no inimigo e chamar suporte para lançar uma bomba de perseguição.", source: "Painel de blessings em run." },
  ],
  kit: {
    engine:
      "Três coisas se multiplicam: quantos tipos de munição especial ela já disparou, quão rápido ela atira e quantas balas a rajada leva. A peça que amarra tudo é a Ammunition Expert, que sobe o ATK por tipo de Special Bullet disparado até 50 acúmulos — o que faz a variedade valer mais que a profundidade, ao contrário de quase todo o resto do elenco.",
    loops: [
      {
        name: "Variedade vale mais que repetição",
        text: "Ammunition Expert conta tipos de bala especial, não disparos. Steel Core, Mercury, Tear e Explosion são quatro fontes distintas, e pegar as quatro sobe o acúmulo mais rápido do que aprofundar uma. É a regra de draft mais contraintuitiva da wiki de personagens.",
      },
      {
        name: "Velocidade é o denominador comum",
        text: "Spearmanship · Kinetic Energy sobe a velocidade a cada ataque, Gunsling · Loading dá +200% antes do Wild Burst e Gunsling · Frenzy sobe de novo ao liberá-lo. Como as munições especiais saem por chance no ataque normal, velocidade aumenta ao mesmo tempo as chances de proc, os acúmulos da Ammunition Expert e a frequência da ultimate.",
      },
      {
        name: "A ultimate conta ataques, não segundos",
        text: "Let the Bullets Fly dispara depois de 8 ataques. Isso liga a rajada diretamente à velocidade de ataque, e é por isso que as peças de velocidade rendem duas vezes: encurtam o caminho até a ultimate e aumentam o dano no meio do caminho.",
      },
      {
        name: "A rajada cresce sozinha",
        text: "Gunsling · Improvement soma +1 bala ao próximo uso a cada uso, o talento de nível 15 soma +5 de uma vez e o nível 20 faz as balas ricochetearem. A dourada Barrage Time ainda dá chance de a ultimate sair duas vezes seguidas. A rajada é a única parte do kit que acumula entre ativações.",
      },
    ],
  },
  combos: [
    {
      name: "Colecionar munição",
      status: "confirmado",
      needs: ["Ammunition · Steel Core", "Ammunition · Mercury", "Ammunition · Tear", "Ammunition · Explosion", "Ammunition Expert"],
      text: "Quatro tipos diferentes alimentam o mesmo contador de 50 acúmulos de ATK. Recusar uma munição nova para reforçar uma já pega é o erro típico da ficha dela — e a Ammunition · Tear ainda soma um acerto massivo a cada 2 acertos de bala especial, o que premia justamente ter muitas fontes.",
    },
    {
      name: "Ciclo de velocidade",
      status: "confirmado",
      needs: ["Spearmanship · Kinetic Energy", "Gunsling · Loading", "Gunsling · Frenzy"],
      text: "Cada peça de velocidade encurta o caminho até os 8 ataques da ultimate e aumenta a frequência de proc das munições no trajeto. Em batalha os acúmulos de Sharpness foram observados subindo de 10 para 20 e levando o ATK de 20,8K para 22,69K — um dos poucos ganhos medidos com número da wiki inteira.",
    },
    {
      name: "Rajada dupla",
      status: "hipótese",
      needs: ["Barrage Time (dourada)", "Gunsling · Improvement", "Wild Rapid Fire (nível 15)", "Barrage Time (nível 20)"],
      text: "A dourada dobra a ultimate, o Improvement soma uma bala por uso acumulando ao longo da luta, o nível 15 soma cinco de uma vez e o 20 faz cada bala ricochetear. Como o acúmulo do Improvement não zera, essa rota fica desproporcionalmente forte em luta longa.",
    },
  ],
  strengths: [
    "Escala em três eixos independentes ao mesmo tempo: tipos de munição, velocidade de ataque e tamanho da rajada",
    "A velocidade rende duas vezes — encurta o caminho até a ultimate e aumenta os procs no trajeto",
    "É uma das raras fichas com ganho medido em batalha: Sharpness de 10 para 20 acúmulos, ATK de 20,8K para 22,69K",
    "A Ammunition · Explosion dá dano em área a uma classe que normalmente só bate em alvo único",
  ],
  weaknesses: [
    "Os 50 acúmulos da Ammunition Expert demoram, o que a deixa fraca justamente no começo da run",
    "Nenhuma peça defensiva no kit documentado, e a classe Archer já é frágil por posição",
    "Dois textos continuam truncados pelo próprio jogo — Ammunition · Mercury e Gunsling · Frenzy —, o que deixa buracos na leitura do motor",
    "A ultimate conta ataques, então qualquer coisa que interrompa a cadência empurra a rajada para depois",
    "O ramo Bounty (Call for Backup, alvos de Bounty) aparece nos talentos sem que nenhuma tela explique como um alvo vira Bounty",
  ],
  builds: [
    {
      name: "Barrage de munições",
      status: "confirmada",
      summary: "Converte frequência de ataques e variedade de munições em escala de dano. O motor por trás (interpretação provável): a diversidade de balas especiais alimenta o Ammunition Expert (até 50 acúmulos de ATK), Attack Speed multiplica a frequência das ativações e o Barrage Time converte o acúmulo em limpeza de área dobrando a ultimate.",
      priorities: ["Ammunition Expert", "Gunsling · Loading", "Ammunition · Steel Core", "Ammunition · Mercury ou Tear", "Spearmanship · Double Shot", "Barrage Time +1"],
    },
  ],
  synergies: ["Attack Speed", "Efeitos que aumentam o número de balas", "Boss vulnerável a Archer"],
  evidence: [
    "Ficha SSR Bounty Hunter — Eria · Ironwing no nível 15",
    "Run dificuldade 5: MVP com 4,31M",
    "Run andar 15: 17,58M sob efeitos que prejudicavam atiradores",
    "Painéis de blessings de múltiplas runs (22-23 ago.)",
  ],
  evidenceImages: [
    { src: "/screenshots/bounty-hunter/profile-level-15.jpg", alt: "Ficha SSR Bounty Hunter — Eria · Ironwing no nível 15" },
    { src: "/screenshots/bounty-hunter/blessings-run-level-6.jpg", alt: "Painel de blessings com Barrage Time e Gunsling Improvement" },
    { src: "/screenshots/bounty-hunter/blessings-igris.jpg", alt: "Painel de blessings com Call for Support contra o boss Igris" },
    { src: "/screenshots/runs/marksman-counter-bounty-hunter.jpg", alt: "Árvore da Bounty Hunter no andar 15" },
    { src: "/screenshots/runs/marksman-counter-result.jpg", alt: "Bounty Hunter encerra o andar 15 com 17,58M de dano" },
  ],
  pending: [
    "Recuperar o texto completo de Ammunition · Mercury e Gunsling · Frenzy (truncados pelo próprio jogo)",
    "Documentar o Blessing Bestiary pela tela própria (fora de run)",
    "Identificar o inimigo responsável por confiscar munição de Marksman",
  ],
};
