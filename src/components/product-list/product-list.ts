import { expect } from '@playwright/test';

import { BaseComponent } from 'components/base';
import { ProductCard } from 'components/product-card';

import { Selectors, ProductListProps } from './types';

export class ProductList extends BaseComponent {
  readonly productCard: ProductCard;
  readonly selectors: Selectors;

  constructor(props: ProductListProps) {
    const rootLocator = props.page.locator(props.selectors.root);
    super({ page: props.page, locator: rootLocator });

    this.productCard = new ProductCard({
      page: props.page,
      selectors: props.selectors.productCard,
    });
    this.selectors = props.selectors;
  }

  async expectVisible() {
    await expect(this.getLocator()).toBeVisible();
    await this.productCard.expectCountGreaterThan(0);
  }

  async expectSortedByPrice() {
    const productCards = await this.getProductCards();
    const prices = await Promise.all(
      productCards.map((productCard) => productCard.getPrice())
    );
    const sorted = [...prices].sort((a, b) => a - b);

    expect(prices).toEqual(sorted);
  }

  async expectSortedByName() {
    const productCards = await this.getProductCards();
    const titles = await Promise.all(
      productCards.map((productCard) => productCard.getTitle())
    ) as string[];
    const sorted = [...titles].sort((a, b) => b.localeCompare(a));

    expect(titles).toEqual(sorted);
  }

  getProductCard(index: number) {
    const { productCard } = this.selectors;
    const cardLocator = this.getLocator().locator(productCard.root).nth(index);

    return new ProductCard({
      page: this.props.page,
      selectors: this.selectors.productCard,
      locator: cardLocator,
    });
  }

  async getProductCards() {
    const count = await this.productCard.getCount();
    const productCards: ProductCard[] = [];

    for (let i = 0; i < count; i++) {
      productCards.push(this.getProductCard(i));
    }

    return productCards;
  }
}
