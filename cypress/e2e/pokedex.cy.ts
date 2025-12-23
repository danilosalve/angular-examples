describe('pokedex', () => {
    beforeEach(() => cy.visit('sample/pokedex', {
    onBeforeLoad (win) {
      Object.defineProperty(win.navigator, 'language', {
        value: 'pt-BR'
      })
    }
  }));

  context('A lista de Pokemons', () => {
    it('deve visitar a pagina pokedex', () => {
      cy.get('.po-page-header-title').should('be.visible');
      cy.get('.po-page-header-title').should('contain.text', 'Pokedex');

      cy.get('[data-cy="app-results"]').should('contain.text', 'Exibindo: 1 - 12 de 1350');
    });

    it('deve obter um erro ao tentar listar os pokemons', () => {
      cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon?limit=12&offset=0', { statusCode: 400 }).as('stubGet');
      cy.wait('@stubGet');
      cy.contains('Nenhum Pokémon foi encontrado').should('be.visible');
    });
  });

  context('Nos detalhes do Pokemons', () => {
    it('deve navegar para os detalhes de um Pokemon', () => {
      cy.intercept('https://pokeapi.co/api/v2/pokemon/butterfree').as('stubGetButterfree');
      cy.wait('@stubGetButterfree');
      cy.contains('Bulbasaur').should('exist').click();
      cy.location('pathname').should('eq', '/sample/pokedex/detail/1');

      cy.contains('Bulbasaur').should('be.visible');
      cy.contains('Nº 0001').should('be.visible');
    })
  });
});
