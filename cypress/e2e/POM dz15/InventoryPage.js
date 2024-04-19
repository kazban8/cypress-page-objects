/// <reference types="cypress" />
import LoginPage from "./LoginPage";
import BasePage from "./BasePage";

import userData from '../../fixtures/userData.json'

class InventoryPage extends BasePage {

    get burgerMenu() {
        return cy.get('[data-test="open-menu"]');
    }

    get cartIcon() {
        return cy.get('[data-test="shopping-cart-link"]');
    }

    get sortDropdown() {
        return cy.get('[data-test="product-sort-container"]');
    }

    get pageTitle() {
        return cy.get('[data-test="title"]').contains('Products');
    }


    getItemByName(name) {
        return cy.get('[data-test="inventory-item-name"]').contains(name); 
    }

    open() {
        super.open('');
        LoginPage.login(userData.userNames.correctUser, userData.passwords.correctPassword);
        this.pageTitle.should('be.visible');
    }

    verifyUIElements() {
        this.burgerMenu.should('be.visible');
        this.cartIcon.should('be.visible');
        this.sortDropdown.should('be.visible');
      }
}

export default new InventoryPage();