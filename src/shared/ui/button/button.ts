import { expect } from '@playwright/test';

import { BaseComponent } from 'components/base';

import { ButtonProps } from './types';

export class Button extends BaseComponent {
  constructor(props: ButtonProps) {
    const rootLocator = props.locator ?? props.page.locator(props.selectors.root);
    super({ page: props.page, locator: rootLocator });
  }

  async expectLabel(label: string) {
    const currentLabel = await this.getLocator().textContent();

    expect(currentLabel).toBe(label);
  }

  async onClick() {
    await this.click();
  }
}
