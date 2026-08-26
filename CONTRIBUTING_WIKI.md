# Como ampliar a Oopsie Croco Wiki

## Princípio

Uma conversa ou agente deve cuidar de um assunto por vez. Não coloque conhecimento novo diretamente em `app/page.tsx` quando ele pertencer a uma página especializada.

## Onde registrar cada informação

- Personagens, aliases, habilidades por nível, builds e pendências: `app/data/heroes/<slug>.ts` (um arquivo por herói; registre novos heróis também no `app/data/heroes/index.ts`)
- Tipos compartilhados das fichas: `app/data/types.ts`
- Página individual de personagem: gerada automaticamente em `/personagens/<slug>`
- Co-op (regras, custos, boss, andares, drops): `app/data/coop.ts` → página `/coop`
- Runs documentadas e núcleo de time: `app/data/combatRuns.ts` → página `/runs`
- Monstros descobertos fora do Co-op: `app/data/enemies.ts`
- Equipamentos, gemas, refino e desmontagem: `app/data/equipment.ts` → página `/equipamentos`
- Economia de invocações: `app/data/economy.ts` (exibida na home)
- Heróis UR e o evento Immortal Hero: `app/data/immortal.ts` → página `/ur`
- Expedition Squad: `app/data/expedition.ts` → página `/expedicao`
- Invocação mítica, evento de invocação e Battle Pass: `app/data/summons.ts` → página `/invocacao`
- Prints publicados: `public/screenshots/`
- Visual (cores, cards, tipografia): `app/styles/` — não estilize inline nas páginas

## Prints

Print bruto de celular carrega barra de status, HUD do mapa e o overlay escurecido
por trás dos modais — contexto que compete com o assunto. Todo print publicado passa
por recorte antes de entrar em `public/screenshots/`.

```bash
python3 scripts/shots.py detect img_game/*.jpg     # sugere a caixa do painel
python3 scripts/shots.py build scripts/shots.json  # gera os recortes
```

O manifesto `scripts/shots.json` guarda uma entrada por print: origem, destino,
caixa de corte (`"auto"` detecta o painel claro sobre o overlay) e o `focus`, que
assenta o recorte como cartão arredondado sobre o fundo neutro `--ink`. Quando a
tela do jogo já corta a arte — e não há enquadramento que resolva —, o
`fade_bottom` do `focus` dissolve a base no fundo neutro: a transição lê como
decisão de layout, o corte reto lê como erro.

Regras do recorte:

- Enquadre só o assunto. Se o print mostra um modal, a caixa é o modal — com a
  barra de título, que identifica a tela.
- Prefira a origem mais limpa. Um banner aparece tanto no popup do mapa quanto na
  tela do próprio evento; a segunda não tem HUD atravessando o fundo.
- Não descentralize para fugir de um ícone. Se o HUD encosta na arte, use `patches`
  em vez de cortar por cima dela: cada patch apaga um retângulo preenchendo-o com o
  gradiente do entorno. Vale só para enfeite — nunca sobre texto ou número que sirva
  de evidência, e sempre registrado na nota da entrada.
- Os brutos ficam em `img_game/`, fora do git. Só o recorte é versionado.

## Leia o painel de regras primeiro

A lição mais cara de 26 ago. 2026: quase toda descoberta grande daquele dia
veio de abrir o `?` de uma tela e transcrever o texto — regras que já estavam
em prints antigos e nunca tinham sido lidas.

Antes de deduzir taxa, custo ou teto a partir de observação:

- Abra o `?` da tela e transcreva as regras na íntegra, em inglês, junto da
  tradução. É a convenção que as fichas de personagem já seguem.
- Procure a regra que impõe teto. Três derivações caíram naquele dia por
  assumir uniformidade onde havia estrutura: a renda de Grail não era plana,
  o sorteio não era ilimitado, o custo de nível não era constante.
- Rotule a aritmética da wiki como tal e escreva a premissa que a sustenta.
  Quando a premissa cair, fica claro o que cai junto — e a retratação vira
  uma linha, não uma reescrita.
- Quem joga tem contagem real. Antes de projetar renda a partir de um ciclo
  fotografado, pergunte o acumulado.

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

## Grau de confiança das informações

Todas as fichas exibem a mesma legenda. Ao escrever ou revisar conteúdo, preserve estas categorias:

- **Confirmado pela tela:** texto, número ou condição legível diretamente no jogo.
- **Observado em batalha:** comportamento visto em uma run, mas não explicado integralmente pela interface.
- **Interpretação provável:** conclusão coerente com as evidências, sempre apresentada como hipótese.
- **Não informado pelo jogo:** duração, chance, multiplicador, limite ou outra propriedade omitida pela descrição.
- **Tradução inconsistente:** nomes ou efeitos conflitantes entre telas, idiomas ou partes da interface.

Nunca transforme observação ou interpretação em informação confirmada. Quando o jogo omitir um valor, registre a omissão em vez de estimá-lo pela tradução.
