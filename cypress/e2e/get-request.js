///<reference types = "Cypress"/>

describe('GET Request', () => {

    var result;

    it('Validate status code of /get-top-rated-movies api', () => {

        result = cy.request('https://developers.themoviedb.org/3/movies/get-top-rated-movies')
        result.its('status').should('equal',200)
    });

    
})
