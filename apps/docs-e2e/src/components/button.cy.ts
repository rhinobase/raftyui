describe("Button Variant Test", () => {
  beforeEach(() =>
    cy.visit("/iframe.html?args=&id=components-button--variants")
  );

  it("should contain the right text", () => {
    cy.get("button").should("contain.text", "Button text");
  });

  it("Basic Test For Button", () => {
    // Basic Test for Button
    cy.get("button").contains("Button text").should("be.enabled").click();
    cy.get("button").should("be.enabled");
  });
});

describe("Icon Button Test", () => {
  beforeEach(() =>
    cy.visit("/iframe.html?args=&id=components-button--icon-button")
  );

  it("Basic Test For Button", () => {
    // eslint-disable-next-line cypress/no-assigning-return-values
    const iconsbtn = cy.get('[data-cy="iconbtn"]');
    // Basic Test for Button
    iconsbtn
      .click({ multiple: true })
      .should("be.enabled")
      .should("have.focus");
  });
});

describe("Active Button", () => {
  beforeEach(() =>
    cy.visit("/iframe.html?args=&id=components-button--active-variants")
  );

  it("should contain the right text", () => {
    cy.get("button").should("contain.text", "Button text");
  });

  it("Basic Test For Button", () => {
    // Basic Test for Button
    cy.contains("Button text").click();
    cy.should("be.enabled");
    cy.should("be.focused");
  });
});

describe("Disabled Button Test", () => {
  beforeEach(() =>
    cy.visit("/iframe.html?args=&id=components-button--disabled-variants")
  );

  it("should contain the right text", () => {
    cy.get("button").should("contain.text", "Button text");
  });

  it("Basic Test For Button", () => {
    // Basic Test for Button
    // cy.get("button")
    //   .first()
    //   .then((btn) => {
    //     // Test for Disabled
    //     btn.should("be.disabled");
    //     // Test for Button Should be Disabled while click
    //     btn.click({ force: true }).should("be.disabled");
    //     btn.trigger("mouseover", { force: true }).should("be.disabled");
    //   });
  });
});
