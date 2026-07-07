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
├── tests/                    # Test files
│   ├── 01_Basics/            # Playwright basics
│   ├── 02_First_Tests/       # Writing your first tests
│   ├── 03_Locators_Command/  # Locators and commands
│   ├── 04_Session_Storage/   # Session storage handling
│   ├── 05_Allure_Reporting/  # Allure reporting integration
│   ├── 06_Multiple_Elements/ # Working with multiple elements
│   ├── 07_WebTables/         # Web table interactions
│   ├── 08_Web_Select_Frames_Iframe/ # Select, frames, iframes
│   ├── 09_Frame_Iframe/      # Frame and iframe handling
│   ├── 10_Keyboard_Hover_Drag_Drop/ # Keyboard, hover, drag & drop
│   ├── 11_JS_Alerts/         # JavaScript alert handling
│   ├── 12_Handle_SVG/        # SVG element handling
│   ├── 13_Shadow_DOM/        # Shadow DOM interactions
│   ├── 14_File_Upload/       # File upload scenarios
│   ├── 15_File_Download/     # File download scenarios
│   ├── 16_Scroll_toElement/  # Scrolling to elements
│   ├── 17_Expect_Assertions/ # Assertions and expectations
│   ├── 18_Test_Hooks/        # Test hooks (before/after)
│   ├── 19_Data_Driven_Testing/ # Data-driven testing
│   ├── 20_Page_Object_Model/ # Page Object Model pattern
│   ├── 21_Fixture/           # Custom test fixtures
│   ├── 22_MISC_Concept/      # Miscellaneous concepts
│   ├── 23_Advance_Framework/ # Advanced framework setup
│   ├── Projects/             # Project-based exercises
│   └── example.spec.ts       # Example test file
├── playwright.config.ts      # Playwright configuration
├── package.json
└── README.md
```

## Browsers

This project is configured to test against:

- **Chromium** (Desktop Chrome)
- **Firefox** (Desktop Firefox)
- **WebKit** (Desktop Safari)

## Learning Path

The modules are numbered sequentially, starting from basic concepts and progressing to advanced topics:

1. **Basics → Locators** — Foundation modules covering Playwright setup, first tests, and locating elements
2. **Interactions** — Keyboard, hover, drag & drop, alerts, SVG, Shadow DOM
3. **Data & Storage** — Session storage, file upload/download, scrolling
4. **Testing Patterns** — Assertions, test hooks, data-driven testing, Page Object Model
5. **Advanced** — Fixtures, Allure reporting, advanced framework setup
