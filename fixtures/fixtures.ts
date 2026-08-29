import { test as base, expect } from '@playwright/test';
import { PlaywrightHomePage } from '../pages/PlaywrightHomePage';
import { BookingSearchPage } from '../pages/BookingSearchPage';

type TestFixtures = {
  playwrightHomePage: PlaywrightHomePage;
  bookingSearchPage: BookingSearchPage;
};

export const test = base.extend<TestFixtures>({
  playwrightHomePage: async ({ page }, use) => {
    await use(new PlaywrightHomePage(page));
  },

  bookingSearchPage: async ({ page }, use) => {
    await use(new BookingSearchPage(page));
  },
});

export { expect };
