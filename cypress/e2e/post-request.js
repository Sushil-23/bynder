/// <reference types = "Cypress" />

describe("POST Request", () => {

    it("create a new post via /rate-movie api", () => {

        cy.request({
            method: "POST",
            url: "https://developers.themoviedb.org/3/movies/rate-movie",
            body: {
                "value": 9
            }
        }).then(response =>{
            expect(response.status).to.eql(200)
        })

    })

})