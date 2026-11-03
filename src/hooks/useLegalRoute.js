import { useEffect, useState } from 'react';
import { LEGAL_IDS } from '../data/legal.js';
function readPage() {
  const id = window.location.hash.slice(2);
  return window.location.hash.startsWith('#/') && LEGAL_IDS.includes(id) ? id : null;
}
export function useLegalRoute() {
  const [page, setPage] = useState(readPage);
  useEffect(() => {
    const change = () => setPage(readPage());
    window.addEventListener('hashchange', change);
    return () => window.removeEventListener('hashchange', change);
  }, []);
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (page || !window.location.hash || window.location.hash === '#') window.scrollTo(0, 0);
      else document.getElementById(window.location.hash.slice(1))?.scrollIntoView();
    });
    return () => cancelAnimationFrame(frame);
  }, [page]);
  return page;
}
