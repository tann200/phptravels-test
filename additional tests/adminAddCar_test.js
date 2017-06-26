//const helpers = require('../helpers.js');

Feature('I as an Admin want add a new car');
//First the admin has to be logged in
Before((I, adminLoginPage) => { // or Background
    I.amOnPage('/admin');
    adminLoginPage.sendForm('admin@phptravels.com','demoadmin');
 //Verifying that i am on admin main page:
  I.waitForElement({id: 'updatescount'}, 10);
  I.seeElement({id: 'sidebar-query'});
  I.seeInTitle('Dashboard');
  I.see('Super Admin');
});


Scenario('Admin adds a new car', (I)=>{
  //Moving to accounts page
  I.amOnPage('/admin/cars/add');
  //In the future car information should come from helper, so it would bea easier to modify from one place.
  
  //The following was the only way I was able to choose a pickup and dropoff country.
  I.fillField('carname','Testcar 5');
  I.selectOption('carstars','5');
  I.click('Enter Location');
  I.wait(5);
  I.pressKey('BETH');
  I.wait(5);
  I.pressKey('Arrow_Down');
  I.pressKey('Arrow_Down');
  I.pressKey('Enter');
  I.pressKey('Tab');
  I.pressKey('BETH');
  I.wait(5);
  I.pressKey('Arrow_Down');
  I.pressKey('Arrow_Down');
  I.pressKey('Enter');
  I.pressKey('Tab');
  I.pressKey('200');
  I.wait(3);
  I.saveScreenshot('cars_info.png', true);
  I.pressKey('Enter');
  // Some good assertion that user is on cars management page is needed here.
  // I wait for the Cars management page to load and take a screenshot to verify my car was added.
  //I.seeInCurrentUrl('http://www.phptravels.net/admin/cars/');
  I.saveScreenshot('cars_list.png',true)
  });