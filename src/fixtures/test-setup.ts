import { test as base } from '@playwright/test';

import { LoginPage } from 'pages/login-page';

interface Fixtures {
  loginPage: LoginPage;
}

export { expect } from '@playwright/test';

export const test = base.extend<Fixtures>({
  loginPage: async ({ page }, use) => await use(new LoginPage(page)),
});
