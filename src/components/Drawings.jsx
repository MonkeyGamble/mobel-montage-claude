/* Service icons share a technical line style and a consistent 80px canvas. */
function ServiceDrawing({ w, h, children }) {
  return (
    <svg viewBox="0 0 80 80" width={w} height={h} aria-hidden="true" focusable="false">
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {children}
      </g>
    </svg>
  );
}

export function CabinetDrawing({ w = 80, h = 80 }) {
  return (
    <ServiceDrawing w={w} h={h}>
      <path d="M16 18 25 11h41v51l-9 7H16Z" />
      <path d="M16 18h41v51M57 18l9-7" />
      <path d="M36.5 18v39M16 57h41" />
      <path d="M30 34v9m13-9v9M32 63h9" strokeWidth="2.4" />
      <path d="M21 69v4m31-4v4" />
      <path d="M21 23h10m11 0h10" strokeOpacity="0.35" strokeWidth="1" />
      <path d="M11 74h52" strokeOpacity="0.45" strokeWidth="1" />
    </ServiceDrawing>
  );
}

export function ToolboxDrawing({ w = 80, h = 80 }) {
  return (
    <ServiceDrawing w={w} h={h}>
      {/* Open-ended spanner, with a ring at the other end. */}
      <path d="M20 12a13 13 0 0 0 13 20l25 25a7 7 0 1 1-10 10L23 42A13 13 0 0 1 10 29l9 5 8-8Z" />
      <circle cx="53" cy="62" r="2.5" strokeWidth="1.4" />
      {/* Screwdriver crossing behind the spanner. */}
      <path d="m44 30 14-14a6 6 0 0 1 8 8L52 38Z" />
      <path d="m49 29 11-11m-7 15 11-11" strokeWidth="1" strokeOpacity="0.5" />
      <path d="m44 33-7 7m-5 5L20 57m-3-3-7 13 13-7-3-3Z" />
      <path d="M10 74h60" strokeOpacity="0.45" strokeWidth="1" />
    </ServiceDrawing>
  );
}

export function DismantlingDrawing({ w = 80, h = 80 }) {
  return (
    <ServiceDrawing w={w} h={h}>
      {/* Separated furniture panels, without suggesting waste removal. */}
      <path d="m27 17 5-5h23l-5 5Zm0 0v4h23v-4" />
      <path d="m13 30 5-4v32l-5 4Zm0 0v32m5-36 4 3v30l-4-1" />
      <path d="m59 29 5-4 4 3v31l-5 4-4-3Zm0 0 4 3 5-4m-5 4v31" />
      <path d="m27 63 5-5h23l-5 5Zm0 0v4h23v-4" />
      <path d="M28 31h23v20H28Z" strokeDasharray="3 4" strokeOpacity="0.45" strokeWidth="1" />
      <path d="M40 32v-6m-3 3 3-3 3 3M40 47v7m-3-3 3 3 3-3" strokeWidth="1.4" />
      <path d="M10 74h60" strokeOpacity="0.45" strokeWidth="1" />
    </ServiceDrawing>
  );
}

const DS = '#0E0D0B';
const DD = '#3B362F';

export function ProcessStep1Drawing({ w = 200, h = 80 }) {
  return (
    <svg viewBox="0 0 200 80" width={w} height={h} aria-hidden="true">
      <g fill="none" stroke={DS} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <rect x="12" y="14" width="36" height="56" rx="4" />
        <line x1="22" y1="22" x2="38" y2="22" strokeWidth="0.6" />
        <line x1="22" y1="28" x2="42" y2="28" strokeWidth="0.6" />
        <line x1="22" y1="34" x2="36" y2="34" strokeWidth="0.6" />
        <rect x="20" y="42" width="22" height="16" strokeWidth="0.8" />
        <circle cx="26" cy="48" r="2" />
        <path d="M 22 56 L 28 50 L 34 54 L 40 48 L 40 58 L 22 58 Z" strokeWidth="0.8" />
        <line x1="60" y1="40" x2="100" y2="40" strokeDasharray="2 3" strokeWidth="0.8" />
        <path d="M 96 36 L 100 40 L 96 44" strokeWidth="0.8" />
        <path d="M 110 24 L 180 24 L 180 52 L 130 52 L 122 60 L 124 52 L 110 52 Z" />
        <line x1="118" y1="34" x2="172" y2="34" strokeWidth="0.6" />
        <line x1="118" y1="40" x2="160" y2="40" strokeWidth="0.6" />
        <line x1="118" y1="46" x2="170" y2="46" strokeWidth="0.6" />
      </g>
    </svg>
  );
}

export function ProcessStep2Drawing({ w = 200, h = 80 }) {
  return (
    <svg viewBox="0 0 200 80" width={w} height={h} aria-hidden="true">
      <g fill="none" stroke={DS} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M 12 10 L 64 10 L 64 70 L 56 64 L 48 70 L 40 64 L 32 70 L 24 64 L 12 70 Z" />
        <line x1="22" y1="22" x2="54" y2="22" strokeWidth="0.6" />
        <line x1="22" y1="30" x2="48" y2="30" strokeWidth="0.6" />
        <line x1="22" y1="38" x2="54" y2="38" strokeWidth="0.6" />
        <line x1="22" y1="46" x2="40" y2="46" strokeWidth="0.6" />
        <text
          x="38"
          y="60"
          fontFamily="JetBrains Mono,monospace"
          fontSize="9"
          fontWeight="600"
          textAnchor="middle"
          fill={DS}
        >
          EUR
        </text>
        <line x1="74" y1="40" x2="114" y2="40" strokeDasharray="2 3" strokeWidth="0.8" />
        <path d="M 110 36 L 114 40 L 110 44" strokeWidth="0.8" />
        <circle cx="148" cy="40" r="22" strokeWidth="1" />
        <circle cx="148" cy="40" r="17" strokeWidth="0.6" strokeDasharray="1 2" />
        <path d="M 138 40 L 145 47 L 158 33" strokeWidth="2" />
      </g>
    </svg>
  );
}

export function ProcessStep3Drawing({ w = 200, h = 80 }) {
  const ticks = [0, 60, 120, 180, 240, 300].map((a) => {
    const rad = ((a - 90) * Math.PI) / 180;
    const x1 = 150 + Math.cos(rad) * 20,
      y1 = 40 + Math.sin(rad) * 20;
    const x2 = 150 + Math.cos(rad) * 22,
      y2 = 40 + Math.sin(rad) * 22;
    return (
      <line
        key={a}
        x1={x1.toFixed(1)}
        y1={y1.toFixed(1)}
        x2={x2.toFixed(1)}
        y2={y2.toFixed(1)}
        strokeWidth="0.6"
      />
    );
  });
  return (
    <svg viewBox="0 0 200 80" width={w} height={h} aria-hidden="true">
      <g fill="none" stroke={DS} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <rect x="14" y="14" width="56" height="54" rx="2" />
        <line x1="14" y1="26" x2="70" y2="26" strokeWidth="1" />
        <line x1="22" y1="10" x2="22" y2="18" strokeWidth="1.4" />
        <line x1="62" y1="10" x2="62" y2="18" strokeWidth="1.4" />
        <line x1="14" y1="34" x2="70" y2="34" strokeWidth="0.4" />
        <line x1="14" y1="44" x2="70" y2="44" strokeWidth="0.4" />
        <line x1="14" y1="54" x2="70" y2="54" strokeWidth="0.4" />
        <line x1="14" y1="64" x2="70" y2="64" strokeWidth="0.4" />
        <line x1="24" y1="26" x2="24" y2="68" strokeWidth="0.4" />
        <line x1="34" y1="26" x2="34" y2="68" strokeWidth="0.4" />
        <line x1="44" y1="26" x2="44" y2="68" strokeWidth="0.4" />
        <line x1="54" y1="26" x2="54" y2="68" strokeWidth="0.4" />
        <line x1="62" y1="26" x2="62" y2="68" strokeWidth="0.4" />
        <rect x="44" y="44" width="10" height="10" fill={DS} />
        <line x1="82" y1="40" x2="120" y2="40" strokeDasharray="2 3" strokeWidth="0.8" />
        <path d="M 116 36 L 120 40 L 116 44" strokeWidth="0.8" />
        <circle cx="150" cy="40" r="22" />
        <line x1="150" y1="40" x2="150" y2="24" strokeWidth="1.4" />
        <line x1="150" y1="40" x2="162" y2="40" strokeWidth="1.4" />
        <circle cx="150" cy="40" r="1.5" fill={DS} />
        {ticks}
      </g>
    </svg>
  );
}

export function ProcessStep4Drawing({ w = 200, h = 80, label = 'FERTIG' }) {
  return (
    <svg viewBox="0 0 200 80" width={w} height={h} aria-hidden="true">
      <g fill="none" stroke={DS} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <rect x="14" y="14" width="50" height="56" />
        <line x1="14" y1="14" x2="22" y2="8" />
        <line x1="64" y1="14" x2="72" y2="8" />
        <line x1="22" y1="8" x2="72" y2="8" />
        <line x1="39" y1="14" x2="39" y2="70" strokeDasharray="2 3" strokeWidth="0.8" />
        <line x1="34" y1="38" x2="34" y2="46" strokeWidth="2" />
        <line x1="44" y1="38" x2="44" y2="46" strokeWidth="2" />
        <line x1="10" y1="76" x2="74" y2="76" strokeWidth="0.5" />
        <circle cx="150" cy="40" r="24" />
        <path d="M 138 40 L 146 48 L 162 30" strokeWidth="2.2" />
        <text
          x="150"
          y="74"
          fontFamily="JetBrains Mono,monospace"
          fontSize="8"
          letterSpacing="1.5"
          textAnchor="middle"
          fill={DD}
        >
          {label}
        </text>
        <line x1="82" y1="40" x2="120" y2="40" strokeDasharray="2 3" strokeWidth="0.8" />
        <path d="M 116 36 L 120 40 L 116 44" strokeWidth="0.8" />
      </g>
    </svg>
  );
}
