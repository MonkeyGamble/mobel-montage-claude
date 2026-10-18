import { CONTACT } from '../config/contact.js';

export function Navigation({ data: navigation, lang, setLang, scrolled }) {
  return (
    <nav className={'nav' + (scrolled ? ' solid' : '')} id="nav">
      <div className="nav-inner">
        <a className="wordmark" href="#top">
          MÖBEL&nbsp;MONTAGE<span className="sub">{navigation.sub}</span>
        </a>
        <div className="nav-links">
          {navigation.links.map((l) => (
            <a href={l.href} key={l.href}>
              <span className="num">{l.num}</span>
              {l.label}
            </a>
          ))}
        </div>
        <div className="nav-right">
          <a className="nav-phone" href={CONTACT.phoneHref}>
            {CONTACT.phoneLabel}
          </a>
          <div className="lang-switch" role="group" aria-label="Sprache / Мова">
            {['DE', 'UK'].map((code) => (
              <button
                type="button"
                className={lang === code ? 'active' : ''}
                aria-pressed={lang === code}
                onClick={() => setLang(code)}
                key={code}
              >
                {code}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
