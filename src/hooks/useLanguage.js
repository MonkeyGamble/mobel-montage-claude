import { useEffect, useState } from 'react';

export function useLanguage() {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem('mm-lang') === 'UK' ? 'UK' : 'DE';
    } catch {
      return 'DE';
    }
  });
  useEffect(() => {
    document.documentElement.lang = lang === 'UK' ? 'uk' : 'de';
    try {
      localStorage.setItem('mm-lang', lang);
    } catch {
      /* Storage may be disabled. */
    }
  }, [lang]);
  return [lang, setLang];
}
