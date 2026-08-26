import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { SectionHead } from "../components/SectionHead";
import { FactCard } from "../components/FactCard";
import { CalloutNote } from "../components/CalloutNote";
import { ShotFigure } from "../components/ShotFigure";
import {
  expeditionIntro,
  expeditionRules,
  cycleLoop,
  expeditionTeams,
  expeditionHaul,
  expeditionMath,
  dropVariance,
  levelLever,
  unlockFirst,
  levelCostCurve,
  levelMilestones,
  spreadVsFocus,
  fragmentTradeoff,
  rosterFit,
  acquisitionPlan,
  fourthSlot,
  expeditionGallery,
  expeditionPending,
} from "../data/expedition";

export const metadata: Metadata = {
  title: "Expedition Squad — Oopsie Croco Wiki",
  description:
    "Quatro times em ciclos de 12h: como a qualidade e o nível dos heróis governam o loot, e por que a expedição é a única fonte gratuita de Grail.",
};

export default function ExpedicaoPage() {
  return (
    <main>
      <SiteHeader active="/expedicao" />

      <section className="page-hero tone-croco">
        <p className="eyebrow">RENDA PASSIVA</p>
        <h1>Expedition Squad</h1>
        <p className="lede">
          Quatro duplas saem por doze horas e voltam com loot. É de longe a fonte gratuita
          mais importante da conta — e a única que produz Grail sem passar pela loja.
        </p>
        <p className="lede">
          Para o que o Grail compra, veja <Link href="/ur">a linha UR</Link>.
        </p>
      </section>

<section className="section" id="expedicao">
        <SectionHead eyebrow={expeditionIntro.kicker} title={expeditionIntro.title} description={expeditionIntro.text} />
        <div className="coop-grid">
          <ol className="rule-list">
            {expeditionRules.map((rule) => (
              <li key={rule.title}>
                <b>{rule.title}</b>
                <span>
                  <i>“{rule.original}”</i> — {rule.text}
                </span>
              </li>
            ))}
          </ol>
          <aside className="mvp-card sticker-card">
            <span className="kicker">{expeditionHaul.kicker}</span>
            <h3>{expeditionHaul.title}</h3>
            <p>{expeditionHaul.text}</p>
          </aside>
        </div>
        <div className="fact-grid">
          {cycleLoop.steps.map((step) => (
            <FactCard key={step.title} kicker={cycleLoop.kicker} title={step.title} text={step.text} />
          ))}
        </div>
        <CalloutNote
          tone="dark"
          title="A regra que morde quem caça UR"
          text="Herói de qualidade Immortal não participa de expedições. Athena e Artemis não ajudam a farmar o Grail que as compra — quem sustenta a fonte gratuita é o resto do elenco."
        />
        <div className="table-wrap sticker-card">
          <table className="game-table">
            <thead>
              <tr>
                {expeditionTeams.columns.map((column) => (
                  <th key={column}>{column}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {expeditionTeams.rows.map((row) => (
                <tr key={row.team}>
                  <td>{row.team}</td>
                  <td>{row.quality}</td>
                  <td>{row.level}</td>
                  <td>{row.chance}</td>
                  <td>{row.got}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <CalloutNote tone="info" title="Como ler a tabela" text={expeditionTeams.reading} />
        <CalloutNote tone="info" title="Total Level é por time, não da conta" text={levelLever.definition} />
        <CalloutNote tone="dark" title={unlockFirst.title} text={`${unlockFirst.text} ${unlockFirst.conclusion}`} />
        <CalloutNote tone="warning" title={levelLever.title} text={`${levelLever.text} ${levelLever.note}`} />
        <div className="fact-grid">
          {expeditionMath.map((item) => (
            <FactCard key={item.kicker} kicker={item.kicker} title={item.title} text={item.text} />
          ))}
        </div>
        <div className="coop-grid">
          <div className="table-wrap sticker-card">
            <table className="game-table">
              <thead>
                <tr>
                  <th>Resultado do ciclo</th>
                  <th>Chance estimada</th>
                </tr>
              </thead>
              <tbody>
                {dropVariance.distribution.rows.map((row) => (
                  <tr key={row.outcome}>
                    <td>{row.outcome}</td>
                    <td>{row.chance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <aside className="mvp-card sticker-card">
            <span className="kicker">{dropVariance.kicker}</span>
            <h3>{dropVariance.title}</h3>
            <p>{dropVariance.text}</p>
            <p>{dropVariance.distribution.intro}</p>
            <small>{dropVariance.distribution.note}</small>
          </aside>
        </div>
        <div className="coop-grid">
          <div className="table-wrap sticker-card">
            <table className="game-table">
              <thead>
                <tr>
                  {fourthSlot.columns.map((column) => (
                    <th key={column}>{column}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {fourthSlot.rows.map((row) => (
                  <tr key={row.teams}>
                    <td>{row.teams}</td>
                    <td>{row.avg}</td>
                    <td>{row.dry}</td>
                    <td>{row.cycle}</td>
                    <td>{row.days}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="table-wrap sticker-card">
            <p className="eyebrow">{levelCostCurve.kicker}</p>
            <h3>{levelCostCurve.title}</h3>
            <p>{levelCostCurve.intro}</p>
            <table className="game-table">
              <thead>
                <tr>
                  {levelCostCurve.columns.map((column) => (
                    <th key={column}>{column}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {levelCostCurve.rows.map((row) => (
                  <tr key={row.band}>
                    <td>{row.band}</td>
                    <td>{row.per}</td>
                    <td>{row.total}</td>
                    <td>{row.acc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <small>{levelCostCurve.note}</small>
          </div>
          <aside className="mvp-card sticker-card">
            <span className="kicker">{fragmentTradeoff.kicker}</span>
            <h3>{fragmentTradeoff.title}</h3>
            <p>{fragmentTradeoff.text}</p>
            <p>{fragmentTradeoff.rule}</p>
            <small>{fragmentTradeoff.note}</small>
          </aside>
          <aside className="mvp-card sticker-card">
            <span className="kicker">{fourthSlot.kicker}</span>
            <h3>{fourthSlot.title}</h3>
            <p>{fourthSlot.text}</p>
            <small>{fourthSlot.note}</small>
          </aside>
        </div>
        <div className="detail-grid">
          <article className="boss-card sticker-card">
            <div className="detail-title">
              <span className="kicker">{rosterFit.kicker}</span>
            </div>
            <h3>{rosterFit.title}</h3>
            <p className="boss-desc">{rosterFit.text}</p>
            <small>{rosterFit.note}</small>
          </article>
          <article className="boss-card sticker-card">
            <div className="detail-title">
              <span className="kicker">{acquisitionPlan.kicker}</span>
            </div>
            <h3>{acquisitionPlan.title}</h3>
            <p className="boss-desc">{acquisitionPlan.text}</p>
            <p className="boss-desc">{acquisitionPlan.phase2}</p>
            <small>{acquisitionPlan.note}</small>
          </article>
        </div>
        <SectionHead eyebrow={levelMilestones.kicker} title={levelMilestones.title} description={levelMilestones.intro} />
        <div className="fact-grid three">
          {levelMilestones.rows.map((row) => (
            <FactCard key={row.level} kicker={`NÍVEL ${row.level} · ${row.cost}`} title={row.level} text={row.what} />
          ))}
        </div>
        <CalloutNote tone="info" title="Confiança" text={levelMilestones.note} />

        <SectionHead eyebrow={spreadVsFocus.kicker} title={spreadVsFocus.title} description={spreadVsFocus.intro} />
        <div className="table-wrap sticker-card">
          <table className="game-table">
            <thead>
              <tr>
                {spreadVsFocus.columns.map((column) => (
                  <th key={column}>{column}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {spreadVsFocus.rows.map((row) => (
                <tr key={row.path}>
                  <td>{row.path}</td>
                  <td>{row.result}</td>
                  <td>{row.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <CalloutNote tone="warning" title="O que a conta mede" text={spreadVsFocus.reading} />
        <CalloutNote tone="dark" title="E o que ela não mede" text={spreadVsFocus.counterpoint} />

        <div className="shot-grid three">
          {expeditionGallery.map((shot) => (
            <ShotFigure key={shot.src} src={shot.src} alt={shot.alt} title={shot.title} caption={shot.caption} />
          ))}
        </div>
      </section>

      <section className="section" id="pendencias">
        <SectionHead eyebrow="PENDÊNCIAS" title="O que ainda falta medir" />
        <ol className="rule-list">
          {expeditionPending.map((item) => (
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
