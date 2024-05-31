describe('template spec', () => {
  it('passes', () => {
    expect(Cypress.env()).to.have.property('stripeKey')
    expect(Cypress.env('STRIPE_KEY')).to.eq('pk_test_DJYoIp8py8PUFfgCySGnS3Nu00phlssDq3')
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

