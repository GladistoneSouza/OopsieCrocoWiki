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
  gemBonuses,
  gemFacts,
  gemOperations,
  equipmentGemSnapshots,
  equipmentGemSnapshotsNote,
  gemGallery,
} from "../../data/equipment";

export const metadata: Metadata = {
  title: "Gemas — Oopsie Croco Wiki",
  description: "Até cinco gemas por peça: bônus documentados, ficha da gema, sockets, síntese e o que cada peça carrega em Oopsie Croco.",
};

export default function Page() {
  const gemItems = gemGallery.map((shot) => ({ src: shot.src, label: shot.caption, kind: "Gemas", alt: shot.alt }));

  return (
    <main>
      <SiteHeader active="/equipamentos" />

      <nav className="crumbs" aria-label="Você está em">
        <Link href="/equipamentos">Equipamentos</Link>
        <span aria-hidden="true">/</span>
        <b>Gemas</b>
      </nav>

      <section className="page-hero tone-berry">
        <p className="eyebrow">CINCO POR PEÇA</p>
        <h1>Gemas</h1>
        <p className="lede">Cada peça carrega até cinco bônus vindos de gema, e eles vivem numa aba própria, separada do atributo da peça. É onde a build fica específica: classe, herói, modo, tipo de inimigo ou condição de combate.</p>
      </section>

      <section className="section" id="gemas">
        <SectionHead
          eyebrow="GEMAS & SÍNTESE"
          title="Até cinco gemas por peça"
          description="Quatro gemas idênticas e da mesma qualidade podem ser sintetizadas para gerar uma superior."
        />
        <div className="gem-layout">
          <div className="gem-stack sticker-card" aria-label="Exemplo de síntese">
            <div className="gem gem-purple" aria-hidden="true">◆</div>
            <span>× 4</span>
            <i aria-hidden="true">→</i>
            <div className="gem gem-gold" aria-hidden="true">◆</div>
            <small>Mesma gema + mesma qualidade</small>
          </div>
          <div className="table-wrap sticker-card">
            <table className="game-table">
              <thead>
                <tr><th>Bônus documentado</th><th>Valor documentado</th><th>Origem</th></tr>
              </thead>
              <tbody>
                {gemBonuses.map(([bonus, total, origin]) => (
                  <tr key={bonus}><td>{bonus}</td><td>{total}</td><td>{origin}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="fact-grid three">
          {gemFacts.map((fact) => (
            <FactCard key={fact.title} kicker={fact.kicker} title={fact.title} text={fact.text} />
          ))}
        </div>
        <div className="detail-grid">
          {gemOperations.map((operation) => (
            <article className="sticker-card" key={operation.name}>
              <span className="kicker">OPERAÇÃO DE GEMA</span>
              <h3>{operation.name}</h3>
              <p className="boss-desc">{operation.note}</p>
            </article>
          ))}
        </div>
        <div className="table-wrap sticker-card">
          <table className="game-table">
            <thead>
              <tr><th>Peça</th><th>Slot</th><th>Nível</th><th>Power</th><th>Base</th><th>Atributos de gema vistos</th></tr>
            </thead>
            <tbody>
              {equipmentGemSnapshots.map((item) => (
                <tr key={`${item.piece}-${item.level}-${item.base}`}>
                  <td>{item.piece}</td>
                  <td>{item.slot}</td>
                  <td>{item.level}</td>
                  <td>{item.power}</td>
                  <td>{item.base}</td>
                  <td>{item.gemAttrs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <CalloutNote
          tone="warning"
          title="Nota de fórmula"
          text="Ainda precisamos testar se categorias diferentes somam ou multiplicam entre si. Os valores acima registram apenas os bônus visíveis."
        />
        <CalloutNote
          tone="warning"
          title="Cada linha é um nível, não a peça inteira"
          text={equipmentGemSnapshotsNote}
        />
        <EvidenceCarousel items={gemItems} />
      </section>

      <SiteFooter />
    </main>
  );
}
