import { test, expect, BrowserContext } from '@playwright/test';

/**
 * Cookie Consent Management Tests
 * 
 * PRECONDITION: All tests run in a fresh browser context (no stored cookies)
 * to ensure the cookie banner appears on every test run.
 * 
 * NOTE: The cookie consent dialog appears automatically on first page load.
 * The "Manage consent" button only appears AFTER user has made a choice,
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

    // Verify consent dialog is visible immediately on first visit
    const consentDialog = page.getByRole('dialog', { name: 'Zarządzanie zgodą' });
    await expect(consentDialog).toBeVisible({ timeout: 10000 });

    // Verify all main action buttons are present
    await expect(page.getByRole('button', { name: 'Zaakceptuj wszystko' })).toBeVisible(); // Accept all
    await expect(page.getByRole('button', { name: 'Odmowa' })).toBeVisible(); // Decline
    await expect(page.getByRole('button', { name: 'Wyświetl preferencje' })).toBeVisible(); // View preferences
    await expect(page.getByRole('button', { name: 'Zamknij okienko' })).toBeVisible(); // Close dialog
  });

  test('CCM-002: Accept all cookies closes dialog', { tag: ['@CCM-002', '@smoke'] }, async () => {
    const page = await context.newPage();
    await context.clearCookies();
    await page.goto('https://qualityminds.com/pl/');
    await page.waitForLoadState('networkidle');

    // Wait for consent dialog to appear
    const consentDialog = page.getByRole('dialog', { name: 'Zarządzanie zgodą' });
    await expect(consentDialog).toBeVisible({ timeout: 10000 });

    // Click "Accept all" button to accept all cookies
    await page.getByRole('button', { name: 'Zaakceptuj wszystko' }).click();

    // Verify dialog closes after acceptance
    await expect(consentDialog).not.toBeVisible();

    // Verify "Manage consent" button appears at bottom for reopening consent settings
    await expect(page.getByRole('button', { name: 'Zarządzanie zgodą' })).toBeVisible();
  });

  test('CCM-004: View preferences expands detailed options', { tag: ['@CCM-004', '@regression'] }, async () => {
    const page = await context.newPage();
    await context.clearCookies();
    await page.goto('https://qualityminds.com/pl/');
    await page.waitForLoadState('networkidle');

    // Wait for consent dialog to appear
    const consentDialog = page.getByRole('dialog', { name: 'Zarządzanie zgodą' });
    await expect(consentDialog).toBeVisible({ timeout: 10000 });

    // Click "View preferences" button to expand detailed cookie options
    await page.getByRole('button', { name: 'Wyświetl preferencje' }).click();

    // Verify detailed cookie categories are now visible (Functional, Statistics)
    await expect(page.getByText('Funkcjonalny').first()).toBeVisible();
    await expect(page.getByText('Statystyki').first()).toBeVisible();
  });
});
