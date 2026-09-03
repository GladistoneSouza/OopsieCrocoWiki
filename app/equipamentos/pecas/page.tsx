import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../../components/SiteHeader";
import { SiteFooter } from "../../components/SiteFooter";
import { SectionHead } from "../../components/SectionHead";
import { FactCard } from "../../components/FactCard";
import { CalloutNote } from "../../components/CalloutNote";
import { ShotFigure } from "../../components/ShotFigure";
import {
  equipmentLayers,
  forgeIntro,
  forgeGallery,
  rarityNameColors,
  rarityHeaderGallery,
  rarityNameColorsNote,
} from "../../data/equipment";

export const metadata: Metadata = {
  title: "Peças e raridade — Oopsie Croco Wiki",
  description: "As cinco camadas que definem a força de uma peça e o código de cor que identifica a raridade na forja de Oopsie Croco.",
};

export default function Page() {
  return (
    <main>
      <SiteHeader active="/equipamentos" />

      <nav className="crumbs" aria-label="Você está em">
        <Link href="/equipamentos">Equipamentos</Link>
        <span aria-hidden="true">/</span>
        <b>Peças e raridade</b>
      </nav>

      <section className="page-hero tone-gold">
        <p className="eyebrow">A PEÇA EM SI</p>
        <h1>Peças e raridade</h1>
        <p className="lede">Raridade, nível e aprimoramento definem o esqueleto da peça. É o que se lê antes de olhar gema ou refino — e a cor diz a raridade antes de qualquer número aparecer.</p>
      </section>

      <section className="section" id="camadas">
        <SectionHead
          eyebrow="AS 5 CAMADAS"
          title="O que define a força de uma peça"
        />
        <div className="tier-rule sticker-card">
          <span className="quality-dot legendary" aria-hidden="true" />
          <b>Legendary</b>
          <span className="arrow" aria-hidden="true">→</span>
          <span className="quality-dot mythic" aria-hidden="true" />
          <b>Mythic</b>
          <p>Na prática observada, o salto de tier pode valer mais que alguns níveis de diferença.</p>
        </div>
        <div className="layer-grid">
          {equipmentLayers.map((layer) => (
            <article key={layer.n}>
              <span>{layer.n}</span>
              <h3>{layer.title}</h3>
              <p>{layer.text}</p>
            </article>
          ))}
        </div>
        <CalloutNote
          tone="info"
          title="Exemplo real"
          text="Mythic nível 83 pode ser mais forte que Legendary nível 85. Ordem de comparação recomendada: raridade → atributo-base → nível/aprimoramento → gemas → efeito de refino."
        />
      </section>

      <section className="section" id="forja">
        <SectionHead
          eyebrow="ONDE TUDO ACONTECE"
          title="A forja"
          description={forgeIntro}
        />
        <div className="dismantle-layout">
          <div className="table-wrap sticker-card">
            <table className="game-table">
              <thead>
                <tr><th>Qualidade</th><th>Cor do nome</th><th>Onde foi visto</th></tr>
              </thead>
              <tbody>
                {rarityNameColors.map((row) => (
                  <tr key={row.quality}>
                    <td>{row.quality}</td>
                    <td>{row.color}</td>
                    <td>{row.source}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <aside className="sticker-card">
            <span className="kicker">LIMITE DA OBSERVAÇÃO</span>
            <span>{rarityNameColorsNote}</span>
          </aside>
        </div>
        <div className="shot-grid stack natural">
          {rarityHeaderGallery.map((shot) => (
            <ShotFigure key={shot.src} src={shot.src} alt={shot.alt} caption={shot.caption} linked />
          ))}
        </div>
        <div className="shot-grid three">
          {forgeGallery.map((shot) => (
            <ShotFigure key={shot.src} src={shot.src} alt={shot.alt} caption={shot.caption} linked />
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
