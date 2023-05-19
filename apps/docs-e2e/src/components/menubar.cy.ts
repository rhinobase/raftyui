describe("Menubar Test", () => {
  beforeEach(() => cy.visit("/iframe.html?args=&id=components-menubar"));

  it("Basic Test for MenuBar", () => {
    // Test for menubar and menu visible
    cy.get('[role="menubar"]').should("be.visible");
    cy.get('[role="menubar"]').children().first().click();
    cy.get('[role="menu"]').should("exist").should("be.visible");

    // Test for keynoard on menu
    cy.get('[role="menu"]').type("{downarrow}".repeat(4));
    cy.get('[role="menu"]').type("{rightarrow}".repeat(2));

    //Test for hover on menuitems
    cy.get('[role="menubar"]')
      .children()
      .each((button) => {
        cy.wrap(button).trigger("pointerover");
        cy.get('[role="menu"]').should("be.visible");
      });

    // Test for close menu
    cy.get('[role="menubar"]').children().first().click();
    cy.get('[role="menu"]').should("not.exist");
  });
});
