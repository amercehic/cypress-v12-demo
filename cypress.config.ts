import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:13102/',
    setupNodeEvents(on, config) {
      on('task', {
        log(message) {
          console.log(message);

          return null;
        },
      });
    },
  },
});
