describe("Popover Test", () => {
  beforeEach(() => cy.visit("/iframe.html?args=&id=components-popover"));

  it("Basic Test for popover", () => {
    // Test for open popover
    cy.get("button").last().click();

    //Checking popover visibuility
    cy.get('[data-cy="content"]').should("exist");

    //Closing popover
    cy.get("button").contains("Open").click();
    cy.get('[data-cy="content"]').should("not.exist");
  });
});
