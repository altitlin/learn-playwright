import { expect } from '@playwright/test';

import { BaseComponent } from 'components/base';

import { InputProps } from './types';

export class Input extends BaseComponent {
  constructor(props: InputProps) {
    const rootLocator = props.locator ?? props.page.locator(props.selectors.root);
    super({ page: props.page, locator: rootLocator });
  }

  async expectPlaceholder(placeholder: string) {
    const currentPlaceholder = await this.getLocator().getAttribute('placeholder');

    expect(currentPlaceholder).toBe(placeholder);
  }

  async onFill(value: string) {
    await this.fill(value);
  }
}
