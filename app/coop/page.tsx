import type { Metadata } from "next";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { SectionHead } from "../components/SectionHead";
import { FactCard } from "../components/FactCard";
import { CalloutNote } from "../components/CalloutNote";
import { ShotFigure } from "../components/ShotFigure";
import {
  coopRules,
  mvpRun,
  pickStages,
  counterRule,
  pickGallery,
  coopCosts,
  slimeQueen,
  dropRates,
  difficulty4Enemies,
  floorMap,
  enemyGallery,
  victoryReward,
  rankingNote,
  coopGallery,
} from "../data/coop";

export const metadata: Metadata = {
  title: "Co-op Spire — Oopsie Croco Wiki",
  description: "Regras, custos, bosses, mapa de andares e drops do Co-op Spire de Oopsie Croco, documentados a partir de runs reais.",
};

export default function CoopPage() {
  return (
    <main>
      <SiteHeader active="/coop" />

      <section className="page-hero tone-sky">
        <p className="eyebrow">MODO COOPERATIVO</p>
        <h1>Co-op Spire</h1>
        <p className="lede">
          Uma run compartilhada de dez combates, sem refresh e sem segunda chance — e uma das fontes
          centrais de equipamento do jogo.
        </p>
      </section>

      <section className="section" id="regras">
        <SectionHead eyebrow="COMO FUNCIONA" title="As regras da torre" />
        <div className="coop-grid">
          <ol className="rule-list">
            {coopRules.map((rule) => (
              <li key={rule.title}>
                <b>{rule.title}</b>
                <span>{rule.text}</span>
              </li>
            ))}
          </ol>
          <aside className="mvp-card sticker-card">
            <span className="kicker">{mvpRun.kicker}</span>
            <h3>{mvpRun.hero}</h3>
            <strong>{mvpRun.damage}</strong>
            <small>{mvpRun.damageLabel}</small>
            <div className="bar" role="presentation">
              <i style={{ width: `${mvpRun.sharePercent}%` }} />
            </div>
            <p>{mvpRun.text}</p>
            <div className="chip-row">
              {mvpRun.tags.map((tag) => <b className="chip" key={tag}>{tag}</b>)}
            </div>
          </aside>
        </div>
        <div className="fact-grid three">
          {pickStages.map((stage) => (
            <FactCard key={stage.title} kicker={stage.kicker} title={stage.title} text={stage.text} />
          ))}
        </div>
        <CalloutNote tone="warning" title={counterRule.title} text={counterRule.text} />
        <div className="shot-grid wide">
          {pickGallery.map((shot) => (
            <ShotFigure key={shot.src} src={shot.src} alt={shot.alt} caption={shot.caption} />
          ))}
        </div>
      </section>

      <section className="section" id="custos">
        <SectionHead eyebrow="ENTRADA E RECOMPENSA" title="Custos e regras de conta" />
        <div className="fact-grid">
          {coopCosts.map((cost) => (
            <FactCard key={cost.kicker} kicker={cost.kicker} title={cost.title} text={cost.text} />
          ))}
        </div>
      </section>

      <section className="section" id="boss">
        <SectionHead eyebrow="AMEAÇAS" title="Boss e drops" />
        <div className="detail-grid">
          <article className="boss-card sticker-card">
            <div className="detail-title">
              <span className="kicker">{slimeQueen.kicker}</span>
              <b className="chip chip-green">{slimeQueen.weakness}</b>
            </div>
            <h3>{slimeQueen.name}</h3>
            <p className="boss-desc">{slimeQueen.description}</p>
            <div className="skill-list">
              {slimeQueen.skills.map((skill) => (
                <div key={skill.name}>
                  <b>{skill.name}</b>
                  <span>{skill.text}</span>
                </div>
              ))}
            </div>
          </article>
          <article className="reward-card sticker-card">
            <div className="detail-title">
              <span className="kicker">{dropRates.kicker}</span>
              <b className="chip chip-green">{dropRates.minimum}</b>
            </div>
            <h3>Probabilidade de raridade</h3>
            {dropRates.rows.map((row) => (
              <div className={`drop-row ${row.quality}`} key={row.quality}>
                <b>{row.label}</b>
                <span>{row.chance}</span>
              </div>
            ))}
            <p>{dropRates.note}</p>
          </article>
        </div>
      </section>

      <section className="section" id="bestiario">
        <SectionHead eyebrow="BESTIÁRIO • DIFICULDADE 4" title="Inimigos com resposta específica" />
        <div className="enemy-grid">
          {difficulty4Enemies.map((enemy) => (
            <article className="sticker-card" key={enemy.name}>
              <h4>{enemy.name}</h4>
              <b>{enemy.skill}</b>
              <p>{enemy.text}</p>
            </article>
          ))}
        </div>
        <div className="floor-map sticker-card">
          <div className="floor-map-head">
            <div>
              <span className="kicker">DIFICULDADE 4</span>
              <h3>Mapa de monstros por andar</h3>
            </div>
            <p>Composições reconstruídas pelos prints. Dois nomes permanecem provisórios até aparecer a ficha do monstro.</p>
          </div>
          <div className="floor-table">
            {floorMap.map((row) => (
              <div className={`floor-row${row.unknown ? " unknown" : ""}`} key={row.floor}>
                <b>{row.floor}</b>
                {row.entries
                  ? row.entries.map((entry) => (
                      <span key={entry.label}>
                        <i className={`mob mob-${entry.mob}`} aria-hidden="true" />
                        {entry.label}
                      </span>
                    ))
                  : <span>{row.unknown}</span>}
              </div>
            ))}
          </div>
          <small>Observação: Death Splitting pode criar cópias adicionais durante o combate; a tabela registra apenas a formação inicial visível.</small>
        </div>
        <div className="shot-grid three">
          {enemyGallery.map((shot) => (
            <ShotFigure key={shot.src} src={shot.src} alt={shot.alt} caption={shot.caption} />
          ))}
        </div>
      </section>

      <section className="section" id="recompensas">
        <SectionHead eyebrow="FECHANDO A RUN" title="Vitória, ranking e evidências" />
        <article className="victory-reward sticker-card">
          <img src={victoryReward.image} alt="Recompensa completa de vitória no Co-op" loading="lazy" />
          <div>
            <span className="kicker">{victoryReward.kicker}</span>
            <h3>{victoryReward.title}</h3>
            <p>{victoryReward.text}</p>
            <small>{victoryReward.note}</small>
          </div>
        </article>
        <CalloutNote tone="dark" title={rankingNote.title} text={rankingNote.text} />
        <div className="shot-grid four">
          {coopGallery.map((shot) => (
            <ShotFigure key={shot.src} src={shot.src} alt={shot.alt} title={shot.title} caption={shot.caption} />
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
