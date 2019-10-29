/// <reference types="cypress" />

import autoRecord from 'cypress-autorecord';

const signatoryOutgoingTexts = [
  'Outgoing',
  'Outgoing pledges',
  'Outgoing commitments',
  'Disbursements',
  'Expenditure',
];

describe('Signatory data - outgoing', function() {
  // autoRecord();

  it('should load the page', function() {
    cy.visit('/signatory-data/GB-CHC-274467/outgoing');
  });

  it('check texts', function() {
    signatoryOutgoingTexts.map(text => cy.findAllByText(text).should('exist'));
  });

  it('should show background decoration', function() {
    // cy.findByTestId('DecoSigIncomingTopLeft').should('exist');
  });
});
