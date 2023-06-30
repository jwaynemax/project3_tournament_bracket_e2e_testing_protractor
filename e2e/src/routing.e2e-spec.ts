import { browser, by, element } from 'protractor';

describe('Welcome page', () => {

  it('should check that h2 element equals Brackets App', () => {
    browser.get('/');

    var title = element(by.id('subpageTitle'));

    expect(title.getText()).toEqual('Brackets App');

  });
});

describe('Registration page', () => {

  it('should check that h2 element equals Register Players', () => {
    browser.get('/');

    var registration = element(by.id('registration')).click();
    var title = element(by.id('registration-title'));

    expect(title.getText()).toEqual('Register Players');

  });
});

describe('Brackets page', () => {

  it('should check that h2 element equals Brackets', () => {
    browser.get('/');

    var registration = element(by.id('brackets')).click();
    var title = element(by.id('subpageTitle'));

    expect(title.getText()).toEqual('Brackets');

  });
});

describe('User', () => {

  it('should be able to navigate back to the Welcome page from /brackets', () => {
    browser.get('/brackets');

    var registration = element(by.id('hello')).click();
    var title = element(by.id('subpageTitle'));

    expect(title.getText()).toEqual('Brackets App');

  });
});
