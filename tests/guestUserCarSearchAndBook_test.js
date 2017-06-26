Feature('I as a new user want to book a car');

Scenario('New user searches for a car, books a car', (I) => {
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
  I.fillField('firstname','Testfirstname');
  I.fillField('lastname','Testlastname');
  I.fillField('email','testuser@testmail.com');
  I.fillField('confirmemail','testuser@testmail.com');
  I.fillField('phone','551123');
  I.fillField('address','This is a testaddress 5512312-somechars+!"#¤%&');
  I.pressKey('Tab');
  I.pressKey('Finland');
  I.pressKey('Enter');
  I.pressKey('Tab');
  I.pressKey('This is additional information 1234567.-somechars+!"#¤%&');
  I.saveScreenshot('Cars_personaldetails.png',true);
  I.seeElement('//button[@type="submit"]');
  I.click('//button[@type="submit"]');
  //I verify that I am on the correct page and invoice is shown correctly
  I.waitForElement('//button[contains(., "Pay on Arrival")]',7);
  //Following should be for dealing with the alert, but for some reason fails
  //I.executeScript($(window.confirm = function(msg){return true;}));
  I.click('//button[contains(., "Pay on Arrival")]');
  I.seeInPopup('Are you sure you want to pay at arrival?');
  I.acceptPopup();
  //I.pressKey('Enter');
  //I.saveScreenshot('Cars_invoice.png',true);
  //Flow should continue with payment options.
  

});