describe("InputField Test", () => {
  beforeEach(() =>
    cy.visit("/iframe.html?args=&id=form-inputfield--default&viewMode=story")
  );

  it("Basic Test for InputField", () => {
    // Test for InputField should be empty and visible
    cy.get("input").click();
    cy.should("be.focused");
    cy.should("be.visible").should("be.empty");

    // Test for type
    cy.get("input").type("Hello");
    cy.get("input").should("have.value", "Hello");
    cy.get("body").click(10, 10);
    cy.get("input").should("not.be.focused");
  });
});
