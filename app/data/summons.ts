export const summonRules = {
  kicker: "HERO SUMMON",
  title: "10 tickets por invocação",
  text: "Cada invocação de herói consome 10 Hero Summon Tickets. Invocar dá EXP de banner: o Banner Level sobe (Lv.1 → Lv.3 observados) e melhora as recompensas da tabela de taxas.",
};

export const heroSummonRates = {
  intro: "Taxas oficiais exibidas no Rate Details por nível de banner. No Lv.1 não há SSR na tabela; o SSR entra a partir do Lv.2.",
  rows: [
    { item: "SSR", lv1: "—", lv2: "1,99%", lv3: "2,22%" },
    { item: "Mythic Summon Ticket", lv1: "—", lv2: "—", lv3: "0,98%" },
    { item: "SR", lv1: "5,24%", lv2: "—", lv3: "6,46%" },
    { item: "R", lv1: "19,82%", lv2: "—", lv3: "19,46%" },
    { item: "Gold ×100", lv1: "—", lv2: "—", lv3: "15,22%" },
    { item: "Gem Cube", lv1: "—", lv2: "—", lv3: "2,28%" },
    { item: "Random Class Exp ×40 / ×20 / ×10", lv1: "—", lv2: "—", lv3: "1,14% / 1,98% / 4,57%" },
  ],
  note: "Células com — não foram capturadas naquele nível de banner, não significam taxa zero (exceto o SSR no Lv.1, ausente da tabela oficial). O contador de Legendary garantido apareceu com valores diferentes em momentos distintos (35 e 39) — pendente confirmar a regra exata.",
};

export const mythicalSummon = {
  kicker: "MYTHICAL SUMMON",
  title: "Pity duplo: Legendary em 10, Mythic em 50",
  text: "Consome 1 Mythic Summon Scroll por invocação. Garantias exibidas: Legendary a cada 10 e herói Mythic a cada 50 invocações. O jogador escolhe o herói com Probability UP entre 8 míticos (Sword Demon, Tidecaller, Succubus, Light Archer, Flower Spirit, Catwoman, Dragon Warrior, Red Queen). Season Bonus: cada Mythic invocado dá 2 chaves do Abyss Realm.",
  rates: [
    { item: "Herói SP (Mythic)", chance: "2,47%" },
    { item: "Herói SSR", chance: "10,28%" },
    { item: "All Class Exp ×5", chance: "8,88%" },
    { item: "All Class Exp ×10", chance: "78,37%" },
  ],
};

export const heroExchange = {
  kicker: "HERO EXCHANGE",
  title: "Fragmentos por Hero Coins",
  text: "Hero Coins vêm dos baús de marco de invocação e compram fragmentos de herói com limites semanais. Preços observados variaram entre capturas — provavelmente promoções rotativas; os conflitos ficam registrados.",
  rows: [
    { hero: "Sword Demon, Red Queen, Catwoman, Flower Spirit", price: "3.000", limit: "1/semana" },
    { hero: "Light Archer", price: "3.000 (também visto a 1.000)", limit: "1/semana" },
    { hero: "Onmyoji, Phantom, Star Mage, Dark Knight (Lilith), Holy Knight, Pharaoh, Fire Spirit Master", price: "500 com 50% off (Onmyoji também visto a 1.000)", limit: "8/semana" },
    { hero: "Bounty Hunter", price: "1.000 (também vista a 500 com 50% off)", limit: "5-8/semana" },
    { hero: "Snow Witch, Necromancer Apprentice", price: "125", limit: "13/semana" },
  ],
};
