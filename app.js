/* app.js — Möbel Montage landing page (vanilla JS) */

/* ── State ─────────────────────────────────────────────────── */
let lang = 'DE';
try { lang = localStorage.getItem('mm-lang') || 'DE'; } catch (e) {}
if (lang !== 'DE' && lang !== 'UK') lang = 'DE';

let scrolled = false;
let faqOpen  = 0;
let filter   = 'all';
let submitted = false;

const CAT_KEYS = ['all', 'PAX', 'Küche', 'Büro', 'Kinderzimmer', 'Custom'];

const PROJECTS = [
  { id: 'MM.241', title: 'PAX 300 / 236',   loc: 'Bonn-Endenich',    dur: '4 h',   year: '2025', cat: 'PAX',          rooms: '1' },
  { id: 'MM.238', title: 'METOD',            loc: 'Bad Godesberg',    dur: '2 T.',  year: '2025', cat: 'Küche',        rooms: '—' },
  { id: 'MM.234', title: 'Walk-in PLATSA',   loc: 'Bonn-Südstadt',    dur: '6 h',   year: '2025', cat: 'PAX',          rooms: '1' },
  { id: 'MM.231', title: 'BEKANT Doppel',    loc: 'Bonn-Zentrum',     dur: '3 h',   year: '2025', cat: 'Büro',         rooms: '1' },
  { id: 'MM.228', title: 'STUVA Set',        loc: 'Beuel',            dur: '5 h',   year: '2024', cat: 'Kinderzimmer', rooms: '1' },
  { id: 'MM.225', title: 'Custom Eiche',     loc: 'Bonn-Poppelsdorf', dur: '8 h',   year: '2024', cat: 'Custom',       rooms: '—' },
  { id: 'MM.222', title: 'BESTÅ TV',         loc: 'Hennef',           dur: '3 h',   year: '2024', cat: 'Custom',       rooms: '1' },
  { id: 'MM.219', title: 'KALLAX × 4',       loc: 'Siegburg',         dur: '2 h',   year: '2024', cat: 'Büro',         rooms: '1' },
  { id: 'MM.214', title: 'Eck-PAX 4-türig',  loc: 'Köln-Sülz',       dur: '5 h',   year: '2024', cat: 'PAX',          rooms: '1' }
];

const PH_HEIGHTS = [200,240,180,220,200,260,200,180,240];

/* ── i18n helpers ───────────────────────────────────────────── */
function t() { return window.TRANSLATIONS[lang] || window.TRANSLATIONS.DE; }

function setLang(l) {
  lang = l;
  try { localStorage.setItem('mm-lang', l); } catch (e) {}
  document.documentElement.lang = l === 'UK' ? 'uk' : 'de';
  render();
}

/* ── DOM utilities ──────────────────────────────────────────── */
function el(tag, cls, html) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html !== undefined) e.innerHTML = html;
  return e;
}

function h(tag, attrs, ...children) {
  const e = document.createElement(tag);
  if (attrs) Object.entries(attrs).forEach(([k,v]) => {
    if (k === 'class') e.className = v;
    else if (k.startsWith('on')) e.addEventListener(k.slice(2).toLowerCase(), v);
    else e.setAttribute(k, v);
  });
  children.forEach(c => {
    if (c == null) return;
    e.append(typeof c === 'string' ? document.createTextNode(c) : c);
  });
  return e;
}

/* ── Sections ───────────────────────────────────────────────── */

function renderNav() {
  const d = t();
  const nav = el('nav', 'nav' + (scrolled ? ' solid' : ''));
  nav.id = 'nav';

  const inner = el('div', 'nav-inner');

  // Wordmark
  const wm = el('a', 'wordmark');
  wm.href = '#top';
  wm.innerHTML = `MÖBEL&nbsp;MONTAGE<span class="sub">${d.nav.sub}</span>`;

  // Center links
  const links = el('div', 'nav-links');
  d.nav.links.forEach(l => {
    const a = el('a');
    a.href = l.href;
    a.innerHTML = `<span class="num">${l.num}</span>${l.label}`;
    links.append(a);
  });

  // Right: phone + lang switch
  const right = el('div', 'nav-right');
  const phone = el('a', 'nav-phone', '0176 218 55 005');
  phone.href = 'tel:+4917621855005';

  const ls = el('div', 'lang-switch');
  ls.setAttribute('role', 'tablist');
  ['DE','UK'].forEach(code => {
    const btn = el('button', lang === code ? 'active' : '');
    btn.textContent = code;
    btn.setAttribute('role', 'tab');
    btn.setAttribute('aria-selected', String(lang === code));
    btn.addEventListener('click', () => setLang(code));
    ls.append(btn);
  });

  right.append(phone, ls);
  inner.append(wm, links, right);
  nav.append(inner);
  return nav;
}

function renderHero() {
  const d = t().hero;
  const sec = el('section', 'hero');
  sec.id = 'top';

  // Meta strip
  const meta = el('div', 'hero-meta wrap');
  meta.style.maxWidth = 'none';
  d.meta.forEach(m => {
    const div = el('div', '', `${m.k} <span>${m.v}</span>`);
    meta.append(div);
  });

  // Frame
  const frame = el('div', 'hero-frame');

  // Left rail
  const railL = el('div', 'hero-rail');
  railL.innerHTML = `<span class="v">${d.railL1}</span><span class="v">${d.railL2}</span>`;

  // Left content
  const left = el('div', 'hero-left fade-in');
  const tagline = el('div', 'tagline');
  tagline.innerHTML = `${d.tagline[0]}<span class="slash">/</span>${d.tagline[1]}<span class="slash">/</span>${d.tagline[2]}`;

  const headline = el('h1', 'display');
  headline.style.cssText = 'font-size:clamp(64px,9.5vw,140px);letter-spacing:-0.04em;color:#0E0D0B';
  headline.innerHTML = `<span style="color:#ffa500">${d.title1}</span><br>${d.title2}`;

  const sub = el('p', 'sub fade-in d1', d.sub);
  const ctas = el('div', 'hero-ctas fade-in d2');
  const cta = el('a', 'btn btn-primary');
  cta.href = '#kontakt';
  cta.style.cssText = 'background-color:rgb(255,165,0);color:#0E0D0B';
  cta.innerHTML = `${d.cta}<span class="arrow-circle">${Icons.arrowRight(12)}</span>`;
  ctas.append(cta);

  left.append(tagline, headline, sub, ctas);

  // Right
  const right = el('div', 'hero-right fade-in d3');
  const drawing = el('div', 'hero-drawing');
  const img = el('img', 'hero-img');
  img.src = '../assets/schrank-hero.png';
  img.alt = d.imgAlt;
  drawing.append(img);

  const spec = el('div', 'hero-spec');
  d.spec.forEach(s => {
    spec.innerHTML += `<div>${s.k} <strong>${s.v}</strong></div>`;
  });
  right.append(drawing, spec);

  // Right rail
  const railR = el('div', 'hero-rail right');
  railR.innerHTML = `<span class="v">${d.railR1}</span><span class="v">${d.railR2}</span>`;

  const corners = el('div', 'hero-corners');
  corners.setAttribute('aria-hidden', 'true');

  frame.append(railL, left, right, railR, corners);

  const wrap = el('div', 'wrap');
  wrap.style.cssText = 'padding-left:0;padding-right:0';
  wrap.append(meta, frame);
  sec.append(wrap);
  return sec;
}

function renderStandards() {
  const items = t().standards;
  const sec = el('section', 'standards');
  const inner = el('div', 'standards-inner');
  items.forEach(it => {
    const div = el('div', 'standard');
    div.innerHTML = `<span>${it.k.padStart(2,'0')} — ${it.label}</span><strong>${it.v}</strong>`;
    inner.append(div);
  });
  sec.append(inner);
  return sec;
}

function renderPhilosophy() {
  const p = t().philosophy;
  const sec = el('section', 'section wrap');
  sec.id = 'philosophie';

  sec.innerHTML = `
    <div class="sec-ref">
      <span class="id">${p.ref.id}</span>
      <span class="title">${p.ref.title}</span>
      <span class="meta">${p.ref.meta}</span>
    </div>
    <p class="philosophy-pull">
      ${p.pullA}<br>${p.pullB}<em>${p.pullEm}</em>${p.pullC}
    </p>
    <div class="philosophy-frame">
      <div class="spec-table">
        ${p.rows.map(r => `<div class="row"><div class="key">${r.key}</div><div class="val">${r.val}</div></div>`).join('')}
      </div>
      <div class="philosophy-side">
        <p class="eyebrow">${p.writtenBy}</p>
        <div class="signature">
          <div class="avatar">K</div>
          <div class="who">${p.author}<span>${p.authorRole}</span></div>
        </div>
        <p class="philosophy-bio">${p.authorBio}</p>
      </div>
    </div>`;
  return sec;
}

function renderServices() {
  const s = t().services;
  const drawFns = [Drawings.cabinet, Drawings.toolbox, Drawings.recycle];

  const sec = el('section', 'section wrap');
  sec.id = 'leistungen';

  sec.innerHTML = `
    <div class="sec-ref">
      <span class="id">${s.ref.id}</span>
      <span class="title">${s.ref.title}</span>
      <span class="meta">${s.ref.meta}</span>
    </div>
    <div class="section-head">
      <div>
        <div class="eyebrow">${s.eyebrow}</div>
        <h2 style="color:rgb(255,140,0)"><span style="color:#0E0D0B">${s.headA}</span><br><em>${s.headEm}</em>.</h2>
      </div>
      <p class="desc">${s.desc}</p>
    </div>
    <div class="catalog">
      ${s.items.map((it, i) => `
        <article class="catalog-row">
          <div class="code">${it.code}</div>
          <h3 class="name">${it.name}</h3>
          <p class="desc">${it.desc}</p>
          <ul class="includes">${it.includes.map(inc => `<li>${inc}</li>`).join('')}</ul>
          <div class="drawing">${(drawFns[i] || Drawings.cabinet)(64, 64)}</div>
        </article>`).join('')}
    </div>`;
  return sec;
}

function renderPortfolio() {
  const p = t().portfolio;

  const counts = { all: PROJECTS.length };
  CAT_KEYS.slice(1).forEach(c => { counts[c] = PROJECTS.filter(pr => pr.cat === c).length; });

  const labelFor = key => p.cats[CAT_KEYS.indexOf(key)] || key;
  const shown = filter === 'all' ? PROJECTS : PROJECTS.filter(pr => pr.cat === filter);

  const sec = el('section', 'section wrap');
  sec.id = 'archiv';

  const pillsHtml = CAT_KEYS.map(c =>
    `<button class="pill${filter === c ? ' active' : ''}" data-cat="${c}">${labelFor(c)}<span class="count">(${String(counts[c]).padStart(2,'0')})</span></button>`
  ).join('');

  const cardsHtml = shown.map((pr, i) =>
    `<article class="arch-card">
      <div class="head"><span class="id">${pr.id}</span><span>${pr.year}</span></div>
      <div class="ph" style="height:${PH_HEIGHTS[i % PH_HEIGHTS.length]}px">IMG</div>
      <div class="body">
        <h3 class="name">${pr.title}</h3>
        <div class="meta-grid">
          <span>${p.card.loc}<strong>${pr.loc}</strong></span>
          <span>${p.card.dur}<strong>${pr.dur}</strong></span>
          <span>${p.card.cat}<strong>${labelFor(pr.cat)}</strong></span>
          <span>${p.card.rooms}<strong>${pr.rooms}</strong></span>
        </div>
      </div>
    </article>`
  ).join('');

  sec.innerHTML = `
    <div class="sec-ref">
      <span class="id">${p.ref.id}</span>
      <span class="title">${p.ref.title}</span>
      <span class="meta">${p.ref.meta}</span>
    </div>
    <div class="section-head">
      <div>
        <div class="eyebrow">${p.eyebrow}</div>
        <h2>${p.headA}<br><em>${p.headEm}</em>.</h2>
      </div>
      <p class="desc">${p.desc}</p>
    </div>
    <div class="filter-row" role="tablist">${pillsHtml}</div>
    <div class="archive-counter">
      <span>${p.showing} · ${String(shown.length).padStart(2,'0')} / ${String(PROJECTS.length).padStart(2,'0')}</span>
      <span>${p.sortLabel}</span>
    </div>
    <div class="archive-grid">${cardsHtml}</div>
    <div class="load-more">
      <button class="btn btn-ghost">${p.loadMore} ${Icons.arrowRight(16)}</button>
    </div>`;

  // Pill click handlers
  sec.querySelectorAll('.pill').forEach(btn => {
    btn.addEventListener('click', () => {
      filter = btn.dataset.cat;
      renderPortfolioOnly();
    });
  });

  return sec;
}

function renderPortfolioOnly() {
  const old = document.getElementById('archiv');
  if (!old) return;
  const neo = renderPortfolio();
  old.replaceWith(neo);
}

function renderProcess() {
  const pr = t().process;
  const stepDrawings = [Drawings.processStep1, Drawings.processStep2, Drawings.processStep3, Drawings.processStep4];

  const sec = el('section', 'section wrap');
  sec.id = 'ablauf';

  sec.innerHTML = `
    <div class="sec-ref">
      <span class="id">${pr.ref.id}</span>
      <span class="title">${pr.ref.title}</span>
      <span class="meta">${pr.ref.meta}</span>
    </div>
    <div class="section-head">
      <div>
        <div class="eyebrow">${pr.eyebrow}</div>
        <h2>${pr.headA}<em>${pr.headEm}</em>${pr.headB}</h2>
      </div>
      <p class="desc">${pr.desc}</p>
    </div>
    <div class="process">
      <div class="process-grid">
        ${pr.steps.map((st, i) => `
          <div class="process-step">
            <div class="step-num">${pr.stepWord} ${st.num} / 04</div>
            <div class="big tnum">${st.num}</div>
            <div class="label"><strong>${st.label}</strong></div>
            <p class="step-desc">${st.desc}</p>
            <div class="diagram">${stepDrawings[i](200, 80)}</div>
          </div>`).join('')}
      </div>
    </div>`;
  return sec;
}

function renderFeatured() {
  const f = t().featured;
  const sec = el('section', 'featured');
  sec.id = 'referenzen';

  sec.innerHTML = `<div class="wrap">
    <div class="sec-ref">
      <span class="id">${f.ref.id}</span>
      <span class="title">${f.ref.title}</span>
      <span class="meta">${f.ref.meta}</span>
    </div>
    <div class="section-head">
      <div>
        <div class="eyebrow">${f.eyebrow}</div>
        <h2>${f.headA}<br><em>${f.headEm}</em>${f.headB}</h2>
      </div>
      <p class="desc">${f.desc}</p>
    </div>
    <div class="featured-grid">
      ${f.projects.map(p => `
        <article class="feat-card">
          <div class="feat-head">
            <span><strong>${p.head}</strong> · ${f.akte}</span>
            <span>${p.head2}</span>
          </div>
          <div class="ph">IMG · 4:3</div>
          <h3>${p.title}</h3>
          <p class="feat-desc">${p.desc}</p>
          <div class="feat-meta">
            ${Object.entries(p.meta).map(([k,v]) => `<span>${k}<strong>${v}</strong></span>`).join('')}
          </div>
        </article>`).join('')}
    </div>
  </div>`;
  return sec;
}

function renderTestimonial() {
  const tm = t().testimonial;
  const sec = el('section', 'testimonial wrap');

  sec.innerHTML = `
    <div class="testimonial-mark">${tm.mark}</div>
    <p class="testimonial-quote">${tm.quoteA}<em>${tm.quoteEm}</em>${tm.quoteB}</p>
    <div class="testimonial-attr">
      <div class="avatar">M</div>
      <span class="name">${tm.name}</span>
      <span class="sep">/</span>
      <span>${tm.loc}</span>
      <span class="sep">/</span>
      <span>${tm.date}</span>
    </div>`;
  return sec;
}

function renderFAQ() {
  const fq = t().faq;

  const sec = el('section', 'section wrap');
  sec.id = 'faq';

  const itemsHtml = fq.items.map((it, i) => `
    <div class="faq-item${faqOpen === i ? ' open' : ''}" data-i="${i}">
      <button class="faq-q" aria-expanded="${faqOpen === i}">
        <span class="num">§ 0${i+1}</span>
        <span>${it.q}</span>
        <span class="toggle">+</span>
      </button>
      <div class="faq-a">${it.a}</div>
    </div>`).join('');

  sec.innerHTML = `
    <div class="sec-ref">
      <span class="id">${fq.ref.id}</span>
      <span class="title">${fq.ref.title}</span>
      <span class="meta">${fq.ref.meta}</span>
    </div>
    <div class="section-head">
      <div>
        <div class="eyebrow">${fq.eyebrow}</div>
        <h2>${fq.headA}<em>${fq.headEm}</em>.</h2>
      </div>
      <p class="desc">${fq.desc}</p>
    </div>
    <div class="faq-list">${itemsHtml}</div>`;

  sec.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const i = parseInt(btn.closest('.faq-item').dataset.i);
      faqOpen = faqOpen === i ? -1 : i;
      renderFAQOnly();
    });
  });

  return sec;
}

function renderFAQOnly() {
  const old = document.getElementById('faq');
  if (!old) return;
  old.replaceWith(renderFAQ());
}

function renderKontakt() {
  const k = t().kontakt;
  const sec = el('section', 'section kontakt wrap');
  sec.id = 'kontakt';

  sec.innerHTML = `
    <div class="sec-ref">
      <span class="id">${k.ref.id}</span>
      <span class="title">${k.ref.title}</span>
      <span class="meta">${k.ref.meta}</span>
    </div>
    <div class="kontakt-head">
      <h2>${k.headA}<br><em>${k.headEm}</em>${k.headB}</h2>
      <p class="sub">${k.sub}</p>
    </div>
    <form class="form-grid" id="contact-form" novalidate>
      <div class="field">
        <label>${k.f1Label}<span class="req">*</span></label>
        <input type="text" placeholder="${k.f1Ph}" required>
      </div>
      <div class="field">
        <label>${k.f2Label}<span class="req">*</span></label>
        <input type="tel" placeholder="${k.f2Ph}" required>
      </div>
      <div class="field wide">
        <label>${k.f3Label}<span class="req">*</span></label>
        <textarea rows="2" placeholder="${k.f3Ph}" required></textarea>
      </div>
      <div class="field">
        <label>${k.f4Label}</label>
        <input type="text" placeholder="${k.f4Ph}">
      </div>
      <label class="field upload">
        <div>
          <div class="upload-label">${k.f5Label}</div>
          <span class="hint">${k.f5Hint}</span>
        </div>
        ${Icons.upload(18)}
        <input type="file" hidden accept="image/*,application/pdf">
      </label>
      <div class="submit-wrap">
        <button type="submit" class="submit">
          <span class="submit-text">${submitted ? k.submitted : k.submit}</span>
          <span class="arrow">${Icons.arrowRight(18)}</span>
        </button>
      </div>
    </form>
    <div class="contact-direct">
      <a href="https://wa.me/4917621855005" class="contact-card">
        <span class="label">${k.cards[0].label}</span>
        <span class="value">${k.cards[0].value}</span>
      </a>
      <a href="tel:+4917621855005" class="contact-card">
        <span class="label">${k.cards[1].label}</span>
        <span class="value">${k.cards[1].value}</span>
      </a>
      <a href="mailto:fatuglyaces@gmail.com" class="contact-card">
        <span class="label">${k.cards[2].label}</span>
        <span class="value" style="font-size:clamp(16px,1.8vw,22px)">${k.cards[2].value}</span>
      </a>
    </div>`;

  sec.querySelector('#contact-form').addEventListener('submit', e => {
    e.preventDefault();
    submitted = true;
    const btn = sec.querySelector('.submit-text');
    if (btn) btn.textContent = k.submitted;
  });

  return sec;
}

function renderFooter() {
  const fo = t().footer;
  const footer = el('footer', 'footer');

  footer.innerHTML = `
    <div class="wrap">
      <div class="footer-cols">
        <div class="footer-col">
          <h4>${fo.c1Head}</h4>
          <div class="signature-block">
            <div class="name">${fo.name}</div>
            <div class="role">${fo.role}</div>
          </div>
          <p style="color:var(--ink-soft);font-size:13px;line-height:1.6;max-width:280px">${fo.c1Bio}</p>
        </div>
        <div class="footer-col">
          <h4>${fo.c2Head}</h4>
          <a href="tel:+4917621855005">0176 218 55 005</a>
          <a href="mailto:fatuglyaces@gmail.com">fatuglyaces@gmail.com</a>
          <a href="https://wa.me/4917621855005">${fo.wa}</a>
          <p style="color:var(--gray);font-family:var(--f-mono);font-size:11px;letter-spacing:0.1em;margin-top:10px;text-transform:uppercase">${fo.hours}</p>
        </div>
        <div class="footer-col">
          <h4>${fo.c3Head}</h4>
          <div class="mono-list">${fo.cities.map(c => `<div>${c}</div>`).join('')}</div>
        </div>
        <div class="footer-col">
          <h4>${fo.c4Head}</h4>
          ${fo.legal.map(l => `<a href="#">${l}</a>`).join('')}
          <p style="color:var(--gray);font-family:var(--f-mono);font-size:11px;letter-spacing:0.1em;margin-top:14px;text-transform:uppercase">
            ${fo.langLabel}<br>DE · UK
          </p>
        </div>
      </div>
    </div>
    <div class="footer-mega" aria-hidden="true">
      <span style="font-size:clamp(56px,14vw,200px);line-height:1;letter-spacing:-0.03em">MÖBEL&nbsp;MONTAGE</span>
      <span class="reg">№ MM-001 / 2026</span>
    </div>
    <div class="footer-bottom">
      <div class="wrap-row">
        <span>${fo.copyright}</span>
        <span>${fo.madeIn}</span>
      </div>
    </div>`;
  return footer;
}

function renderFAB() {
  const d = t();
  const fab = el('a', 'fab' + (scrolled ? ' visible' : ''));
  fab.href = '#kontakt';
  fab.setAttribute('aria-label', d.fab);
  fab.innerHTML = `<span class="ring">${Icons.whatsapp(14)}</span>${d.fab}`;
  return fab;
}

/* ── Full render ─────────────────────────────────────────────── */
function render() {
  const app = document.getElementById('app');
  if (!app) return;

  app.innerHTML = '';

  const nav     = renderNav();
  const main    = el('main');
  main.append(
    renderHero(),
    renderStandards(),
    renderPhilosophy(),
    renderServices(),
    renderPortfolio(),
    renderProcess(),
    renderFeatured(),
    renderTestimonial(),
    renderFAQ(),
    renderKontakt()
  );
  const footer  = renderFooter();
  const fab     = renderFAB();

  app.append(nav, main, footer, fab);
}

/* ── Init ────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  document.documentElement.lang = lang === 'UK' ? 'uk' : 'de';

  render();

  window.addEventListener('scroll', () => {
    const nowScrolled = window.scrollY > 40;
    if (nowScrolled !== scrolled) {
      scrolled = nowScrolled;
      // Update nav class
      const nav = document.querySelector('.nav');
      if (nav) nav.className = 'nav' + (scrolled ? ' solid' : '');
      // Update FAB
      const fab = document.querySelector('.fab');
      if (fab) fab.className = 'fab' + (scrolled ? ' visible' : '');
    }
  }, { passive: true });
});
