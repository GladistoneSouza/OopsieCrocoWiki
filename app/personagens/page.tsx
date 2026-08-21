import { heroes } from "../data/heroes";

export default function HeroesIndex() {
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="/"><span className="brand-mark">OC</span><span><b>Oopsie Croco</b><small>Wiki de campo</small></span></a>
        <nav><a href="/">Início</a><a href="/#coop">Co-op</a><a href="/#equipamentos">Equipamentos</a></nav>
        <span className="version">Personagens</span>
      </header>
      <section className="section directory-hero">
        <p className="eyebrow">ARQUIVO DE PERSONAGENS</p>
        <h1>Heróis, árvores e builds</h1>
        <p>Cada personagem possui uma página independente. Isso permite ampliar uma árvore inteira sem alterar as demais áreas da wiki.</p>
        <div className="character-directory">
          {heroes.map((hero) => (
            <a href={`/personagens/${hero.slug}`} key={hero.slug}>
              <span>{hero.className}{hero.rarity ? ` • ${hero.rarity}` : ""}</span>
              <h2>{hero.name}</h2>
              <p>{hero.summary}</p>
              <b>Ver ficha →</b>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
