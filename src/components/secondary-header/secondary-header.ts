import { expect, Locator } from '@playwright/test';

import { Select } from 'shared/ui/select';
import { BaseComponent } from 'components/base';

import { SecondaryHeaderProps } from './types';

export class SecondaryHeader extends BaseComponent {
  readonly title: Locator;
  readonly sortDropdown: Select;

  constructor(props: SecondaryHeaderProps) {
    const rootLocator = props.page.locator(props.selectors.root);
    super({ page: props.page, locator: rootLocator });

    this.title = rootLocator.locator(props.selectors.title);
    this.sortDropdown = new Select({
      page: props.page,
      selectors: props.selectors.sortDropdown,
    });
  }

  async expectTitle(title: string) {
    await expect(this.title).toHaveText(title);
  }

  async expectSortDropdown(options: string[]) {
    await this.sortDropdown.expectVisible()
    await this.sortDropdown.expectOptions(options);
  }

  async expectSortDropdownSelectedOption(option: string) {
    await this.sortDropdown.expectSelectedOption(option);
  }

  async selectSortDropdownOption(option: string) {
    await this.sortDropdown.selectOption(option);
  }
}
