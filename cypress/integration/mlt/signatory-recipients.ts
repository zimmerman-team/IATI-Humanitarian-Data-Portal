/// <reference types="cypress" />

import autoRecord from 'cypress-autorecord';

const signatoryRecipientsTexts = [
  'Recipient Organisation Types',
  'Organisation',
  'IATI reference',
  'Organisation type',
  'Activites',
  'Total amount',
];

describe('Signatory data - recipients', function() {
  // autoRecord();

  it('should load the page', function() {
    cy.visit('/signatory-data/GB-CHC-274467/recipients');
  });

  it('check texts', function() {
    signatoryRecipientsTexts.map(text =>
      cy.findAllByText(text).should('exist')
    );
  });

  it('should show background decoration', function() {
    cy.findByTestId('DecoSigRecTopLeft').should('exist');
    cy.findByTestId('DecoSigRecBottomRight').should('exist');
  });
});
