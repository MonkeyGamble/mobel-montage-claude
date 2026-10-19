import { test, expect } from '@playwright/test';
import { TRANSLATIONS } from '../src/translations.js';

test('English content, persistence, filters, FAQ and preserved form state', async ({ page }) => {
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto('/');
  await page.locator('#contact-name').fill('Alex');
  await page.getByRole('button', { name: 'EN', exact: true }).click();
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await expect(page.locator('#contact-name')).toHaveValue('Alex');
  await expect(page.locator('.hero .sub')).toHaveText(TRANSLATIONS.EN.hero.sub);
  await expect(page.locator('.wordmark .sub')).toHaveText('NRW');
  await expect(page.locator('#leistungen')).toContainText('Other brands');
  await expect(page.locator('#referenzen')).toContainText('Complete new-home furnishing');
  await expect(page.locator('.footer')).toContainText('DE · UK · EN');
  await expect(page.locator('#ablauf svg text').last()).toHaveText('DONE');
  await page.locator('.pill[data-cat="Küche"]').click();
  await expect(page.locator('.arch-card')).toHaveCount(1);
  await expect(page.locator('.arch-card')).toContainText('2 days');
  await expect(page.locator('.arch-card')).toContainText('Kitchen');
  await page.locator('.faq-q').nth(1).click();
  await expect(page.locator('.faq-item.open')).toContainText('Which cities do you cover?');
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await expect(page.getByRole('button', { name: 'EN', exact: true })).toHaveAttribute(
    'aria-pressed',
    'true',
  );
  const button = await page.getByRole('button', { name: 'EN', exact: true }).boundingBox();
  expect(button.x + button.width).toBeLessThanOrEqual(page.viewportSize().width);
  for (const [code, language] of [
    ['UK', 'uk'],
    ['DE', 'de'],
  ]) {
    await page.getByRole('button', { name: code, exact: true }).click();
    await expect(page.locator('html')).toHaveAttribute('lang', language);
  }
  expect(errors).toEqual([]);
});
