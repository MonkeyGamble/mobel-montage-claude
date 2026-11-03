import { test, expect } from '@playwright/test';

test('reviews move left, pause on hover and resume without jumping', async ({ page }) => {
  await page.goto('/');
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  const window = page.locator('.reviews-window');
  const track = page.locator('.reviews-track');
  await window.scrollIntoViewIfNeeded();
  await page.mouse.move(0, 0);
  const x = () => track.evaluate((el) => new DOMMatrix(getComputedStyle(el).transform).m41);
  const before = await x();
  await page.waitForTimeout(350);
  expect(await x()).toBeLessThan(before - 1);
  await window.hover();
  await expect(track).toHaveCSS('animation-play-state', 'paused');
  const stopped = await x();
  await page.waitForTimeout(250);
  expect(Math.abs((await x()) - stopped)).toBeLessThan(1);
  await page.mouse.move(0, 0);
  await page.waitForTimeout(250);
  expect(await x()).toBeLessThan(stopped - 1);
  await window.focus();
  await expect(track).toHaveCSS('animation-play-state', 'paused');
  await window.evaluate((el) => el.blur());
  await expect(track).toHaveCSS('animation-play-state', 'running');
  const groups = page.locator('.reviews-group');
  const first = await groups.nth(0).boundingBox();
  const second = await groups.nth(1).boundingBox();
  expect(Math.abs(second.x - first.x - first.width)).toBeLessThan(1);
  expect(Math.abs(first.width - second.width)).toBeLessThan(1);
  await page.screenshot({ path: test.info().outputPath('reviews.png') });
});

test('all languages preserve review ratings and support reduced motion', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  for (const [language, title] of [
    ['DE', 'Bewertungen'],
    ['UA', 'Відгуки клієнтів'],
    ['EN', 'Customer reviews'],
  ]) {
    await page.getByRole('button', { name: language, exact: true }).click();
    await expect(page.locator('#reviews-title')).toHaveText(title);
    await expect(page.locator('.reviews-group').first().locator('.review-card')).toHaveCount(9);
    await expect(
      page.locator('.reviews-group').first().locator('[aria-label="4 / 5"]'),
    ).toHaveCount(0);
    await expect(page.locator('.reviews-track')).toHaveCSS('animation-name', 'none');
    await expect(page.locator('.reviews-group').nth(1)).toBeHidden();
    const viewport = page.locator('.reviews-window');
    const scroll = await viewport.evaluate((el) => {
      el.scrollLeft = 500;
      return el.scrollLeft;
    });
    expect(scroll).toBeGreaterThan(0);
    const bounds = await viewport.boundingBox();
    expect(bounds.x).toBeGreaterThanOrEqual(0);
    expect(bounds.x + bounds.width).toBeLessThanOrEqual(page.viewportSize().width + 1);
    const widths = await page.evaluate(() => {
      const section = document.querySelector('.testimonial');
      const withReviews = document.documentElement.scrollWidth;
      section.style.display = 'none';
      const withoutReviews = document.documentElement.scrollWidth;
      section.style.display = '';
      return { withReviews, withoutReviews };
    });
    expect(widths.withReviews).toBe(widths.withoutReviews);
  }
});

test('arrows move in both directions and wrap with reduced motion', async ({ page }) => {
  await page.goto('/');
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  const controls = page.locator('.reviews-controls button');
  const track = page.locator('.reviews-track');
  await controls.first().focus();
  const time = () => track.evaluate((el) => Number(el.getAnimations()[0].currentTime));
  const before = await time();
  await controls.last().click();
  expect(await time()).toBeGreaterThan(before + 1000);
  await controls.first().click();
  expect(Math.abs((await time()) - before)).toBeLessThan(1);
  await expect(page.locator('.review-card h3').filter({ hasText: 'Möbelmontage' })).toHaveCount(0);
  await page.emulateMedia({ reducedMotion: 'reduce' });
  const viewport = page.locator('.reviews-window');
  await controls.last().click();
  expect(await viewport.evaluate((el) => el.scrollLeft)).toBeGreaterThan(0);
  await controls.first().click();
  expect(await viewport.evaluate((el) => el.scrollLeft)).toBe(0);
  await controls.first().click();
  expect(await viewport.evaluate((el) => el.scrollLeft)).toBeGreaterThan(1000);
  await controls.last().click();
  expect(await viewport.evaluate((el) => el.scrollLeft)).toBe(0);
});
