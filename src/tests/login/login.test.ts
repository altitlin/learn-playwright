import { test, expect } from 'fixtures/test-setup';
import { LOGIN_PAGE_TAG } from 'shared/constants/tags';

const URL_PRODUCTS_PAGE = '/inventory.html';
const MESSAGE_ERROR_LOGIN = 'Epic sadface: Username is required';
const MESSAGE_ERROR_LOGIN_LOCKED_USER = 'Epic sadface: Sorry, this user has been locked out.';

test.describe('Login page', { tag: LOGIN_PAGE_TAG }, () => {
  test('User should correclty login', async ({ loginPage, page }) => {
    await loginPage.goTo();
    await loginPage.fillUsername(process.env.USERNAME);
    await loginPage.fillPassword(process.env.PASSWORD);
    await loginPage.clickOnLoginButton();
    await expect(page).toHaveURL(URL_PRODUCTS_PAGE);
  });

  test('User should view a notification error when there is no filling field', async ({ loginPage }) => {
    await loginPage.goTo();
    await loginPage.fillUsername('');
    await loginPage.fillPassword('');
    await loginPage.expectNotificationErrorHidden();
    await loginPage.clickOnLoginButton();
    await loginPage.expectNotificationErrorVisible();
    await loginPage.hasNotificationErrorText(MESSAGE_ERROR_LOGIN);
  });

  test('User should view a notification error when it is locked out', async ({ loginPage }) => {
    await loginPage.goTo();
    await loginPage.fillUsername(process.env.LOCKED_OUT_USERNAME);
    await loginPage.fillPassword(process.env.PASSWORD);
    await loginPage.expectNotificationErrorHidden();
    await loginPage.clickOnLoginButton();
    await loginPage.expectNotificationErrorVisible();
    await loginPage.hasNotificationErrorText(MESSAGE_ERROR_LOGIN_LOCKED_USER);
  });
});
