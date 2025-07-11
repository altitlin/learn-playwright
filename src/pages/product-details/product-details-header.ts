import { expect, Page } from '@playwright/test';

import { BaseComponent } from 'components/base';
import { Button } from 'shared/ui/button';

interface Props {
  page: Page;
  selectors: {
    root: string;
    buttonBack: string;
  };
}

export class ProductDetailsHeader extends BaseComponent {
  readonly buttonBack: Button;

  constructor(props: Props) {
    const rootLocator = props.page.locator(props.selectors.root);
    super({ page: props.page, locator: rootLocator });

    this.buttonBack = new Button({
      page: props.page,
      selectors: {
        root: props.selectors.buttonBack,
      },
      locator: rootLocator.locator(props.selectors.buttonBack),
    });
  }

  async expectVisible() {
    await expect(this.getLocator()).toBeVisible();
  }

  async onBackToProductsClick() {
    await this.buttonBack.expectLabel('Back to products');
    await this.buttonBack.onClick();
  }
}
