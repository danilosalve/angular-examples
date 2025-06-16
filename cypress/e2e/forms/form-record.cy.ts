describe('FormRecord', () => {
  beforeEach(() => cy.visit('/forms/form-record'));

  it('deve acessar a página FormRecord', () => {
    cy.get('.po-page-header-title').should('exist').should('be.visible');
    cy.get('.po-page-header-title').should('contain.text', 'Formulários');
    cy.contains('Form Record').should('be.visible');
    cy.contains('Nenhum campo foi selecionado').should('be.visible');
    cy.contains('Selecionar Campos').should('be.visible');

    cy.get('.po-field-container-content').each($el => {
      cy.wrap($el).should('not.be.checked');
    });
  });

  it('deve navegar para a página Formulários ao clicar em voltar', () => {
    cy.contains('button', 'Voltar').should('exist').click({ force: true });
    cy.location('pathname').should('equal', '/forms/container-form');
    cy.contains('Control Container').should('exist').should('be.visible');
  });

  it('ao selecionar um checkbox deve exibir um campo', () => {
    cy.contains('Nome').should('exist').click();
    cy.contains('Nenhum campo foi selecionado').should('not.exist');

    cy.get('[placeholder="Informe seu nome"]').type('Danilo');
    cy.get('pre').should('contain.text', 'Danilo');
  });
});
