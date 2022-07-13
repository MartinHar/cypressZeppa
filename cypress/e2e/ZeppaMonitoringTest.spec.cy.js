/// <reference types="cypress" />

describe('monitoring', () => {
    let LOAdmin = {emailAddress:'loii@sef.am', password:'Password1'}
    it('LO turn', () => {
        cy.visit('http://ec2-34-240-105-163.eu-west-1.compute.amazonaws.com/login')
        cy.get('[name="email"]').type(LOAdmin.emailAddress)
        cy.get('[name="password"]').type(LOAdmin.password)
        cy.get('[type="submit"]').click()
        cy.wait(1500)
    })


})