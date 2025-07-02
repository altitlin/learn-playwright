import { Page } from '@playwright/test';

interface Selectors {
  root: string;
  burgerMenu: string;
  cartLink: string;
  cartBadge: string;
}

export interface PrimaryHeaderProps {
  page: Page;
  selectors: Selectors;
}
