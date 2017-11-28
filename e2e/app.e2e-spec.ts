import { DGWPage } from './app.po';

describe('dgw App', function() {
  let page: DGWPage;

  beforeEach(() => {
    page = new DGWPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
