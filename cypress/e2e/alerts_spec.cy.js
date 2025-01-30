describe('Visit and Verify Alerts Page', () => {
    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            if (err.message.includes('angular is not defined')) {
                return false; // Ignore this specific error
            }
            throw err; // Let Cypress fail on other errors
        });
    });

    it('Should load the Alerts page successfully', () => {
        cy.visit('https://demo.automationtesting.in/Alerts.html');
        cy.url().should('include', 'Alerts');
        cy.title().should('eq', 'Alerts');
    });
});



