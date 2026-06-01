import { test, expect } from '../fixtures/fixtures';
import { verifyUrl } from '../utils/assertionUtils';

const SEARCH_TERM = 'Restaurants';
const SEARCH_RESULTS_URL = /searchresults/i;

test('Search for restaurants and verify results on Booking.com', async ({
  page,
  bookingSearchPage,
}) => {
  await bookingSearchPage.goto();
  await bookingSearchPage.searchDestination(SEARCH_TERM);

  await verifyUrl(page, SEARCH_RESULTS_URL);
  await expect(bookingSearchPage.firstPropertyCard).toBeVisible();
});