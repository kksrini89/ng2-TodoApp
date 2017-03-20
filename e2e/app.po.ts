import { browser, element, by } from 'protractor';

<<<<<<< HEAD
export class TodoPage {
=======
export class TodoAppPage {
>>>>>>> 8105d6f28cda0603993aa21e501a97a7f7fe58e5
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
