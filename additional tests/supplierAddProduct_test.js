//This test is work in progress

Feature('I as a supplier want to add a new product');
Before((I, supplierLoginPage) => { // or Background
    I.amOnPage('/supplier');
    supplierLoginPage.sendForm('supplier@phptravels.com','demosupplier');
     //Verifying that i am on admin main page:
    I.waitForElement({id: 'sidebar-query'}, 5);
    I.seeInTitle('Dashboard');
    I.see('Demo Supplier');
});


Scenario('Supplier adds a new product', (I) => {
	i.amOnPage('/supplier/cars');
	


});