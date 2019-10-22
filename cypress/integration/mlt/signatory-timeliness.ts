/// <reference types="cypress" />

import autoRecord from 'cypress-autorecord';

const signatoryTimelinessTexts = [
  'Publishing frequency',
  'Publishing frequency measures how often an organisation updates their published IATI data. This is useful for any data user to know in order that they can assess how ‘useful’ the published information might be.',
  'The table below shows the number of days for each month on which the published IATI dataset has been assessed as having been updated. An ‘update’ is recorded when a ‘more recent’ transaction date (than the ‘most recent’ previously identified by the portal) is detected.',
  'Data timelag',
];

describe('Signatory data - timeliness', function() {
  // autoRecord();

  it('should load the page', function() {
    cy.visit('/signatory-data/GB-CHC-274467/timeliness');
  });

  it('check texts', function() {
    signatoryTimelinessTexts.map(text =>
      cy.findAllByText(text).should('exist')
    );
  });

  it('should show background decoration', function() {
    cy.findByTestId('DecoSigTimelineTopLeft').should('exist');
  });
});
