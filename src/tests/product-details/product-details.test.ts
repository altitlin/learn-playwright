import { test } from 'fixtures/test-setup';
import { PRODUCT_DETAILS_TAG } from 'shared/constants/tags';

test.describe('Product details', { tag: PRODUCT_DETAILS_TAG }, () => {
  test('should render correctly', async ({ productsPage, productDetailsPage }) => {
    const productCard = productsPage.productList.getProductCard(0);

    await productsPage.productList.expectVisible();
    await productCard.clickOnTitle();
    await productDetailsPage.primaryHeader.expectVisible();
    await productDetailsPage.productDetailsHeader.expectVisible();
    await productDetailsPage.productCard.expectVisible();

    const title = await productDetailsPage.productCard.getTitle();
    const price = await productDetailsPage.productCard.getPrice();

    await productDetailsPage.productCard.expectTitle(title);
    await productDetailsPage.productCard.expectPrice(price);
  });

  test('should return to all products by clicking on back button', async ({ productsPage, productDetailsPage }) => {
    const productCard = productsPage.productList.getProductCard(0);

    await productsPage.productList.expectVisible();
    await productCard.clickOnTitle();
    await productDetailsPage.productCard.expectVisible();
    await productDetailsPage.productDetailsHeader.onBackToProductsClick();
    await productsPage.productList.expectVisible();
  });

  test('should properly add product to cart', async ({ productsPage, productDetailsPage }) => {
    const productCard = productsPage.productList.getProductCard(0);

    await productsPage.productList.expectVisible();
    await productCard.clickOnTitle();
    await productDetailsPage.productCard.addToCart();
    await productDetailsPage.primaryHeader.expectCartCount(1);
  });

  test('should properly remove product from cart', async ({ productsPage, productDetailsPage }) => {
    const productCard = productsPage.productList.getProductCard(0);

    await productsPage.productList.expectVisible();
    await productCard.clickOnTitle();
    await productDetailsPage.productCard.addToCart();
    await productDetailsPage.productCard.removeFromCart();
    await productDetailsPage.primaryHeader.expectCartEmpty();
  });
});
