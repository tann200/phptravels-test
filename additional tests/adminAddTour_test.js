//const helpers = require('../helpers.js');

Feature('I as an Admin want add a new tour');
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


Scenario('Admin adds a new tour', (I)=>{
  //Moving to accounts page
  I.amOnPage('/admin/tours/add');
  I.fillField('tourname', 'A fantasy test tour');
  I.fillField('maxadult', '2');
  I.fillField('adultprice', '200');
  I.fillField('tourdays', '1');
  I.fillField('tournights', '0');
  I.selectOption('isfeatured','Yes');
  I.click('Select');
  I.pressKey('private');
  I.pressKey('Enter');
  I.click('Enter Location');
  I.pressKey('dubai');
  I.click('dubai');
  

  I.saveScreenshot('tour_info.png', true);
  I.moveCursorTo('#add');
  I.click('Submit')
  });