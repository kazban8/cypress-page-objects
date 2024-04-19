
/// <reference types="cypress" />
import ItemPage from "../../e2e/POM dz15/ItemPage"

describe('Item tests', () => {
    beforeEach(() => {
        ItemPage.open();
    })

    it('Check that item page is opened', () => {
        ItemPage.clickImage.click();
        cy.url().should('include', 'inventory-item.html?id=4');
    })

    it('Verify all UI elements are enable', () => {
        ItemPage.clickImage.click();
        ItemPage.verifyUIElements();
    })

    it('Check that after clicking on "Add to cart" the Remove button appears.', () => {
        ItemPage.clickImage.click();
        ItemPage.addToCartButton.click();
        ItemPage.removeButton.should('be.visible');
    })

    it('Check that the Add to Cart button appears after clicking Remove', () => {
        ItemPage.clickImage.click();
        ItemPage.addToCartButton.click();
        ItemPage.removeButton.click();
        ItemPage.addToCartButton.should('be.visible');
    })
})
