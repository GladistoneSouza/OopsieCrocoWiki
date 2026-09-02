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

## Um despejo grande de prints

Quando chegam centenas de arquivos de uma vez, abrir um por um não termina. O
caminho que funcionou em 31 ago. 2026, com 410 prints:

1. **Agrupar quase-duplicatas** por hash perceptual. Prints tirados com segundos
   de diferença são a mesma tela; 410 arquivos viraram 309 telas distintas.
2. **Montar folhas de contato** — grades de 12 miniaturas recortadas pelo
   `detect_panel` do `shots.py`, com um rótulo por célula. Vinte e seis folhas
   substituem 309 aberturas de arquivo, e telas parecidas ficam lado a lado se a
   ordem seguir um agrupamento visual grosseiro.
3. **Classificar por assunto** e mover. Nada é apagado: os brutos ficam em
   `img_game/<assunto>/`, renomeados para `AAAA-MM-DD_HH-MM-SS.jpg`, com
   `img_game/indice-prints.csv` guardando o nome original de cada um.

`img_game/organizar/` é a caixa de entrada — prints novos entram ali e saem
classificados. `img_game/LEIA-ME.md` descreve o que vai em cada pasta.

**Cuidado ao reorganizar:** o campo `src` de `scripts/shots.json` aponta para
caminhos dentro de `img_game/`. Mover arquivos quebra o `shots.py build` inteiro.
O conserto é repontar pelo `indice-prints.csv`; a prevenção é conferir se o
manifesto ainda resolve antes de commitar a mudança de pastas.

## Antes de pedir print novo, minere o que já existe

Em 31 ago. 2026 a pasta `img_game/herois-arte` estava rotulada como "arte" e
foi usada só para recortar retratos. Eram, na verdade, sessenta e sete telas
de exibição com nome, nível e o rodapé de poder, ATK, HP e DEF — incluindo a
Succubus fotografada em cada nível do 1 ao 8. A descoberta de que atributo de
SP é do nível e da classe, e não do herói, estava parada ali o tempo todo.

A lição é sobre o rótulo: ao classificar um lote, o nome da pasta descreve o
assunto da tela, não o que dá para extrair dela. Antes de dizer que um dado
não existe, abra alguns arquivos de cada pasta e olhe o rodapé.

Duas descobertas de 31 ago. 2026 não precisaram de captura nenhuma:

- As três páginas do Blessing Bestiary da Star Mage estavam publicadas em
  `public/screenshots/star-mage/` desde julho, e nenhuma das doze blessings tinha
  sido transcrita para a ficha.
- O EXP de classe — segunda moeda de upgrade, ao lado do fragmento — estava
  marcado como `NOVO` em `docs/triagem-prints/ncat_25.md` desde 24 ago. e nunca
  havia chegado ao `app/data/`.

Então, antes de listar pedidos de captura: varra `public/screenshots/` e
`docs/triagem-prints/` atrás do assunto. O README da triagem afirma que todo
conteúdo de alto valor foi incorporado — não é verdade, e a lacuna é sistemática:
o que a triagem classificou como NOVO nem sempre virou dado no site.

## Publicar uma imagem

Trocar o arquivo em `public/screenshots/` não basta. Três camadas seguram a
versão antiga, e em 31 ago. 2026 as três morderam em sequência:

1. **`dist/`** — o build copia `public/` para `dist/client/`. Regerar a imagem
   depois do build deixa o servidor entregando a cópia velha.
2. **Bundle do servidor** — o HTML renderizado vem do bundle carregado em memória.
   Rebuild sozinho não muda o caminho que a página aponta; precisa reiniciar.
3. **Cache do navegador** — os estáticos saem com `Cache-Control: public,
   max-age=3600` e sem validador. O Chrome segura a imagem por uma hora e F5 não
   revalida; se a URL já foi vista, renomeie o arquivo.

E a regra que fecha as três: **confira com `curl`, não com screenshot.** Comparar
`size_download` contra o tamanho em disco pega a divergência na hora. Tirar print
pelo mesmo servidor que serve o arquivo errado só confirma o erro.

## O retrato de personagem

O quadro do card é `aspect-ratio: 9 / 10` com `object-fit: contain`. Recorte fora
dessa proporção não é cortado — é encaixado, e sobra faixa vazia. O resultado lê
como impressão malfeita.

Na tela de exibição do herói (1220×2712), a régua é esta: o título fica em 0,08, a
linha do nível termina perto de 0,145, os botões laterais ocupam de 0,16 a 0,26, o
pedestal acaba em 0,42 e o próximo painel começa em 0,48. O enquadramento que cabe
no meio disso é **x de 0,175 a 0,808 e y de 0,156 a 0,4735** — dá 0,897, e serve
tanto para o fundo vermelho dos SP quanto para o dourado dos SSR.

## O que a ficha de personagem deve explicar

`levelSkills` lista as peças; sozinha, deixa o leitor somar vinte descrições de
cabeça. Quatro campos opcionais carregam a síntese:

- **`kit`** — o motor: o que o herói realmente faz, e os laços em que uma peça
  alimenta a outra. É onde mora a resposta para "como as skills conversam".
- **`combos`** — cadeias específicas, cada uma com `needs` e um `status` honesto
  (`confirmado`, `em teste`, `hipótese`). Sem run medida, é hipótese.
- **`strengths` / `weaknesses`** — onde ele ganha e onde quebra, incluindo o que
  o kit não resolve.

O material sai de ler as descrições lado a lado. Exemplos do que só aparece assim:
a execução da Catwoman pede 3 marcas de Prey e duas peças diferentes aplicam
exatamente 3; a imunidade a controle da Holy Knight pede 10 camadas com teto 5, o
que torna outra blessing pré-requisito dela; o cometa da Star Mage dispara a
cachoeira, então o ramo produtor carrega as duas douradas e o produzido carrega
uma.

Quando a leitura levantar uma pergunta que muda a build, escreva a pergunta em
`pending` em vez de escolher uma resposta.

## Trabalho que chega pronto

Quando outra sessão entregar alterações já feitas, confira cada número novo
contra um arquivo de evidência antes de commitar. Em 31 ago. 2026 uma entrega
trouxe catorze células de percentual em colunas que estavam marcadas `—` por não
terem sido capturadas, mais uma linha inteira inventada — sem que existisse print
daqueles níveis em lugar nenhum do repositório. Célula que era `—` e virou número
exige apontar o print.

O mesmo vale para faixa fechada a partir de um ponto medido: um herói nível 22
pedindo 100 fragmentos prova que o degrau sobe depois do 20, não que a faixa
inteira custe 100. Publique o ponto e deixe o total em branco.

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

## Qualidade não é prioridade

Duas perguntas que a wiki misturou por muito tempo:

- **Vale desenvolver este herói?** — responde-se lendo o kit.
- **Vale desenvolvê-lo agora?** — responde-se lendo o custo do próximo degrau.

São independentes, e a segunda muda toda vez que o herói sobe de nível. Um
herói excelente pode ser exatamente aquele em que não se deve gastar o
próximo fragmento, porque a maior parte da função dele já chegou.

A curva de fragmento sextuplica de faixa em faixa, então a diferença é
grande o bastante para dispensar opinião: em 31 ago. 2026, levar quatro
heroínas até o degrau que transforma cada uma custava 200 fragmentos, contra
800 para levar uma só do nível 15 ao 25. Ao escrever sobre um herói, separe
**kit**, **valor para a composição** e **custo do próximo degrau** — e nunca
trate cinco estrelas de kit como recomendação de continuar gastando.

Vale também registrar o formato da curva de cada um, porque muda a decisão:
adiantada (o essencial abre cedo e o resto é luxo), progressiva (cada degrau
faz os anteriores renderem mais) ou escada (degraus independentes, que
permitem comprar um, parar e voltar depois).

## Carta redesenhada vale como carta

Um card do jogo redesenhado por fora — passado por uma IA de imagem para ficar
legível, ou redigitado à mão — pode entrar na wiki como se fosse o recorte
original, desde que **o texto seja idêntico ao da tela**.

A régua de confiabilidade classifica a *afirmação*, não os pixels. "O Bestiary
da Mia traz Wildfire Rebirth: quando o Elemento de Fogo morre, tem chance de se
dividir em 1" é confirmado na tela do mesmo jeito, tenha o leitor visto o recorte
cru ou a versão redesenhada. Quem lê os dois sai com a mesma informação.

O que continua valendo:

- Conferir palavra por palavra contra o print antes de publicar. O redesenho é a
  única etapa do fluxo em que um erro de transcrição vira uma imagem convincente.
- Guardar o print de origem. Ele é o que permite a conferência depois.
- Não redesenhar o que não está na tela. Preencher um número que o jogo omite
  continua sendo invenção, em qualquer formato.

Uma carta redesenhada é cara e não se reproduz em lote. Vale para o punhado que
o recortador automático não consegue pegar limpo, não como substituto dele.

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
5. Rodar o build antes de entregar — e, se a mudança envolver imagem, reiniciar
   o servidor e conferir com `curl` (ver **Publicar uma imagem**).
6. Deixar a integração e publicação final para a conversa editora da wiki.

## Modelo mínimo de personagem

Cada personagem deve conter: `slug`, `name`, `className`, `role`, `summary`,
`fieldNote`, `levelSkills`, `builds`, `synergies`, `evidence` e `pending`.

Opcionais, mas é onde está o valor de leitura: `kit`, `combos`, `strengths`,
`weaknesses`, `artImage`, `stats`, `identity`, `story`, `exclusiveGems` e
`evidenceImages`.

## Grau de confiança das informações

Todas as fichas exibem a mesma legenda. Ao escrever ou revisar conteúdo, preserve estas categorias:

- **Confirmado pela tela:** texto, número ou condição legível diretamente no jogo.
- **Observado em batalha:** comportamento visto em uma run, mas não explicado integralmente pela interface.
- **Interpretação provável:** conclusão coerente com as evidências, sempre apresentada como hipótese.
- **Não informado pelo jogo:** duração, chance, multiplicador, limite ou outra propriedade omitida pela descrição.
- **Tradução inconsistente:** nomes ou efeitos conflitantes entre telas, idiomas ou partes da interface.

Nunca transforme observação ou interpretação em informação confirmada. Quando o jogo omitir um valor, registre a omissão em vez de estimá-lo pela tradução.
