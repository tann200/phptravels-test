Feature('I as a new user want to register on phptravels site');

Scenario('New user registers on the site', (I) => {
	//I need to start on page /cars, because the site is developed without taking automation into consideration.
  I.amOnPage('/register');
  I.fillField('firstname','Testuser11');
  I.fillField('lastname','TestuserLastname1');
  I.fillField('phone','552233219');
  I.fillField('email','testuseremail1@test.com');
  I.fillField('email','testuseremail1@test.com');
  I.fillField('password','testpassword');
  I.fillField('confirmpassword','testpassword');
  I.saveScreenshot('Userinfo_register.png',true);
  I.pressKey('Enter');
  I.wait(3);
  //Next should come from helpers and be as firstname.
  I.see('Hi, Testuser1');
  I.seeInCurrentUrl('http://www.phptravels.net/account');
  I.saveScreenshot('Userinfo_loggedin.png',true);


});