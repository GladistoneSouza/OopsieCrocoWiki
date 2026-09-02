import type { Metadata } from "next";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { SectionHead } from "../components/SectionHead";
import { FactCard } from "../components/FactCard";
import { ShotFigure } from "../components/ShotFigure";
import { wings, wingsIntro, wingsGallery } from "../data/wings";
import {
  appearanceFacts,
  skinGallery,
  missQuestionMarkSkin,
  visualsIntro,
  wingsExtraGallery,
} from "../data/visuals";

export const metadata: Metadata = {
  title: "Visuais e Skins — Oopsie Croco Wiki",
  description: "Wings, skins e Star Up: sistemas visuais que mudam aparência e também carregam atributos em Oopsie Croco.",
};

export default function VisualsPage() {
  return (
    <main>
      <SiteHeader active="/visuais" />

      <section className="page-hero tone-gold">
        <p className="eyebrow">APARÊNCIA COM ATRIBUTO</p>
        <h1>Visuais e skins</h1>
        <p className="lede">{visualsIntro}</p>
      </section>

      <section className="section" id="regras">
        <SectionHead
          eyebrow="LEITURA DO SISTEMA"
          title="Visual também é progressão"
          description="Wings, skins e transmogrificações ficam em abas de aparência, mas entregam atributos e efeitos de combate."
        />
        <div className="fact-grid three">
          {appearanceFacts.map((fact) => (
            <FactCard key={fact.title} kicker={fact.kicker} title={fact.title} text={fact.text} />
          ))}
        </div>
      </section>

      <section className="section" id="asas">
        <SectionHead eyebrow="ADVENTURER • TRANSMORPH" title="Wings" description={wingsIntro} />
        <div className="detail-grid">
          {wings.map((wing) => (
            <article className="sticker-card" key={wing.name}>
              <div className="detail-title">
                <span className="kicker">WING SKILL POR ESTRELA</span>
                <b className="chip chip-green">{wing.stats}</b>
              </div>
              <h3>{wing.name}</h3>
              <div className="skill-list">
                {wing.skills.map((skill) => (
                  <div key={skill.level}>
                    <b>{skill.level}</b>
                    <span>{skill.text}</span>
                  </div>
                ))}
              </div>
              {wing.note ? <p className="boss-desc" style={{ marginTop: 12 }}>{wing.note}</p> : null}
            </article>
          ))}
        </div>
        <div className="shot-grid four">
          {wings.map((wing) => (
            <ShotFigure key={wing.image} src={wing.image} alt={`Tela da asa ${wing.name}`} caption={wing.name} />
          ))}
          {wingsGallery.map((shot) => (
            <ShotFigure key={shot.src} src={shot.src} alt={shot.alt} caption={shot.caption} />
          ))}
          {wingsExtraGallery.map((shot) => (
            <ShotFigure key={shot.src} src={shot.src} alt={shot.alt} caption={shot.caption} linked />
          ))}
        </div>
      </section>

      <section className="section" id="skins">
        <SectionHead
          eyebrow="HERO SKIN"
          title="Miss Question Mark"
          description={`${missQuestionMarkSkin.hero}: ${missQuestionMarkSkin.rule}.`}
        />
        <div className="dismantle-layout">
          <article className="sticker-card">
            <span className="kicker">SKIN OBSERVADA</span>
            <h3>{missQuestionMarkSkin.name}</h3>
            <p className="boss-desc">{missQuestionMarkSkin.stats}</p>
            <p className="boss-desc">{missQuestionMarkSkin.note}</p>
          </article>
          <div className="table-wrap sticker-card">
            <table className="game-table">
              <thead>
                <tr><th>Estrela</th><th>ATK</th><th>DEF</th><th>Max HP</th><th>Custo do salto</th></tr>
              </thead>
              <tbody>
                {missQuestionMarkSkin.starUps.map((row) => (
                  <tr key={row.level}><td>{row.level}</td><td>{row.atk}</td><td>{row.def}</td><td>{row.hp}</td><td>{row.cost}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="shot-grid three">
          {skinGallery.map((shot) => (
            <ShotFigure key={shot.src} src={shot.src} alt={shot.alt} caption={shot.caption} linked />
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
