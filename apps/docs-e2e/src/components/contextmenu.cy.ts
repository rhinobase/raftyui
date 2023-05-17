describe("Contextmenu Test", () => {
  beforeEach(() =>
    cy.visit("iframe.html?args=&id=components-contextmenu--default")
  );
  it("Basic Test for context menu", () => {
    // Test for visible menu
    cy.get("div").contains("Context").rightclick();
    cy.get('[role="menu"]').should("exist");

    // Test for visible menuitems
    cy.get('[role="menuitem"]').first().should("be.visible");

    //Test for ckeckbox item visible
    cy.get('[role="menuitemcheckbox"]').should("exist");

    // Test for radiocheckbox item visible
    cy.get('[role="menuitemradio"]').should("exist");

    // Test for close menu
    cy.get('[role="menuitem"]').first().click();
    cy.get('[role="menu"]').should("not.exist");
  });

  it("MenuCheckboxItemn Test", () => {
    cy.get("div").contains("Context").rightclick();
    cy.get('[role="menuitemcheckbox"]')
      .first()
      .should("have.attr", "data-state", "checked");
    cy.get('[role="menuitemcheckbox"]').first().click();
    cy.get("div").contains("Context").rightclick();
    cy.get('[role="menuitemcheckbox"]')
      .first()
      .should("have.attr", "data-state", "unchecked");
  });

  it("MenuRadioGroup Test", () => {
    cy.get("div").contains("Context").rightclick();
    cy.get('[role="menuitemradio"]')
      .first()
      .should("have.attr", "data-state", "checked");
    cy.get('[role="menuitemradio"]').last().click();
    cy.get("div").contains("Context").rightclick();
    cy.get('[role="menuitemradio"]')
      .first()
      .should("have.attr", "data-state", "unchecked");
    cy.get('[role="menuitemradio"]')
      .last()
      .should("have.attr", "data-state", "checked");
  });
});
