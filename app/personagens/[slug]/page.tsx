import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader } from "../../components/SiteHeader";
import { SiteFooter } from "../../components/SiteFooter";
import { EvidenceCarousel } from "../../components/EvidenceCarousel";
import { StoryCarousel } from "../../components/StoryCarousel";
import { getHero, heroes } from "../../data/heroes";

const confidenceLegend = [
  { key: "confirmed", label: "Confirmado pela tela", description: "Texto, número ou condição legível diretamente no jogo." },
  { key: "observed", label: "Observado em batalha", description: "Comportamento visto em uma run, mas não explicado integralmente pela interface." },
  { key: "inferred", label: "Interpretação provável", description: "Leitura coerente das evidências, mantida explicitamente como hipótese." },
  { key: "missing", label: "Não informado pelo jogo", description: "Duração, chance, multiplicador ou limite omitido pela própria descrição." },
  { key: "translation", label: "Tradução inconsistente", description: "Nomes ou efeitos conflitantes entre telas, idiomas ou partes da interface." },
] as const;

function evidenceKind(src: string, label?: string) {
  const text = `${src} ${label ?? ""}`.toLowerCase();
  if (text.includes("profile") || text.includes("ficha")) return "Ficha";
  if (text.includes("bestiary") || text.includes("blessing")) return "Bestiary";
  if (text.includes("progress") || text.includes("level") || text.includes("nível") || text.includes("nivel")) return "Progressão";
  if (text.includes("story") || text.includes("background")) return "História";
  if (text.includes("run") || text.includes("battle") || text.includes("damage")) return "Run";
  if (text.includes("exchange") || text.includes("shop")) return "Loja";
  if (text.includes("gem")) return "Gema";
  return "Evidência";
}

function storyTitle(slug: string, name: string) {
  if (slug === "lilith") return "Pesadelos de Runecity";
  if (slug === "mia-morning-dew") return "Origem da Fire Spirit Master";
  return `História de ${name}`;
}

function originalStorySource(src: string) {
  return src.replace("/story-crops/", "/");
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

  const storyImageSources = new Set([
    ...(hero.storyImages?.flatMap((item) => [item.src, originalStorySource(item.src)]) ?? []),
    ...(hero.storySlides?.flatMap((item) => item.sourceImage ? [item.sourceImage, item.sourceImage.replace("/story-crops/", "/")] : []) ?? []),
  ]);
  const evidenceImages = hero.evidenceImages?.filter((item) => !storyImageSources.has(item.src)) ?? [];

  // Índice da coluna da esquerda: só entra seção que este herói realmente tem.
  const secoes = [
    hero.story?.length ? { id: "historia", label: "História" } : null,
    { id: "campo", label: "Observação prática" },
    hero.kit ? { id: "motor", label: "O motor" } : null,
    hero.levelShots?.length ? { id: "escada", label: "A escada na tela" } : null,
    hero.breakpoints ? { id: "degraus", label: "Níveis que valem" } : null,
    hero.strengths?.length || hero.weaknesses?.length ? { id: "forcas", label: "Ganha e quebra" } : null,
    hero.combos?.length ? { id: "combos", label: "Combos" } : null,
    hero.exclusiveGems?.length ? { id: "gemas", label: "Gemas exclusivas" } : null,
    { id: "habilidades", label: "Habilidades e builds" },
    { id: "sinergias", label: "Sinergias e pendências" },
    evidenceImages.length ? { id: "evidencias", label: "Evidências" } : null,
    { id: "legenda", label: "Legenda da ficha" },
  ].filter((item): item is { id: string; label: string } => item !== null);

  return (
    <main>
      <SiteHeader active="/personagens" />
      <article className="character-page">
        <header className={`character-header${hero.image || hero.artImage ? " with-portrait" : ""}`}>
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
          {hero.image || hero.artImage ? (
            <figure className={`character-portrait rarity-${hero.rarity?.toLowerCase() ?? "unknown"}`}>
              <img src={hero.artImage ?? hero.image} alt={`Arte de ${hero.name}`} />
              <figcaption aria-label={hero.artImage ? `${hero.rarity ?? "Arte"} · ${hero.name}` : `Visual oficial de ${hero.name}`}>
                <span className="portrait-rarity-badge">{hero.rarity ?? "Arte"}</span>
                <span className="portrait-name-plate">{hero.name}</span>
              </figcaption>
            </figure>
          ) : null}
        </header>

        <div className="character-layout">
          <nav className="character-index" aria-label={`Seções de ${hero.name}`}>
            <p className="eyebrow">NESTA FICHA</p>
            <ul>
              {secoes.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="character-main">

        {hero.story?.length ? (
          <section className="character-story" id="historia">
            <p className="eyebrow">HISTÓRIA</p>
            <h2>{storyTitle(hero.slug, hero.name)}</h2>
            {hero.storySlides?.length ? (
              <div className="story-carousel-panel" aria-label={`História de ${hero.name}`}>
                <StoryCarousel slides={hero.storySlides} />
              </div>
            ) : hero.storyImages?.length ? (
              <div className="story-carousel-panel" aria-label={`Prints da história de ${hero.name}`}>
                <EvidenceCarousel
                  items={hero.storyImages.map((item) => {
                    const label = item.caption ?? item.alt ?? "Print da história";
                    return { src: item.src, label, kind: item.title ?? "História" };
                  })}
                />
              </div>
            ) : null}
            {!hero.storySlides?.length ? (
              <div className="story-body">
                {hero.story.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            ) : null}
          </section>
        ) : null}

        <section className="character-note" id="campo">
          <b>Observação prática</b>
          <p>{hero.fieldNote}</p>
        </section>

        {hero.exclusiveGems?.length ? (
          <section className="exclusive-gems" id="gemas">
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

        {hero.kit ? (
          <section className="sticker-card" id="motor">
            <p className="eyebrow">O MOTOR</p>
            <h2>Como as peças conversam</h2>
            <p>{hero.kit.engine}</p>
            {hero.kit.loops?.length ? (
              <div className="fact-grid">
                {hero.kit.loops.map((loop) => (
                  <article className="info-card" key={loop.name}>
                    <h3>{loop.name}</h3>
                    <p>{loop.text}</p>
                  </article>
                ))}
              </div>
            ) : null}
          </section>
        ) : null}

        {hero.levelShots?.length ? (
          <section className="sticker-card" id="escada">
            <p className="eyebrow">A ESCADA, NA TELA</p>
            <h2>Cada degrau com o texto que o prova</h2>
            <div className="level-shots">
              {hero.levelShots.map((shot) => (
                <article key={shot.src}>
                  <h3>{shot.label}</h3>
                  <ShotFigure src={shot.src} alt={shot.label} caption={shot.caption} linked />
                </article>
              ))}
            </div>
          </section>
        ) : null}

        {hero.breakpoints ? (
          <section className="character-note" id="degraus">
            <b>Quais níveis valem a pena neste herói</b>
            <p>{hero.breakpoints}</p>
          </section>
        ) : null}

        {hero.strengths?.length || hero.weaknesses?.length ? (
          <div className="character-columns" id="forcas">
            {hero.strengths?.length ? (
              <section className="sticker-card">
                <p className="eyebrow">ONDE ELE GANHA</p>
                <ul className="plain-list">{hero.strengths.map((item) => <li key={item}>{item}</li>)}</ul>
              </section>
            ) : null}
            {hero.weaknesses?.length ? (
              <section className="sticker-card">
                <p className="eyebrow">ONDE ELE QUEBRA</p>
                <ul className="plain-list pending">{hero.weaknesses.map((item) => <li key={item}>{item}</li>)}</ul>
              </section>
            ) : null}
          </div>
        ) : null}

        {hero.combos?.length ? (
          <section className="sticker-card" id="combos">
            <p className="eyebrow">COMBOS</p>
            <h2>Cadeias que valem procurar na run</h2>
            {hero.combos.map((combo) => (
              <article className="build-detail" key={combo.name}>
                <span className="chip chip-green">{combo.status}</span>
                <h3>{combo.name}</h3>
                <p>{combo.text}</p>
                <ol>{combo.needs.map((item) => <li key={item}>{item}</li>)}</ol>
              </article>
            ))}
          </section>
        ) : null}

        <div className="character-columns" id="habilidades">
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

        <div className="character-columns" id="sinergias">
          <section className="sticker-card">
            <p className="eyebrow">SINERGIAS</p>
            <ul className="plain-list">{hero.synergies.map((item) => <li key={item}>{item}</li>)}</ul>
          </section>
          <section className="sticker-card">
            <p className="eyebrow">PENDÊNCIAS</p>
            <ul className="plain-list pending">{hero.pending.map((item) => <li key={item}>{item}</li>)}</ul>
          </section>
        </div>

        {evidenceImages.length ? (
          <section className="evidence-gallery sticker-card" id="evidencias">
            <div className="gallery-head">
              <div>
                <p className="eyebrow">EVIDÊNCIAS VISUAIS</p>
                <h2>Galeria de referência</h2>
              </div>
              <span>{evidenceImages.length} prints catalogados</span>
            </div>
            <EvidenceCarousel
              items={evidenceImages.map((item) => {
                const label = item.caption ?? item.alt ?? "Evidência visual";
                return { src: item.src, label, kind: item.title ?? evidenceKind(item.src, label) };
              })}
            />
          </section>
        ) : null}
        <section className="confidence-legend sticker-card" id="legenda" aria-labelledby="confidence-title">
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
          </div>

          <aside className="character-side">
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
            <section className="sticker-card">
              <p className="eyebrow">FONTES</p>
              <p className="side-sources">{hero.evidence.join(" • ")}</p>
            </section>
          </aside>
        </div>
      </article>
      <SiteFooter />
    </main>
  );
}
