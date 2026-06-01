import { Page, Locator } from '@playwright/test';

export class PlaywrightHomePage {
  readonly page: Page;
  readonly getStartedLink: Locator;
  readonly mainHeading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getStartedLink = page.getByRole('link', { name: 'Get started' });
    this.mainHeading = page.locator('h1');
  }

  async goto() {
    await this.page.goto('https://playwright.dev/');
  }
}