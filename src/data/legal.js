// Legal drafts; actual integrations and remaining privacy details require review before publication.
export const LEGAL_IDS = ['impressum', 'datenschutz', 'agb', 'widerruf'];
export const LEGAL_UI = {
  DE: {
    home: 'Zur Startseite',
    label: 'Rechtliches',
    draft:
      'Entwurf — noch nicht zur Veröffentlichung freigegeben. Unternehmensangaben und Vertragsbedingungen müssen ergänzt und geprüft werden.',
    contact: 'Kontakt',
    titles: ['Impressum', 'Datenschutz', 'AGB', 'Widerrufsbelehrung'],
  },
  UK: {
    home: 'На головну',
    label: 'Юридична інформація',
    draft:
      'Чернетка — ще не готова до публікації. Потрібно доповнити й перевірити реквізити підприємства та договірні умови.',
    contact: 'Контакти',
    titles: ['Вихідні дані', 'Конфіденційність', 'Умови надання послуг', 'Право на відмову'],
  },
  EN: {
    home: 'Back to home',
    label: 'Legal information',
    draft:
      'Draft — not ready for publication. Business details and contract terms must be completed and reviewed.',
    contact: 'Contact',
    titles: ['Legal notice', 'Privacy policy', 'Terms and conditions', 'Right of withdrawal'],
  },
};
export const LEGAL_CONTENT = {
  DE: {
    impressum: [
      [
        'Angaben gemäß § 5 DDG',
        'Möbel Montage\nInhaber: Kostiantyn Kryvorotov\nPaulstr. 7\n53639 Königswinter\nDeutschland',
      ],
      ['Kontakt', 'Telefon: 0176 218 55 005\nE-Mail: fatuglyaces@gmail.com'],
      ['Website', 'https://mobel-montage-claude.vercel.app/'],
      [
        'Unternehmensangaben',
        'Unternehmensform: Einzelunternehmen\n\nTätigkeitsbereich: Möbelmontage, Möbeldemontage sowie damit verbundene Montage- und Befestigungsarbeiten.\n\nWirtschafts-Identifikationsnummer: DE452621634',
      ],
      [
        'Verbraucherstreitbeilegung',
        'Wir sind weder verpflichtet noch bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.',
      ],
      [
        'Haftung für Inhalte',
        'Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Wir übernehmen jedoch keine Gewähr für die Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten Informationen. Gesetzliche Haftungspflichten bleiben unberührt.',
      ],
      [
        'Urheberrecht',
        'Die auf dieser Website veröffentlichten Inhalte, Texte, Fotografien und Gestaltungselemente unterliegen dem geltenden Urheberrecht. Eine Verwendung außerhalb der gesetzlichen Schranken des Urheberrechts bedarf der Zustimmung des jeweiligen Rechteinhabers.',
      ],
    ],
    datenschutz: [
      ['Stand: Oktober 2026', ''],
      [
        '1. Verantwortlicher',
        'Verantwortlich für die Verarbeitung personenbezogener Daten auf dieser Website ist:\n\nMöbel Montage\nKostiantyn Kryvorotov\nPaulstr. 7\n53639 Königswinter\nDeutschland\n\nE-Mail: fatuglyaces@gmail.com\nTelefon: 0176 218 55 005',
      ],
      [
        '2. Allgemeine Hinweise',
        'Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Wir verarbeiten personenbezogene Daten ausschließlich im Rahmen der geltenden Datenschutzgesetze, insbesondere der Datenschutz-Grundverordnung (DSGVO).\n\nPersonenbezogene Daten sind Informationen, mit denen Sie persönlich identifiziert werden können.',
      ],
      [
        '3. Hosting',
        'Unsere Website wird bei folgendem Dienstleister gehostet:\n\nVercel Inc.\n340 S Lemon Ave #4133\nWalnut, CA 91789\nUSA\n\nBeim Besuch unserer Website können technisch erforderliche Daten verarbeitet werden. Dazu gehören insbesondere:\n\n- IP-Adresse\n- Datum und Uhrzeit des Zugriffs\n- Aufgerufene Seiten\n- Browsertyp und Browserversion\n- Betriebssystem\n- Technische Verbindungsdaten\n\nDie Verarbeitung erfolgt zur sicheren und zuverlässigen Bereitstellung der Website auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.\n\nBei einer Übermittlung personenbezogener Daten in Drittländer sind die hierfür geltenden gesetzlichen Voraussetzungen einzuhalten.\n\nWeitere Informationen finden Sie unter:\n\nhttps://vercel.com/legal/privacy-notice',
      ],
      [
        '4. Kontaktaufnahme',
        'Wenn Sie uns per E-Mail, telefonisch oder über ein Kontaktformular kontaktieren, verarbeiten wir die von Ihnen mitgeteilten Daten zur Bearbeitung Ihrer Anfrage.\n\nHierzu können insbesondere gehören:\n\n- Name\n- E-Mail-Adresse\n- Telefonnummer\n- Anschrift des Montageortes\n- Angaben zu den gewünschten Montagearbeiten\n- Freiwillig übermittelte Fotos oder Dokumente\n\nDie Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, soweit sie zur Durchführung vorvertraglicher Maßnahmen oder zur Vertragserfüllung erforderlich ist. Bei sonstigen Anfragen erfolgt die Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.',
      ],
      [
        '5. Verarbeitung im Rahmen der Auftragsabwicklung',
        'Zur Vorbereitung und Durchführung von Montageaufträgen verarbeiten wir die hierfür notwendigen Kundendaten.\n\nDies umfasst insbesondere Terminabsprachen, die Erstellung von Angeboten und Rechnungen sowie die Durchführung und Dokumentation vereinbarter Leistungen.\n\nRechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO.\n\nSoweit gesetzliche Aufbewahrungspflichten bestehen, erfolgt die Verarbeitung außerdem auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO.',
      ],
      [
        '6. Cookies und ähnliche Technologien',
        'Unsere Website kann technisch notwendige Speichertechnologien einsetzen, die für den sicheren Betrieb und die Bereitstellung bestimmter Funktionen erforderlich sind.\n\nSoweit nicht notwendige Cookies oder vergleichbare Technologien verwendet werden, erfolgt deren Einsatz nur nach vorheriger Einwilligung gemäß § 25 TDDDG. Die anschließende Verarbeitung personenbezogener Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO.\n\nEine erteilte Einwilligung kann jederzeit mit Wirkung für die Zukunft widerrufen werden.\n\nIhre Entscheidung wird unter „mm-cookie-consent“ im Local Storage für bis zu 180 Tage gespeichert. Sie enthält die Version, den Zeitpunkt sowie den Status notwendiger und optionaler Funktionen. Über „Cookie-Einstellungen“ können Sie die Auswahl erneut öffnen. Google Analytics ist noch nicht aktiv; eine Zustimmung im aktuellen Banner erlaubt keine spätere Aktivierung ohne erneute Nachfrage. Die Sprachauswahl wird separat unter „mm-lang“ gespeichert.',
      ],
      [
        '7. Google Analytics 4',
        'Dieser Abschnitt gilt nur, wenn Google Analytics 4 tatsächlich auf der Website eingesetzt wird.\n\nDiese Website nutzt Google Analytics 4, einen Webanalysedienst der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.\n\nGoogle Analytics dient der statistischen Auswertung der Nutzung unserer Website, um Inhalte und Benutzerfreundlichkeit zu verbessern.\n\nDabei können unter anderem folgende Informationen verarbeitet werden:\n\n- Aufgerufene Seiten\n- Nutzungsdauer und Interaktionen\n- Ungefähre geografische Herkunft\n- Geräte- und Browserinformationen\n- Online-Kennungen\n\nDie Verarbeitung erfolgt ausschließlich auf Grundlage Ihrer vorherigen Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO.\n\nEine Übermittlung von Daten an Google LLC in den USA kann stattfinden.\n\nWeitere Informationen:\n\nhttps://policies.google.com/privacy',
      ],
      [
        '8. Speicherdauer',
        'Wir speichern personenbezogene Daten nur so lange, wie dies für den jeweiligen Verarbeitungszweck erforderlich ist.\n\nDaten aus Kundenanfragen werden gelöscht, sobald sie für die Bearbeitung nicht mehr benötigt werden und keine gesetzlichen Aufbewahrungspflichten oder berechtigten Gründe für eine weitere Speicherung bestehen.\n\nGeschäfts- und Rechnungsunterlagen werden entsprechend den gesetzlichen Aufbewahrungsfristen gespeichert.',
      ],
      [
        '9. Weitergabe von Daten',
        'Personenbezogene Daten werden nur dann an Dritte weitergegeben, wenn dies zur Vertragserfüllung erforderlich ist, eine gesetzliche Verpflichtung besteht oder eine andere gültige Rechtsgrundlage vorliegt.\n\nSoweit wir Dienstleister zur Datenverarbeitung einsetzen, werden die datenschutzrechtlichen Anforderungen berücksichtigt.',
      ],
      [
        '10. Ihre Rechte',
        'Sie haben im Rahmen der gesetzlichen Voraussetzungen folgende Rechte:\n\n- Auskunft über Ihre personenbezogenen Daten (Art. 15 DSGVO)\n- Berichtigung unrichtiger Daten (Art. 16 DSGVO)\n- Löschung Ihrer Daten (Art. 17 DSGVO)\n- Einschränkung der Verarbeitung (Art. 18 DSGVO)\n- Datenübertragbarkeit (Art. 20 DSGVO)\n- Widerspruch gegen bestimmte Verarbeitungen (Art. 21 DSGVO)\n- Widerruf erteilter Einwilligungen (Art. 7 Abs. 3 DSGVO)\n\nDarüber hinaus haben Sie das Recht, sich bei einer zuständigen Datenschutzaufsichtsbehörde zu beschweren.',
      ],
      [
        '11. SSL-/TLS-Verschlüsselung',
        'Diese Website nutzt eine verschlüsselte HTTPS-Verbindung, um die Übertragung von Daten zwischen Ihrem Browser und unserem Server zu schützen.',
      ],
      [
        '12. Aktualisierung dieser Datenschutzerklärung',
        'Wir behalten uns vor, diese Datenschutzerklärung anzupassen, wenn gesetzliche Änderungen oder Änderungen an unserer Website dies erforderlich machen.',
      ],
      [
        '13. Aktueller technischer Stand und ergänzende Dienste',
        'Google Analytics 4 ist derzeit noch nicht eingebunden. Der Formularversand an WhatsApp und E-Mail ist ebenfalls noch nicht eingerichtet; Eingaben und ausgewählte Dateien werden durch das aktuelle Formular nicht versendet. Die HTTPS-Angabe bezieht sich auf die veröffentlichte Website, nicht auf eine lokale Entwicklungsversion.',
      ],
      [
        'Sprachspeicherung',
        'Die Website speichert Ihre Sprachauswahl unter „mm-lang“ im Local Storage des Browsers. Sie bleibt bis zur Änderung oder zum Löschen der Browserdaten gespeichert.',
      ],
      [
        'Google Fonts',
        'Die aktuelle Website lädt Schriftarten von fonts.googleapis.com und fonts.gstatic.com. Dabei wird eine Verbindung zu Google hergestellt und insbesondere die IP-Adresse kann übermittelt werden. Die Rechtsgrundlage und Übermittlungsbedingungen sind vor Veröffentlichung zu klären oder die Schriften lokal einzubinden.',
      ],
      [
        'WhatsApp und PayPal',
        'WhatsApp ist derzeit als externer Kontaktlink eingebunden. Bei Kontaktaufnahme über WhatsApp werden die übermittelten Kontakt- und Auftragsdaten zur Bearbeitung verwendet. Zahlungen per PayPal sind vorgesehen; PayPal ist nicht als Zahlungsmodul in die Website eingebunden. Die konkreten Empfängerangaben, Übermittlungsbedingungen und Aufbewahrungsfristen sind vor Abschluss dieser Erklärung zu ergänzen.',
      ],
    ],
    agb: [
      ['Möbel Montage – Kostiantyn Kryvorotov', 'Stand: Oktober 2026'],
      [
        '§ 1 Geltungsbereich',
        '(1) Diese Allgemeinen Geschäftsbedingungen gelten für Verträge zwischen Möbel Montage, Inhaber Kostiantyn Kryvorotov, nachfolgend „Auftragnehmer“ genannt, und seinen Kunden über Montage- und Demontageleistungen.\n\n(2) Kunden können sowohl Verbraucher im Sinne des § 13 BGB als auch Unternehmer im Sinne des § 14 BGB sein.\n\n(3) Individuelle Vereinbarungen zwischen dem Auftragnehmer und dem Kunden haben Vorrang vor diesen Allgemeinen Geschäftsbedingungen.',
      ],
      [
        '§ 2 Leistungsumfang',
        '(1) Der Auftragnehmer bietet insbesondere folgende Leistungen an:\n\n- Montage und Demontage von Möbeln\n- Aufbau von Schränken, Regalen, Betten, Tischen und anderen Möbelstücken\n- Montage von IKEA-Möbelsystemen\n- Anbringung und Befestigung von Möbeln und Einrichtungsgegenständen\n- Montage von Gardinenstangen, Rollos, Spiegeln und ähnlichen Gegenständen\n- Weitere individuell vereinbarte Montagearbeiten\n\n(2) Der konkrete Leistungsumfang ergibt sich aus dem jeweiligen Angebot oder der individuellen Vereinbarung mit dem Kunden.\n\n(3) Nicht vereinbarte Zusatzarbeiten werden nur nach Rücksprache mit dem Kunden durchgeführt und können gesondert berechnet werden.\n\n(4) Arbeiten, die eine besondere gesetzliche Zulassung oder Fachqualifikation voraussetzen, sind nicht Bestandteil der Leistung, sofern die entsprechenden Voraussetzungen nicht vorliegen.',
      ],
      [
        '§ 3 Vertragsschluss',
        '(1) Anfragen über die Website, per E-Mail oder telefonisch sind zunächst unverbindlich.\n\n(2) Ein Vertrag kommt durch die Annahme eines konkreten Angebots oder eine anderweitige verbindliche Vereinbarung zwischen den Parteien zustande.\n\n(3) Der vereinbarte Leistungsumfang, der Montageort, die Vergütung und der Termin werden individuell festgelegt.',
      ],
      [
        '§ 4 Preise und Zahlungsbedingungen',
        '(1) Die Vergütung erfolgt je nach Vereinbarung auf Stundenbasis oder zu einem Festpreis.\n\n(2) Sofern eine Stundenvergütung vereinbart wurde, wird die tatsächlich geleistete Arbeitszeit nach dem vereinbarten Stundensatz berechnet.\n\n(3) Anfahrtskosten, Parkgebühren, Materialkosten und sonstige zusätzliche Aufwendungen werden nur berechnet, soweit dies vorab vereinbart wurde.\n\n(4) Zusätzliche Arbeiten oder Änderungen des ursprünglich vereinbarten Leistungsumfangs können zu einer Anpassung der Vergütung führen. Der Kunde wird hierüber vor Durchführung der Zusatzarbeiten informiert.\n\n(5) Die Vergütung ist innerhalb von 14 Tagen nach Fertigstellung der Arbeiten fällig, vorausgesetzt, die vereinbarte Werkleistung wurde abgenommen und eine Rechnung ist zugegangen, soweit nichts anderes wirksam vereinbart wurde.\n\n(6) Die Bezahlung kann nach individueller Vereinbarung bar, per Banküberweisung oder per PayPal erfolgen.',
      ],
      [
        '§ 5 Pflichten des Kunden',
        '(1) Der Kunde stellt sicher, dass die für die Montage vorgesehenen Möbel und Bauteile zum vereinbarten Zeitpunkt am Montageort verfügbar sind.\n\n(2) Der Montagebereich muss frei zugänglich sein und ausreichend Platz für eine sichere Durchführung der Arbeiten bieten.\n\n(3) Der Kunde informiert den Auftragnehmer vor Beginn der Arbeiten über bekannte Besonderheiten am Montageort, insbesondere über verdeckte Leitungen, instabile Wände oder andere erkennbare Gefahren.\n\n(4) Fehlende oder beschädigte Bauteile sowie ungeeignete Montagebedingungen können die Durchführung der Arbeiten verzögern oder unmöglich machen.\n\n(5) Erforderliche zusätzliche Maßnahmen werden mit dem Kunden abgestimmt.',
      ],
      [
        '§ 6 Wandbefestigungen',
        '(1) Wandbefestigungen werden unter Berücksichtigung der erkennbaren Beschaffenheit des Untergrunds und der technischen Anforderungen der zu montierenden Gegenstände durchgeführt.\n\n(2) Der Kunde hat bekannte Informationen über die Wandbeschaffenheit und den Verlauf verdeckter Leitungen vor Beginn der Arbeiten mitzuteilen.\n\n(3) Bestehen Zweifel an der Tragfähigkeit oder Sicherheit einer Befestigung, kann der Auftragnehmer die Arbeiten bis zur Klärung der Voraussetzungen unterbrechen oder eine unsichere Ausführung ablehnen.\n\n(4) Die gesetzlichen Haftungsansprüche bleiben unberührt.',
      ],
      [
        '§ 7 Termine und Verzögerungen',
        '(1) Vereinbarte Termine sind von beiden Parteien einzuhalten.\n\n(2) Ist eine Terminverschiebung erforderlich, informiert die betroffene Partei die andere Seite möglichst frühzeitig.\n\n(3) Bei unvorhersehbaren Ereignissen, insbesondere Krankheit, erheblichen Verkehrsbehinderungen oder höherer Gewalt, wird nach Möglichkeit ein Ersatztermin vereinbart.\n\n(4) Gesetzliche Ansprüche wegen Verzögerungen bleiben unberührt.',
      ],
      [
        '§ 8 Abnahme und Mängel',
        '(1) Nach Fertigstellung der vereinbarten Werkleistung erfolgt die Abnahme nach den gesetzlichen Bestimmungen.\n\n(2) Der Kunde hat die Möglichkeit, die ausgeführten Arbeiten zu überprüfen und erkennbare Mängel mitzuteilen.\n\n(3) Bei berechtigten Mängelansprüchen gelten die gesetzlichen Gewährleistungsrechte, insbesondere nach §§ 633 ff. BGB.\n\n(4) Dem Auftragnehmer ist Gelegenheit zur gesetzlich vorgesehenen Nacherfüllung zu geben.',
      ],
      [
        '§ 9 Haftung',
        '(1) Der Auftragnehmer haftet nach den gesetzlichen Vorschriften für Schäden, die er vorsätzlich oder grob fahrlässig verursacht.\n\n(2) Bei leicht fahrlässiger Verletzung wesentlicher Vertragspflichten ist die Haftung auf den vertragstypischen, vorhersehbaren Schaden begrenzt.\n\n(3) Die vorstehenden Beschränkungen gelten nicht bei Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit sowie in Fällen zwingender gesetzlicher Haftung.\n\n(4) Gesetzliche Rechte des Kunden, insbesondere Gewährleistungsrechte, bleiben unberührt.',
      ],
      [
        '§ 10 Widerrufsrecht',
        'Verbrauchern kann bei Fernabsatzverträgen und außerhalb von Geschäftsräumen geschlossenen Verträgen ein gesetzliches Widerrufsrecht zustehen.\n\nEinzelheiten ergeben sich aus der gesonderten Widerrufsbelehrung.',
      ],
      [
        '§ 11 Schlussbestimmungen',
        '(1) Es gilt das Recht der Bundesrepublik Deutschland unter Wahrung zwingender gesetzlicher Verbraucherschutzvorschriften.\n\n(2) Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt. An die Stelle unwirksamer Bestimmungen treten die gesetzlichen Regelungen.\n\n(3) Individuelle vertragliche Absprachen haben Vorrang.',
      ],
    ],
    widerruf: [
      [
        'Widerrufsrecht',
        'Verbraucher haben bei Fernabsatzverträgen und außerhalb von Geschäftsräumen geschlossenen Verträgen grundsätzlich das Recht, binnen vierzehn Tagen ohne Angabe von Gründen den Vertrag zu widerrufen, sofern keine gesetzliche Ausnahme vorliegt.\n\nDie Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsabschlusses.\n\nUm Ihr Widerrufsrecht auszuüben, müssen Sie uns\n\nMöbel Montage\nKostiantyn Kryvorotov\nPaulstr. 7\n53639 Königswinter\nDeutschland\n\nTelefon: 0176 218 55 005\nE-Mail: fatuglyaces@gmail.com\n\nmittels einer eindeutigen Erklärung, beispielsweise per Brief oder E-Mail, über Ihren Entschluss informieren, diesen Vertrag zu widerrufen.\n\nSie können dafür das untenstehende Muster-Widerrufsformular verwenden. Die Verwendung dieses Formulars ist jedoch nicht vorgeschrieben.\n\nZur Wahrung der Widerrufsfrist reicht es aus, dass Sie Ihre Mitteilung vor Ablauf der Widerrufsfrist absenden.',
      ],
      [
        'Folgen des Widerrufs',
        'Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf bei uns eingegangen ist.\n\nFür die Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der ursprünglichen Transaktion eingesetzt haben, sofern nicht ausdrücklich etwas anderes vereinbart wurde. Ihnen werden wegen dieser Rückzahlung keine Entgelte berechnet.\n\nHaben Sie verlangt, dass die Dienstleistungen während der Widerrufsfrist beginnen sollen, haben Sie uns einen angemessenen Betrag zu zahlen, der dem Anteil der bis zum Zeitpunkt Ihres Widerrufs bereits erbrachten Dienstleistungen im Vergleich zum Gesamtumfang der vertraglich vorgesehenen Dienstleistungen entspricht, sofern die gesetzlichen Voraussetzungen für diesen Wertersatz vorliegen.',
      ],
      [
        'Vorzeitiges Erlöschen des Widerrufsrechts',
        'Bei einem Vertrag über Dienstleistungen kann das Widerrufsrecht unter den gesetzlichen Voraussetzungen vorzeitig erlöschen, wenn die Dienstleistung vollständig erbracht wurde.\n\nDafür ist insbesondere erforderlich, dass der Verbraucher vor Beginn der Leistungserbringung ausdrücklich zugestimmt hat, dass der Unternehmer vor Ablauf der Widerrufsfrist mit der Leistung beginnt, und bestätigt hat, dass er weiß, dass sein Widerrufsrecht bei vollständiger Vertragserfüllung erlischt.',
      ],
      [
        'Muster-Widerrufsformular',
        'Wenn Sie den Vertrag widerrufen wollen, können Sie dieses Formular ausfüllen und an uns zurücksenden.\n\nAn:\n\nMöbel Montage\nKostiantyn Kryvorotov\nPaulstr. 7\n53639 Königswinter\nE-Mail: fatuglyaces@gmail.com\n\nHiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über die Erbringung der folgenden Dienstleistung:\n____________________________\n\nBestellt am:\n____________________________\n\nName des/der Verbraucher(s):\n____________________________\n\nAnschrift des/der Verbraucher(s):\n____________________________\n\nDatum:\n____________________________\n\nUnterschrift (nur bei Mitteilung auf Papier):\n____________________________\n\n(*) Unzutreffendes streichen.',
      ],
    ],
  },
  UK: {
    impressum: [
      [
        'Відомості згідно з § 5 DDG',
        'Möbel Montage\nВласник: Kostiantyn Kryvorotov\nPaulstr. 7\n53639 Königswinter\nНімеччина',
      ],
      ['Контакти', 'Телефон: 0176 218 55 005\nЕлектронна пошта: fatuglyaces@gmail.com'],
      ['Вебсайт', 'https://mobel-montage-claude.vercel.app/'],
      [
        'Відомості про підприємство',
        'Організаційна форма: Einzelunternehmen (одноосібне підприємство)\n\nСфера діяльності: збирання та розбирання меблів, а також пов’язані монтажні й кріпильні роботи.\n\nWirtschafts-Identifikationsnummer: DE452621634',
      ],
      [
        'Вирішення споживчих спорів',
        'Ми не зобов’язані й не готові брати участь у процедурах вирішення спорів перед органом позасудового врегулювання споживчих спорів.',
      ],
      [
        'Відповідальність за вміст',
        'Вміст цього вебсайту створено з максимальною ретельністю. Однак ми не гарантуємо правильності, повноти й актуальності наданої інформації. Передбачені законом обов’язки щодо відповідальності залишаються незмінними.',
      ],
      [
        'Авторське право',
        'Опубліковані на цьому вебсайті матеріали, тексти, фотографії та елементи оформлення захищені чинним авторським правом. Використання поза встановленими законом межами потребує згоди відповідного правовласника.',
      ],
    ],
    datenschutz: [
      ['Станом на жовтень 2026 року', ''],
      [
        '1. Відповідальна особа',
        'За обробку персональних даних на цьому вебсайті відповідає:\n\nMöbel Montage\nKostiantyn Kryvorotov\nPaulstr. 7\n53639 Königswinter\nНімеччина\n\nЕлектронна пошта: fatuglyaces@gmail.com\nТелефон: 0176 218 55 005',
      ],
      [
        '2. Загальна інформація',
        'Захист ваших персональних даних важливий для нас. Ми обробляємо персональні дані виключно відповідно до чинного законодавства про захист даних, зокрема Загального регламенту про захист даних (GDPR).\n\nПерсональні дані — це інформація, за допомогою якої вас можна ідентифікувати.',
      ],
      [
        '3. Хостинг',
        'Наш вебсайт розміщується у такого постачальника послуг:\n\nVercel Inc.\n340 S Lemon Ave #4133\nWalnut, CA 91789\nСША\n\nПід час відвідування сайту можуть оброблятися технічно необхідні дані, зокрема:\n\n- IP-адреса\n- Дата й час доступу\n- Відвідані сторінки\n- Тип і версія браузера\n- Операційна система\n- Технічні дані з’єднання\n\nОбробка здійснюється для безпечної та надійної роботи сайту на підставі ст. 6(1)(f) GDPR.\n\nУ разі передавання персональних даних до третіх країн необхідно дотримуватися відповідних законодавчих вимог.\n\nДокладніше:\n\nhttps://vercel.com/legal/privacy-notice',
      ],
      [
        '4. Звернення до нас',
        'Якщо ви звертаєтеся до нас електронною поштою, телефоном або через контактну форму, ми обробляємо надані дані для опрацювання вашого запиту.\n\nЦе можуть бути, зокрема:\n\n- Ім’я\n- Електронна адреса\n- Номер телефону\n- Адреса місця монтажу\n- Відомості про бажані монтажні роботи\n- Добровільно надані фотографії чи документи\n\nОбробка здійснюється на підставі ст. 6(1)(b) GDPR, якщо вона необхідна для переддоговірних заходів або виконання договору. Для інших звернень підставою є ст. 6(1)(f) GDPR.',
      ],
      [
        '5. Обробка під час виконання замовлення',
        'Для підготовки й виконання монтажних замовлень ми обробляємо необхідні дані клієнтів.\n\nЗокрема, це погодження дат, підготовка пропозицій і рахунків, виконання та документування погоджених послуг.\n\nПравова підстава — ст. 6(1)(b) GDPR.\n\nЯкщо закон передбачає обов’язкове зберігання документів, обробка також здійснюється на підставі ст. 6(1)(c) GDPR.',
      ],
      [
        '6. Cookies та подібні технології',
        'Сайт може використовувати технічно необхідні технології зберігання для безпечної роботи й надання окремих функцій.\n\nНеобов’язкові cookies та подібні технології використовуються лише після попередньої згоди відповідно до § 25 TDDDG. Подальша обробка персональних даних здійснюється на підставі ст. 6(1)(a) GDPR.\n\nНадану згоду можна будь-коли відкликати на майбутнє.\n\nРішення зберігається в Local Storage під ключем «mm-cookie-consent» до 180 днів. Воно містить версію, час та стан необхідних і необов’язкових функцій. Повторно відкрити вибір можна через «Налаштування cookies». Google Analytics ще не активний; згода в поточному банері не дозволяє ввімкнути його згодом без нового запиту. Вибір мови зберігається окремо під ключем «mm-lang».',
      ],
      [
        '7. Google Analytics 4',
        'Цей розділ застосовується лише за фактичного використання Google Analytics 4 на сайті.\n\nУ такому разі сайт використовує Google Analytics 4 — сервіс вебаналітики Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ірландія.\n\nGoogle Analytics слугує для статистичного аналізу використання сайту з метою поліпшення його вмісту та зручності.\n\nМожуть оброблятися, зокрема:\n\n- Відвідані сторінки\n- Тривалість використання та взаємодії\n- Приблизне географічне розташування\n- Дані пристрою та браузера\n- Онлайн-ідентифікатори\n\nОбробка здійснюється виключно на підставі вашої попередньої згоди відповідно до ст. 6(1)(a) GDPR.\n\nМожливе передавання даних Google LLC у США.\n\nДокладніше:\n\nhttps://policies.google.com/privacy',
      ],
      [
        '8. Строк зберігання',
        'Ми зберігаємо персональні дані лише стільки, скільки потрібно для відповідної мети обробки.\n\nДані звернень видаляються, щойно вони більше не потрібні для опрацювання й немає законного обов’язку або обґрунтованих причин зберігати їх далі.\n\nДілові та розрахункові документи зберігаються відповідно до встановлених законом строків.',
      ],
      [
        '9. Передавання даних',
        'Персональні дані передаються третім особам лише тоді, коли це потрібно для виконання договору, передбачено законом або існує інша чинна правова підстава.\n\nПри залученні постачальників послуг обробки даних враховуються вимоги законодавства про захист даних.',
      ],
      [
        '10. Ваші права',
        'За передбачених законом умов ви маєте такі права:\n\n- Доступ до своїх персональних даних (ст. 15 GDPR)\n- Виправлення неправильних даних (ст. 16 GDPR)\n- Видалення даних (ст. 17 GDPR)\n- Обмеження обробки (ст. 18 GDPR)\n- Перенесення даних (ст. 20 GDPR)\n- Заперечення проти певних видів обробки (ст. 21 GDPR)\n- Відкликання згоди (ст. 7(3) GDPR)\n\nТакож ви маєте право подати скаргу до компетентного наглядового органу із захисту даних.',
      ],
      [
        '11. Шифрування SSL/TLS',
        'Сайт використовує зашифроване HTTPS-з’єднання для захисту передавання даних між вашим браузером і нашим сервером.',
      ],
      [
        '12. Оновлення політики конфіденційності',
        'Ми залишаємо за собою право змінювати цю політику, якщо цього потребуватимуть зміни законодавства або нашого вебсайту.',
      ],
      [
        '13. Поточний технічний стан і додаткові сервіси',
        'Google Analytics 4 ще не підключено. Надсилання форми у WhatsApp та на електронну пошту також не налаштовано; поточна форма не надсилає введені дані чи вибрані файли. Згадка про HTTPS стосується опублікованого сайту, а не локальної версії для розробки.',
      ],
      [
        'Збереження мови',
        'Вибрана мова зберігається під ключем «mm-lang» у Local Storage браузера до зміни налаштування або очищення даних браузера.',
      ],
      [
        'Google Fonts',
        'Сайт зараз завантажує шрифти з fonts.googleapis.com і fonts.gstatic.com. Це встановлює з’єднання з Google, під час якого може передаватися, зокрема, IP-адреса. До публікації потрібно уточнити правову підставу й умови передавання або розмістити шрифти локально.',
      ],
      [
        'WhatsApp та PayPal',
        'WhatsApp зараз підключено як зовнішнє контактне посилання. Надані через WhatsApp контактні дані та відомості про замовлення використовуються для опрацювання звернення. Передбачено оплату через PayPal, але платіжний модуль PayPal на сайті не підключено. Конкретних одержувачів, умови передавання й строки зберігання потрібно додати до завершення цієї політики.',
      ],
    ],
    agb: [
      ['Möbel Montage – Kostiantyn Kryvorotov', 'Станом на жовтень 2026 року'],
      [
        '§ 1 Сфера застосування',
        '(1) Ці загальні умови застосовуються до договорів між Möbel Montage, власник Kostiantyn Kryvorotov, надалі «Виконавець», та його клієнтами щодо монтажу й демонтажу.\n\n(2) Клієнтами можуть бути як споживачі відповідно до § 13 BGB, так і підприємці відповідно до § 14 BGB.\n\n(3) Індивідуальні домовленості між Виконавцем і клієнтом мають перевагу над цими загальними умовами.',
      ],
      [
        '§ 2 Обсяг послуг',
        '(1) Виконавець пропонує, зокрема, такі послуги:\n\n- Збирання та розбирання меблів\n- Збирання шаф, стелажів, ліжок, столів та інших меблів\n- Монтаж меблевих систем IKEA\n- Установлення та кріплення меблів і предметів інтер’єру\n- Монтаж карнизів, ролет, дзеркал та подібних предметів\n- Інші індивідуально погоджені монтажні роботи\n\n(2) Конкретний обсяг послуг визначається відповідною пропозицією або індивідуальною домовленістю з клієнтом.\n\n(3) Неузгоджені додаткові роботи виконуються лише після погодження з клієнтом і можуть оплачуватися окремо.\n\n(4) Роботи, що потребують спеціального законодавчого дозволу або професійної кваліфікації, не входять до послуг, якщо відповідних передумов немає.',
      ],
      [
        '§ 3 Укладення договору',
        '(1) Звернення через сайт, електронною поштою чи телефоном спочатку не створюють зобов’язань.\n\n(2) Договір укладається шляхом прийняття конкретної пропозиції або іншої обов’язкової домовленості між сторонами.\n\n(3) Обсяг робіт, місце монтажу, винагорода й дата визначаються індивідуально.',
      ],
      [
        '§ 4 Ціни та умови оплати',
        '(1) Залежно від домовленості оплата здійснюється погодинно або за фіксованою ціною.\n\n(2) За погодинної оплати фактично відпрацьований час оплачується за погодженою ставкою.\n\n(3) Витрати на дорогу, паркування, матеріали та інші додаткові витрати нараховуються лише за попередньою домовленістю.\n\n(4) Додаткові роботи або зміни погодженого обсягу можуть призвести до зміни вартості. Клієнта повідомляють про це до виконання додаткових робіт.\n\n(5) Оплата здійснюється протягом 14 днів після завершення робіт за умови приймання погоджених робіт та отримання рахунку, якщо інше не було належним чином погоджено.\n\n(6) За індивідуальною домовленістю оплата можлива готівкою, банківським переказом або через PayPal.',
      ],
      [
        '§ 5 Обов’язки клієнта',
        '(1) Клієнт забезпечує наявність призначених для монтажу меблів і деталей у погодженому місці та в погоджений час.\n\n(2) Місце монтажу має бути вільно доступним і мати достатньо простору для безпечної роботи.\n\n(3) До початку робіт клієнт повідомляє про відомі особливості місця монтажу, зокрема приховані комунікації, нестійкі стіни та інші помітні небезпеки.\n\n(4) Відсутні чи пошкоджені деталі або неналежні умови монтажу можуть затримати роботи чи зробити їх неможливими.\n\n(5) Необхідні додаткові заходи погоджуються з клієнтом.',
      ],
      [
        '§ 6 Кріплення до стін',
        '(1) Кріплення виконуються з урахуванням видимих властивостей основи та технічних вимог предметів, що встановлюються.\n\n(2) До початку робіт клієнт повідомляє відому інформацію про стан стін і розташування прихованих комунікацій.\n\n(3) За сумнівів щодо несучої здатності або безпеки кріплення Виконавець може призупинити роботи до з’ясування умов або відмовитися від небезпечного виконання.\n\n(4) Передбачені законом вимоги щодо відповідальності залишаються незмінними.',
      ],
      [
        '§ 7 Строки та затримки',
        '(1) Обидві сторони мають дотримуватися погоджених строків.\n\n(2) Якщо потрібне перенесення, відповідна сторона якомога раніше повідомляє іншу.\n\n(3) За непередбачуваних обставин, зокрема хвороби, значних транспортних перешкод або форс-мажору, за можливості погоджується інша дата.\n\n(4) Законні вимоги у зв’язку із затримками залишаються незмінними.',
      ],
      [
        '§ 8 Приймання та недоліки',
        '(1) Після завершення погоджених робіт приймання здійснюється відповідно до закону.\n\n(2) Клієнт може перевірити виконані роботи та повідомити про помітні недоліки.\n\n(3) За обґрунтованих вимог щодо недоліків застосовуються законні гарантійні права, зокрема згідно з §§ 633 і наступними BGB.\n\n(4) Виконавцю має бути надана можливість виконати передбачене законом усунення недоліків.',
      ],
      [
        '§ 9 Відповідальність',
        '(1) Виконавець відповідає відповідно до закону за шкоду, заподіяну умисно або через грубу необережність.\n\n(2) За порушення істотних договірних обов’язків через легку необережність відповідальність обмежується типовою для договору передбачуваною шкодою.\n\n(3) Ці обмеження не стосуються шкоди життю, тілу чи здоров’ю, а також випадків обов’язкової відповідальності за законом.\n\n(4) Законні права клієнта, зокрема щодо недоліків, залишаються незмінними.',
      ],
      [
        '§ 10 Право на відмову',
        'Споживачі можуть мати законне право на відмову за договорами, укладеними дистанційно або поза приміщенням підприємства.\n\nДокладні умови наведені в окремому повідомленні про право на відмову.',
      ],
      [
        '§ 11 Прикінцеві положення',
        '(1) Застосовується право Федеративної Республіки Німеччина з дотриманням обов’язкових законодавчих положень про захист споживачів.\n\n(2) Якщо окремі положення цих умов є або стануть недійсними, решта залишаються чинними. Замість недійсних положень застосовуються норми закону.\n\n(3) Індивідуальні договірні домовленості мають перевагу.',
      ],
    ],
    widerruf: [
      [
        'Право на відмову',
        'За договорами, укладеними дистанційно або поза приміщенням підприємства, споживачі зазвичай мають право відмовитися від договору протягом чотирнадцяти днів без пояснення причин, якщо законом не передбачено винятку.\n\nСтрок відмови становить чотирнадцять днів від дня укладення договору.\n\nДля реалізації цього права потрібно повідомити нас:\n\nMöbel Montage\nKostiantyn Kryvorotov\nPaulstr. 7\n53639 Königswinter\nНімеччина\n\nТелефон: 0176 218 55 005\nЕлектронна пошта: fatuglyaces@gmail.com\n\nпро своє рішення відмовитися від договору однозначною заявою, наприклад листом або електронною поштою.\n\nМожна скористатися наведеним нижче зразком повідомлення, але це не обов’язково.\n\nДля дотримання строку достатньо надіслати повідомлення до його закінчення.',
      ],
      [
        'Наслідки відмови',
        'Якщо ви відмовляєтеся від цього договору, ми маємо повернути всі отримані від вас платежі без зволікання, але не пізніше ніж протягом чотирнадцяти днів від дня отримання повідомлення про відмову.\n\nДля повернення використовуємо той самий спосіб оплати, що й під час початкової операції, якщо прямо не погоджено інше. Комісії за повернення з вас не стягуються.\n\nЯкщо ви попросили почати надання послуг протягом строку відмови, ви маєте сплатити пропорційну суму за послуги, фактично надані до моменту вашої відмови, відносно загального передбаченого договором обсягу, за умови виконання законодавчих передумов такої компенсації.',
      ],
      [
        'Дострокове припинення права на відмову',
        'За договором про послуги право на відмову може достроково припинитися за передбачених законом умов після повного надання послуги.\n\nЗокрема, до початку надання послуг споживач має прямо погодитися на початок роботи виконавця до закінчення строку відмови й підтвердити, що знає про припинення свого права на відмову після повного виконання договору.',
      ],
      [
        'Зразок повідомлення про відмову',
        'Якщо ви бажаєте відмовитися від договору, можете заповнити це повідомлення та надіслати його нам.\n\nКому:\n\nMöbel Montage\nKostiantyn Kryvorotov\nPaulstr. 7\n53639 Königswinter\nЕлектронна пошта: fatuglyaces@gmail.com\n\nЦим я/ми (*) повідомляю/повідомляємо про відмову від укладеного мною/нами (*) договору про надання такої послуги:\n____________________________\n\nДата замовлення:\n____________________________\n\nІм’я споживача / імена споживачів:\n____________________________\n\nАдреса споживача / споживачів:\n____________________________\n\nДата:\n____________________________\n\nПідпис (лише для паперового повідомлення):\n____________________________\n\n(*) Непотрібне викреслити.',
      ],
    ],
  },
  EN: {
    impressum: [
      [
        'Information under section 5 DDG',
        'Möbel Montage\nOwner: Kostiantyn Kryvorotov\nPaulstr. 7\n53639 Königswinter\nGermany',
      ],
      ['Contact', 'Phone: 0176 218 55 005\nEmail: fatuglyaces@gmail.com'],
      ['Website', 'https://mobel-montage-claude.vercel.app/'],
      [
        'Business information',
        'Legal form: Einzelunternehmen (sole proprietorship)\n\nBusiness activities: furniture assembly, furniture disassembly and related installation and fastening work.\n\nBusiness identification number (Wirtschafts-Identifikationsnummer): DE452621634',
      ],
      [
        'Consumer dispute resolution',
        'We are neither obliged nor willing to participate in dispute resolution proceedings before a consumer arbitration body.',
      ],
      [
        'Liability for content',
        'The content of this website has been prepared with the utmost care. However, we do not guarantee the accuracy, completeness or currency of the information provided. Statutory liability obligations remain unaffected.',
      ],
      [
        'Copyright',
        'The content, texts, photographs and design elements published on this website are subject to applicable copyright law. Any use beyond statutory copyright exceptions requires the consent of the respective rights holder.',
      ],
    ],
    datenschutz: [
      ['Last updated: October 2026', ''],
      [
        '1. Controller',
        'The controller responsible for processing personal data on this website is:\n\nMöbel Montage\nKostiantyn Kryvorotov\nPaulstr. 7\n53639 Königswinter\nGermany\n\nEmail: fatuglyaces@gmail.com\nPhone: 0176 218 55 005',
      ],
      [
        '2. General information',
        'Protecting your personal data is important to us. We process personal data only within the framework of applicable data protection laws, in particular the General Data Protection Regulation (GDPR).\n\nPersonal data is information that can be used to identify you personally.',
      ],
      [
        '3. Hosting',
        'Our website is hosted by:\n\nVercel Inc.\n340 S Lemon Ave #4133\nWalnut, CA 91789\nUSA\n\nWhen you visit our website, technically necessary data may be processed, including:\n\n- IP address\n- Date and time of access\n- Pages accessed\n- Browser type and version\n- Operating system\n- Technical connection data\n\nProcessing serves the secure and reliable provision of the website on the basis of Article 6(1)(f) GDPR.\n\nTransfers of personal data to third countries must comply with the applicable legal requirements.\n\nFurther information:\n\nhttps://vercel.com/legal/privacy-notice',
      ],
      [
        '4. Contacting us',
        'If you contact us by email, telephone or a contact form, we process the data you provide to handle your enquiry.\n\nThis may include:\n\n- Name\n- Email address\n- Telephone number\n- Address of the assembly location\n- Details of the requested assembly work\n- Voluntarily submitted photographs or documents\n\nProcessing is based on Article 6(1)(b) GDPR where necessary for pre-contractual steps or contract performance. Other enquiries are processed on the basis of Article 6(1)(f) GDPR.',
      ],
      [
        '5. Processing in the course of order fulfilment',
        'We process the customer data needed to prepare and carry out assembly orders.\n\nThis includes arranging appointments, preparing quotations and invoices, and performing and documenting agreed services.\n\nThe legal basis is Article 6(1)(b) GDPR.\n\nWhere statutory retention obligations apply, processing is also based on Article 6(1)(c) GDPR.',
      ],
      [
        '6. Cookies and similar technologies',
        'Our website may use technically necessary storage technologies required for secure operation and the provision of certain functions.\n\nNon-essential cookies or comparable technologies are used only with prior consent under section 25 TDDDG. Subsequent processing of personal data is based on Article 6(1)(a) GDPR.\n\nConsent may be withdrawn at any time with effect for the future.\n\nYour decision is stored in Local Storage under “mm-cookie-consent” for up to 180 days. It contains the version, timestamp and status of necessary and optional functions. You can reopen your choice through “Cookie settings”. Google Analytics is not active; accepting the current banner does not authorize future activation without asking again. The language preference is stored separately under “mm-lang”.',
      ],
      [
        '7. Google Analytics 4',
        'This section applies only if Google Analytics 4 is actually used on the website.\n\nIn that case, this website uses Google Analytics 4, a web analytics service provided by Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland.\n\nGoogle Analytics provides statistical analysis of website use to improve content and usability.\n\nInformation processed may include:\n\n- Pages accessed\n- Duration of use and interactions\n- Approximate geographical origin\n- Device and browser information\n- Online identifiers\n\nProcessing takes place exclusively on the basis of your prior consent under Article 6(1)(a) GDPR.\n\nData may be transferred to Google LLC in the USA.\n\nFurther information:\n\nhttps://policies.google.com/privacy',
      ],
      [
        '8. Retention',
        'We store personal data only for as long as necessary for the respective processing purpose.\n\nEnquiry data is deleted when it is no longer needed to handle the enquiry and no statutory retention obligations or legitimate reasons for further storage exist.\n\nBusiness and invoice records are retained in accordance with statutory retention periods.',
      ],
      [
        '9. Disclosure of data',
        'Personal data is disclosed to third parties only where necessary for contract performance, required by law, or supported by another valid legal basis.\n\nWhere we engage service providers to process data, data protection requirements are taken into account.',
      ],
      [
        '10. Your rights',
        'Subject to the applicable legal conditions, you have the following rights:\n\n- Access to your personal data (Article 15 GDPR)\n- Rectification of inaccurate data (Article 16 GDPR)\n- Erasure of your data (Article 17 GDPR)\n- Restriction of processing (Article 18 GDPR)\n- Data portability (Article 20 GDPR)\n- Objection to certain processing (Article 21 GDPR)\n- Withdrawal of consent (Article 7(3) GDPR)\n\nYou also have the right to complain to a competent data protection supervisory authority.',
      ],
      [
        '11. SSL/TLS encryption',
        'This website uses an encrypted HTTPS connection to protect data transmission between your browser and our server.',
      ],
      [
        '12. Updates to this privacy policy',
        'We reserve the right to amend this privacy policy where required by changes in the law or to our website.',
      ],
      [
        '13. Current technical status and additional services',
        'Google Analytics 4 is not integrated yet. Form delivery to WhatsApp and email is not configured either; the current form does not send entered details or selected files. The HTTPS statement refers to the published website, not a local development version.',
      ],
      [
        'Language storage',
        'The website stores your language preference under “mm-lang” in browser Local Storage until the preference is changed or browser data is cleared.',
      ],
      [
        'Google Fonts',
        'The website currently loads fonts from fonts.googleapis.com and fonts.gstatic.com. This establishes a connection to Google and may transmit the IP address in particular. The legal basis and transfer conditions must be clarified before publication, or the fonts hosted locally.',
      ],
      [
        'WhatsApp and PayPal',
        'WhatsApp is currently an external contact link. Contact and order details submitted through WhatsApp are used to handle the enquiry. PayPal payments are envisaged, but no PayPal payment module is integrated into this website. Specific recipient details, transfer conditions and retention periods must be added before this policy is finalized.',
      ],
    ],
    agb: [
      ['Möbel Montage – Kostiantyn Kryvorotov', 'Last updated: October 2026'],
      [
        '§ 1 Scope',
        '(1) These general terms and conditions apply to contracts between Möbel Montage, owner Kostiantyn Kryvorotov, hereinafter the “Contractor”, and its customers for assembly and disassembly services.\n\n(2) Customers may be consumers within the meaning of section 13 BGB or businesses within the meaning of section 14 BGB.\n\n(3) Individual agreements between the Contractor and the customer take precedence over these terms.',
      ],
      [
        '§ 2 Scope of services',
        '(1) The Contractor offers in particular:\n\n- Furniture assembly and disassembly\n- Assembly of wardrobes, shelves, beds, tables and other furniture\n- Assembly of IKEA furniture systems\n- Installation and fastening of furniture and furnishings\n- Installation of curtain rods, blinds, mirrors and similar items\n- Other individually agreed installation work\n\n(2) The specific scope is defined by the quotation or individual agreement with the customer.\n\n(3) Additional work not previously agreed is carried out only after consultation with the customer and may be charged separately.\n\n(4) Work requiring special statutory authorization or professional qualifications is excluded where those requirements are not met.',
      ],
      [
        '§ 3 Contract formation',
        '(1) Enquiries via the website, email or telephone are initially non-binding.\n\n(2) A contract is formed by acceptance of a specific quotation or another binding agreement between the parties.\n\n(3) The scope, assembly location, remuneration and appointment are agreed individually.',
      ],
      [
        '§ 4 Prices and payment',
        '(1) As agreed, charges are calculated on an hourly basis or at a fixed price.\n\n(2) Where hourly payment is agreed, the actual time worked is charged at the agreed hourly rate.\n\n(3) Travel, parking, materials and other additional expenses are charged only if agreed in advance.\n\n(4) Additional work or changes to the original scope may result in adjusted remuneration. The customer is informed before the additional work is carried out.\n\n(5) Payment is due within 14 days after completion of the work, subject to acceptance of the agreed work and receipt of an invoice, unless otherwise validly agreed.\n\n(6) Payment may be made in cash, by bank transfer or via PayPal as individually agreed.',
      ],
      [
        '§ 5 Customer obligations',
        '(1) The customer ensures that the furniture and parts required for assembly are available at the agreed place and time.\n\n(2) The assembly area must be freely accessible and provide sufficient space for safe work.\n\n(3) Before work starts, the customer informs the Contractor about known site conditions, particularly concealed utilities, unstable walls and other apparent hazards.\n\n(4) Missing or damaged parts and unsuitable assembly conditions may delay or prevent the work.\n\n(5) Necessary additional measures are agreed with the customer.',
      ],
      [
        '§ 6 Wall fixings',
        '(1) Wall fixings are carried out taking account of the apparent condition of the substrate and the technical requirements of the items being installed.\n\n(2) Before work starts, the customer must provide known information about the wall structure and concealed utilities.\n\n(3) If there are doubts about load-bearing capacity or safety, the Contractor may suspend work until the conditions are clarified or refuse an unsafe installation.\n\n(4) Statutory liability claims remain unaffected.',
      ],
      [
        '§ 7 Appointments and delays',
        '(1) Both parties must observe agreed appointments.\n\n(2) If rescheduling is necessary, the affected party informs the other as early as possible.\n\n(3) In unforeseen circumstances, particularly illness, serious traffic disruption or force majeure, an alternative appointment will be agreed where possible.\n\n(4) Statutory claims arising from delays remain unaffected.',
      ],
      [
        '§ 8 Acceptance and defects',
        '(1) After completion of the agreed work, acceptance takes place in accordance with statutory provisions.\n\n(2) The customer may inspect the completed work and report apparent defects.\n\n(3) Valid defect claims are governed by statutory warranty rights, in particular sections 633 et seq. BGB.\n\n(4) The Contractor must be given the opportunity to provide the remedy required by law.',
      ],
      [
        '§ 9 Liability',
        '(1) The Contractor is liable under statutory provisions for damage caused intentionally or through gross negligence.\n\n(2) For a slightly negligent breach of essential contractual obligations, liability is limited to foreseeable damage typical of the contract.\n\n(3) These limitations do not apply to injury to life, body or health, or where liability is mandatory by law.\n\n(4) The customer’s statutory rights, particularly warranty rights, remain unaffected.',
      ],
      [
        '§ 10 Right of withdrawal',
        'Consumers may have a statutory right of withdrawal for distance contracts and contracts concluded away from business premises.\n\nDetails are provided in the separate withdrawal information.',
      ],
      [
        '§ 11 Final provisions',
        '(1) The law of the Federal Republic of Germany applies, subject to mandatory statutory consumer protection provisions.\n\n(2) If any provision of these terms is or becomes invalid, the remaining provisions remain effective. Statutory rules replace invalid provisions.\n\n(3) Individual contractual agreements take precedence.',
      ],
    ],
    widerruf: [
      [
        'Right of withdrawal',
        'For distance contracts and contracts concluded away from business premises, consumers generally have the right to withdraw from the contract within fourteen days without giving any reason, unless a statutory exception applies.\n\nThe withdrawal period is fourteen days from the date the contract is concluded.\n\nTo exercise your right of withdrawal, you must inform us:\n\nMöbel Montage\nKostiantyn Kryvorotov\nPaulstr. 7\n53639 Königswinter\nGermany\n\nPhone: 0176 218 55 005\nEmail: fatuglyaces@gmail.com\n\nof your decision to withdraw from this contract by an unambiguous statement, for example by letter or email.\n\nYou may use the model withdrawal form below, but this is not mandatory.\n\nTo meet the withdrawal deadline, it is sufficient to send your communication before the withdrawal period expires.',
      ],
      [
        'Effects of withdrawal',
        'If you withdraw from this contract, we must refund all payments received from you without undue delay and no later than fourteen days from the day we receive your withdrawal notice.\n\nWe will use the same payment method used for the original transaction unless expressly agreed otherwise. You will not incur any fees as a result of the refund.\n\nIf you requested that services begin during the withdrawal period, you must pay a reasonable amount proportionate to the services already provided up to the time of your withdrawal compared with the full scope of services under the contract, provided the statutory requirements for such compensation are met.',
      ],
      [
        'Early expiry of the right of withdrawal',
        'For a service contract, the right of withdrawal may expire early under the statutory conditions once the service has been fully performed.\n\nIn particular, before performance begins, the consumer must expressly consent to the trader starting work before the withdrawal period expires and acknowledge that the right of withdrawal will be lost once the contract has been fully performed.',
      ],
      [
        'Model withdrawal form',
        'If you wish to withdraw from the contract, you may complete this form and return it to us.\n\nTo:\n\nMöbel Montage\nKostiantyn Kryvorotov\nPaulstr. 7\n53639 Königswinter\nEmail: fatuglyaces@gmail.com\n\nI/We (*) hereby give notice that I/we (*) withdraw from my/our (*) contract for the provision of the following service:\n____________________________\n\nOrdered on:\n____________________________\n\nName of consumer(s):\n____________________________\n\nAddress of consumer(s):\n____________________________\n\nDate:\n____________________________\n\nSignature (only for notices on paper):\n____________________________\n\n(*) Delete as appropriate.',
      ],
    ],
  },
};
