describe("RangePicker Test", () => {
  beforeEach(() =>
    cy.visit("/iframe.html?args=&id=form-rangepicker--default&viewMode=story")
  );

  it("Basic Test for RangePicker", () => {
    // Range pick from picker
    cy.get('[aria-label="Calendar"]').click();
    cy.get('[role="group"]').should("exist");
    cy.get('[role="group"]').children().last().click(50, 37);
    cy.get('[role="group"]').children().last().click(100, 147);
    // cy.get('[inputmode="numeric"]').each((value, index) => {
    //   cy.wrap(value);
    // });
    cy.get('[inputmode="numeric"]').each((value, index) => {
      if (index == 0) {
        cy.wrap(value).should("contain", "5");
      } else if (index == 1) {
        cy.wrap(value).should("contain", "1");
      } else if (index == 3) {
        cy.wrap(value).should("contain", "5");
      } else if (index == 4) {
        cy.wrap(value).should("contain", "23");
      }
    });
  });
});
