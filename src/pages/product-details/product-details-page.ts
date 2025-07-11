import { Page } from '@playwright/test';

import { PrimaryHeader } from 'components/primary-header';
import { ProductCard } from 'components/product-card';

import { SELECTORS } from './product-details.config';
import { ProductDetailsHeader } from './product-details-header';

export class ProductDetailsPage {
  readonly page: Page;
  readonly primaryHeader: PrimaryHeader;
  readonly productDetailsHeader: ProductDetailsHeader;
  readonly productCard: ProductCard;

  constructor(page: Page) {
    this.page = page;
    this.primaryHeader = this.createPrimaryHeader();
    this.productDetailsHeader = this.createProductDetailsHeader();
    this.productCard = this.createProductCard();
  }

  createPrimaryHeader() {
    return new PrimaryHeader({
      page: this.page,
      selectors: SELECTORS.primaryHeader,
    });
  }

  createProductDetailsHeader() {
    return new ProductDetailsHeader({
      page: this.page,
      selectors: SELECTORS.productDetailsHeader,
    });
  }

  createProductCard() {
    return new ProductCard({
      page: this.page,
      selectors: SELECTORS.productCard,
    });
  }
}
