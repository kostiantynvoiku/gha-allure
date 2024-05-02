const { defineConfig } = require("cypress");
const { allureCypress } = require("allure-cypress/reporter");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      allureCypress(on, {
        resultsDir: "./allure-results/e2e/allure-results/",
      });
      return config;
    },
  },

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
		setupNodeEvents(on, config) {
			allureCypress(on, {
        resultsDir: './allure-results/component/allure-results/',
      });
      return config;
		},
  },
});
