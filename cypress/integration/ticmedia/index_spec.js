/// <reference types="Cypress" />

context("ticmedia.es", () => {
  beforeEach(() => {
    cy.visit("https://www.ticmedia.es");
  });

  it("comprobarCarga", () => {
    // https://on.cypress.io/document
    cy.get(".firma").contains("ticmedia.es");
  });

  it("checkTitulo", () => {
    // https://on.cypress.io/title
    cy.title().should("include", "software");
  });

  it("checkWarnings", () => {
    // https://on.cypress.io/title
    cy.contains("Warning").should("not.exist");
  });
});
