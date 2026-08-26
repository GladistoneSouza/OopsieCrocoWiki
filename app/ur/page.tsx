import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { SectionHead } from "../components/SectionHead";
import { FactCard } from "../components/FactCard";
import { CalloutNote } from "../components/CalloutNote";
import { ShotFigure } from "../components/ShotFigure";
import { heroes } from "../data/heroes";
import {
  immortalEvent,
  eventRules,
  drawRules,
  currencies,
  selectionLadder,
  ladderAmbiguity,
  eventCadence,
  freePathReality,
  currencySources,
  prizePool,
  shopColumns,
  immortalShop,
  shopNote,
  eventMath,
  copyPaths,
  packVNote,
  packVINote,
  grandPrizeGamble,
  comboNote,
  strandedTrap,
  weeklyCeiling,
  immortalGallery,
  immortalPending,
  nextEditionChecklist,
} from "../data/immortal";
import {
  expeditionIntro,
  expeditionRules,
  expeditionTeams,
  cycleLoop,
  expeditionHaul,
  expeditionMath,
  dropVariance,
  levelLever,
  fourthSlot,
  unlockFirst,
  fragmentTradeoff,
  levelCostCurve,
  rosterFit,
  acquisitionPlan,
  expeditionGallery,
  expeditionPending,
} from "../data/expedition";
import { gemStore } from "../data/economy";
import { mythicAcquisition } from "../data/summons";

export const metadata: Metadata = {
  title: "Heróis UR e o Immortal Hero — Oopsie Croco Wiki",
  description:
    "O evento Immortal Hero · Limited-Time Recruitment: regras de draw, economia do Grail, tabela da Immortal Shop, a Expedition Squad como fonte gratuita e os dois heróis UR catalogados.",
};

const urHeroes = heroes.filter((hero) => hero.rarity === "UR");

export default function UrPage() {
  return (
    <main>
      <SiteHeader active="/ur" />

      <section className="page-hero tone-berry">
        <p className="eyebrow">A RARIDADE MAIS ALTA</p>
        <h1>Heróis UR</h1>
        <p className="lede">
          Existem dois UR catalogados e os dois saem do mesmo lugar: o Immortal Hero ·
          Limited-Time Recruitment. Documentar a raridade é documentar esse evento.
        </p>
      </section>

      <section className="section" id="herois">
        <SectionHead
          eyebrow="OS DOIS UR"
          title="Athena e Artemis"
          description="A edição de 26 ago. 2026 colocou as duas no mesmo banner — e o kit de uma cita a outra pelo nome."
        />
        <div className="character-directory">
          {urHeroes.map((hero) => (
            <Link href={`/personagens/${hero.slug}`} key={hero.slug} className="sticker-card">
              <span className="kicker">
                {hero.className} • {hero.rarity}
              </span>
              <h2>{hero.name}</h2>
              <p>{hero.summary}</p>
              <b>Ver ficha →</b>
            </Link>
          ))}
        </div>
        <CalloutNote
          tone="info"
          title="A dupla é intencional"
          text="O talento de nível 5 da Artemis dobra o bônus de crítico quando Athena está em campo. Durante semanas esse texto apontou para um nome sem ficha; o banner do evento mostrou que Athena é a outra UR da mesma linha."
        />
      </section>

      <section className="section" id="evento">
        <SectionHead eyebrow={immortalEvent.kicker} title={immortalEvent.title} description={immortalEvent.text} />
        <div className="fact-grid">
          {currencies.map((currency) => (
            <FactCard key={currency.title} kicker={currency.kicker} title={currency.title} text={currency.text} />
          ))}
        </div>
        <div className="detail-grid">
          {currencySources.map((entry) => (
            <article className="boss-card sticker-card" key={entry.currency}>
              <div className="detail-title">
                <span className="kicker">DE ONDE VEM</span>
              </div>
              <h3>{entry.currency}</h3>
              <p className="boss-desc">{entry.subtitle}</p>
              <div className="skill-list">
                {entry.sources.map((source) => (
                  <div key={source.name}>
                    <b>{source.name}</b>
                    <span>{source.text}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div className="fact-grid three">
          {eventRules.map((rule) => (
            <FactCard
              key={rule.title}
              kicker="REGRA DO EVENTO"
              title={rule.title}
              text={`“${rule.original}” — ${rule.text}`}
            />
          ))}
        </div>
        <div className="coop-grid">
          <ol className="rule-list">
            {drawRules.map((rule) => (
              <li key={rule.title}>
                <b>{rule.title}</b>
                <span>
                  <i>“{rule.original}”</i> — {rule.text}
                </span>
              </li>
            ))}
          </ol>
          <aside className="mvp-card sticker-card">
            <span className="kicker">{selectionLadder.kicker}</span>
            <h3>{selectionLadder.title}</h3>
            <p>{selectionLadder.text}</p>
            <small>{selectionLadder.note}</small>
          </aside>
        </div>
      </section>

      <section className="section" id="pool">
        <SectionHead eyebrow="O QUE SAI NO DRAW" title="As oito posições do pool" description={prizePool.intro} />
        <div className="enemy-grid">
          {prizePool.slots.map((slot) => (
            <article className="sticker-card" key={slot.label}>
              <h4>{slot.label}</h4>
              {slot.detail ? <p>{slot.detail}</p> : null}
            </article>
          ))}
        </div>
        <CalloutNote tone="warning" title="Leitura provável, não confirmada" text={prizePool.note} />
      </section>

      <section className="section" id="economia">
        <SectionHead
          eyebrow="A CONTA DAS DUAS MOEDAS"
          title="Quanto custa o pool e quanto custa escolher"
          description="Cada draw consome 10 Grails e devolve 1 Lucky Star — mas a Lucky Star também é vendida solta dentro dos pacotes, e é ela que compra o herói escolhido."
        />
        <div className="fact-grid">
          {eventMath.map((item) => (
            <FactCard key={item.kicker} kicker={item.kicker} title={item.title} text={item.text} />
          ))}
        </div>
        <div className="table-wrap sticker-card">
          <table className="game-table">
            <thead>
              <tr>
                {shopColumns.map((column) => (
                  <th key={column.key}>{column.label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {immortalShop.map((row) => (
                <tr key={row.pack}>
                  <td>
                    {row.pack}
                    {row.badge ? <b className="chip chip-light">{row.badge}</b> : null}
                  </td>
                  <td>{row.content}</td>
                  <td>{row.limit}</td>
                  <td>{row.price}</td>
                  <td>{row.stars}</td>
                  <td>{row.perStar}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <CalloutNote tone="warning" title="Contar só o Grail esconde metade da conta" text={shopNote} />
      </section>

      <section className="section" id="copias">
        <SectionHead
          eyebrow="QUANTAS CÓPIAS"
          title="O preço de cada troca"
          description={copyPaths.intro}
        />
        <CalloutNote tone="dark" title={ladderAmbiguity.title} text={ladderAmbiguity.text} />
        <div className="fact-grid three">
          <FactCard kicker={eventCadence.kicker} title={eventCadence.title} text={eventCadence.text} />
          <FactCard kicker={weeklyCeiling.kicker} title={weeklyCeiling.title} text={weeklyCeiling.text} />
          <FactCard kicker="CORREÇÃO" title="A quarta cópia não existe" text={weeklyCeiling.note} />
        </div>
        <div className="coop-grid">
          <div className="table-wrap sticker-card">
            <table className="game-table">
              <thead>
                <tr>
                  {copyPaths.columns.map((column) => (
                    <th key={column}>{column}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {copyPaths.rows.map((row) => (
                  <tr key={row.path}>
                    <td>{row.path}</td>
                    <td>{row.cost}</td>
                    <td>{row.direct}</td>
                    <td>{row.ceiling}</td>
                    <td>{row.target}</td>
                    <td>{row.chance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <aside className="mvp-card sticker-card">
            <span className="kicker">CAMINHO GRATUITO</span>
            <h3>{freePathReality.title}</h3>
            <p>{freePathReality.text}</p>
            <small>{freePathReality.note}</small>
          </aside>
        </div>
        <CalloutNote tone="dark" title={strandedTrap.title} text={strandedTrap.text} />
        <CalloutNote tone="info" title={comboNote.title} text={comboNote.text} />
        <CalloutNote tone="warning" title={packVNote.title} text={packVNote.text} />
        <CalloutNote tone="dark" title={packVINote.title} text={packVINote.text} />
        <div className="table-wrap sticker-card">
          <table className="game-table">
            <thead>
              <tr>
                {gemStore.columns.map((column) => (
                  <th key={column}>{column}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {gemStore.rows.map((row) => (
                <tr key={row.pack}>
                  <td>{row.pack}</td>
                  <td>{row.price}</td>
                  <td>{row.rate}</td>
                  <td>{row.first}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <CalloutNote tone="info" title="A tabela que dá preço ao diamante" text={`${gemStore.intro} ${gemStore.note}`} />
      </section>

      <section className="section" id="aposta">
        <SectionHead
          eyebrow={grandPrizeGamble.kicker}
          title={grandPrizeGamble.title}
          description={grandPrizeGamble.text}
        />
        <div className="table-wrap sticker-card">
          <table className="game-table">
            <thead>
              <tr>
                <th>Você para em</th>
                <th>Gasto</th>
                <th>Chance de ter limpado o pool</th>
                <th>Lucky Stars acumuladas</th>
              </tr>
            </thead>
            <tbody>
              {grandPrizeGamble.odds.map((row) => (
                <tr key={row.draws}>
                  <td>{row.draws}</td>
                  <td>{row.grails}</td>
                  <td>{row.chance}</td>
                  <td>{row.stars}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <CalloutNote tone="warning" title="Modelo, não taxa oficial" text={grandPrizeGamble.note} />
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
                  <tr key={row.level}>
                    <td>{row.level}</td>
                    <td>{row.cost}</td>
                    <td>{row.total}</td>
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
        <div className="shot-grid three">
          {expeditionGallery.map((shot) => (
            <ShotFigure key={shot.src} src={shot.src} alt={shot.alt} title={shot.title} caption={shot.caption} />
          ))}
        </div>
      </section>

      <section className="section" id="invocacao">
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
        <CalloutNote tone="warning" title="Qual das duas está na Immortal Shop?" text={mythicAcquisition.shopAmbiguity} />
        <CalloutNote tone="dark" title="Qual rota usar depende de quantos faltam" text={mythicAcquisition.consequence} />
        <CalloutNote tone="info" title="Outras fontes de ficha mítica" text={mythicAcquisition.otherSources} />
        <div className="shot-grid three">
          {mythicAcquisition.gallery.map((shot) => (
            <ShotFigure key={shot.src} src={shot.src} alt={shot.alt} title={shot.title} caption={shot.caption} />
          ))}
        </div>
      </section>

      <section className="section" id="evidencias">
        <SectionHead eyebrow="EVIDÊNCIAS" title="As telas que sustentam a página" />
        <div className="shot-grid wide">
          {immortalGallery.map((shot) => (
            <ShotFigure key={shot.src} src={shot.src} alt={shot.alt} title={shot.title} caption={shot.caption} />
          ))}
        </div>
      </section>

      <section className="section" id="pendencias">
        <SectionHead eyebrow="PENDÊNCIAS" title="O que ainda falta capturar" />
        <article className="mvp-card sticker-card">
          <span className="kicker">{nextEditionChecklist.kicker}</span>
          <h3>{nextEditionChecklist.title}</h3>
          <p>{nextEditionChecklist.intro}</p>
          <ol className="rule-list">
            {nextEditionChecklist.items.map((item) => (
              <li key={item}>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </article>
        <div className="coop-grid">
          <div>
            <p className="eyebrow">IMMORTAL HERO</p>
            <ol className="rule-list">
              {immortalPending.map((item) => (
                <li key={item}>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <p className="eyebrow">INVOCAÇÃO MÍTICA</p>
            <ol className="rule-list">
              {mythicAcquisition.pending.map((item) => (
                <li key={item}>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <p className="eyebrow">EXPEDITION SQUAD</p>
            <ol className="rule-list">
              {expeditionPending.map((item) => (
                <li key={item}>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
