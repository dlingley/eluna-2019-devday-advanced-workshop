describe('searchbar-submenu', () => {
  before(() => {
    cy.visit('/search?vid=PURDUE');
  })

  describe('submenu', () => {
    it('exists', function() {
      cy.get('search-bar-sub-menu > .layout-align-end-center')
      .should('exist')
    })
    
      it('is visible', function() {
        cy.get('search-bar-sub-menu > .layout-align-end-center')
        .should('be.visible')
      })

    describe('has the correct menu items', () => {
      const submenuItems = [
        {
          label: "Provide Feedback",
          link: "https://nyu.qualtrics.com/jfe/form/SV_blQ3OFOew9vl6Pb?Source=NYU",
        },
        {
          label: "Library Hours",
          link: "https://guides.nyu.edu/library-hours",
        }
      ]

      it(`has ${submenuItems.length} buttons`)

      submenuItems.forEach(({ label, link }, idx) => {
        it(`has a button with ${label} which opens ${link} when clicked`)
      })
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
