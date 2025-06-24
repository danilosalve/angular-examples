describe('ControlContainer', () => {
  beforeEach(() => cy.visit('/forms/container-form', {
    onBeforeLoad (win) {
      Object.defineProperty(win.navigator, 'language', {
        value: 'pt-BR'
      })
    }
  }));

  context('Aba de Pessoas - Formulário', () => {
    it('deve exibir o título e as abas corretamente', () => {
      cy.contains('Pessoas').should('be.visible');
      cy.contains('Dados Gerais').should('be.visible');
      cy.contains('Endereço').should('be.visible');
      cy.contains('JSON').should('be.visible');
    });

    it('deve preencher os campos do formulário', () => {
      cy.fixture('people').then(people => {
        cy.get('app-person [formControlName="name"]').type(people.name);
        cy.get('app-person [formControlName="document"]').type(people.cpf);

        cy.contains('Endereço').click();

        cy.get('app-person [formControlName="street"]').type(people.street);
        cy.get('app-person [formControlName="addressNumber"]').clear().type(people.addressNumber);
        cy.get('app-person [formControlName="city"]').type(people.city);
        cy.get('app-person [formControlName="state"]').type(people.state);
        cy.get('app-person [formControlName="zipCode"]').type(people.zipCode);
        cy.get('app-person [formControlName="complement"]').type(people.complement);

        cy.contains('JSON').click();

        cy.get('pre').should('contain.text', people.name);
        cy.get('pre').should('contain.text', people.cpf);
        cy.get('pre').should('contain.text', people.street);
        cy.get('pre').should('contain.text', people.addressNumber);
        cy.get('pre').should('contain.text', people.city);
        cy.get('pre').should('contain.text', people.state);
        cy.get('pre').should('contain.text', people.zipCode);
        cy.get('pre').should('contain.text', people.complement);
      });
    });

    it('deve exibir o componente de endereço ao clicar na aba Endereço', () => {
      cy.contains('Endereço').click();
      cy.get('app-address').should('exist');
    });
  });

  context('Aba de Vendedores - Formulário', () => {
    beforeEach(() => {
      cy.contains('Pessoas').click();
      cy.contains('Vendedores').click()
    });

    it('deve exibir o título e as abas corretamente', () => {
      cy.contains('Pessoas').should('be.visible');
      cy.contains('Dados Gerais').should('be.visible');
      cy.contains('Endereço').should('be.visible');
      cy.contains('JSON').should('be.visible');
    });

    it('deve preencher os campos do formulário', () => {
      cy.fixture('people').then(people => {
        cy.get('app-seller [formControlName="name"]').type(people.name);
        cy.get('app-seller [formControlName="document"]').type(people.cnpj);

        cy.contains('Endereço').click();

        cy.get('app-seller [formControlName="street"]').type(people.street);
        cy.get('app-seller [formControlName="addressNumber"]').type(people.addressNumber);
        cy.get('app-seller [formControlName="city"]').type(people.city);
        cy.get('app-seller [formControlName="state"]').type(people.state);
        cy.get('app-seller [formControlName="zipCode"]').type(people.zipCode);
        cy.get('app-seller [formControlName="complement"]').type(people.complement);

        cy.contains('JSON').click();

        cy.get('pre').should('contain.text', people.name);
        cy.get('pre').should('contain.text', people.cnpj);
        cy.get('pre').should('contain.text', people.street);
        cy.get('pre').should('contain.text', people.addressNumber);
        cy.get('pre').should('contain.text', people.city);
        cy.get('pre').should('contain.text', people.state);
        cy.get('pre').should('contain.text', people.zipCode);
        cy.get('pre').should('contain.text', people.complement);
      });
    });

    it('deve exibir o componente de endereço ao clicar na aba Endereço', () => {
      cy.contains('Endereço').click();
      cy.get('app-address').should('exist');
    });
  });

  it('deve navegar para a página inicial ao clicar em voltar', () => {
    cy.contains('button', 'Voltar', { timeout: 10000 }).scrollIntoView().should('be.visible').click();
    cy.location('pathname').should('equal', '/');
    cy.contains('Cripto Moedas').should('exist').should('be.visible');
  });
});
