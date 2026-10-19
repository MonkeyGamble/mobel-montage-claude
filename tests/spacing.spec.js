import { test, expect } from '@playwright/test';

test('content keeps both page gutters at desktop, tablet and mobile widths', async ({
  page,
}, testInfo) => {
  const widths =
    testInfo.project.name === 'desktop'
      ? [1440, 1340, 1339, 1280, 1024, 880]
      : [page.viewportSize().width];
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  for (const width of widths) {
    await page.setViewportSize({ width, height: 1000 });
    for (const language of ['DE', 'UK', 'EN']) {
      await page
        .getByRole('button', { name: language === 'UK' ? 'UA' : language, exact: true })
        .click();
      for (const selector of ['.section.wrap', '.testimonial.wrap']) {
        const gutters = await page.locator(selector).evaluateAll((sections) =>
          sections.map((section) => {
            const style = getComputedStyle(section);
            const box = section.getBoundingClientRect();
            const left = parseFloat(style.paddingLeft);
            const right = parseFloat(style.paddingRight);
            return { left, right, contentLeft: box.left + left, contentRight: box.right - right };
          }),
        );
        expect(gutters.length).toBeGreaterThan(0);
        for (const gutter of gutters) {
          expect(gutter.left, `${language} ${width}px left`).toBeGreaterThanOrEqual(20);
          expect(gutter.right, `${language} ${width}px right`).toBeGreaterThanOrEqual(20);
          expect(gutter.contentLeft).toBeGreaterThanOrEqual(20);
          expect(gutter.contentRight).toBeLessThanOrEqual(width - 20);
        }
      }
    }
  }
});
