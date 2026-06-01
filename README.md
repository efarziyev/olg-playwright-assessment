# OLG Playwright Assessment

## Overview

This project contains automated UI tests built using Playwright and TypeScript.

The framework follows the Page Object Model (POM) design pattern, with reusable fixtures and assertion utilities to keep tests maintainable and easy to read.

## Technologies Used

* Playwright
* TypeScript
* Node.js

## Project Structure

```text
pages/
fixtures/
utils/
tests/
```

* **pages** – page objects containing locators and page-specific methods
* **fixtures** – custom Playwright fixtures
* **utils** – reusable assertion helpers
* **tests** – test specifications

## Test Cases

### Basic Assertions

Verifies:

* Page title
* Visible elements on the page
* Page heading text

### Restaurant Search

Verifies:

* Search functionality using Booking.com
* Navigation to search results
* Search results are displayed

## Installation

```bash
npm install
```

## Run Tests

```bash
npx playwright test --project=chromium
```

## Assumptionss

Booking.com was selected as the public website for the restaurant search scenario because it provides a stable search flow for automated browser testing.


