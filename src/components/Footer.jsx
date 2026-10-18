import { CONTACT } from '../config/contact.js';

export function Footer({ data: footer }) {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-cols">
          <div className="footer-col">
            <h4>{footer.c1Head}</h4>
            <div className="signature-block">
              <div className="name">{footer.name}</div>
              <div className="role">{footer.role}</div>
            </div>
            <p style={{ color: 'var(--ink-soft)', fontSize: 13, lineHeight: 1.6, maxWidth: 280 }}>
              {footer.c1Bio}
            </p>
          </div>
          <div className="footer-col">
            <h4>{footer.c2Head}</h4>
            <a href={CONTACT.phoneHref}>{CONTACT.phoneLabel}</a>
            <a href={CONTACT.emailHref}>{CONTACT.email}</a>
            <a href={CONTACT.whatsappHref}>{footer.wa}</a>
            <p
              style={{
                color: 'var(--gray)',
                fontFamily: 'var(--f-mono)',
                fontSize: 11,
                letterSpacing: '0.1em',
                marginTop: 10,
                textTransform: 'uppercase',
              }}
            >
              {footer.hours}
            </p>
          </div>
          <div className="footer-col">
            <h4>{footer.c3Head}</h4>
            <div className="mono-list">
              {footer.cities.map((c) => (
                <div key={c}>{c}</div>
              ))}
            </div>
          </div>
          <div className="footer-col">
            <h4>{footer.c4Head}</h4>
            {footer.legal.map((l) => (
              <a href="#" key={l}>
                {l}
              </a>
            ))}
            <p
              style={{
                color: 'var(--gray)',
                fontFamily: 'var(--f-mono)',
                fontSize: 11,
                letterSpacing: '0.1em',
                marginTop: 14,
                textTransform: 'uppercase',
              }}
            >
              {footer.langLabel}
              <br />
              DE · UK
            </p>
          </div>
        </div>
      </div>
      <div className="footer-mega" aria-hidden="true">
        <span
          style={{ fontSize: 'clamp(56px,14vw,200px)', lineHeight: 1, letterSpacing: '-0.03em' }}
        >
          MÖBEL&nbsp;MONTAGE
        </span>
        <span className="reg">№ MM-001 / 2026</span>
      </div>
      <div className="footer-bottom">
        <div className="wrap-row">
          <span>{footer.copyright}</span>
          <span>{footer.madeIn}</span>
        </div>
      </div>
    </footer>
  );
}
