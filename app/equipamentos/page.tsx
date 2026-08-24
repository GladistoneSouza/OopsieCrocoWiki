import type { Metadata } from "next";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { SectionHead } from "../components/SectionHead";
import { FactCard } from "../components/FactCard";
import { CalloutNote } from "../components/CalloutNote";
import { ShotFigure } from "../components/ShotFigure";
import {
  equipmentLayers,
  gemBonuses,
  refiningEffects,
  refiningFacts,
  dismantleRows,
  dismantleBatch,
  dismantleFilters,
  dismantleGallery,
} from "../data/equipment";

export const metadata: Metadata = {
  title: "Equipamentos — Oopsie Croco Wiki",
  description: "Raridade, nível, aprimoramento, gemas, refino e desmontagem: as camadas que definem a força real de uma peça em Oopsie Croco.",
};

export default function EquipmentPage() {
  return (
    <main>
      <SiteHeader active="/equipamentos" />

      <section className="page-hero tone-gold">
        <p className="eyebrow">SISTEMA DE PROGRESSÃO</p>
        <h1>Equipamentos</h1>
        <p className="lede">
          Não compare peças olhando somente o número do nível. A força final resulta de cinco camadas
          que se somam — e o jogo não explica quase nenhuma delas.
        </p>
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
        <div className="shot-grid wide">
          {dismantleGallery.map((shot) => (
            <ShotFigure key={shot.src} src={shot.src} alt={shot.alt} caption={shot.caption} />
          ))}
        </div>
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
                <tr><th>Bônus documentado</th><th>Total atual</th><th>Origem</th></tr>
              </thead>
              <tbody>
                {gemBonuses.map(([bonus, total, origin]) => (
                  <tr key={bonus}><td>{bonus}</td><td>{total}</td><td>{origin}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <CalloutNote
          tone="warning"
          title="Nota de fórmula"
          text="Ainda precisamos testar se categorias diferentes somam ou multiplicam entre si. Os valores acima registram apenas os bônus visíveis."
        />
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
        <div className="shot-grid three">
          {refiningEffects.map((item) => (
            <ShotFigure
              key={item.image}
              src={item.image}
              alt={`Tela de refino com ${item.effect}`}
              title={item.effect}
              caption={`${item.value} • ${item.slot} • custo ${item.cost}`}
              linked
            />
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
