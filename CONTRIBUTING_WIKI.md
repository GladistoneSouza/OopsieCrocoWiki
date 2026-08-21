# Como ampliar a Oopsie Croco Wiki

## Princípio

Uma conversa ou agente deve cuidar de um assunto por vez. Não coloque conhecimento novo diretamente em `app/page.tsx` quando ele pertencer a uma página especializada.

## Onde registrar cada informação

- Personagens, aliases, habilidades por nível, builds e pendências: `app/data/heroes.ts`
- Página individual de personagem: gerada automaticamente em `/personagens/<slug>`
- Co-op, regras gerais e recompensas: futuro módulo `app/data/coop.ts`
- Monstros e formações por andar: futuro módulo `app/data/enemies.ts`
- Equipamentos, gemas, refino e desmontagem: futuro módulo `app/data/equipment.ts`
- Prints publicados: `public/screenshots/`

## Regra de confiabilidade

Classifique mentalmente cada afirmação antes de escrever:

1. **Confirmada na tela** — texto ou número aparece claramente em print.
2. **Observada em run** — comportamento visto pelo jogador, mas sem texto completo.
3. **Hipótese** — interpretação ainda dependente de teste.

Nunca transforme uma hipótese em regra. Use “aparentemente”, “observado” ou acrescente uma pendência.

## Fluxo para uma conversa especializada

1. Reunir os prints e falas da conversa.
2. Identificar o personagem pelo nome oficial e aliases usados pelo jogador.
3. Atualizar somente o registro correspondente em `app/data/heroes.ts`.
4. Preencher `pending` com tudo que ainda exige print ou confirmação.
5. Rodar o build antes de entregar.
6. Deixar a integração e publicação final para a conversa editora da wiki.

## Modelo mínimo de personagem

Cada personagem deve conter: `slug`, `name`, `className`, `role`, `summary`, `fieldNote`, `levelSkills`, `builds`, `synergies`, `evidence` e `pending`.
