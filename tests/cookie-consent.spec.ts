import { test, expect, BrowserContext } from '@playwright/test';

/**
 * Cookie Consent Management Tests
 * 
 * PRECONDITION: All tests run in a fresh browser context (no stored cookies)
 * to ensure the cookie banner appears on every test run.
 * 
 * NOTE: The cookie consent dialog appears automatically on first page load.
 * The "Zarządzanie zgodą" button only appears AFTER user has made a choice,
 * to allow reopening the preferences.
 */
test.describe('Cookie Consent Management', { tag: ['@cookie-consent', '@gdpr', '@critical'] }, () => {
  let context: BrowserContext;

  test.beforeEach(async ({ browser }) => {
    // Create a fresh context without any stored state - ensures cookie banner appears
    context = await browser.newContext({
      storageState: undefined,
    });
  });

  test.afterEach(async () => {
    await context.close();
  });

  test('CCM-001: Cookie consent dialog appears on first visit', { tag: ['@CCM-001', '@smoke'] }, async () => {
    const page = await context.newPage();
    await context.clearCookies();
    await page.goto('https://qualityminds.com/pl/');
    await page.waitForLoadState('networkidle');

    // The consent dialog should be visible immediately on first visit
    const consentDialog = page.getByRole('dialog', { name: 'Zarządzanie zgodą' });
    await expect(consentDialog).toBeVisible({ timeout: 10000 });

    // Verify main action buttons are present
    await expect(page.getByRole('button', { name: 'Zaakceptuj wszystko' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Odmowa' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Wyświetl preferencje' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Zamknij okienko' })).toBeVisible();
  });

  test('CCM-004: View preferences expands detailed options', { tag: ['@CCM-004', '@regression'] }, async () => {
    const page = await context.newPage();
    await context.clearCookies();
    await page.goto('https://qualityminds.com/pl/');
    await page.waitForLoadState('networkidle');

    // Wait for consent dialog
    const consentDialog = page.getByRole('dialog', { name: 'Zarządzanie zgodą' });
    await expect(consentDialog).toBeVisible({ timeout: 10000 });

    // Click "Wyświetl preferencje" to expand detailed options
    await page.getByRole('button', { name: 'Wyświetl preferencje' }).click();

    // Verify detailed cookie categories are now visible
    await expect(page.getByText('Funkcjonalny').first()).toBeVisible();
    await expect(page.getByText('Statystyki').first()).toBeVisible();
  });
});
