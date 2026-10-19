import { useEffect, useState } from 'react';
import { LANGUAGES, HTML_LANGUAGES, LANGUAGE_STORAGE_KEY } from '../config/languages.js';

export function useLanguage() {
  const [lang, setLang] = useState(() => {
    try {
      const saved = localStorage.getItem(LANGUAGE_STORAGE_KEY);
      return LANGUAGES.includes(saved) ? saved : 'DE';
    } catch {
      return 'DE';
    }
  });
  useEffect(() => {
    document.documentElement.lang = HTML_LANGUAGES[lang];
    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
    } catch {
      /* Storage may be disabled. */
    }
  }, [lang]);
  return [lang, setLang];
}
