describe("Tooltip Test", () => {
  beforeEach(() => cy.visit("/iframe.html?args=&id=components-tooltip"));

  it("Basic test for tooltip", () => {
    // Test for tooltip visible
    cy.get('[data-state="closed"]').trigger("pointermove");
    cy.get('[data-state="delayed-open"]').should("exist");

    // Test for tooltip close
    cy.get("body").click(10, 10, { force: true });
    cy.get('[data-state="delayed-open"]').should("not.exist");
  });
});
