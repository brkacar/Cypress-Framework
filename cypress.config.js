const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports', // Directory to save reports
      overwrite: true,
      html: true,
      json: true,
      reportFilename: 'report-[name]-[datetime]', // Name of the report files
      timestamp: 'mmddyyyy_HHMMss', // Timestamp format for reports
      charts: true, // Enable charts in the report
      embeddedScreenshots: true,
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
