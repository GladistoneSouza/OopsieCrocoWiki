export type AppearanceFact = {
  kicker: string;
  title: string;
  text: string;
};

export type SkinRecord = {
  name: string;
  hero: string;
  stats: string;
  rule: string;
  note: string;
  starUps: { level: string; atk: string; def: string; hp: string; cost: string }[];
};

export type VisualShot = {
  src: string;
  alt: string;
  caption: string;
};

export const visualsIntro =
  "Wings e skins ficam fora da progressão de equipamento tradicional. Elas vivem nas abas visuais do Adventurer/herói, mudam aparência e ainda carregam atributos próprios.";

export const appearanceFacts: AppearanceFact[] = [
  {
    kicker: "FAMÍLIA VISUAL",
    title: "Não é só cosmético",
    text: "A tela de skin do Aivel informa que desbloquear skins aumenta todos os atributos. A tela de Wings também mostra ATK, DEF e HP fixos por estrela.",
  },
  {
    kicker: "EQUIPAR",
    title: "Aparência e bônus andam juntos",
    text: "Skins têm botão Wear e Wings têm botão Equip. A peça visual selecionada muda o modelo exibido e mantém uma progressão própria de estrelas.",
  },
  {
    kicker: "UPGRADE",
    title: "Star Up escala atributos",
    text: "Nos prints da skin Miss Question Mark, cada estrela adiciona +40 ATK, +20 DEF e +600 Max HP, confirmado até a terceira. Butterfly Wings dobra os valores ao passar de 1 para 2 estrelas.",
  },
];

export const missQuestionMarkSkin: SkinRecord = {
  name: "Miss Question Mark",
  hero: "Aivel",
  stats: "1★: ATK +40 · DEF +20 · Max HP +600",
  rule: "Unlocking skins increases all attributes",
  note: "A barra de estrelas tem cinco casas, mas só os saltos até 3★ foram capturados. O painel do Aivel mostra ainda Glacier Wiz equipada e Iridescent bloqueada.",
  starUps: [
    { level: "1★", atk: "+40", def: "+20", hp: "+600", cost: "—" },
    { level: "2★", atk: "+80", def: "+40", hp: "+1200", cost: "2 fragmentos" },
    { level: "3★", atk: "+120", def: "+60", hp: "+1800", cost: "1 fragmento" },
  ],
};

export const skinGallery: VisualShot[] = [
  {
    src: "/screenshots/skins/miss-question-mark-skin-panel.jpg",
    alt: "Painel de skins do herói Aivel com Glacier Wiz, Iridescent e Miss Question Mark",
    caption: "Painel do Aivel: Wear, Star Up e a regra de que desbloquear skin aumenta todos os atributos.",
  },
  {
    src: "/screenshots/skins/miss-question-mark-star-up-1-to-2.jpg",
    alt: "Popup de Star Up da skin Miss Question Mark de uma para duas estrelas",
    caption: "Star Up 1★ → 2★: ATK, DEF e Max HP dobram por 2 fragmentos.",
  },
  {
    src: "/screenshots/skins/miss-question-mark-star-up-2-to-3.jpg",
    alt: "Popup de Star Up da skin Miss Question Mark de duas para três estrelas",
    caption: "Star Up 2★ → 3★: a escada segue +40 / +20 / +600 por estrela.",
  },
];

export const wingsExtraGallery: VisualShot[] = [
  {
    src: "/screenshots/wings/butterfly-wings-star-up.jpg",
    alt: "Butterfly Wings em duas estrelas exibindo ATK +100, DEF +50 e HP +1500",
    caption: "Butterfly Wings 2★: ATK +100, DEF +50 e HP +1500.",
  },
];
