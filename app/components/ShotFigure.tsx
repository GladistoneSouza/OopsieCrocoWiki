type Props = {
  src: string;
  alt: string;
  title?: string;
  caption?: string;
  linked?: boolean;
};

export function ShotFigure({ src, alt, title, caption, linked = false }: Props) {
  const image = <img src={src} alt={alt} loading="lazy" />;
  return (
    <figure className="shot">
      {linked ? <a href={src} target="_blank" rel="noreferrer">{image}</a> : image}
      <figcaption>
        {title ? <b>{title}</b> : null}
        {caption ? <span>{caption}</span> : null}
      </figcaption>
    </figure>
  );
}
