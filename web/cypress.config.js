const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:8089",
    execTimeout: 10000,
    specPattern: "cypress/e2e/*.spec.js",
    // setupNodeEvents(on, config) {
    //   // implement node event listeners here
    // },
  },
});
