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

export type RefiningAttempt = {
  piece: string;
  cost: number;
  lockedEffect: string;
  before: string;
  after: string;
  note: string;
};

export type GemFact = {
  kicker: string;
  title: string;
  text: string;
};

export type EquipmentGemSnapshot = {
  piece: string;
  slot: string;
  level: string;
  power: string;
  base: string;
  gemAttrs: string;
};

export type EquipmentShot = {
  src: string;
  alt: string;
  caption: string;
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
  { n: "04", title: "Gemas", text: "Cada peça recebe até cinco bônus visíveis. Eles podem fortalecer classe, personagem, modo, tipo de inimigo ou condição de combate. Prints de 2 set. 2026 confirmam que a ficha da gema tem slot/base próprios, efeitos da gema, lista de sockets e os botões Reforge e Socket." },
  { n: "05", title: "Refino", text: "Rola atributos e tem 20% de chance de gerar um efeito especial. Efeitos úteis devem ser travados antes de novas tentativas." },
];

export const gemOperations = [
  { name: "Reforge", note: "Botão confirmado na ficha da Sapphire. O print ainda não mostra se rerrola o efeito principal, os sockets ou ambos." },
  { name: "Socket", note: "Botão confirmado ao lado de Reforge. A tela mostra cinco linhas de socket: algumas vazias e outras preenchidas com bônus de classe/inimigo." },
];

export const gemFacts: GemFact[] = [
  {
    kicker: "FICHA DA GEMA",
    title: "Slot e base ficam na própria gema",
    text: "A Sapphire aberta no capacete mostra Helmet, DEF +8% e Gem Effects: Damage to minor enemies +40%. Isso separa o efeito base da gema dos bônus encaixados na lista lateral.",
  },
  {
    kicker: "SÍNTESE",
    title: "Quatro iguais, com trava",
    text: "A tela Synthesize mostra quatro Sapphires da mesma qualidade. O aviso confirma que tocar na gema abre detalhes e que travar remove aquela gema da síntese.",
  },
  {
    kicker: "SOCKETS",
    title: "Cinco linhas por peça",
    text: "Os prints de peças Immortal exibem cinco atributos de gema por equipamento. Na ficha da Sapphire, espaços sem gema aparecem como No gems socketed yet.",
  },
  {
    kicker: "DUAS ABAS",
    title: "Gem Attr e Equipment Attr são separados",
    text: "A ficha da peça abre em Gem Attr, com os cinco bônus vindos de gema, e tem uma aba Equipment Attr ao lado. O que a peça ganha por gema não se mistura com o atributo próprio dela.",
  },
  {
    kicker: "REMOÇÃO",
    title: "Gema encaixada pode ser retirada",
    text: "Nas peças da própria conta, cada linha de Gem Attr traz um botão Remove, com um Remove geral e o botão Equipment Refining no rodapé. Nas peças inspecionadas de outros jogadores esses botões não aparecem — só a leitura dos atributos.",
  },
];

export const gemBonuses: [string, string, string][] = [
  ["Shadow Wolf", "+15% dano", "Armadura"],
  ["Assassin", "+35% dano", "Arma + anel + escudo"],
  ["Assassin", "+12,5% dano", "Sapphire"],
  ["Elite e boss", "+64% dano", "Arma + armadura"],
  ["Elite e boss", "+32% dano", "Sapphire"],
  ["Inimigos menores", "+40% dano", "Sapphire"],
  ["Alvo acima de 70% HP", "+50% dano", "Arma + anel"],
  ["Primeiros 5 andares", "+64% dano", "Weapon + Armor"],
  ["Archer", "+12,5% dano", "Socket da Sapphire (capacete)"],
  ["Archer", "+342 ATK", "Weapon + Shield"],
  ["Archer", "+96 DEF", "Helmet"],
  ["Warrior", "+192 ATK", "Weapon"],
  ["Warrior", "+25% shield return", "Helmet 12,5% + Necklace 12,5%"],
  ["Control", "+192 ATK", "Shield"],
  ["Adventurer", "+192 ATK / +32% dano", "Armor + Shield"],
  ["Summon", "+37,5% dano", "Shield + Ring + Necklace (12,5% cada)"],
  ["Disaster", "+37,5% dano", "Shield + Ring + Necklace (12,5% cada)"],
  ["Pet", "+192 ATK / +12,5% dano", "Helmet + Ring"],
  ["Hero", "+128 DEF", "Helmet 64 + Armor 64"],
  ["Hero", "+18% lifesteal", "Weapon 10% + Helmet 8%"],
  ["Redução de dano", "+12%", "Weapon 6% + Armor 6%"],
];

export const equipmentGemSnapshots: EquipmentGemSnapshot[] = [
  {
    piece: "Immortal Weapon",
    slot: "ATK",
    level: "83",
    power: "317",
    base: "882",
    gemAttrs: "Warrior ATK +192; primeiros 5 andares +32%; redução de dano +6%; Hero lifesteal +10%; Archer ATK +150.",
  },
  {
    piece: "Immortal Shield",
    slot: "ATK",
    level: "83",
    power: "317",
    base: "882",
    gemAttrs: "Control ATK +192; Disaster damage +12,5%; Adventurer Damage +32%; Summon damage +12,5%; Archer ATK +192.",
  },
  {
    piece: "Immortal Helmet",
    slot: "DEF",
    level: "85",
    power: "164",
    base: "457",
    gemAttrs: "Archer DEF +96; Hero DEF +64; Pet ATK +192; Warrior shield return +12,5%; Hero lifesteal +8%.",
  },
  {
    piece: "Immortal Armor",
    slot: "DEF",
    level: "85",
    power: "164",
    base: "457",
    gemAttrs: "Redução de dano +6%; primeiros 5 andares +32%; Adventurer ATK +192; Hero DEF +64; efeito exclusivo da Phantom com attack speed +5%.",
  },
  {
    piece: "Immortal Ring",
    slot: "Max HP",
    level: "75",
    power: "137",
    base: "11,48K",
    gemAttrs: "Archer damage +12,5%; Pet damage +12,5%; Disaster damage +12,5%; Mage damage +12,5%; Summon damage +12,5%.",
  },
  {
    piece: "Legendary Necklace",
    slot: "Max HP",
    level: "83",
    power: "114",
    base: "9531",
    gemAttrs: "Summon damage +12,5%; Disaster damage +12,5%; Priest HP +2880; Warrior shield return +12,5%; primeiros 15s após início +25% hero damage.",
  },
];

export const equipmentGemSnapshotsNote =
  "Combat Power e valor base acompanham o nível da peça, então cada linha vale para o nível mostrado e não para a peça em geral. Nos prints, a mesma Immortal Weapon aparece com 299 de Power no nível 80, 317 no 83 e 329 no 85; o Immortal Ring vai de 137 no nível 75 a 158 no 83 e 164 no 85; o Legendary Necklace, de 114 no nível 83 a 129 no 90 e 136 no 93. Comparar peças só faz sentido no mesmo nível.";

export const gemGallery: EquipmentShot[] = [
  {
    src: "/screenshots/equipment/immortal-weapon-gem-attrs.jpg",
    alt: "Atributos de gema na Immortal Weapon",
    caption: "Peça Immortal: cinco atributos de gema visíveis na arma.",
  },
  {
    src: "/screenshots/equipment/gem-synthesize-sapphires.jpg",
    alt: "Tela de síntese com quatro Sapphires",
    caption: "Síntese: quatro Sapphires iguais e aviso sobre travar gemas.",
  },
  {
    src: "/screenshots/equipment/sapphire-detail-socket.jpg",
    alt: "Ficha da Sapphire com Reforge, Socket e lista de sockets",
    caption: "Sapphire: Helmet DEF +8%, efeito base e sockets preenchidos/vazios.",
  },
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

export const refiningOverviewShot: EquipmentShot = {
  src: "/screenshots/refining/refining-effects-overview.jpg",
  alt: "Painel visual com sete efeitos especiais de refino aprovados como baseline",
  caption: "Baseline visual oficial: sete efeitos de refino reconstruídos no mesmo molde.",
};

export type RarityNameColor = {
  quality: string;
  color: string;
  source: string;
};

export const forgeIntro =
  "Refino, aprimoramento e desmontagem acontecem na mesma tela de forja: a peça flutua na fornalha, o nome aparece sobre a bigorna e os botões Enhance e Refine ficam no rodapé. A cor do nome não é decoração — ela repete a qualidade da peça.";

export const rarityNameColors: RarityNameColor[] = [
  { quality: "Rare", color: "Azul", source: "Nome na forja (Rare Helmet)" },
  { quality: "Epic", color: "Roxo", source: "Peças roxas na tela de desmontagem; rótulo Epic junto da cor ainda não capturado" },
  { quality: "Legendary", color: "Dourado", source: "Cabeçalho da ficha (Legendary Necklace Lv.93) e nome na forja" },
  { quality: "Mythic", color: "Vermelho/salmão", source: "Cabeçalho da ficha (Mythic Shield Lv.83) e nome na forja" },
  { quality: "Immortal", color: "Rosa", source: "Cabeçalho da ficha (Immortal Ring Lv.83)" },
];

export const rarityNameColorsNote =
  "A cor aparece em dois lugares e bate nos dois: no cabeçalho da ficha da peça e no nome escrito sobre a bigorna na forja. Legendary, Mythic e Immortal têm print que junta o nome da qualidade à cor; Rare só na forja. Epic entra pela cor dos tiles na desmontagem, sem print que amarre o rótulo — e Normal e Excellent seguem sem nenhum, então a escada não deve ser completada por dedução.";

export const rarityHeaderGallery: EquipmentShot[] = [
  {
    src: "/screenshots/equipment/rarity-color-reference.jpg",
    alt: "Referência de cores dos equipamentos com os cabeçalhos Legendary, Mythic e Immortal legendados",
    caption: "Os três cabeçalhos juntos, na ordem do tier: dourado, vermelho/salmão e rosa.",
  },
  {
    src: "/screenshots/equipment/rarity-header-legendary.jpg",
    alt: "Cabeçalho dourado do Legendary Necklace nível 93, Combat Power 136",
    caption: "Legendary: dourado. Necklace Lv.93, Combat Power 136, 11,39K de Max HP.",
  },
  {
    src: "/screenshots/equipment/rarity-header-mythic.jpg",
    alt: "Cabeçalho vermelho do Mythic Shield nível 83, Combat Power 254",
    caption: "Mythic: vermelho/salmão. Shield Lv.83, Combat Power 254, 706 de ATK.",
  },
  {
    src: "/screenshots/equipment/rarity-header-immortal.jpg",
    alt: "Cabeçalho rosa do Immortal Ring nível 83, Combat Power 158",
    caption: "Immortal: rosa. Ring Lv.83, Combat Power 158, 13,24K de Max HP.",
  },
];


export const forgeGallery: EquipmentShot[] = [
  {
    src: "/screenshots/equipment/forge-rare-helmet.jpg",
    alt: "Rare Helmet na forja, com o nome escrito em azul",
    caption: "Rare: nome em azul.",
  },
  {
    src: "/screenshots/equipment/forge-mythic-helmet.jpg",
    alt: "Mythic Helmet na forja, com o nome escrito em rosa",
    caption: "Mythic: nome em vermelho/salmão, a mesma peça um tier acima.",
  },
  {
    src: "/screenshots/equipment/forge-mythic-weapon.jpg",
    alt: "Mythic Weapon na forja, com o nome escrito em rosa",
    caption: "A forja é a mesma para arma, capacete e joia.",
  },
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
  text: "Cada refino rola 1 ou 2 atributos comuns novos e tem 20% de chance de gerar um efeito especial. O resultado aparece em After Refining como uma proposta: o jogador escolhe Replace para aceitar ou Refine para rolar de novo. Efeitos úteis devem ser travados antes de novas tentativas.",
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

export type EffectTierRow = {
  tier: string;
  color: string;
  exemplo: string;
  faixa: string;
};

export const refiningElixir = {
  name: "Refining Elixir",
  tooltip: "Used to reroll equipment affixes of Epic quality or higher",
  source: "Equipment Dismantling",
  text: "A ficha do próprio item fecha o circuito: a poção serve para rerrolar afixos de equipamento de qualidade Epic ou superior, e a fonte declarada pelo jogo é a desmontagem, com botão Go que leva direto para lá. Peça abaixo de Epic não é alvo de refino.",
};

export const lockRule = {
  toast: "Successfully locked effect, effect will remain unchanged after refining",
  text: "Ao travar, o jogo confirma na tela com essa mensagem. O efeito travado atravessa as tentativas seguintes intacto — só os atributos comuns continuam sendo rerrolados.",
};

export const effectTierColors: EffectTierRow[] = [
  { tier: "Roxo", color: "Roxo", exemplo: "Stage Battle Damage +3,88%", faixa: "3–6%" },
  { tier: "Laranja", color: "Laranja", exemplo: "Stage Battle Damage +6,98%", faixa: "6–9%" },
  { tier: "Rosa", color: "Rosa", exemplo: "Stage Battle Damage +12,19%", faixa: "12–15%" },
];

export const effectTierColorsNote =
  "O nome do efeito e o losango ao lado dele mudam de cor conforme a faixa em que a rolagem caiu — dá para ler o tier antes de conferir o número. Três Stage Mastery capturados em 2 set. 2026 batem com a tabela de faixas: roxo dentro de 3–6%, laranja dentro de 6–9%, rosa dentro de 12–15%. Azul e vermelho ainda não foram capturados com valor junto da cor.";

export const refiningEvidenceGallery: EquipmentShot[] = [
  {
    src: "/screenshots/refining/refining-elixir-source.jpg",
    alt: "Ficha do Refining Elixir mostrando a fonte Equipment Dismantling",
    caption: "A ficha do Refining Elixir declara a fonte: Equipment Dismantling.",
  },
  {
    src: "/screenshots/refining/lock-confirmation.jpg",
    alt: "Mensagem de confirmação ao travar um efeito de refino",
    caption: "Confirmação da trava: o efeito segue inalterado nas próximas tentativas.",
  },
  {
    src: "/screenshots/refining/effect-tier-roxo.jpg",
    alt: "Stage Mastery em roxo com Stage Battle Damage +3,88%",
    caption: "Roxo: +3,88%, dentro da faixa 3–6%.",
  },
  {
    src: "/screenshots/refining/effect-tier-laranja.jpg",
    alt: "Stage Mastery em laranja com Stage Battle Damage +6,98%",
    caption: "Laranja: +6,98%, dentro da faixa 6–9%.",
  },
  {
    src: "/screenshots/refining/effect-tier-rosa.jpg",
    alt: "Stage Mastery em rosa com Stage Battle Damage +12,19%",
    caption: "Rosa: +12,19%, dentro da faixa 12–15%.",
  },
];

export const refiningAttempts: RefiningAttempt[] = [
  {
    piece: "Mythic Weapon Lv.88 +69",
    cost: 265,
    lockedEffect: "Co-op Spire Mastery",
    before: "Stage Battle Attack +29; Co-op Spire Battle Attack +52; Co-op Spire Mastery travado.",
    after: "Warrior Hero Attack +24; Attack do Control Hero com maior Blessing +111.",
    note: "Exemplo com botão Replace visível: a rolagem cria uma proposta e não substitui sozinha.",
  },
  {
    piece: "Mythic Shield Lv.95 +69",
    cost: 324,
    lockedEffect: "Stage Mastery +13,25%",
    before: "Summoner Hero Attack +11; Stage Mastery travado.",
    after: "None.",
    note: "Mostra que o jogador pode manter o efeito especial e continuar buscando atributos comuns melhores.",
  },
  {
    piece: "Mythic Ring Lv.85 +69",
    cost: 246,
    lockedEffect: "Co-op Spire Mastery +10,21%",
    before: "HP do Archer com maior Blessing +1448; HP do Summoner com maior Blessing +1243; Co-op Spire Mastery travado.",
    after: "None.",
    note: "Mesmo com o especial travado a tentativa pode não oferecer atributo novo, e os comuns miram o herói de maior Blessing dentro de uma classe.",
  },
  {
    piece: "Legendary Necklace Lv.93 +70",
    cost: 255,
    lockedEffect: "Co-op Spire Mastery +14,89%",
    before: "HP do Archer com maior Blessing +3318; Co-op Spire Mastery travado.",
    after: "None.",
    note: "A joia Legendary também pode manter especial travado; custo observado fica próximo ao Mythic Ring por causa de nível/slot.",
  },
];

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
  { src: "/screenshots/refining/max-preview-tiers-overview.jpg", alt: "Os quatro tiers do Weapon Special Attribute Max Preview lado a lado", caption: "Os quatro tiers juntos: do azul para o roxo as faixas dobram, e Berserk Warrior sobe de 3–6% até 24–30% no rosa." },
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
  { kicker: "LOCK", title: "Trava preserva o especial", text: "O jogo confirma na tela: \"effect will remain unchanged after refining\". O especial travado atravessa as tentativas; só os comuns são rerrolados." },
  { kicker: "DIREÇÃO DE BUILD", title: "Bônus universais primeiro", text: "All Damage, Adventurer Damage e Attack servem ao núcleo inteiro; bônus de classe devem acompanhar os carries realmente usados." },
];
