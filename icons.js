/* Inline SVG icon helpers — returns SVG string fragments */

const STROKE_ATTRS = 'fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"';

window.Icons = {
  arrowRight(size = 16) {
    return `<svg viewBox="0 0 24 24" width="${size}" height="${size}" ${STROKE_ATTRS} aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12 5 19 12 12 19"/>
    </svg>`;
  },
  arrowUpRight(size = 16) {
    return `<svg viewBox="0 0 24 24" width="${size}" height="${size}" ${STROKE_ATTRS} aria-hidden="true">
      <line x1="7" y1="17" x2="17" y2="7"/>
      <polyline points="7 7 17 7 17 17"/>
    </svg>`;
  },
  plus(size = 16) {
    return `<svg viewBox="0 0 24 24" width="${size}" height="${size}" ${STROKE_ATTRS} aria-hidden="true">
      <line x1="12" y1="5" x2="12" y2="19"/>
      <line x1="5" y1="12" x2="19" y2="12"/>
    </svg>`;
  },
  upload(size = 16) {
    return `<svg viewBox="0 0 24 24" width="${size}" height="${size}" ${STROKE_ATTRS} aria-hidden="true">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="17 8 12 3 7 8"/>
      <line x1="12" y1="3" x2="12" y2="15"/>
    </svg>`;
  },
  whatsapp(size = 16) {
    return `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="currentColor" aria-hidden="true">
      <path d="M17.6 14.2c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1s-1.3-.5-2.4-1.5c-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.7-1.7-.9-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4s-1.1 1.1-1.1 2.7c0 1.6 1.2 3.1 1.3 3.3.1.2 2.3 3.6 5.7 5 .8.3 1.4.5 1.9.7.8.3 1.5.2 2.1.1.6-.1 1.8-.7 2.1-1.5.3-.7.3-1.4.2-1.5-.1-.2-.3-.2-.6-.4z"/>
      <path d="M20.5 3.5C18.3 1.3 15.3 0 12.1 0 5.6 0 .3 5.3.3 11.8c0 2.1.5 4.1 1.6 5.9L.2 24l6.5-1.7c1.7.9 3.6 1.4 5.5 1.4 6.5 0 11.8-5.3 11.8-11.8 0-3.1-1.3-6.1-3.5-8.4zm-8.4 18.1c-1.7 0-3.4-.5-4.9-1.3l-.4-.2-3.7 1 1-3.6-.2-.4c-1-1.5-1.5-3.3-1.5-5.2 0-5.4 4.4-9.8 9.8-9.8 2.6 0 5.1 1 6.9 2.9s2.9 4.3 2.9 6.9c-.1 5.3-4.5 9.7-9.9 9.7z"/>
    </svg>`;
  }
};
