import { StorageWebPage } from './app.po';

describe('storage-web App', () => {
  let page: StorageWebPage;

  beforeEach(() => {
    page = new StorageWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
