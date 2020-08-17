describe("My First Test", function () {
  it("Launch Google page and verify title", function () {
    cy.visit("https://www.google.com/");
    cy.url().should('include', 'google')
    cy.get('.RNmpXc').contains('I\'m Feeling Lucky')
    cy.get('input[name="q"]').type("ronaldo");
    //   cy.get('input[class="gNO89b"]').click
    cy.contains("Google Search").click();
  });
});
