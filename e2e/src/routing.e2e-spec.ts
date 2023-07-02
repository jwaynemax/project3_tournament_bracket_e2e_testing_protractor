import { browser, by, element } from 'protractor';
import { Routing } from '../../src/app/models/routing';

const welcomeRoute = new Routing();

describe('Routing', () => {

  beforeEach(function() {
    welcomeRoute.getWelcome();
  });


  it('Welcome page should check that h2 element equals Brackets App', () => {

    var title = element(by.id('subpageTitle'));

    expect(title.getText()).toEqual('Brackets App');

  });

  it('Registration page should check that h2 element equals Register Players', () => {

    var registration = element(by.id('registration')).click();
    var title = element(by.id('registration-title'));

    expect(title.getText()).toEqual('Register Players');

  });

  it('Brackets page should check that h2 element equals Brackets', () => {

    var registration = element(by.id('brackets')).click();
    var title = element(by.id('subpageTitle'));

    expect(title.getText()).toEqual('Brackets');

  });
});

describe('Routing from Brackets', () => {

  it('should navigate back to the Welcome page from /brackets', () => {
    welcomeRoute.getBrackets();

    var registration = element(by.id('hello')).click();
    var title = element(by.id('subpageTitle'));

    expect(title.getText()).toEqual('Brackets App');

  });
});
