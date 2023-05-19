describe("Textarea Test", () => {
  beforeEach(() =>
    cy.visit("/iframe.html?args=&id=form-textarea--default&viewMode=story")
  );

  it("Basic Test for textarea", () => {
    // Test for InputField should be empty and visible
    cy.get("textarea").click();
    cy.should("be.focused");
    cy.should("be.visible").should("be.empty");

    // Test for type
    cy.get("textarea").type("Hello");
    cy.get("textarea").should("have.value", "Hello");
    cy.get("body").click(10, 10);
    cy.get("textarea").should("not.be.focused");
  });
});
