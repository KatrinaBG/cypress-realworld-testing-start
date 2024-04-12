// Describe block for testing the home page
describe("home spec", () => {
  // Before each test, visit the homepage
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  // Test to ensure users can subscribe to the email list
  it("allows users to subscribe to the email list", () => {
    cy.getByData("email-input")
      .type('tom@aol.com');
    cy.getByData('submit-button').click();
    cy.getByData('success-message').should('exist');
  })

  // Test to verify that an invalid email address is not accepted
  it("does NOT allow an invalid email address", () => {
    cy.getByData("email-input")
      .type('tom');
    cy.getByData('submit-button').click();
    cy.getByData('success-message').should('not.exist');
  })

  // Test to verify that users cannot subscribe with an already existing email address
  it("does NOT allow to subscribe already existing email address", () => {
    cy.getByData("email-input")
      .type('john@example.com');
    cy.getByData('submit-button').click();
    cy.getByData('server-error-message').should('exist');
  })
})
