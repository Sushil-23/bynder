/// <reference types = "Cypress" />

describe("POST Request", () => {

    var titleOfPosts = new Array();
    let statusMessage = Math.random().toString(36).substring(1) + Math.random().toString(36).substring(1)

    it("create a new post via /posts api", () => {

        cy.request({
            method: "POST",
            url: "/movie/3/rating",
            body: {
                "value": 11
            }
        }).then(response =>{
            expect(response.status).to.eql(401)
            expect(response.statusMessage).to.eql(401)
        })

    })

    // it("Validate title of latest post", () => {
    //     cy.request({
    //         method : "GET",
    //         url:"http://localhost:3000/posts",
    //         headers : {
    //             accept:"application/json"
    //         }
    //     }).then(response => {
    //         let body = JSON.parse(JSON.stringify(response.body))
    //         body.forEach(function(item){
    //             titleOfPosts.push(item["title"])  
    //         })

    //     }).then(()=>{
    //         var latestPost = titleOfPosts[titleOfPosts.length-1]
    //         expect(latestPost).to.eq(randomTitle)
    //     })

    // })
})