import { browser, by, element } from 'protractor';

describe('Welcome Page', () => {

  it('header should be 8-Player Tournament Bracket!', () => {
    browser.get('/');

    var title = element(by.id('header-title'));

    expect(title.getText()).toEqual('8-Player Tournament Bracket!');
  });
});
