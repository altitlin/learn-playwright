import { test, expect } from '@playwright/test';

const TEST_USERNAME = 'standard_user';
const TEST_LOCKED_OUT_USERNAME = 'locked_out_user';
const TEST_PASSWORD = 'secret_sauce';
const TEST_PRODUCTS_URL = 'inventory.html';

test.describe('Login page', () => {
  test('User should correclty login', async ({ page }) => {
    await page.goto('/');
    await page.locator('[id="user-name"]').fill(TEST_USERNAME);
    await page.locator('[id="password"]').fill(TEST_PASSWORD);
    await page.locator('[id="login-button"]').click();
    await page.waitForURL(`/${TEST_PRODUCTS_URL}`);
  });

  test('User should view a notification error when there is no filling field', async ({ page }) => {
    await page.goto('/');
    await page.locator('[id="user-name"]').fill('');
    await page.locator('[id="password"]').fill('');

    const notificationError = page.locator('[data-test="error"]');

    await expect(notificationError).toBeHidden();
    await page.locator('[id="login-button"]').click();
    await expect(notificationError).toBeVisible();
    await expect(notificationError).toHaveText('Epic sadface: Username is required');
  });

  test('User should view a notification error when it is locked out', async ({ page }) => {
    await page.goto('/');
    await page.locator('[id="user-name"]').fill(TEST_LOCKED_OUT_USERNAME);
    await page.locator('[id="password"]').fill(TEST_PASSWORD);

    const notificationError = page.locator('[data-test="error"]');

    await expect(notificationError).toBeHidden();
    await page.locator('[id="login-button"]').click();
    await expect(notificationError).toBeVisible();
    await expect(notificationError).toHaveText('Epic sadface: Sorry, this user has been locked out.');
  });
});
