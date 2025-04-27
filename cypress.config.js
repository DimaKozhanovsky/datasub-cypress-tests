const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // можешь добавить обработчики событий здесь
    },
    specPattern: "cypress/integration/**/*.js", // Путь к тестам
  },
});
