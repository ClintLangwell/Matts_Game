const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/game_tests/**/*.cy.js',
    baseUrl: 'https://mlangwell.github.io/angular-game/',
  },
});
