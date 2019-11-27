/// <reference types="cypress" />

import autoRecord from 'cypress-autorecord';

const signatoryDataTexts = [
  'Signatory IATI data',
  "This page provides an overview of the IATI ('open') data currently published by individual Grand Bargain signatories and/or their affiliated organisations. Its primary purpose is to enable signatories to monitor their own progress in relation to meeting the data publication commitment of the Grand Bargain.",
  // todo: need to find a way to check text with links
  // 'Each column in the table relates to a specific IATI publishing indicator as defined within the workstream core commitment target results and indicators (CCTRIs). However, it is important to assess the indicators values in the context of how each organisation operates e.g. not all affiliate or other  organisations undertake humanitarian work so may not as yet be publishing any humanitarian information.',
  // 'For the aggregated view, showing the progress of ALL signatories against the publishing commitment since 1 June 2017, is available here',
  '* NA stands for Not Applicable because Government donors are generally at the start of the funding chain',
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
