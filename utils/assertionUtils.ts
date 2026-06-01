import { expect, Page } from '@playwright/test';

export async function verifyUrl(page: Page, expectedUrl: RegExp) {
  await expect(page).toHaveURL(expectedUrl);
}