type Props = {
  kicker: string;
  title: string;
  text: string;
};

export function FactCard({ kicker, title, text }: Props) {
  return (
    <article className="fact-card">
      <span className="kicker">{kicker}</span>
      <b>{title}</b>
      <p>{text}</p>
    </article>
  );
}
