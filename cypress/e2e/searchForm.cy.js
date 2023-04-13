describe('Search form', () => {
  it('searches for movies, filters and sorts', () => {
    cy.visit('http://localhost:3000/search');
    cy.get('input[id="search"]').type('movie');
    cy.get('.search-form form').submit();
    cy.url().should('include', '/search/movie');
    cy.get('input[id="search"]').should('have.value', 'movie');

    cy.get('.genre-toggle').contains('button', 'drama').click();
    cy.url().should('include', '/search/movie?genre=drama');

    cy.get('.results-sort .toggle').click();
    cy.get('.results-sort .options').contains('li', 'name').click();
    cy.url().should('include', '/search/movie?genre=drama&sortBy=name');
  });
});
