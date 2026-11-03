import { test, expect } from '@playwright/test';
import { execFileSync } from 'node:child_process';
import { createServer } from 'node:http';

const baseline = '4db232f26fe0507f447ca81a321596dc5d3bbfe8';
let server;
let baselineURL;
test.beforeAll(async () => {
  const files = new Map(
    [
      'index.html',
      'styles.css',
      'app.js',
      'i18n.js',
      'icons.js',
      'drawings.js',
      'assets/schrank-hero.png',
    ].map((path) => [
      path,
      execFileSync('git', ['show', `${baseline}:${path}`], { maxBuffer: 5 * 1024 * 1024 }),
    ]),
  );
  server = createServer((req, res) => {
    const path = new URL(req.url, 'http://localhost').pathname.slice(1) || 'index.html';
    const data = files.get(path);
    if (!data) {
      res.writeHead(404).end();
      return;
    }
    res.setHeader(
      'Content-Type',
      path.endsWith('.js')
        ? 'text/javascript'
        : path.endsWith('.css')
          ? 'text/css'
          : path.endsWith('.png')
            ? 'image/png'
            : 'text/html',
    );
    res.end(data);
  });
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  baselineURL = `http://127.0.0.1:${server.address().port}`;
});
test.afterAll(async () => {
  if (server) await new Promise((resolve) => server.close(resolve));
});

for (const language of ['DE', 'UK']) {
  test(`matches original content and layout in ${language}`, async ({
    page,
    context,
  }, testInfo) => {
    await context.route('https://fonts.googleapis.com/**', (route) =>
      route.fulfill({ body: '', contentType: 'text/css' }),
    );
    await context.addInitScript((lang) => localStorage.setItem('mm-lang', lang), language);
    const original = await context.newPage();
    await original.goto(baselineURL);
    await page.goto('/');
    for (const tab of [original, page]) {
      await tab.emulateMedia({ reducedMotion: 'reduce' });
      await tab.addStyleTag({
        content:
          '*, *::before, *::after { animation: none !important; transition: none !important; scroll-behavior: auto !important; }',
      });
      await tab.locator('.hero-img').evaluate((img) => img.decode());
    }
    // Approved header copy change; keep the rest of the original visual baseline.
    await expect(page.locator('.wordmark .sub')).toHaveText('NRW');
    await original.locator('.wordmark .sub').evaluate((label) => {
      label.textContent = 'NRW';
    });
    await original.evaluate(() => {
      document.querySelector('.hero-meta > div:nth-child(2) span').textContent = 'NRW';
      const rail = document.querySelector('.hero-rail .v');
      rail.textContent = rail.textContent.replace(/Bonn|Бонн/, 'NRW');
      const specLabel = document.querySelector('.hero-spec > div:nth-child(3)').firstChild;
      specLabel.textContent = specLabel.textContent.replace('Innenausstattung', 'Inneneinrichtung');
      if (document.documentElement.lang === 'de') {
        document.querySelector('.hero-spec > div:nth-child(3) strong').textContent = 'ab 35 €';
      }
      document.querySelector('.standard:nth-child(2) strong').textContent = 'Nordrhein-Westfalen';
      document.querySelector('.lang-switch button:nth-child(2)').textContent = 'UA';
      const brand = document.querySelector(
        '#leistungen .catalog-row:nth-child(2) .includes li:last-child',
      );
      brand.textContent =
        document.documentElement.lang === 'de' ? 'OTTO und weitere' : 'OTTO та інші';
      brand.style.textTransform = 'none';
      const button = document.createElement('button');
      button.textContent = 'EN';
      document.querySelector('.lang-switch').append(button);
      const label = document.querySelector('.footer-col:last-child p');
      label.lastChild.textContent = label.lastChild.textContent.replace('DE · UK', 'DE · UK · EN');
    });
    // Approved gutter fix: the original shorthand erased container side padding.
    await original.addStyleTag({
      content: '.section.wrap, .testimonial.wrap { padding-inline: var(--pad); }',
    });
    // Approved copy change: packaging is folded neatly, not removed.
    await original.evaluate(
      (replacements) => {
        const walker = document.createTreeWalker(
          document.querySelector('#faq'),
          NodeFilter.SHOW_TEXT,
        );
        while (walker.nextNode()) {
          for (const [before, after] of replacements)
            walker.currentNode.textContent = walker.currentNode.textContent.replace(before, after);
        }
      },
      [
        [
          '100 km um Bonn. Das umfasst Köln, Bad Godesberg, Siegburg, Hennef, Königswinter, Bornheim, Troisdorf und Sankt Augustin. Bei größeren Aufträgen auch darüber hinaus — fragen Sie einfach an.',
          'Ich arbeite in ganz Nordrhein-Westfalen. Bei größeren Aufträgen auch darüber hinaus — fragen Sie einfach an.',
        ],
        [
          '100 км навколо Бонна. Це Кельн, Бад-Ґодесберґ, Зіґбурґ, Геннеф, Кенігсвінтер, Борнгайм, Тройсдорф і Санкт-Авґустін. За більших замовлень — і далі, просто запитайте.',
          'Працюю по всій Північній Рейн-Вестфалії. За більших замовлень — і далі, просто запитайте.',
        ],
        [
          'Within 100 km of Bonn, including Köln, Bad Godesberg, Siegburg, Hennef, Königswinter, Bornheim, Troisdorf and Sankt Augustin. For larger jobs, I also travel further — just ask.',
          'I work throughout North Rhine-Westphalia. For larger jobs, I also travel further — just ask.',
        ],
      ],
    );
    await original.evaluate(() =>
      document.querySelector('.contact-direct a[href^="tel:"]').remove(),
    );
    await original.addStyleTag({
      content:
        '.contact-direct { grid-template-columns: repeat(2, 1fr); } @media (max-width: 760px) { .contact-direct { grid-template-columns: 1fr; } }',
    });
    await original.locator('.footer').evaluate((element) => {
      const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
      while (walker.nextNode()) {
        walker.currentNode.textContent = walker.currentNode.textContent
          .replace('У Бонні з 2025 року.', 'У NRW з 2025 року.')
          .replace('Seit 2025 in Bonn.', 'Seit 2025 in NRW.')
          .replace('Based in Bonn since 2025.', 'Based in NRW since 2025.');
      }
    });
    await original
      .locator('.footer-col')
      .first()
      .locator('p')
      .evaluate((element) => {
        element.textContent = element.textContent.replace('. ', '.\n');
        element.style.whiteSpace = 'pre-line';
      });
    await original.locator('.footer-col h4').evaluateAll((headings) => {
      for (const heading of headings)
        heading.textContent = heading.textContent
          .replace('Зона · 100 км', 'Зона · увесь NRW')
          .replace('Gebiet · 100 km', 'Gebiet · ganz NRW')
          .replace('Area · 100 km', 'Area · all of NRW');
    });
    await original.evaluate(
      (cities) => {
        const list = document.querySelector('.footer .mono-list');
        list.replaceChildren(
          ...cities[document.documentElement.lang].map((city) => {
            const item = document.createElement('div');
            item.textContent = city;
            return item;
          }),
        );
      },
      {
        de: [
          'Köln',
          'Düsseldorf',
          'Dortmund',
          'Essen',
          'Duisburg',
          'Bochum',
          'Wuppertal',
          'Bielefeld',
        ],
        uk: [
          'Кельн',
          'Дюссельдорф',
          'Дортмунд',
          'Ессен',
          'Дуйсбург',
          'Бохум',
          'Вупперталь',
          'Білефельд',
        ],
        en: [
          'Cologne',
          'Düsseldorf',
          'Dortmund',
          'Essen',
          'Duisburg',
          'Bochum',
          'Wuppertal',
          'Bielefeld',
        ],
      },
    );
    await original.locator('.footer-mega').evaluate((element) => element.remove());
    await original.locator('.footer-bottom span').evaluateAll((spans) => {
      for (const span of spans)
        span.textContent = span.textContent
          .replace('© 2026 Möbel Montage Bonn', '© 2026 Möbel Montage NRW')
          .replace('Made in Bonn ·', 'Made in NRW ·')
          .replace('Зроблено в Бонні ·', 'Зроблено в NRW ·');
    });
    await original.locator('#faq .faq-a').evaluateAll(
      (answers, replacements) => {
        for (const answer of answers)
          for (const [before, after] of replacements)
            answer.textContent = answer.textContent.replace(before, after);
      },
      [
        [
          'Zahlung per Überweisung mit 14 Tagen Ziel.',
          'Zahlung per Banküberweisung, bar oder per PayPal innerhalb von 14 Tagen nach Ausführung der Arbeiten.',
        ],
        [
          'Оплата переказом з відстрочкою 14 днів.',
          'Оплата банківським переказом, готівкою або через PayPal протягом 14 днів після виконання робіт.',
        ],
        [
          'Payment by bank transfer within 14 days.',
          'Payment by bank transfer, cash or PayPal within 14 days after completion of the work.',
        ],
      ],
    );
    const overflow = (tab) =>
      tab.evaluate(() => ({
        width: innerWidth,
        scrollWidth: document.documentElement.scrollWidth,
        elements: [...document.querySelectorAll('body *')]
          .filter((e) => e.getBoundingClientRect().right > innerWidth + 1)
          .map((e) => e.className)
          .filter((c) => typeof c === 'string'),
      }));
    const beforeOverflow = await overflow(original);
    const afterOverflow = await overflow(page);
    expect(afterOverflow.scrollWidth).toBe(beforeOverflow.scrollWidth);
    const selectors = [
      '.nav',
      '.hero',
      '.hero-frame',
      '.hero-img',
      '.hero .display',
      '.standards',
      '#philosophie',
      '#leistungen',
      '#archiv',
      '#ablauf',
      '#faq',
      '#kontakt',
      '.footer',
    ];
    for (const selector of selectors) {
      const normalize = (text) => text.replace(/\s+/g, '');
      expect(normalize(await page.locator(selector).innerText()), selector).toBe(
        normalize(await original.locator(selector).innerText()),
      );
      const before = await original.locator(selector).boundingBox();
      const after = await page.locator(selector).boundingBox();
      for (const dimension of ['x', 'y', 'width', 'height'])
        expect(
          Math.abs(before[dimension] - after[dimension]),
          `${selector}.${dimension}`,
        ).toBeLessThanOrEqual(2);
    }
    const svgGeometry = (tab) =>
      tab.locator('.process svg').evaluateAll((svgs) =>
        svgs.map((svg) =>
          [...svg.querySelectorAll('*')].map((node) => ({
            tag: node.tagName,
            attrs: Object.fromEntries([...node.attributes].map((a) => [a.name, a.value])),
            text: node.textContent.trim(),
          })),
        ),
      );
    expect(await svgGeometry(page)).toEqual(await svgGeometry(original));
    await original.screenshot({ path: testInfo.outputPath('original.png'), fullPage: true });
    await page.screenshot({ path: testInfo.outputPath('react.png'), fullPage: true });
    await page.screenshot({ path: testInfo.outputPath('react-hero.png') });
    await original.close();
  });
}
