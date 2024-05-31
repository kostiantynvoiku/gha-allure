describe('template spec', () => {
  it('passes', () => {
    expect(Cypress.env('user')).to.eq('kostiantyn.voiku@qodeup.com')
    expect(Cypress.env('password')).to.eq('123qwe123QWE')
    expect(Cypress.env('stripeKey')).to.eq('pk_test_DJYoIp8py8PUFfgCySGnS3Nu00phlssDq3')
    cy.visit('https://example.cypress.io')
    cy.get('#utilities').should('exist')
  })
})

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    cy.get('#utilities').should('exist')
  })
})
 

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    cy.get('#utilities').should('exist')
  })
})

