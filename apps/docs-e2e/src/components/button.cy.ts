describe("Button Variant Test", () => {
  beforeEach(() =>
    cy.visit("/iframe.html?args=&id=components-button--variants")
  );

  it("should contain the right text", () => {
    cy.get("button").should("contain.text", "Button text");
  });
  it("Basic Test For Button", () => {
    // Basic Test for Button
    // eslint-disable-next-line cypress/unsafe-to-chain-command
    cy.contains("Button text")
      .click()
      .should("be.enabled")
      .should("be.focused");
  });
});

describe("Icon Button Test", () => {
  beforeEach(() =>
    cy.visit("/iframe.html?args=&id=components-button--icon-button")
  );

  it("Basic Test For Button", () => {
    // eslint-disable-next-line cypress/no-assigning-return-values
    const iconsbtn = cy.get('[type="button"]');
    // Basic Test for Button
    // eslint-disable-next-line cypress/unsafe-to-chain-command
    iconsbtn
      .click({ multiple: true })
      .should("be.enabled")
      .should("have.focus");
  });
});

describe("Icon Button Test", () => {
  beforeEach(() =>
    cy.visit("/iframe.html?args=&id=components-button--active-variants")
  );
  it("should contain the right text", () => {
    cy.get("button").should("contain.text", "Button text");
  });

  it("Should be focused", () => {
    // Basic Test for Button
    // eslint-disable-next-line cypress/unsafe-to-chain-command
    cy.contains("Button text")
      .click()
      .should("be.enabled")
      .should("be.focused");
  });
});
