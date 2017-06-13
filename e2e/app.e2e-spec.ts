import { TddProjPage } from './app.po';

describe('tdd-proj App', () => {
  let page: TddProjPage;

  beforeEach(() => {
    page = new TddProjPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
