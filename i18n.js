/* i18n — DE/UK translations, plain JS. window.TRANSLATIONS */

window.TRANSLATIONS = {
  /* ─────────────────────────── DEUTSCH ─────────────────────────── */
  DE: {
    nav: {
      sub: "Bonn",
      links: [
        { href: "#leistungen", num: "01", label: "Leistungen" },
        { href: "#archiv",     num: "03", label: "Archiv" },
        { href: "#ablauf",     num: "04", label: "Ablauf" },
        { href: "#kontakt",    num: "07", label: "Kontakt" }
      ]
    },
    hero: {
      meta: [
        { k: "Doc. №",        v: "MM-001 · 2026" },
        { k: "Region",        v: "BONN + 100 KM" },
        { k: "Ihr Handwerker",v: "KOSTIANTYN" },
        { k: "Status",        v: "Termine in 12 h" }
      ],
      railL1: "Möbel Montage / Bonn",
      railL2: "Maße in cm",
      tagline: ["Aufbau","Abbau","Reparaturen"],
      title1: "MÖBEL",
      title2: "MONTAGE",
      sub: "Montage von IKEA-Systemen und jeder anderen Marke. Festpreis oder Stundensatz. Termin innerhalb von 12 Stunden.",
      cta: "Festpreis anfragen",
      imgAlt: "Schrank-Skizze mit Maßen 100 × 60 × 200 cm",
      spec: [
        { k: "Modell",          v: "PAX 200 / 236" },
        { k: "Dauer",           v: "≈ 1 STD." },
        { k: "Innenausstattung",v: "+ 35 €" },
        { k: "Festpreis ab",    v: "40 €" }
      ],
      railR1: "Doc. MM-001 / 2026",
      railR2: "Scroll ↓"
    },
    standards: [
      { k: "01", label: "Handwerker", v: "Kostiantyn" },
      { k: "02", label: "Radius",     v: "100 km / Bonn" },
      { k: "03", label: "Bewertung",  v: "5,0 ★ · Google" },
      { k: "04", label: "Garantie",   v: "24 Monate" },
      { k: "05", label: "Festpreis",  v: "Schriftlich" }
    ],
    philosophy: {
      ref: { id: "02 / 07", title: "Philosophie", meta: "Werkzeug · Sorgfalt · Verantwortung" },
      pullA: "Jeder Schrank wird so montiert,",
      pullB: "als wäre er für mein ",
      pullEm: "eigenes",
      pullC: " Zuhause.",
      rows: [
        { key: "§ 01 — Präzision",   val: "Schubladen laufen millimetergenau, Türen schließen bündig, Schrauben sitzen so fest wie nötig — nie fester. Ein Laser-Nivelliergerät kommt auf jeder Baustelle zum Einsatz." },
        { key: "§ 02 — Sorgfalt",    val: "Wohnung wird sauber hinterlassen: Verpackung entsorgt, Späne aufgesaugt, Werkzeug aus dem Weg. Ihr Zuhause bleibt Ihr Zuhause — vor, während und nach der Montage." },
        { key: "§ 03 — Transparenz", val: "Festpreis schriftlich, vor Beginn. Oder Abrechnung nach Stundensatz. Kommen Überraschungen — fehlende Teile, Wandprobleme — werden sie dokumentiert, bevor ein Schraubenzieher angesetzt wird." },
        { key: "§ 04 — Garantie",    val: "24 Monate auf alle handwerklichen Leistungen. Klemmt eine Tür im nächsten Sommer, komme ich zurück und richte sie — auf dem Lieferschein schriftlich vermerkt." }
      ],
      writtenBy: "Verfasst von",
      author: "Kostiantyn",
      authorRole: "MÖBELMONTEUR",
      authorBio: "Seit 2025 im Raum Bonn. Über 300 abgeschlossene Montagen. Vier Sprachen, ein Standard."
    },
    services: {
      ref: { id: "01 / 07", title: "Leistungsverzeichnis", meta: "03 Positionen · Stand 2026" },
      eyebrow: "§ Was im Festpreis enthalten ist",
      headA: "Was ich für Sie",
      headEm: "aufbaue",
      desc: "Drei Disziplinen, ein Standard. Vom einzelnen Beistelltisch bis zur kompletten Einbauküche — sauber, pünktlich, schriftlich garantiert.",
      items: [
        { code: "01.01", name: "IKEA-Systeme",           desc: "Komplette Konfiguration aus dem Online-Planer. Auch komplexe Eck- und Schrägwand-Lösungen mit Maßausgleich.",      includes: ["PAX","PLATSA","BESTÅ","KALLAX","METOD-Küchen"] },
        { code: "01.02", name: "Andere Marken",           desc: "Bauanleitung optional — Erfahrung mit jedem Möbelhaus. Auch ohne Original-Skizze sauber zusammengebaut.",         includes: ["Höffner","XXXLutz","Roller","Online-Möbel"] },
        { code: "01.03", name: "Demontage von Altmöbeln", desc: "Altmöbel werden fachgerecht abgebaut.",                                                                           includes: ["Demontage","Sortierung"] }
      ]
    },
    portfolio: {
      ref: { id: "03 / 07", title: "Projekt-Archiv", meta: "240+ Einträge · 2014 – 2026" },
      eyebrow: "§ Indexiert · datiert · nachvollziehbar",
      headA: "Ein wachsendes",
      headEm: "Archiv",
      desc: "Jede Montage wird als Akte abgelegt. Filtern Sie nach Möbeltyp und finden Sie eine Referenz, die Ihrem Vorhaben am nächsten kommt.",
      cats: ["Alle","PAX","Küche","Büro","Kinderzimmer","Custom"],
      showing: "Anzeige",
      sortLabel: "Sortierung · neueste zuerst",
      card: { loc: "Ort", dur: "Dauer", cat: "Typ", rooms: "Räume" },
      loadMore: "Ältere Einträge laden"
    },
    process: {
      ref: { id: "04 / 07", title: "Ablauf-Diagramm", meta: "04 Schritte · ca. 48 h" },
      eyebrow: "§ Sequenz",
      headA: "Vom ",
      headEm: "Anruf",
      headB: " bis zum Schrank.",
      desc: "Keine Formulare, keine Vor-Ort-Termine zur Begutachtung. Ein Foto reicht für einen verbindlichen Festpreis.",
      stepWord: "Schritt",
      steps: [
        { num: "01", label: "Anfrage",  desc: "Foto und Liste per WhatsApp. PLZ + Wunschtermin reichen." },
        { num: "02", label: "Festpreis",desc: "Schriftliches Angebot innerhalb von 24 Stunden, ohne Kleingedrucktes." },
        { num: "03", label: "Termin",   desc: "Auch abends und am Wochenende. Sie öffnen die Tür — der Rest läuft." },
        { num: "04", label: "Fertig",   desc: "Alles ausgerichtet, verschraubt, getestet. Verpackung mitgenommen." }
      ]
    },
    featured: {
      ref: { id: "05 / 07", title: "Ausgewählte Referenzen", meta: "2 Projekte · komplex" },
      eyebrow: "§ Skalierbarer Festpreis",
      headA: "Komplexe Projekte.",
      headEm: "Saubere",
      headB: " Lösungen.",
      desc: "Zwei Aufträge, die zeigen, wie weit sich der Festpreis-Standard skalieren lässt — vom Einzelschrank bis zur Mehr-Raum-Einrichtung.",
      akte: "Akte",
      projects: [
        { head: "MM.234", head2: "2025 · Bonn-Südstadt", title: "Walk-in Kleiderschrank",          desc: "PLATSA mit fünf Korpussen auf 4,2 m. Schräge Wand mit Maßausgleich, durchgehende Schiebetüren, individuell konfigurierte Innenausstattung mit Hosenauszug und Schubladen-Set.",      meta: { "Räume":"1","Korpusse":"5","Dauer":"2 Tage","Maßausgleich":"+3 cm" } },
        { head: "MM.228", head2: "2024 · Bad Godesberg",  title: "Komplette Erstbezugs-Einrichtung",desc: "23 Möbelstücke aus drei Häusern auf 96 m². PAX-Schlafzimmer, METOD-Küche und maßgefertigtes TV-Möbel.", meta: { "Räume":"4","Teile":"23","Dauer":"5 Tage","Möbelhäuser":"3" } }
      ]
    },
    testimonial: {
      mark: "Stimme · M. Schneider · Beuel · Google ★★★★★",
      quoteA: "Pünktlich, ordentlich, fairer Preis. Der PAX-Schrank steht",
      quoteEm: " millimetergenau",
      quoteB: ". Verpackung wurde mitgenommen, die Wohnung sauberer als vorher. Klare Empfehlung.",
      name: "M. Schneider",
      loc: "Bonn-Beuel",
      date: "September 2025"
    },
    faq: {
      ref: { id: "06 / 07", title: "Fragen + Antworten", meta: "05 Positionen" },
      eyebrow: "§ Was Kunden vor der Buchung wissen wollen",
      headA: "Häufige ",
      headEm: "Fragen",
      desc: "Fünf Antworten, die 80 % der Anfragen abdecken. Steht Ihre Frage nicht dabei — eine kurze WhatsApp-Nachricht reicht.",
      items: [
        { q: "Was kostet die Montage eines PAX-Schranks?",  a: "Der Festpreis hängt von Breite, Höhe und Innenausstattung ab. Für einen Standard-PAX 200 × 236 mit zwei Türen und Grundausstattung liegt er bei 180 €. Sie erhalten innerhalb von 24 Stunden ein verbindliches Angebot — Foto und Maße per WhatsApp reichen." },
        { q: "In welchen Städten sind Sie unterwegs?",       a: "100 km um Bonn. Das umfasst Köln, Bad Godesberg, Siegburg, Hennef, Königswinter, Bornheim, Troisdorf und Sankt Augustin. Bei größeren Aufträgen auch darüber hinaus — fragen Sie einfach an." },
        { q: "Was passiert, wenn Teile fehlen?",             a: "Ich prüfe vor dem Aufbau die Vollständigkeit. Fehlt etwas, dokumentiere ich es mit Foto und Artikelnummer für die Reklamation. Bei IKEA übernehme ich auf Wunsch die komplette Abwicklung — Ersatzteilbeschaffung inklusive." },
        { q: "Gibt es eine Garantie auf die Montage?",       a: "24 Monate Gewährleistung auf alle handwerklichen Leistungen. Sollte etwas nicht halten oder klemmen, komme ich kostenlos vorbei und richte es. Schriftlich auf der Rechnung dokumentiert." },
        { q: "Rechnung mit MwSt. für Firmen möglich?",       a: "Selbstverständlich. Reguläre Rechnung mit 19 % MwSt., USt-IdNr. und allen Pflichtangaben. Auf Wunsch mit detaillierten Positionen für die Buchhaltung. Zahlung per Überweisung mit 14 Tagen Ziel." }
      ]
    },
    kontakt: {
      ref: { id: "07 / 07", title: "Kontaktformular", meta: "Antwort werktags innerhalb 24 h" },
      headA: "Lass uns etwas",
      headEm: "Solides",
      headB: " bauen.",
      sub: "Foto schicken, Festpreis bekommen, Termin buchen. Vier Schritte. Eine Antwort. Kein Anruf nötig.",
      f1Label:"01 · Name",                       f1Ph:"Vor- und Nachname",
      f2Label:"02 · Telefon",                    f2Ph:"+49 …",
      f3Label:"03 · Was soll montiert werden?",  f3Ph:"z. B. PAX 250 × 236, 2 Türen, mit Innenausstattung. Adresse: 2. OG ohne Aufzug.",
      f4Label:"04 · Postleitzahl",               f4Ph:"53111",
      f5Label:"05 · Foto / Bauanleitung",        f5Hint:"Klicken zum Anhängen (optional)",
      submit: "Anfrage absenden",
      submitted: "Anfrage gesendet — Antwort innerhalb 24 h",
      cards: [
        { label: "Direkt · WhatsApp",         value: "0176 218 55 005" },
        { label: "Telefon · Mo – Sa 8 – 20 Uhr", value: "0176 218 55 005" },
        { label: "E-Mail · 24 h Antwort",     value: "fatuglyaces@gmail.com" }
      ]
    },
    footer: {
      c1Head: "Ihr Handwerker", name: "Kostiantyn", role: "Möbelmonteur",
      c1Bio: "Seit 2025 in Bonn. Aufbau, Abbau, Reparaturen — schriftlicher Festpreis, 24 Monate Garantie.",
      c2Head: "Kontakt", wa: "WhatsApp Direkt", hours: "Mo – Sa · 8 – 20 Uhr",
      c3Head: "Gebiet · 100 km",
      cities: ["Bonn","Köln","Bad Godesberg","Siegburg","Hennef","Königswinter","Bornheim","Troisdorf"],
      c4Head: "Rechtliches",
      legal: ["Impressum","Datenschutz","AGB","Widerrufsbelehrung"],
      langLabel: "Sprachen",
      madeIn: "Made in Bonn · mit Inbusschlüssel",
      copyright: "© 2026 Möbel Montage Bonn · Kostiantyn"
    },
    fab: "Festpreis anfragen"
  },

  /* ─────────────────────────── УКРАЇНСЬКА ─────────────────────────── */
  UK: {
    nav: {
      sub: "Бонн",
      links: [
        { href: "#leistungen", num: "01", label: "Послуги" },
        { href: "#archiv",     num: "03", label: "Архів" },
        { href: "#ablauf",     num: "04", label: "Процес" },
        { href: "#kontakt",    num: "07", label: "Контакти" }
      ]
    },
    hero: {
      meta: [
        { k: "Док. №",      v: "MM-001 · 2026" },
        { k: "Регіон",      v: "БОНН + 100 КМ" },
        { k: "Ваш майстер", v: "КОСТЯНТИН" },
        { k: "Статус",      v: "Запис за 12 год" }
      ],
      railL1: "Збірка меблів / Бонн",
      railL2: "Розміри в см",
      tagline: ["Збірка","Розбірка","Ремонт"],
      title1: "ЗБІРКА",
      title2: "МЕБЛІВ",
      sub: "Збірка систем IKEA та меблів будь-якого бренду. Фіксована ціна або погодинно. Запис протягом 12 годин.",
      cta: "Дізнатися ціну",
      imgAlt: "Ескіз шафи з розмірами 100 × 60 × 200 см",
      spec: [
        { k: "Модель",      v: "PAX 200 / 236" },
        { k: "Тривалість",  v: "≈ 1 ГОД." },
        { k: "Наповнення",  v: "+ 35 €" },
        { k: "Ціна від",    v: "40 €" }
      ],
      railR1: "Док. MM-001 / 2026",
      railR2: "Гортайте ↓"
    },
    standards: [
      { k: "01", label: "Майстер",  v: "Костянтин" },
      { k: "02", label: "Радіус",   v: "100 км / Бонн" },
      { k: "03", label: "Оцінка",   v: "5,0 ★ · Google" },
      { k: "04", label: "Гарантія", v: "24 місяці" },
      { k: "05", label: "Ціна",     v: "Письмово" }
    ],
    philosophy: {
      ref: { id: "02 / 07", title: "Філософія", meta: "Інструмент · Ретельність · Відповідальність" },
      pullA: "Кожну шафу я збираю так,",
      pullB: "ніби вона для мого ",
      pullEm: "власного",
      pullC: " дому.",
      rows: [
        { key: "§ 01 — Точність",    val: "Шухляди ходять міліметр у міліметр, дверцята зачиняються рівно, гвинти затягнуті рівно настільки, наскільки потрібно — ніколи сильніше. Лазерний рівень застосовується на кожному об'єкті." },
        { key: "§ 02 — Ретельність", val: "Помешкання залишаю прибраним: упаковку винесено, стружку зібрано пилососом, інструмент прибрано. Ваш дім лишається вашим домом — до, під час і після збірки." },
        { key: "§ 03 — Прозорість",  val: "Фіксована ціна письмово, ще до початку. Або погодинна оплата. Якщо виникають несподіванки — бракує деталей, проблеми зі стіною — я фіксую їх, перш ніж узяти викрутку." },
        { key: "§ 04 — Гарантія",    val: "24 місяці на всі монтажні роботи. Якщо наступного літа дверцята почнуть чіплятися — я повернуся й налаштую їх. Зафіксовано письмово в накладній." }
      ],
      writtenBy: "Автор",
      author: "Костянтин",
      authorRole: "МАЙСТЕР ЗІ ЗБІРКИ МЕБЛІВ",
      authorBio: "У регіоні Бонна з 2025 року. Понад 300 завершених збірок. Чотири мови, один стандарт."
    },
    services: {
      ref: { id: "01 / 07", title: "Перелік послуг", meta: "03 позиції · 2026" },
      eyebrow: "§ Що входить у фіксовану ціну",
      headA: "Що я для вас",
      headEm: "збираю",
      desc: "Три напрями, один стандарт. Від окремого столика до повністю вбудованої кухні — чисто, вчасно, з письмовою гарантією.",
      items: [
        { code: "01.01", name: "Системи IKEA",       desc: "Повна конфігурація з онлайн-планувальника. Зокрема складні кутові рішення та похилі стіни з компенсацією розмірів.", includes: ["PAX","PLATSA","BESTÅ","KALLAX","Кухні METOD"] },
        { code: "01.02", name: "Інші бренди",         desc: "Інструкція за бажанням — є досвід з будь-яким меблевим домом. Збираю акуратно навіть без оригінального ескізу.",        includes: ["Höffner","XXXLutz","Roller","Онлайн-меблі"] },
        { code: "01.03", name: "Розбірка старих меблів",desc: "Старі меблі фахово розбираю.",                                                                                         includes: ["Розбірка","Сортування"] }
      ]
    },
    portfolio: {
      ref: { id: "03 / 07", title: "Архів проєктів", meta: "240+ записів · 2014 – 2026" },
      eyebrow: "§ Індексовано · датовано · простежувано",
      headA: "Архів, що",
      headEm: "зростає",
      desc: "Кожну збірку заношу до справи. Фільтруйте за типом меблів і знаходьте приклад, найближчий до вашого задуму.",
      cats: ["Усі","PAX","Кухня","Офіс","Дитяча","Custom"],
      showing: "Показано",
      sortLabel: "Сортування · спершу новіші",
      card: { loc: "Місце", dur: "Час", cat: "Тип", rooms: "Кімнати" },
      loadMore: "Завантажити старіші записи"
    },
    process: {
      ref: { id: "04 / 07", title: "Схема процесу", meta: "04 кроки · бл. 48 год" },
      eyebrow: "§ Послідовність",
      headA: "Від ",
      headEm: "дзвінка",
      headB: " до готової шафи.",
      desc: "Жодних анкет, жодних виїздів на оцінку. Достатньо одного фото для остаточної фіксованої ціни.",
      stepWord: "Крок",
      steps: [
        { num: "01", label: "Запит",   desc: "Фото та список у WhatsApp. Достатньо індексу та бажаної дати." },
        { num: "02", label: "Ціна",    desc: "Письмова пропозиція протягом 24 годин, без дрібного шрифту." },
        { num: "03", label: "Зустріч", desc: "Зокрема ввечері та у вихідні. Ви відчиняєте двері — решту роблю я." },
        { num: "04", label: "Готово",  desc: "Усе вирівняно, скручено, перевірено. Упаковку забрано." }
      ]
    },
    featured: {
      ref: { id: "05 / 07", title: "Обрані роботи", meta: "2 проєкти · складні" },
      eyebrow: "§ Масштабована фіксована ціна",
      headA: "Складні проєкти.",
      headEm: "Чисті",
      headB: " рішення.",
      desc: "Два замовлення, що показують, наскільки масштабується стандарт фіксованої ціни — від окремої шафи до облаштування кількох кімнат.",
      akte: "Справа",
      projects: [
        { head: "MM.234", head2: "2025 · Бонн-Зюдштадт",  title: "Гардеробна Walk-in",                  desc: "PLATSA з п'яти корпусів на 4,2 м. Похила стіна з компенсацією розмірів, суцільні розсувні двері, індивідуальне наповнення з висувною штангою для брюк і набором шухляд.", meta: { "Кімнати":"1","Корпуси":"5","Час":"2 дні","Компенсація":"+3 см" } },
        { head: "MM.228", head2: "2024 · Бад-Ґодесберґ",  title: "Повне облаштування при заселенні", desc: "23 предмети меблів із трьох магазинів на 96 м². Спальня PAX, кухня METOD і виготовлена на замовлення ТВ-тумба.", meta: { "Кімнати":"4","Предметів":"23","Час":"5 днів","Магазинів":"3" } }
      ]
    },
    testimonial: {
      mark: "Відгук · M. Schneider · Бойєль · Google ★★★★★",
      quoteA: "Вчасно, акуратно, чесна ціна. Шафа PAX стоїть",
      quoteEm: " міліметр у міліметр",
      quoteB: ". Упаковку забрали, у квартирі чистіше, ніж було. Однозначно рекомендую.",
      name: "M. Schneider",
      loc: "Бонн-Бойєль",
      date: "Вересень 2025"
    },
    faq: {
      ref: { id: "06 / 07", title: "Питання + Відповіді", meta: "05 позицій" },
      eyebrow: "§ Що клієнти хочуть знати перед бронюванням",
      headA: "Поширені ",
      headEm: "питання",
      desc: "П'ять відповідей, що охоплюють 80 % запитів. Якщо вашого питання немає — достатньо короткого повідомлення в WhatsApp.",
      items: [
        { q: "Скільки коштує збірка шафи PAX?",         a: "Фіксована ціна залежить від ширини, висоти та наповнення. Для стандартної PAX 200 × 236 з двома дверцятами та базовим наповненням вона становить 180 €. Остаточну пропозицію ви отримаєте протягом 24 годин — достатньо фото й розмірів у WhatsApp." },
        { q: "У яких містах ви працюєте?",               a: "100 км навколо Бонна. Це Кельн, Бад-Ґодесберґ, Зіґбурґ, Геннеф, Кенігсвінтер, Борнгайм, Тройсдорф і Санкт-Авґустін. За більших замовлень — і далі, просто запитайте." },
        { q: "Що робити, якщо бракує деталей?",          a: "Перед збіркою я перевіряю комплектність. Якщо чогось бракує, фіксую це фото й артикулом для рекламації. У випадку IKEA за бажанням беру на себе все оформлення — зокрема замовлення запчастин." },
        { q: "Чи є гарантія на збірку?",                 a: "24 місяці гарантії на всі монтажні роботи. Якщо щось не тримається або чіпляється — приїжджаю безкоштовно й виправляю. Зафіксовано письмово в рахунку." },
        { q: "Чи можливий рахунок з ПДВ для компаній?", a: "Звісно. Звичайний рахунок з 19 % ПДВ, податковим номером і всіма обов'язковими реквізитами. За бажанням з деталізованими позиціями для бухгалтерії. Оплата переказом з відстрочкою 14 днів." }
      ]
    },
    kontakt: {
      ref: { id: "07 / 07", title: "Форма контакту", meta: "Відповідь у робочі дні протягом 24 год" },
      headA: "Збудуймо щось",
      headEm: "надійне",
      headB: " разом.",
      sub: "Надішліть фото, отримайте фіксовану ціну, забронюйте дату. Чотири кроки. Одна відповідь. Дзвонити не треба.",
      f1Label:"01 · Ім'я",            f1Ph:"Ім'я та прізвище",
      f2Label:"02 · Телефон",          f2Ph:"+49 …",
      f3Label:"03 · Що потрібно зібрати?", f3Ph:"напр. PAX 250 × 236, 2 дверцят, з наповненням. Адреса: 2-й поверх без ліфта.",
      f4Label:"04 · Поштовий індекс", f4Ph:"53111",
      f5Label:"05 · Фото / Інструкція",f5Hint:"Натисніть, щоб додати (за бажанням)",
      submit: "Надіслати запит",
      submitted: "Запит надіслано — відповідь протягом 24 год",
      cards: [
        { label: "Напряму · WhatsApp",            value: "0176 218 55 005" },
        { label: "Телефон · Пн – Сб 8 – 20",     value: "0176 218 55 005" },
        { label: "Ел. пошта · відповідь за 24 год", value: "fatuglyaces@gmail.com" }
      ]
    },
    footer: {
      c1Head: "Ваш майстер", name: "Костянтин", role: "Майстер зі збірки меблів",
      c1Bio: "У Бонні з 2025 року. Збірка, розбірка, ремонт — письмова фіксована ціна, 24 місяці гарантії.",
      c2Head: "Контакти", wa: "WhatsApp напряму", hours: "Пн – Сб · 8 – 20",
      c3Head: "Зона · 100 км",
      cities: ["Бонн","Кельн","Бад-Ґодесберґ","Зіґбурґ","Геннеф","Кенігсвінтер","Борнгайм","Тройсдорф"],
      c4Head: "Юридичне",
      legal: ["Вихідні дані","Конфіденційність","Умови","Право відмови"],
      langLabel: "Мови",
      madeIn: "Зроблено в Бонні · шестигранним ключем",
      copyright: "© 2026 Möbel Montage Bonn · Костянтин"
    },
    fab: "Дізнатися ціну"
  }
};
