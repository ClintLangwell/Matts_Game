///<reference types = "cypress" />

describe('Visit URL and verify page load', ()=>{
    beforeEach(()=>{
        cy.visit('/');
    })
    
    it('should visit the URL and verify page the loaded', ()=>{
        cy.url().should('equal', 'https://mlangwell.github.io/angular-game/');
    })

    it('should verify the text on screen', ()=>{
        cy.get('div.menu-text').invoke('text').should('equal', 'It is the end of the world as you know it!');
    })

    it('should verify the Start Game and Exit buttons are visible', ()=>{
        cy.get('button').contains('Start Game').should('be.visible');
        cy.get('button').contains('Exit').should('be.visible');
    })
});