import { Page, Locator } from '@playwright/test';

interface Selectors {
  root: string;
  title: string;
  price: string;
  button: string;
}

export interface ProductCardProps {
  page: Page;
  selectors: Selectors;
  locator?: Locator;
}
