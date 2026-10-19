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
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
        while (walker.nextNode()) {
          for (const [before, after] of replacements) {
            walker.currentNode.textContent = walker.currentNode.textContent.replaceAll(
              before,
              after,
            );
          }
        }
      },
      [
        ['Verpackung entsorgt', 'Verpackung ordentlich zusammengelegt'],
        ['Verpackung mitgenommen.', 'Verpackung ordentlich zusammengelegt.'],
        ['Verpackung wurde mitgenommen', 'Verpackung wurde ordentlich zusammengelegt'],
        ['упаковку винесено', 'упаковку акуратно складено'],
        ['Упаковку забрано.', 'Упаковку акуратно складено.'],
        ['Упаковку забрали', 'Упаковку акуратно склали'],
        ['packaging removed', 'packaging neatly folded'],
        ['Packaging taken away.', 'Packaging neatly folded.'],
        ['Packaging was taken away', 'Packaging was neatly folded'],
      ],
    );
    // Approved biography: updated region and one sentence per line.
    await original.evaluate(
      (biographies) => {
        const biography = document.querySelector('.philosophy-bio');
        biography.textContent = biographies[document.documentElement.lang];
        biography.style.whiteSpace = 'pre-line';
      },
      {
        de: 'Seit 2025 in Nordrhein-Westfalen.\nÜber 300 abgeschlossene Montagen.\nVier Sprachen, ein Standard.',
        uk: 'У Північному Рейні-Вестфалії з 2025 року.\nПонад 300 завершених збірок.\nЧотири мови, один стандарт.',
        en: 'Working in North Rhine-Westphalia since 2025.\nOver 300 completed assemblies.\nFour languages, one standard.',
      },
    );
    // Approved Ukrainian services copy and emphasis.
    if (language === 'UK') {
      await original.evaluate(() => {
        const lead = document.createElement('strong');
        lead.textContent = 'Три напрями, один стандарт.';
        const summary = document.createElement('span');
        summary.className = 'services-summary';
        summary.textContent = 'Від окремого столика до повністю вбудованої кухні.';
        const closing = document.createElement('strong');
        closing.textContent = 'Чисто. Вчасно. З письмовою гарантією.';
        document
          .querySelector('#leistungen .section-head > .desc')
          .replaceChildren(
            lead,
            document.createElement('br'),
            summary,
            document.createElement('br'),
            closing,
          );
      });
      await expect(page.locator('#leistungen .section-head > .desc strong')).toHaveCount(2);
      await expect(page.locator('#leistungen .section-head > .desc br')).toHaveCount(2);
    }
    await original.addStyleTag({
      content:
        '\n/* Give the Ukrainian service summary its natural width on desktop. */\n@media (min-width: 1280px) {\n  html[lang="uk"] #leistungen .section-head {\n    grid-template-columns: minmax(0, 1fr) max-content;\n  }\n  html[lang="uk"] #leistungen .section-head > .desc { max-width: none; }\n  html[lang="uk"] #leistungen .services-summary { white-space: nowrap; }\n}\n',
    });
    // German services use the same three-line emphasis as Ukrainian.
    if (language === 'DE') {
      await original.evaluate(() => {
        const lead = document.createElement('strong');
        lead.textContent = 'Drei Disziplinen, ein Standard.';
        const summary = document.createElement('span');
        summary.className = 'services-summary';
        summary.textContent = 'Vom einzelnen Beistelltisch bis zur kompletten Einbauküche.';
        const closing = document.createElement('strong');
        closing.textContent = 'Sauber. Pünktlich. Schriftlich garantiert.';
        document
          .querySelector('#leistungen .section-head > .desc')
          .replaceChildren(
            lead,
            document.createElement('br'),
            summary,
            document.createElement('br'),
            closing,
          );
      });
      await expect(page.locator('#leistungen .section-head > .desc strong')).toHaveCount(2);
      await expect(page.locator('#leistungen .section-head > .desc br')).toHaveCount(2);
    }
    await original.addStyleTag({
      content:
        '\n@media (min-width: 1280px) {\n  html[lang="de"] #leistungen .section-head { grid-template-columns: minmax(0, 1fr) max-content; }\n  html[lang="de"] #leistungen .section-head > .desc { max-width: none; }\n  html[lang="de"] #leistungen .services-summary { white-space: nowrap; }\n}\n',
    });
    await original.addStyleTag({
      content:
        '.philosophy-pull { color: var(--ink); } .philosophy-pull em { color: rgb(255, 140, 0); }',
    });
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
      '#referenzen',
      '.testimonial',
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
