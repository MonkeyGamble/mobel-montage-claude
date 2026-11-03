import { test, expect } from '@playwright/test';
const ids = ['impressum', 'datenschutz', 'agb', 'widerruf'];
test('legal pages open from footer, switch languages, reload and return home', async ({ page }) => {
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.route('https://fonts.googleapis.com/**', (route) =>
    route.fulfill({ body: '', contentType: 'text/css' }),
  );
  await page.goto('/');
  for (const id of ids) {
    await page.locator(`.footer a[href="#/${id}"]`).click();
    await expect(page.locator('.legal-page h1')).toBeVisible();
    await expect(page.locator('.legal-draft')).toBeVisible();
    await expect(page.locator('.legal-document section')).not.toHaveCount(0);
    await page.reload();
    await expect(page.locator('.legal-page h1')).toBeVisible();
    for (const [label, htmlLang] of [
      ['UA', 'uk'],
      ['EN', 'en'],
      ['DE', 'de'],
    ]) {
      await page.getByRole('button', { name: label, exact: true }).click();
      await expect(page.locator('html')).toHaveAttribute('lang', htmlLang);
      expect(
        await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1),
      ).toBe(true);
    }
    await page.locator('.legal-back').click();
    await expect(page.locator('.hero')).toBeVisible();
  }
  expect(errors).toEqual([]);
});
test('legal navigation supports browser history and homepage contact link', async ({ page }) => {
  await page.goto('/#/impressum');
  await page.locator('.legal-tabs a[href="#/datenschutz"]').click();
  await expect(page.locator('.legal-page h1')).toHaveText('Datenschutz');
  await page.goBack();
  await expect(page.locator('.legal-page h1')).toHaveText('Impressum');
  await page.locator('.legal-contact a[href="#kontakt"]').click();
  await expect(page.locator('#kontakt')).toBeInViewport();
});
