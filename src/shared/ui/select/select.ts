import { expect, Locator } from '@playwright/test';

import { BaseComponent } from 'components/base';

import { SelectProps } from './types';

export class Select extends BaseComponent {
  readonly option: Locator;
  readonly activeOption: Locator;

  constructor(props: SelectProps) {
    const rootLocator = props.page.locator(props.selectors.root);
    super({ page: props.page, locator: rootLocator });

    this.option = rootLocator.getByRole('option');
    this.activeOption = props.page.locator(props.selectors.activeOption);
  }

  async getOptions() {
    return await this.option.allTextContents();
  }

  async expectVisible() {
    await expect(this.getLocator()).toBeVisible();
  }

  async expectSelectedOption(option: string) {
    await expect(this.activeOption).toHaveText(option);
  }

  async expectOptions(options: string[]) {
    const currentOptions = await this.getOptions();

    expect(currentOptions).toEqual(options);
  }

  async selectOption(option: string) {
    await this.getLocator().selectOption(option);
  }
}
