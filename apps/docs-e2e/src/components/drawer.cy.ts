describe("Drawer Test", () => {
  beforeEach(() => cy.visit("/iframe.html?args=&id=components-drawer"));

  it("Basic Test for drawer", () => {
    // Test for Open Drawer
    cy.get("button").last().click();
    cy.get('[role="dialog"]').should("be.visible").should("exist");

    // Test for close drawer
    cy.get("button").last().click();
    cy.get('[role="dialog"]').should("not.exist");
    cy.get("button").last().click();
    cy.get('[role="dialog"]').should("be.visible").should("exist");
    cy.get("body").click("topRight", { force: true });
    cy.get('[role="dialog"]').should("not.exist");
  });
});
