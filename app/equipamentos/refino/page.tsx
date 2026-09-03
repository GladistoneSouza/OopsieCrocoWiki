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
  massDismantle,
  dismantleRows,
  dismantleBatch,
  dismantleFilters,
  dismantleGallery,
  refiningEffects,
  refiningOverviewShot,
  refiningFacts,
  refiningRule,
  refiningCosts,
  refiningCostsNote,
  refiningAttempts,
  refineTierNames,
  refineTierTable,
  refineTierNote,
  refineTierGallery,
} from "../../data/equipment";

export const metadata: Metadata = {
  title: "Refino — Oopsie Croco Wiki",
  description: "Efeitos especiais, custo em poções, faixas por tier e a desmontagem que abastece o refino em Oopsie Croco.",
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

  const refiningItems = refiningEffects.map((item) => ({
    src: item.image,
    label: `${item.value} • ${item.slot} • custo ${item.cost}`,
    kind: item.effect,
    alt: `Tela de refino com ${item.effect}`,
  }));
  const refineTierItems = refineTierGallery.map((shot) => ({
    src: shot.src,
    label: shot.caption,
    kind: "Faixa por tier",
    alt: shot.alt,
  }));

  return (
    <main>
      <SiteHeader active="/equipamentos" />

      <nav className="crumbs" aria-label="Você está em">
        <Link href="/equipamentos">Equipamentos</Link>
        <span aria-hidden="true">/</span>
        <b>Refino</b>
      </nav>

      <section className="page-hero tone-sky">
        <p className="eyebrow">20% POR TENTATIVA</p>
        <h1>Refino</h1>
        <p className="lede">Cada tentativa rola atributos comuns e tem 20% de chance de gerar um efeito especial. O resultado é uma proposta: aceitar ou rolar de novo. Efeitos bons se travam antes da próxima — e cada rolagem custa poção, que vem da desmontagem no fim desta página.</p>
      </section>

      <section className="section" id="refino">
        <SectionHead
          eyebrow="REFINO • REGISTRO DE CAMPO"
          title="Efeitos especiais observados"
          description="Cada tentativa mostra 20% de probabilidade de gerar um efeito especial. O nome do efeito define onde o bônus funciona; o percentual é o valor daquela rolagem e pode variar em outro resultado."
        />
        <div className="fact-grid three">
          {refiningFacts.map((fact) => (
            <FactCard key={fact.title} kicker={fact.kicker} title={fact.title} text={fact.text} />
          ))}
        </div>
        <div className="table-wrap sticker-card">
          <table className="game-table">
            <thead>
              <tr><th>Efeito</th><th>Bônus do print</th><th>Aplicação</th><th>Peça</th><th>Custo observado</th></tr>
            </thead>
            <tbody>
              {refiningEffects.map((item) => (
                <tr key={item.effect}>
                  <td>{item.effect}</td>
                  <td>{item.value}</td>
                  <td>{item.target}</td>
                  <td>{item.slot}</td>
                  <td>{item.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <CalloutNote
          tone="info"
          title="Como interpretar"
          text="Masteries de modo só funcionam naquele conteúdo. Emblems fortalecem uma classe. Master of All Trades exige quatro classes e entrega simultaneamente dano e redução de dano. Os custos pertencem às peças exibidas; ainda não formam uma fórmula universal por slot, nível ou raridade."
        />
        <div className="shot-grid stack natural">
          <ShotFigure
            src={refiningOverviewShot.src}
            alt={refiningOverviewShot.alt}
            caption={refiningOverviewShot.caption}
            linked
          />
        </div>
        <EvidenceCarousel items={refiningItems} />
      </section>

      <section className="section" id="refino-detalhes">
        <SectionHead
          eyebrow="REFINO • REGRAS E LIMITES"
          title="Custos e faixas por tier"
          description={refiningRule.text}
        />
        <div className="dismantle-layout">
          <div className="table-wrap sticker-card">
            <table className="game-table">
              <thead>
                <tr><th>Peça</th><th>Custo por tentativa</th></tr>
              </thead>
              <tbody>
                {refiningCosts.map((row) => (
                  <tr key={row.slot}><td>{row.slot}</td><td>{row.cost} poções</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <aside className="callout callout-warning">
            <b>Sobre os custos</b>
            <span>{refiningCostsNote}</span>
          </aside>
        </div>
        <div className="table-wrap sticker-card">
          <table className="game-table">
            <thead>
              <tr><th>Peça</th><th>Custo</th><th>Efeito travado</th><th>Antes</th><th>Depois</th><th>Leitura</th></tr>
            </thead>
            <tbody>
              {refiningAttempts.map((attempt) => (
                <tr key={`${attempt.piece}-${attempt.cost}-${attempt.lockedEffect}-${attempt.before}`}>
                  <td>{attempt.piece}</td>
                  <td>{attempt.cost}</td>
                  <td>{attempt.lockedEffect}</td>
                  <td>{attempt.before}</td>
                  <td>{attempt.after}</td>
                  <td>{attempt.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="table-wrap sticker-card">
          <table className="game-table">
            <thead>
              <tr>
                <th>Efeito especial</th>
                <th>Aplicação</th>
                {refineTierNames.map((tier) => <th key={tier}>{tier}</th>)}
              </tr>
            </thead>
            <tbody>
              {refineTierTable.map((row) => (
                <tr key={row.effect}>
                  <td>{row.effect}</td>
                  <td>{row.target}</td>
                  {row.tiers.map((value, index) => <td key={index}>{value}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <CalloutNote tone="info" title="Fonte da tabela" text={refineTierNote} />
        <EvidenceCarousel items={refineTierItems} />
      </section>

      <section className="section" id="desmontagem">
        <SectionHead
          eyebrow="DE ONDE VEM O RECURSO"
          title="Desmontagem"
          description="O refino consome poção e ouro; a desmontagem é onde os dois nascem. Peça sem uso vira Refining Elixir e gold, e o preview mostra o retorno antes de confirmar. Por isso a tabela de retorno por raridade e nível fecha esta página em vez de abrir a das peças."
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
