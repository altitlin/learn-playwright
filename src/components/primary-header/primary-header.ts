import { expect, Locator } from '@playwright/test';

import { BaseComponent } from 'components/base';

import { PrimaryHeaderProps } from './types';

export class PrimaryHeader extends BaseComponent {
  readonly burgerMenu: Locator;
  readonly cartLink: Locator;
  readonly cartBadge: Locator;

  constructor(props: PrimaryHeaderProps) {
    const rootLocator = props.page.locator(props.selectors.root);
    super({ page: props.page, locator: rootLocator });

    this.burgerMenu = rootLocator.locator(props.selectors.burgerMenu);
    this.cartLink = rootLocator.locator(props.selectors.cartLink);
    this.cartBadge = rootLocator.locator(props.selectors.cartBadge);
  }

  async expectVisible() {
    await expect(this.burgerMenu).toBeVisible();
    await expect(this.cartLink).toBeVisible();
  }

  async expectCartEmpty() {
    await expect(this.cartBadge).toHaveCount(0);
  }

  async expectCartCount(count: number) {
    await expect(this.cartBadge).toHaveText(String(count));
  }
}
