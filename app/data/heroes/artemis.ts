import type { HeroRecord } from "../types";

export const artemis: HeroRecord = {
  slug: "artemis",
  name: "Artemis",
  aliases: ["Arqueira UR"],
  className: "Arqueiro",
  rarity: "UR",
  role: "DPS de marca / área",
  summary: "Arqueira UR com caminhos de marca, águia e Moonlit; exige muitos upgrades dentro da run para chegar ao late game.",
  fieldNote: "No nível observado, entra sem as duas habilidades gratuitas que personagens mais evoluídos costumam possuir.",
  levelSkills: [],
  builds: [
    {
      name: "Moon Goddess Descends",
      status: "em teste",
      summary: "Caminho voltado ao dano de boss e à escala Moonlit.",
      priorities: ["Moonlit Enhancement", "Moonlit Haste", "Moonlit Star Piercer", "Moonlit Charge", "Hunter Mark Spirit"],
    },
    {
      name: "Marca + águia",
      status: "em teste",
      summary: "Alternativa de área que espalha dano e utiliza uma ultimate diferente.",
      priorities: ["Marcas", "Águia", "Moonlit Chain Break quando o foco for AOE"],
    },
  ],
  synergies: ["Boss fraco contra Arqueiro", "Attack Speed para acelerar aplicação de marcas"],
  evidence: ["Testes comparativos com Eria", "Árvore completa discutida em runs anteriores"],
  pending: ["Importar os prints completos da árvore", "Mapear habilidade por nível", "Confirmar nomes oficiais traduzidos"],
};
