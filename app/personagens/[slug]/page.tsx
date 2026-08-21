import type { Metadata } from "next";
import { getHero, heroes } from "../../data/heroes";

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
  if (!hero) return <main><section className="section"><h1>Personagem não encontrado</h1><a href="/personagens">Voltar</a></section></main>;
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="/"><span className="brand-mark">OC</span><span><b>Oopsie Croco</b><small>Wiki de campo</small></span></a>
        <nav><a href="/personagens">Personagens</a><a href="/#coop">Co-op</a><a href="/#equipamentos">Equipamentos</a></nav>
        <span className="version">Ficha individual</span>
      </header>
      <article className="character-page">
        <header className="character-header">
          <p className="eyebrow">{hero.className}{hero.rarity ? ` • ${hero.rarity}` : ""}</p>
          <h1>{hero.name}</h1>
          {hero.aliases?.length ? <p className="aliases">Também conhecido como: {hero.aliases.join(", ")}</p> : null}
          <p className="character-lede">{hero.summary}</p>
          <div className="status-chips"><span>{hero.role}</span><span>Dados de campo</span></div>
        </header>

        <section className="character-note"><b>Observação prática</b><p>{hero.fieldNote}</p></section>

        <div className="character-columns">
          <section><p className="eyebrow">POR NÍVEL</p><h2>Habilidades gratuitas</h2>{hero.levelSkills.length ? hero.levelSkills.map((skill) => <article className="info-card" key={skill.name}><h3>{skill.name}</h3><p>{skill.description}</p></article>) : <p className="empty-state">Ainda precisamos registrar os níveis e os nomes oficiais.</p>}</section>
          <section><p className="eyebrow">DENTRO DA RUN</p><h2>Árvores e builds</h2>{hero.builds.length ? hero.builds.map((build) => <article className="build-detail" key={build.name}><span>{build.status}</span><h3>{build.name}</h3><p>{build.summary}</p><ol>{build.priorities.map((item) => <li key={item}>{item}</li>)}</ol></article>) : <p className="empty-state">Árvore ainda não documentada.</p>}</section>
        </div>

        <div className="character-columns compact">
          <section><p className="eyebrow">SINERGIAS</p><ul className="plain-list">{hero.synergies.map((item) => <li key={item}>{item}</li>)}</ul></section>
          <section><p className="eyebrow">PENDÊNCIAS</p><ul className="plain-list pending">{hero.pending.map((item) => <li key={item}>{item}</li>)}</ul></section>
        </div>
        <aside className="evidence"><b>Fontes desta ficha</b><span>{hero.evidence.join(" • ")}</span></aside>
      </article>
    </main>
  );
}
