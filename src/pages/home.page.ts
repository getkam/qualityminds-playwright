import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './base.page';

export class HomePage extends BasePage {
  readonly heroHeading: Locator;
  readonly contactButton: Locator;

  constructor(page: Page) {
    super(page);
    this.heroHeading = page.locator('h1, .hero h1');
    this.contactButton = page.getByRole('link', { name: /kontakt|contact/i });
  }

  async goto() {
    await this.open('/');
    await this.acceptCookiesIfPresent();
  }

  async expectPolishVariant() {
    await expect(this.page).toHaveURL(/\/pl\/?/);
    await expect(this.page.locator('body')).toContainText(/QualityMinds|Usługi|Kariera|Kontakt|Blog/i);
  }

  async clickContact() {
    await this.contactButton.first().click();
  }
}