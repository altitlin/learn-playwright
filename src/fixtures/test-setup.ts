import { test as base } from '@playwright/test';

import { LoginPage } from 'pages/login-page';
import { ProductsPage } from 'pages/products-page';

interface Fixtures {
  loginPage: LoginPage;
  productsPage: ProductsPage;
}

export { expect } from '@playwright/test';

export const test = base.extend<Fixtures>({
  loginPage: async ({ page }, use) => await use(new LoginPage(page)),
  productsPage: async ({ page }, use) => await use(new ProductsPage(page)),
});
