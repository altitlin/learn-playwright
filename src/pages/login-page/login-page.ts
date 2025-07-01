import { expect, type Page, type Locator } from '@playwright/test';

import { SELECTORS } from './login-page.config';

export class LoginPage {
  readonly page: Page;
  readonly inputUsername: Locator;
  readonly inputPassword: Locator;
  readonly buttonLogin: Locator;
  readonly notificationError: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inputUsername = page.locator(SELECTORS.username);
    this.inputPassword = page.locator(SELECTORS.password);
    this.buttonLogin = page.locator(SELECTORS.loginButton);
    this.notificationError = page.locator(SELECTORS.notificationError);
  }

  async goTo() {
    await this.page.goto('/');
  }

  async fillUsername(username: string) {
    await this.inputUsername.fill(username);
  }

  async fillPassword(password: string) {
    await this.inputPassword.fill(password);
  }

  async clickOnLoginButton() {
    await this.buttonLogin.click();
  }

  async expectNotificationErrorHidden() {
    await expect(this.notificationError).toHaveCount(0);
  }

  async expectNotificationErrorVisible() {
    await expect(this.notificationError).toBeVisible();
  }

  async hasNotificationErrorText(text: string) {
    await expect(this.notificationError).toHaveText(text);
  }
}
