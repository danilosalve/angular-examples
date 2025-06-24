# angular-examples

![GitHub deployments](https://img.shields.io/github/deployments/danilosalve/angular-examples/github-pages)
![GitHub top language](https://img.shields.io/github/languages/top/danilosalve/angular-examples)
![GitHub language count](https://img.shields.io/github/languages/count/danilosalve/angular-examples)
[![Cypress Tests](https://github.com/danilosalve/angular-examples/actions/workflows/cypress.yml/badge.svg)](https://github.com/danilosalve/angular-examples/actions/workflows/cypress.yml)

Este projeto foi desenvolvido para testar e explorar novas funcionalidades do Angular, utilizando componentes Standalone. Ele inclui exemplos práticos e interativos para desenvolvedores que desejam aprender ou se aprofundar nas novas features do framework.

## Funcionalidades

- **RxJS**: Exemplos práticos utilizando operadores como `Concat` e `MergeMap`.
- **Nova API de Recursos (Resources)**: Demonstração de como utilizar a nova API para manipulação de recursos.
- **Signals**: Exemplos de uso da nova API de Signals para gerenciamento de estado reativo.
- **Carregamento Deferido (Defer)**: Exemplos de carregamento adiado de componentes e conteúdo.
- **Formulários**: Exemplos de uso de Formulários, com `FormRecord`, `ControlContainer` e outros.
- **Jest**: Exemplos de testes `unitários` utilizando Jest. 
- **Cypress**: Exemples de testes `e2e` utilizando Cypress.

#### Atenção
Algumas funcionalidades estão disponíveis somente em ambiente de desenvolvimento. 
* Web Socket (Coins) - Widget na página inicial.
* Página de Usuários (Possui dependência com um servidor *backend* local).

## Servidor de Desenvolvimento

Execute `ng serve` para iniciar o servidor de desenvolvimento. Navegue até `http://localhost:4200/`. A aplicação será recarregada automaticamente ao alterar qualquer arquivo do código-fonte.

## Testes

### Unitários (Jest)
Utilize `npm run test` para executar os testes unitários com Jest.
Para gerar o relatório de cobertura, utilize `npm run test:coverage`.

### End to End (E2E)
- Para executar os testes E2E padrão Angular, utilize: `ng e2e`
- Para executar os testes E2E com Cypress em modo interativo, utilize: `npm run cypress:open`
- Para executar os testes E2E com Cypress em modo headless, utilize: `npm run cypress:run`

> **Dica:** A biblioteca `concurrently` pode ser usada para rodar o app e os testes E2E juntos.
---
