export const evidenceStandards = [
  {
    kicker: "PRINT FORTE",
    title: "Texto oficial visível",
    text: "Tooltip, ficha, recompensa ou tela de estágio com nome, número, classe, fraqueza ou valor numérico legível. Pode sustentar uma afirmação marcada como confirmada na tela.",
  },
  {
    kicker: "PRINT DE CONTEXTO",
    title: "Ajuda a montar a cena",
    text: "Mostra composição, nível da conta, posição na run, mapa, escolha ou resultado, mas não explica sozinho a regra. Serve para ligar uma evidência forte à tentativa correta.",
  },
  {
    kicker: "PRINT FRACO",
    title: "Não fecha conclusão sozinho",
    text: "Tela cortada, popup ausente, dano sem composição, ou captura sem data/estágio claro. Entra como pendência ou hipótese até aparecer captura melhor.",
  },
  {
    kicker: "LEITURA DO JOGADOR",
    title: "Hipótese separada do dado",
    text: "Interpretação prática baseada em várias runs. Ajuda a jogar melhor, mas precisa ficar rotulada como estratégia, observação ou interpretação provável.",
  },
] as const;

export const officialClasses = [
  "Calamity",
  "Warrior",
  "Summon",
  "Support",
  "Archer",
  "Assasin",
  "Mage",
  "Control",
] as const;

export const screenshotChecklist = [
  {
    title: "Estágio e mapa",
    text: "Capturar nome/número do estágio, recomendação de classe e tela de boss/elite quando existir.",
  },
  {
    title: "Antes da tentativa",
    text: "Registrar poder da conta, nível da conta, composição final disponível e Critical DMG global quando for relevante.",
  },
  {
    title: "Durante a escolha",
    text: "Salvar primeira escolha, mudanças de rota, cartas douradas, refreshes e timers quando a decisão explicar a run.",
  },
  {
    title: "Inimigos e mecânicas",
    text: "Priorizar tooltips de mobs, debuffs, mensagens de batalha e qualquer Restrain/Weak/Not Recommended exibido em tela.",
  },
  {
    title: "Resultado",
    text: "Guardar nível alcançado, vitória/derrota, tela de dano, recompensa e opção de reviver quando aparecer.",
  },
] as const;

export const cleanupRoadmap = [
  {
    stage: "1",
    title: "Renomear evidências duvidosas",
    text: "Trocar nomes genéricos por padrão estável: stage-XX-map, stage-XX-boss, hero-blessing, run-result. Arquivos antigos podem ficar até as referências serem migradas.",
  },
  {
    stage: "2",
    title: "Separar galeria de arquivo bruto",
    text: "Só prints bons aparecem nas páginas principais. Prints repetidos, cortados ou sem conclusão ficam em backlog interno até virarem evidência útil.",
  },
  {
    stage: "3",
    title: "Criar fichas por estágio",
    text: "Cada estágio deve ter mapa, recomendação, boss, elite, mobs observados, restrições de classe, run usada e pendências.",
  },
  {
    stage: "4",
    title: "Preparar reportes limpos",
    text: "Quando surgir canal oficial, transformar inconsistências de tradução e bugs em relatórios curtos com local, texto atual, sugestão e prints.",
  },
] as const;
