type Props = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHead({ eyebrow, title, description }: Props) {
  return (
    <div className="section-head">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {description ? <p className="section-lede">{description}</p> : null}
    </div>
  );
}
