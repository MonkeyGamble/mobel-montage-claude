import { test, expect } from '@playwright/test';
import { execFileSync } from 'node:child_process';
import { createServer } from 'node:http';

const baseline = '4db232f26fe0507f447ca81a321596dc5d3bbfe8';
let server;
let baselineURL;
test.beforeAll(async () => {
  const files = new Map(['index.html', 'styles.css', 'app.js', 'i18n.js', 'icons.js', 'drawings.js', 'assets/schrank-hero.png'].map(path => [path, execFileSync('git', ['show', `${baseline}:${path}`], { maxBuffer: 5 * 1024 * 1024 })]));
  server = createServer((req, res) => {
    const path = new URL(req.url, 'http://localhost').pathname.slice(1) || 'index.html';
    const data = files.get(path);
    if (!data) { res.writeHead(404).end(); return; }
    res.setHeader('Content-Type', path.endsWith('.js') ? 'text/javascript' : path.endsWith('.css') ? 'text/css' : path.endsWith('.png') ? 'image/png' : 'text/html');
    res.end(data);
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  baselineURL = `http://127.0.0.1:${server.address().port}`;
});
test.afterAll(async () => { if (server) await new Promise(resolve => server.close(resolve)); });

for (const language of ['DE', 'UK']) {
  test(`matches original content and layout in ${language}`, async ({ page, context }, testInfo) => {
    await context.route('https://fonts.googleapis.com/**', route => route.fulfill({ body: '', contentType: 'text/css' }));
    await context.addInitScript(lang => localStorage.setItem('mm-lang', lang), language);
    const original = await context.newPage();
    await original.goto(baselineURL);
    await page.goto('/');
    for (const tab of [original, page]) {
      await tab.emulateMedia({ reducedMotion: 'reduce' });
      await tab.addStyleTag({ content: '*, *::before, *::after { animation: none !important; transition: none !important; scroll-behavior: auto !important; }' });
      await tab.locator('.hero-img').evaluate(img => img.decode());
    }
    const overflow = tab => tab.evaluate(() => ({ width: innerWidth, scrollWidth: document.documentElement.scrollWidth, elements: [...document.querySelectorAll('body *')].filter(e => e.getBoundingClientRect().right > innerWidth + 1).map(e => e.className).filter(c => typeof c === 'string') }));
    const beforeOverflow = await overflow(original);
    const afterOverflow = await overflow(page);
    expect(afterOverflow.scrollWidth).toBe(beforeOverflow.scrollWidth);
    const selectors = ['.nav', '.hero', '.hero-frame', '.hero-img', '.hero .display', '.standards', '#philosophie', '#leistungen', '#archiv', '#ablauf', '#referenzen', '.testimonial', '#faq', '#kontakt', '.footer'];
    for (const selector of selectors) {
      const normalize = text => text.replace(/\s+/g, '');
      expect(normalize(await page.locator(selector).innerText()), selector).toBe(normalize(await original.locator(selector).innerText()));
      const before = await original.locator(selector).boundingBox();
      const after = await page.locator(selector).boundingBox();
      for (const dimension of ['x', 'y', 'width', 'height']) expect(Math.abs(before[dimension] - after[dimension]), `${selector}.${dimension}`).toBeLessThanOrEqual(2);
    }
    const svgGeometry = tab => tab.locator('main svg').evaluateAll(svgs => svgs.map(svg => [...svg.querySelectorAll('*')].map(node => ({ tag: node.tagName, attrs: Object.fromEntries([...node.attributes].map(a => [a.name, a.value])), text: node.textContent.trim() }))));
    expect(await svgGeometry(page)).toEqual(await svgGeometry(original));
    await original.screenshot({ path: testInfo.outputPath('original.png'), fullPage: true });
    await page.screenshot({ path: testInfo.outputPath('react.png'), fullPage: true });
    await page.screenshot({ path: testInfo.outputPath('react-hero.png') });
    await original.close();
  });
}
