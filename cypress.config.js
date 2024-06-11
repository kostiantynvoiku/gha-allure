const { defineConfig } = require("cypress");
const { allureCypress } = require("allure-cypress/reporter");
const cypressSplit = require('cypress-split')
const { beforeRunHook } = require('cypress-mochawesome-reporter/lib');


module.exports = defineConfig({
  // experimentalInteractiveRunEvents: true,
  reporter: 'cypress-mochawesome-reporter',
  video: true,
  e2e: {
    experimentalRunAllSpecs: true,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // on('before:run', async (details) => {
      //   await beforeRunHook(details);
      // });
      allureCypress(on);
      cypressSplit(on, config)
      return config;
    },
  },

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
		setupNodeEvents(on, config) {
			allureCypress(on);
      return config;
		},
  },
});
