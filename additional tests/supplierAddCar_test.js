Feature('I as a supplier want to add a new product');
Before((I, supplierLoginPage) => { // or Background
    I.amOnPage('/supplier');
    supplierLoginPage.sendForm('tann200@gmail.com','Tanelpassword');
     //Verifying that i am on supplier main page:
    I.waitForElement({id: 'sidebar-query'}, 7);
    I.seeInTitle('Dashboard');
    //Following needs to take fname and lname from helpers used in admin add supplier test
    I.see('Tanel Test');
});


Scenario('Supplier adds a new product', (I) => {

  //Fill in the fielda
  I.amOnPage('/cars/add');
  I.fillField('#GENERAL > div:nth-child(3) > div > input','Autotestcar');
  I.click('select2-drop-mask')

	


});