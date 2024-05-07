import { BasePage } from "./BasePage";

export class HomePage extends BasePage{

    //go to FORMS
    static get selectForms(){
        return cy.get("[class='card-body']");
    }

    //go to Practice Form
    static get selectPracticeForms(){
        return cy.get("[class='text']");
    }
    //Name section - First Name
    static get setFirstName(){
        return cy.get("input#firstName");
    }
    //Name section - Last Name
    static get setLastName(){
        return cy.get("input#lastName");
    }
    //E-mail section
    static get setEmail(){
        return cy.get("input#userEmail");
    }
    //Gender section
    static get setGender(){
        return cy.get("[class='col-md-9 col-sm-12']");
    }
    //Mobile section
    static get setMobileNumber(){
        return cy.get("input#userNumber");
    }
    //Date of birth section
    static get clickOnDatePicker(){
        return cy.get("#dateOfBirthInput").click();
    }
    static get setBirthMonth(){
        return cy.get("[class='react-datepicker__month-select']");
    }

    static get setBirthYear(){
        return cy.get("[class='react-datepicker__year-select']");
    }

    static get setBirthDay(){
        return cy.get("[class='react-datepicker__week']");
    }

    //Subject section
    static get setSubject(){
        return cy.get("input#subjectsInput");
    }

    //TODO: jāpbeidz
    static get setAutoComplete(){
        return cy.get("#subjectsContainer");
    }

    //Hobbies section
    static get setHobbies(){
        return cy.get("#hobbiesWrapper");
    }
    //Picture section
    //Current Address section
    //State section
    //City section
    //Submit button


}