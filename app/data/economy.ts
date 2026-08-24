export const summonEconomy = {
  intro: "Os três baús do marco de 50 invocações são cumulativos. A coleta registrada entregou todas as recompensas garantidas de uma vez.",
  chests: [
    { kicker: "COMMON CHEST", title: "250 moedas", text: "Moedas para o Hero Exchange." },
    { kicker: "MONTHLY PASS", title: "250 moedas", text: "Também entrega moedas para o Hero Exchange." },
    { kicker: "LIFETIME PASS", title: "2 fichas míticas", text: "Fichas vermelhas para a linha de invocação mítica." },
    { kicker: "TOTAL COM PASSES", title: "500 + 2", text: "500 moedas de troca e 2 fichas míticas a cada ciclo de 50 summons normais." },
  ],
  projection: "250 summons normais completam cinco ciclos: 2.500 moedas do Hero Exchange + 10 fichas míticas. A recompensa opcional marcada como “Chance to Obtain” é adicional; ela não apareceu na coleta documentada.",
  pity: { title: "Pity paralelo", text: "O contador de Legendary continuou ativo depois da coleta. O marco dos baús não substitui nem reinicia a garantia de herói dourado." },
};

export const afkEconomy = {
  intro: "A renda AFK escala com o estágio alcançado. O estágio 82 passou a servir como novo snapshot de farming da conta antes da primeira tentativa no 83.",
  stages: [
    {
      kicker: "12 AGO. • ESTÁGIO 69",
      title: "361 gold/h + 16 recursos/h",
      text: "Conta com 87,41K de poder geral. Raid instantânea converte 10 de energia na produção AFK acumulada.",
    },
    {
      kicker: "24 AGO. • 82 SILVER BEACH",
      title: "395 gold/h + 17 recursos/h",
      text: "Limite exibido de 12 horas. O popup de recompensa confirmou EXP, gold, materiais de upgrade, livros/scrolls, equipamentos Lv.80 e materiais coloridos de progressão.",
    },
  ],
  note: {
    title: "Evidência preservada",
    text: "O pacote de US$20 e o UR Way continuam fora da wiki até existirem prints claros. O registro atual usa apenas capturas diretas do AFK/Raid.",
  },
};

export const dailyShopHistory = [
  {
    kicker: "LOJA DIÁRIA • JUL./AGO. 2026",
    title: "Até 10 refreshes pagos com ouro",
    text: "A rotação diária permitia até 10 atualizações usando ouro. O refresh podia antecipar fragmentos do núcleo, mas seu custo acumulado competia com os demais usos do recurso.",
  },
  {
    kicker: "PREÇOS HISTÓRICOS",
    title: "SR por 125–250; SSR por 500–1.000",
    text: "Capturas da rotação mostraram SR nas faixas de 125 e 250 moedas e SSR nas faixas de 500 e 1.000. Personagem, promoção e limite alteravam o preço; este snapshot não substitui os valores atuais do Hero Exchange.",
  },
];
