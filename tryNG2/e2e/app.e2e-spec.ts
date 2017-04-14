import { TryNG2Page } from './app.po';

describe('try-ng2 App', () => {
  let page: TryNG2Page;

  beforeEach(() => {
    page = new TryNG2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
