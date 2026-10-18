export function SectionRef({ data }) {
  return (
    <div className="sec-ref">
      <span className="id">{data.id}</span>
      <span className="title">{data.title}</span>
      <span className="meta">{data.meta}</span>
    </div>
  );
}
