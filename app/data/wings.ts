export type WingRecord = {
  name: string;
  stats: string;
  image: string;
  skills: { level: string; text: string }[];
  note?: string;
};

export const wingsIntro =
  "Sistema Wings (aba Transmorph do Adventurer): cada asa concede atributos fixos e uma Wing Skill que evolui por estrelas. Apenas uma asa fica equipada por vez.";

export const wings: WingRecord[] = [
  {
    name: "Wings of Blessing",
    stats: "ATK +50 · DEF +25 · HP +750 (1 estrela)",
    image: "/screenshots/wings/wings-of-blessing.jpg",
    skills: [
      { level: "1★", text: "No turno 1, é possível selecionar 1 blessing adicional." },
      { level: "2★", text: "O dano aumenta 10% para os primeiros 5 acúmulos." },
      { level: "3★", text: "Em Main Story e Abyss, 4% de chance de ganhar 1 escolha extra de Blessing." },
      { level: "4★", text: "O dano aumenta 20% para os primeiros 5 acúmulos." },
      { level: "5★", text: "Em Main Story e Abyss, 8% de chance de ganhar 1 escolha extra de Blessing." },
    ],
  },
  {
    name: "Butterfly Wings",
    stats: "ATK +50 · DEF +25 · HP +750 (1 estrela)",
    image: "/screenshots/wings/butterfly-wings.jpg",
    skills: [
      { level: "1★", text: "Após o início da batalha, heróis aliados ganham +0,25% de Final Damage a cada 3 segundos, até o máximo de 4%. Depois de 25 segundos, aliados ganham 50% de mana." },
      { level: "2★", text: "O efeito de aumento e o teto de Final Damage dobram." },
      { level: "3★", text: "O intervalo de aumento de Final Damage é reduzido em 1 segundo." },
      { level: "4★", text: "O efeito de aumento e o teto de Final Damage dobram novamente." },
      { level: "5★", text: "Texto cortado na captura — ainda não registrado." },
    ],
    note: "O texto da habilidade de 5 estrelas ficou fora da tela no print disponível.",
  },
];

export const wingsGallery = [
  { src: "/screenshots/wings/wings-of-blessing-skills.jpg", alt: "Wing Skills da Wings of Blessing por estrela", caption: "Wings of Blessing: escolha extra de blessing por estrelas." },
  { src: "/screenshots/wings/butterfly-wings-skills.jpg", alt: "Wing Skills da Butterfly Wings por estrela", caption: "Butterfly Wings: rampa de Final Damage para o time." },
];
