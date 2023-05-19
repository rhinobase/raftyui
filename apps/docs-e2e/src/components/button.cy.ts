describe("Button Variant Test", () => {
  beforeEach(() => {
    cy.visit("/iframe.html?args=&id=components-button--sizes&viewMode=story");
  });

  it("should contain the right text", () => {
    cy.get('[id="storybook-root"]').within((story) => {
      cy.get("button", { withinSubject: story })
        .first()
        .should("contain.text", "Button text")
        .should("be.enabled")
        .click({ multiple: true });
      cy.should("be.enabled");
    });
  });
});

describe("Icon Button Test", () => {
  beforeEach(() =>
    cy.visit(
      "/iframe.html?args=&id=components-button--icon-button&viewMode=story"
    )
  );

  it("Basic Test For Button", () => {
    cy.get('[id="storybook-root"]').within((story) => {
      cy.get("button", { withinSubject: story })
        .first()
        .should("be.enabled")
        .click({ multiple: true });
      cy.should("be.enabled");
    });
  });
});

describe("Active Button", () => {
  beforeEach(() =>
    cy.visit(
      "/iframe.html?args=&id=components-button--active-variants&viewMode=story"
    )
  );

  it("should contain the right text", () => {
    cy.get('[id="storybook-root"]').within((story) => {
      cy.get("button", { withinSubject: story })
        .should("contain.text", "Button text")
        .first()
        .should("be.enabled")
        .click({ multiple: true });
      cy.should("be.enabled");
    });
  });
});

describe("Disabled Button Test", () => {
  beforeEach(() =>
    cy.visit(
      "/iframe.html?args=&id=components-button--disabled-variants&viewMode=story"
    )
  );

  it("should contain the right text", () => {
    cy.get('[id="storybook-root"]').within((story) => {
      cy.get("button", { withinSubject: story })
        .should("contain.text", "Button text")
        .first()
        .should("be.disabled")
        .click({ multiple: true, force: true });
      cy.should("be.disabled");
    });
  });
});
