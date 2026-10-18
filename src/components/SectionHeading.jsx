export function SectionHeading({ eyebrow, description, children }) {
  return (
    <div className="section-head">
      <div>
        <div className="eyebrow">{eyebrow}</div>
        {children}
      </div>
      <p className="desc">{description}</p>
    </div>
  );
}
