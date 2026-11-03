import { test, expect } from '@playwright/test';
const key = 'mm-cookie-consent';
test('banner supports all languages, rejection, persistence and reopening', async ({ page }) => {
  const tracking = [];
  page.on('request', (request) => {
    if (/google-analytics\.com|googletagmanager\.com/.test(request.url()))
      tracking.push(request.url());
  });
  await page.goto('/');
  const banner = page.locator('.cookie-banner');
  await expect(banner).toBeVisible();
  for (const [code, title] of [
    ['UA', 'Ваша конфіденційність'],
    ['EN', 'Your privacy'],
    ['DE', 'Ihre Privatsphäre'],
  ]) {
    await page.getByRole('button', { name: code, exact: true }).click();
    await expect(banner.locator('h2')).toHaveText(title);
  }
  const box = await banner.boundingBox();
  expect(box.x).toBeGreaterThanOrEqual(0);
  expect(box.x + box.width).toBeLessThanOrEqual(page.viewportSize().width + 1);
  await page.screenshot({
    path: test.info().outputPath('cookie-banner.png'),
    animations: 'disabled',
    timeout: 10000,
  });
  await banner.getByRole('button', { name: 'Nur notwendige', exact: true }).click();
  await expect(banner).toHaveCount(0);
  await page.reload();
  await expect(banner).toHaveCount(0);
  await page.locator('.footer .cookie-settings-link').click();
  await expect(banner).toBeVisible();
  await expect(banner.locator('input').first()).toBeChecked();
  await expect(banner.locator('input').last()).not.toBeChecked();
  await expect(banner.locator('input').last()).toBeDisabled();
  await banner.getByRole('button', { name: 'Alle akzeptieren', exact: true }).click();
  expect(await page.evaluate((key) => JSON.parse(localStorage.getItem(key)).analytics, key)).toBe(
    false,
  );
  expect(tracking).toEqual([]);
});
test('legal information is accessible without a consent decision', async ({ page }) => {
  await page.goto('/');
  await page.locator('.cookie-banner a[href="#/datenschutz"]').click();
  await expect(page.locator('.legal-page h1')).toHaveText('Datenschutz');
  await expect(page.locator('.cookie-banner')).toHaveCount(0);
  expect(await page.evaluate((key) => localStorage.getItem(key), key)).toBeNull();
  await page.locator('.legal-contact .cookie-settings-link').click();
  await expect(page.locator('#cookie-title')).toBeFocused();
  await page.locator('.cookie-banner').getByRole('button', { name: 'Auswahl speichern' }).click();
  await expect(page.locator('.legal-contact .cookie-settings-link')).toBeFocused();
});
test('invalid, expired and unavailable storage fail safely', async ({ page }) => {
  await page.goto('/');
  await page.evaluate((key) => localStorage.setItem(key, '{bad-json'), key);
  await page.reload();
  await expect(page.locator('.cookie-banner')).toBeVisible();
  await page.evaluate(
    (key) =>
      localStorage.setItem(
        key,
        JSON.stringify({ version: 1, necessary: true, analytics: false, updatedAt: 0 }),
      ),
    key,
  );
  await page.reload();
  await expect(page.locator('.cookie-banner')).toBeVisible();
  await page.addInitScript(() => {
    Storage.prototype.setItem = () => {
      throw new Error('blocked');
    };
  });
  await page.reload();
  await page
    .locator('.cookie-banner')
    .getByRole('button', { name: 'Nur notwendige', exact: true })
    .click();
  await expect(page.locator('.cookie-banner')).toHaveCount(0);
  await expect(page.locator('.cookie-storage-note')).toBeVisible();
});

test('orange banner gates every order field until acceptance', async ({ page }) => {
  await page.goto('/');
  const banner = page.locator('.cookie-banner');
  await expect(banner).toHaveCSS('background-color', 'rgb(255, 140, 0)');
  const fields = page.locator('#contact-form input, #contact-form textarea, #contact-form button');
  for (const field of await fields.all()) await expect(field).toBeDisabled();
  await banner.getByRole('button', { name: 'Nur notwendige', exact: true }).click();
  for (const field of await fields.all()) await expect(field).toBeDisabled();
  await page.locator('.form-cookie-notice button').click();
  await banner.getByRole('button', { name: 'Alle akzeptieren', exact: true }).click();
  for (const field of await fields.all()) await expect(field).toBeEnabled();
  await page.locator('#contact-name').fill('Test');
  await expect(page.locator('#contact-name')).toHaveValue('Test');
  await page.reload();
  for (const field of await fields.all()) await expect(field).toBeEnabled();
  await page.locator('.footer .cookie-settings-link').click();
  await banner.getByRole('button', { name: 'Nur notwendige', exact: true }).click();
  for (const field of await fields.all()) await expect(field).toBeDisabled();
});
