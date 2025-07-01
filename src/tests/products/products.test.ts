import { test, expect } from 'fixtures/test-setup';
import { PRODUCTS_PAGE_TAG } from 'shared/constants/tags';

test.describe('Products page', { tag: PRODUCTS_PAGE_TAG }, () => {
  test('should correctly display', async ({ loginPage, page }) => {
    await loginPage.goTo();

  });
});
