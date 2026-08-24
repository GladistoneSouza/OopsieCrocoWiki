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
  stats?: string[];
  exclusiveGems?: { name: string; slot: string; baseStat: string; effect: string }[];
  levelSkills: HeroSkill[];
  builds: HeroBuild[];
  synergies: string[];
  evidence: string[];
  evidenceImages?: { src: string; alt?: string; caption?: string }[];
  pending: string[];
};
