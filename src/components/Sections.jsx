import { Drawings } from './Drawings.jsx';
import { Icons } from './Icons.jsx';

export function SectionRef({ data }) {
  return <div className="sec-ref"><span className="id">{data.id}</span><span className="title">{data.title}</span><span className="meta">{data.meta}</span></div>;
}

export function Hero({ data: d }) {
  return <section className="hero" id="top"><div className="wrap" style={{ paddingLeft: 0, paddingRight: 0 }}>
    <div className="hero-meta wrap" style={{ maxWidth: 'none' }}>{d.meta.map(m => <div key={m.k}>{m.k} <span>{m.v}</span></div>)}</div>
    <div className="hero-frame">
      <div className="hero-rail"><span className="v">{d.railL1}</span><span className="v">{d.railL2}</span></div>
      <div className="hero-left fade-in">
        <div className="tagline">{d.tagline[0]}<span className="slash">/</span>{d.tagline[1]}<span className="slash">/</span>{d.tagline[2]}</div>
        <h1 className="display" style={{ fontSize: 'clamp(64px,9.5vw,140px)', letterSpacing: '-0.04em', color: '#0E0D0B' }}><span style={{ color: '#ffa500' }}>{d.title1}</span><br />{d.title2}</h1>
        <p className="sub fade-in d1">{d.sub}</p>
        <div className="hero-ctas fade-in d2"><a className="btn btn-primary" href="#kontakt" style={{ backgroundColor: 'rgb(255,165,0)', color: '#0E0D0B' }}>{d.cta}<span className="arrow-circle">{Icons.arrowRight(12)}</span></a></div>
      </div>
      <div className="hero-right fade-in d3"><div className="hero-drawing"><img className="hero-img" src="assets/schrank-hero.png" alt={d.imgAlt} /></div><div className="hero-spec">{d.spec.map(s => <div key={s.k}>{s.k} <strong>{s.v}</strong></div>)}</div></div>
      <div className="hero-rail right"><span className="v">{d.railR1}</span><span className="v">{d.railR2}</span></div><div className="hero-corners" aria-hidden="true" />
    </div>
  </div></section>;
}

export function Standards({ data }) {
  return <section className="standards"><div className="standards-inner">{data.map(it => <div className="standard" key={it.k}><span>{it.k.padStart(2, '0')} — {it.label}</span><strong>{it.v}</strong></div>)}</div></section>;
}

export function Philosophy({ data: p }) {
  return <section className="section wrap" id="philosophie"><SectionRef data={p.ref} />
    <p className="philosophy-pull">{p.pullA}<br />{p.pullB}<em>{p.pullEm}</em>{p.pullC}</p>
    <div className="philosophy-frame"><div className="spec-table">{p.rows.map(r => <div className="row" key={r.key}><div className="key">{r.key}</div><div className="val">{r.val}</div></div>)}</div>
      <div className="philosophy-side"><p className="eyebrow">{p.writtenBy}</p><div className="signature"><div className="avatar">K</div><div className="who">{p.author}<span>{p.authorRole}</span></div></div><p className="philosophy-bio">{p.authorBio}</p></div>
    </div>
  </section>;
}

const serviceDrawings = [Drawings.cabinet, Drawings.toolbox, Drawings.recycle];
export function Services({ data: s }) {
  return <section className="section wrap" id="leistungen"><SectionRef data={s.ref} />
    <div className="section-head"><div><div className="eyebrow">{s.eyebrow}</div><h2 style={{ color: 'rgb(255,140,0)' }}><span style={{ color: '#0E0D0B' }}>{s.headA}</span><br /><em>{s.headEm}</em>.</h2></div><p className="desc">{s.desc}</p></div>
    <div className="catalog">{s.items.map((it, i) => <article className="catalog-row" key={it.code}><div className="code">{it.code}</div><h3 className="name">{it.name}</h3><p className="desc">{it.desc}</p><ul className="includes">{it.includes.map(inc => <li key={inc}>{inc}</li>)}</ul><div className="drawing">{(serviceDrawings[i] || Drawings.cabinet)(64, 64)}</div></article>)}</div>
  </section>;
}

const stepDrawings = [Drawings.processStep1, Drawings.processStep2, Drawings.processStep3, Drawings.processStep4];
export function Process({ data: pr }) {
  return <section className="section wrap" id="ablauf"><SectionRef data={pr.ref} />
    <div className="section-head"><div><div className="eyebrow">{pr.eyebrow}</div><h2>{pr.headA}<em>{pr.headEm}</em>{pr.headB}</h2></div><p className="desc">{pr.desc}</p></div>
    <div className="process"><div className="process-grid">{pr.steps.map((st, i) => <div className="process-step" key={st.num}><div className="step-num">{pr.stepWord} {st.num} / 04</div><div className="big tnum">{st.num}</div><div className="label"><strong>{st.label}</strong></div><p className="step-desc">{st.desc}</p><div className="diagram">{stepDrawings[i](200, 80)}</div></div>)}</div></div>
  </section>;
}

export function Featured({ data: f }) {
  return <section className="featured" id="referenzen"><div className="wrap"><SectionRef data={f.ref} />
    <div className="section-head"><div><div className="eyebrow">{f.eyebrow}</div><h2>{f.headA}<br /><em>{f.headEm}</em>{f.headB}</h2></div><p className="desc">{f.desc}</p></div>
    <div className="featured-grid">{f.projects.map(p => <article className="feat-card" key={p.head}><div className="feat-head"><span><strong>{p.head}</strong> · {f.akte}</span><span>{p.head2}</span></div><div className="ph">IMG · 4:3</div><h3>{p.title}</h3><p className="feat-desc">{p.desc}</p><div className="feat-meta">{Object.entries(p.meta).map(([k, v]) => <span key={k}>{k}<strong>{v}</strong></span>)}</div></article>)}</div>
  </div></section>;
}

export function Testimonial({ data: tm }) {
  return <section className="testimonial wrap"><div className="testimonial-mark">{tm.mark}</div><p className="testimonial-quote">{tm.quoteA}<em>{tm.quoteEm}</em>{tm.quoteB}</p><div className="testimonial-attr"><div className="avatar">M</div><span className="name">{tm.name}</span><span className="sep">/</span><span>{tm.loc}</span><span className="sep">/</span><span>{tm.date}</span></div></section>;
}

export function Footer({ data: fo }) {
  return <footer className="footer"><div className="wrap"><div className="footer-cols">
    <div className="footer-col"><h4>{fo.c1Head}</h4><div className="signature-block"><div className="name">{fo.name}</div><div className="role">{fo.role}</div></div><p style={{ color: 'var(--ink-soft)', fontSize: 13, lineHeight: 1.6, maxWidth: 280 }}>{fo.c1Bio}</p></div>
    <div className="footer-col"><h4>{fo.c2Head}</h4><a href="tel:+4917621855005">0176 218 55 005</a><a href="mailto:fatuglyaces@gmail.com">fatuglyaces@gmail.com</a><a href="https://wa.me/4917621855005">{fo.wa}</a><p style={{ color: 'var(--gray)', fontFamily: 'var(--f-mono)', fontSize: 11, letterSpacing: '0.1em', marginTop: 10, textTransform: 'uppercase' }}>{fo.hours}</p></div>
    <div className="footer-col"><h4>{fo.c3Head}</h4><div className="mono-list">{fo.cities.map(c => <div key={c}>{c}</div>)}</div></div>
    <div className="footer-col"><h4>{fo.c4Head}</h4>{fo.legal.map(l => <a href="#" key={l}>{l}</a>)}<p style={{ color: 'var(--gray)', fontFamily: 'var(--f-mono)', fontSize: 11, letterSpacing: '0.1em', marginTop: 14, textTransform: 'uppercase' }}>{fo.langLabel}<br />DE · UK</p></div>
  </div></div><div className="footer-mega" aria-hidden="true"><span style={{ fontSize: 'clamp(56px,14vw,200px)', lineHeight: 1, letterSpacing: '-0.03em' }}>MÖBEL&nbsp;MONTAGE</span><span className="reg">№ MM-001 / 2026</span></div><div className="footer-bottom"><div className="wrap-row"><span>{fo.copyright}</span><span>{fo.madeIn}</span></div></div></footer>;
}
