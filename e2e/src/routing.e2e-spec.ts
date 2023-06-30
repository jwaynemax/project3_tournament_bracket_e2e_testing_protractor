import { browser, by, element } from 'protractor';

describe('Welcome page', () => {

  it('should check that h2 element equals Brackets App', () => {
    browser.get('/');

    var title = element(by.id('subpageTitle'));

    expect(title.getText()).toEqual('Brackets App');

  });
});
