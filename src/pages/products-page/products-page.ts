import { Page } from '@playwright/test';

import { PrimaryHeader } from 'components/primary-header';
import { SecondaryHeader } from 'components/secondary-header';
import { ProductList } from 'components/product-list';

import { SELECTORS } from './products-page.config';

export class ProductsPage {
  readonly page: Page;
  readonly primaryHeader: PrimaryHeader;
  readonly secondaryHeader: SecondaryHeader;
  readonly productList: ProductList

  constructor(page: Page) {
    this.page = page;
    this.primaryHeader = this.createPrimaryHeader();
    this.secondaryHeader = this.createSecondaryHeader();
    this.productList = this.createProductList();
  }

  createPrimaryHeader() {
    return new PrimaryHeader({
      page: this.page,
      selectors: SELECTORS.primaryHeader
    });
  }

  createSecondaryHeader() {
    return new SecondaryHeader({
      page: this.page,
      selectors: SELECTORS.secondaryHeader,
    });
  }

  createProductList() {
    return new ProductList({
      page: this.page,
      selectors: SELECTORS.productList,
    });
  }
}
