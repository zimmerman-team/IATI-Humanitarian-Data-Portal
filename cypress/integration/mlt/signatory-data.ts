/// <reference types="cypress" />

import autoRecord from 'cypress-autorecord';

const signatoryDataTexts = [
  'Grand Bargain signatories',
  'An overview of the IATI ("open") data currently published by individual Grand Bargain signatorys or their affiliated organisations. Its primary purpose is to enable Signatories to monitor their own progress in relation to meeting the data publication commitment of the Grand Bargain. Each column in the table relates to a specific IATI publishing indicator as defined within the workstream Core Commitment Target Results & Indicators (CCTRIs).',
  '* NA stands for Not Applicable',
];

describe('Signatory data', function() {
  // autoRecord();

  it('should load the page', function() {
    cy.visit('/signatory-data');
  });

  it('check texts', function() {
    signatoryDataTexts.map(text => cy.queryByText(text).should('exist'));
  });

  it('should show background decoration', function() {
    cy.findByTestId('DecoSigDataTopLeft').should('exist');
  });
});
