import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    'baseUrl': 'http://localhost:4200'
  },
  projectId: 'vnfsxp',
  video: false,
  defaultCommandTimeout: 60000,
  component: {
    devServer: {
      framework: 'angular',
      bundler: 'webpack',
    },
    specPattern: '**/*.cy.ts'
  }

})
