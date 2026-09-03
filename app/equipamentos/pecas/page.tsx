import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../../components/SiteHeader";
import { SiteFooter } from "../../components/SiteFooter";
import { SectionHead } from "../../components/SectionHead";
import { FactCard } from "../../components/FactCard";
import { CalloutNote } from "../../components/CalloutNote";
import { ShotFigure } from "../../components/ShotFigure";
import { EvidenceCarousel } from "../../components/EvidenceCarousel";
import {
  equipmentLayers,
  forgeIntro,
  forgeGallery,
  rarityNameColors,
  rarityHeaderGallery,
  rarityNameColorsNote,
  massDismantle,
  dismantleRows,
  dismantleBatch,
  dismantleFilters,
  dismantleGallery,
} from "../../data/equipment";

export const metadata: Metadata = {
  title: "Peças e raridade — Oopsie Croco Wiki",
  description: "As camadas que definem a força de uma peça, o código de cor das raridades na forja e o retorno da desmontagem em Oopsie Croco.",
};

export default function Page() {
  const dismantleItems = [
    ...dismantleGallery.map((shot) => ({ src: shot.src, label: shot.caption, kind: "Desmontagem", alt: shot.alt })),
    {
      src: "/screenshots/refining/dismantle-mass-batch.jpg",
      label: "Lote em massa: 25,86K de ouro + 8.705 poções de refino de uma vez.",
      kind: "Desmontagem em massa",
      alt: "Desmontagem em massa com filtros Below 120 e Below Mythical",
    },
  ];

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
        <p className="lede">Raridade, nível e aprimoramento definem o esqueleto da peça. É a camada que se lê antes de olhar gema ou refino — e a cor diz a raridade antes de qualquer número.</p>
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

      <section className="section" id="desmontagem">
        <SectionHead
          eyebrow="RECICLAGEM"
          title="Desmontagem"
          description="Peças sem uso podem ser convertidas em ouro e material de refino. O preview mostra o retorno antes da confirmação."
        />
        <div className="dismantle-layout">
          <div className="table-wrap sticker-card">
            <table className="game-table">
              <thead>
                <tr><th>Qualidade</th><th>Nível</th><th>Ouro</th><th>Material</th></tr>
              </thead>
              <tbody>
                {dismantleRows.map((row, index) => (
                  <tr key={index}>
                    <td><i className={`quality-dot ${row.quality}`} aria-hidden="true" />{row.qualityLabel}</td>
                    <td>{row.level}</td>
                    <td>{row.gold}</td>
                    <td>{row.material}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="batch-proof sticker-card">
            <span className="kicker">LOTE COMPROVADO</span>
            <h3>{dismantleBatch.pieces}</h3>
            <p>{dismantleBatch.composition}</p>
            <strong>{dismantleBatch.gold}</strong>
            <strong>{dismantleBatch.material}</strong>
            <hr />
            <p>{dismantleBatch.proof}</p>
            <small>{dismantleBatch.note}</small>
          </div>
        </div>
        <div className="filter-note">
          <b>Filtros disponíveis</b>
          <span>{dismantleFilters.level}</span>
          <span>{dismantleFilters.quality}</span>
        </div>
        <CalloutNote tone="info" title={massDismantle.title} text={massDismantle.text} />
        <EvidenceCarousel items={dismantleItems} />
      </section>

      <SiteFooter />
    </main>
  );
}
