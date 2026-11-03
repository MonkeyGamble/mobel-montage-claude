import { useRef } from 'react';
import { SectionRef } from './SectionRef.jsx';
import { REVIEWS, REVIEW_COPY } from '../data/reviews.js';

export function Testimonial({ lang }) {
  const copy = REVIEW_COPY[lang];
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  function move(direction) {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    const group = track.querySelector('.reviews-group');
    const card = group.querySelector('.review-card');
    const step = card.getBoundingClientRect().width + parseFloat(getComputedStyle(group).gap);
    const animation = track.getAnimations()[0];
    if (animation) {
      const duration = animation.effect.getTiming().duration;
      const next =
        Number(animation.currentTime || 0) +
        ((direction * step) / group.getBoundingClientRect().width) * duration;
      animation.currentTime = ((next % duration) + duration) % duration;
    } else {
      const max = viewport.scrollWidth - viewport.clientWidth;
      const next = viewport.scrollLeft + direction * step;
      viewport.scrollTo({ left: next > max + 1 ? 0 : next < -1 ? max : next, behavior: 'instant' });
    }
  }
  return (
    <section className="testimonial wrap" aria-labelledby="reviews-title">
      <SectionRef
        data={{ id: '05 / 07', title: copy.title, meta: `${REVIEWS.length} ${copy.countLabel}` }}
      />
      <div className="reviews-heading">
        <div>
          <h2 id="reviews-title">{copy.title}</h2>
        </div>
      </div>
      <div
        ref={viewportRef}
        id="reviews-carousel"
        className="reviews-window"
        tabIndex={0}
        role="region"
        aria-label={copy.title}
      >
        <div ref={trackRef} className="reviews-track">
          {[0, 1].map((group) => (
            <div className="reviews-group" key={group} aria-hidden={group === 1 ? true : undefined}>
              {REVIEWS.map((review) => (
                <article className="review-card" key={review.id}>
                  <div className="review-meta">
                    <time dateTime={review.date}>
                      {new Intl.DateTimeFormat(copy.locale, {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                        timeZone: 'UTC',
                      }).format(new Date(review.date))}
                    </time>
                    <span className="review-stars" aria-label={`${review.rating} / 5`}>
                      <span aria-hidden="true">
                        {'★'.repeat(review.rating)}
                        <span className="review-star-empty">{'☆'.repeat(5 - review.rating)}</span>
                      </span>
                    </span>
                  </div>
                  {review.ikea && <h3>{copy.ikea}</h3>}
                  {review.text[lang] ? (
                    <blockquote>{review.text[lang]}</blockquote>
                  ) : (
                    <p className="review-note">{copy.empty}</p>
                  )}
                  {review.text[lang] && lang !== review.originalLanguage && (
                    <p className="review-note">{copy.translated}</p>
                  )}
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="reviews-controls">
        <button
          type="button"
          aria-label={copy.previous}
          aria-controls="reviews-carousel"
          onClick={() => move(-1)}
        >
          <span aria-hidden="true">←</span>
        </button>
        <button
          type="button"
          aria-label={copy.next}
          aria-controls="reviews-carousel"
          onClick={() => move(1)}
        >
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </section>
  );
}
