// Add partner - working flow, with corresponding admins at E11 branch
// noinspection DuplicatedCode

/// <reference types="cypress" />

// const { type } = require("os");

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

// generate random numbers
function getRandomNumber(digit) {
    return Math.random().toFixed(digit).split('.')[1];
}

// generate random Arm word
function makeArmWord(length) {
    let result           = '';
    let characters       = 'ԱԲԳԴԵԶԷԸԹ';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() *
charactersLength));
}
return result;
}

// generate random Eng word
function makeEngWord(length) {
    let result           = '';
    let characters       = 'ABCDEFGHI';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() *
charactersLength));
}
return result;
}

let emailAddress = 'generated@automatically.com'
let u_r_l = 'https://www.cypress.io/'
let birthday = '01-01-1990'
let socialCardIssueDate = '01-01-2010'
let passportIssueDate = '01-01-2022'
let passportExpireDate = '01-01-2025'
let privateCompanyRegDate = '01-01-2000'

let LOAdmin = {emailAddress:'loii@sef.am', password:'Password1'}
let LGLAdmin = {emailAddress:'testlo@sef.am', password:'Password2'}


describe('Add partner',() => {


    
    it('Zeppa login page, create potential partner',() => {

        cy.visit('/')
        cy.get('[name="email"]').type(LOAdmin.emailAddress)
        cy.get('[name="password"]').type(LOAdmin.password)
        cy.get('[type="submit"]').click()
        cy.wait(1500)

        cy.contains('Գործընկերներ').click()
        cy.wait(500)
        cy.contains('Հավանական գործընկերներ').click()
        cy.wait(500)
        cy.contains('Գրանցել գործընկերոջը').click()
        cy.wait(500)

        cy.get('[name = legalName]').type(makeArmWord(7))
        cy.get('[name="taxCode"]').type(getRandomNumber(8))
        cy.get('[name="firstName"]').type(makeArmWord(7))
        cy.get('[name="lastName"]').type(makeArmWord(7))
        cy.get('[name="patronymic"]').type(makeArmWord(9))
        // Admin code
        cy.get('.ant-form-item-control-input').eq(5).type('E11').type('{enter}')
        // Address
        cy.get('.ant-select-selection-item').eq(1).click()
        cy.get('[class="ant-select-item-option-content"]').contains('Երևան').click()
        cy.get('[class="ant-select-selection-item"]').eq(2).click()
        cy.get('[title="Աջափնյակ"]').click()
        cy.get('[name="addressDTOS.street"]').type(makeArmWord(4))
        cy.get('[name="addressDTOS.houseNumber"]').type(getRandomNumber(4))
        cy.get('[name="addressDTOS.apartmentNumber"]').type(getRandomNumber(2))
        cy.wait(500)
        cy.get('[type="submit"]').click()
        cy.wait(3000)
    })

    it('Filtering potential partner',() => {

        cy.visit('/')
        cy.get('[name="email"]').type(LGLAdmin.emailAddress)
        cy.get('[name="password"]').type(LGLAdmin.password)
        cy.get('[type="submit"]').click()
        cy.wait(1500)

        cy.contains('Գործընկերներ').click()
        cy.wait(500)
        cy.contains('Հավանական գործընկերներ').click()
        cy.wait(500)
        //latest in the list
        cy.get('[class="ant-table-tbody"]').find('[data-row-key="1"]').click()
        //radio button 'Ztel'
        cy.get('[type="radio"]').eq(1).click()
        cy.wait(1500)
        //comment field
        cy.get('[name="decisionFeedback"]').type(makeArmWord(9))
        cy.wait(2000)
        //attach file #1 //should be in fixtures path, and locator must contain type="file"
        for(let i = 0; i < 4; i ++){
            cy.get('[accept="image/png, image/jpeg, application/pdf, application/x-pdf"]').eq(i).attachFile('CypressLogo.jpeg')
            cy.wait(2000)
        }
        cy.get('[type="submit"]').click()
        cy.wait(2000)
    })
    it('add chain',() => {

        cy.visit('/')
        cy.get('[name="email"]').type(LOAdmin.emailAddress)
        cy.get('[name="password"]').type(LOAdmin.password)
        cy.get('[type="submit"]').click()
        cy.wait(1500)

        cy.contains('Գործընկերներ').click()
        cy.wait(500)
        cy.contains('Հավանական գործընկերներ').click()
        cy.wait(500)
        //latest in the list
        cy.get('[class="ant-table-tbody"]').find('[data-row-key="1"]').click()
        //add button
        cy.contains('Գրանցել').click()
        
        cy.get('[name="phoneNumber"]').type(getRandomNumber(8))
        cy.get('[name="contactNumber"]').type(getRandomNumber(8))
        cy.get('[name="contactEmail"]').type(emailAddress)
        cy.wait(500)
        cy.contains('ԱՁ').click()
        cy.get('[name="pageLink"]').type(u_r_l)
        cy.get('[name="brandName"]').type(makeEngWord(5))
        cy.get('[name="nickname"]').type(makeEngWord(5))
        cy.get('[name="email"]').type(emailAddress)
        cy.wait(500)
        cy.get('[name="bankAccount"]').type(getRandomNumber(10))
        cy.wait(500)
        cy.get('[name="bankAccountUsd"]').type(getRandomNumber(10))
        cy.wait(500)
        //ADMIN code
        cy.get('.ant-form-item-control-input-content').eq(13).type('LOIII').type('{enter}')
        //birthday date picker
        cy.get('.ant-picker-input').eq(0).type(birthday).type('{enter}')
        cy.get('.ant-select-selection-item').eq(1).click()
        cy.contains('Հայաստան').eq(0).click()
        cy.wait(500)
        cy.get('.ant-select-selection-item').eq(2).click()
        cy.contains('ՀՀ քաղաքացի').eq(0).click()
        cy.wait(500)
        cy.contains('Արական').click()
        cy.wait(500)
        cy.get('.ant-select-selection-item').eq(3).click()
        cy.wait(500)
        cy.get('.ant-select-item-option-content').eq(16).click()
        cy.get('[name="socialCard"]').type(getRandomNumber(10))
        cy.get('.ant-picker-input').eq(1).type(socialCardIssueDate).type('{enter}')
        cy.get('.ant-select-selection-item').eq(4).click()
        cy.contains('Անձնագիր').click()
        cy.get('[name="passportId"]').type(getRandomNumber(5))
        cy.get('[name="issuingAuthority"]').type(getRandomNumber(3))
        cy.get('.ant-picker-input').eq(2).type(passportIssueDate).type('{enter}')
        cy.get('.ant-picker-input').eq(3).type(passportExpireDate).type('{enter}')
        cy.get('[name="stateRegistrationNumber"]').type(getRandomNumber(9))
        cy.get('[name="registrationNumberForPE"]').type(getRandomNumber(5))
        cy.get('.ant-picker-input').eq(4).type(privateCompanyRegDate).type('{enter}')
        //Ապրանք checkbox
        cy.get('[type="checkbox"]').eq(1).click()
        cy.get('.ant-select-selection-overflow').eq(0).click()
        cy.contains('Ապրանք - Մթերք').click()
        //Ծառայություն checkbox
        cy.get('[type="checkbox"]').eq(2).click()
        cy.get('.ant-form-item-control-input-content').eq(37).type('Ծառայություն - Այս ').type('{enter}')
        // Նույնն է checkbox
        cy.get('[type="checkbox"]').eq(3).click()
        cy.get('[type="file"]').eq(0).attachFile('zip.zip')
        cy.get('[type="submit"]').click()
    })
})