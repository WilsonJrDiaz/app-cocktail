
describe('search cocktails by a given value', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('baseUrl'))
  })

  it('should have 5 items above, top 5 most popular cocktails', () => {
    cy.get("h2").contains("Top 5 most popular cocktails:");
    //Espera ver 5 cocktails mas popuares
    cy.get('div').children('.cocktail').should('have.length', 5)

  })

  it('should type and look for a cocktail list ', () => {
      
    cy.get('#input-search').type('Sangria')

    cy.get('#btn-search').click()

});

})

