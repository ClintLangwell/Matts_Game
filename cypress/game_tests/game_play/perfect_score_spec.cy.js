///<reference types = 'cypress' />

let timer = 0;

// Play a game and get a perfect score of 100 and accuracy of 100%
describe('Player Should', ()=>{
    before(()=>{
        cy.visit('/');
    })
    
    it('play the game and get a score of 100 with 100% accuracy', ()=>{
        cy.get('button').contains('Start Game').click();
        cy.wait(3000);
        for(let t = 119; t >= 0; t--){
            cy.get('app-target',).click({multiple: true});
        }
    })
});