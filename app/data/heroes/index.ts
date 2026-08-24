import type { HeroRecord } from "../types";
import { lilith } from "./lilith";
import { miaMorningDew } from "./mia-morning-dew";
import { shadowWolf } from "./shadow-wolf";
import { kazersDarkblade } from "./kazers-darkblade";
import { mayaNecromancerApprentice } from "./maya-necromancer-apprentice";
import { karinPharaoh } from "./karin-pharaoh";
import { bountyHunter } from "./bounty-hunter";
import { onmyoji } from "./onmyoji";
import { necromancerApprentice } from "./necromancer-apprentice";
import { artemis } from "./artemis";
import { sakura } from "./sakura";

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
  necromancerApprentice,
  artemis,
  sakura,
];

export function getHero(slug: string) {
  return heroes.find((hero) => hero.slug === slug);
}
