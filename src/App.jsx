import { useEffect, useState } from 'react';
import { TRANSLATIONS } from './translations.js';
import { Hero, Standards, Philosophy, Services, Process, Featured, Testimonial, Footer } from './components/Sections.jsx';
import { Portfolio, FAQ, Contact } from './components/Interactive.jsx';
import { Icons } from './components/Icons.jsx';

function useLanguage() {
  const [lang, setLang] = useState(() => {
    try { return localStorage.getItem('mm-lang') === 'UK' ? 'UK' : 'DE'; }
    catch { return 'DE'; }
  });
  useEffect(() => {
    document.documentElement.lang = lang === 'UK' ? 'uk' : 'de';
    try { localStorage.setItem('mm-lang', lang); } catch { /* Storage may be disabled. */ }
  }, [lang]);
  return [lang, setLang];
}

function Navigation({ data: d, lang, setLang, scrolled }) {
  return <nav className={'nav' + (scrolled ? ' solid' : '')} id="nav"><div className="nav-inner">
    <a className="wordmark" href="#top">MÖBEL&nbsp;MONTAGE<span className="sub">{d.sub}</span></a>
    <div className="nav-links">{d.links.map(l => <a href={l.href} key={l.href}><span className="num">{l.num}</span>{l.label}</a>)}</div>
    <div className="nav-right"><a className="nav-phone" href="tel:+4917621855005">0176 218 55 005</a><div className="lang-switch" role="group" aria-label="Sprache / Мова">{['DE', 'UK'].map(code => <button type="button" className={lang === code ? 'active' : ''} aria-pressed={lang === code} onClick={() => setLang(code)} key={code}>{code}</button>)}</div></div>
  </div></nav>;
}

function PageChrome({ data, lang, setLang }) {
  const [scrolled, setScrolled] = useState(() => window.scrollY > 40);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 40);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
  return <><Navigation data={data.nav} lang={lang} setLang={setLang} scrolled={scrolled} /><a className={'fab' + (scrolled ? ' visible' : '')} href="#kontakt" aria-label={data.fab}><span className="ring">{Icons.whatsapp(14)}</span>{data.fab}</a></>;
}

export default function App() {
  const [lang, setLang] = useLanguage();
  const d = TRANSLATIONS[lang];
  return <><PageChrome data={d} lang={lang} setLang={setLang} /><main>
    <Hero data={d.hero} /><Standards data={d.standards} /><Philosophy data={d.philosophy} /><Services data={d.services} /><Portfolio data={d.portfolio} /><Process data={d.process} /><Featured data={d.featured} /><Testimonial data={d.testimonial} /><FAQ data={d.faq} /><Contact data={d.kontakt} />
  </main><Footer data={d.footer} /></>;
}
