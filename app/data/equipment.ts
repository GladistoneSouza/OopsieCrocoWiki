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
  ["Assasin", "+35% dano", "Arma + anel + escudo"],
  ["Elite e boss", "+64% dano", "Arma + armadura"],
  ["Alvo acima de 70% HP", "+50% dano", "Arma + anel"],
  ["Archer", "+12,5% dano", "Capacete"],
  ["Primeiros 5 andares", "+64% dano", "Colar + escudo"],
];

export const refiningEffects: RefiningEffect[] = [
  { effect: "Stage Mastery", value: "+14,32%", target: "Stage Battle Damage", slot: "Arma", cost: 210, image: "/screenshots/refining/stage-mastery.jpg" },
  { effect: "Dungeon Mastery", value: "+14,85%", target: "Dungeon Battle Damage", slot: "Arma", cost: 210, image: "/screenshots/refining/dungeon-mastery.jpg" },
  { effect: "Co-op Spire Mastery", value: "+11,74%", target: "Co-op Spire Battle Damage", slot: "Colar", cost: 232, image: "/screenshots/refining/coop-spire-mastery.jpg" },
  { effect: "Master of All Trades", value: "+3,93% / +3,93%", target: "All Damage / Damage Reduction com 4 classes", slot: "Anel", cost: 246, image: "/screenshots/refining/master-all-trades.jpg" },
  { effect: "Assassin Emblem", value: "+7,31%", target: "Assassin Hero Damage", slot: "Armadura", cost: 252, image: "/screenshots/refining/assassin-emblem.jpg" },
  { effect: "Archer Emblem", value: "+11,27%", target: "Archer Hero Damage", slot: "Capacete", cost: 193, image: "/screenshots/refining/archer-emblem.jpg" },
  { effect: "God of Arena", value: "+13,75% / +13,75%", target: "Arena Damage / Damage Reduction", slot: "Escudo", cost: 252, image: "/screenshots/refining/god-of-arena-shield.jpg" },
  { effect: "Strongest Assassin", value: "+9,58%", target: "Damage do Assassin com maior Blessing", slot: "Armadura", cost: 265, image: "/screenshots/refining/strongest-assassin-armor.jpg" },
  { effect: "Mage Emblem", value: "+6,14%", target: "Mage Hero Damage", slot: "Escudo", cost: 252, image: "/screenshots/refining/mage-emblem-shield.jpg" },
  { effect: "Berserk Mage", value: "—", target: "Tooltip ainda não capturado", slot: "Escudo", cost: 252, image: "/screenshots/refining/berserk-mage-shield.jpg" },
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

export const refiningRule = {
  title: "Como funciona cada tentativa",
  text: "Cada refino rola 1 ou 2 atributos novos e tem 20% de chance de gerar um efeito especial. O jogador escolhe entre Replace (aceitar o resultado) e Refine (rolar de novo). Efeitos úteis devem ser travados antes de novas tentativas.",
};

export const refiningCosts = [
  { slot: "Arma (Weapon)", cost: 265 },
  { slot: "Escudo (Shield)", cost: 252 },
  { slot: "Capacete (Helmet)", cost: 232 },
  { slot: "Armadura (Armor)", cost: 265 },
  { slot: "Anel (Ring)", cost: 246 },
  { slot: "Colar (Necklace)", cost: 232 },
];

export const refiningCostsNote =
  "Custos em poções de refino por tentativa, observados nas peças Mythic da conta (níveis 83-88). Peças Legendary custaram menos nas mesmas condições — arma 210, escudo 205, capacete 193 —, indicando que o custo escala com a raridade da peça; a fórmula exata segue pendente.";

export type RefineTierRow = {
  effect: string;
  target: string;
  tiers: [string, string, string, string, string];
};

export const refineTierNames = ["Azul", "Roxo", "Laranja", "Vermelho", "Rosa"];

export const refineTierTable: RefineTierRow[] = [
  { effect: "God of Arena", target: "Arena Damage e Damage Reduction", tiers: ["1,5–3%", "3–6%", "6–9%", "9–12%", "12–15%"] },
  { effect: "Master of All Trades", target: "All Damage e Damage Reduction (com 4 classes escaladas)", tiers: ["1–2%", "2–4%", "4–6%", "6–8%", "8–10%"] },
  { effect: "Berserk Warrior", target: "Warrior Hero Critical Damage", tiers: ["3–6%", "6–12%", "12–18%", "18–24%", "24–30%"] },
  { effect: "Warrior Emblem", target: "Warrior Hero Damage", tiers: ["1–2,5%", "2,5–5%", "5–7,5%", "7,5–10%", "10–12,5%"] },
  { effect: "Strongest Warrior", target: "Damage do Warrior com maior Blessing", tiers: ["2–4%", "4–8%", "8–12%", "12–16%", "16–20%"] },
  { effect: "Stage Mastery", target: "Stage Battle Damage", tiers: ["1–3%", "3–6%", "6–9%", "9–12%", "12–15%"] },
  { effect: "Dungeon Mastery", target: "Dungeon Battle Damage", tiers: ["1–3%", "3–6%", "6–9%", "9–12%", "12–15%"] },
  { effect: "Co-op Spire Mastery", target: "Co-op Spire Battle Damage", tiers: ["1–3%", "3–6%", "6–9%", "9–12%", "12–15%"] },
];

export const refineTierNote =
  "Faixas transcritas do popup Weapon Special Attribute Max Preview (arma). Os nomes de classe acompanham a peça — na arma aparecem os efeitos de Warrior; outras peças mostraram Strongest Assassin (+9,58% observado) e Mage Emblem (+6,14%), sugerindo uma família por classe. As faixas das demais peças ainda não foram capturadas.";

export const refineTierGallery = [
  { src: "/screenshots/refining/max-preview-tier-azul.jpg", alt: "Prévia de atributos especiais da arma — tier azul", caption: "Tier azul: God of Arena, Master of All Trades, Berserk Warrior e Warrior Emblem." },
  { src: "/screenshots/refining/max-preview-tier-roxo.jpg", alt: "Prévia de atributos especiais da arma — tier roxo", caption: "Tier roxo: faixas dobram em relação ao azul." },
  { src: "/screenshots/refining/max-preview-tier-vermelho.jpg", alt: "Prévia de atributos especiais da arma — tier vermelho", caption: "Tier vermelho: Berserk Warrior chega a 18–24%." },
  { src: "/screenshots/refining/max-preview-tier-rosa.jpg", alt: "Prévia de atributos especiais da arma — tier rosa", caption: "Tier rosa (máximo): Berserk Warrior 24–30%." },
];

export const massDismantle = {
  title: "Desmontagem em massa comprovada",
  text: "Com os filtros Below 120 / Below Mythical, um lote de ~57 peças (níveis 80-88) devolveu 25,86K de ouro e 8.705 poções de refino de uma vez — a principal fonte de poções para sustentar sessões longas de refino.",
};

export const refiningFacts = [
  { kicker: "REFINO CONFIRMADO", title: "Stage Mastery", text: "Exemplo observado: Stage Battle Damage +5,62%." },
  { kicker: "4 CLASSES", title: "Master of All Trades", text: "Exemplo observado: All Damage +6,06% e Damage Reduction +6,06% ao usar quatro classes." },
  { kicker: "DIREÇÃO DE BUILD", title: "Bônus universais primeiro", text: "All Damage, Adventurer Damage e Attack servem ao núcleo inteiro; bônus de classe devem acompanhar os carries realmente usados." },
];
