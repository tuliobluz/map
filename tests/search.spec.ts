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

    await search.submitSearch('Lodon')
    await expect(search.headlineMain(testData.directionSearch)).toBeVisible();

    await search.clickDirection();
    await expect(search.destination(testData.destination)).toBeVisible();
  });
});
