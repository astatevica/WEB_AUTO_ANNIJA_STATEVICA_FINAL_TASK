import { BasePage } from "./BasePage";

export class ValidationPage extends BasePage{

    static get validateStudentName(){
        cy.get("[class='table-responsive']");
        if(cy.contains('Student Name')){
            (cy.contains('John Doe'));
            
        }else{
            error('validācija nepiepildās');
        };
    }

    static get validateEmail(){
        cy.get("[class='table-responsive']");
        if(cy.contains('Student Email')){
            cy.contains('John.Doe@gmail.com');
          }else{
            error('validācija nepiepildās');
          };
    }

    static get validateGender(){
        cy.get("[class='table-responsive']");
        if(cy.contains('Gender')){
            cy.contains('Male');
          }else{
            error('validācija nepiepildās');
          };
    }

    static get validateMobile(){
        cy.get("[class='table-responsive']");
        if(cy.contains('Mobile')){
            cy.contains('1371567890');
          }else{
            error('validācija nepiepildās');
          };
    }

    static get validateBirthDate(){
        cy.get("[class='table-responsive']");
        if(cy.contains('Date of Birth')){
            cy.contains('28 February,1930');
          }else{
            error('validācija nepiepildās');
          };
    }

    static get validateSubject(){
        cy.get("[class='table-responsive']");
        if(cy.contains('Subjects')){
            cy.contains('Economics');
          }else{
            error('validācija nepiepildās');
          };
    }

    static get validateHobbies(){
        cy.get("[class='table-responsive']");
        if(cy.contains('Picture')){
            cy.contains('auto_test_meme.jpg');
          }else{
            error('validācija nepiepildās');
          };
    }

    static get validatePicture(){
        cy.get("[class='table-responsive']");
        if(cy.contains('Hobbies')){
            cy.contains('Music');
          }else{
            error('validācija nepiepildās');
          };
    }

    static get validateStateCity(){
        cy.get("[class='table-responsive']");
        if(cy.contains('State and City')){
            cy.contains('NCR Delhi');
          }else{
            error('validācija nepiepildās');
          };
    }

    



}