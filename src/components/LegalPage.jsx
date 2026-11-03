import { CookieSettingsButton } from './CookieBanner.jsx';
import { useEffect } from 'react';
import { LEGAL_IDS, LEGAL_UI, LEGAL_CONTENT } from '../data/legal.js';
import { CONTACT } from '../config/contact.js';

export function LegalPage({ page, lang, setLang }) {
  const ui = LEGAL_UI[lang];
  const title = ui.titles[LEGAL_IDS.indexOf(page)];
  useEffect(() => {
    document.title = `${title} · Möbel Montage NRW`;
    const robots = document.createElement('meta');
    robots.name = 'robots';
    robots.content = 'noindex, nofollow';
    document.head.append(robots);
    return () => {
      document.title = 'Möbel Montage NRW · Kostiantyn';
      robots.remove();
    };
  }, [title]);
  return (
    <>
      <header className="legal-header wrap">
        <a className="legal-brand" href="#">
          MÖBEL MONTAGE <span>NRW</span>
        </a>
        <div className="legal-languages" role="group" aria-label="DE / UA / EN">
          {['DE', 'UK', 'EN'].map((code) => (
            <button
              key={code}
              type="button"
              aria-pressed={lang === code}
              onClick={() => setLang(code)}
            >
              {code === 'UK' ? 'UA' : code}
            </button>
          ))}
        </div>
      </header>
      <main className="legal-page wrap">
        <a className="legal-back" href="#">
          ← {ui.home}
        </a>
        <div className="sec-ref">
          <span className="id">§</span>
          <span className="title">{ui.label}</span>
        </div>
        <h1>{title}</h1>
        <p className="legal-draft" role="note">
          {ui.draft}
        </p>
        <nav className="legal-tabs" aria-label={ui.label}>
          {LEGAL_IDS.map((id, index) => (
            <a key={id} href={`#/${id}`} aria-current={id === page ? 'page' : undefined}>
              {ui.titles[index]}
            </a>
          ))}
        </nav>
        <article className="legal-document">
          {LEGAL_CONTENT[lang][page].map(([heading, body]) => (
            <section key={heading}>
              <h2>{heading}</h2>
              <LegalText text={body} />
            </section>
          ))}
        </article>
        <div className="legal-contact">
          <h2>{ui.contact}</h2>
          <CookieSettingsButton lang={lang} />
          <a href={CONTACT.emailHref}>{CONTACT.email}</a>
          <a href={CONTACT.phoneHref}>{CONTACT.phoneLabel}</a>
          <a href="#kontakt">{ui.home} →</a>
        </div>
      </main>
    </>
  );
}

function LegalText({ text }) {
  return text
    .split(/\n\n+/)
    .filter(Boolean)
    .map((block, index) => {
      if (block.split('\n').every((line) => line.startsWith('- '))) {
        return (
          <ul key={index}>
            {block.split('\n').map((line, item) => (
              <li key={item}>{line.slice(2)}</li>
            ))}
          </ul>
        );
      }
      if (/^https:\/\/[^\s]+$/.test(block))
        return (
          <p key={index}>
            <a href={block}>{block}</a>
          </p>
        );
      return <p key={index}>{block}</p>;
    });
}
