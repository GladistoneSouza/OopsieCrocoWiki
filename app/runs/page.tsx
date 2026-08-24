import type { Metadata } from "next";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { SectionHead } from "../components/SectionHead";
import { FactCard } from "../components/FactCard";
import { CalloutNote } from "../components/CalloutNote";
import { ShotFigure } from "../components/ShotFigure";
import { combatRuns, coreTeam, fifthSlotRule } from "../data/combatRuns";
import { newlyDocumentedEnemies, documentedBosses, enemyShots } from "../data/enemies";

export const metadata: Metadata = {
  title: "Runs documentadas — Oopsie Croco Wiki",
  description: "Resultados completos de runs de Oopsie Croco com dano por herói, usados para validar builds, sinergias e counters.",
};

export default function RunsPage() {
  return (
    <main>
      <SiteHeader active="/runs" />

      <section className="page-hero tone-berry">
        <p className="eyebrow">LABORATÓRIO DE CAMPO</p>
        <h1>Runs documentadas</h1>
        <p className="lede">
          Resultados completos usados para validar builds e sinergias. Os números registram cada
          tentativa específica, não uma promessa de dano fixo.
        </p>
      </section>

      <section className="section" id="nucleo">
        <SectionHead
          eyebrow="ESTRATÉGIA DE CAMPO"
          title="Núcleo 4 + 1"
          description="Estrutura observada para runs longas. A quinta vaga responde ao problema específico da fase."
        />
        <div className="fact-grid">
          {coreTeam.map((member) => (
            <FactCard key={member.name} kicker={member.kicker} title={member.name} text={member.text} />
          ))}
        </div>
        <CalloutNote tone="warning" title={fifthSlotRule.title} text={fifthSlotRule.text} />
      </section>

      <section className="section" id="runs">
        <SectionHead eyebrow="RESULTADOS" title="Runs completas" />
        <div className="documented-runs">
          {combatRuns.map((run) => (
            <article className="documented-run sticker-card" key={run.title}>
              <header>
                <div>
                  <span className="kicker">{run.stage} • BOSS EM {run.timerAtBoss}</span>
                  <h3>{run.title}</h3>
                </div>
                <b className="chip chip-green">{run.status}</b>
              </header>
              <p>{run.summary}</p>
              <div className="damage-board">
                {run.damage.map((entry) => (
                  <div key={entry.hero}>
                    <span>{entry.hero}</span>
                    <strong>{entry.damage}</strong>
                    {entry.note ? <small>{entry.note}</small> : null}
                  </div>
                ))}
              </div>
              <ul>
                {run.highlights.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <div className="shot-grid five">
                {run.evidenceImages.map((item) => (
                  <ShotFigure key={item.src} src={item.src} alt={item.alt} caption={item.alt} linked />
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="mecanicas">
        <SectionHead
          eyebrow="MECÂNICAS ENCONTRADAS"
          title="Confirmação separada"
          description="Comportamentos de inimigos descobertos durante as runs, aguardando ficha própria."
        />
        <div className="new-enemies">
          {newlyDocumentedEnemies.map((enemy) => (
            <article className="sticker-card" key={enemy.name}>
              <div>
                <h3>{enemy.name}</h3>
                <b>{enemy.skill}</b>
              </div>
              <p>{enemy.effect}</p>
              <small className="chip">{enemy.confidence}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="bosses">
        <SectionHead
          eyebrow="BESTIÁRIO DE CAMPO"
          title="Bosses documentados"
          description="Fichas e comportamentos de bosses registrados fora do Co-op — dungeons, estágios da história e desafios."
        />
        <div className="enemy-grid">
          {documentedBosses.map((boss) => (
            <article className="sticker-card" key={boss.name}>
              <h4>{boss.name}</h4>
              <b>{boss.context}{boss.weakness ? ` • ${boss.weakness}` : ""}</b>
              {boss.skills.map((skill) => (
                <p key={skill.name}><strong>{skill.name}:</strong> {skill.text}</p>
              ))}
              {boss.notes ? <p>{boss.notes}</p> : null}
            </article>
          ))}
        </div>
        <div className="shot-grid five">
          {enemyShots.map((shot) => (
            <ShotFigure key={shot.src} src={shot.src} alt={shot.alt} caption={shot.caption} linked />
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
