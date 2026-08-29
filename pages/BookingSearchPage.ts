import { Page, Locator } from '@playwright/test';

const BOOKING_URL = 'https://www.booking.com/';

export class BookingSearchPage {
  readonly page: Page;
  readonly destinationInput: Locator;
  readonly firstPropertyCard: Locator;

  constructor(page: Page) {
    this.page = page;
    this.destinationInput = page.getByPlaceholder(/Where are you going/i);
    this.firstPropertyCard = page
      .locator('[data-testid="property-card"]')
      .first();
  }

  async goto(): Promise<void> {
    await this.page.goto(BOOKING_URL);
  }

  async searchDestination(destination: string): Promise<void> {
    await this.destinationInput.fill(destination);
    await this.page.keyboard.press('Enter');
  }
}
