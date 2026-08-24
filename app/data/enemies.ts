export const newlyDocumentedEnemies = [
  { name: "Shrinkshell Seaweed", skill: "Seaweed Tangle", effect: "Após cada 4 ataques, paralisa heróis Archer por 3 segundos.", confidence: "confirmada na tela" },
  { name: "Inimigo confiscador de munição", skill: "Confiscating the Marksman's bullets!", effect: "Durante a run, mensagens indicaram confisco ou neutralização das balas de personagens Marksman. O nome do inimigo e a regra completa ainda precisam de ficha própria.", confidence: "observada em run" },
  { name: "Catfish Monster", skill: "Mud Armor", effect: "Começa a batalha com Mud Armor, reduzindo o dano recebido. A armadura desaparece quando o HP cai abaixo de 40%.", confidence: "confirmada na tela" },
  { name: "Hardshell Rhinoceros Beetle", skill: "Iron Steel Shell", effect: "Imune a efeitos de Calamity — atrapalha diretamente Sword Demon e Lilith. Uma fala de inimigo em batalha reforça: “My shell is completely immune to the Calamity buff!”.", confidence: "confirmada na tela" },
  { name: "Mist Octopus", skill: "Blind", effect: "Aura que reduz em 50% a precisão (Accuracy) de heróis Assasin; também aplica Sluggish (reduz Attack Speed).", confidence: "confirmada na tela" },
  { name: "Nightshade Charm Fox", skill: "Emerald Leaf Offering", effect: "Encanta (charm) heróis Assasin por 15 segundos.", confidence: "confirmada na tela" },
  { name: "Hermit Crab", skill: "Shell Rebirth", effect: "Perto da morte, restaura uma grande quantidade de HP.", confidence: "confirmada na tela" },
  { name: "Cactus", skill: "Rebound", effect: "Reflete 10% do dano recebido.", confidence: "confirmada na tela" },
  { name: "Sea Anemone Monster", skill: "Bloodsucking Tentacle", effect: "Rouba vida equivalente a 100% do dano causado.", confidence: "confirmada na tela" },
  { name: "Spiny Mouse", skill: "Group Spike", effect: "A cada 4º ataque, causa 100% do ATK em dano de área.", confidence: "confirmada na tela" },
  { name: "Seed Flower", skill: "Parasite Bullet", effect: "Atinge heróis Mage e reduz a recuperação de Energia deles em 25% (Restrain contra Mage).", confidence: "confirmada na tela" },
  { name: "Poison Bug", skill: "Poison Bullet", effect: "30% de chance de aplicar Poison; cada acúmulo causa 1% do HP máximo por segundo em dano verdadeiro até o fim da batalha.", confidence: "confirmada na tela" },
  { name: "Bigmouth Man-eating Flower", skill: "Silent Kiss", effect: "A cada 5 segundos devora 1 unidade invocada — silencia e mata instantaneamente. Counter direto de composições de summon.", confidence: "confirmada na tela" },
  { name: "Crab Monster", skill: "Counterstrike", effect: "Ganha um escudo de 3% do HP máximo sempre que é atacado.", confidence: "confirmada na tela" },
] as const;

export const fieldDebuffs = [
  { name: "Fear", text: "Texto oficial: dano contínuo + redução do efeito de cura, por acúmulo. Limite prático observado passou de 20 (com Fear Abyss) e chegou a 30 acúmulos num Stone Giant.", confidence: "confirmada na tela" },
  { name: "Poison", text: "Cada acúmulo causa 1% do HP máximo por segundo em dano verdadeiro até o fim da batalha.", confidence: "confirmada na tela" },
  { name: "Sluggish", text: "Reduz Attack Speed. Aplicado por vários inimigos (Goblin Warrior, Catfish Monster, Mist Octopus).", confidence: "confirmada na tela" },
];

export type DocumentedBoss = {
  name: string;
  context: string;
  weakness?: string;
  skills: { name: string; text: string }[];
  notes?: string;
  image?: string;
};

export const documentedBosses: DocumentedBoss[] = [
  {
    name: "Land Shark King",
    context: "Elite de dungeon (Level 10 observado)",
    weakness: "Fraqueza: Archer",
    skills: [
      { name: "Charge", text: "Lança uma onda de investida contra o alvo mais distante." },
      { name: "Hardened Hide", text: "Começa a batalha com um escudo que bloqueia 40 instâncias de dano." },
    ],
    image: "/screenshots/enemies/land-shark-king.jpg",
  },
  {
    name: "Igris",
    context: "Boss da guilda, em escada: derrotar um nível libera o seguinte, sempre com mais HP — de alguns milhões nos primeiros até a casa dos bilhões. São 3 tentativas diárias com dano acumulado",
    skills: [
      { name: "Boss Damage Boost", text: "O boss começa sem fúria. Depois de um tempo de luta (entre 50 e 80 segundos, medição exata pendente), bufa-se com +200% de dano e o valor sobe a cada segundo (+205% a +230% capturados)." },
      { name: "Boss Rage Mode", text: "No auge da escalada, o banner “Boss Rage Mode! Damage +20000%!” foi capturado — a luta vira corrida contra o relógio." },
    ],
    notes: "A progressão é sequencial, não por seleção: cada abate avança automaticamente para o nível seguinte, com HP maior. Barras registradas em níveis diferentes: 1,02B e 999,99M nos prints do repositório e 1,93B numa run relatada — não se sabe ainda se existe um nível máximo. Na run capturada, Shadow Wolf concentrou o dano (104,86M) enquanto o time inteiro caía durante o Rage Mode.",
    image: "/screenshots/enemies/igris-rage-mode.jpg",
  },
  {
    name: "Hellhound",
    context: "Boss de dungeon (Level 10)",
    weakness: "Fraco contra Calamity",
    skills: [
      { name: "Hellfire", text: "Causa dano em 3 casas do campo." },
      { name: "Frenzied Regeneration", text: "Regenera muito HP continuamente." },
    ],
    notes: "O diálogo do boss confirma que um herói Calamity neutraliza sua regeneração — sinergia direta com a redução de cura do Fear/Nightmare.",
  },
  {
    name: "Stone Giant / Mountain Titan",
    context: "Boss do estágio Bone Desert; também apareceu nomeado Mountain Titan com o mesmo kit (tradução inconsistente)",
    weakness: "Fraqueza: Archer",
    skills: [
      { name: "Seismic Wave", text: "Dano massivo em todos os inimigos + Stun." },
      { name: "Petrified Skin", text: "Nega 100 instâncias de dano." },
      { name: "Fortified Defense", text: "Cada inimigo atingido por Seismic Wave aumenta a própria DEF." },
    ],
    notes: "Numa run, Sword Demon e Bounty Hunter somaram 35M contra ele (21,43M + 13,61M).",
  },
  {
    name: "Crab Emperor",
    context: "Boss do andar 10 do Co-op Spire",
    weakness: "Fraqueza: Calamity",
    skills: [
      { name: "Shell Up", text: "Ganha um escudo massivo e causa dano em área." },
      { name: "Defense Up", text: "Enquanto encasulado, aumenta ATK e DEF continuamente." },
    ],
  },
  {
    name: "Corrupted Fungal Lord",
    context: "Boss do andar 15 (Bone Desert)",
    skills: [
      { name: "Spore Burst", text: "Atinge 3 alvos aleatórios." },
      { name: "Frenzied Regeneration", text: "Regenera muito HP." },
      { name: "Spore Proliferation", text: "Dispara 2 ondas extras, priorizando alvos com pouco HP." },
    ],
    notes: "Run registrada contra ele: Sword Demon 17,42M e Bounty Hunter 13,74M, com os pets Robin (4,33M) e Rumble no placar.",
  },
  {
    name: "Dread of the Dark Sea",
    context: "Boss do estágio 55 — Windleaf",
    skills: [
      { name: "Abyssal Toxic Mist", text: "Dano em área + Poison." },
      { name: "Shadow Water Bolt", text: "Dispara 2 projéteis que ricocheteiam." },
      { name: "Shadow Twin", text: "Mecânica única: curar o Juvenile Abyssal Shadow o converte em aliado; caso contrário, ele explode." },
    ],
    notes: "Descrição oficial: cura suas invocações e as deixa lutar por ele. O elite do estágio é o Pig Overlord (Bloodthirsty Charge no alvo de menor HP; Rising Valor reseta a investida a cada abate).",
  },
  {
    name: "Corrosive Empress",
    context: "Boss do estágio 83 — Moonshade",
    weakness: "Fraqueza: classe Beast",
    skills: [
      { name: "Devour", text: "Arremessa uma gosma para engolir 1 alvo, priorizando unidades invocadas." },
      { name: "Split", text: "Ao morrer, divide-se em numerosas pequenas slimes." },
      { name: "Regeneration", text: "Restaura HP continuamente; a cura escala com o tempo de canalização." },
    ],
    notes: "Descrição oficial: monstro que gosta de devorar inimigos e tem poderosa capacidade de autocura. O elite do estágio é Octopus King, fraco contra a classe azul exibida na tela, com descrição de retaliação por vingança. Registro feito antes da primeira tentativa: Wave 0/15.",
    image: "/screenshots/campaign/stage-83-moonshade-overview.png",
  },
];

export const enemyShots = [
  { src: "/screenshots/enemies/catfish-monster.jpg", alt: "Ficha do Catfish Monster com Mud Armor", caption: "Catfish Monster: Mud Armor até o HP cair abaixo de 40%." },
  { src: "/screenshots/enemies/hardshell-rhinoceros-beetle.jpg", alt: "Ficha do Hardshell Rhinoceros Beetle imune a Calamity", caption: "Hardshell Rhinoceros Beetle: imune a efeitos de Calamity." },
  { src: "/screenshots/enemies/land-shark-king.jpg", alt: "Ficha do boss Land Shark King", caption: "Land Shark King: escudo de 40 instâncias e fraqueza contra Archer." },
  { src: "/screenshots/enemies/igris-rage-mode.jpg", alt: "Boss Igris em Rage Mode com dano +20000%", caption: "Igris: Rage Mode com dano +20000% no fim da luta." },
  { src: "/screenshots/campaign/stage-83-moonshade-overview.png", alt: "Estágio 83 Moonshade com Corrosive Empress e Octopus King", caption: "Moonshade (estágio 83): Corrosive Empress, Octopus King e fraquezas exibidas antes da primeira tentativa." },
  { src: "/screenshots/campaign/stage-83-regeneration.png", alt: "Skill Regeneration da Corrosive Empress no estágio 83", caption: "Regeneration: cura contínua que escala com o tempo de canalização." },
  { src: "/screenshots/campaign/stage-83-devour.png", alt: "Skill Devour da Corrosive Empress no estágio 83", caption: "Devour: prioriza unidades invocadas." },
];
