import { browser, by, element } from 'protractor';
import { Routing } from '../../src/app/models/routing';

const registrationRoute = new Routing();

describe('Registration Page', () => {

  beforeEach(function() {
    registrationRoute.getRegistration();
  });

  it('header should be 8-Player Tournament Bracket!', () => {
    var title = element(by.id('header-title'));

    expect(title.getText()).toEqual('8-Player Tournament Bracket!');
  });

  it('user should be able to type text into each field', () => {

    for (var i = 0; i <= 7; i++) {
      var contestant = element(by.id('contestant' + i));
      contestant.sendKeys('John');
      expect(contestant.getAttribute('value')).toEqual('John');
    }
  });

  it('Register Contestants btn should register contestants', () => {

    var input = ["John", "Jerry", "Sally", "Wally", "Susan", "Timothy", "Bob", "Brenda"]

    for (var i = 0; i <= 7; i++) {
      var contestant = element(by.id('contestant' + i));
      contestant.sendKeys(input[i]);
    }

    element(by.id('registerBtn')).click();
    var message = element(by.id('message'));

    expect(message.getText()).toEqual('John,Jerry,Sally,Wally,Susan,Timothy,Bob,Brenda');
  });

  it('Autofill 2 Players btn should register 2 contestants', () => {

    element(by.id('autofill-two')).click();

    var contestant0 = element(by.id('contestant0'));
    var contestant1 = element(by.id('contestant1'));

    element(by.id('registerBtn')).click();
    var message = element(by.id('message'));

    expect(contestant0.getAttribute('value')).toEqual('Zoe');
    expect(contestant1.getAttribute('value')).toEqual('Kaylee');
    expect(message.getText()).toEqual('Zoe,Kaylee');
  });

  it('Autofill 4 Players btn should register 4 contestants', () => {

    element(by.id('autofill-four')).click();

    var contestant0 = element(by.id('contestant0'));
    var contestant1 = element(by.id('contestant1'));
    var contestant2 = element(by.id('contestant2'));
    var contestant3 = element(by.id('contestant3'));

    element(by.id('registerBtn')).click();
    var message = element(by.id('message'));

    expect(contestant0.getAttribute('value')).toEqual('John');
    expect(contestant1.getAttribute('value')).toEqual('Paul');
    expect(contestant2.getAttribute('value')).toEqual('George');
    expect(contestant3.getAttribute('value')).toEqual('Ringo');
    expect(message.getText()).toEqual('John,Paul,George,Ringo');
  });

  it('Autofill 8 Players btn should register 8 contestants', () => {

    element(by.id('autofill-eight')).click();

    var contestant0 = element(by.id('contestant0'));
    var contestant1 = element(by.id('contestant1'));
    var contestant2 = element(by.id('contestant2'));
    var contestant3 = element(by.id('contestant3'));
    var contestant4 = element(by.id('contestant4'));
    var contestant5 = element(by.id('contestant5'));
    var contestant6 = element(by.id('contestant6'));
    var contestant7 = element(by.id('contestant7'));

    element(by.id('registerBtn')).click();
    var message = element(by.id('message'));

    expect(contestant0.getAttribute('value')).toEqual('Leia');
    expect(contestant1.getAttribute('value')).toEqual('Luke');
    expect(contestant2.getAttribute('value')).toEqual('Lando');
    expect(contestant3.getAttribute('value')).toEqual('Han');
    expect(contestant4.getAttribute('value')).toEqual('Chewy');
    expect(contestant5.getAttribute('value')).toEqual('R2D2');
    expect(contestant6.getAttribute('value')).toEqual('C3P0');
    expect(contestant7.getAttribute('value')).toEqual('Vader');
    expect(message.getText()).toEqual('Leia,Luke,Lando,Han,Chewy,R2D2,C3P0,Vader');
  });

  it('should throw error message w/ no registered contestants', () => {

    element(by.id('registerBtn')).click();
    var message = element(by.id('message'));

    expect(message.getText()).toEqual('Should be 2, 4, or 8 contestants');
  });

  it('should throw error message w/ 1 registered contestant', () => {

    var input = ["John"]

    for (var i = 0; i < input.length; i++) {
      var contestant = element(by.id('contestant' + i));
      contestant.sendKeys(input[i]);
    }

    element(by.id('registerBtn')).click();
    var message = element(by.id('message'));

    expect(message.getText()).toEqual('Should be 2, 4, or 8 contestants');
  });

  it('should throw error message w/ 3 registered contestants', () => {

    var input = ["John", "Jerry", "Sally"]

    for (var i = 0; i < input.length; i++) {
      var contestant = element(by.id('contestant' + i));
      contestant.sendKeys(input[i]);
    }

    element(by.id('registerBtn')).click();
    var message = element(by.id('message'));

    expect(message.getText()).toEqual('Should be 2, 4, or 8 contestants');
  });

  it('should throw error message w/ 5 registered contestants', () => {

    var input = ["John", "Jerry", "Sally", "Wally", "Susan"]

    for (var i = 0; i < input.length; i++) {
      var contestant = element(by.id('contestant' + i));
      contestant.sendKeys(input[i]);
    }

    element(by.id('registerBtn')).click();
    var message = element(by.id('message'));

    expect(message.getText()).toEqual('Should be 2, 4, or 8 contestants');
  });

  it('should throw error message w/ 6 registered contestants', () => {

    var input = ["John", "Jerry", "Sally", "Wally", "Susan", "Timothy"]

    for (var i = 0; i < input.length; i++) {
      var contestant = element(by.id('contestant' + i));
      contestant.sendKeys(input[i]);
    }

    element(by.id('registerBtn')).click();
    var message = element(by.id('message'));

    expect(message.getText()).toEqual('Should be 2, 4, or 8 contestants');
  });

  it('should throw error message w/ 7 registered contestants', () => {

    var input = ["John", "Jerry", "Sally", "Wally", "Susan", "Timothy", "Bob"]

    for (var i = 0; i < input.length; i++) {
      var contestant = element(by.id('contestant' + i));
      contestant.sendKeys(input[i]);
    }

    element(by.id('registerBtn')).click();
    var message = element(by.id('message'));

    expect(message.getText()).toEqual('Should be 2, 4, or 8 contestants');
  });

  it('should throw error message w/ duplicate contestants', () => {

    var input = ["John", "John"]

    for (var i = 0; i < input.length; i++) {
      var contestant = element(by.id('contestant' + i));
      contestant.sendKeys(input[i]);
    }

    element(by.id('registerBtn')).click();
    var message = element(by.id('message'));

    expect(message.getText()).toEqual('Duplicate player');
  });

  it('should always load with no contestants typed in', () => {

    var contestant = element(by.id('contestant0'));


    for (var i = 0; i <= 7; i++) {
      var contestant = element(by.id('contestant' + i));
      expect(contestant.getAttribute('value')).toEqual('');
    }
  });

  it('when user navigates away from registration page, contestants still persist on brackets', () => {

    element(by.id('autofill-eight')).click();
    element(by.id('registerBtn')).click();

    var message = element(by.id('message'));

    expect(message.getText()).toEqual('Leia,Luke,Lando,Han,Chewy,R2D2,C3P0,Vader');

    element(by.id('brackets')).click();

    var radioPlayer = element(by.id('player1-0'));
    expect(radioPlayer.getAttribute('value')).toEqual('Leia');

    element(by.id('registration')).click();

    expect(message.getText()).toEqual('');

    element(by.id('brackets')).click();

    var radioPlayer = element(by.id('player1-0'));
    expect(radioPlayer.getAttribute('value')).toEqual('Leia');

  });
});
