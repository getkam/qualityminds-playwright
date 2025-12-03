import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './base.page';

export class ContactPage extends BasePage {
readonly privacyPolicy: Locator;
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly messageInput: Locator;

  constructor(page: Page) {
    super(page);
    this.privacyPolicy = page.locator('input[name="use_label_element"]');
    this.nameInput = page.locator('input[name="vorname"]');
    this.emailInput = page.locator('input[name="e-mail"]');
    this.messageInput = page.locator('textarea[name="message"]');
  }

  async selectPrivacyPolicy() {
    await this.privacyPolicy.check();
  }

  async fillInput(element: Locator, text: string){
    await element.fill(text);
  }

  async expectContactUrl() {
    await expect(this.page).toHaveURL(/kontakt|contact/i);
  }

}