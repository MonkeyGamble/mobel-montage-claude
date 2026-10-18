export function ProjectCard({ project, labels, categoryLabel, placeholderHeight }) {
  return (
    <article className="arch-card">
      <div className="head">
        <span className="id">{project.id}</span>
        <span>{project.year}</span>
      </div>
      <div className="ph" style={{ height: placeholderHeight }}>
        IMG
      </div>
      <div className="body">
        <h3 className="name">{project.title}</h3>
        <div className="meta-grid">
          <span>
            {labels.loc}
            <strong>{project.loc}</strong>
          </span>
          <span>
            {labels.dur}
            <strong>{project.dur}</strong>
          </span>
          <span>
            {labels.cat}
            <strong>{categoryLabel}</strong>
          </span>
          <span>
            {labels.rooms}
            <strong>{project.rooms}</strong>
          </span>
        </div>
      </div>
    </article>
  );
}
