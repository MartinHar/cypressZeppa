const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  e2e: {
    baseUrl: 'http://ec2-34-240-105-163.eu-west-1.compute.amazonaws.com/login',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
