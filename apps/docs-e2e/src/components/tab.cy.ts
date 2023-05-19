describe("Tab Test", () => {
  beforeEach(() => cy.visit("/iframe.html?args=&id=components-tab"));

  it("Basic Test for Tab", () => {
    cy.get('[role="tablist"]').first();
    cy.get('[role="tabpanel"]')
      .first()
      .should("have.attr", "data-state", "active");
    cy.get('[id="radix-:r0:-content-tab1"]').should("be.visible");
    cy.get('[id="radix-:r0:-content-tab3"]').should("be.hidden");

    //Toggle in tab
    cy.get('[role="tablist"]').first().children().last().click();
    cy.get('[id="radix-:r0:-content-tab3"]').should("be.visible");
    cy.get('[id="radix-:r0:-content-tab1"]').should("be.hidden");
  });
});
