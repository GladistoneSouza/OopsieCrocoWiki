export type CombatRun = {
  title: string;
  stage: string;
  timerAtBoss: string;
  status: "confirmada na tela" | "observada em run";
  summary: string;
  damage: { hero: string; damage: string; note?: string }[];
  highlights: string[];
  evidenceImages: { src: string; alt: string }[];
};

export const combatRuns: CombatRun[] = [
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
    title: "Bounty Hunter contra o counter de atirador", stage: "Andar 15", timerAtBoss: "1:45", status: "confirmada na tela",
    summary: "Mesmo enfrentando efeitos que paralisam Arqueiros e confiscam munição de Marksman, Bounty Hunter terminou com 17,58M.",
    damage: [
      { hero: "Sword Demon", damage: "23,96M", note: "maior dano" }, { hero: "Bounty Hunter", damage: "17,58M", note: "sob counter direto" },
      { hero: "Robin", damage: "3,94M" }, { hero: "Rumble", damage: "206K" }, { hero: "Onmyoji", damage: "186K", note: "suporte" },
    ],
    highlights: [
      "Steel Core, Mercury, Double Shot, munições especiais e Loading +200% convertem velocidade de ataque em múltiplos procs.",
      "Barrage Time +1 permite uma segunda ativação consecutiva da ultimate.",
      "Sword Demon repetiu o patamar da run anterior: 23,79M e 23,96M em fases diferentes.",
      "Yin and Yang Twins ampliou buffs para dois aliados adicionais e debuffs para dois inimigos adicionais.",
    ],
    evidenceImages: [
      { src: "/screenshots/runs/marksman-counter-result.jpg", alt: "Resultado com Sword Demon em 23,96M e Bounty Hunter em 17,58M" },
      { src: "/screenshots/runs/marksman-counter-bounty-hunter.jpg", alt: "Árvore da Bounty Hunter contra inimigos que neutralizam atiradores" },
      { src: "/screenshots/runs/marksman-counter-sword-demon.jpg", alt: "Árvore do Sword Demon na segunda run" },
      { src: "/screenshots/runs/shrinkshell-seaweed.jpg", alt: "Ficha do Shrinkshell Seaweed e Seaweed Tangle" },
      { src: "/screenshots/runs/marksman-bullets-confiscated.jpg", alt: "Mensagens de confisco das balas de Marksman" },
    ],
  },
];
