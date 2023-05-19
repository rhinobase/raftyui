describe("DatePicker Test", () => {
  beforeEach(() =>
    cy.visit("/iframe.html?args=&id=form-searchfield--default&viewMode=story")
  );

  it("Basic Test for SearchField", () => {
    //Test for basic functionality
    cy.get("input").should("be.visible").should("be.empty");

    //Type test
    cy.get("input").type("Apple");
    cy.should("have.value", "Apple");

    //Clear searchfield
    cy.get("button").last().click();
    cy.get("input").should("be.empty");
  });
});
