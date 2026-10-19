import { test, expect } from '@playwright/test';

for (const language of ['DE', 'UA', 'EN']) {
  test(`${language} service summary stays on one desktop line and wraps on small screens`, async ({
    page,
  }) => {
    await page.goto('/');
    await page.getByRole('button', { name: language, exact: true }).click();
    await expect(page.locator('#leistungen .section-head > .desc strong')).toHaveCount(2);
    await expect(page.locator('#leistungen .section-head > .desc br')).toHaveCount(2);
    const widths = page.viewportSize().width >= 1280 ? [1440, 1280] : [page.viewportSize().width];
    for (const width of widths) {
      await page.setViewportSize({ width, height: 1000 });
      const summary = page.locator('.services-summary');
      const metrics = await summary.evaluate((el) => {
        const range = document.createRange();
        range.selectNodeContents(el);
        const rects = [...range.getClientRects()];
        return {
          lines: new Set(rects.map((r) => r.top)).size,
          left: Math.min(...rects.map((r) => r.left)),
          right: Math.max(...rects.map((r) => r.right)),
        };
      });
      if (width >= 1280) expect(metrics.lines).toBe(1);
      else {
        await expect(summary).toHaveCSS('white-space', 'normal');
        if (width <= 390) expect(metrics.lines).toBeGreaterThan(1);
      }
      expect(metrics.left).toBeGreaterThanOrEqual(20);
      expect(metrics.right).toBeLessThanOrEqual(width - 20);
    }
  });
}
