import { test, expect } from '@playwright/test';
import { HomePage } from '../src/pages/home.page';
import { ContactPage } from '../src/pages/contact.page';


test('Kontakt – formularz widoczny / walidacje', async ({ page }) => {
  const home = new HomePage(page);
  const contact = new ContactPage(page);

  await home.goto();
  await home.clickContact();
  await contact.expectContactUrl();

  // Weryfikacja widoczności wszystkich pól formularza
  await expect(contact.nameInput).toBeVisible();
  await expect(contact.emailInput).toBeVisible();
  await expect(contact.messageInput).toBeVisible();
  await expect(contact.privacyPolicy).toBeVisible();

  // Weryfikacja że pola są początkowo puste
  await expect(contact.nameInput).toBeEmpty();
  await expect(contact.emailInput).toBeEmpty();
  await expect(contact.messageInput).toBeEmpty();

  // Wypełnienie pola imienia
  await contact.fillInput(contact.nameInput, "Magdalena");
  await expect(contact.nameInput).toHaveValue("Magdalena");

  // Wypełnienie pola email
  await contact.fillInput(contact.emailInput, "magdalena@example.com");
  await expect(contact.emailInput).toHaveValue("magdalena@example.com");

  // Wypełnienie pola wiadomości
  await contact.fillInput(contact.messageInput, "To jest testowa wiadomość");
  await expect(contact.messageInput).toHaveValue("To jest testowa wiadomość");

  // Zaznaczenie polityki prywatności
  await contact.selectPrivacyPolicy();
  await expect(contact.privacyPolicy).toBeChecked();

  await page.pause();
});