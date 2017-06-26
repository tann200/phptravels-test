Feature('User login');

Scenario('Log in', (I) => {
  I.amOnPage('/login');
  //I.click('My Account');
  I.fillField('username', 'user@phptravels.com');
  I.fillField('password', 'demouser');
  I.click('//*[@id="loginfrm"]/div[4]/button');
  //I.pressKey('return'); // Had to use presskey since element submit not possible to find with the tool
  I.wait('3');
 //Verifying that i am on users main page:
 I.seeInCurrentUrl('/account');
 I.saveScreenshot('user_loggedin.png', true)
});