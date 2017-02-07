import { browser, element, by } from 'protractor';

export class BusinessSoftwarePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('bsi-root h1')).getText();
  }
}
