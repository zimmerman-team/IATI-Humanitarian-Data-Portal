/// <reference types="cypress" />

import autoRecord from 'cypress-autorecord';

const signatoryTimelinessTexts = [
  'Publishing frequency',
  'The table records the number of days in each of the last twelve months on which the most recently recorded transaction date was observed by the Dashboard to have changed.',
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
