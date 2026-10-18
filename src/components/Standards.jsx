export function Standards({ data }) {
  return (
    <section className="standards">
      <div className="standards-inner">
        {data.map((it) => (
          <div className="standard" key={it.k}>
            <span>
              {it.k.padStart(2, '0')} — {it.label}
            </span>
            <strong>{it.v}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}
