import { test, expect } from '@playwright/test';
import { SearchPage } from '../pages/search'

const testData = require("../resources/testData").testData;

test.describe('User search location', async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('');
  });
  test('basic', async ({ page }) => {
    const search = new SearchPage(page);

    await search.submitSearch(testData.basicSearch)
    await expect(search.headlineMain(testData.basicSearch)).toBeVisible();
  });

  test('with directions', async ({ page }) => {
    const search = new SearchPage(page);

    await search.submitSearch(testData.directionSearch)
    await expect(search.headlineMain(testData.directionSearch)).toBeVisible();

    await search.clickDirection();
    await expect(search.destination(testData.destination)).toBeVisible();
  });

  test('that does not exist', async ({ page }) => {
    const search = new SearchPage(page);

    await search.submitSearch('wh3r3 y0u l00k1ng f0r')
    await expect(search.locatorText('Google Maps can\'t find wh3r3 y0u l00k1ng f0r')).toBeVisible();
  });
});
