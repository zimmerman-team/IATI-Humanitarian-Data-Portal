/// <reference types="cypress" />

import autoRecord from 'cypress-autorecord';

const texts = [
  'A Spotlight on International',
  'Humanitarian',
  'Assistance IATI Data',
  // 'Why the Grand Bargain Transparency Commitment is aiming to improve the availability of timely, high quality, harmonised and transparent open data on global humanitarian action.',
  'Grand Bargain Signatories',
  'GB signatories publishing to IATI',
  'Signatories & affiliates publishing humanitarian data',
];

describe('Landing', function() {
  // autoRecord();

  it('should load the page', function() {
    cy.visit('/');
  });

  /*it('image snapshot', function() {
    cy.document().toMatchImageSnapshot();
  });*/

  it('should show the main navigation', function() {
    cy.findByTestId('main-nav-button-container').should('exist');
    cy.findByTestId('Home').should('exist');
    cy.findByTestId('About').should('exist');
    cy.findByTestId('Signatory Progress').should('exist');
    cy.findByTestId('Signatory Data').should('exist');
    cy.findByTestId("FAQ's").should('exist');
  });

  it('should show the correct texts', function() {
    texts.map(text => cy.queryByText(text).should('exist'));
  });

  it('should show background decoration', function() {
    cy.findByTestId('landing-decoration').should('exist');
  });

  it('should show stat container and stats', function() {
    cy.findByTestId('stat-container').should('exist');
    cy.findAllByTestId('stat').should('exist');
    cy.findAllByTestId('stat').should('have.length', 3);
    cy.findAllByTestId('stat-description').should('exist');
    cy.findAllByTestId('stat-value').should('exist');
  });

  it('should show the cookie dialog', function() {
    cy.findByTestId('cookie-dialog').should('exist');
  });
});
