import type { HeroRecord } from "../types";
import { lilith } from "./lilith";
import { miaMorningDew } from "./mia-morning-dew";
import { shadowWolf } from "./shadow-wolf";
import { kazersDarkblade } from "./kazers-darkblade";
import { mayaNecromancerApprentice } from "./maya-necromancer-apprentice";
import { karinPharaoh } from "./karin-pharaoh";
import { bountyHunter } from "./bounty-hunter";
import { onmyoji } from "./onmyoji";
import { artemis } from "./artemis";
import { dragonWarrior } from "./dragon-warrior";
import { tidecaller } from "./tidecaller";
import { flowerSpirit } from "./flower-spirit";
import { catwoman } from "./catwoman";
import { redQueen } from "./red-queen";
import { lightArcher } from "./light-archer";
import { succubus } from "./succubus";
import { holyKnight } from "./holy-knight";
import { starMage } from "./star-mage";
import { phantom } from "./phantom";

export type { HeroRecord, HeroSkill, HeroBuild } from "../types";

export const heroes: HeroRecord[] = [
  lilith,
  miaMorningDew,
  shadowWolf,
  kazersDarkblade,
  mayaNecromancerApprentice,
  karinPharaoh,
  bountyHunter,
  onmyoji,
  artemis,
  dragonWarrior,
  tidecaller,
  flowerSpirit,
  catwoman,
  redQueen,
  lightArcher,
  succubus,
  holyKnight,
  starMage,
  phantom,
];

// Fichas antigas fundidas em 24 ago. 2026: Sakura é o Onmyoji e a
// Necromancer Apprentice é a Maya — os slugs antigos redirecionam.
const mergedSlugs: Record<string, string> = {
  sakura: "onmyoji",
  "necromancer-apprentice": "maya-necromancer-apprentice",
};

export function getHero(slug: string) {
  const canonical = mergedSlugs[slug] ?? slug;
  return heroes.find((hero) => hero.slug === canonical);
}
