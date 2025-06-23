import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    'baseUrl': 'http://localhost:4200',
    viewportWidth: 1280,
    viewportHeight: 720,
    setupNodeEvents(on) {
      on('before:browser:launch', (browser, launchOptions) => {
        if (browser.family === 'chromium') {
          launchOptions.args.push('--lang=pt-BR')
        }
        return launchOptions
      })
    }
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
