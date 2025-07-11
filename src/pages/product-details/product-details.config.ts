const SELECTORS_PRIMARY_HEADER = {
  root: '[data-test="primary-header"]',
  burgerMenu: '[id="react-burger-menu-btn"]',
  cartLink: '[data-test="shopping-cart-link"]',
  cartBadge: '[data-test="shopping-cart-badge"]',
};

const SELECTORS_PRODUCT_DETAILS_HEADER = {
  root: '[data-test="secondary-header"]',
  buttonBack: '[data-test="back-to-products"]',
};

const SELECTORS_PRODUCT_CARD = {
  root: '[data-test="inventory-item"]',
  title: '[data-test="inventory-item-name"]',
  price: '[data-test="inventory-item-price"]',
  button: '.btn',
};

export const SELECTORS = {
  primaryHeader: SELECTORS_PRIMARY_HEADER,
  productDetailsHeader: SELECTORS_PRODUCT_DETAILS_HEADER,
  productCard: SELECTORS_PRODUCT_CARD,
};
