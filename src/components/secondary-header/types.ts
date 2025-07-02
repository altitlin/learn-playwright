import { Page } from '@playwright/test';

import { SelectProps } from 'shared/ui/select';

interface Selectors {
  root: string;
  title: string;
  sortDropdown: SelectProps['selectors'];
}

export interface SecondaryHeaderProps {
  page: Page;
  selectors: Selectors;
}
