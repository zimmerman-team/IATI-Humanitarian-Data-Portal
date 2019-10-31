/// <reference types="cypress" />

import autoRecord from 'cypress-autorecord';

const signatoryCoverageTexts = [
  'Coverage data',
  'Period started',
  'Period end',
  'Operational funds available',
  'Disbursements & expenditure',
  'Rating',
];

describe('Signatory data - coverage', function() {
  // autoRecord();

  it('should load the page', function() {
    cy.visit('/signatory-data/GB-CHC-274467/coverage');
  });

  it('check texts', function() {
    signatoryCoverageTexts.map(text => cy.findAllByText(text).should('exist'));
  });

  it('should show background decoration', function() {
    cy.findByTestId('DecoSigOverviewTopLeft').should('exist');
  });
});
