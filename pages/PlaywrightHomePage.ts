import { Page, Locator } from '@playwright/test';

const PLAYWRIGHT_URL = 'https://playwright.dev/';

export class PlaywrightHomePage {
  readonly page: Page;
  readonly getStartedLink: Locator;
  readonly mainHeading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getStartedLink = page.getByRole('link', { name: 'Get started' });
    this.mainHeading = page.locator('h1');
  }

  async goto(): Promise<void> {
    await this.page.goto(PLAYWRIGHT_URL);
  }
}
