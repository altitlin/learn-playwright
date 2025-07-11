import { test as base } from '@playwright/test';

import { LoginPage } from 'pages/login-page';
import { ProductDetailsPage } from 'pages/product-details';
import { ProductsPage } from 'pages/products-page';

interface Fixtures {
  loginPage: LoginPage;
  productsPage: ProductsPage;
  productDetailsPage: ProductDetailsPage;
}

export { expect } from '@playwright/test';

export const test = base.extend<Fixtures>({
  loginPage: async ({ page }, use) => await use(new LoginPage(page)),
  productsPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);

    await loginPage.login(process.env.USERNAME, process.env.PASSWORD);
    await use(new ProductsPage(page));
  },
  productDetailsPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);

    await loginPage.login(process.env.USERNAME, process.env.PASSWORD);
    await use(new ProductDetailsPage(page));
  },
});
