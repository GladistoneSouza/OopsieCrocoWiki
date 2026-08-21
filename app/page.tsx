import { heroes } from "./data/heroes";

const rarities = [
  { name: "R", color: "Azul", note: "Base da progressão de heróis" },
  { name: "SR", color: "Roxo", note: "Intermediário" },
  { name: "SSR", color: "Dourado", note: "Heróis e recursos valiosos" },
  { name: "SP", color: "Vermelho", note: "Acima do SSR" },
  { name: "UR", color: "Colorido", note: "Tier mais raro observado" },
];

const equipmentLayers = [
  { n: "01", title: "Raridade", text: "Define o tier estrutural da peça. Um Mythic vermelho pode superar um Legendary dourado mesmo alguns níveis abaixo." },
  { n: "02", title: "Nível", text: "Eleva o atributo-base dentro do mesmo tier. É importante, mas não deve ser comparado isoladamente." },
  { n: "03", title: "Aprimoramento", text: "O valor +58, +59 e semelhantes representa o reforço aplicado à peça." },
  { n: "04", title: "Gemas", text: "Cada peça recebe até cinco bônus. Eles podem fortalecer classe, personagem, modo, tipo de inimigo ou condição de combate." },
  { n: "05", title: "Refino", text: "Rola atributos e tem 20% de chance de gerar um efeito especial. Efeitos úteis devem ser travados antes de novas tentativas." },
];

const gems = [
  ["Shadow Wolf", "+15% dano", "Armadura"],
  ["Assassino", "+35% dano", "Arma + anel + escudo"],
  ["Elite e boss", "+64% dano", "Arma + armadura"],
  ["Alvo acima de 70% HP", "+50% dano", "Arma + anel"],
  ["Arqueiro", "+12,5% dano", "Capacete"],
  ["Primeiros 5 andares", "+64% dano", "Colar + escudo"],
];

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="Oopsie Croco Wiki — início"><span className="brand-mark">OC</span><span><b>Oopsie Croco</b><small>Wiki de campo</small></span></a>
        <nav aria-label="Navegação principal"><a href="#equipamentos">Equipamentos</a><a href="#gemas">Gemas</a><a href="#invocacoes">Invocações</a><a href="#coop">Co-op</a><a href="/personagens">Personagens</a></nav>
        <span className="version">v0.1 • em construção</span>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy"><p className="eyebrow">GUIA CONSTRUÍDO JOGANDO</p><h1>O sistema que o jogo<br/><em>não explica direito.</em></h1><p className="lede">Uma wiki prática sobre progressão, equipamentos, builds e modos de jogo — documentada a partir das telas e testes reais.</p><div className="hero-actions"><a className="primary" href="#equipamentos">Entender equipamentos ↓</a><span>Atualizado em 21 ago. 2026</span></div></div>
        <div className="progress-card"><span className="card-kicker">CICLO PRINCIPAL</span><div className="cycle"><div><b>1</b><span>Evoluir heróis</span></div><i>→</i><div><b>2</b><span>Avançar no Co-op</span></div><i>→</i><div><b>3</b><span>Dropar equipamento</span></div><i>↻</i></div><p>O Co-op é uma fonte central de equipamento. Equipamento melhor fortalece a conta e permite subir ainda mais no próprio modo.</p></div>
      </section>

      <section className="section" id="equipamentos">
        <div className="section-head"><div><p className="eyebrow">SISTEMA 01</p><h2>Equipamentos</h2></div><p>Não compare peças olhando somente o número do nível. A força final resulta de várias camadas.</p></div>
        <div className="rarity-rule"><span className="legendary-dot"/><b>Legendary</b><span className="arrow">→</span><span className="mythic-dot"/><b>Mythic</b><p>Na prática observada, o salto de tier pode valer mais que alguns níveis de diferença.</p></div>
        <div className="layer-grid">{equipmentLayers.map((item) => <article key={item.n}><span>{item.n}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
        <aside className="example"><span>EXEMPLO REAL</span><p><b>Mythic nível 83</b> pode ser mais forte que <b>Legendary nível 85</b>. Ordem de comparação recomendada: <strong>raridade → atributo-base → nível/aprimoramento → gemas → efeito de refino.</strong></p></aside>
      </section>

      <section className="section recycle-section" id="reciclagem">
        <div className="section-head"><div><p className="eyebrow">SISTEMA 02</p><h2>Desmontagem</h2></div><p>Peças sem uso podem ser convertidas em ouro e material de refino. O preview mostra o retorno antes da confirmação.</p></div>
        <div className="recycle-layout">
          <div className="table-wrap light-table"><table><thead><tr><th>Qualidade</th><th>Nível</th><th>Ouro</th><th>Material</th></tr></thead><tbody><tr><td><i className="q normal"/>Normal</td><td>80</td><td>179</td><td>36</td></tr><tr><td><i className="q excellent"/>Excellent</td><td>80</td><td>297</td><td>72</td></tr><tr><td><i className="q excellent"/>Excellent</td><td>88</td><td>366</td><td>90</td></tr><tr><td><i className="q rare"/>Rare</td><td>88</td><td>514</td><td>135</td></tr><tr><td><i className="q epic"/>Epic</td><td>83</td><td>585</td><td>234</td></tr><tr><td><i className="q epic"/>Epic</td><td>86</td><td>633</td><td>252</td></tr><tr><td><i className="q epic"/>Epic</td><td>88</td><td>663</td><td>270</td></tr><tr><td><i className="q legendary"/>Legendary</td><td>86</td><td>772</td><td>420</td></tr></tbody></table></div>
          <div className="sum-proof"><span>LOTE COMPROVADO</span><h3>15 peças somadas</h3><p>1 Legendary, 6 Epic, 4 Rare, 3 Excellent e 1 Normal</p><strong>7.672 ouro</strong><strong>2.706 materiais</strong><hr/><p>A soma dos 15 valores individuais fecha exatamente com o preview do lote.</p><small>Nos exemplos de mesmo nível e qualidade, slots diferentes deram o mesmo retorno. A evidência indica que o valor depende de qualidade + nível, não do tipo da peça.</small></div>
        </div>
        <div className="filter-note"><b>Filtros disponíveis</b><span>Nível: abaixo de 20, 40, 60, 80, 100 ou 120.</span><span>Qualidade: abaixo de Common, Great, Rare, Epic, Legendary ou Mythical.</span></div>
        <div className="mini-gallery"><figure><img src="/screenshots/dismantle-full-batch.jpg" alt="Preview de desmontagem de quinze equipamentos"/><figcaption>Lote completo: 15 peças retornam 7.672 ouro + 2.706 materiais.</figcaption></figure><figure><img src="/screenshots/dismantle-legendary-86.jpg" alt="Desmontagem de arma Legendary nível 86"/><figcaption>Legendary 86: 772 ouro + 420 materiais.</figcaption></figure><figure><img src="/screenshots/dismantle-excellent.jpg" alt="Desmontagem de equipamento Excellent nível 88"/><figcaption>Excellent 88: 366 ouro + 90 materiais.</figcaption></figure><figure><img src="/screenshots/dismantle-epic-pair.jpg" alt="Desmontagem simultânea de dois equipamentos Epic"/><figcaption>Dois Epic selecionados: retorno somado antes de confirmar.</figcaption></figure></div>
      </section>

      <section className="section dark-section" id="gemas">
        <div className="section-head"><div><p className="eyebrow">SISTEMA 03</p><h2>Gemas & síntese</h2></div><p>Até cinco gemas por peça. Quatro gemas idênticas e da mesma qualidade podem ser sintetizadas para gerar uma superior.</p></div>
        <div className="gem-layout"><div className="gem-stack" aria-label="Exemplo de síntese"><div className="gem purple">◆</div><span>× 4</span><i>→</i><div className="gem gold">◆</div><small>Mesma gema + mesma qualidade</small></div><div className="table-wrap"><table><thead><tr><th>Bônus documentado</th><th>Total atual</th><th>Origem</th></tr></thead><tbody>{gems.map(([a,b,c]) => <tr key={a}><td>{a}</td><td>{b}</td><td>{c}</td></tr>)}</tbody></table></div></div>
        <div className="warning"><b>Nota de fórmula</b><span>Ainda precisamos testar se categorias diferentes somam ou multiplicam entre si. Os valores acima registram apenas os bônus visíveis.</span></div>
        <div className="coop-facts">
          <article><span>REFINO CONFIRMADO</span><b>Stage Mastery</b><p>Exemplo observado: Stage Battle Damage +5,62%.</p></article>
          <article><span>4 CLASSES</span><b>Master of All Trades</b><p>Exemplo observado: All Damage +6,06% e Damage Reduction +6,06% ao usar quatro classes.</p></article>
          <article><span>DIREÇÃO DE BUILD</span><b>Bônus universais primeiro</b><p>All Damage, Adventurer Damage e Attack servem ao núcleo inteiro; bônus de classe devem acompanhar os carries realmente usados.</p></article>
        </div>
      </section>

      <section className="section recycle-section" id="invocacoes">
        <div className="section-head"><div><p className="eyebrow">ECONOMIA 01</p><h2>Marco de 50 invocações</h2></div><p>Os três baús são cumulativos. A coleta registrada entregou todas as recompensas garantidas de uma vez.</p></div>
        <div className="coop-facts">
          <article><span>COMMON CHEST</span><b>250 moedas</b><p>Moedas para o Hero Exchange.</p></article>
          <article><span>MONTHLY PASS</span><b>250 moedas</b><p>Também entrega moedas para o Hero Exchange.</p></article>
          <article><span>LIFETIME PASS</span><b>2 fichas míticas</b><p>Fichas vermelhas para a linha de invocação mítica.</p></article>
          <article><span>TOTAL COM PASSES</span><b>500 + 2</b><p>500 moedas de troca e 2 fichas míticas a cada ciclo de 50 summons normais.</p></article>
        </div>
        <aside className="example"><span>PROJEÇÃO DIRETA</span><p><b>250 summons normais</b> completam cinco ciclos: <strong>2.500 moedas do Hero Exchange + 10 fichas míticas.</strong> A recompensa opcional marcada como “Chance to Obtain” é adicional; ela não apareceu na coleta documentada.</p></aside>
        <div className="warning"><b>Pity paralelo</b><span>O contador de Legendary continuou ativo depois da coleta. O marco dos baús não substitui nem reinicia a garantia de herói dourado.</span></div>
      </section>

      <section className="section">
        <div className="section-head"><div><p className="eyebrow">ESTRATÉGIA DE CAMPO</p><h2>Núcleo 4 + 1</h2></div><p>Estrutura observada para runs longas. A quinta vaga responde ao problema específico da fase.</p></div>
        <div className="run-flow">
          <article><span>FRONTLINE + FEAR</span><h3>Kazer’s Darkblade</h3><p>Tanka, aplica Fear e converte os acúmulos em dano. A cura durante Blade Storm é o próximo breakpoint importante.</p></article>
          <article><span>CARRY DE BOSS</span><h3>Shadow Wolf</h3><p>Escala Blood, múltiplos Bites e dano com HP baixo.</p></article>
          <article><span>INFRAESTRUTURA</span><h3>Sakura</h3><p>Cura, shield, mana e Yang: Rapid para acelerar o time inteiro.</p></article>
          <article><span>CORPOS + AGGRO</span><h3>Maya</h3><p>Esqueletos absorvem ataques, protegem a retaguarda e mantêm dano constante.</p></article>
        </div>
        <aside className="counter-rule"><b>Quinta vaga flexível</b><span>Arqueiro quando falta DPS; Controller quando uma interrupção decide a luta; Tank apenas quando frontline e summons não bastam; segundo Summoner quando mais corpos e aggro oferecem mais valor.</span></aside>
      </section>

      <section className="section" id="coop">
        <div className="section-head"><div><p className="eyebrow">MODO 01</p><h2>Co-op Spire</h2></div><p>Uma run compartilhada de dez combates, sem refresh e sem segunda chance.</p></div>
        <div className="coop-grid"><ol><li><b>10 andares</b><span>O objetivo é sobreviver e vencer todos.</span></li><li><b>Dois formatos</b><span>Alguns intervalos são 2 escolhas entre 4 cartas; outros são 1 escolha entre 3.</span></li><li><b>Tempo limitado</b><span>Se o cronômetro terminar, o jogo escolhe automaticamente.</span></li><li><b>Sem refresh</b><span>Personagens e habilidades oferecidos são aleatórios.</span></li><li><b>Morte encerra a tentativa</b><span>Não existe revive ou segunda chance.</span></li></ol><aside className="build-card"><span>RUN DOCUMENTADA • DIFICULDADE 5</span><h3>Bounty Hunter</h3><strong>4,31M</strong><small>DANO • MVP</small><div className="bar"><i/></div><p>71,72% do dano da batalha veio do time aliado. A Pistoleira causou cerca de 4,6× o dano do melhor herói do parceiro.</p><div className="tags"><b>Steel Core</b><b>Loading +200%</b><b>Mercury</b><b>Explosion</b><b>Ammo Expert</b><b>Barrage Time</b></div></aside></div>
        <div className="run-flow">
          <article><span>ESTÁGIO 1 • SEMPRE 2/4</span><h3>Escolha a dupla inicial</h3><p>Sempre aparecem quatro personagens e você escolhe dois. Eles entram somente com as habilidades gratuitas já desbloqueadas pelo próprio nível.</p></article>
          <article><span>ESTÁGIO 2 • 2/4</span><h3>Expandir ou evoluir</h3><p>As quatro cartas misturam personagens novos e upgrades dos já escolhidos. É possível pegar 2 upgrades, 2 personagens ou 1 de cada.</p></article>
          <article><span>DEPOIS • PADRÃO A CONFIRMAR</span><h3>2/4 ou 1/3</h3><p>Os intervalos alternam entre escolher duas de quatro e escolher uma de três. Ainda não sabemos quais andares usam cada formato.</p></article>
        </div>
        <aside className="counter-rule"><b>Contador do personagem</b><span>Não começa automaticamente em 2. O valor inicial depende das habilidades gratuitas desbloqueadas pelo nível permanente. Personagens evoluídos costumam entrar com duas; a Artemis, no nível observado, entraria zerada. Cada upgrade escolhido na run acrescenta +1.</span></aside>
        <div className="mini-gallery coop-picks"><figure><img src="/screenshots/coop-initial-pick.jpg" alt="Primeira escolha do Co-op com quatro personagens"/><figcaption>Estágio 1: quatro personagens, escolha obrigatória de dois.</figcaption></figure><figure><img src="/screenshots/coop-mixed-pick.jpg" alt="Escolha do estágio 2 misturando personagens e upgrades"/><figcaption>Estágio 2: personagens novos e upgrades podem aparecer juntos.</figcaption></figure></div>
        <div className="coop-facts">
          <article><span>CUSTO DO LÍDER</span><b>1 ticket + 20 stamina</b><p>O jogador que convida consome um ticket por partida. O primeiro ticket é recuperado automaticamente todos os dias.</p></article>
          <article><span>CUSTO DO ASSISTENTE</span><b>20 stamina</b><p>Ambos recebem recompensas de conclusão, mas partidas como assistente não contam para o ranking.</p></article>
          <article><span>DESCONEXÃO</span><b>Progresso preservado</b><p>Se houver desconexão durante a partida, a recompensa correspondente ao progresso atual é enviada pelo correio.</p></article>
          <article><span>DESBLOQUEIO DA DIFICULDADE 7</span><b>Capítulo 70 + dificuldade 6</b><p>É necessário alcançar o capítulo 70 e concluir a dificuldade anterior.</p></article>
        </div>
        <div className="coop-detail-grid">
          <article className="boss-card">
            <div className="detail-title"><span>BOSS • DIFICULDADE 6</span><b>Fraqueza: Invocador</b></div>
            <h3>Slime Queen</h3>
            <p className="boss-desc">Devora inimigos e possui forte capacidade de autocura.</p>
            <div className="skill-list"><div><b>Devour</b><span>Arremessa uma massa de slime que engole um alvo, priorizando unidades invocadas.</span></div><div><b>Split</b><span>Ao morrer, divide-se em numerosos slimes menores.</span></div><div><b>Regeneration</b><span>Restaura HP continuamente; a cura aumenta conforme o tempo de canalização.</span></div></div>
          </article>
          <article className="reward-card">
            <div className="detail-title"><span>DROP • DIFICULDADE 1</span><b>Equipamento ≥ nível 81*</b></div>
            <h3>Probabilidade de raridade</h3>
            <div className="drop-row normal"><b>Normal</b><span>10%</span></div><div className="drop-row excellent"><b>Excellent</b><span>35%</span></div><div className="drop-row rare"><b>Rare</b><span>30%</span></div><div className="drop-row epic"><b>Epic</b><span>20%</span></div><div className="drop-row legendary"><b>Legendary</b><span>5%</span></div>
            <p>*O nível mínimo exibido escala com o nível do Adventurer. A quantidade de peças depende das ondas vencidas: mais ondas, recompensa maior.</p>
          </article>
        </div>
        <div className="difficulty-four">
          <div className="detail-title"><span>BESTIÁRIO • DIFICULDADE 4</span><b>CONFIRMADO</b></div><h3>Inimigos com resposta específica</h3>
          <div className="enemy-grid"><article><h4>Mutated Slime</h4><b>Death Splitting</b><p>Sempre que é atingido por um Arqueiro, possui 40% de chance de se dividir e criar uma nova cópia.</p></article><article><h4>Goblin Warrior</h4><b>Stun ATK</b><p>Ataques básicos possuem 40% de chance de atordoar o alvo durante 1 segundo. Também foi observado Sluggish, que reduz Attack Speed.</p></article><article><h4>Ammonite Beast</h4><b>Charged Blast</b><p>Os ataques básicos exigem uma carga de 3 segundos e, quando disparados, causam dano em área.</p></article></div>
        </div>
        <div className="floor-map">
          <div className="floor-map-head"><div><span>DIFICULDADE 4</span><h3>Mapa de monstros por andar</h3></div><p>Composições reconstruídas pelos prints. Dois nomes permanecem provisórios até aparecer a ficha do monstro.</p></div>
          <div className="floor-table">
            <div className="floor-row"><b>1</b><span><i className="mob slime"/>Mutated Slime ×2</span></div>
            <div className="floor-row"><b>2</b><span><i className="mob slime"/>Mutated Slime ×2</span><span><i className="mob hood"/>Encapuzado verde ×4</span></div>
            <div className="floor-row"><b>3</b><span><i className="mob slime"/>Mutated Slime ×2</span><span><i className="mob goblin"/>Goblin Warrior ×2</span><span><i className="mob hood"/>Encapuzado verde ×3</span><span><i className="mob shell"/>Ammonite Beast ×2</span></div>
            <div className="floor-row"><b>4</b><span><i className="mob slime"/>Mutated Slime ×3</span><span><i className="mob goblin"/>Goblin Warrior ×2</span><span><i className="mob hood"/>Encapuzado verde ×2</span><span><i className="mob shell"/>Ammonite Beast ×4</span></div>
            <div className="floor-row"><b>5</b><span><i className="mob slime"/>Mutated Slime ×3</span><span><i className="mob goblin"/>Goblin Warrior ×3</span><span><i className="mob hood"/>Encapuzado verde ×3</span><span><i className="mob shell"/>Ammonite Beast ×3</span></div>
            <div className="floor-row unknown"><b>6</b><span>Composição ainda não registrada com clareza.</span></div>
            <div className="floor-row unknown"><b>7</b><span>Ammonite Beast confirmado; formação completa encoberta pela ficha.</span></div>
            <div className="floor-row unknown"><b>8–10</b><span>Composição ainda não registrada com clareza.</span></div>
          </div>
          <small>Observação: Death Splitting pode criar cópias adicionais durante o combate; a tabela registra apenas a formação inicial visível.</small>
        </div>
        <div className="mini-gallery enemy-shots three"><figure><img src="/screenshots/mutated-slime.jpg" alt="Ficha do inimigo Mutated Slime"/><figcaption>Mutated Slime: ataques de Arqueiro podem multiplicar a onda.</figcaption></figure><figure><img src="/screenshots/goblin-warrior.jpg" alt="Ficha do inimigo Goblin Warrior"/><figcaption>Goblin Warrior: 40% de stun por ataque básico.</figcaption></figure><figure><img src="/screenshots/ammonite-beast.jpg" alt="Ficha do inimigo Ammonite Beast"/><figcaption>Ammonite Beast: carrega por 3 segundos e causa dano em área.</figcaption></figure></div>
        <article className="victory-reward"><img src="/screenshots/coop-victory-reward.jpg" alt="Recompensa completa de vitória no Co-op"/><div><span>RECOMPENSA DE VITÓRIA</span><h3>O pacote vai além dos equipamentos</h3><p>Uma conclusão documentada entregou ouro, EXP, moedas/recursos, equipamentos de várias qualidades, livros de slot e gemas. A tela também mostrou limite diário de resgates e opção de Double Claim pelo Weekly Pass.</p><small>As quantidades e raridades variam; o print registra uma run específica, não uma tabela fixa.</small></div></article>
        <aside className="ranking-note"><b>Ranking observado</b><span>Conta no 15º lugar com progresso 5–10. O placar registra dificuldade e andar alcançado; líderes recebem recompensas únicas pela primeira conclusão de cada dificuldade.</span></aside>
        <div className="ingame-gallery" aria-label="Capturas do Co-op no jogo">
          <figure><img src="/screenshots/coop-difficulty-6.jpg" alt="Tela da dificuldade 6 do Co-op Spire"/><figcaption><b>Dificuldade 6</b><span>Slime Queen, fraqueza contra Invocador e recompensas do líder.</span></figcaption></figure>
          <figure><img src="/screenshots/slime-queen-regeneration.jpg" alt="Ficha da Slime Queen mostrando Regeneration"/><figcaption><b>Ficha do boss</b><span>Regeneration restaura HP e escala com o tempo de canalização.</span></figcaption></figure>
          <figure><img src="/screenshots/coop-ranking.jpg" alt="Ranking do Co-op Spire"/><figcaption><b>Ranking</b><span>Conta L2darkness no 15º lugar, com progresso 5–10.</span></figcaption></figure>
          <figure><img src="/screenshots/coop-drop-rates.jpg" alt="Probabilidades de equipamentos na dificuldade 1"/><figcaption><b>Drop da dificuldade 1</b><span>Probabilidades oficiais exibidas dentro do jogo.</span></figcaption></figure>
        </div>
      </section>

      <section className="section heroes" id="herois">
        <div className="section-head"><div><p className="eyebrow">REFERÊNCIA</p><h2>Heróis em foco</h2></div><p>Primeiros registros para as futuras páginas de personagens e builds.</p></div>
        <div className="hero-cards">{heroes.slice(0, 3).map((hero) => <a href={`/personagens/${hero.slug}`} key={hero.slug}><article><span className={`class ${hero.className.toLowerCase()}`}>{hero.className.toUpperCase()}</span><h3>{hero.name}</h3><p>{hero.summary}</p><b>Ver ficha completa →</b></article></a>)}</div>
        <a className="directory-link" href="/personagens">Abrir arquivo de personagens →</a>
      </section>

      <section className="section rarity-section"><div className="section-head"><div><p className="eyebrow">HERÓIS</p><h2>Raridades registradas</h2></div></div><div className="rarity-row">{rarities.map((r) => <article key={r.name} data-rarity={r.name}><b>{r.name}</b><span>{r.color}</span><small>{r.note}</small></article>)}</div></section>
      <footer><div className="brand"><span className="brand-mark">OC</span><span><b>Oopsie Croco Wiki</b><small>Conhecimento acumulado, não adivinhação.</small></span></div><p>Nome oficial do jogo ainda pendente de confirmação.</p></footer>
    </main>
  );
}
