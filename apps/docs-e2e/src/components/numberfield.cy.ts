describe("NumberFirld Test", () => {
  beforeEach(() =>
    cy.visit(
      "/iframe.html?args=size:sm;variant:solid&id=form-numberfield--default&viewMode=story"
    )
  );

  it("Basic Test for NumberField", () => {
    // Visibilty test for NumberField
    cy.get("input")
      .should("be.visible")
      .should("be.empty")
      .should("have.attr", "inputmode", "numeric")
      .click();
    cy.should("be.focused");

    //Type test
    cy.get("input").type("1000");
    cy.get("body").click(10, 10);
    cy.get("input").should("not.be.focused").should("have.value", "1,000");
    cy.get("input").clear();

    //NumberField Button Test
    cy.get('[data-cy="button"]').children().last().click();
    cy.get("input").should("have.value", "0");
    cy.get('[data-cy="button"]').children().first().click();
    cy.get("input").should("have.value", "1");
  });
});
