import { test, expect } from '@playwright/test';

test('service icons are visible and fit their containers in every language', async ({
  page,
}, testInfo) => {
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto('/');
  for (const language of ['DE', 'UA', 'EN']) {
    await page.getByRole('button', { name: language, exact: true }).click();
    const icons = page.locator('#leistungen .drawing svg');
    await expect(icons).toHaveCount(3);
    for (let i = 0; i < 3; i++) {
      const icon = icons.nth(i);
      await expect(icon).toBeVisible();
      const box = await icon.boundingBox();
      expect(box.width).toBe(64);
      expect(box.height).toBe(64);
      const fits = await icon.evaluate((svg) => {
        const bounds = svg.getBBox();
        return (
          bounds.x >= 0 &&
          bounds.y >= 0 &&
          bounds.x + bounds.width <= 80 &&
          bounds.y + bounds.height <= 80
        );
      });
      expect(fits).toBe(true);
      if (language === 'DE' && testInfo.project.name === 'desktop') {
        await icon.screenshot({ path: testInfo.outputPath(`service-${i + 1}.png`), scale: 'css' });
      }
    }
  }
  expect(errors).toEqual([]);
});
