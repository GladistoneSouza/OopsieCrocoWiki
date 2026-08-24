import type { HeroRecord } from "../types";

export const karinPharaoh: HeroRecord = {
  slug: "karin-pharaoh",
  name: "Karin · Pharaoh",
  aliases: ["Karin", "Maga de controle"],
  className: "Control",
  role: "Stun / debuff / amplificação",
  summary: "Controller centrada em Solar Flare e Sun Beams, capaz de aplicar stun, reduzir o dano inimigo e ampliar o dano dos aliados.",
  fieldNote: "O kit é coerente no papel, mas o controle foi pouco impactante nos testes. Deve ser tratada como ferramenta situacional até que duração, resistência de bosses e tempo de conjuração sejam medidos.",
  levelSkills: [
    { name: "Solar Flare", description: "Aplica stun e libera Sun Beams." },
    { name: "+1 Solar Flare", description: "Adiciona uma conjuração de Solar Flare." },
    { name: "Stun prolongado", description: "Aumenta em 1 segundo a duração do stun." },
    { name: "Stun no ataque básico", description: "Ataques básicos ganham chance de atordoar por 2 segundos." },
    { name: "Sun Beam com stun", description: "Permite que os beams também apliquem stun." },
  ],
  builds: [
    {
      name: "Interrupção e amplificação",
      status: "em teste",
      summary: "Combina stuns com redução de Attack Speed, redução de dano inimigo e aumento do dano recebido pelo alvo.",
      priorities: ["+1 Solar Flare", "+1 segundo de stun", "Sun Beam com stun", "Redução de Attack Speed", "Aumento de dano recebido"],
    },
  ],
  synergies: ["Fases com muitos inimigos vulneráveis a controle", "Interrupção de uma habilidade decisiva", "Amplificação para carries já protegidos"],
  evidence: ["Ficha e Bestiary exibidos no nível 10", "Testes de campo com stun e tempo de conjuração"],
  pending: ["Confirmar raridade e nome completo na ficha", "Medir resistência ou imunidade de bosses a stun", "Comparar uma vaga de Karin com a proteção indireta produzida por summons"],
};
