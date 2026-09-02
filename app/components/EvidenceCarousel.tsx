"use client";

import { useMemo, useState } from "react";

export type EvidenceCarouselItem = {
  src: string;
  label: string;
  kind: string;
  alt?: string;
};

type Props = {
  items: EvidenceCarouselItem[];
};

export function EvidenceCarousel({ items }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = items[activeIndex];
  const count = items.length;

  const thumbs = useMemo(() => items.map((item, index) => ({ ...item, index })), [items]);

  if (!active) return null;

  function go(delta: number) {
    setActiveIndex((current) => (current + delta + count) % count);
  }

  return (
    <div className="evidence-carousel">
      <div className="carousel-stage">
        <button className="carousel-nav prev" type="button" aria-label="Print anterior" onClick={() => go(-1)}>
          ‹
        </button>
        <a className="carousel-image-link" href={active.src} target="_blank" rel="noreferrer">
          <img src={active.src} alt={active.alt ?? active.label} />
        </a>
        <button className="carousel-nav next" type="button" aria-label="Próximo print" onClick={() => go(1)}>
          ›
        </button>
      </div>

      <div className="carousel-caption">
        <b>{String(activeIndex + 1).padStart(2, "0")} / {String(count).padStart(2, "0")} · {active.kind}</b>
        <p>{active.label}</p>
      </div>

      <div className="carousel-thumbs" aria-label="Miniaturas da galeria">
        {thumbs.map((item) => (
          <button
            aria-current={item.index === activeIndex}
            aria-label={`Abrir print ${item.index + 1}: ${item.kind}`}
            key={item.src}
            onClick={() => setActiveIndex(item.index)}
            type="button"
          >
            <img src={item.src} alt="" />
            <span>{String(item.index + 1).padStart(2, "0")}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
