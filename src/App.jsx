import { TRANSLATIONS } from './translations.js';
import { useLanguage } from './hooks/useLanguage.js';
import { Hero } from './components/Hero.jsx';
import { Standards } from './components/Standards.jsx';
import { Philosophy } from './components/Philosophy.jsx';
import { Services } from './components/Services.jsx';
import { Portfolio } from './components/Portfolio.jsx';
import { Process } from './components/Process.jsx';
import { Featured } from './components/Featured.jsx';
import { Testimonial } from './components/Testimonial.jsx';
import { FAQ } from './components/FAQ.jsx';
import { Contact } from './components/Contact.jsx';
import { Footer } from './components/Footer.jsx';
import { PageChrome } from './components/PageChrome.jsx';

export default function App() {
  const [lang, setLang] = useLanguage();
  const translations = TRANSLATIONS[lang];
  return (
    <>
      <PageChrome data={translations} lang={lang} setLang={setLang} />
      <main>
        <Hero data={translations.hero} />
        <Standards data={translations.standards} />
        <Philosophy data={translations.philosophy} />
        <Services data={translations.services} />
        <Portfolio data={translations.portfolio} />
        <Process data={translations.process} />
        <Featured data={translations.featured} />
        <Testimonial data={translations.testimonial} />
        <FAQ data={translations.faq} />
        <Contact data={translations.kontakt} />
      </main>
      <Footer data={translations.footer} />
    </>
  );
}
