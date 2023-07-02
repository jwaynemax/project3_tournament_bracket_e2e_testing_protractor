import { browser } from 'protractor';

export class Routing {

  constructor() {}

  getWelcome() {
    return browser.get('/');
  }

  getRegistration() {
    return browser.get('/registration');
  }

  getBrackets() {
    return browser.get('/brackets');
  }

}
