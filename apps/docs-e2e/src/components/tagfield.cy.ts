describe("CheckBox Test", () => {
  beforeEach(() =>
    cy.visit(
      "/iframe.html?args=&id=components-tagfield--default&viewMode=story"
    )
  );

  it("Basic test for TagField", () => {
    // Test for empty tagfield
    cy.get("input").should("be.empty");
    cy.get('[data-cy="tag-div"]').should("not.be.visible").should("be.empty");
    cy.get('[data-cy="clearall"]').should("be.hidden");

    // Type test for tagField
    cy.get("input").type("Apple{enter}");
    cy.get('[data-cy="tag-div"]')
      .should("be.visible")
      .should("not.be.empty")
      .children()
      .should("have.length", "1");
    cy.get('[data-cy="clearall"]').should("be.hidden");

    // Type test for duplicate entries
    cy.get("input").type("Apple{enter}");
    cy.get('[data-cy="tag-div"]')
      .should("be.visible")
      .should("not.be.empty")
      .children()
      .should("have.length", "1");
    cy.get('[data-cy="clearall"]').should("be.hidden");

    // Type test for multiple entries
    cy.get("input").type("Banana{enter}");
    cy.get('[data-cy="tag-div"]')
      .should("be.visible")
      .should("not.be.empty")
      .children()
      .should("have.length", "2");
    cy.get('[data-cy="clearall"]').should("be.visible");
    cy.get("input").type("Mango{enter}");

    // Test for delete a test
    cy.get("button").last().click();
    cy.get('[data-cy="tag-div"]').children().should("have.length", "2");

    // Test for clearall
    cy.get('[data-cy="clearall"]').click();
    cy.get('[data-cy="tag-div"]').should("be.empty");
    cy.get("input").should("be.empty");
  });
});
