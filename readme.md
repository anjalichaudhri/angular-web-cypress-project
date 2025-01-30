for reference: chatgept 30/01/2025
https://chatgpt.com/share/679b7e72-2610-800f-a735-a6aa7d3274e4 : cypress customize commands
cypress project setup guide: https://chatgpt.com/share/679b7f89-4398-800f-bad6-51a2a7467bc6
https://chatgpt.com/share/679b7ffb-8b14-800f-8d06-694a4f409ed3
cypress project create: https://chatgpt.com/share/679b7ffb-8b14-800f-8d06-694a4f409ed3
report tool integration: https://chatgpt.com/share/679b820a-d8c0-800f-ae7d-43bb99972fbd


project structure:

cypress-project/
│
├── cypress/                             # Main Cypress folder
│   ├── e2e/                             # Test files (specs)
│   │   ├── login.cy.js                 # Login test file
│   │   ├── checkout.cy.js              # Checkout test file
│   │   └── search.cy.js                # Search test file
│   ├── fixtures/                        # Fixture files (mock data)
│   │   ├── users.json                  # Example user data fixture
│   │   └── products.json               # Example product data fixture
│   ├── support/                         # Custom commands and global setup
│   │   ├── commands.js                 # Custom Cypress commands (e.g., login)
│   │   └── index.js                    # Global setup and hooks
│   ├── plugins/                         # Plugins (optional)
│   │   └── index.js                    # Plugin event listeners (optional)
│   ├── allure-results/                  # Allure results folder (generated during test run)
│   ├── allure-report/                   # Allure HTML report (generated after report command)
│   ├── videos/                          # Test run videos (optional)
│   └── screenshots/                     # Screenshots for failed tests (optional)
│
├── cypress.config.js                    # Cypress configuration file
├── node_modules/                        # Dependencies
├── package.json                         # Project metadata and dependencies
├── package-lock.json                    # Lock file for dependencies
└── README.md                            # Project documentation (optional)



