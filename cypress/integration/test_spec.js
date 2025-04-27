describe('Quote Form Tests', () => {
  beforeEach(() => {
      cy.visit('https://qatest.datasub.com/quote.html');
  });

  it('should successfully submit the form', () => {
      cy.get('#q_name').type('John Doe');
      cy.get('#q_email').type('john.doe@example.com');
      cy.get('#q_service').select('Service 1');
      cy.get('#q_message').type('I would like to get a quote for Service 1.');
      cy.get('#quoteForm').submit();

      // Check for successful submission message
      cy.get('#quoteStatus').should('be.visible').and('contain', 'Форма отправлена успешно!');
  });

  it('should show validation error if name is not filled', () => {
      cy.get('#q_email').type('john.doe@example.com');
      cy.get('#q_service').select('Service 1');
      cy.get('#q_message').type('I would like to get a quote for Service 1.');
      cy.get('#quoteForm').submit();

      // Check for error related to name (check if class "is-invalid" appears)
      cy.get('#q_name').should('have.class', 'is-invalid');
  });

  it('should show validation error if email is not filled', () => {
      cy.get('#q_name').type('John Doe');
      cy.get('#q_service').select('Service 1');
      cy.get('#q_message').type('I would like to get a quote for Service 1.');
      cy.get('#quoteForm').submit();

      // Check for error related to email (check if class "is-invalid" appears)
      cy.get('#q_email').should('have.class', 'is-invalid');
  });

  it('should show validation error if message is not filled', () => {
      cy.get('#q_name').type('John Doe');
      cy.get('#q_email').type('john.doe@example.com');
      cy.get('#q_service').select('Service 1');
      cy.get('#quoteForm').submit();

      // Check for error related to message (check if class "is-invalid" appears)
      cy.get('#q_message').should('have.class', 'is-invalid');
  });

  it('should show validation error if email is in incorrect format', () => {
      cy.get('#q_name').type('John Doe');
      cy.get('#q_email').type('john.doe@com'); // Invalid email format
      cy.get('#q_service').select('Service 1');
      cy.get('#q_message').type('I would like to get a quote for Service 1.');
      cy.get('#quoteForm').submit();

      // Check for error related to invalid email format (check if class "is-invalid" appears)
      cy.get('#q_email').should('have.class', 'is-invalid');
  });
});
