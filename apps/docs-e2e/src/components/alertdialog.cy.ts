describe("AlertDialog Test", () => {
  beforeEach(() => cy.visit("iframe.html?args=&id=components-alert-dialog"));

  it("Basic Test for dialog", () => {
    // Test for dialog should open
    cy.get("button").contains("Open").click();
    cy.get('[data-cy="dialogcontent"]').should("exist").should("be.visible");

    //Test for dialog close
    cy.get("button").contains("Cancel").click();
    cy.get('[data-cy="dialogcontent"]').should("not.exist");

    // Test for dialog close on click on overlay
    cy.get("button").contains("Open").click();
    cy.get("body").click(100, 100, { force: true });
    cy.get('[data-cy="dialogcontent"]').should("exist");
  });
});
