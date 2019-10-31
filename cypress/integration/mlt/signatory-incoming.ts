/// <reference types="cypress" />

import autoRecord from 'cypress-autorecord';

const signatoryIncomingTexts = [
  'Incoming',
  'Incoming pledges',
  'Incoming commitments',
  'Incoming funds',
];

describe('Signatory data - incoming', function() {
  // autoRecord();

  it('should load the page', function() {
    cy.visit('/signatory-data/GB-CHC-274467/incoming');
  });

  it('check texts', function() {
    signatoryIncomingTexts.map(text => cy.findAllByText(text).should('exist'));
  });

  it('should show background decoration', function() {
    cy.findByTestId('DecoSigIncomingTopLeft').should('exist');
  });
});
