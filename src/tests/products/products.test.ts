import { test } from 'fixtures/test-setup';
import { PRODUCTS_PAGE_TAG } from 'shared/constants/tags';

import {
  TITLE_PRODUCTS_PAGE,
  OPTIONS_SORT_DROPDOWN,
  OPTION_PRICE_LOW_TO_HIGH,
  OPTION_NAME_Z_A,
} from './products.config';

test.describe('Products page', { tag: PRODUCTS_PAGE_TAG }, () => {
  test('should render primary and secondary header', async ({ productsPage }) => {
    await productsPage.primaryHeader.expectVisible();
    await productsPage.secondaryHeader.expectTitle(TITLE_PRODUCTS_PAGE);
    await productsPage.secondaryHeader.expectSortDropdownSelectedOption(OPTIONS_SORT_DROPDOWN[0]);
    await productsPage.secondaryHeader.expectSortDropdown(OPTIONS_SORT_DROPDOWN);
  });

  test('should display product list correctly', async ({ productsPage }) => {
    await productsPage.productList.expectVisible();

    const productCard = productsPage.productList.getProductCard(0);
    const title = await productCard.getTitle();
    const price = await productCard.getPrice();

    await productCard.expectTitle(title as string);
    await productCard.expectPrice(price);
  });

  test('should properly sort product by price (low to high)', async ({ productsPage }) => {
    await productsPage.secondaryHeader.selectSortDropdownOption(OPTION_PRICE_LOW_TO_HIGH);
    await productsPage.secondaryHeader.expectSortDropdownSelectedOption(OPTION_PRICE_LOW_TO_HIGH);
    await productsPage.productList.expectSortedByPrice();
  });

  test('should properly sort product by name (Z to A)', async ({ productsPage }) => {
    await productsPage.secondaryHeader.selectSortDropdownOption(OPTION_NAME_Z_A);
    await productsPage.secondaryHeader.expectSortDropdownSelectedOption(OPTION_NAME_Z_A);
    await productsPage.productList.expectSortedByName();
  });

  test('should properly add product to cart', async ({ productsPage }) => {
    const productCard = productsPage.productList.getProductCard(0);

    await productCard.addToCart();
    await productsPage.primaryHeader.expectCartCount(1);
  });

  test('should properly remove product from cart', async ({ productsPage }) => {
    const productCard = productsPage.productList.getProductCard(0);

    await productCard.addToCart();
    await productCard.removeFromCart();
    await productsPage.primaryHeader.expectCartEmpty();
  });

  test('should navigate to product details when clicking on product title', async ({ productsPage, page }) => {
    const productCard = productsPage.productList.getProductCard(0);
    const title = await productCard.getTitle() as string;

    await productCard.clickOnTitle();
    // await expect(page.locator(SELECTORS.productCardTitle)).toHaveText(title);
  });
});
