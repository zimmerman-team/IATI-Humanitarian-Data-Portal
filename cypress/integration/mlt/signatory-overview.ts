/// <reference types="cypress" />

import autoRecord from 'cypress-autorecord';

const signatoryOverviewTexts = [
  'Activity timeline',
  'Humanitarian elements',
  'Status',
  'Hum. activities with FTS Import related',
  'Hum. activity with Grand Bargain classifications',
  'Hum. other classifications of intererest',
  'Hum. activities',
  'Hum. activites with location information',
  'Hum. activites with multi-year funding',
  'Financial reporting',
];

describe('Signatory data - overview', function() {
  // autoRecord();

  it('should load the page', function() {
    cy.visit('/signatory-data/GB-CHC-274467/overview');
  });

  it('check texts', function() {
    signatoryOverviewTexts.map(text => cy.findAllByText(text).should('exist'));
  });

  it('should show background decoration', function() {
    // cy.findByTestId('DecoSigDataTopLeft').should('exist');
  });
});
