# Learning Playwright Fundamentals

A hands-on project for learning and practicing [Playwright](https://playwright.dev/) — a modern end-to-end testing framework for web applications.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm

## Setup

```bash
npm install
```

## Running Tests

Run all tests across all configured browsers (Chromium, Firefox, WebKit):

```bash
npx playwright test
```

Run tests in a specific browser:

```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

Run tests in headed mode (see the browser UI):

```bash
npx playwright test --headed
```

## Viewing Reports

After running tests, open the HTML report:

```bash
npx playwright show-report
```

## Project Structure

```
├── tests/              # Test files
│   └── example.spec.ts # Sample test
├── playwright.config.ts # Playwright configuration
├── package.json
└── README.md
```

## Browsers

This project is configured to test against:

- **Chromium** (Desktop Chrome)
- **Firefox** (Desktop Firefox)
- **WebKit** (Desktop Safari)
