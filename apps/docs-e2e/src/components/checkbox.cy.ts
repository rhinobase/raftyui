describe("CheckBox Test", () => {
  beforeEach(() =>
    cy.visit("/iframe.html?args=&id=form-checkbox--default&viewMode=story")
  );

  it("Basic Test for CheckBox", () => {
    // Test for checkbox
    cy.get('[aria-checked="false"]')
      .first()
      .should("have.attr", "aria-checked", "false");
    cy.get('[aria-checked="false"]').first().click();
    cy.should("have.attr", "aria-checked", "true");

    // Test for indeterminate checkbox
    cy.get("h2")
      .contains("CheckBox indeterminate")
      .next()
      .should("have.attr", "aria-disabled", "false");
    cy.get("h2")
      .contains("CheckBox indeterminate")
      .next()
      .click({ force: true });
    cy.should("have.attr", "aria-disabled", "false");

    // Test for disabled checkbox
    cy.get('[aria-checked="false"]')
      .last()
      .should("have.attr", "aria-checked", "false")
      .should("have.attr", "aria-disabled", "true");
    cy.get('[aria-checked="false"]').last().click({ force: true });
    cy.get('[aria-checked="false"]')
      .last()
      .should("have.attr", "aria-checked", "false")
      .should("have.attr", "aria-disabled", "true");
  });
});
