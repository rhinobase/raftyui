describe("Combobox Test", () => {
  beforeEach(() =>
    cy.visit("/iframe.html?args=&id=form-combobox--default&viewMode=story")
  );

  it("Basic Test for Combobox", () => {
    // Visible test for combobox
    cy.get("input").should("be.visible").should("be.empty");

    //Serach Test
    cy.get("input").type("Apple");
    cy.should("have.value", "Apple");
    cy.get("body").click(10, 10);
    cy.get("input").should("be.empty");

    //Select Test
    cy.get("button").last().click();
    cy.get('[role="listbox"]').should("exist");
    cy.get('[role="listbox"]').children().first().click();
    cy.get("input").should("have.value", "red panda");
  });
});
