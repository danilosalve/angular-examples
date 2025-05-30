describe('ControlContainer', () => {
  beforeEach(() => cy.visit('/forms/container-form'));

  describe('Aba de Pessoas - Formulário', () => {
    it('deve exibir o título e as abas corretamente', () => {
      cy.contains('Pessoas').should('be.visible');
      cy.contains('Dados Gerais').should('be.visible');
      cy.contains('Endereço').should('be.visible');
      cy.contains('JSON').should('be.visible');
    });

    it('deve preencher os campos do formulário', () => {
      cy.fixture('people').then(people => {
        cy.get('[formControlName="name"]').type(people.name);
        cy.get('[formControlName="document"]').type(people.cpf);

        cy.contains('Endereço').click();

        cy.get('[formControlName="street"]').type(people.street);
        cy.get('[formControlName="addressNumber"]').clear().type(people.addressNumber);
        cy.get('[formControlName="city"]').type(people.city);
        cy.get('[formControlName="state"]').type(people.state);
        cy.get('[formControlName="zipCode"]').type(people.zipCode);
        cy.get('[formControlName="complement"]').type(people.complement);

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
  describe('Aba de Vendedores - Formulário', () => {
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
        cy.get('[formControlName="name"]').clear().type(people.name);
        cy.get('[formControlName="document"]').clear().type(people.cnpj);

        cy.contains('Endereço').click();

        cy.get('[formControlName="street"]').clear().type(people.street);
        cy.get('[formControlName="addressNumber"]').clear().type(people.addressNumber);
        cy.get('[formControlName="city"]').clear().type(people.city);
        cy.get('[formControlName="state"]').clear().type(people.state);
        cy.get('[formControlName="zipCode"]').clear().type(people.zipCode);
        cy.get('[formControlName="complement"]').clear().type(people.complement);

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
});
