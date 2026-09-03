import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../../components/SiteHeader";
import { SiteFooter } from "../../components/SiteFooter";
import { SectionHead } from "../../components/SectionHead";
import { FactCard } from "../../components/FactCard";
import { CalloutNote } from "../../components/CalloutNote";
import { ShotFigure } from "../../components/ShotFigure";
import {
  enhanceIntro,
  enhanceSteps,
  enhanceFacts,
  enhanceLimits,
  breakthroughRows,
  breakthroughNote,
  enhanceGallery,
} from "../../data/equipment";

export const metadata: Metadata = {
  title: "Aprimoramento — Oopsie Croco Wiki",
  description: "O +69, +70 da peça: quanto cada passo rende no atributo principal e os bônus de Breakthrough que cada slot destrava em Oopsie Croco.",
};

export default function Page() {
  return (
    <main>
      <SiteHeader active="/equipamentos" />

      <nav className="crumbs" aria-label="Você está em">
        <Link href="/equipamentos">Equipamentos</Link>
        <span aria-hidden="true">/</span>
        <b>Aprimoramento</b>
      </nav>

      <section className="page-hero tone-croco">
        <p className="eyebrow">O + AO LADO DO NOME</p>
        <h1>Aprimoramento</h1>
        <p className="lede">{enhanceIntro}</p>
      </section>

      <section className="section" id="leitura">
        <SectionHead
          eyebrow="O QUE OS PRINTS MOSTRAM"
          title="Três leituras dos seis passos"
        />
        <div className="fact-grid three">
          {enhanceFacts.map((fact) => (
            <FactCard key={fact.title} kicker={fact.kicker} title={fact.title} text={fact.text} />
          ))}
        </div>
      </section>

      <section className="section" id="passos">
        <SectionHead
          eyebrow="UM PASSO POR PEÇA"
          title="O que cada salto rendeu"
          description="Cada linha é um print. O ganho é a diferença entre os dois números da mesma tela, não uma projeção."
        />
        <div className="table-wrap sticker-card">
          <table className="game-table">
            <thead>
              <tr><th>Peça</th><th>Salto</th><th>Atributo</th><th>Antes</th><th>Depois</th><th>Ganho</th></tr>
            </thead>
            <tbody>
              {enhanceSteps.map((step) => (
                <tr key={`${step.piece}-${step.jump}`}>
                  <td>{step.piece}</td>
                  <td>{step.jump}</td>
                  <td>{step.stat}</td>
                  <td>{step.before}</td>
                  <td>{step.after}</td>
                  <td>{step.gain}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <CalloutNote tone="warning" title="Até onde isso vale" text={enhanceLimits} />
      </section>

      <section className="section" id="breakthrough">
        <SectionHead
          eyebrow="BÔNUS POR LIMIAR"
          title="Breakthrough"
          description="Abaixo do atributo principal, cada peça mostra um bônus extra e a versão seguinte dele, travada até a peça alcançar o nível indicado."
        />
        <div className="dismantle-layout">
          <div className="table-wrap sticker-card">
            <table className="game-table">
              <thead>
                <tr><th>Slot</th><th>Atributo</th><th>Atual</th><th>Destrava em</th><th>Vira</th></tr>
              </thead>
              <tbody>
                {breakthroughRows.map((row) => (
                  <tr key={row.slot}>
                    <td>{row.slot}</td>
                    <td>{row.attr}</td>
                    <td>{row.current}</td>
                    <td>{row.nextLevel}</td>
                    <td>{row.next}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <aside className="sticker-card">
            <span className="kicker">COMO LER</span>
            <span>{breakthroughNote}</span>
          </aside>
        </div>
      </section>

      <section className="section" id="evidencias">
        <SectionHead
          eyebrow="AS SEIS TELAS"
          title="Os prints por trás das tabelas"
        />
        <div className="shot-grid stack natural">
          {enhanceGallery.map((shot) => (
            <ShotFigure key={shot.src} src={shot.src} alt={shot.alt} caption={shot.caption} linked />
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
