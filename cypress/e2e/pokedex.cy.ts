describe('pokedex', () => {
  beforeEach(() => cy.visit('/pokedex'));

  it('deve visitar a pagina pokedex', () => {
    cy.get('.po-page-header-title').should('be.visible');
    cy.get('.po-page-header-title').should('contain.text', 'Pokedex');

    cy.get('[data-cy="app-results"]').should('contain.text', 'Exibindo: 1 - 12 de 1302');
  });

  it('deve obter um erro ao tentar listar os pokemons', () => {
    cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon?limit=12&offset=0', {statusCode: 400}).as('stubGet');
    cy.wait('@stubGet');
    cy.contains('Nenhum Pokémon foi encontrado').should('be.visible');
  });
});
