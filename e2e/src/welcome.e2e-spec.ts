import { browser, by, element } from 'protractor';
import { Routing } from '../../src/app/models/routing';

const welcomeRoute = new Routing();

describe('Welcome Page', () => {

  it('header should be 8-Player Tournament Bracket!', () => {
    welcomeRoute.getWelcome();

    var title = element(by.id('header-title'));

    expect(title.getText()).toEqual('8-Player Tournament Bracket!');
  });
});
