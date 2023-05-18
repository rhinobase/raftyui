describe("NavigationMenu Test", () => {
  beforeEach(() =>
    cy.visit("/iframe.html?args=&id=components-navigationmenu--default")
  );

  it("basic test for navigation menu", () => {
    // Test for visibile
    cy.get("ul").should("be.visible");
    cy.get("ul").children().should("be.visible");

    // Test for hover on navigation menu
    cy.get("ul").children().children().first().click();
    cy.should("have.attr", "data-state", "open");
    cy.get('[data-cy="content"]').should("exist");

    // Test for close menu
    cy.get("ul").children().children().first().click();
    cy.get('[data-cy="content"]').should("not.exist");
  });
});
