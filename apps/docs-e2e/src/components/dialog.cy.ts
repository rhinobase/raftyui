describe("Dialog Test", () => {
  beforeEach(() => cy.visit("iframe.html?args=&id=components-dialog--default"));

  it("Should be visible", () => {
    // Test for dialog open
    cy.get("button").contains("open").click();
    cy.get('[role="dialog"]').should("exist");

    // Test for close dialog
    cy.get("body").click(100, 100, { force: true });
    cy.get('[role="dialog"]').should("not.exist");
  });
});
