import { useState } from 'react';
import { CookieBanner, readDecision } from './components/CookieBanner.jsx';
import { LegalPage } from './components/LegalPage.jsx';
import { useLegalRoute } from './hooks/useLegalRoute.js';
import { TRANSLATIONS } from './translations.js';
import { useLanguage } from './hooks/useLanguage.js';
import { Hero } from './components/Hero.jsx';
import { Standards } from './components/Standards.jsx';
import { Philosophy } from './components/Philosophy.jsx';
import { Services } from './components/Services.jsx';
import { Portfolio } from './components/Portfolio.jsx';
import { Process } from './components/Process.jsx';
import { Testimonial } from './components/Testimonial.jsx';
import { FAQ } from './components/FAQ.jsx';
import { Contact } from './components/Contact.jsx';
import { Footer } from './components/Footer.jsx';
import { PageChrome } from './components/PageChrome.jsx';

export default function App() {
  const [lang, setLang] = useLanguage();
  const translations = TRANSLATIONS[lang];
  const legalPage = useLegalRoute();
  const [decision, setDecision] = useState(readDecision);
  return (
    <>
      {legalPage ? (
        <LegalPage page={legalPage} lang={lang} setLang={setLang} />
      ) : (
        <>
          <PageChrome data={translations} lang={lang} setLang={setLang} />
          <main>
            <Hero data={translations.hero} />
            <Standards data={translations.standards} />
            <Philosophy data={translations.philosophy} />
            <Services data={translations.services} />
            <Portfolio data={translations.portfolio} />
            <Process data={translations.process} />
            <Testimonial lang={lang} />
            <FAQ data={translations.faq} />
            <Contact data={translations.kontakt} lang={lang} cookiesAccepted={decision?.accepted === true} />
          </main>
          <Footer data={translations.footer} lang={lang} />
        </>
      )}
      <CookieBanner lang={lang} legalPage={legalPage} decision={decision} setDecision={setDecision} />
    </>
  );
}
