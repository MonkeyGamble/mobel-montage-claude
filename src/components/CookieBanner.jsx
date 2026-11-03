import { useEffect, useRef, useState } from 'react';

export const COOKIE_COPY = {
  DE: {
    title: 'Ihre Privatsphäre',
    text: 'Wir speichern Ihre Sprachauswahl und Ihre Datenschutzeinstellungen im Browser. Google Analytics ist derzeit nicht aktiv.',
    accept: 'Alle akzeptieren',
    reject: 'Nur notwendige',
    settings: 'Einstellungen',
    save: 'Auswahl speichern',
    reopen: 'Cookie-Einstellungen',
    necessary: 'Notwendig',
    necessaryText: 'Sprachauswahl und Speicherung dieser Entscheidung.',
    analytics: 'Statistik · Google Analytics',
    analyticsText:
      'Noch nicht verfügbar. Vor einer Aktivierung fragen wir erneut nach Ihrer Einwilligung.',
    privacy: 'Datenschutz',
    imprint: 'Impressum',
    storage:
      'Ihr Browser konnte die Entscheidung nicht speichern. Sie gilt nur für diesen Seitenaufruf.',
  },
  UK: {
    title: 'Ваша конфіденційність',
    text: 'Ми зберігаємо вибрану мову та налаштування конфіденційності у браузері. Google Analytics зараз не активний.',
    accept: 'Прийняти всі',
    reject: 'Лише необхідні',
    settings: 'Налаштування',
    save: 'Зберегти вибір',
    reopen: 'Налаштування cookies',
    necessary: 'Необхідні',
    necessaryText: 'Вибір мови та збереження цього рішення.',
    analytics: 'Статистика · Google Analytics',
    analyticsText: 'Ще недоступна. Перед підключенням ми знову запитаємо вашу згоду.',
    privacy: 'Конфіденційність',
    imprint: 'Вихідні дані',
    storage: 'Браузер не зміг зберегти рішення. Воно діє лише до перезавантаження сторінки.',
  },
  EN: {
    title: 'Your privacy',
    text: 'We store your language preference and privacy settings in your browser. Google Analytics is currently inactive.',
    accept: 'Accept all',
    reject: 'Necessary only',
    settings: 'Settings',
    save: 'Save selection',
    reopen: 'Cookie settings',
    necessary: 'Necessary',
    necessaryText: 'Language preference and storage of this decision.',
    analytics: 'Statistics · Google Analytics',
    analyticsText: 'Not available yet. We will ask for consent again before enabling it.',
    privacy: 'Privacy policy',
    imprint: 'Legal notice',
    storage:
      'Your browser could not save this decision. It applies only until this page is reloaded.',
  },
};

const KEY = 'mm-cookie-consent';
const VERSION = 1; // Increment before introducing any optional service or new purpose.
const MAX_AGE = 180 * 24 * 60 * 60 * 1000;
export function readDecision() {
  try {
    const value = JSON.parse(localStorage.getItem(KEY));
    return value?.version === VERSION &&
      value.necessary === true &&
      value.analytics === false &&
      typeof value.updatedAt === 'number' &&
      value.updatedAt <= Date.now() &&
      Date.now() - value.updatedAt < MAX_AGE
      ? value
      : null;
  } catch {
    return null;
  }
}

export function CookieSettingsButton({ lang }) {
  return (
    <button
      type="button"
      className="cookie-settings-link"
      onClick={() => window.dispatchEvent(new Event('mm-open-cookie-settings'))}
    >
      {COOKIE_COPY[lang].reopen}
    </button>
  );
}

export function CookieBanner({ lang, legalPage, decision, setDecision }) {
  const copy = COOKIE_COPY[lang];
  const [opened, setOpened] = useState(false);
  const [details, setDetails] = useState(false);
  const [storageFailed, setStorageFailed] = useState(false);
  const heading = useRef(null);
  const returnFocus = useRef(null);
  const visible = opened || (!decision && !legalPage);
  useEffect(() => {
    const open = () => {
      returnFocus.current = document.activeElement;
      setOpened(true);
      setDetails(true);
    };
    const sync = (event) => {
      if (event.key === KEY || event.key === null) setDecision(readDecision());
    };
    window.addEventListener('mm-open-cookie-settings', open);
    window.addEventListener('storage', sync);
    return () => {
      window.removeEventListener('mm-open-cookie-settings', open);
      window.removeEventListener('storage', sync);
    };
  }, [setDecision]);
  useEffect(() => {
    if (opened) heading.current?.focus();
  }, [opened]);
  useEffect(() => {
    document.body.classList.toggle('cookie-banner-open', visible);
    return () => document.body.classList.remove('cookie-banner-open');
  }, [visible]);
  function save(accepted = false) {
    // There are currently no optional services. Accepting must not pre-authorize future analytics.
    const value = { version: VERSION, necessary: true, analytics: false, accepted, updatedAt: Date.now() };
    try {
      localStorage.setItem(KEY, JSON.stringify(value));
      setStorageFailed(false);
    } catch {
      setStorageFailed(true);
    }
    setDecision(value);
    setOpened(false);
    setDetails(false);
    returnFocus.current?.focus?.();
  }
  if (!visible)
    return storageFailed ? (
      <p className="cookie-storage-note" role="status">
        {copy.storage}
      </p>
    ) : null;
  return (
    <aside className="cookie-banner" role="region" aria-labelledby="cookie-title">
      <div className="cookie-inner">
        <div className="cookie-summary">
          <h2 id="cookie-title" ref={heading} tabIndex={-1}>
            {copy.title}
          </h2>
          <p>{copy.text}</p>
          <div className="cookie-legal-links">
            <a href="#/datenschutz" onClick={() => setOpened(false)}>
              {copy.privacy}
            </a>
            <a href="#/impressum" onClick={() => setOpened(false)}>
              {copy.imprint}
            </a>
          </div>
        </div>
        {details && (
          <div className="cookie-categories" id="cookie-categories">
            <label>
              <input type="checkbox" checked disabled />
              <span>
                <strong>{copy.necessary}</strong>
                <small>{copy.necessaryText}</small>
              </span>
            </label>
            <label>
              <input type="checkbox" checked={false} disabled />
              <span>
                <strong>{copy.analytics}</strong>
                <small>{copy.analyticsText}</small>
              </span>
            </label>
          </div>
        )}
        <div className="cookie-actions">
          <button type="button" onClick={() => save(false)}>
            {copy.reject}
          </button>
          <button type="button" onClick={() => save(true)}>
            {copy.accept}
          </button>
          <button
            type="button"
            aria-expanded={details}
            aria-controls="cookie-categories"
            onClick={() => setDetails(!details)}
          >
            {copy.settings}
          </button>
          {details && (
            <button type="button" onClick={() => save(false)}>
              {copy.save}
            </button>
          )}
        </div>
      </div>
    </aside>
  );
}
