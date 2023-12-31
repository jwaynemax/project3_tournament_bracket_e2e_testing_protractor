import { browser, by, element } from 'protractor';
import { Routing } from '../../src/app/models/routing';

const registrationRoute = new Routing();
const bracketsRoute = new Routing();


describe('Brackets Page w/ registering contestants', () => {

  beforeEach(function() {
    registrationRoute.getRegistration();
  });

  it('should complete the round when "Complete Round" clicked', () => {

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

    element(by.id('autofill-four')).click();
    element(by.id('registerBtn')).click();
    element(by.id('brackets')).click();

    var match1 = element(by.id('match-0'));
    var match2 = element(by.id('match-1'));

    expect(match1.getText()).toEqual('Match 1');
    expect(match2.getText()).toEqual('Match 2');
  });

  it('4 registered players should have 2 rounds', () => {

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

    element(by.id('autofill-two')).click();
    element(by.id('registerBtn')).click();
    element(by.id('brackets')).click();

    var match1 = element(by.id('match-0'));

    expect(match1.getText()).toEqual('Match 1');
  });

  it('2 registered players should have 1 round', () => {

    element(by.id('autofill-two')).click();
    element(by.id('registerBtn')).click();
    element(by.id('brackets')).click();

    var round = element(by.id('round'));

    expect(round.getText()).toEqual('Round: 1');

    var radioPlayer1 = element(by.id('player1-0'));
    radioPlayer1.click();

    element(by.id('complete-round')).click();

    expect(round.getText()).toEqual('Round: 1');

  });

  it('should display winner', () => {

    element(by.id('autofill-two')).click();
    element(by.id('registerBtn')).click();
    element(by.id('brackets')).click();

    var round = element(by.id('round'));

    expect(round.getText()).toEqual('Round: 1');

    var radioPlayer1 = element(by.id('player1-0'));
    radioPlayer1.click();

    element(by.id('complete-round')).click();
    var winner = element(by.id('winner'));

    expect(round.getText()).toEqual('Round: 1');
    expect(winner.getText()).toEqual('Winner: Zoe');

  });

  it('should have 8 registered contestants that match registration page', () => {

    element(by.id('autofill-eight')).click();
    element(by.id('registerBtn')).click();

    var message = element(by.id('message'));

    expect(message.getText()).toEqual('Leia,Luke,Lando,Han,Chewy,R2D2,C3P0,Vader');

    element(by.id('brackets')).click();

    var radioPlayer1 = element(by.id('player1-0'));
    var radioPlayer2 = element(by.id('player2-0'));
    var radioPlayer3 = element(by.id('player1-1'));
    var radioPlayer4 = element(by.id('player2-1'));
    var radioPlayer5 = element(by.id('player1-2'));
    var radioPlayer6 = element(by.id('player2-2'));
    var radioPlayer7 = element(by.id('player1-3'));
    var radioPlayer8 = element(by.id('player2-3'));


    expect(radioPlayer1.getAttribute('value')).toEqual('Leia');
    expect(radioPlayer2.getAttribute('value')).toEqual('Luke');
    expect(radioPlayer3.getAttribute('value')).toEqual('Lando');
    expect(radioPlayer4.getAttribute('value')).toEqual('Han');
    expect(radioPlayer5.getAttribute('value')).toEqual('Chewy');
    expect(radioPlayer6.getAttribute('value')).toEqual('R2D2');
    expect(radioPlayer7.getAttribute('value')).toEqual('C3P0');
    expect(radioPlayer8.getAttribute('value')).toEqual('Vader');

  });

  it('should have 4 registered contestants that match registration page', () => {

    element(by.id('autofill-four')).click();
    element(by.id('registerBtn')).click();

    var message = element(by.id('message'));

    expect(message.getText()).toEqual('John,Paul,George,Ringo');

    element(by.id('brackets')).click();

    var radioPlayer1 = element(by.id('player1-0'));
    var radioPlayer2 = element(by.id('player2-0'));
    var radioPlayer3 = element(by.id('player1-1'));
    var radioPlayer4 = element(by.id('player2-1'));

    expect(radioPlayer1.getAttribute('value')).toEqual('John');
    expect(radioPlayer2.getAttribute('value')).toEqual('Paul');
    expect(radioPlayer3.getAttribute('value')).toEqual('George');
    expect(radioPlayer4.getAttribute('value')).toEqual('Ringo');

  });

  it('should have 2 registered contestants that match registration page', () => {

    element(by.id('autofill-two')).click();
    element(by.id('registerBtn')).click();

    var message = element(by.id('message'));

    expect(message.getText()).toEqual('Zoe,Kaylee');

    element(by.id('brackets')).click();

    var radioPlayer1 = element(by.id('player1-0'));
    var radioPlayer2 = element(by.id('player2-0'));

    expect(radioPlayer1.getAttribute('value')).toEqual('Zoe');
    expect(radioPlayer2.getAttribute('value')).toEqual('Kaylee');
  });

});

describe('Brackets Page w/o registering contestants', () => {

  beforeEach(function() {
    bracketsRoute.getBrackets();
  });
  it('should load w/ no matches when there are no registered contestants', () => {

    var round = element(by.id('round'));
    var match = element(by.id('match-0'));

    expect(round.getText()).toEqual('Round: 1');
    expect(match.isPresent()).toBeFalsy();
  });

  it('header should be 8-Player Tournament Bracket!', () => {

    var title = element(by.id('header-title'));

    expect(title.getText()).toEqual('8-Player Tournament Bracket!');
  });
});
