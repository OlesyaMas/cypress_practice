/// <reference types="cypress" />
describe('example to-do app', () => {

  it("first test", () => {
    cy.visit("/", {
      auth: {
        username: 'guest',
        password: 'welcome2qauto',
      },
     //failOnStatusCode: false
    })

    // cy.get('input[id="username"]').type('tomsmith');
    // cy.get('input[id="password"]').type('SuperSecretPassword!');
    // cy.get('button[type="submit"]').click();
    // //cy.get("h2").should("be.visible");
    // cy.get('h2').should('have.text', ' Secure Area');

    cy.contains('Sign In').click();
    cy.get('h4.modal-title').should('be.visible');
    cy.get('input#signinEmail').type('testasser@gmail.com');
    cy.get('input#signinPassword').type('123456');
    cy.contains('Login').click();
    cy.get('p.alert-danger').should('have.text', 'Wrong email or password');

  })

})
