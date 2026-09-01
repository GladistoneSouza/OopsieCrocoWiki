import type { HeroRecord } from "../types";

export const onmyoji: HeroRecord = {
  slug: "onmyoji",
  name: "Sakura",
  aliases: ["Onmyoji", "SSR Onmyoji", "Healer dourada"],
  className: "Support",
  rarity: "SSR",
  role: "Cura / escudo / buffs e debuffs",
  summary:
    "Support SSR do círculo Yin-Yang: mantém formações vivas com cura, escudos e aceleração, enquanto enfraquece os inimigos dentro do círculo.",
  fieldNote:
    "Identidade consolidada em 21 ago.: a ficha exibe SSR Onmyoji com o nome Sakura — a wiki tratava “Sakura” e “Onmyoji” como personagens separados e as duas fichas foram fundidas. Nas runs documentadas, o dano pessoal é baixo porque a contribuição principal vem de cura, escudos, mitigação e Attack Speed.",
  artImage: "/screenshots/art/onmyoji-card.jpg",
  identity: [
    "Título exibido: SSR Onmyoji",
    "Nome exibido na ficha: Sakura",
    "Profissão: Support",
    "Alcance/posição exibida: 4",
  ],
  stats: [
    "Leitura de 31 ago. 2026, nível 18: poder 28.354 · ATK 23,74K · HP 348,46K · DEF 11,9K.",
    "Nível 15: poder 20.184 · ataque 16,69K · HP 250,9K · defesa 8.587 · Dano Crítico global +21,0% · fragmentos 7/60",
    "Snapshot no nível 9 (30 jul.): poder 8.359 · ataque 6.998 · HP 103,6K · defesa 3.481 · Dano Crítico global +12,6%",
  ],
  levelSkills: [
    { name: "Nível 3 — Yang · Growth", description: "Começa a batalha com Yang · Growth obtido, a peça que melhora a cura do círculo.", source: "Ficha nível 17 fotografada em 31 ago. 2026." },
    { name: "Nível 5 — efeito terapêutico do círculo", description: "O yin and yang aumenta o efeito terapêutico da formação.", source: "Ficha nível 17, 31 ago. 2026." },
    {
      name: "Ultimate — Yin-Yang Magic Array",
      description: "Invoca o círculo mágico Yin-Yang, que cura continuamente os aliados dentro do alcance e reduz o Attack Speed dos inimigos.",
      source: "Tooltip da ultimate na ficha.",
    },
    { name: "Nível 8 — Shadow · Fragile", description: "Começa a batalha com Shadow · Fragile obtido.", source: "Texto confirmado na ficha do nível 9." },
    {
      name: "Nível 10 — Heaven and Earth Infinite / Yin · Yang Twins",
      description: "Na ficha do nível 9: Heaven and Earth Infinite limpa debuffs dos aliados dentro da formação ao ativar; Yin · Yang Twins torna aliados imunes a controle.",
      source: "Texto confirmado na ficha (nível bloqueado na época).",
    },
    { name: "Nível 15 — Yin Yang", description: "Aumenta o dano dos aliados.", source: "Texto confirmado na ficha do nível 15." },
    {
      name: "Nível 20 — Heaven and Earth Infinite / Yin · Yang Twins",
      description: "Na ficha do nível 15: Heaven and Earth Infinite aumenta a duração; Yin · Yang Twins faz ataques aliados causarem dano extra. Os textos divergem dos exibidos para o nível 10 — provável evolução por nível ou tradução inconsistente.",
      source: "Texto confirmado na ficha; nível ainda bloqueado.",
    },
    { name: "Yang · Growth", description: "O efeito de cura do círculo mágico é aprimorado.", source: "Painel de blessings em run." },
    { name: "Yang · Block", description: "O dano recebido pelos aliados dentro do círculo é reduzido.", source: "Painel de blessings em run." },
    { name: "Yang · Rapid", description: "O tempo de recarga das habilidades dos aliados dentro do círculo é acelerado. É o núcleo mais universal da build observada.", source: "Painel de blessings em run." },
    { name: "Yang · Protection", description: "Aliados dentro do círculo recebem escudos continuamente.", source: "Painel de blessings em run." },
    { name: "Yang · Healing", description: "Enquanto os aliados permanecem dentro do círculo, o efeito de cura continua aumentando.", source: "Painel de blessings em run." },
    { name: "Yin · Easily Damaged", description: "Inimigos dentro do círculo recebem mais dano.", source: "Painel de blessings em run." },
    { name: "Yin · Weakness", description: "Deixa inimigos no círculo mais vulneráveis a acertos críticos.", source: "Painel de blessings em run." },
    { name: "Yin · Blinding", description: "A taxa de acerto dos inimigos dentro do círculo é reduzida.", source: "Painel de blessings em run." },
    { name: "Yin · Revenge", description: "Quando inimigos dentro do círculo atacam, recebem dano de contra-ataque.", source: "Painel de blessings em run." },
    { name: "Yin · Evil Retribution", description: "Quando um inimigo morre dentro do círculo, explode e causa dano aos inimigos próximos.", source: "Painel de blessings em run." },
    { name: "The World Is Infinite (dourada)", description: "Expande o alcance do círculo mágico de Yin e Yang.", source: "Painel de blessings em run." },
    { name: "Yin and Yang Twins (dourada)", description: "Ao liberar o círculo, aplica buffs a 2 aliados adicionais e debuffs a 2 inimigos adicionais.", source: "Painel de blessings em run (custo 5)." },
  ],
  kit: {
    engine:
      "O círculo Yin-Yang é um lugar, não um efeito. Toda blessing dela começa com \"dentro do círculo\": os Yang melhoram quem está dentro, os Yin pioram quem está dentro. Por isso a estatística que mais importa nesta ficha não é cura nem dano — é área, porque área decide quantos alvos as outras dezesseis peças alcançam.",
    loops: [
      {
        name: "Alcance multiplica o kit inteiro",
        text: "A dourada The World Is Infinite expande o círculo. Como cada Yang e cada Yin é condicionado a estar dentro, ampliar o raio aumenta simultaneamente todos os buffs e todos os debuffs já escolhidos. É a única peça do elenco documentado que multiplica os dois lados da própria ficha de uma vez.",
      },
      {
        name: "Ficar parado paga",
        text: "Yang · Healing aumenta a cura conforme os aliados permanecem dentro do círculo. Isso premia formação estática e pune o time que se espalha — o que faz do círculo tanto uma ferramenta quanto uma amarra posicional.",
      },
      {
        name: "Yang · Rapid é um multiplicador de time",
        text: "Acelerar a recarga das habilidades dos aliados dentro do círculo não é um bônus a mais: é o motor de todo mundo girando mais rápido. Numa equipe em que a Lilith se cura e recupera mana lançando, a Tidecaller invoca a cada skill, a Mia produz elementais e a Flower Spirit dispara Abundance a cada três lançamentos, Yang · Rapid multiplica quatro ciclos ao mesmo tempo.",
      },
      {
        name: "O lado Yin fecha a sala",
        text: "Yin · Easily Damaged e Yin · Weakness aumentam o dano que os inimigos dentro recebem, Yin · Blinding derruba a precisão deles, Yin · Revenge devolve dano quando atacam e Yin · Evil Retribution transforma cada morte dentro do círculo numa explosão. O ramo escuro é dano e defesa de área ao mesmo tempo, sem ela precisar atacar.",
      },
    ],
  },
  combos: [
    {
      name: "Área antes de tudo",
      status: "confirmado",
      needs: ["The World Is Infinite (dourada)", "qualquer Yang ou Yin já escolhido"],
      text: "Como todo o resto é condicionado a estar dentro, expandir o círculo faz cada peça anterior valer mais e cada peça futura nascer alcançando mais alvos. É a prioridade mais defensável de toda a wiki de personagens.",
    },
    {
      name: "Acelerar quem já ganha",
      status: "confirmado",
      needs: ["Yang · Rapid", "aliado com motor por lançamento"],
      text: "Rapid é o núcleo mais universal da build observada porque não escala com ela: escala com o time. Ao lado de heróis cujo ciclo é pago por lançamento — Lilith, Tidecaller, Mia, Flower Spirit —, ele encurta o intervalo do motor alheio em vez de somar dano ao próprio.",
    },
    {
      name: "Sala que se limpa sozinha",
      status: "hipótese",
      needs: ["Yin · Evil Retribution", "Yin · Easily Damaged", "The World Is Infinite (dourada)"],
      text: "Com o círculo grande, inimigos dentro recebem mais dano e explodem ao morrer atingindo os vizinhos — que também estão dentro, e também recebem mais dano. Em sala cheia isso vira reação em cadeia; contra alvo único não vale nada.",
    },
    {
      name: "Formação que não quebra",
      status: "hipótese",
      needs: ["Yin · Yang Twins (nível 10)", "Heaven and Earth Infinite (nível 10)", "Yang · Block"],
      text: "Imunidade a controle no nível 10, limpeza de debuffs ao ativar e redução de dano para quem está dentro. É o pacote que permite ao time ignorar controle inimigo — e o único caminho do elenco documentado que resolve controle em vez de sobreviver a ele.",
    },
  ],
  levelShots: [
    { label: "Níveis 3, 5 e 8", src: "/screenshots/niveis/onmyoji-3-8.jpg", caption: "Degraus novos: no 3 ela começa com Yang · Growth, no 5 o yin and yang melhora o efeito terapêutico do círculo e no 8 entra Shadow · Fragile." },
    { label: "O degrau 5 aberto", src: "/screenshots/niveis/onmyoji-3-tooltip.jpg", caption: "A linha do 5 fala do efeito terapêutico da formação, o que amarra o ramo Yang desde cedo." },
    { label: "Níveis 12, 15 e 20", src: "/screenshots/niveis/onmyoji-12-20.jpg", caption: "No 15 o Yin Yang aumenta o dano aliado; no 20 o Heaven and Earth Infinite estende a duração." },
    { label: "Níveis 25 e 30", src: "/screenshots/niveis/onmyoji-25-30.jpg", caption: "O topo da escada dela, ainda bloqueado no nível 17 atual." },
  ],
  strengths: [
    "Multiplica o time em vez de somar a si mesma: Yang · Rapid acelera o motor de todos os heróis que pagam por lançamento",
    "Cobre buff e debuff na mesma peça — um único círculo cura, escuda, acelera, cega, amplifica dano recebido e devolve contra-ataque",
    "Imunidade a controle e limpeza de debuff, funções que quase ninguém mais no elenco documentado oferece",
    "A dourada de alcance é o multiplicador mais limpo da wiki: melhora tudo que já foi escolhido e tudo que vier",
  ],
  weaknesses: [
    "Tudo é posicional — aliado ou inimigo fora do círculo simplesmente não recebe nada, e ela não controla onde ninguém fica",
    "Yang · Healing premia formação parada, o que briga com qualquer herói que precise perseguir alvo",
    "Dano próprio praticamente nulo: ela não fecha sala, só faz o time fechar mais rápido",
    "Os textos dos níveis 10 e 20 divergem entre si nas duas capturas, e não está claro se é evolução por nível ou tradução inconsistente",
    "Contra alvo único, metade do ramo Yin — explosão em cadeia, dano em vizinhos — não tem em que pegar",
  ],
  builds: [
    {
      name: "Aceleração ofensiva",
      status: "confirmada",
      summary: "Usada quando o time já sobrevive e quer acelerar todos os motores de dano.",
      priorities: ["Yang · Rapid", "Yin · Weakness", "Yin · Easily Damaged", "The World Is Infinite"],
    },
    {
      name: "Sustentação adaptativa",
      status: "confirmada",
      summary: "Mantém Yang · Rapid e escolhe cura, escudo ou redução de dano conforme a pressão da fase.",
      priorities: ["Yang · Rapid", "Yang · Growth", "Yang · Protection", "Yang · Block", "The World Is Infinite"],
    },
    {
      name: "Proteção ampliada",
      status: "confirmada",
      summary: "Alterna entre ampliar a área defensiva e espalhar buffs e debuffs, conforme a formação da fase.",
      priorities: ["The World Is Infinite", "Yin and Yang Twins", "Yang · Healing", "Yang · Protection", "Yang · Block"],
    },
  ],
  synergies: [
    "Acelera Blood/Bite do Shadow Wolf",
    "Aumenta a frequência de Blade Storm do Kazres",
    "Acelera a reposição dos esqueletos da Maya",
    "Composições com muitas unidades agrupadas dentro do círculo",
    "O contra-ataque global pode escalar com summons, mas isso ainda precisa de teste",
  ],
  evidence: [
    "Fichas SSR Onmyoji — Sakura nos níveis 9 (30 jul.) e 15 (21 ago.)",
    "Tooltip da ultimate Yin-Yang Magic Array",
    "Painéis de blessings em dungeon e co-op (jul.-ago.)",
    "Duas runs completas do andar 15",
  ],
  evidenceImages: [
    { src: "/screenshots/runs/summon-army-onmyoji.jpg", alt: "Árvore defensiva do Onmyoji" },
    { src: "/screenshots/onmyoji/blessings-level-10.jpg", alt: "Painel com Yang Block, Yang Rapid, Yang Protection e Yin Blinding" },
    { src: "/screenshots/onmyoji/blessings-coop.jpg", alt: "Painel em co-op com Yin Evil Retribution e Yin Revenge" },
  ],
  pending: [
    "Esclarecer os textos divergentes de Heaven and Earth Infinite e Yin · Yang Twins entre os níveis 10 e 20",
    "Confirmar valores e duração dos buffs do círculo",
    "Confirmar se existe sobrenome além de Sakura na ficha",
  ],
};
