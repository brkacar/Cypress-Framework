/// <reference types="cypress" />

import { LoginPage } from "../../support/pageObjects/loginPage";
import { ProductPage } from "../../support/pageObjects/productsPage";

describe('Validate login', ()=>{

    let loginPage = new LoginPage();
    let productsPage = new ProductPage();

    beforeEach(()=>{
        cy.visit('')
    })

    it('valid login',()=>{
        cy.visit('https://www.saucedemo.com/');
        loginPage.enterUsername('standard_user');
        loginPage.enterPassword('secret_sauce');
        loginPage.clickLoginButton();
        productsPage.cartButtonExists();
    })

    it('Invalid login credentials', ()=>{
        // cy.visit('https://www.saucedemo.com/');
        // loginPage.enterUsername('standard_user');
        // loginPage.enterPassword('secret_sauce_gresita');
        // loginPage.clickLoginButton();

        cy.loginToSauceDemo('standard_user', 'secret_sauce_gresita')
        loginPage.errorMessageExists()

    })
})