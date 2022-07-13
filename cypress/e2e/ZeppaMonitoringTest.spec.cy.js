/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
// generate random numbers
function getRandomNumber(digit) {
    return Math.random().toFixed(digit).split('.')[1];
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
const LOAdmin = {emailAddress: 'loii@sef.am', password: 'Password1'}
const BMAdmin = {emailAddress: 'mj11@sef.am', password: 'Password1'}
const PCAdmin = {emailAddress: 'pcpc@sef.am', password: 'Password1'}

let partnerIndex = 0

describe('monitoring with assignment', () => {


    it('LO turn', () => {

        cy.visit('/')
        cy.get('[name="email"]').type(LOAdmin.emailAddress)
        cy.get('[name="password"]').type(LOAdmin.password)
        cy.get('[type="submit"]').click()
        cy.wait(1500)

        cy.contains('Գործընկերներ').click()
        cy.wait(500)

        cy.get('.ant-table-row').eq(partnerIndex).click()
        cy.wait(1500)
        cy.contains('Մոնիթորինգ').click()
        cy.wait(1500)
        cy.get('[name="threeMonthsCashMoneyCirculation"]').type(getRandomNumber(5))
        cy.get('[name="threeMonthsNonCashMoneyCirculation"]').type(getRandomNumber(5))
        cy.get('[name="seasonCirculation"]').type(`${getRandomNumber(5)}-${getRandomNumber(5)}`)
        // check all radio buttons with YES value at once
        cy.get('[type="radio"]').check('YES')
        cy.get('[name="currentLoanAmount"]').type(getRandomNumber(5))
        cy.get('[name="maxLoanAmount"]').type(getRandomNumber(5))
        cy.get('[name="currentMaxExpiredAmount"]').type(getRandomNumber(5))
        cy.get('[name="additionalInfo"]').type(makeEngWord(5))
        cy.get('[type="submit"]').click()

        cy.wait(2000)
    })

    it('BM turn', () => {
        cy.visit('/')
        cy.get('[name="email"]').type(BMAdmin.emailAddress)
        cy.get('[name="password"]').type(BMAdmin.password)
        cy.get('[type="submit"]').click()
        cy.wait(1500)

        cy.contains('Գործընկերներ').click()
        cy.wait(500)

        cy.get('.ant-table-row').eq(partnerIndex).click()
        cy.wait(1500)
        cy.contains('Մոնիթորինգ').click()
        cy.wait(1500)

        cy.contains('ՄՃ/Վաճառք հաստատում').click()

        cy.wait(2000)
    })

    it('PC assignment', () => {
        cy.visit('/')
        cy.get('[name="email"]').type(PCAdmin.emailAddress)
        cy.get('[name="password"]').type(PCAdmin.password)
        cy.get('[type="submit"]').click()
        cy.wait(1500)

        cy.contains('Գործընկերներ').click()
        cy.wait(500)

        cy.get('.ant-table-row').eq(partnerIndex).click()
        cy.wait(1500)
        cy.contains('Մոնիթորինգ').click()
        cy.wait(1500)

        cy.contains('Հանձնարարել').click()
        cy.wait(1500)

        cy.get('.ant-select-selector').click()


        for (let i = 0; i < 3; i++) {
            cy.get('.ant-select-item-option-content').eq(i).click()
            cy.wait(500)
        }

        cy.get('.ant-modal-body').find('.ant-input').type(makeEngWord(5))
        cy.get('.ant-modal-footer').contains('Հանձնարարել').click()

        cy.wait(2000)
    })

    it('LO approval after PC assignment', () => {
        cy.visit('/')
        cy.get('[name="email"]').type(LOAdmin.emailAddress)
        cy.get('[name="password"]').type(LOAdmin.password)
        cy.get('[type="submit"]').click()
        cy.wait(1500)

        cy.contains('Գործընկերներ').click()
        cy.wait(500)

        cy.get('.ant-table-row').eq(partnerIndex).click()
        cy.wait(1500)
        cy.contains('Մոնիթորինգ').click()
        cy.wait(1500)

        cy.contains('Կատարել').click()

        cy.wait(2000)
    })

    it('PC approval and AC fields filling', () => {
        cy.visit('/')
        cy.get('[name="email"]').type(PCAdmin.emailAddress)
        cy.get('[name="password"]').type(PCAdmin.password)
        cy.get('[type="submit"]').click()
        cy.wait(1500)

        cy.contains('Գործընկերներ').click()
        cy.wait(500)

        cy.get('.ant-table-row').eq(partnerIndex).click()
        cy.wait(1500)
        cy.contains('Մոնիթորինգ').click()
        cy.wait(1500)

        cy.contains('ՀՊ հաստատում').click()

        cy.wait(2000)

        cy.get('.ant-menu-title-content').contains('Ընդհանուր').click()

        cy.get('[name="asCliCode"]').type(getRandomNumber(8))
        cy.get('[name="asAccountNumber"]').type(getRandomNumber(11))
        cy.get('[type="submit"]').click()

        cy.wait(2000)
    })


})
describe('monitoring without assignment', () =>{

    it('LO turn', () => {

        cy.visit('/')
        cy.get('[name="email"]').type(LOAdmin.emailAddress)
        cy.get('[name="password"]').type(LOAdmin.password)
        cy.get('[type="submit"]').click()
        cy.wait(1500)

        cy.contains('Գործընկերներ').click()
        cy.wait(500)

        cy.get('.ant-table-row').eq(partnerIndex).click()
        cy.wait(1500)
        cy.contains('Մոնիթորինգ').click()
        cy.wait(1500)
        cy.get('[name="threeMonthsCashMoneyCirculation"]').type(getRandomNumber(5))
        cy.get('[name="threeMonthsNonCashMoneyCirculation"]').type(getRandomNumber(5))
        cy.get('[name="seasonCirculation"]').type(`${getRandomNumber(5)}-${getRandomNumber(5)}`)
        // check all radio buttons with YES value at once
        cy.get('[type="radio"]').check('YES')
        cy.get('[name="currentLoanAmount"]').type(getRandomNumber(5))
        cy.get('[name="maxLoanAmount"]').type(getRandomNumber(5))
        cy.get('[name="currentMaxExpiredAmount"]').type(getRandomNumber(5))
        cy.get('[name="additionalInfo"]').type(makeEngWord(5))
        cy.get('[type="submit"]').click()

        cy.wait(2000)
    })

    it('BM turn', () => {
        cy.visit('/')
        cy.get('[name="email"]').type(BMAdmin.emailAddress)
        cy.get('[name="password"]').type(BMAdmin.password)
        cy.get('[type="submit"]').click()
        cy.wait(1500)

        cy.contains('Գործընկերներ').click()
        cy.wait(500)

        cy.get('.ant-table-row').eq(partnerIndex).click()
        cy.wait(1500)
        cy.contains('Մոնիթորինգ').click()
        cy.wait(1500)

        cy.contains('ՄՃ/Վաճառք հաստատում').click()

        cy.wait(2000)
    })

    it('PC approval and AC fields filling', () => {
        cy.visit('/')
        cy.get('[name="email"]').type(PCAdmin.emailAddress)
        cy.get('[name="password"]').type(PCAdmin.password)
        cy.get('[type="submit"]').click()
        cy.wait(1500)

        cy.contains('Գործընկերներ').click()
        cy.wait(500)

        cy.get('.ant-table-row').eq(partnerIndex).click()
        cy.wait(1500)
        cy.contains('Մոնիթորինգ').click()
        cy.wait(1500)

        cy.contains('ՀՊ հաստատում').click()

        cy.wait(2000)

        cy.get('.ant-menu-title-content').contains('Ընդհանուր').click()

        cy.get('[name="asCliCode"]').type(getRandomNumber(8))
        cy.get('[name="asAccountNumber"]').type(getRandomNumber(11))
        cy.get('[type="submit"]').click()

        cy.wait(2000)
    })
})
