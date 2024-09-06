import { test, expect } from '@playwright/test';

test.describe('User search location', async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('');
  });
  test('basic', async ({ page }) => {
    const newTodo = await page.getByTestId('searchboxinput');

    await newTodo.fill('Paris');
    await page.getByTestId('searchbox-searchbutton').click();

    await expect(page
      .getByRole('main')
      .filter({ hasText: 'Paris' })).toBeVisible();
  });

  test('with directions', async ({ page }) => {
    const newTodo = await page.getByTestId('searchboxinput');

    await newTodo.fill('London');
    await page.getByTestId('searchbox-searchbutton').click();

    const headline = page
      .getByRole('main')
      .filter({ hasText: 'London' });

    await expect(headline).toBeVisible;

    await page.getByText('Directions').click();

    const destination = page
      .getByRole('listitem')
      .filter({ hasText: 'London' });

    await expect(destination).toBeVisible();
  });
});
