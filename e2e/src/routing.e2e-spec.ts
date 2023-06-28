import { browser, logging } from 'protractor';

describe('Welcome page', () => {

  it('should check that h2 element is brackets app', () => {
    browser.get('/');

    var h2 = element(by.binding('title'));
    expect(h2.getText()).toBe('Brackets App');

  });
});
