import { beforeEach } from "node:test"
import { BasePage } from "../pageObjects/BasePage"

describe('Elements', () => {
  isContext("Scearious", () =>{
    beforeEach(() => {
      BasePage.visit();
    })
  })
  
  
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})