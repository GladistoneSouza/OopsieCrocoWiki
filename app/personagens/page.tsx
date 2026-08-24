import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { heroes } from "../data/heroes";

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

      <SiteFooter />
    </main>
  );
}
