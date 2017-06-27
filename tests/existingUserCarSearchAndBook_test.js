Feature('I as a existing user want to book a car');

Scenario('Existing user searches for a car, books a car', (I) => {
	//I need to start on page /cars, because the site is developed without taking automation into consideration.
  I.amOnPage('/cars');
  I.click('Pick up Location');
  I.pressKey('BETH')
  I.wait(3);
  I.pressKey('Enter');
  I.pressKey('Tab');
  I.pressKey('BETH');
  I.wait(3);
  I.pressKey('Enter');
  I.wait(3);
  I.click('Search');
  I.saveScreenshot('Cars_searchresults.png',true);
  I.click('Details');
  //Here a verification should be made that I am on the correct cars details page.
  I.waitForElement('//*[@id="OVERVIEW"]/div[1]/div/div[1]/div[1]',5);
  //Here a verification should be made that I am on the correct cars details page.
  I.seeElement('//button[@type="submit"]');
  I.click('//button[@type="submit"]');
  //I.waitForElement('Personal Information');
  //I fill out my personal information, this could be taken from another helper in the future.
  I.click('#signintab');
  I.fillField('username','user@phptravels.com');
  I.fillField('password','demouser');
  I.fillField('//*[@id="loginform"]/div[4]/div/textarea','Test additional information 12355..');
  I.pressKey('Tab');
  I.saveScreenshot('Cars_personaldetails.png',true);
  I.seeElement('//button[@type="submit"]');
  I.click('//button[@type="submit"]');
  //I verify that I am on the correct page and invoice is shown correctly
  I.waitForElement('//button[contains(., "Pay on Arrival")]',7);
  //Following should be for dealing with the alert, but for some reason fails
  //I.executeScript($(window.confirm = function(msg){return true;}));
  I.click('//button[contains(., "Pay on Arrival")]');
  
  I.seeInPopup('Are you sure you want to pay at arrival?');
  I.wait(2);
  I.acceptPopup();
  //I.pressKey('Enter');
  //I.saveScreenshot('Cars_invoice.png',true);
  //Flow should continue with payment options.
  

});