/// <reference types="cypress" />
describe('example to-do app', () => {
    it("incorrect password", () => {
        cy.visit("/login");
        cy.get('input[id="username"]').type("tomsmith");
        cy.get('input[id="password"]').type("SuperSecretPassword");
        cy.get('button[type="submit"]').click();
        cy.get('div[data-alert]').invoke('text').then((text) => {
            expect(text).to.match(/\s*Your password is invalid!\s*/);
        })
    }),

        it("incorrect username", () => {
            cy.visit("/login");
            cy.get('input[id="username"]').type("tomsmit");
            cy.get('input[id="password"]').type("SuperSecretPassword!");
            cy.get('button[type="submit"]').click();
            cy.get('div[data-alert]').invoke('text').then((text) => {
                expect(text).to.match(/\s*Your username is invalid!\s*/);
            })
        }),

        it("first test", () => {
            cy.visit("https://qauto.forstudy.space/", {
                auth: {
                    username: 'guest',
                    password: 'welcome2qauto',
                }
            });
            cy.get('div > button.btn.btn-outline-white.header_signin').click();
        })

})