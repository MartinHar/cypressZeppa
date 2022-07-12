// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// 
import 'cypress-file-upload';

Cypress.Commands.add('loginToZeppaAdmin', () => {
    let adminLogin = 'supm@sef.am'
    let adminPassword = 'Password3'

    cy.visit('http://ec2-34-240-105-163.eu-west-1.compute.amazonaws.com/login')
    cy.get('[name="email"]').type(adminLogin)
    cy.get('[name="password"]').type(adminPassword)
    cy.get('[type="submit"]').click()
    cy.wait(3000)
})