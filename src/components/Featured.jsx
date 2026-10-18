import { SectionRef } from './SectionRef.jsx';
import { SectionHeading } from './SectionHeading.jsx';

export function Featured({ data: featured }) {
  return (
    <section className="featured" id="referenzen">
      <div className="wrap">
        <SectionRef data={featured.ref} />
        <SectionHeading eyebrow={featured.eyebrow} description={featured.desc}>
          <h2>
            {featured.headA}
            <br />
            <em>{featured.headEm}</em>
            {featured.headB}
          </h2>
        </SectionHeading>
        <div className="featured-grid">
          {featured.projects.map((p) => (
            <article className="feat-card" key={p.head}>
              <div className="feat-head">
                <span>
                  <strong>{p.head}</strong> · {featured.akte}
                </span>
                <span>{p.head2}</span>
              </div>
              <div className="ph">IMG · 4:3</div>
              <h3>{p.title}</h3>
              <p className="feat-desc">{p.desc}</p>
              <div className="feat-meta">
                {Object.entries(p.meta).map(([k, v]) => (
                  <span key={k}>
                    {k}
                    <strong>{v}</strong>
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
