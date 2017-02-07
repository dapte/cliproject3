import { BusinessSoftwarePage } from './app.po';

describe('business-software App', function() {
  let page: BusinessSoftwarePage;

  beforeEach(() => {
    page = new BusinessSoftwarePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('bsi works!');
  });
});
