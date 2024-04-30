/// <reference types="cypress" />
describe('test home page links', () => {

    beforeEach(() => {
        cy.visit("https://qauto.forstudy.space/", {
            auth: {
                username: 'guest',
                password: 'welcome2qauto',
            }
        })
    })

    it('verify Facebook link is available', () => {
        cy.get('a:has(> span.icon-facebook)')
        .invoke('attr', 'href')
        .should('eq', 'https://www.facebook.com/Hillel.IT.School');
    })

    it('verify Telegram link is available', () => {
        cy.get('a:has(> span.icon-telegram)')
        .invoke('attr', 'href')
        .should('eq', 'https://t.me/ithillel_kyiv');
    })

    it('verify YouTube link is available', () => {
        cy.get('a:has(> span.icon-youtube)')
        .invoke('attr', 'href')
        .should('eq', 'https://www.youtube.com/user/HillelITSchool?sub_confirmation=1');
    })

    it('verify Instagram link is available', () => {
        cy.get('a:has(> span.icon-instagram)')
        .invoke('attr', 'href')
        .should('eq', 'https://www.instagram.com/hillel_itschool/');
    })

    it('verify Linkedin link is available', () => {
        cy.get('a:has(> span.icon-linkedin)')
        .invoke('attr', 'href')
        .should('eq', 'https://www.linkedin.com/school/ithillel/');
    })

    it('verify Sign In window opening', () => {
        cy.contains('Sign In').click();
        cy.get('div>h4.modal-title').should('have.text', 'Log in');
    })

    it('verify Sign up window opening', () => {
        cy.contains('Sign up').click();
        cy.get('div>h4.modal-title').should('have.text', 'Registration');
    })
})
