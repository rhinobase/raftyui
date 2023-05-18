describe("PasswordField Test", () => {
  beforeEach(() =>
    cy.visit("/iframe.html?args=&id=form-passwordfield--default&viewMode=story")
  );

  it("Basic Test for PasswordField", () => {
    // Visibilty test for PasswordField
    cy.get("input")
      .should("be.visible")
      .should("be.empty")
      .should("have.attr", "type", "password")
      .click();
    cy.should("be.focused");

    //Type test
    cy.get("input").type("pass");
    cy.get("body").click(10, 10);
    cy.get("input").should("not.be.focused").should("have.value", "pass");

    //Show and Hide Password
    cy.get("input").should("have.attr", "type", "password");
    cy.get("button").last().click();
    cy.get("input").should("have.attr", "type", "text");
  });
});
