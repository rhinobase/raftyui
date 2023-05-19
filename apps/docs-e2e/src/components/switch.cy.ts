describe("switch Test", () => {
  beforeEach(() =>
    cy.visit("/iframe.html?args=&id=form-switch--default&viewMode=story")
  );

  it("Basic test for witch", () => {
    // Test for switch off
    cy.get('[aria-selected="false"]').should("be.visible");
    cy.get('[aria-selected="false"]').first().click();
    cy.should("have.attr", "aria-selected", "true");

    // Test for switch on
    cy.get('[aria-selected="true"]').should("be.visible");
    cy.get('[aria-selected="true"]').last().click();
    cy.should("have.attr", "aria-selected", "false");
  });
});
