describe('star-wars-vehicle', () => {
  beforeEach(() => cy.visit('/signals/vehicle', {
    onBeforeLoad (win) {
      Object.defineProperty(win.navigator, 'language', {
        value: 'pt-BR'
      })
    }
  }));

  it('deve acessar a página Signals | Linked', () => {
    cy.get('.po-page-header-title').should('exist').should('be.visible');
    cy.get('.po-page-header-title').should('contain.text', 'Veiculos');
    cy.get('.po-page-header-subtitle').should('contain.text', 'Exemplo Linked Signals');

    cy.contains('Veiculo Selecionado: -').should('be.visible');
    cy.contains('Preço do veiculo: R$0.00').should('be.visible');
    cy.contains('Total: R$0.00').should('be.visible');
  });

  it('deve navegar para a página Formulários ao clicar em voltar', () => {
    cy.contains('button', 'Voltar', { timeout: 10000 }).scrollIntoView().should('be.visible').click();
    cy.location('pathname').should('equal', '/signals/samples');
    cy.get('.po-page-header-title').should('exist').should('be.visible');
    cy.get('.po-page-header-title').should('contain.text', 'Exemplos Signals');
  });

  it('deve selecionar um veiculo na Lista', () => {
    cy.get('[data-cy="cb-vehicle"] input').click();
    cy.wait(2000);
    cy.get('[data-cy="cb-vehicle"] input').type('Sand Crawler - 30');
    cy.get('[data-cy="cb-vehicle"] input').type('{enter}');
    cy.wait(2000);

    cy.contains('Veiculo Selecionado: Sand Crawler - 30').should('be.visible');
    cy.contains('Capacidade de passageiros: 30').should('be.visible');
    cy.contains('Preço do veiculo: R$150,000.00').should('be.visible');
    cy.contains('Total: R$4,500,000.00').should('be.visible');
  });
});
