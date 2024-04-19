/// <reference types="cypress" />
import LoginPage from "../../e2e/POM dz15/LoginPage"
describe('login test from DZ 15', () => {
  let userData;
    beforeEach(() => {
      cy.fixture('userData.json').then((data) => {
        userData = data;
      })
  // без використання фікстури - те що закоменчено
      // cy.visit('https://www.saucedemo.com/')
      // cy.get('[data-test="username"]').as('userNameField');
      LoginPage.open();
    })

    it('Login with correct login and password', () => {
      // LoginPage.login('standard_user', 'secret_sauce')
      LoginPage.login(userData.userNames.correctUser, userData.passwords.correctPassword)
        // cy.get('@userNameField').type('standard_user');
        // cy.get('[data-test="password"]').type('secret_sauce');
        // cy.get('[data-test="login-button"]').click();
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');

    })

})
