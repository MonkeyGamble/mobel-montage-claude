import { SectionRef } from './SectionRef.jsx';
import { useState } from 'react';
import { SectionHeading } from './SectionHeading.jsx';

export function FAQ({ data: faq }) {
  const [open, setOpen] = useState(0);
  return (
    <section className="section wrap" id="faq">
      <SectionRef data={faq.ref} />
      <SectionHeading eyebrow={faq.eyebrow} description={faq.desc}>
        <h2>
          {faq.headA}
          <em>{faq.headEm}</em>.
        </h2>
      </SectionHeading>
      <div className="faq-list">
        {faq.items.map((it, i) => (
          <div className={'faq-item' + (open === i ? ' open' : '')} key={i} data-i={i}>
            <button
              type="button"
              className="faq-q"
              aria-expanded={open === i}
              aria-controls={`faq-answer-${i}`}
              onClick={() => setOpen((current) => (current === i ? -1 : i))}
            >
              <span className="num">§ 0{i + 1}</span>
              <span>{it.q}</span>
              <span className="toggle">+</span>
            </button>
            <div className="faq-a" id={`faq-answer-${i}`}>
              {it.a}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
