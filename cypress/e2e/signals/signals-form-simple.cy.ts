describe('signals-form-simple', () => {
  beforeEach(() => cy.visit('/signals/form-simple'));

  it('deve preencher os campos Nome, Sobrenome e Idade', () => {
    cy.get('[data-cy="input-firstName"] input').type('Joao').should('have.value', 'Joao');

    cy.get('[data-cy="input-lastName"] input').type('Silva').should('have.value', 'Silva');

    cy.get('[data-cy="input-age"] input').clear().type('30').should('have.value', '30');

    cy.get('.po-container:contains("Resultado") pre').eq(0).should('have.text', 'Joao');
    cy.get('.po-container:contains("Resultado") pre').eq(1).should('have.text', 'Silva');
    cy.get('.po-container:contains("Resultado") pre').eq(2).should('have.text', '30');
  });

  it('deve exibir mensagem de erro ao digitar nome inválido', () => {
    cy.get('[data-cy="input-firstName"] input').type('joao'); // minúsculo, inválido

    cy.contains('Informe somente Letras - Somente a primeira letra deve ser maiúscula').should('be.visible');
  });

  it('deve exibir mensagem de erro ao digitar sobrenome inválido', () => {
    cy.get('[data-cy="input-lastName"] input').type('silva'); // minúsculo, inválido

    cy.contains('Informe somente Letras - Somente a primeira letra deve ser maiúscula').should('be.visible');
  });

  it('deve exibir mensagem de erro ao digitar sobrenome inválido', () => {
    cy.get('[data-cy="input-age"] input').clear().type('-1'); // número negativo

    cy.contains('Informe somente números positivos').should('be.visible');
  });

  it('deve navegar para a página Signals ao clicar em voltar', () => {
    cy.contains('button', 'Voltar').click({ force: true });
    cy.url().should('include', '/signals/sample');
    // Opcional: verificar se algum conteúdo da página /signals está visível
    cy.contains('Exemplo Untracked').should('be.visible');
  });

  it('deve exibir mensagem de erro ao digitar os dados do formulário inválidos', () => {
    cy.fixture('users').then((users: User) => {
      users.items.forEach(user => {
        cy.get('[data-cy="input-firstName"] input').clear().type(user.firstName);
        cy.contains('Informe somente Letras - Somente a primeira letra deve ser maiúscula').should('be.visible');

        cy.get('[data-cy="input-lastName"] input').clear().type(user.lastName);
        cy.contains('Informe somente Letras - Somente a primeira letra deve ser maiúscula').should('be.visible');
      });
    });
  });
});

interface User {
  items: [
    {
      user: string;
      firstName: string;
      lastName: string;
    }
  ]
}
