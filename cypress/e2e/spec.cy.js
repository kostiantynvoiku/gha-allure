describe('template spec', () => {
  it('passes', () => {
    console.log('USER: ', Cypress.env('USER'))
    console.log('PASSWORD: ', Cypress.env('PASSWORD'))
    console.log('STRIPE_KEY: ', Cypress.env('stripeKey'))
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

