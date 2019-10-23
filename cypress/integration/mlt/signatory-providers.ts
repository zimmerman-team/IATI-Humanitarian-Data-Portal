/// <reference types="cypress" />

import autoRecord from 'cypress-autorecord';

const signatoryProviderTexts = [
  'Funders',
  'Funding organisations',
  'Organisation',
  'IATI reference',
  'Organisation type',
  'Activites',
  'Total amount',
];

describe('Signatory data - funders', () =>
  function() {
    // autoRecord();

    it('should load the page', function() {
      cy.visit('/signatory-data/GB-CHC-274467/funders');
    });

    it('check texts', function() {
      signatoryProviderTexts.map(text =>
        cy.findAllByText(text).should('exist')
      );
    });

    it('should show background decoration', function() {
      cy.findByTestId('DecoSigProviderTopLeft').should('exist');
      cy.findByTestId('DecoSignIncomingBottomRight').should('exist');
    });
  });
