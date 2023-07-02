import { browser, by, element } from 'protractor';

describe('Brackets Page', () => {

  it('header should be 8-Player Tournament Bracket!', () => {
    browser.get('/brackets');

    var title = element(by.id('header-title'));

    expect(title.getText()).toEqual('8-Player Tournament Bracket!');
  });

  it('should complete the round when "Complete Round" clicked', () => {
    browser.get('/registration');

    element(by.id('autofill-eight')).click();
    element(by.id('registerBtn')).click();
    element(by.id('brackets')).click();

    var radioPlayer1 = element(by.id('player1-0'));
    var radioPlayer2 = element(by.id('player1-1'));
    var radioPlayer3 = element(by.id('player2-2'));
    var radioPlayer4 = element(by.id('player1-3'));
    radioPlayer1.click();
    radioPlayer2.click();
    radioPlayer3.click();
    radioPlayer4.click();

    element(by.id('complete-round')).click();

    var round = element(by.id('round'));

    expect(round.getText()).toEqual('Round: 2');
  });

  it('should throw error when radio button is not selected', () => {
    browser.get('/registration');

    element(by.id('autofill-eight')).click();
    element(by.id('registerBtn')).click();
    element(by.id('brackets')).click();

    var radioPlayer1 = element(by.id('player1-0'));
    var radioPlayer2 = element(by.id('player1-1'));
    var radioPlayer3 = element(by.id('player2-2'));
    var radioPlayer4 = element(by.id('player1-3'));
    radioPlayer1.click();
    radioPlayer3.click();
    radioPlayer4.click();

    var message = element(by.id('message'));
    var round = element(by.id('round'));

    element(by.id('complete-round')).click();
    expect(round.getText()).toEqual('Round: 1');
    expect(message.getText()).toEqual('Please complete all matches');

  });

  it('8 registered players should have 4 matches', () => {
    browser.get('/registration');

    element(by.id('autofill-eight')).click();
    element(by.id('registerBtn')).click();
    element(by.id('brackets')).click();

    var match1 = element(by.id('match-0'));
    var match2 = element(by.id('match-1'));
    var match3 = element(by.id('match-2'));
    var match4 = element(by.id('match-3'));

    expect(match1.getText()).toEqual('Match 1');
    expect(match2.getText()).toEqual('Match 2');
    expect(match3.getText()).toEqual('Match 3');
    expect(match4.getText()).toEqual('Match 4');
  });

  it('8 registered players should have 3 rounds', () => {
    browser.get('/registration');

    element(by.id('autofill-eight')).click();
    element(by.id('registerBtn')).click();
    element(by.id('brackets')).click();

    var round = element(by.id('round'));

    expect(round.getText()).toEqual('Round: 1');

    var radioPlayer1 = element(by.id('player1-0'));
    var radioPlayer2 = element(by.id('player1-1'));
    var radioPlayer3 = element(by.id('player2-2'));
    var radioPlayer4 = element(by.id('player1-3'));
    radioPlayer1.click();
    radioPlayer2.click();
    radioPlayer3.click();
    radioPlayer4.click();

    element(by.id('complete-round')).click();

    expect(round.getText()).toEqual('Round: 2');

    radioPlayer1 = element(by.id('player1-0'));
    radioPlayer2 = element(by.id('player1-1'));
    radioPlayer1.click();
    radioPlayer2.click();

    element(by.id('complete-round')).click();

    expect(round.getText()).toEqual('Round: 3');

    radioPlayer1 = element(by.id('player1-0'));
    radioPlayer1.click();

    expect(round.getText()).toEqual('Round: 3');

  });

  it('4 registered players should have 2 matches', () => {
    browser.get('/registration');

    element(by.id('autofill-four')).click();
    element(by.id('registerBtn')).click();
    element(by.id('brackets')).click();

    var match1 = element(by.id('match-0'));
    var match2 = element(by.id('match-1'));

    expect(match1.getText()).toEqual('Match 1');
    expect(match2.getText()).toEqual('Match 2');
  });

  it('4 registered players should have 2 rounds', () => {
    browser.get('/registration');

    element(by.id('autofill-four')).click();
    element(by.id('registerBtn')).click();
    element(by.id('brackets')).click();

    var round = element(by.id('round'));

    expect(round.getText()).toEqual('Round: 1');

    var radioPlayer1 = element(by.id('player1-0'));
    var radioPlayer2 = element(by.id('player1-1'));
    radioPlayer1.click();
    radioPlayer2.click();

    element(by.id('complete-round')).click();

    expect(round.getText()).toEqual('Round: 2');

    radioPlayer1 = element(by.id('player1-0'));
    radioPlayer1.click();

    element(by.id('complete-round')).click();

    expect(round.getText()).toEqual('Round: 2');

  });

  it('2 registered players should have 1 match', () => {
    browser.get('/registration');

    element(by.id('autofill-four')).click();
    element(by.id('registerBtn')).click();
    element(by.id('brackets')).click();

    var match1 = element(by.id('match-0'));

    expect(match1.getText()).toEqual('Match 1');
  });

  it('2 registered players should have 1 round', () => {
    browser.get('/registration');

    element(by.id('autofill-four')).click();
    element(by.id('registerBtn')).click();
    element(by.id('brackets')).click();

    var round = element(by.id('round'));

    expect(round.getText()).toEqual('Round: 1');

    var radioPlayer1 = element(by.id('player1-0'));
    radioPlayer1.click();

    element(by.id('complete-round')).click();

    expect(round.getText()).toEqual('Round: 1');

  });

});
