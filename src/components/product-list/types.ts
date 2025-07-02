import { Page } from '@playwright/test';

import { ProductCardProps } from 'components/product-card';

export interface Selectors {
  root: string;
  productCard: ProductCardProps['selectors'];
}

export interface ProductListProps {
  page: Page;
  selectors: Selectors;
}
