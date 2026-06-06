/* Technical line drawings — return SVG strings */

const DS = '#0E0D0B';   // stroke
const DD = '#3B362F';   // dim labels
const DH = '#8A8276';   // hatch

window.Drawings = {

  cabinet(w = 80, h = 80) {
    return `<svg viewBox="0 0 80 80" width="${w}" height="${h}" aria-hidden="true">
      <g fill="none" stroke="${DS}" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="12" y="20" width="56" height="44"/>
        <line x1="12" y1="20" x2="20" y2="14"/>
        <line x1="68" y1="20" x2="76" y2="14"/>
        <line x1="20" y1="14" x2="76" y2="14"/>
        <line x1="40" y1="20" x2="40" y2="64" stroke-dasharray="2 3" stroke-width="0.8"/>
        <line x1="35" y1="40" x2="35" y2="48" stroke-width="2"/>
        <line x1="45" y1="40" x2="45" y2="48" stroke-width="2"/>
        <line x1="14" y1="36" x2="38" y2="36" stroke-dasharray="1 2" stroke-width="0.6"/>
        <line x1="42" y1="50" x2="66" y2="50" stroke-dasharray="1 2" stroke-width="0.6"/>
        <line x1="18" y1="64" x2="18" y2="70"/>
        <line x1="62" y1="64" x2="62" y2="70"/>
        <line x1="10" y1="72" x2="70" y2="72" stroke-width="0.5"/>
      </g>
    </svg>`;
  },

  toolbox(w = 80, h = 80) {
    return `<svg viewBox="0 0 80 80" width="${w}" height="${h}" aria-hidden="true">
      <g fill="none" stroke="${DS}" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M 18 14 L 18 32 L 24 36 L 30 30 L 30 14 Q 24 18 24 22 Q 24 26 22 26 Q 18 26 18 22 Z"/>
        <line x1="24" y1="36" x2="50" y2="62" stroke-width="2"/>
        <circle cx="56" cy="64" r="10"/>
        <path d="M 50 60 L 56 64 L 50 68"/>
      </g>
    </svg>`;
  },

  recycle(w = 80, h = 80) {
    return `<svg viewBox="0 0 80 80" width="${w}" height="${h}" aria-hidden="true">
      <g fill="none" stroke="${DS}" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M 20 26 L 24 64 L 56 64 L 60 26 Z"/>
        <line x1="18" y1="26" x2="62" y2="26" stroke-width="2"/>
        <line x1="32" y1="20" x2="48" y2="20" stroke-width="2"/>
        <line x1="32" y1="32" x2="33" y2="58" stroke-width="0.7"/>
        <line x1="40" y1="32" x2="40" y2="58" stroke-width="0.7"/>
        <line x1="48" y1="32" x2="47" y2="58" stroke-width="0.7"/>
        <line x1="14" y1="70" x2="66" y2="70" stroke-width="0.5"/>
      </g>
    </svg>`;
  },

  processStep1(w = 200, h = 80) {
    return `<svg viewBox="0 0 200 80" width="${w}" height="${h}" aria-hidden="true">
      <g fill="none" stroke="${DS}" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
        <rect x="12" y="14" width="36" height="56" rx="4"/>
        <line x1="22" y1="22" x2="38" y2="22" stroke-width="0.6"/>
        <line x1="22" y1="28" x2="42" y2="28" stroke-width="0.6"/>
        <line x1="22" y1="34" x2="36" y2="34" stroke-width="0.6"/>
        <rect x="20" y="42" width="22" height="16" stroke-width="0.8"/>
        <circle cx="26" cy="48" r="2"/>
        <path d="M 22 56 L 28 50 L 34 54 L 40 48 L 40 58 L 22 58 Z" stroke-width="0.8"/>
        <line x1="60" y1="40" x2="100" y2="40" stroke-dasharray="2 3" stroke-width="0.8"/>
        <path d="M 96 36 L 100 40 L 96 44" stroke-width="0.8"/>
        <path d="M 110 24 L 180 24 L 180 52 L 130 52 L 122 60 L 124 52 L 110 52 Z"/>
        <line x1="118" y1="34" x2="172" y2="34" stroke-width="0.6"/>
        <line x1="118" y1="40" x2="160" y2="40" stroke-width="0.6"/>
        <line x1="118" y1="46" x2="170" y2="46" stroke-width="0.6"/>
      </g>
    </svg>`;
  },

  processStep2(w = 200, h = 80) {
    return `<svg viewBox="0 0 200 80" width="${w}" height="${h}" aria-hidden="true">
      <g fill="none" stroke="${DS}" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
        <path d="M 12 10 L 64 10 L 64 70 L 56 64 L 48 70 L 40 64 L 32 70 L 24 64 L 12 70 Z"/>
        <line x1="22" y1="22" x2="54" y2="22" stroke-width="0.6"/>
        <line x1="22" y1="30" x2="48" y2="30" stroke-width="0.6"/>
        <line x1="22" y1="38" x2="54" y2="38" stroke-width="0.6"/>
        <line x1="22" y1="46" x2="40" y2="46" stroke-width="0.6"/>
        <text x="38" y="60" font-family="JetBrains Mono,monospace" font-size="9" font-weight="600" text-anchor="middle" fill="${DS}">EUR</text>
        <line x1="74" y1="40" x2="114" y2="40" stroke-dasharray="2 3" stroke-width="0.8"/>
        <path d="M 110 36 L 114 40 L 110 44" stroke-width="0.8"/>
        <circle cx="148" cy="40" r="22" stroke-width="1"/>
        <circle cx="148" cy="40" r="17" stroke-width="0.6" stroke-dasharray="1 2"/>
        <path d="M 138 40 L 145 47 L 158 33" stroke-width="2"/>
      </g>
    </svg>`;
  },

  processStep3(w = 200, h = 80) {
    const ticks = [0,60,120,180,240,300].map(a => {
      const rad = (a - 90) * Math.PI / 180;
      const x1 = 150 + Math.cos(rad) * 20, y1 = 40 + Math.sin(rad) * 20;
      const x2 = 150 + Math.cos(rad) * 22, y2 = 40 + Math.sin(rad) * 22;
      return `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke-width="0.6"/>`;
    }).join('');
    return `<svg viewBox="0 0 200 80" width="${w}" height="${h}" aria-hidden="true">
      <g fill="none" stroke="${DS}" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
        <rect x="14" y="14" width="56" height="54" rx="2"/>
        <line x1="14" y1="26" x2="70" y2="26" stroke-width="1"/>
        <line x1="22" y1="10" x2="22" y2="18" stroke-width="1.4"/>
        <line x1="62" y1="10" x2="62" y2="18" stroke-width="1.4"/>
        <line x1="14" y1="34" x2="70" y2="34" stroke-width="0.4"/>
        <line x1="14" y1="44" x2="70" y2="44" stroke-width="0.4"/>
        <line x1="14" y1="54" x2="70" y2="54" stroke-width="0.4"/>
        <line x1="14" y1="64" x2="70" y2="64" stroke-width="0.4"/>
        <line x1="24" y1="26" x2="24" y2="68" stroke-width="0.4"/>
        <line x1="34" y1="26" x2="34" y2="68" stroke-width="0.4"/>
        <line x1="44" y1="26" x2="44" y2="68" stroke-width="0.4"/>
        <line x1="54" y1="26" x2="54" y2="68" stroke-width="0.4"/>
        <line x1="62" y1="26" x2="62" y2="68" stroke-width="0.4"/>
        <rect x="44" y="44" width="10" height="10" fill="${DS}"/>
        <line x1="82" y1="40" x2="120" y2="40" stroke-dasharray="2 3" stroke-width="0.8"/>
        <path d="M 116 36 L 120 40 L 116 44" stroke-width="0.8"/>
        <circle cx="150" cy="40" r="22"/>
        <line x1="150" y1="40" x2="150" y2="24" stroke-width="1.4"/>
        <line x1="150" y1="40" x2="162" y2="40" stroke-width="1.4"/>
        <circle cx="150" cy="40" r="1.5" fill="${DS}"/>
        ${ticks}
      </g>
    </svg>`;
  },

  processStep4(w = 200, h = 80) {
    return `<svg viewBox="0 0 200 80" width="${w}" height="${h}" aria-hidden="true">
      <g fill="none" stroke="${DS}" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
        <rect x="14" y="14" width="50" height="56"/>
        <line x1="14" y1="14" x2="22" y2="8"/>
        <line x1="64" y1="14" x2="72" y2="8"/>
        <line x1="22" y1="8" x2="72" y2="8"/>
        <line x1="39" y1="14" x2="39" y2="70" stroke-dasharray="2 3" stroke-width="0.8"/>
        <line x1="34" y1="38" x2="34" y2="46" stroke-width="2"/>
        <line x1="44" y1="38" x2="44" y2="46" stroke-width="2"/>
        <line x1="10" y1="76" x2="74" y2="76" stroke-width="0.5"/>
        <circle cx="150" cy="40" r="24"/>
        <path d="M 138 40 L 146 48 L 162 30" stroke-width="2.2"/>
        <text x="150" y="74" font-family="JetBrains Mono,monospace" font-size="8" letter-spacing="1.5" text-anchor="middle" fill="${DD}">FERTIG</text>
        <line x1="82" y1="40" x2="120" y2="40" stroke-dasharray="2 3" stroke-width="0.8"/>
        <path d="M 116 36 L 120 40 L 116 44" stroke-width="0.8"/>
      </g>
    </svg>`;
  }
};
