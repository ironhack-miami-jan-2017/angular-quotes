import { QuotesPage } from './app.po';

describe('quotes App', () => {
  let page: QuotesPage;

  beforeEach(() => {
    page = new QuotesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
