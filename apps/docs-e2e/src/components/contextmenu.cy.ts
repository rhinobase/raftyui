describe("Contextmenu Test", () => {
  beforeEach(() =>
    cy.visit("iframe.html?args=&id=components-contextmenu--variants")
  );
  it("Basic Test for context menu", () => {
    // Test for visible menu
    cy.get("div").contains("Context").rightclick();
    cy.get('[role="menu"]').should("exist");

    // Test for visible menuitems
    cy.get('[role="menuitem"]').first().should("be.visible");

    //Test for ckeckbox item
    cy.get('[role="menuitemcheckbox"]')
      .should("exist")
      .first()
      .should("have.attr", "data-state", "checked");

    // Test for radiocheckbox item
    cy.get('[role="menuitemradio"]')
      .should("exist")
      .first()
      .should("have.attr", "data-state", "checked");
    cy.get('[role="menuitemradio"]')
      .should("exist")
      .last()
      .should("have.attr", "data-state", "unchecked");

    // Test for close menu
    cy.get('[role="menuitem"]').first().click();
    cy.get('[role="menu"]').should("not.exist");
  });
});
