import { A2BPLTeamsPage } from './app.po';

describe('a2-bpl-teams App', function() {
  let page: A2BPLTeamsPage;

  beforeEach(() => {
    page = new A2BPLTeamsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
