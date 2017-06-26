Feature('Admin can log in');

Before((I) => { // or Background
    I.amOnPage('/admin');
});

Scenario('Log in', (I,adminLoginPage) => {

	adminLoginPage.sendForm('admin@phptravels.com','demoadmin');
 //Verifying that i am on admin main page:
  I.waitForElement({id: 'updatescount'}, 5);
  I.seeElement({id: 'sidebar-query'});
  I.seeInTitle('Dashboard');
  I.see('Super Admin');
}
);