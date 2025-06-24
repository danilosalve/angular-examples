describe('Defer', () => {
  beforeEach(() => cy.visit('/defer', {
    onBeforeLoad (win) {
      Object.defineProperty(win.navigator, 'language', {
        value: 'pt-BR'
      })
    }
  }));

  context('Interaction', () => {
    beforeEach(() => cy.get('app-interaction').should('exist'));

    it('O conteúdo deve estar oculto', () => {
      cy.contains('Clique aqui para exibir o complemento').should('exist');
      cy.contains('somente depois que um usuário interagir com um elemento específico').should('not.exist');
    });

    it('deve exibir o conteúdo ao interagir com o componente', () => {
      cy.contains('Clique aqui para exibir o complemento').should('exist').click();
      cy.contains('Clique aqui para exibir o complemento').should('not.exist');
    });
  })
})
