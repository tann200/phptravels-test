'use strict';
let I;

module.exports = {

  _init() {
    I = actor();
  },

  // setting locators
  fields: {
  	fname:'firstname',
  	lname:'lastname',
  	phone:'phone',
    email: 'email',
    password: 'password',
    confirmpassword:'confirmpassword'
  },
  submitButton: 'Login',

  // introducing methods
  sendForm(fname, lname, phone, email, password, confirmpassword) {
  	I.fillField(this.fields.fname, fname);
  	I.fillField(this.fields.lname, lname);
  	I.fillField(this.fields.phone, phone);
    I.fillField(this.fields.email, email);
    I.fillField(this.fields.password, password);
    I.fillField(this.fields.confirmpassword, password);
    
  }
}

  
