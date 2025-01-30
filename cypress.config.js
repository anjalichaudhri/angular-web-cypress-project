// cypress.config.mjs
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    // Base URL for the tests
    baseUrl: 'https://demo.automationtesting.in',

    // Define the test folder and integration path
    specPattern: 'cypress/e2e/**/*.cy.js',  // Default test folder

    // Viewport size configuration
    viewportWidth: 1280,
    viewportHeight: 720,

    // Retry configuration for failed tests
    retries: {
      runMode: 2,  // Retry failed tests in headless mode (CI)
      openMode: 0, // Do not retry in interactive mode
    },

    // Setup environment variables for the tests
    env: {
      username: 'test_user',
      password: 'test_password',
    },

    // Timeouts for test execution
    defaultCommandTimeout: 10000,  // Default timeout for commands (in ms)
    responseTimeout: 15000,        // Timeout for waiting for API responses
    pageLoadTimeout: 60000,        // Timeout for page load
  },
});

