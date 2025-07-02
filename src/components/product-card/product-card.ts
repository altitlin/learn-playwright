import { expect, Locator } from '@playwright/test';

import { BaseComponent } from 'components/base';
import { Button } from 'shared/ui/button';

import { ProductCardProps } from './types';

export class ProductCard extends BaseComponent {
  readonly title: Locator;
  readonly price: Locator;
  readonly button: Button;

  constructor(props: ProductCardProps) {
    const rootLocator = props.locator ?? props.page.locator(props.selectors.root);
    super({ page: props.page, locator: rootLocator });

    this.title = rootLocator.locator(props.selectors.title);
    this.price = rootLocator.locator(props.selectors.price);
    this.button = new Button({
      page: props.page,
      selectors: { root: props.selectors.button },
      locator: rootLocator.locator(props.selectors.button),
    });
  }

  async getTitle() {
    return await this.title.textContent() ?? '';
  }

  async getPrice() {
    const text = await this.price.textContent();

    return parseFloat(text?.replace('$', '') ?? '0');
  }

  async getCount() {
    return await this.getLocator().count();
  }

  async expectVisible() {
    await expect(this.getLocator()).toBeVisible();
  }

  async expectCountGreaterThan(count: number) {
    const currentCount = await this.getCount();
    expect(currentCount).toBeGreaterThan(count);
  }

  async expectTitle(title: string) {
    const currentTitle = await this.getTitle();
    expect(currentTitle).toBe(title);
  }

  async expectPrice(price: number) {
    const currentPrice = await this.getPrice();
    expect(currentPrice).toBe(price);
  }

  async addToCart() {
    await this.button.expectLabel('Add to cart');
    await this.button.onClick();
    await this.button.expectLabel('Remove');
  }

  async removeFromCart() {
    await this.button.expectLabel('Remove');
    await this.button.onClick();
    await this.button.expectLabel('Add to cart');
  }

  async clickOnTitle() {
    await this.title.click();
  }
}
