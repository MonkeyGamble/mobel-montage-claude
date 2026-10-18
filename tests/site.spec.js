import { test, expect } from '@playwright/test';
import { TRANSLATIONS } from '../src/translations.js';

test('layout, graphics, translations, persistence and scroll controls', async ({ page }) => {
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(message.text());
  });
  // External fonts are optional; do not make network availability a test dependency.
  await page.route('https://fonts.googleapis.com/**', (route) =>
    route.fulfill({ body: '', contentType: 'text/css' }),
  );
  await page.goto('/');
  await expect(page.locator('main > section')).toHaveCount(10);
  await expect(page.locator('.hero-img')).toBeVisible();
  expect(
    await page.locator('.hero-img').evaluate((img) => img.complete && img.naturalWidth > 0),
  ).toBe(true);
  await expect(page.locator('.catalog svg')).toHaveCount(3);
  await expect(page.locator('.process svg')).toHaveCount(4);
  // Overall overflow is compared to the original in parity.spec.js.
  expect((await page.locator('main').boundingBox()).width).toBeLessThanOrEqual(
    page.viewportSize().width,
  );
  await page.getByRole('button', { name: 'UK', exact: true }).click();
  await expect(page.locator('html')).toHaveAttribute('lang', 'uk');
  await expect(page.locator('.hero .sub')).toHaveText(TRANSLATIONS.UK.hero.sub);
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('lang', 'uk');
  await page.locator('.hero-ctas a').click();
  await expect(page).toHaveURL(/#kontakt$/);
  await expect(page.locator('.nav')).toHaveClass('nav solid');
  await expect(page.locator('.fab')).toHaveClass('fab visible');
  await page.getByRole('button', { name: 'DE', exact: true }).click();
  await expect(page.locator('html')).toHaveAttribute('lang', 'de');
  await expect(page.locator('.hero .sub')).toHaveText(TRANSLATIONS.DE.hero.sub);
  expect(errors).toEqual([]);
});

test('archive filters and FAQ keyboard interaction survive language changes', async ({ page }) => {
  await page.goto('/');
  for (const [cat, count] of [
    ['PAX', 3],
    ['Küche', 1],
    ['Büro', 2],
    ['Kinderzimmer', 1],
    ['Custom', 2],
    ['all', 9],
  ]) {
    await page.locator(`.pill[data-cat="${cat}"]`).click();
    await expect(page.locator('.arch-card')).toHaveCount(count);
    await expect(page.locator('.archive-counter')).toContainText(
      `${String(count).padStart(2, '0')} / 09`,
    );
  }
  const questions = page.locator('.faq-q');
  await expect(questions.nth(0)).toHaveAttribute('aria-expanded', 'true');
  await questions.nth(1).focus();
  await page.keyboard.press('Enter');
  await expect(questions.nth(0)).toHaveAttribute('aria-expanded', 'false');
  await expect(questions.nth(1)).toHaveAttribute('aria-expanded', 'true');
  await page.keyboard.press('Space');
  await expect(page.locator('.faq-item.open')).toHaveCount(0);
  await questions.nth(2).click();
  await page.locator('.pill[data-cat="PAX"]').click();
  await page.getByRole('button', { name: 'UK', exact: true }).click();
  await expect(page.locator('.arch-card')).toHaveCount(3);
  await expect(questions.nth(2)).toHaveAttribute('aria-expanded', 'true');
  await expect(questions.nth(2)).toContainText(TRANSLATIONS.UK.faq.items[2].q);
});

test('contact fields, local file selection, demo feedback and direct links', async ({ page }) => {
  await page.goto('/');
  await page.locator('#contact-name').fill('Test Kunde');
  await page.locator('#contact-phone').fill('+49 123456789');
  await page.locator('#contact-description').fill('<script>alert(1)</script> PAX montage');
  await page.locator('#contact-location').fill('Bonn');
  await page.locator('input[type=file]').setInputFiles({
    name: 'test.pdf',
    mimeType: 'application/pdf',
    buffer: Buffer.from('%PDF-1.4 test'),
  });
  await page.getByRole('button', { name: 'UK', exact: true }).click();
  await expect(page.locator('#contact-name')).toHaveValue('Test Kunde');
  expect(await page.locator('input[type=file]').evaluate((input) => input.files[0].name)).toBe(
    'test.pdf',
  );
  await page.locator('button.submit').click();
  await expect(page.locator('.submit-text')).toHaveText(TRANSLATIONS.UK.kontakt.submitted);
  await expect(page.locator('.contact-direct a').nth(0)).toHaveAttribute(
    'href',
    'https://wa.me/4917621855005',
  );
  await expect(page.locator('.contact-direct a').nth(1)).toHaveAttribute(
    'href',
    'tel:+4917621855005',
  );
  await expect(page.locator('.contact-direct a').nth(2)).toHaveAttribute(
    'href',
    'mailto:fatuglyaces@gmail.com',
  );
});

test('invalid or unavailable local storage falls back to DE', async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem('mm-lang', 'invalid'));
  await page.goto('/');
  await expect(page.locator('html')).toHaveAttribute('lang', 'de');
  await page.addInitScript(() => {
    Storage.prototype.getItem = () => {
      throw new Error('Storage blocked');
    };
    Storage.prototype.setItem = () => {
      throw new Error('Storage blocked');
    };
  });
  await page.reload();
  await page.getByRole('button', { name: 'UK', exact: true }).click();
  await expect(page.locator('html')).toHaveAttribute('lang', 'uk');
});
