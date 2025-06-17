describe('FormRecord', () => {
  beforeEach(() => cy.visit('/forms/form-record'));

  it('deve acessar a página FormRecord', () => {
    cy.get('.po-page-header-title').should('exist').should('be.visible');
    cy.get('.po-page-header-title').should('contain.text', 'Formulários');
    cy.contains('Form Record').should('be.visible');
    cy.contains('Nenhum campo foi selecionado').should('be.visible');
    cy.contains('Selecionar Campos').should('be.visible');

    cy.get('.po-checkbox-group-content')
      .children()
      .each(() => {
        cy.get('.po-checkbox-group-item')
          .children()
          .each($el => {
            cy.wrap($el).should('not.be.checked');
          });
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

  it('deve selecionar todos os campos', () => {
    cy.get('.po-checkbox-group-content')
      .children()
      .each(() => {
        cy.get('.po-checkbox-group-item')
          .children()
          .each($cb => {
            cy.wrap($cb).click();
          });
      });

    cy.fixture('employee').then(data => {
      cy.get('[placeholder="Informe seu nome"]').type(data.name);
      cy.get('[placeholder="Informe o seu e-mail"]').type(data.email);
      cy.get('[placeholder="0"]').type(data.age);
      cy.get('[placeholder="Informe o seu Departamento"]').type(data.departament);
      cy.get('[placeholder="Informe o seu Cargo"]').type(data.cargo);
      cy.get('[placeholder="(99) 99999-9999"]').type(data.cellphone);
    });
  });
});
