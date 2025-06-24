describe('signals-sample', () => {
  beforeEach(() => cy.visit('/signals/samples', {
    onBeforeLoad (win) {
      Object.defineProperty(win.navigator, 'language', {
        value: 'pt-BR'
      })
    }
  }));

  context('Untracked', () => {
    it('deve garantir que o campo nome está vazio ao carregar', () => {
      cy.get('[formcontrolname="name"]').should('exist').should('have.value', '');
      cy.get('p.po-mb-1.po-sm-12').should(
        'contain.text',
        'O nome agora é Nome não informado e o valor do contador era 0 quando o nome mudou'
      );
    });

    it('deve preencher o campo Nome sem incrementar o contador', () => {
      cy.get('[formControlName="name"]').type('Danilo');
      cy.get('p.po-mb-1.po-sm-12').should(
        'contain.text',
        'O nome agora é Danilo e o valor do contador era 0 quando o nome mudou'
      );
      cy.get('p.po-sm-12').should('contain.text', 'Contador Atual: 0');
    });

    it('deve incrementar o contador sem preencher o campo Nome ', () => {
      cy.contains('Incrementar Contador').click();
      cy.get('p.po-mb-1.po-sm-12').should(
        'contain.text',
        'O nome agora é Nome não informado e o valor do contador era 0 quando o nome mudou'
      );
      cy.get('p.po-sm-12').should('contain.text', 'Contador Atual: 1');
    });

    it('deve incrementar o contador 2x e preencher o campo Nome', () => {
      cy.contains('Incrementar Contador').click();
      cy.contains('Incrementar Contador').click();

      cy.get('[formControlName="name"]').type('Eduardo');
      cy.get('p.po-mb-1.po-sm-12').should(
        'contain.text',
        'O nome agora é Eduardo e o valor do contador era 2 quando o nome mudou'
      );
      cy.get('p.po-sm-12').should('contain.text', 'Contador Atual: 2');
    });
  });

  context('Linked', () => {
    it('deve adicionar um curso no carinho', () => {
      cy.get('[name="courses"] > po-field-container > div.po-field-container > div.po-field-container-content')
        .should('exist')
        .find('select.po-select.po-select-phosphor')
        .select(3);

      cy.get('[name="quantity"]').should('exist').find('input.po-input').should('have.value', '20');

      cy.contains('Adicionar ao carrinho').click();

      cy.get('.po-toaster-message').should('be.visible');
    });
  });

  context('Effect', () => {
    it('deve buscar por um CEP', () => {
      cy.intercept('GET', /viacep\.com\.br\/ws\/.*\/json/).as('stubGet');
      cy.get('input[name="zipCode"]').type('01311200');
      cy.wait('@stubGet');

      cy.get('po-loading-overlay', { timeout: 10000 }).should('not.exist');

      cy.get('po-info[p-label="Logradouro"]').should('exist');
      cy.contains('po-info', 'Avenida Paulista', { timeout: 10000 }).should('be.visible').and('exist');
      cy.get('po-info[p-label="Bairro"]').should('exist');
      cy.contains('po-info', 'Bela Vista', { timeout: 10000 }).should('be.visible').and('exist');
      cy.get('po-info[p-label="Cidade"]').should('exist');
      cy.contains('po-info', 'São Paulo', { timeout: 10000 }).should('be.visible').and('exist');
      cy.get('po-info[p-label="Estado"]').should('exist');
      cy.contains('po-info', 'São Paulo', { timeout: 10000 }).should('be.visible').and('exist');
      cy.get('po-info[p-label="Região"]').should('exist');
      cy.contains('po-info', 'Sudeste', { timeout: 10000 }).scrollIntoView().should('be.visible').and('exist');
      cy.get('po-info[p-label="DDD"]').scrollIntoView().should('exist');
      cy.contains('po-info', '11', { timeout: 10000 }).scrollIntoView().should('be.visible').and('exist');
    });
  });
});
