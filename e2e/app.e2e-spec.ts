import { PortalDoAutomovelPage } from './app.po';

describe('portal-do-automovel App', () => {
  let page: PortalDoAutomovelPage;

  beforeEach(() => {
    page = new PortalDoAutomovelPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
