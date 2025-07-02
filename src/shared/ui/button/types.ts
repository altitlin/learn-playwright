import { Page, Locator } from '@playwright/test';

export interface ButtonProps {
  page: Page;
  selectors: {
    root: string;
  };
  locator?: Locator;
}
