describe('searchbar-submenu', () => {
  before(() => {
    cy.visit('/search?vid=PURDUE');
  })


    describe('test search works', () => {
      it('get a search result', function() {
        cy.get('#searchBar')
        .type('purdue').should('have.value', 'purdue')

        cy.get('.button-confirm > prm-icon > .md-primoExplore-theme').click()

      })
    })
  })
})
