import Link from "next/link";
const links = [
  { href: "/", label: "Início" },
  { href: "/equipamentos", label: "Equipamentos" },
  { href: "/visuais", label: "Visuais" },
  { href: "/coop", label: "Co-op" },
  { href: "/runs", label: "Runs" },
  { href: "/personagens", label: "Personagens" },
  { href: "/ur", label: "UR" },
  { href: "/expedicao", label: "Expedição" },
  { href: "/invocacao", label: "Invocação" },
];

type Props = {
  active?: string;
};

export function SiteHeader({ active }: Props) {
  return (
    <header className="topbar">
      <Link className="brand" href="/" aria-label="Oopsie Croco Wiki — início">
        <span className="brand-mark" aria-hidden="true">🐊</span>
        <span className="brand-name">
          <b>Oopsie Croco</b>
          <small>Wiki de campo</small>
        </span>
      </Link>
      <nav aria-label="Navegação principal">
        {links.map((link) => (
          <Link key={link.href} href={link.href} aria-current={active === link.href ? "page" : undefined}>
            {link.label}
          </Link>
        ))}
      </nav>
      <span className="version">v0.2 • em construção</span>
    </header>
  );
}
