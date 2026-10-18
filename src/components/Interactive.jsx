import { useState } from 'react';
import { CAT_KEYS, PROJECTS, PH_HEIGHTS } from '../projects.js';
import { SectionRef } from './Sections.jsx';
import { Icons } from './Icons.jsx';

export function Portfolio({ data: p }) {
  const [filter, setFilter] = useState('all');
  const shown = filter === 'all' ? PROJECTS : PROJECTS.filter(pr => pr.cat === filter);
  const labelFor = key => p.cats[CAT_KEYS.indexOf(key)] || key;
  return <section className="section wrap" id="archiv"><SectionRef data={p.ref} />
    <div className="section-head"><div><div className="eyebrow">{p.eyebrow}</div><h2>{p.headA}<br /><em>{p.headEm}</em>.</h2></div><p className="desc">{p.desc}</p></div>
    <div className="filter-row" role="group" aria-label={p.ref.title}>{CAT_KEYS.map(c => <button type="button" className={'pill' + (filter === c ? ' active' : '')} data-cat={c} aria-pressed={filter === c} onClick={() => setFilter(c)} key={c}>{labelFor(c)}<span className="count">({String(c === 'all' ? PROJECTS.length : PROJECTS.filter(pr => pr.cat === c).length).padStart(2, '0')})</span></button>)}</div>
    <div className="archive-counter"><span aria-live="polite">{p.showing} · {String(shown.length).padStart(2, '0')} / {String(PROJECTS.length).padStart(2, '0')}</span><span>{p.sortLabel}</span></div>
    <div className="archive-grid">{shown.map((pr, i) => <article className="arch-card" key={pr.id}><div className="head"><span className="id">{pr.id}</span><span>{pr.year}</span></div><div className="ph" style={{ height: PH_HEIGHTS[i % PH_HEIGHTS.length] }}>IMG</div><div className="body"><h3 className="name">{pr.title}</h3><div className="meta-grid"><span>{p.card.loc}<strong>{pr.loc}</strong></span><span>{p.card.dur}<strong>{pr.dur}</strong></span><span>{p.card.cat}<strong>{labelFor(pr.cat)}</strong></span><span>{p.card.rooms}<strong>{pr.rooms}</strong></span></div></div></article>)}</div>
    {/* The source has no additional records or load-more handler. */}
    <div className="load-more"><button type="button" className="btn btn-ghost">{p.loadMore} {Icons.arrowRight(16)}</button></div>
  </section>;
}

export function FAQ({ data: fq }) {
  const [open, setOpen] = useState(0);
  return <section className="section wrap" id="faq"><SectionRef data={fq.ref} />
    <div className="section-head"><div><div className="eyebrow">{fq.eyebrow}</div><h2>{fq.headA}<em>{fq.headEm}</em>.</h2></div><p className="desc">{fq.desc}</p></div>
    <div className="faq-list">{fq.items.map((it, i) => <div className={'faq-item' + (open === i ? ' open' : '')} key={i} data-i={i}><button type="button" className="faq-q" aria-expanded={open === i} aria-controls={`faq-answer-${i}`} onClick={() => setOpen(current => current === i ? -1 : i)}><span className="num">§ 0{i + 1}</span><span>{it.q}</span><span className="toggle">+</span></button><div className="faq-a" id={`faq-answer-${i}`}>{it.a}</div></div>)}</div>
  </section>;
}

export function Contact({ data: k }) {
  const [submitted, setSubmitted] = useState(false);
  // Preserve the original local-only feedback; no backend exists in this project.
  function handleSubmit(event) { event.preventDefault(); setSubmitted(true); }
  return <section className="section kontakt wrap" id="kontakt"><SectionRef data={k.ref} />
    <div className="kontakt-head"><h2>{k.headA}<br /><em>{k.headEm}</em>{k.headB}</h2><p className="sub">{k.sub}</p></div>
    <form className="form-grid" id="contact-form" noValidate onSubmit={handleSubmit}>
      <div className="field"><label htmlFor="contact-name">{k.f1Label}<span className="req">*</span></label><input id="contact-name" name="name" type="text" autoComplete="name" placeholder={k.f1Ph} required /></div>
      <div className="field"><label htmlFor="contact-phone">{k.f2Label}<span className="req">*</span></label><input id="contact-phone" name="phone" type="tel" autoComplete="tel" placeholder={k.f2Ph} required /></div>
      <div className="field wide"><label htmlFor="contact-description">{k.f3Label}<span className="req">*</span></label><textarea id="contact-description" name="description" rows="2" placeholder={k.f3Ph} required /></div>
      <div className="field"><label htmlFor="contact-location">{k.f4Label}</label><input id="contact-location" name="location" type="text" placeholder={k.f4Ph} /></div>
      <label className="field upload"><div><div className="upload-label">{k.f5Label}</div><span className="hint">{k.f5Hint}</span></div>{Icons.upload(18)}<input name="attachment" type="file" hidden accept="image/*,application/pdf" /></label>
      <div className="submit-wrap"><button type="submit" className="submit"><span className="submit-text" aria-live="polite">{submitted ? k.submitted : k.submit}</span><span className="arrow">{Icons.arrowRight(18)}</span></button></div>
    </form>
    <div className="contact-direct">{['https://wa.me/4917621855005', 'tel:+4917621855005', 'mailto:fatuglyaces@gmail.com'].map((href, i) => <a href={href} className="contact-card" key={href}><span className="label">{k.cards[i].label}</span><span className="value" style={i === 2 ? { fontSize: 'clamp(16px,1.8vw,22px)' } : undefined}>{k.cards[i].value}</span></a>)}</div>
  </section>;
}
