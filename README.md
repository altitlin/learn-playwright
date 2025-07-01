# 🧪 Intro

This is a repo contains a set of e2e autotests written using [Playwright](https://playwright.dev/)
The tests cover critical user scenarios and can be run locally or in a CI/CD pipeline.

## 📦 Tech Stack
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="24" /> TypeScript
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="24" /> Node.js
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/playwright/playwright-original.svg" width="24" /> Playwright

## ✅ Prerequisites
Before running the tests, make sure you have the following installed:
- [Node.js](https://nodejs.org/) — recommended version ≥ 22.x
- [npm](https://www.npmjs.com/)
- [Git](https://git-scm.com/)

## ⚙️ Installation
```bash
  # Install dependencies
  npm ci

  # Install Playwright browsers
  npx playwright install --with-deps
```

## 🧾 Project Structure
```bash
  .
  |-- .github/        # GitHub Actions workflows and CI configs
  |-- playwright/     # Playwright configuration files (e.g., playwright.config.ts)
  |-- src/
  |   |-- fixtures/   # Global test fixtures (e.g., custom test, context, test data)
  |   |-- pages/      # Page Object Models
  |   |-- shared/     # Shared utilities, constants
  |   |-- tests/      # Test specs
  |-- .gitignore      # Files and folders to be ignored by Git
  |-- .env            # Environment variables
  |-- .npmrc          # Custom npm settings
  |-- package.json    # Project metadata and dependency definitions
  |-- tsconfig.json   # TypeScript config
```

## 🚀 Running Tests
### 🔹 Run all tests
```bash
  npm run test:e2e
```

### 🔹 Run a specific test
```bash
  npm run test:e2e src/tests/login.test.ts
```

### 🔹 Run by tag
```bash
  npm run test:e2e --grep @login
```

## 📊 Viewing Test Report
After running the tests, you can view a detailed HTML report:
```bash
  npm run report:show
```

## 🔐 Environment Configuration
You can use a `.env` file to store test environment variables:
Example .env:
```ini
  BASE_URL="https://your-app.com"
```

```bash
  # Create .env from template
  cp .env.example .env
```

## 🐛 Debugging
To run tests in debug mode:
```bash
  npm run test:debug
```

## 🔄 GitHub Actions Workflows
- `.github/workflows/ci-e2e.yml` — runs E2E tests on every push or PR
- `.github/workflows/ci-manual-e2e.yml` — triggers tests manually with a custom baseUrl
