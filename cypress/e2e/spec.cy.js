const { BasePage } = require("../pageObjects/BasePage");
const { HomePage } = require("../pageObjects/HomePage");

describe("Elements", () => {
  context("Scenarios", () => {
    beforeEach(() => {
      Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
      });
      BasePage.visit();
      HomePage.selectForms.contains("Forms").click();
      HomePage.selectPracticeForms.contains("Practice Form").click();
    })
    


    it('Input necessary information', () => {
      HomePage.setFirstName.type('John');
      HomePage.setLastName.type('Doe');
      HomePage.setEmail.type('John.Doe@gmail.com');
      HomePage.setGender.contains("Male").click();
      HomePage.setMobileNumber.type('+371567890');

      HomePage.setSubject.type('Economics');
      //te vajag nospiest enter
    }) 

  })
})