import Link from "next/link";
import { SiteHeader } from "./components/SiteHeader";
import { SiteFooter } from "./components/SiteFooter";
import { SectionHead } from "./components/SectionHead";
import { FactCard } from "./components/FactCard";
import { CalloutNote } from "./components/CalloutNote";
import { heroes } from "./data/heroes";
import { rarities } from "./data/equipment";
import { afkEconomy, summonEconomy } from "./data/economy";
import { summonRules, heroSummonRates, mythicalSummon, heroExchange } from "./data/summons";

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
    text: "Resultados completos com dano por herói, usados para validar builds, sinergias e counters.",
    cta: "Ver o laboratório",
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
            O sistema que o jogo <em>não explica direito.</em>
          </h1>
          <p className="lede">
            Uma wiki prática de Oopsie Croco sobre progressão, equipamentos, builds e modos de jogo —
            documentada a partir das telas e testes reais.
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
          description="Cada área tem página própria, alimentada por prints e runs reais. Nada aqui é adivinhação."
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
