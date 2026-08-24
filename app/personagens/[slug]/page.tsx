import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader } from "../../components/SiteHeader";
import { SiteFooter } from "../../components/SiteFooter";
import { getHero, heroes } from "../../data/heroes";

const confidenceLegend = [
  { key: "confirmed", label: "Confirmado pela tela", description: "Texto, número ou condição legível diretamente no jogo." },
  { key: "observed", label: "Observado em batalha", description: "Comportamento visto em uma run, mas não explicado integralmente pela interface." },
  { key: "inferred", label: "Interpretação provável", description: "Leitura coerente das evidências, mantida explicitamente como hipótese." },
  { key: "missing", label: "Não informado pelo jogo", description: "Duração, chance, multiplicador ou limite omitido pela própria descrição." },
  { key: "translation", label: "Tradução inconsistente", description: "Nomes ou efeitos conflitantes entre telas, idiomas ou partes da interface." },
] as const;

function storyTitle(slug: string, name: string) {
  if (slug === "lilith") return "Pesadelos de Runecity";
  if (slug === "mia-morning-dew") return "Origem da Fire Spirit Master";
  return `História de ${name}`;
}

export function generateStaticParams() {
  return heroes.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const hero = getHero(slug);
  if (!hero) return { title: "Personagem não encontrado — Oopsie Croco Wiki" };
  return {
    title: `${hero.name} — Oopsie Croco Wiki`,
    description: hero.summary,
    openGraph: { title: `${hero.name} — Oopsie Croco Wiki`, description: hero.summary, images: [] },
    twitter: { card: "summary", title: `${hero.name} — Oopsie Croco Wiki`, description: hero.summary, images: [] },
  };
}

export default async function HeroPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const hero = getHero(slug);
  if (!hero) {
    return (
      <main>
        <SiteHeader active="/personagens" />
        <section className="section">
          <h1>Personagem não encontrado</h1>
          <Link className="directory-link" href="/personagens">Voltar ao arquivo →</Link>
        </section>
        <SiteFooter />
      </main>
    );
  }

  return (
    <main>
      <SiteHeader active="/personagens" />
      <article className="character-page">
        <header className={`character-header${hero.image ? " with-portrait" : ""}`}>
          <div className="character-intro">
            <p className="eyebrow">
              {hero.className}
              {hero.rarity ? ` • ${hero.rarity}` : ""}
            </p>
            <h1>{hero.name}</h1>
            {hero.aliases?.length ? (
              <p className="aliases">Também conhecido como: {hero.aliases.join(", ")}</p>
            ) : null}
            <p className="character-lede">{hero.summary}</p>
            <div className="chip-row">
              <span className="chip chip-light">{hero.role}</span>
              <span className="chip chip-light">Dados de campo</span>
            </div>
          </div>
          {hero.image ? (
            <figure className="character-portrait">
              <img src={hero.image} alt={`Visual oficial de ${hero.name}`} />
              <figcaption>Visual oficial no jogo</figcaption>
            </figure>
          ) : null}
        </header>

        {hero.identity?.length || hero.stats?.length ? (
          <div className="character-facts">
            {hero.identity?.length ? (
              <section className="sticker-card">
                <p className="eyebrow">IDENTIDADE</p>
                <ul>{hero.identity.map((item) => <li key={item}>{item}</li>)}</ul>
              </section>
            ) : null}
            {hero.stats?.length ? (
              <section className="sticker-card">
                <p className="eyebrow">CONTA OBSERVADA</p>
                <ul>{hero.stats.map((item) => <li key={item}>{item}</li>)}</ul>
              </section>
            ) : null}
          </div>
        ) : null}

        {hero.story?.length ? (
          <section className="character-story">
            <p className="eyebrow">HISTÓRIA</p>
            <h2>{storyTitle(hero.slug, hero.name)}</h2>
            {hero.story.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </section>
        ) : null}

        <section className="character-note">
          <b>Observação prática</b>
          <p>{hero.fieldNote}</p>
        </section>

        <section className="confidence-legend sticker-card" aria-labelledby="confidence-title">
          <p className="eyebrow">LEGENDA DA FICHA</p>
          <h2 id="confidence-title">Como tratamos cada informação</h2>
          <div>
            {confidenceLegend.map((item) => (
              <article data-confidence={item.key} key={item.key}>
                <b>{item.label}</b>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        {hero.exclusiveGems?.length ? (
          <section className="exclusive-gems">
            <p className="eyebrow">GEMAS EXCLUSIVAS</p>
            <h2>Equipamentos próprios da personagem</h2>
            <div>
              {hero.exclusiveGems.map((gem) => (
                <article key={gem.name}>
                  <span>{gem.slot}</span>
                  <h3>{gem.name}</h3>
                  <b>{gem.baseStat}</b>
                  <p>{gem.effect}</p>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        <div className="character-columns">
          <section className="sticker-card">
            <p className="eyebrow">POR NÍVEL</p>
            <h2>Habilidades gratuitas</h2>
            {hero.levelSkills.length ? (
              hero.levelSkills.map((skill) => (
                <article className="info-card" key={skill.name}>
                  <h3>{skill.name}</h3>
                  <p>{skill.description}</p>
                  {skill.source ? <small>Fonte: {skill.source}</small> : null}
                </article>
              ))
            ) : (
              <p className="empty-state">Ainda precisamos registrar os níveis e os nomes oficiais.</p>
            )}
          </section>
          <section className="sticker-card">
            <p className="eyebrow">DENTRO DA RUN</p>
            <h2>Árvores e builds</h2>
            {hero.builds.length ? (
              hero.builds.map((build) => (
                <article className="build-detail" key={build.name}>
                  <span className="chip chip-green">{build.status}</span>
                  <h3>{build.name}</h3>
                  <p>{build.summary}</p>
                  <ol>{build.priorities.map((item) => <li key={item}>{item}</li>)}</ol>
                </article>
              ))
            ) : (
              <p className="empty-state">Árvore ainda não documentada.</p>
            )}
          </section>
        </div>

        <div className="character-columns">
          <section className="sticker-card">
            <p className="eyebrow">SINERGIAS</p>
            <ul className="plain-list">{hero.synergies.map((item) => <li key={item}>{item}</li>)}</ul>
          </section>
          <section className="sticker-card">
            <p className="eyebrow">PENDÊNCIAS</p>
            <ul className="plain-list pending">{hero.pending.map((item) => <li key={item}>{item}</li>)}</ul>
          </section>
        </div>

        <aside className="callout callout-info">
          <b>Fontes desta ficha</b>
          <span>{hero.evidence.join(" • ")}</span>
        </aside>

        {hero.evidenceImages?.length ? (
          <section className="evidence-gallery">
            <p className="eyebrow">EVIDÊNCIAS VISUAIS</p>
            <h2>Prints originais</h2>
            <div className="shot-grid three tall">
              {hero.evidenceImages.map((item) => (
                <figure className="shot" key={item.src}>
                  <a href={item.src} target="_blank" rel="noreferrer">
                    <img src={item.src} alt={item.caption ?? item.alt ?? "Evidência visual"} loading="lazy" />
                  </a>
                  <figcaption><span>{item.caption ?? item.alt}</span></figcaption>
                </figure>
              ))}
            </div>
          </section>
        ) : null}
      </article>
      <SiteFooter />
    </main>
  );
}
