export type EquipmentLayer = {
  n: string;
  title: string;
  text: string;
};

export type DismantleRow = {
  quality: "normal" | "excellent" | "rare" | "epic" | "legendary";
  qualityLabel: string;
  level: number;
  gold: number;
  material: number;
};

export type RefiningEffect = {
  effect: string;
  value: string;
  target: string;
  slot: string;
  cost: number;
  image: string;
};

export const rarities = [
  { name: "R", color: "Azul", note: "Base da progressão de heróis" },
  { name: "SR", color: "Roxo", note: "Intermediário" },
  { name: "SSR", color: "Dourado", note: "Heróis e recursos valiosos" },
  { name: "SP", color: "Vermelho", note: "Acima do SSR" },
  { name: "UR", color: "Colorido", note: "Tier mais raro observado" },
];

export const equipmentLayers: EquipmentLayer[] = [
  { n: "01", title: "Raridade", text: "Define o tier estrutural da peça. Um Mythic vermelho pode superar um Legendary dourado mesmo alguns níveis abaixo." },
  { n: "02", title: "Nível", text: "Eleva o atributo-base dentro do mesmo tier. É importante, mas não deve ser comparado isoladamente." },
  { n: "03", title: "Aprimoramento", text: "O valor +58, +59 e semelhantes representa o reforço aplicado à peça." },
  { n: "04", title: "Gemas", text: "Cada peça recebe até cinco bônus. Eles podem fortalecer classe, personagem, modo, tipo de inimigo ou condição de combate." },
  { n: "05", title: "Refino", text: "Rola atributos e tem 20% de chance de gerar um efeito especial. Efeitos úteis devem ser travados antes de novas tentativas." },
];

export const gemBonuses: [string, string, string][] = [
  ["Shadow Wolf", "+15% dano", "Armadura"],
  ["Assassino", "+35% dano", "Arma + anel + escudo"],
  ["Elite e boss", "+64% dano", "Arma + armadura"],
  ["Alvo acima de 70% HP", "+50% dano", "Arma + anel"],
  ["Arqueiro", "+12,5% dano", "Capacete"],
  ["Primeiros 5 andares", "+64% dano", "Colar + escudo"],
];

export const refiningEffects: RefiningEffect[] = [
  { effect: "Stage Mastery", value: "+14,32%", target: "Stage Battle Damage", slot: "Arma", cost: 210, image: "/screenshots/refining/stage-mastery.jpg" },
  { effect: "Dungeon Mastery", value: "+14,85%", target: "Dungeon Battle Damage", slot: "Arma", cost: 210, image: "/screenshots/refining/dungeon-mastery.jpg" },
  { effect: "Co-op Spire Mastery", value: "+11,74%", target: "Co-op Spire Battle Damage", slot: "Colar", cost: 232, image: "/screenshots/refining/coop-spire-mastery.jpg" },
  { effect: "Master of All Trades", value: "+3,93% / +3,93%", target: "All Damage / Damage Reduction com 4 classes", slot: "Anel", cost: 246, image: "/screenshots/refining/master-all-trades.jpg" },
  { effect: "Assassin Emblem", value: "+7,31%", target: "Assassin Hero Damage", slot: "Armadura", cost: 252, image: "/screenshots/refining/assassin-emblem.jpg" },
  { effect: "Archer Emblem", value: "+11,27%", target: "Archer Hero Damage", slot: "Capacete", cost: 193, image: "/screenshots/refining/archer-emblem.jpg" },
];

export const dismantleRows: DismantleRow[] = [
  { quality: "normal", qualityLabel: "Normal", level: 80, gold: 179, material: 36 },
  { quality: "excellent", qualityLabel: "Excellent", level: 80, gold: 297, material: 72 },
  { quality: "excellent", qualityLabel: "Excellent", level: 88, gold: 366, material: 90 },
  { quality: "rare", qualityLabel: "Rare", level: 88, gold: 514, material: 135 },
  { quality: "epic", qualityLabel: "Epic", level: 83, gold: 585, material: 234 },
  { quality: "epic", qualityLabel: "Epic", level: 86, gold: 633, material: 252 },
  { quality: "epic", qualityLabel: "Epic", level: 88, gold: 663, material: 270 },
  { quality: "legendary", qualityLabel: "Legendary", level: 86, gold: 772, material: 420 },
];

export const dismantleBatch = {
  pieces: "15 peças somadas",
  composition: "1 Legendary, 6 Epic, 4 Rare, 3 Excellent e 1 Normal",
  gold: "7.672 ouro",
  material: "2.706 materiais",
  proof: "A soma dos 15 valores individuais fecha exatamente com o preview do lote.",
  note: "Nos exemplos de mesmo nível e qualidade, slots diferentes deram o mesmo retorno. A evidência indica que o valor depende de qualidade + nível, não do tipo da peça.",
};

export const dismantleFilters = {
  level: "Nível: abaixo de 20, 40, 60, 80, 100 ou 120.",
  quality: "Qualidade: abaixo de Common, Great, Rare, Epic, Legendary ou Mythical.",
};

export const dismantleGallery = [
  { src: "/screenshots/dismantle-full-batch.jpg", alt: "Preview de desmontagem de quinze equipamentos", caption: "Lote completo: 15 peças retornam 7.672 ouro + 2.706 materiais." },
  { src: "/screenshots/dismantle-legendary-86.jpg", alt: "Desmontagem de arma Legendary nível 86", caption: "Legendary 86: 772 ouro + 420 materiais." },
  { src: "/screenshots/dismantle-excellent.jpg", alt: "Desmontagem de equipamento Excellent nível 88", caption: "Excellent 88: 366 ouro + 90 materiais." },
  { src: "/screenshots/dismantle-epic-pair.jpg", alt: "Desmontagem simultânea de dois equipamentos Epic", caption: "Dois Epic selecionados: retorno somado antes de confirmar." },
];

export const refiningFacts = [
  { kicker: "REFINO CONFIRMADO", title: "Stage Mastery", text: "Exemplo observado: Stage Battle Damage +5,62%." },
  { kicker: "4 CLASSES", title: "Master of All Trades", text: "Exemplo observado: All Damage +6,06% e Damage Reduction +6,06% ao usar quatro classes." },
  { kicker: "DIREÇÃO DE BUILD", title: "Bônus universais primeiro", text: "All Damage, Adventurer Damage e Attack servem ao núcleo inteiro; bônus de classe devem acompanhar os carries realmente usados." },
];
