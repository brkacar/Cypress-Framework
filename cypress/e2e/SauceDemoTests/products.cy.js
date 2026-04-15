/// <reference types="cypress" />

import { LoginPage } from "../../support/pageObjects/loginPage";
import { ProductPage } from "../../support/pageObjects/productsPage";

describe('add item to cart', ()=>{

    let loginPage = new LoginPage()
    let productsPage = new ProductPage();

    // beforeEach(()=>{
    //     cy.visit('https://www.saucedemo.com/');
    //     loginPage.enterUsername('standard_user');
    //     loginPage.enterPassword('secret_sauce');
    //     loginPage.clickLoginButton();
    // })

    it('add item to cart', ()=>{
        cy.loginToSauceDemo('standard_user', 'secret_sauce')
        productsPage.addBackPackToCart();
        productsPage.verifyBackPackRemoveButtonAppears();
        productsPage.elements.cartBadge().should('have.text', '1');
    })
})