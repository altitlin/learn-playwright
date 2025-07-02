import { Page } from '@playwright/test';

export interface SelectProps {
  page: Page;
  selectors: {
    root: string;
    activeOption: string;
  };
}
