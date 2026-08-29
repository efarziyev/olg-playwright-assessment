# OLG Playwright Assessment

A Playwright and TypeScript UI automation project completed as part of a technical assessment.

The project demonstrates maintainable end-to-end test automation using the Page Object Model, custom fixtures, reusable assertion utilities, and structured test organization.

## Technologies

- Playwright
- TypeScript
- Node.js

## Framework Highlights

- Page Object Model (POM)
- Custom Playwright fixtures
- Reusable assertion utilities
- Structured test organization
- End-to-end UI automation
- Chromium browser execution

## Project Structure

```text
pages/
fixtures/
utils/
tests/
```

- **pages** – Page objects containing locators and page-specific methods
- **fixtures** – Custom Playwright fixtures for reusable test setup
- **utils** – Reusable assertion helpers
- **tests** – Playwright test specifications

## Test Scenarios

### Basic UI Assertions

Validates:

- Page title
- Element visibility
- Page heading content

### Restaurant Search

Validates:

- Search functionality using Booking.com
- Navigation to search results
- Search results visibility

## Installation

Clone the repository and install the project dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

## Running the Tests

Run the test suite in Chromium:

```bash
npx playwright test --project=chromium
```

Run tests in headed mode:

```bash
npx playwright test --project=chromium --headed
```

View the Playwright HTML report:

```bash
npx playwright show-report
```

## Assumptions

Booking.com was selected as the public website for the restaurant search scenario because it provides a suitable search flow for demonstrating browser automation as part of the assessment.
