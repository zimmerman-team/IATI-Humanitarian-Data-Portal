/// <reference types="cypress" />

import autoRecord from 'cypress-autorecord';

const signatoryCCTRITexts = [
  'CCTRI; Core commitment target results and indicators',
  'There are two indicators and targets relating to this commitment:',
  '1. % of Grand Bargain signatories (or their affiliates) publishing humanitarian data to IATI, and % publishing more usable humanitarian data.',
  'Progress against this indicator is monitored via this portal.',
];

describe('CCTRI', function() {
  // autoRecord();

  it('should load the page', function() {
    cy.visit('/signatory-progress/cctri-target');
    cy.wait(1000);
  });

  it('check texts', function() {
    signatoryCCTRITexts.map(text => cy.queryByText(text).should('exist'));
  });
});
