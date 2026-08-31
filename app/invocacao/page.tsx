import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { SectionHead } from "../components/SectionHead";
import { FactCard } from "../components/FactCard";
import { CalloutNote } from "../components/CalloutNote";
import { ShotFigure } from "../components/ShotFigure";
import { mythicAcquisition, summonEvent, battlePass, passTrack, deluxeTiming, summonRules, heroSummonRates } from "../data/summons";

export const metadata: Metadata = {
  title: "Invocação mítica — Oopsie Croco Wiki",
  description:
    "As rotas até um herói SP: pity de 50 do Mythical Summon, caixas aleatórias e de seleção, os pacotes do evento de invocação e o Battle Pass.",
};

export default function InvocacaoPage() {
  return (
    <main>
      <SiteHeader active="/invocacao" />

      <section className="page-hero tone-berry">
        <p className="eyebrow">A LINHA MÍTICA</p>
        <h1>Invocação mítica</h1>
        <p className="lede">
          Oito heróis SP e várias rotas até eles — só duas com alvo. Onde a ficha mítica
          fica barata, e por que abrir os oito importa além do combate.
        </p>
        <p className="lede">
          Para o que os oito destravam na renda passiva, veja{" "}
          <Link href="/expedicao">a Expedition Squad</Link>.
        </p>
      </section>

      <section className="section" id="invocacao">
        <SectionHead
          eyebrow={summonRules.kicker}
          title={summonRules.title}
          description={summonRules.text}
        />
        <div className="table-wrap sticker-card">
          <p>{heroSummonRates.intro}</p>
          <table className="game-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Lv.1</th>
                <th>Lv.2</th>
                <th>Lv.3</th>
                <th>Lv.4</th>
              </tr>
            </thead>
            <tbody>
              {heroSummonRates.rows.map((row) => (
                <tr key={row.item}>
                  <td>{row.item}</td>
                  <td>{row.lv1}</td>
                  <td>{row.lv2}</td>
                  <td>{row.lv3}</td>
                  <td>{row.lv4}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <small>{heroSummonRates.note}</small>
        </div>
        <div className="shot-grid wide">
          {heroSummonRates.gallery.map((shot) => (
            <ShotFigure key={shot.src} src={shot.src} alt={shot.alt} title={shot.title} caption={shot.caption} linked />
          ))}
        </div>
        <SectionHead
          eyebrow={mythicAcquisition.kicker}
          title={mythicAcquisition.title}
          description={mythicAcquisition.targeting}
        />
        <ol className="rule-list">
          {mythicAcquisition.rules.map((rule) => (
            <li key={rule.original}>
              <span>
                <i>“{rule.original}”</i> — {rule.text}
              </span>
            </li>
          ))}
        </ol>
        <CalloutNote tone="warning" title="A caixa aleatória não escolhe — e quase não cai" text={mythicAcquisition.randomBox} />
        <CalloutNote tone="info" title="A caixa de seleção é outro item" text={mythicAcquisition.selectionBox} />
        <CalloutNote tone="info" title="E há uma terceira, quase idêntica, que não é mítica" text={mythicAcquisition.legendarySelection} />
        <CalloutNote tone="warning" title="Qual das duas está na Immortal Shop?" text={mythicAcquisition.shopAmbiguity} />
        <CalloutNote tone="dark" title="Qual rota usar depende de quantos faltam" text={mythicAcquisition.consequence} />
        <CalloutNote tone="info" title="Outras fontes de ficha mítica" text={mythicAcquisition.otherSources} />
        <SectionHead
          eyebrow={summonEvent.kicker}
          title={summonEvent.title}
          description={summonEvent.intro}
        />
        <CalloutNote tone="dark" title={summonEvent.headline.title} text={summonEvent.headline.text} />
        <div className="table-wrap sticker-card">
          <table className="game-table">
            <thead>
              <tr>
                {summonEvent.columns.map((column) => (
                  <th key={column}>{column}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {summonEvent.rows.map((row) => (
                <tr key={row.pack}>
                  <td>{row.pack}</td>
                  <td>{row.content}</td>
                  <td>{row.limit}</td>
                  <td>{row.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <CalloutNote tone="warning" title="A rota mais barata até um SP escolhido" text={summonEvent.pityMath} />
        <CalloutNote tone="info" title="Pontos por invocar" text={summonEvent.challenge} />
        <div className="shot-grid wide">
          {summonEvent.gallery.map((shot) => (
            <ShotFigure key={shot.src} src={shot.src} alt={shot.alt} title={shot.title} caption={shot.caption} />
          ))}
        </div>
        <div className="shot-grid three">
          {mythicAcquisition.gallery.map((shot) => (
            <ShotFigure key={shot.src} src={shot.src} alt={shot.alt} title={shot.title} caption={shot.caption} />
          ))}
        </div>
      </section>

      <section className="section" id="battlepass">
        <SectionHead eyebrow={battlePass.kicker} title={battlePass.title} description={battlePass.text} />
        <div className="fact-grid">
          {battlePass.facts.map((fact) => (
            <FactCard key={fact.label} kicker="BATTLE PASS" title={fact.value} text={fact.label} />
          ))}
        </div>
        <div className="table-wrap sticker-card">
          <h3>{battlePass.tiers.title}</h3>
          <p>{battlePass.tiers.intro}</p>
          <table className="game-table">
            <thead>
              <tr>
                {battlePass.tiers.columns.map((column) => (
                  <th key={column}>{column}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {battlePass.tiers.rows.map((row) => (
                <tr key={row.band}>
                  <td>{row.band}</td>
                  <td>{row.cost}</td>
                  <td>{row.perDay}</td>
                  <td>{row.trust}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <small>{battlePass.tiers.note}</small>
        </div>
        <CalloutNote tone="info" title="Por que entra aqui" text={battlePass.relevance} />
        <SectionHead eyebrow={passTrack.kicker} title={passTrack.title} description={passTrack.intro} />
        <div className="coop-grid">
          <div className="table-wrap sticker-card">
            <table className="game-table">
              <thead>
                <tr>
                  {passTrack.columns.map((column) => (
                    <th key={column}>{column}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {passTrack.rows.map((row) => (
                  <tr key={row.level}>
                    <td>{row.level}</td>
                    <td>{row.column}</td>
                    <td>{row.scrolls}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <aside className="mvp-card sticker-card">
            <span className="kicker">O QUE SOBRA PARA CADA FAIXA</span>
            <p>{passTrack.totals}</p>
            <p>{passTrack.reach}</p>
            <small>{passTrack.correction}</small>
          </aside>
        </div>
        <SectionHead eyebrow={deluxeTiming.kicker} title={deluxeTiming.title} description={deluxeTiming.text} />
        <div className="coop-grid">
          <div className="table-wrap sticker-card">
            <table className="game-table">
              <thead>
                <tr>
                  {deluxeTiming.columns.map((column) => (
                    <th key={column}>{column}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {deluxeTiming.rows.map((row) => (
                  <tr key={row.at}>
                    <td>{row.at}</td>
                    <td>{row.to}</td>
                    <td>{row.saved}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <aside className="mvp-card sticker-card">
            <span className="kicker">POR QUE O PICO É ESTREITO</span>
            <p>{deluxeTiming.totalCost}</p>
            <p>{deluxeTiming.why}</p>
            <p>{deluxeTiming.retroactive}</p>
            <small>{deluxeTiming.payoff}</small>
          </aside>
        </div>
        <div className="shot-grid three">
          {passTrack.gallery.map((shot) => (
            <ShotFigure key={shot.src} src={shot.src} alt={shot.alt} title={shot.title} caption={shot.caption} />
          ))}
        </div>
      </section>

      <section className="section" id="pendencias">
        <SectionHead eyebrow="PENDÊNCIAS" title="O que ainda falta capturar" />
        <ol className="rule-list">
          {[...mythicAcquisition.pending, ...summonEvent.pending, ...battlePass.pending, ...deluxeTiming.pending].map((item) => (
            <li key={item}>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      </section>

      <SiteFooter />
    </main>
  );
}
