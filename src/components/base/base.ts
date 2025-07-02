import { Page, Locator } from '@playwright/test';

interface Props {
  page: Page;
  locator: Locator;
}

export abstract class BaseComponent {
  protected readonly props: Props;

  constructor(props: Props) {
    this.props = props;
  }

  protected getLocator() {
    return this.props.locator;
  }

  protected async click() {
    await this.getLocator().click();
  }

  protected async fill(value: string) {
    await this.getLocator().fill(value);
  }
}
