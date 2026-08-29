import { test, expect } from '../fixtures/fixtures';
import { verifyUrl } from '../utils/assertionUtils';

const SEARCH_TERM = 'Restaurants';
const SEARCH_RESULTS_URL = /searchresults/i;

test('Search for restaurants and verify results on Booking.com', async ({
  page,
  bookingSearchPage,
}) => {

  await test.step('Navigate to Booking.com', async () => {
    await bookingSearchPage.goto();
  });

  await test.step('Search for restaurants', async () => {
    await bookingSearchPage.searchDestination(SEARCH_TERM);
  });

  await test.step('Verify navigation to search results page', async () => {
    await verifyUrl(page, SEARCH_RESULTS_URL);
  });

  await test.step('Verify search results are displayed', async () => {
    await expect(bookingSearchPage.firstPropertyCard).toBeVisible();
  });
});
