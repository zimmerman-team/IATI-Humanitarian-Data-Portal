/// <reference types="cypress" />

import autoRecord from 'cypress-autorecord';

const aboutTexts = [
  'The Grand Bargain transparency commitment',
  'What is the Grand Bargain?',
  'What is the Grand Bargain transparency commitment?',
  'What is IATI and why is it part of the transparency commitment?',
];

describe('About', function() {
  // autoRecord();

  it('should load the page', function() {
    cy.visit('/about');
  });

  /*it('image snapshot', function() {
    cy.document().toMatchImageSnapshot();
  });*/

  /*it('html snapshot', function() {
    cy.findAllByTestId('paragraph')
      .should('exist')
      .toMatchImageSnapshot();
  });*/

  it('should show the correct title', function() {
    aboutTexts.map(text => cy.queryByText(text).should('exist'));
  });

  it('should show background decoration', function() {
    cy.findByTestId('DecoAboutTopLeft').should('exist');
    cy.findByTestId('DecoAboutRight').should('exist');
    cy.findByTestId('DecoAboutMidRight').should('exist');
    cy.findByTestId('DecoAboutMidLeft').should('exist');
    cy.findByTestId('DecoAboutBottomRight').should('exist');
  });

  it('should show footer and the correct content', function() {
    cy.findByTestId('Footer').should('exist');
    cy.findByTestId('DI link').should('exist');
    cy.findByTestId('GOV link').should('exist');
    cy.findByTestId('GB link').should('exist');
  });
});
