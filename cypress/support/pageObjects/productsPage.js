/// <reference types="cypress" />

export class ProductPage {
    elements = {
      backpackAddToCartButton: () =>cy.get('[data-test="add-to-cart-sauce-labs-backpack"]'),
      backpackRemoveButton: () => cy.get('[data-test="remove-sauce-labs-backpack"]'),
      cartButton: () => cy.get(".shopping_cart_link"),
      cartBadge: () => cy.get(".shopping_cart_badge"),
    };

    cartButtonExists(){
        this.elements.cartButton().should("be.visible");
    }
  
    addBackPackToCart() {
      this.elements.backpackAddToCartButton().click();
    }
  
    verifyBackPackRemoveButtonAppears() {
      this.elements.backpackRemoveButton().should("be.visible");
    }

  }