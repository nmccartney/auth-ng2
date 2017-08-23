import { AuthNg2Page } from './app.po';

describe('auth-ng2 App', () => {
  let page: AuthNg2Page;

  beforeEach(() => {
    page = new AuthNg2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
