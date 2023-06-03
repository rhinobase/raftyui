describe('RadioGroup Test', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?args=&id=form-radiogroup--default&viewMode=story')
  );

  it('Basic test for RadioGroup', () => {
    // Test for radio group
    cy.get('[data-cy="radiogroup"]')
      .children()
      .first()
      .should('have.attr', 'data-selected', 'false');

    cy.get('[data-cy="radiogroup"]')
      .children()
      .each((radio, index) => {
        if (index == 1) {
          cy.wrap(radio).click();
          cy.should('have.attr', 'data-selected', 'true');
        }
      });
    cy.get('[data-cy="radiogroup"]')
      .children()
      .first()
      .should('have.attr', 'data-selected', 'false');
  });
});
