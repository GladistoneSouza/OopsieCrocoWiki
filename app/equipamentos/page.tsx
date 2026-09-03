import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { SectionHead } from "../components/SectionHead";
import { CalloutNote } from "../components/CalloutNote";

export const metadata: Metadata = {
  title: "Equipamentos — Oopsie Croco Wiki",
  description: "O mapa do sistema de equipamento de Oopsie Croco: peças e raridade, gemas e refino, cada um com sua própria página.",
};

const areas = [
  {
    href: "/equipamentos/pecas",
    icon: "🛡️",
    tone: "gold",
    title: "Peças e raridade",
    text: "Começa pelas cinco camadas que definem a força de uma peça e segue no código de cor da forja e no retorno da desmontagem.",
    cta: "Ler a peça",
    destaque: "A cor do nome já diz a raridade — dourado é Legendary, vermelho é Mythic, rosa é Immortal.",
  },
  {
    href: "/equipamentos/gemas",
    icon: "💎",
    tone: "berry",
    title: "Gemas",
    text: "Até cinco bônus por peça, numa aba separada do atributo próprio dela. É onde a build vira específica: classe, herói, modo ou tipo de inimigo.",
    cta: "Ver os bônus",
    destaque: "Uma Sapphire no capacete carrega efeito próprio e ainda tem cinco sockets seus.",
  },
  {
    href: "/equipamentos/refino",
    icon: "🔥",
    tone: "sky",
    title: "Refino",
    text: "Rolagem de atributos com 20% de chance de efeito especial, custo em poções, faixas por tier e o que a trava preserva entre tentativas.",
    cta: "Entrar na forja",
    destaque: "Berserk Warrior vai de 3–6% no tier azul até 24–30% no rosa.",
  },
];

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

      <section className="section" id="areas">
        <SectionHead
          eyebrow="CINCO CAMADAS, TRÊS PÁGINAS"
          title="Onde cada camada mora"
          description="Raridade, nível e aprimoramento se leem na própria peça e ficam juntos em Peças e raridade. Gemas e refino são grandes o bastante para ter página cada um. Esta aqui é só o índice."
        />
        <div className="system-grid">
          {areas.map((area) => (
            <Link className={`system-card tone-${area.tone}`} href={area.href} key={area.href}>
              <span className="system-icon" aria-hidden="true">{area.icon}</span>
              <h3>{area.title}</h3>
              <p>{area.text}</p>
              <p className="area-destaque">{area.destaque}</p>
              <b>{area.cta} →</b>
            </Link>
          ))}
        </div>
        <CalloutNote
          tone="info"
          title="A camada mais fraca da wiki"
          text="Das cinco, o aprimoramento é a que tem menos escrito: uma linha dizendo que o +69, +70 representa o reforço da peça. Os prints do salto de nível e dos bônus de Breakthrough já estão capturados e ainda não foram minerados — quando virarem tabela, o aprimoramento ganha a quarta página."
        />
      </section>

      <SiteFooter />
    </main>
  );
}
