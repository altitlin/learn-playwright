import path from 'path';
import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

import { TEST_DIR_PATH, ENV_FILE_PATH } from './constants';

if (!process.env.CI) {
  dotenv.config({ path: path.resolve(__dirname, ENV_FILE_PATH) });
}

export default defineConfig({
  testDir: TEST_DIR_PATH,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: process.env.BASE_URL,
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
