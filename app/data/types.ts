// Como as pecas do kit conversam entre si. Separado de builds: uma build e uma
// ordem de escolha dentro da run; o motor e o que o heroi faz quando ela fecha.
export type HeroKit = {
  engine: string;
  loops?: { name: string; text: string }[];
};

// Um combo e uma cadeia especifica de pecas, com o que ela exige para existir.
export type HeroCombo = {
  name: string;
  status: "confirmado" | "em teste" | "hipótese";
  needs: string[];
  text: string;
};

export type HeroSkill = {
  name: string;
  description: string;
  source?: string;
};

export type HeroBuild = {
  name: string;
  status: "confirmada" | "em teste" | "rascunho";
  summary: string;
  priorities: string[];
};

export type HeroStorySlide = {
  title: string;
  eyebrow?: string;
  status?: string;
  caption?: string;
  sourceImage?: string;
  portraitImage?: string;
  body: string[];
  note?: string;
};

export type HeroRecord = {
  slug: string;
  name: string;
  aliases?: string[];
  className: string;
  rarity?: string;
  role: string;
  summary: string;
  fieldNote: string;
  image?: string;
  artImage?: string;
  identity?: string[];
  story?: string[];
  storySlides?: HeroStorySlide[];
  storyImages?: { src: string; alt?: string; caption?: string; title?: string }[];
  stats?: string[];
  exclusiveGems?: { name: string; slot: string; baseStat: string; effect: string }[];
  levelSkills: HeroSkill[];
  kit?: HeroKit;
  breakpoints?: string;
  levelShots?: { label: string; src: string; caption: string }[];
  combos?: HeroCombo[];
  strengths?: string[];
  weaknesses?: string[];
  builds: HeroBuild[];
  synergies: string[];
  evidence: string[];
  evidenceImages?: { src: string; alt?: string; caption?: string; title?: string }[];
  pending: string[];
};
