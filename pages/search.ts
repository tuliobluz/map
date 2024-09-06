import { type Locator, type Page } from '@playwright/test';

export class SearchPage {
  readonly destination: (searchText: string) => Locator;
  readonly directionButton: Locator;
  readonly headlineMain: (searchText: string) => Locator;
  readonly page: Page;
  readonly searchInput: Locator;
  readonly searchButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.getByTestId('searchboxinput');
    this.searchButton = page.getByTestId('searchbox-searchbutton');
    this.headlineMain = (searchText: string) =>
      page.getByRole('main').filter({ hasText: searchText });
    this.destination = (searchText: string) =>
      page.getByRole('listitem').filter({ hasText: searchText });
    this.directionButton = page.getByText('Directions');
  }

  async submitSearch(searchText: string) {
    await this.searchInput.fill(searchText);
    await this.searchButton.click();
  }

  async clickDirection(){
    await this.directionButton.click();
  }
}
