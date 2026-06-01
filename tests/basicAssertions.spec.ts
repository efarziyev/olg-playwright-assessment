import { test, expect } from '../fixtures/fixtures';
import { verifyUrl } from '../utils/assertionUtils';

const PAGE_TITLE = /Playwright/;
const HEADING_TEXT = 'Playwright';

test('Verify title and visible elements on Playwright website', async ({
  page,
  playwrightHomePage,
}) => {
  await playwrightHomePage.goto();

  await verifyUrl(page, PAGE_TITLE);
  await expect(playwrightHomePage.getStartedLink).toBeVisible();
  await expect(playwrightHomePage.mainHeading).toContainText(HEADING_TEXT);
});



