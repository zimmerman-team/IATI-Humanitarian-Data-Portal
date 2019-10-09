/// <reference types="cypress" />

import autoRecord from 'cypress-autorecord';

const signatoryFAQTexts = ['FAQ'];

describe('FAQ', function() {
  // autoRecord();

  it('should load the page', function() {
    cy.visit('/faq');
  });

  it('check texts', function() {
    signatoryFAQTexts.map(text => cy.queryByText(text).should('exist'));
  });

  it('should show background decoration', function() {
    cy.findByTestId('DecoFaqTopLeft').should('exist');
    cy.findByTestId('DecoFaqTopRight').should('exist');
  });

  it('should show footer and the correct content', function() {
    cy.findByTestId('Footer').should('exist');
    cy.findByTestId('DI link').should('exist');
    cy.findByTestId('GOV link').should('exist');
    cy.findByTestId('GB link').should('exist');
  });
});
