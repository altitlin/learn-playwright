import { expect, Page, Locator } from '@playwright/test';

import { Button } from 'shared/ui/button';
import { Input } from 'shared/ui/input';

import { SELECTORS } from './login-page.config';

export class LoginPage {
  readonly page: Page;
  readonly inputUsername: Input;
  readonly inputPassword: Input;
  readonly buttonLogin: Button;
  readonly notificationError: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inputUsername = new Input({
      page,
      selectors: { root: SELECTORS.username },
    });
    this.inputPassword = new Input({
      page,
      selectors: { root: SELECTORS.password },
    });
    this.buttonLogin = new Button({
      page,
      selectors: { root: SELECTORS.loginButton },
    });
    this.notificationError = page.locator(SELECTORS.notificationError);
  }

  async goTo() {
    await this.page.goto('/');
  }

  async fillUsername(username: string) {
    await this.inputUsername.expectPlaceholder('Username');
    await this.inputUsername.onFill(username);
  }

  async fillPassword(password: string) {
    await this.inputPassword.expectPlaceholder('Password');
    await this.inputPassword.onFill(password);
  }

  async clickOnLoginButton() {
    await this.buttonLogin.onClick();
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

  async login(username: string, password: string) {
    await this.goTo();
    await this.fillUsername(username);
    await this.fillPassword(password);
    await this.clickOnLoginButton();
  }
}
