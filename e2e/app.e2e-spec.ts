import { ComfyAdminPage } from './app.po';

describe('comfy-admin App', function() {
  let page: ComfyAdminPage;

  beforeEach(() => {
    page = new ComfyAdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
