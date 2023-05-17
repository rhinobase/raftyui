describe("Accordion Test", () => {
  beforeEach(() => cy.visit("iframe.html?args=&id=components-accordion"));

  it("Basic test for Accordion", () => {
    // Test for Accordio content assertion
    cy.get('[data-cy="content"]').should("be.visible").should("exist");
    cy.contains("Section 1 title").click();
    cy.get('[data-cy="content]"').should("not.exist");
  });
});
