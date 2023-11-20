///<reference types= 'cypress' />

let score= ' Score: 0 '; 
let accuracy= 'Accuracy: 100';

describe('Start Game button', ()=>{
    before(()=>{
        cy.visit('/');
    })
    it('should click the Start Game button and verify the url is correct and the game starts correctly', ()=>{
        cy.get('button').contains('Start Game').click();
        cy.url().should('include', '/start');
        cy.get('#start').should('have.descendants', 'div.score', 'div.accuracy', 'div.spacer');
        // cy.get('@header').should('have.descendants', ['div.score', 'div.accuracy', 'div.spacer']);
        cy.get('div.count-down').should('be.visible');
        cy.get('div.score',{timeout: 5000}).invoke('text').should('equal', score);
        cy.get('div.accuracy').invoke('text').should('equal', accuracy);
        cy.get('div.timer').should('be.visible');
    })
});