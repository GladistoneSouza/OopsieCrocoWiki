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
import { dragonWarrior } from "./dragon-warrior";
import { tidecaller } from "./tidecaller";
import { flowerSpirit } from "./flower-spirit";
import { catwoman } from "./catwoman";
import { redQueen } from "./red-queen";
import { lightArcher } from "./light-archer";
import { succubus } from "./succubus";

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
  dragonWarrior,
  tidecaller,
  flowerSpirit,
  catwoman,
  redQueen,
  lightArcher,
  succubus,
];

export function getHero(slug: string) {
  return heroes.find((hero) => hero.slug === slug);
}
