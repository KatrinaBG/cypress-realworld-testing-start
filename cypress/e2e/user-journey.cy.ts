// Describe block for testing the user journey on the home page
describe("User Journey", () => {
  // Test for completing the Testing Your First Next.js Application course
  it("a user can find a course on the home page and complete the Testing Your First Next.js Application course lessons", () => {
    // Visit the home page
    cy.visit("http://localhost:3000")
    
    // Click on the link to the Testing Your First Next.js Application course
    cy.getByData("course-0").find("a").eq(3).click()
    
    // Ensure the URL contains the correct path for the course
    cy.url().should("contain", "/testing-your-first-application")
    
    // Click on the next lesson button and verify the URL changes accordingly
    cy.getByData("next-lesson-button").click()
    cy.url().should(
      "contain",
      "/testing-your-first-application/app-install-and-overview"
    )
    
    // Click on the challenge answer and proceed to the next lesson
    cy.getByData("challenge-answer-0").click()
    cy.getByData("next-lesson-button").should("exist").click()
    
    // Repeat the process for each lesson, ensuring the URL updates correctly
    cy.url().should(
      "contain",
      "/testing-your-first-application/installing-cypress-and-writing-our-first-test"
    )
    cy.getByData("challenge-answer-0").click()
    cy.getByData("next-lesson-button").should("exist").click()
    cy.url().should(
      "contain",
      "/testing-your-first-application/setting-up-data-before-each-test"
    )
    cy.getByData("challenge-answer-0").click()
    cy.getByData("next-lesson-button").should("exist").click()
    
    // After completing all lessons, verify the user is redirected back to the home page
    cy.location('pathname').should('equal', '/')
  })

  // Test for completing the Testing Foundations course
  it("a user can find a course on the home page and complete the Testing Foundations course lessons", () => {
    // Visit the home page
    cy.visit("http://localhost:3000")
    
    // Click on the link to the Testing Foundations course
    cy.getByData("course-1").find("a").eq(3).click()
    
    // Ensure the URL contains the correct path for the course
    cy.url().should("contain", "/testing-foundations")
    
    // Click on the next lesson button and verify the URL changes accordingly
    cy.getByData("next-lesson-button").click()
    cy.url().should(
      "contain",
      "/testing-foundations/testing-is-a-mindset"
    )
    
    // Click on the challenge answer and proceed to the next lesson
    cy.getByData("challenge-answer-0").click()
    cy.getByData("next-lesson-button").should("exist").click()
    
    // Repeat the process for each lesson, ensuring the URL updates correctly
    cy.url().should(
      "contain",
      "/testing-foundations/knowing-what-to-test"
    )
    cy.getByData("challenge-answer-0").click()
    cy.getByData("next-lesson-button").should("exist").click()
    cy.url().should(
      "contain",
      "/testing-foundations/manual-vs-automated-testing"
    )
    cy.getByData("challenge-answer-0").click()
    cy.getByData("next-lesson-button").should("exist").click()
    
    // After completing all lessons, verify the user is redirected back to the home page
    cy.location('pathname').should('equal', '/')
  })

  // Test for completing the Cypress Fundamentals course
  it("a user can find a course on the home page and complete the Cypress Fundamentals course lessons", () => {
    // Visit the home page
    cy.visit("http://localhost:3000")
    
    // Click on the link to the Cypress Fundamentals course
    cy.getByData("course-2").find("a").eq(3).click()
    
    // Ensure the URL contains the correct path for the course
    cy.url().should("contain", "/cypress-fundamentals")
    
    // Click on the next lesson button and verify the URL changes accordingly
    cy.getByData("next-lesson-button").click()
    cy.url().should(
      "contain",
      "/cypress-fundamentals/how-to-write-a-test"
    )
    
    // Click on the challenge answer and proceed to the next lesson
    cy.getByData("challenge-answer-0").click()
    cy.getByData("next-lesson-button").should("exist").click()
    
    // Repeat the process for each lesson, ensuring the URL updates correctly
    cy.url().should(
      "contain",
      "/cypress-fundamentals/cypress-runs-in-the-browser"
    )
    cy.getByData("challenge-answer-0").click()
    cy.getByData("next-lesson-button").should("exist").click()
    cy.url().should(
      "contain",
      "/cypress-fundamentals/command-chaining"
    )
    cy.getByData("challenge-answer-0").click()
    cy.getByData("next-lesson-button").should("exist").click()
    
    // After completing all lessons, verify the user is redirected back to the home page
    cy.location('pathname').should('equal', '/')
  })
})
