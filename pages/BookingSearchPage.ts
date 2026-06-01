import { Page, Locator } from '@playwright/test';

export class BookingSearchPage {
  readonly page: Page;
  readonly destinationInput: Locator;
  readonly firstPropertyCard: Locator;

  constructor(page: Page) {
    this.page = page;
    this.destinationInput = page.getByPlaceholder(/Where are you going/i);
    this.firstPropertyCard = page.locator('[data-testid="property-card"]').first();
  }

  async goto() {
    await this.page.goto('https://www.booking.com/');
  }

  async searchDestination(destination: string) {
    await this.destinationInput.fill(destination);
    await this.page.keyboard.press('Enter');
  }
}