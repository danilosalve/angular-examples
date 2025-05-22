describe('My First Test', () => {
  it('Visitar a página Inicial', () => {
    cy.visit('/')
    cy.contains('Página Inicial');
    cy.contains('Cripto Moedas');
    cy.contains('Previsão do Tempo');
  })
})
