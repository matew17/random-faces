import { RandomFacesPage } from './app.po';

describe('random-faces App', () => {
  let page: RandomFacesPage;

  beforeEach(() => {
    page = new RandomFacesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
