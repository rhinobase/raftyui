describe("Select Test", () => {
  beforeEach(() =>
    cy.visit("/iframe.html?args=&id=form-select--default&viewMode=story")
  );

  it("Basic Test for select", () => {
    // Test for open select list
    cy.get("button").last().click();

    cy.get("button").children().first().should("contain", "Select an option");

    cy.get('[role="listbox"]').should("exist");
    cy.get('[role="listbox"]').children().first().click();
    cy.get('[role="listbox"]').should("not.exist");
    cy.get("button").children().first().should("contain", "Option 1");
  });
});
