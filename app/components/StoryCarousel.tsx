"use client";

import { useState } from "react";
import type { HeroStorySlide } from "../data/types";

type Props = {
  slides: HeroStorySlide[];
};

export function StoryCarousel({ slides }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = slides[activeIndex];
  const count = slides.length;

  if (!active) return null;

  function go(delta: number) {
    setActiveIndex((current) => (current + delta + count) % count);
  }

  return (
    <div className="story-carousel">
      <div className="story-book-stage">
        <button className="carousel-nav prev" type="button" aria-label="Página anterior" onClick={() => go(-1)}>
          ‹
        </button>

        <article className="story-book-page">
          <header className="story-book-header">
            <div>
              <span>{active.eyebrow ?? `Página ${activeIndex + 1}`}</span>
              <h3>{active.title}</h3>
            </div>
            {active.status ? <b>{active.status}</b> : null}
          </header>

          <div className="story-book-body">
            {active.portraitImage ? (
              <div
                aria-hidden="true"
                className="story-book-portrait"
                style={{ backgroundImage: `url(${active.portraitImage})` }}
              />
            ) : null}
            <div className="story-book-copy">
              {active.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>

          {active.note ? <footer>{active.note}</footer> : null}
        </article>

        <button className="carousel-nav next" type="button" aria-label="Próxima página" onClick={() => go(1)}>
          ›
        </button>
      </div>

      <div className="carousel-caption story-caption">
        <b>{String(activeIndex + 1).padStart(2, "0")} / {String(count).padStart(2, "0")} · {active.title}</b>
        <p>{active.caption ?? active.note ?? "Texto consolidado a partir dos prints originais da aba Story."}</p>
      </div>

      <div className="story-page-dots" aria-label="Páginas da história">
        {slides.map((slide, index) => (
          <button
            aria-current={index === activeIndex}
            aria-label={`Abrir ${slide.title}`}
            key={slide.title}
            onClick={() => setActiveIndex(index)}
            type="button"
          >
            {String(index + 1).padStart(2, "0")}
          </button>
        ))}
      </div>
    </div>
  );
}
