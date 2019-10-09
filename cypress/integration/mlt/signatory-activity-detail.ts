/// <reference types="cypress" />

import autoRecord from 'cypress-autorecord';

const signatoryDetailTexts = [
  'Incoming transactions',
  'Outgoing transactions',
  'Activity summary',
  'Humanitarian scope',
  'Participating organisations',
  'Budget',
  'Sectors',
  'Contact information',
  'Reporting organisation',
  'Recipient countries',
  'Default aid type',
  'Activity dates',
];

describe('Activity detail', function() {
  // autoRecord();

  it('should load the page', function() {
    cy.visit('/activity-detail/GB-CHC-274467-102013');
  });

  it('check elements', function() {
    cy.findByTestId('BreadCrumbs').should('exist');
    cy.findByTestId('organisation').should('exist');
    cy.findByTestId('title').should('exist');
    cy.findByTestId('activity-code').should('exist');
    cy.findByTestId('dates').should('exist');
  });

  it('check texts', function() {
    signatoryDetailTexts.map(text => cy.findAllByText(text).should('exist'));
  });
});
