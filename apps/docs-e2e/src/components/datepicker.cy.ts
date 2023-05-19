describe("DatePicker Test", () => {
  beforeEach(() =>
    cy.visit("/iframe.html?args=&id=form-datepicker--default&viewMode=story")
  );

  it("Basic Test for DatePicker", () => {
    // Type test for DatePicker
    const input = ["12", "02", "2023"]; // DD MM YYYY
    cy.get('[data-cy="datepicker"]').type(input.join(""));
    cy.get('[inputmode="numeric"]').each((value, index) =>
      cy.wrap(value).should("contain", Number(input[index]))
    );

    // Date pick from picker

    cy.get('[aria-label="Calendar"]').click();
    cy.get('[role="group"]').should("exist");
    cy.get('[role="group"]').children().last().click(200, 115);
    cy.get('[inputmode="numeric"]').each((value, index) => {
      if (index == 1) {
        cy.wrap(value).should("contain", "15");
      }
    });
  });
});
