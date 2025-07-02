import { Page, Locator } from '@playwright/test';

export interface InputProps {
  page: Page;
  selectors: {
    root: string;
  };
  locator?: Locator;
}
