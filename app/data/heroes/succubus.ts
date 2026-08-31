import type { HeroRecord } from "../types";

export const succubus: HeroRecord = {
  slug: "succubus",
  name: "Selina · Frostcharm",
  aliases: ["Succubus", "SP Succubus"],
  className: "Control",
  rarity: "SP",
  role: "Controle / charm e stun",
  summary:
    "Controladora SP baseada em Charm: encanta inimigos com ataques básicos e pode converter o fim do encanto em atordoamento.",
  fieldNote:
    "Personagem ainda bloqueada na conta observada — a ficha lista os talentos, mas nenhum valor prático foi testado. Os prints de 30 ago. 2026 acrescentaram o degrau de nível 10 com dois números raros nesta wiki (30% de chance de stun por 2 segundos; 20% de corte na cura inimiga) e mostraram a passiva exclusiva mudando de Charm · Continuation para Heartbreak · Echo conforme o nível sobe.",
  image: "/screenshots/sp-heroes/succubus-profile.jpg",
  identity: [
    "Título exibido: SP Succubus",
    "Nome exibido na ficha: Selina · Frostcharm",
    "Profissão: Control",
    "Posição exibida: 4",
    "Status na conta observada: bloqueada (Locked)",
  ],
  stats: ["Prévia da ficha bloqueada: poder 14.287 · ataque 11,86K · HP 176,97K · defesa 6.057"],
  levelSkills: [
    { name: "Nível 3 — Charm · Continuation", description: "Começa a batalha com Charm · Continuation obtido.", source: "Texto confirmado na ficha; herói bloqueado." },
    { name: "Nível 5 — charm no ataque básico", description: "Ataques básicos têm chance de encantar (charm) o inimigo.", source: "Texto confirmado na ficha; herói bloqueado." },
    { name: "Nível 8 — Heartbreak · Echo", description: "Começa a batalha com Heartbreak · Echo obtido.", source: "Texto confirmado na ficha; herói bloqueado." },
    { name: "Nível 10 — Enraptured / Heartbreak Flash", description: "Enraptured: depois que o charm termina, 30% de chance de atordoar adicionalmente por 2 segundos. Heartbreak Flash: o buff Heartbreak passa a ser acumulável e reduz em 20% a cura recebida pelo inimigo.", source: "Ficha fotografada em 30 ago. 2026 — é a única bifurcação dela com valores numéricos visíveis." },
    { name: "Ultimate — Tentação Fatal", description: "Nome lido no painel de bônus de coleção, que registra: depois de usar Tentação Fatal, a Succubus entra em estado não selecionável por 1,5 segundo.", source: "Painel de bônus de coleção do elenco (31 ago. 2026); o tooltip da própria ultimate ainda não foi aberto." },
  ],
  kit: {
    engine:
      "Dois estados encadeados: Charm no inimigo e Heartbreak nela. O charm é a entrada — ataque básico aplica, a passiva exclusiva prolonga — e o nível 10 decide o que ele vira ao acabar. É a única ficha do elenco vermelho cuja bifurcação principal aparece com número na tela em vez de \"greatly increased\".",
    loops: [
      {
        name: "O charm se renova sozinho",
        text: "O talento de nível 5 dá chance de encantar no ataque básico e Charm · Continuation, a passiva exclusiva do começo, prolonga o efeito. Aplicar não custa habilidade nem recurso: sai do ataque comum, o que torna o controle dela contínuo em vez de pontual.",
      },
      {
        name: "O fim do charm é que paga",
        text: "Enraptured cobra no encerramento: 30% de chance de atordoar por mais 2 segundos quando o charm termina. Isso inverte a leitura usual — não interessa prolongar o charm indefinidamente, interessa girá-lo, porque cada término é uma nova jogada de dados por stun.",
      },
      {
        name: "Heartbreak vira pilha",
        text: "A partir do nível 8 ela começa com Heartbreak · Echo, e Heartbreak Flash torna o buff acumulável somando 20% de corte na cura recebida pelo inimigo. É a rota de negação: não controla mais, mas apaga a recuperação do alvo.",
      },
    ],
  },
  combos: [
    {
      name: "Girar o charm em vez de esticá-lo",
      status: "hipótese",
      needs: ["charm no ataque básico (nível 5)", "Enraptured (nível 10)"],
      text: "Como o stun de 2 segundos só rola quando o charm acaba, aplicação frequente e curta produz mais tentativas que uma aplicação longa. Se isso se confirmar, velocidade de ataque vale mais para ela do que duração de controle — o oposto do que o nome Charm · Continuation sugere.",
    },
    {
      name: "Apagar a cura do alvo",
      status: "hipótese",
      needs: ["Heartbreak · Echo (nível 8)", "Heartbreak Flash (nível 10)"],
      text: "Com o Heartbreak acumulável cortando 20% da cura por camada, ela vira ferramenta contra boss que se recupera. É a mesma função que a Fear into the Soul cumpre no Kazres, o que os torna redundantes num mesmo time e substituíveis num outro.",
    },
  ],
  strengths: [
    "Controle que sai do ataque básico, sem gastar habilidade nem competir com o dano por recurso",
    "A bifurcação do nível 10 oferece duas funções distintas — controle duro ou anticura — em vez de duas versões do mesmo efeito",
    "Um dos raros kits do jogo com valores exibidos: 30% de chance, 2 segundos de stun, 20% de corte de cura",
  ],
  weaknesses: [
    "Bloqueada na conta observada: nada aqui foi visto funcionando, e a leitura vem só do texto da ficha",
    "Charm em boss é a pergunta clássica que ninguém respondeu — se chefes resistem, metade do kit não existe onde ela mais faria falta",
    "A rota Heartbreak faz o mesmo trabalho de anticura que o Kazres já faz, então os dois juntos podem se sobrepor em vez de somar",
    "Nenhum degrau acima do nível 10 foi capturado, e nenhuma blessing do Bestiary dela foi vista",
  ],
  builds: [],
  synergies: ["Hipótese — candidata natural à quinta vaga de Controller do Núcleo 4+1, competindo com a Karin"],
  evidence: ["Prévia da ficha SP Succubus bloqueada (22 ago. 2026)"],
  evidenceImages: [{ src: "/screenshots/sp-heroes/succubus-profile.jpg", caption: "Prévia da ficha SP Succubus — Selina · Frostcharm (bloqueada)" }],
  pending: [
    "Desbloquear a personagem e confirmar os talentos",
    "Medir duração do charm e interação com bosses",
    "Testar se aplicar charm em rajadas curtas produz mais stuns que prolongá-lo, como o Enraptured sugere",
    "Abrir o Blessing Bestiary da Succubus — nenhuma blessing dela foi capturada",
    "Capturar os degraus acima do nível 10 e o tooltip da ultimate Tentação Fatal",
  ],
};
