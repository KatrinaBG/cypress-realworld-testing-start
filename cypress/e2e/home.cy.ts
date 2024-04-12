// Describe block for testing the home page
describe("home spec", () => {
  // Before each test, visit the homepage
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  // Context for testing the hero section
  context("hero section", () => {
    // Test to ensure the h1 contains the correct text
    it("the h1 contains the correct text", () => {
      cy.getByData("hero-heading")
        .should("exist")
        .contains("Testing Next.js Applications")
    })

    // Test to verify the features on the homepage
    it("the features on the homepage are correct", () => {
      cy.get("dt").eq(0).contains("4 Courses")
      cy.get("dt").eq(1).contains("25+ Lessons")
      cy.get("dt").eq(2).contains("Free and Open Source")
    })
  })

  // Context for testing the Courses section
  context("Courses section", () => {
    // Test for the first course link
    it("Course: Testing Your First Next.js Application", () => {
      cy.getByData("course-0").find('a').eq(3).click();
      cy.url().should('contain', '/testing-your-first-application');
    })

    // Test for the second course link
    it("Course: Testing Foundations", () => {
      cy.getByData("course-1").find('a').eq(3).click();
      cy.url().should('contain', '/testing-foundations');
    })

    // Test for the third course link
    it("Course: Cypress Fundamentals", () => {
      cy.getByData("course-2").find('a').eq(3).click();
      cy.url().should('contain', '/cypress-fundamentals');
    })
  })
})
