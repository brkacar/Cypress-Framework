/// <reference types="cypress" />
export class LoginPage {

    loginPageElemenets ={
        userNameInput: ()=> cy.get('[data-test="username"]'),
        passwordInput: ()=> cy.get('[data-test="password"]'),
        loginButton: () => cy.get('[data-test="login-button"]'),
        errorMessage: ()=> cy.get('[data-test="error"]'),
    };

    errorMessageExists(){
        this.loginPageElemenets.errorMessage().should('be.visible');
    }

    enterUsername(username){
        this.loginPageElemenets.userNameInput().type(username);
    }

    enterPassword(password){
        this.loginPageElemenets.passwordInput().type(password)
    }

    clickLoginButton(){
        this.loginPageElemenets.loginButton().click()
    }

    login(username, password){
        this.enterUsername(username);
        this.enterPassword(password);
        this.clickLoginButton();
    }

}