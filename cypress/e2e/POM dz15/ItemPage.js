/// <reference types="cypress" />

import LoginPage from "./LoginPage";
import BasePage from "./BasePage";
import userData from '../../fixtures/userData.json'

class ItemPage extends BasePage {

    get clickImage() {
        return cy.get('[data-test="inventory-item-sauce-labs-backpack-img"]')
    }
    
    get image() {
        return cy.get('[data-test="item-sauce-labs-backpack-img"]');
    }

    get description() {
        return cy.get('[data-test="inventory-item-desc"]');
    }

    get price() {
        return cy.get('[data-test="inventory-item-price"]');
    }

    get title() {
        return cy.get('[data-test="inventory-item-name"]');
    }

    get addToCartButton() {
        return cy.get('[data-test="add-to-cart"]');
    }

    get removeButton() {
        return cy.get('[data-test="remove"]');
    }

    open() {
        super.open('');
        LoginPage.login(userData.userNames.correctUser, userData.passwords.correctPassword);
    }

    verifyUIElements() {
        this.image.should('be.visible');
        this.description.should('be.visible');
        this.price.should('be.visible');
        this.title.should('be.visible');
    }

    addToCart() {
        this.addToCartButton.click();
        this.removeButton.should('be.visible');
    }

    removeFromCart() {
        this.removeButton.click();
        this.addToCartButton.should('be.visible');
    }
}


export default new ItemPage();
