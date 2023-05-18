describe("DatePicker Test", () => {
  beforeEach(() =>
    cy.visit("/iframe.html?args=&id=form-datepicker--default&viewMode=story")
  );

  it("Basic Test for DatePicker", () => {
    // Type test for DatePicker
    cy.get('[data-cy="datepicker"]').type("12022023");
    cy.get('[inputmode="numeric"]').each((value, index) => {
      if (index == 0) {
        cy.wrap(value).should("contain", "12");
      } else if (index == 1) {
        cy.wrap(value).should("contain", "2");
      } else if (index == 2) {
        cy.wrap(value).should("contain", "2023");
      }
    });

    // Date pick from picker
    cy.get('[aria-label="Calendar"]').click();
    cy.get('[role="group"]').should("exist");
    cy.get('[role="group"]').children().last().click(200, 115);
    cy.get('[inputmode="numeric"]').each((value, index) => {
      if (index == 0) {
        cy.wrap(value).should("contain", "12");
      } else if (index == 1) {
        cy.wrap(value).should("contain", "15");
      } else if (index == 2) {
        cy.wrap(value).should("contain", "2023");
      }
    });
  });
});
