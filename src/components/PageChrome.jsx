import { Navigation } from './Navigation.jsx';
import { WhatsappIcon } from './Icons.jsx';
import { useScrolled } from '../hooks/useScrolled.js';

export function PageChrome({ data, lang, setLang }) {
  const scrolled = useScrolled();
  return (
    <>
      <Navigation data={data.nav} lang={lang} setLang={setLang} scrolled={scrolled} />
      <a className={'fab' + (scrolled ? ' visible' : '')} href="#kontakt" aria-label={data.fab}>
        <span className="ring">
          <WhatsappIcon size={14} />
        </span>
        {data.fab}
      </a>
    </>
  );
}
