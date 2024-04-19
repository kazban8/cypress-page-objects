/// <reference types="cypress" />
import InventoryPage from "../../e2e/POM dz15/InventoryPage"


describe('Inventory tests with POM', () => {

    beforeEach(() => {
        InventoryPage.open();
    })

     it('Should have UI elements' , () => { 
         InventoryPage.verifyUIElements();

     })


     it('Should have 4 options in sort dropdown', () => {
        InventoryPage.sortDropdown.children('option').should('have.length', 4);

      });

      it('Should navigate to Cart Page when clicking on cart icon', () => {
        InventoryPage.cartIcon.click();
        cy.url().should('include', '/cart.html');
      });

      it('Click on item by name', () => {
        InventoryPage.getItemByName('Sauce Labs Bike Light').click();
        cy.get('.inventory_details_name').should('have.text', 'Sauce Labs Bike Light')
    })

    })