import { test, expect } from 'fixtures/test-setup';
import { PRODUCTS_PAGE_TAG } from 'shared/constants/tags';

test.describe('Products page', { tag: PRODUCTS_PAGE_TAG }, () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.login(process.env.USERNAME, process.env.PASSWORD);
  });

  test('should properly render a list of products', async ({ productsPage }) => {

  });
});
