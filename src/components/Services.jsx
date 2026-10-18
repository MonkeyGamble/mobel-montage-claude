import { SectionHeading } from './SectionHeading.jsx';
import { SectionRef } from './SectionRef.jsx';
import { CabinetDrawing, ToolboxDrawing, RecycleDrawing } from './Drawings.jsx';
const serviceDrawings = [CabinetDrawing, ToolboxDrawing, RecycleDrawing];

export function Services({ data: services }) {
  return (
    <section className="section wrap" id="leistungen">
      <SectionRef data={services.ref} />
      <SectionHeading eyebrow={services.eyebrow} description={services.desc}>
        <h2 style={{ color: 'rgb(255,140,0)' }}>
          <span style={{ color: '#0E0D0B' }}>{services.headA}</span>
          <br />
          <em>{services.headEm}</em>.
        </h2>
      </SectionHeading>
      <div className="catalog">
        {services.items.map((it, i) => {
          const Drawing = serviceDrawings[i] || CabinetDrawing;
          return (
            <article className="catalog-row" key={it.code}>
              <div className="code">{it.code}</div>
              <h3 className="name">{it.name}</h3>
              <p className="desc">{it.desc}</p>
              <ul className="includes">
                {it.includes.map((inc) => (
                  <li key={inc}>{inc}</li>
                ))}
              </ul>
              <div className="drawing">
                <Drawing w={64} h={64} />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
