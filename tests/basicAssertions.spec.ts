import { test, expect } from '../fixtures/fixtures';
import { verifyUrl } from '../utils/assertionUtils';

const PLAYWRIGHT_URL = /playwright/i;
const HEADING_TEXT = 'Playwright';

test('Verify title and visible elements on Playwright website', async ({
  page,
  playwrightHomePage,
}) => {

  await test.step('Navigate to Playwright website', async () => {
    await playwrightHomePage.goto();
  });

  await test.step('Verify page URL', async () => {
    await verifyUrl(page, PLAYWRIGHT_URL);
  });

  await test.step('Verify Get Started link is visible', async () => {
    await expect(playwrightHomePage.getStartedLink).toBeVisible();
  });

  await test.step('Verify main heading', async () => {
    await expect(playwrightHomePage.mainHeading).toContainText(HEADING_TEXT);
  });
});
