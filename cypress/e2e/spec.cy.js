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
      HomePage.setMobileNumber.type('1371567890');

      HomePage.clickOnDatePicker;
      HomePage.setBirthMonth.select("February");
      HomePage.setBirthYear.select("1930");
      HomePage.setBirthDay.contains("28").click();
   
      HomePage.setSubject.type('Economics').type('{enter}');
      
      HomePage.setHobbies.contains("Music").click({force: true});

      HomePage.uploadPicture;
      
      HomePage.setState.click({force: true}).type("NCR").type('{enter}');
      HomePage.setCity.click({force: true}).type("Delhi").type('{enter}');

      HomePage.pressSubmit.click();

    }) 

  })
})