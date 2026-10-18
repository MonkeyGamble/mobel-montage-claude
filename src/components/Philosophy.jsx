import { SectionRef } from './SectionRef.jsx';

export function Philosophy({ data: philosophy }) {
  return (
    <section className="section wrap" id="philosophie">
      <SectionRef data={philosophy.ref} />
      <p className="philosophy-pull">
        {philosophy.pullA}
        <br />
        {philosophy.pullB}
        <em>{philosophy.pullEm}</em>
        {philosophy.pullC}
      </p>
      <div className="philosophy-frame">
        <div className="spec-table">
          {philosophy.rows.map((r) => (
            <div className="row" key={r.key}>
              <div className="key">{r.key}</div>
              <div className="val">{r.val}</div>
            </div>
          ))}
        </div>
        <div className="philosophy-side">
          <p className="eyebrow">{philosophy.writtenBy}</p>
          <div className="signature">
            <div className="avatar">K</div>
            <div className="who">
              {philosophy.author}
              <span>{philosophy.authorRole}</span>
            </div>
          </div>
          <p className="philosophy-bio">{philosophy.authorBio}</p>
        </div>
      </div>
    </section>
  );
}
