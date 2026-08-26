import Link from "next/link";
import { SiteHeader } from "./components/SiteHeader";
import { SiteFooter } from "./components/SiteFooter";
import { SectionHead } from "./components/SectionHead";
import { FactCard } from "./components/FactCard";
import { CalloutNote } from "./components/CalloutNote";
import { heroes } from "./data/heroes";
import { rarities } from "./data/equipment";
import { afkEconomy, dailyShopHistory, summonEconomy } from "./data/economy";
import { summonRules, heroSummonRates, mythicalSummon, heroExchange } from "./data/summons";
import { evidenceStandards, cleanupRoadmap, officialClasses } from "./data/research";
import { resourceChain } from "./data/strategy";

const systems = [
  {
    href: "/equipamentos",
    icon: "⚔️",
    tone: "gold",
    title: "Equipamentos",
    text: "Raridade, nível, gemas, refino e desmontagem — as cinco camadas que definem a força real de uma peça.",
    cta: "Entender o sistema",
  },
  {
    href: "/coop",
    icon: "🏰",
    tone: "sky",
    title: "Co-op Spire",
    text: "Dez andares compartilhados, escolhas sem refresh, bosses e as melhores fontes de equipamento do jogo.",
    cta: "Subir a torre",
  },
  {
    href: "/runs",
    icon: "🧪",
    tone: "berry",
    title: "Runs documentadas",
    text: "Resultados completos com dano por herói, usados para validar composições, sinergias e respostas de fase.",
    cta: "Ver o laboratório",
  },
  {
    href: "/ur",
    icon: "🏆",
    tone: "gold",
    title: "Heróis UR",
    text: "O Immortal Hero, a economia do Grail e a Expedition Squad — todo o caminho até a raridade mais alta do jogo.",
    cta: "Ver a linha UR",
  },
  {
    href: "/expedicao",
    icon: "🚩",
    tone: "croco",
    title: "Expedition Squad",
    text: "Quatro duplas em ciclos de 12h — a renda passiva da conta e a única fonte gratuita de Grail.",
    cta: "Ver o sistema",
  },
  {
    href: "/invocacao",
    icon: "🎟️",
    tone: "berry",
    title: "Invocação mítica",
    text: "As rotas até um herói SP: pity de 50, caixas de seleção e onde a ficha mítica sai mais barata.",
    cta: "Ver as rotas",
  },
  {
    href: "/personagens",
    icon: "🎴",
    tone: "croco",
    title: "Personagens",
    text: "Fichas individuais com habilidades por nível, builds, gemas exclusivas, história e pendências.",
    cta: "Abrir o arquivo",
  },
];

export default function Home() {
  return (
    <main>
      <SiteHeader active="/" />

      <section className="home-hero" id="inicio">
        <div className="home-hero-copy">
          <p className="eyebrow">GUIA CONSTRUÍDO JOGANDO</p>
          <h1>
            Mecânicas de Oopsie Croco, <em>documentadas em campo.</em>
          </h1>
          <p className="lede">
            Uma wiki prática sobre progressão, equipamentos, composições e modos de jogo,
            organizada a partir de prints, runs e testes reais.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary" href="/equipamentos">Entender equipamentos</Link>
            <Link className="btn btn-ghost" href="/personagens">Ver personagens</Link>
          </div>
          <span className="hero-updated">Atualizado em 24 ago. 2026</span>
        </div>
        <div className="cycle-card sticker-card">
          <span className="kicker">CICLO PRINCIPAL</span>
          <div className="cycle">
            <div><b>1</b><span>Evoluir heróis</span></div>
            <i aria-hidden="true">→</i>
            <div><b>2</b><span>Avançar no Co-op</span></div>
            <i aria-hidden="true">→</i>
            <div><b>3</b><span>Dropar equipamento</span></div>
            <i aria-hidden="true">↻</i>
          </div>
          <p>
            O Co-op é uma fonte central de equipamento. Equipamento melhor fortalece a conta e permite
            subir ainda mais no próprio modo.
          </p>
        </div>
      </section>

      <section className="section" id="sistemas">
        <SectionHead
          eyebrow="MAPA DA WIKI"
          title="Escolha um sistema"
          description="Cada área separa dado confirmado, observação de run e interpretação provável."
        />
        <div className="system-grid">
          {systems.map((system) => (
            <Link className={`system-card tone-${system.tone}`} href={system.href} key={system.href}>
              <span className="system-icon" aria-hidden="true">{system.icon}</span>
              <h3>{system.title}</h3>
              <p>{system.text}</p>
              <b>{system.cta} →</b>
            </Link>
          ))}
        </div>
      </section>

      <section className="section" id="cadeia">
        <SectionHead
          eyebrow={resourceChain.kicker}
          title={resourceChain.title}
          description={resourceChain.intro}
        />
        <ol className="rule-list">
          {resourceChain.links.map((link) => (
            <li key={link.from}>
              <b>
                {link.from} → {link.to}
              </b>
              <span>{link.note}</span>
            </li>
          ))}
        </ol>
        <CalloutNote tone="dark" title={resourceChain.loop.title} text={resourceChain.loop.text} />
        <CalloutNote tone="warning" title="A bifurcação do fragmento" text={resourceChain.loop.fork} />
        <CalloutNote tone="dark" title="A corrente se fecha num nó" text={resourceChain.irony} />
        <CalloutNote tone="info" title="O que isso muda na prática" text={resourceChain.lesson} />
      </section>

      <section className="section" id="metodo">
        <SectionHead
          eyebrow="MÉTODO"
          title="Como o material é organizado"
          description="Print forte, contexto, hipótese e pendência ficam separados para facilitar consulta e revisão."
        />
        <div className="fact-grid">
          {evidenceStandards.map((item) => (
            <FactCard key={item.title} kicker={item.kicker} title={item.title} text={item.text} />
          ))}
        </div>
        <div className="class-reference sticker-card">
          <span className="kicker">CLASSES OFICIAIS</span>
          <div>
            {officialClasses.map((className) => (
              <b className={`chip class-chip class-${className.toLowerCase()}`} key={className}>{className}</b>
            ))}
          </div>
        </div>
        <div className="research-roadmap sticker-card">
          <span className="kicker">ARRUMAÇÃO DO ARQUIVO</span>
          <div>
            {cleanupRoadmap.map((item) => (
              <article key={item.stage}>
                <b>{item.stage}</b>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="afk">
        <SectionHead
          eyebrow="ECONOMIA"
          title="AFK e Raid"
          description={afkEconomy.intro}
        />
        <div className="fact-grid">
          {afkEconomy.stages.map((stage) => (
            <FactCard key={stage.kicker} kicker={stage.kicker} title={stage.title} text={stage.text} />
          ))}
        </div>
        <CalloutNote tone="warning" title={afkEconomy.note.title} text={afkEconomy.note.text} />
      </section>

      <section className="section" id="herois">
        <SectionHead
          eyebrow="REFERÊNCIA"
          title="Heróis em foco"
          description="Primeiros registros para as páginas de personagens e builds."
        />
        <div className="hero-cards">
          {heroes.slice(0, 3).map((hero) => (
            <Link href={`/personagens/${hero.slug}`} key={hero.slug}>
              <article className="sticker-card">
                <span className={`chip class-chip class-${hero.className.toLowerCase()}`}>
                  {hero.className.toUpperCase()}
                </span>
                <h3>{hero.name}</h3>
                <p>{hero.summary}</p>
                <b>Ver ficha completa →</b>
              </article>
            </Link>
          ))}
        </div>
        <Link className="directory-link" href="/personagens">Abrir arquivo de personagens →</Link>
      </section>

      <section className="section" id="invocacoes">
        <SectionHead
          eyebrow="ECONOMIA"
          title="Marco de 50 invocações"
          description={summonEconomy.intro}
        />
        <div className="fact-grid">
          {summonEconomy.chests.map((chest) => (
            <FactCard key={chest.kicker} kicker={chest.kicker} title={chest.title} text={chest.text} />
          ))}
        </div>
        <CalloutNote tone="info" title="Projeção direta" text={summonEconomy.projection} />
        <CalloutNote tone="warning" title={summonEconomy.pity.title} text={summonEconomy.pity.text} />
        <div className="fact-grid three">
          <FactCard kicker={summonRules.kicker} title={summonRules.title} text={summonRules.text} />
          <FactCard kicker={mythicalSummon.kicker} title={mythicalSummon.title} text={mythicalSummon.text} />
          <FactCard kicker={heroExchange.kicker} title={heroExchange.title} text={heroExchange.text} />
        </div>
        <div className="dismantle-layout">
          <div className="table-wrap sticker-card">
            <table className="game-table">
              <thead>
                <tr><th>Hero Summon (Rate Details)</th><th>Banner Lv.1</th><th>Lv.2</th><th>Lv.3</th></tr>
              </thead>
              <tbody>
                {heroSummonRates.rows.map((row) => (
                  <tr key={row.item}><td>{row.item}</td><td>{row.lv1}</td><td>{row.lv2}</td><td>{row.lv3}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="table-wrap sticker-card">
            <table className="game-table">
              <thead>
                <tr><th>Mythical Summon</th><th>Taxa</th></tr>
              </thead>
              <tbody>
                {mythicalSummon.rates.map((row) => (
                  <tr key={row.item}><td>{row.item}</td><td>{row.chance}</td></tr>
                ))}
                {heroExchange.rows.map((row) => (
                  <tr key={row.hero}><td>Exchange: {row.hero}</td><td>{row.price} · {row.limit}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <CalloutNote tone="warning" title="Leituras com ressalva" text={heroSummonRates.note} />
      </section>

      <section className="section" id="loja-diaria">
        <SectionHead
          eyebrow="ECONOMIA HISTÓRICA"
          title="Rotação da loja diária"
          description="Valores vistos em julho/agosto de 2026; snapshots antigos não substituem os preços atuais."
        />
        <div className="fact-grid">
          {dailyShopHistory.map((item) => (
            <FactCard key={item.title} kicker={item.kicker} title={item.title} text={item.text} />
          ))}
        </div>
      </section>

      <section className="section" id="raridades">
        <SectionHead eyebrow="HERÓIS" title="Raridades registradas" />
        <div className="rarity-row">
          {rarities.map((rarity) => (
            <article key={rarity.name} data-rarity={rarity.name}>
              <b>{rarity.name}</b>
              <span>{rarity.color}</span>
              <small>{rarity.note}</small>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
