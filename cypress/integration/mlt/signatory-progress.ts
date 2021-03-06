/// <reference types="cypress" />

import autoRecord from 'cypress-autorecord';

const signatoryProgressTexts = ['Aggregated signatory progress'];

describe('Signatory progress', function() {
  // autoRecord();

  it('should load the page', function() {
    cy.visit('/signatory-progress');
    cy.wait(5000);
  });

  it('check texts', function() {
    signatoryProgressTexts.map(text => cy.findAllByText(text).should('exist'));
  });
});
