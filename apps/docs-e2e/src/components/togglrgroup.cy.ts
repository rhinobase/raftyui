describe("Togglegroup Test", () => {
  beforeEach(() => cy.visit("/iframe.html?args=&id=components-togglegroup"));

  it("Basic test for togglegroup", () => {
    // Togglegroup visible test
    cy.get('[role="group"]').should("be.visible");
    cy.get('[role="group"]')
      .children()
      .first()
      .should("have.attr", "data-state", "on");

    // Togglegroup toggle test
    cy.get('[role="group"]')
      .children()
      .each((button, idx) => {
        if (idx == 0) {
          cy.wrap(button).click();
          cy.should("have.attr", "data-state", "off");
        }
        cy.wrap(button).click();
        cy.should("have.attr", "data-state", "on");
      });
  });
});
