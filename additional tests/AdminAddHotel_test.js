//const helpers = require('../helpers.js');

Feature('I as an Admin want add a new hotel');

Before((I, adminLoginPage) => { // or Background
    I.amOnPage('/admin');
    adminLoginPage.sendForm('admin@phptravels.com','demoadmin');
 //Verifying that i am on admin main page:
  I.waitForElement({id: 'updatescount'}, 5);
  I.seeElement({id: 'sidebar-query'});
  I.seeInTitle('Dashboard');
  I.see('Super Admin');
});
Scenario('Admin adds a hotel', (I)=>{
  //Hotels page
  I.amOnPage('/admin/hotels')
  I.wait('3')
  I.click('Add')
  I.seeElement('hotelstatus')
  I.selectOption('hotelstatus','Yes');
  //I.fillField('#hotelname','Best Marigold Hotel')
  I.fillField('#document','Best Marigold Hotel')
  I.selectOption('hotelstars','5');
  I.selectOption('hoteltype','Villa');

});
