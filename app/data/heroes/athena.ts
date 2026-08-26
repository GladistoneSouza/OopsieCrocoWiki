import type { HeroRecord } from "../types";

export const athena: HeroRecord = {
  slug: "athena",
  name: "Athena",
  aliases: ["Goddess of Wisdom", "Deusa da Sabedoria"],
  className: "Não confirmada",
  rarity: "UR",
  role: "Não confirmado",
  summary:
    "Segunda heroína UR catalogada, revelada como core Immortal Hero da edição de 26 ago. 2026 ao lado da Artemis. A ficha ainda não foi aberta — o que existe até agora vem do banner do evento e de uma citação no kit da Artemis.",
  fieldNote:
    "Athena era, até esta captura, um nome solto: o talento nível 5 da Artemis dobra o crítico \"quando Athena também está em campo\", e nenhum herói com esse nome estava catalogado. O banner do Immortal Hero fecha a lacuna — ela é a outra UR da mesma linha de recrutamento.",
  image: "/screenshots/immortal-hero/athena-portrait.jpg",
  identity: [
    "Título exibido: Goddess of Wisdom",
    "Nome exibido no banner: Athena",
    "Linha de obtenção: Immortal Hero · Limited-Time Recruitment",
    "Papel na edição: um dos 2 core Immortal Heroes (regra 3 do evento)",
    "O banner traz um botão Skill Display próprio, ainda não aberto",
  ],
  levelSkills: [],
  builds: [],
  synergies: [
    "Dupla com Artemis — o talento nível 5 da Artemis dobra o bônus de crítico (+5% → +10%) quando Athena está em campo. É a única interação confirmada em texto de jogo até agora.",
    "Hipótese — a sinergia declarada em apenas uma direção sugere que o kit da Athena também cite a Artemis; falta abrir a ficha para verificar.",
  ],
  evidence: [
    "Banner Immortal Hero · Limited-Time Recruitment (26 ago. 2026): título Goddess of Wisdom e nome Athena",
    "Regras do evento: cada edição destaca 2 core Immortal Heroes — nesta, Athena e Artemis",
    "Ficha UR Goddess of the Hunt — Artemis nv2 (16 ago.): talento nv5 cita Athena pelo nome",
  ],
  evidenceImages: [
    {
      src: "/screenshots/immortal-hero/banner-athena-artemis.jpg",
      alt: "Banner do evento Immortal Hero com Athena e Artemis",
      caption: "Athena (Goddess of Wisdom) ao lado da Artemis no banner da edição.",
    },
  ],
  pending: [
    "Abrir a ficha e confirmar classe, posição, alcance e stats",
    "Capturar os talentos por nível (nv3/5/8) e o Blessing Bestiary",
    "Assistir ao Skill Display e registrar a skill base e a ultimate",
    "Confirmar se o kit dela também cita a Artemis, fechando a sinergia nos dois sentidos",
    "Confirmar a raridade na própria ficha — UR aqui é inferido da linha Immortal Hero, não lido na ficha",
  ],
};
