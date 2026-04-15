/// <reference types="cypress" />

import { LoginPage } from "../../support/pageObjects/loginPage";
import { ProductPage } from "../../support/pageObjects/productsPage";

describe('Login test', ()=>{

    let loginPage = new LoginPage();
    let productsPage = new ProductPage();

    beforeEach(()=>{
        cy.visit('/')
    })

    it('Login with correct credentials',()=>{
        loginPage.enterUsername('standard_user');
        loginPage.enterPassword('secret_sauce');
        loginPage.clickLoginButton();
        productsPage.cartButtonExists();
    })

    it('Login with incorrect credentials', ()=>{
        // cy.visit('https://www.saucedemo.com/');
        // loginPage.enterUsername('standard_user');
        // loginPage.enterPassword('secret_sauce_wrong');
        // loginPage.clickLoginButton();

        cy.loginToSauceDemo('standard_user', 'secret_sauce_wrong')
        loginPage.errorMessageExists()

    })
})