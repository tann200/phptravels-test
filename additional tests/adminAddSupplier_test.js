//const helpers = require('../helpers.js');

Feature('I as an Admin want add a new supplier');
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


Scenario('Admin adds a supplier', (I)=>{
  //Moving to accounts page
  I.amOnPage('/admin/accounts/suppliers');

  //Fill in the fields. In the future data needs to be stored in the helper files
  I.click('Add');
  I.fillField('fname','Supplier');
  I.fillField('lname','Test');
  I.fillField('email','testsupplier@somegmail.com');
  I.fillField('password','Test123Password');
  I.fillField('mobile','12344');
  I.selectOption('country','Australia');
  I.fillField('address1','linn');
  I.fillField('address2','tanav');
  I.selectOption('applyfor','Cars');
  // Following is a hack, but an only way I could click the checkbox
  I.executeScript('document.getElementsByClassName("iCheck-helper")[1].click();');
  I.saveScreenshot('Supplierdata_filled.png', true);

  I.click('button.btn.btn-primary');
  //Needs better way to verify the new admin was created
  I.amOnPage('/admin/accounts/suppliers');
  I.saveScreenshot('admin_added.png', true);
});




