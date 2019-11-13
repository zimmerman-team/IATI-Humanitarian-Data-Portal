/// <reference types="cypress" />

import autoRecord from 'cypress-autorecord';

const signatoryActivityTexts = [
  'Humanitarian activities',
  'Start date',
  'End date',
  'Status',
  'Activity title',
  'Country(s)',
  'Result',
];

describe('Signatory data - activity list', function() {
  // autoRecord();

  it('should load the page', function() {
    cy.visit('/signatory-data/GB-CHC-274467/activity-list');
  });

  it('check texts', function() {
    signatoryActivityTexts.map(text => cy.findAllByText(text).should('exist'));
  });

  it('should show background decoration', function() {
    // cy.findByTestId('DecoSigDataTopLeft').should('exist');
  });
});
