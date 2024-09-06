import { type Locator, type Page } from '@playwright/test';

export class SearchPage {
  readonly destination: (destination: string) => Locator;
  readonly directionButton: Locator;
  readonly headlineMain: (searchText: string) => Locator;
  readonly page: Page;
  readonly searchInput: Locator;
  readonly searchButton: Locator;
  readonly locatorText: (text: string) => Locator;

  constructor(page: Page) {
    this.page = page;
    this.destination = (destination: string) => page.getByLabel(destination);
    this.directionButton = page.getByText('Directions');
    this.headlineMain = (searchText: string) =>
      page.getByRole('heading', { name: searchText });
    this.locatorText = (text: string) =>
      page.getByText(text);
    this.searchInput = page.getByTestId('searchboxinput');
    this.searchButton = page.getByTestId('searchbox-searchbutton');
  }
  
  async submitSearch(searchText: string) {
    await this.searchInput.fill(searchText);
    await this.searchButton.click();
  }

  async clickDirection() {
    await this.directionButton.click();
  }
}
