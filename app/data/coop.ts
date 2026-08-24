export const coopRules = [
  { title: "10 andares", text: "O objetivo é sobreviver e vencer todos." },
  { title: "Dois formatos", text: "Alguns intervalos são 2 escolhas entre 4 cartas; outros são 1 escolha entre 3." },
  { title: "Tempo limitado", text: "Se o cronômetro terminar, o jogo escolhe automaticamente." },
  { title: "Sem refresh", text: "Personagens e habilidades oferecidos são aleatórios." },
  { title: "Morte encerra a tentativa", text: "Não existe revive ou segunda chance." },
];

export const mvpRun = {
  kicker: "RUN DOCUMENTADA • DIFICULDADE 5",
  hero: "Bounty Hunter",
  damage: "4,31M",
  damageLabel: "DANO • MVP",
  sharePercent: 71.72,
  text: "71,72% do dano da batalha veio do time aliado. A Pistoleira causou cerca de 4,6× o dano do melhor herói do parceiro.",
  tags: ["Steel Core", "Loading +200%", "Mercury", "Explosion", "Ammo Expert", "Barrage Time"],
};

export const pickStages = [
  { kicker: "ESTÁGIO 1 • SEMPRE 2/4", title: "Escolha a dupla inicial", text: "Sempre aparecem quatro personagens e você escolhe dois. Eles entram somente com as habilidades gratuitas já desbloqueadas pelo próprio nível." },
  { kicker: "ESTÁGIO 2 • 2/4", title: "Expandir ou evoluir", text: "As quatro cartas misturam personagens novos e upgrades dos já escolhidos. É possível pegar 2 upgrades, 2 personagens ou 1 de cada." },
  { kicker: "DEPOIS • PADRÃO A CONFIRMAR", title: "2/4 ou 1/3", text: "Os intervalos alternam entre escolher duas de quatro e escolher uma de três. Ainda não sabemos quais andares usam cada formato." },
];

export const counterRule = {
  title: "Contador do personagem",
  text: "Não começa automaticamente em 2. O valor inicial depende das habilidades gratuitas desbloqueadas pelo nível permanente. Personagens evoluídos costumam entrar com duas; a Artemis, no nível observado, entraria zerada. Cada upgrade escolhido na run acrescenta +1.",
};

export const pickGallery = [
  { src: "/screenshots/coop-initial-pick.jpg", alt: "Primeira escolha do Co-op com quatro personagens", caption: "Estágio 1: quatro personagens, escolha obrigatória de dois." },
  { src: "/screenshots/coop-mixed-pick.jpg", alt: "Escolha do estágio 2 misturando personagens e upgrades", caption: "Estágio 2: personagens novos e upgrades podem aparecer juntos." },
];

export const coopCosts = [
  { kicker: "CUSTO DO LÍDER", title: "1 ticket + 20 stamina", text: "O jogador que convida consome um ticket por partida. O primeiro ticket é recuperado automaticamente todos os dias." },
  { kicker: "CUSTO DO ASSISTENTE", title: "20 stamina", text: "Ambos recebem recompensas de conclusão, mas partidas como assistente não contam para o ranking." },
  { kicker: "DESCONEXÃO", title: "Progresso preservado", text: "Se houver desconexão durante a partida, a recompensa correspondente ao progresso atual é enviada pelo correio." },
  { kicker: "DESBLOQUEIO DA DIFICULDADE 7", title: "Capítulo 70 + dificuldade 6", text: "É necessário alcançar o capítulo 70 e concluir a dificuldade anterior." },
];

export const slimeQueen = {
  kicker: "BOSS • DIFICULDADE 6",
  weakness: "Fraqueza: Invocador",
  name: "Slime Queen",
  description: "Devora inimigos e possui forte capacidade de autocura.",
  skills: [
    { name: "Devour", text: "Arremessa uma massa de slime que engole um alvo, priorizando unidades invocadas." },
    { name: "Split", text: "Ao morrer, divide-se em numerosos slimes menores." },
    { name: "Regeneration", text: "Restaura HP continuamente; a cura aumenta conforme o tempo de canalização." },
  ],
};

export const dropRates = {
  kicker: "DROP • DIFICULDADE 1",
  minimum: "Equipamento ≥ nível 81*",
  rows: [
    { quality: "normal", label: "Normal", chance: "10%" },
    { quality: "excellent", label: "Excellent", chance: "35%" },
    { quality: "rare", label: "Rare", chance: "30%" },
    { quality: "epic", label: "Epic", chance: "20%" },
    { quality: "legendary", label: "Legendary", chance: "5%" },
  ],
  note: "*O nível mínimo exibido escala com o nível do Adventurer. A quantidade de peças depende das ondas vencidas: mais ondas, recompensa maior.",
};

export const difficulty4Enemies = [
  { name: "Mutated Slime", skill: "Death Splitting", text: "Sempre que é atingido por um Arqueiro, possui 40% de chance de se dividir e criar uma nova cópia." },
  { name: "Goblin Warrior", skill: "Stun ATK", text: "Ataques básicos possuem 40% de chance de atordoar o alvo durante 1 segundo. Também foi observado Sluggish, que reduz Attack Speed." },
  { name: "Ammonite Beast", skill: "Charged Blast", text: "Os ataques básicos exigem uma carga de 3 segundos e, quando disparados, causam dano em área." },
];

export type FloorEntry = { mob: "slime" | "goblin" | "hood" | "shell"; label: string };

export const floorMap: { floor: string; entries?: FloorEntry[]; unknown?: string }[] = [
  { floor: "1", entries: [{ mob: "slime", label: "Mutated Slime ×2" }] },
  { floor: "2", entries: [{ mob: "slime", label: "Mutated Slime ×2" }, { mob: "hood", label: "Encapuzado verde ×4" }] },
  { floor: "3", entries: [{ mob: "slime", label: "Mutated Slime ×2" }, { mob: "goblin", label: "Goblin Warrior ×2" }, { mob: "hood", label: "Encapuzado verde ×3" }, { mob: "shell", label: "Ammonite Beast ×2" }] },
  { floor: "4", entries: [{ mob: "slime", label: "Mutated Slime ×3" }, { mob: "goblin", label: "Goblin Warrior ×2" }, { mob: "hood", label: "Encapuzado verde ×2" }, { mob: "shell", label: "Ammonite Beast ×4" }] },
  { floor: "5", entries: [{ mob: "slime", label: "Mutated Slime ×3" }, { mob: "goblin", label: "Goblin Warrior ×3" }, { mob: "hood", label: "Encapuzado verde ×3" }, { mob: "shell", label: "Ammonite Beast ×3" }] },
  { floor: "6", unknown: "Composição ainda não registrada com clareza." },
  { floor: "7", unknown: "Ammonite Beast confirmado; formação completa encoberta pela ficha." },
  { floor: "8–10", unknown: "Composição ainda não registrada com clareza." },
];

export const enemyGallery = [
  { src: "/screenshots/mutated-slime.jpg", alt: "Ficha do inimigo Mutated Slime", caption: "Mutated Slime: ataques de Arqueiro podem multiplicar a onda." },
  { src: "/screenshots/goblin-warrior.jpg", alt: "Ficha do inimigo Goblin Warrior", caption: "Goblin Warrior: 40% de stun por ataque básico." },
  { src: "/screenshots/ammonite-beast.jpg", alt: "Ficha do inimigo Ammonite Beast", caption: "Ammonite Beast: carrega por 3 segundos e causa dano em área." },
];

export const victoryReward = {
  image: "/screenshots/coop-victory-reward.jpg",
  kicker: "RECOMPENSA DE VITÓRIA",
  title: "O pacote vai além dos equipamentos",
  text: "Uma conclusão documentada entregou ouro, EXP, moedas/recursos, equipamentos de várias qualidades, livros de slot e gemas. A tela também mostrou limite diário de resgates e opção de Double Claim pelo Weekly Pass.",
  note: "As quantidades e raridades variam; o print registra uma run específica, não uma tabela fixa.",
};

export const rankingNote = {
  title: "Ranking observado",
  text: "Conta no 15º lugar com progresso 5–10. O placar registra dificuldade e andar alcançado; líderes recebem recompensas únicas pela primeira conclusão de cada dificuldade.",
};

export const coopGallery = [
  { src: "/screenshots/coop-difficulty-6.jpg", alt: "Tela da dificuldade 6 do Co-op Spire", title: "Dificuldade 6", caption: "Slime Queen, fraqueza contra Invocador e recompensas do líder." },
  { src: "/screenshots/slime-queen-regeneration.jpg", alt: "Ficha da Slime Queen mostrando Regeneration", title: "Ficha do boss", caption: "Regeneration restaura HP e escala com o tempo de canalização." },
  { src: "/screenshots/coop-ranking.jpg", alt: "Ranking do Co-op Spire", title: "Ranking", caption: "Conta L2darkness no 15º lugar, com progresso 5–10." },
  { src: "/screenshots/coop-drop-rates.jpg", alt: "Probabilidades de equipamentos na dificuldade 1", title: "Drop da dificuldade 1", caption: "Probabilidades oficiais exibidas dentro do jogo." },
];
