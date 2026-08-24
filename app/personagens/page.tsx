import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { heroes } from "../data/heroes";
import { petRules, knownPets } from "../data/pets";
import { SectionHead } from "../components/SectionHead";
import { CalloutNote } from "../components/CalloutNote";

export const metadata: Metadata = {
  title: "Personagens — Oopsie Croco Wiki",
  description: "Fichas individuais dos heróis de Oopsie Croco: habilidades por nível, builds, gemas exclusivas, história e pendências.",
};

export default function HeroesIndex() {
  return (
    <main>
      <SiteHeader active="/personagens" />

      <section className="page-hero tone-croco">
        <p className="eyebrow">ARQUIVO DE PERSONAGENS</p>
        <h1>Heróis, árvores e builds</h1>
        <p className="lede">
          Cada personagem possui uma página independente. Isso permite ampliar uma árvore inteira sem
          alterar as demais áreas da wiki.
        </p>
      </section>

      <section className="section">
        <div className="character-directory">
          {heroes.map((hero) => (
            <Link href={`/personagens/${hero.slug}`} key={hero.slug} className="sticker-card">
              <span className="kicker">
                {hero.className}
                {hero.rarity ? ` • ${hero.rarity}` : ""}
              </span>
              <h2>{hero.name}</h2>
              <p>{hero.summary}</p>
              <b>Ver ficha →</b>
            </Link>
          ))}
        </div>
      </section>

      <section className="section" id="pets">
        <SectionHead
          eyebrow="COMPANHEIROS"
          title="Pets"
          description="Os pets lutam junto do time e aparecem com dano próprio nos placares das runs."
        />
        <CalloutNote tone="info" title={petRules.title} text={petRules.text} />
        <div className="new-enemies">
          {knownPets.map((pet) => (
            <article className="sticker-card" key={pet.name}>
              <div>
                <h3>{pet.name}</h3>
                <b>PET</b>
              </div>
              <p>{pet.note}</p>
              <small className="chip">{pet.confidence}</small>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
