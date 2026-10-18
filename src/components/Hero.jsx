import { ArrowRightIcon } from './Icons.jsx';

export function Hero({ data: hero }) {
  return (
    <section className="hero" id="top">
      <div className="wrap" style={{ paddingLeft: 0, paddingRight: 0 }}>
        <div className="hero-meta wrap" style={{ maxWidth: 'none' }}>
          {hero.meta.map((m) => (
            <div key={m.k}>
              {m.k} <span>{m.v}</span>
            </div>
          ))}
        </div>
        <div className="hero-frame">
          <div className="hero-rail">
            <span className="v">{hero.railL1}</span>
            <span className="v">{hero.railL2}</span>
          </div>
          <div className="hero-left fade-in">
            <div className="tagline">
              {hero.tagline[0]}
              <span className="slash">/</span>
              {hero.tagline[1]}
              <span className="slash">/</span>
              {hero.tagline[2]}
            </div>
            <h1
              className="display"
              style={{
                fontSize: 'clamp(64px,9.5vw,140px)',
                letterSpacing: '-0.04em',
                color: '#0E0D0B',
              }}
            >
              <span style={{ color: '#ffa500' }}>{hero.title1}</span>
              <br />
              {hero.title2}
            </h1>
            <p className="sub fade-in d1">{hero.sub}</p>
            <div className="hero-ctas fade-in d2">
              <a
                className="btn btn-primary"
                href="#kontakt"
                style={{ backgroundColor: 'rgb(255,165,0)', color: '#0E0D0B' }}
              >
                {hero.cta}
                <span className="arrow-circle">
                  <ArrowRightIcon size={12} />
                </span>
              </a>
            </div>
          </div>
          <div className="hero-right fade-in d3">
            <div className="hero-drawing">
              <img className="hero-img" src="assets/schrank-hero.png" alt={hero.imgAlt} />
            </div>
            <div className="hero-spec">
              {hero.spec.map((s) => (
                <div key={s.k}>
                  {s.k} <strong>{s.v}</strong>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-rail right">
            <span className="v">{hero.railR1}</span>
            <span className="v">{hero.railR2}</span>
          </div>
          <div className="hero-corners" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
