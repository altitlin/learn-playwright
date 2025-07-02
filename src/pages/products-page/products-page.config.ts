const SELECTORS_PRIMARY_HEADER = {
  root: '[data-test="primary-header"]',
  burgerMenu: '[id="react-burger-menu-btn"]',
  cartLink: '[data-test="shopping-cart-link"]',
  cartBadge: '[data-test="shopping-cart-badge"]',
};

const SELECTORS_SORT_DROPDOWN = {
  root: '[data-test="product-sort-container"]',
  activeOption: '[data-test="active-option"]',
};

const SELECTORS_SECONDARY_HEADER = {
  root: '[data-test="secondary-header"]',
  title: '[data-test="title"]',
  sortDropdown: SELECTORS_SORT_DROPDOWN,
};

const SELECTORS_PRODUCT_CARD = {
  root: '[data-test="inventory-item"]',
  title: '[data-test="inventory-item-name"]',
  price: '[data-test="inventory-item-price"]',
  button: '.btn',
};

const SELECTORS_PRODUCT_LIST = {
  root: '[data-test="inventory-list"]',
  productCard: SELECTORS_PRODUCT_CARD,
};

export const SELECTORS = {
  primaryHeader: SELECTORS_PRIMARY_HEADER,
  secondaryHeader: SELECTORS_SECONDARY_HEADER,
  productList: SELECTORS_PRODUCT_LIST,
};
