export type CombatRun = {
  title: string;
  stage: string;
  timerAtBoss?: string;
  markerLabel?: string;
  status: "confirmada na tela" | "observada em run";
  summary: string;
  damage: { hero: string; damage: string; note?: string }[];
  highlights: string[];
  evidenceImages: { src: string; alt: string }[];
};

export const combatRuns: CombatRun[] = [
  {
    title: "Primeira tentativa do 83 Moonshade",
    stage: "Estágio 83",
    timerAtBoss: "derrota no nível 10/15",
    markerLabel: "RESULTADO",
    status: "confirmada na tela",
    summary: "A primeira tentativa documentada de Moonshade não chegou à Corrosive Empress: caiu na sequência do elite Octopus King. O mapa mostrou Restrain contra Summon e fraqueza azul nos alvos principais.",
    damage: [
      { hero: "Bounty Hunter", damage: "Lv.7 na tentativa", note: "linha de munições" },
      { hero: "Onmyoji", damage: "Lv.5 na tentativa", note: "escudos e controle" },
      { hero: "Sword Demon", damage: "Lv.4 na tentativa", note: "Fear/Blade Storm" },
      { hero: "Fire Spirit Master", damage: "Lv.2 na tentativa", note: "invocações" },
    ],
    highlights: [
      "Primeira escolha confirmada: Sword Demon + Onmyoji. Dragon Warrior e Fire Spirit Master também apareceram no conjunto inicial, mas não foram os dois escolhidos.",
      "Bounty Hunter entrou cedo e acumulou pacote completo de munições: Steel Core, Loading, Mercury, Ammunition Expert e Kinetic Energy.",
      "A tentativa chegou ao nível 9 com Sword Demon, Onmyoji, Fire Spirit Master e Bounty Hunter vivos; a primeira derrota apareceu antes do nível 10, com opção de reviver por anúncio.",
      "O resultado final foi derrota no nível 10/15, ainda na sequência do elite Octopus King, antes de enfrentar a Corrosive Empress.",
      "A recompensa de derrota confirmou materiais de classe e upgrade, mas não trouxe painel de dano final preservado.",
    ],
    evidenceImages: [
      { src: "/screenshots/campaign/stage-83-first-try-opening-pick.jpg", alt: "Primeira escolha da tentativa do estágio 83 com Sword Demon e Onmyoji selecionados" },
      { src: "/screenshots/campaign/stage-83-first-try-bounty-build.jpg", alt: "Linha de munições da Bounty Hunter na primeira tentativa do estágio 83" },
      { src: "/screenshots/campaign/stage-83-first-try-level-9.jpg", alt: "Primeira tentativa do estágio 83 chegando ao nível 9" },
      { src: "/screenshots/campaign/stage-83-first-try-revive.jpg", alt: "Primeira derrota da tentativa do estágio 83 com opção de reviver" },
      { src: "/screenshots/campaign/stage-83-first-try-defeat-reward.jpg", alt: "Derrota final da primeira tentativa do estágio 83 no nível 10/15" },
    ],
  },
  {
    title: "A barreira de regeneração",
    stage: "Estágio 75",
    timerAtBoss: "sem painel preservado",
    markerLabel: "HISTÓRICO",
    status: "observada em run",
    summary: "A conta ficou presa contra uma formação com cura muito alta e investida no alvo de menor HP; a passagem exigiu reduzir a regeneração e manter pressão contínua.",
    damage: [],
    highlights: [
      "Anti-heal e dano contínuo foram priorizados para impedir que a regeneração apagasse o progresso da luta.",
      "A investida contra o alvo de menor HP exigiu proteger a unidade mais frágil da composição.",
      "Many Shadows, ultimate do Sword Demon, criou o clone que repetia Blade Storm e ampliava Fear, dano e pressão sobre a cura.",
      "A identidade exata de todos os inimigos e o painel de dano ainda dependem da recuperação dos prints antigos.",
    ],
    evidenceImages: [],
  },
  {
    title: "Clear do 82 Silver Beach",
    stage: "Estágio 82",
    timerAtBoss: "snapshot pós-clear",
    markerLabel: "REGISTRO",
    status: "confirmada na tela",
    summary: "Clear confirmado com Sword Demon no time final. O snapshot pós-82 registrou 132,02K de poder de conta no mapa, conta Lv.85 e Global Critical DMG de 672,2%.",
    damage: [
      { hero: "Kazer’s Darkblade / Sword Demon", damage: "Lv.15 · 10/60", note: "Calamity" },
      { hero: "Warrior vermelho", damage: "Lv.5 · 1/10", note: "frontline" },
      { hero: "Mia Morning Dew / Fire Spirit Master", damage: "Lv.16 · 17/60", note: "Summon" },
      { hero: "Suporte de chapéu", damage: "Lv.16 · 0/60", note: "Support" },
      { hero: "Bounty Hunter / Gunner", damage: "Lv.15 · 19/60", note: "Archer" },
    ],
    highlights: [
      "Composição efetivamente usada para passar o 82, separada dos heróis temporários vistos dentro da run.",
      "O estágio 82 destravou o farming AFK registrado como 395 gold/h + 17 recursos/h, com limite exibido de 12 horas.",
      "A recompensa AFK/Raid mostrou EXP, gold, materiais de upgrade, livros/scrolls, equipamentos Lv.80 e materiais coloridos de progressão.",
      "O pacote de US$20 e o UR Way seguem fora do registro por falta de prints claros.",
    ],
    evidenceImages: [
      { src: "/screenshots/campaign/stage-82-clear-hero-comp.png", alt: "Composição usada no clear do estágio 82 Silver Beach" },
      { src: "/screenshots/campaign/stage-82-afk-rewards.png", alt: "AFK Rewards do estágio 82 Silver Beach com 395 gold/h e 17 recursos/h" },
    ],
  },
  {
    title: "Exército de invocações", stage: "Andar 15", timerAtBoss: "1:43", status: "confirmada na tela",
    summary: "Sword Demon dominou as ondas com clones, Blade Storm, Fear e autocura; Shadow Wolf acelerou o dano contra o boss.",
    damage: [
      { hero: "Sword Demon", damage: "23,79M", note: "maior dano" },
      { hero: "Shadow Wolf", damage: "9,71M", note: "execução no boss" },
      { hero: "Necromancer Apprentice", damage: "1,21M", note: "invocações e utilidade" },
    ],
    highlights: [
      "Many Shadows cria um clone a cada 8 segundos e o clone usa Blade Storm.",
      "Bloody Swordsmanship transforma Blade Storm em fonte de dano e recuperação de HP.",
      "Dreadblade, Fear Attacks e Fear Abyss formam o núcleo de Fear, elevando o limite observado para 20 camadas.",
      "Onmyoji sustentou a formação com cura, escudos e redução de dano; o Necromancer aumentou o número de unidades no campo.",
    ],
    evidenceImages: [
      { src: "/screenshots/runs/summon-army-result.jpg", alt: "Resultado da run com Sword Demon em 23,79 milhões de dano" },
      { src: "/screenshots/runs/summon-army-sword-demon.jpg", alt: "Árvore do Sword Demon na composição de invocações" },
      { src: "/screenshots/runs/summon-army-necromancer.jpg", alt: "Árvore do Necromancer Apprentice na composição" },
      { src: "/screenshots/runs/summon-army-onmyoji.jpg", alt: "Árvore do Onmyoji na composição de invocações" },
    ],
  },
  {
    title: "Bounty Hunter contra inimigos que atrapalham atiradores", stage: "Andar 15", timerAtBoss: "1:45", status: "confirmada na tela",
    summary: "Nesta tentativa específica, apareceram efeitos que paralisavam Archer e confiscavam munição de Marksman. Mesmo assim, Bounty Hunter terminou com 17,58M.",
    damage: [
      { hero: "Sword Demon", damage: "23,96M", note: "maior dano" }, { hero: "Bounty Hunter", damage: "17,58M", note: "sob mecânica desfavorável" },
      { hero: "Robin", damage: "3,94M" }, { hero: "Rumble", damage: "206K" }, { hero: "Onmyoji", damage: "186K", note: "suporte" },
    ],
    highlights: [
      "Steel Core, Mercury, Double Shot, munições especiais e Loading +200% convertem velocidade de ataque em múltiplas ativações.",
      "Barrage Time +1 permite uma segunda ativação consecutiva da ultimate.",
      "Sword Demon repetiu o patamar da tentativa anterior: 23,79M e 23,96M em fases diferentes.",
      "Yin and Yang Twins ampliou buffs para dois aliados adicionais e debuffs para dois inimigos adicionais.",
    ],
    evidenceImages: [
      { src: "/screenshots/runs/marksman-counter-result.jpg", alt: "Resultado com Sword Demon em 23,96M e Bounty Hunter em 17,58M" },
      { src: "/screenshots/runs/marksman-counter-bounty-hunter.jpg", alt: "Árvore da Bounty Hunter contra inimigos que atrapalham atiradores" },
      { src: "/screenshots/runs/marksman-counter-sword-demon.jpg", alt: "Árvore do Sword Demon na segunda tentativa" },
      { src: "/screenshots/runs/shrinkshell-seaweed.jpg", alt: "Ficha do Shrinkshell Seaweed e Seaweed Tangle" },
      { src: "/screenshots/runs/marksman-bullets-confiscated.jpg", alt: "Mensagens de confisco das balas de Marksman" },
    ],
  },
];

export const coreTeam = [
  { kicker: "FRONTLINE + FEAR", name: "Kazer’s Darkblade", text: "Tanka, aplica Fear e converte os acúmulos em dano. A cura durante Blade Storm é o próximo breakpoint importante." },
  { kicker: "CARRY DE BOSS", name: "Shadow Wolf", text: "Escala Blood, múltiplos Bites e dano com HP baixo." },
  { kicker: "INFRAESTRUTURA", name: "Sakura", text: "Cura, shield, mana e Yang: Rapid para acelerar o time inteiro." },
  { kicker: "CORPOS + AGGRO", name: "Maya", text: "Esqueletos absorvem ataques, protegem a retaguarda e mantêm dano constante." },
];

export const fifthSlotRule = {
  title: "Quinta vaga flexível",
  text: "Archer quando falta DPS; Controller quando uma interrupção decide a luta; Tank apenas quando frontline e summons não bastam; segundo Summon quando mais corpos e aggro oferecem mais valor.",
};
