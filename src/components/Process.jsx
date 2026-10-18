import { SectionHeading } from './SectionHeading.jsx';
import { SectionRef } from './SectionRef.jsx';
import {
  ProcessStep1Drawing,
  ProcessStep2Drawing,
  ProcessStep3Drawing,
  ProcessStep4Drawing,
} from './Drawings.jsx';
const stepDrawings = [
  ProcessStep1Drawing,
  ProcessStep2Drawing,
  ProcessStep3Drawing,
  ProcessStep4Drawing,
];

export function Process({ data: process }) {
  return (
    <section className="section wrap" id="ablauf">
      <SectionRef data={process.ref} />
      <SectionHeading eyebrow={process.eyebrow} description={process.desc}>
        <h2>
          {process.headA}
          <em>{process.headEm}</em>
          {process.headB}
        </h2>
      </SectionHeading>
      <div className="process">
        <div className="process-grid">
          {process.steps.map((st, i) => {
            const Drawing = stepDrawings[i];
            return (
              <div className="process-step" key={st.num}>
                <div className="step-num">
                  {process.stepWord} {st.num} / 04
                </div>
                <div className="big tnum">{st.num}</div>
                <div className="label">
                  <strong>{st.label}</strong>
                </div>
                <p className="step-desc">{st.desc}</p>
                <div className="diagram">
                  <Drawing w={200} h={80} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
