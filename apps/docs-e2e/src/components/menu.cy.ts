import { contains } from "cypress/types/jquery";

describe("Dialog Test", () => {
  beforeEach(() =>
    cy.visit("/iframe.html?args=&id=components-menu--variants&viewMode=story")
  );
  it("menuy basic test", () => {
    // Test for open menu
    cy.get("button").contains("All Feature").click();
    cy.get('[role="menu"]').should("exist");

    // Test for menu visible menuitems
    cy.get('[role="menuitem"]').should("exist");
    // cy.get('[role="menuitem"]').first().trigger("mouseover");
    // cy.wait(4000)
    // cy.should("have.attr", "data-highlighted");

    //Test for ckeckbox item
    cy.get('[role="menuitemcheckbox"]')
      .should("exist")
      .first()
      .should("have.attr", "data-state", "checked");

    // Test for radiocheckbox item
    cy.get('[role="menuitemradio"]')
      .should("exist")
      .first()
      .should("have.attr", "data-state", "checked");
    cy.get('[role="menuitemradio"]')
      .should("exist")
      .last()
      .should("have.attr", "data-state", "unchecked");

    // Test for close menu
    cy.get('[role="menuitem"]').first().click();
    cy.get('[role="menu"]').should("not.exist");
  });
});
