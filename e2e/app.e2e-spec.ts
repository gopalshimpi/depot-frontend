import { DepotBookPage } from './app.po';

describe('depot-book App', () => {
  let page: DepotBookPage;

  beforeEach(() => {
    page = new DepotBookPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
