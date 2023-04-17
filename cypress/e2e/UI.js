///<reference types = "Cypress"/>

describe('Login Test', () => {
    const username = "qa-assignment"
    const password = "qa-Bynder2023!"
    let randomUsername = Math.random().toString(36).substring(2)
    let randomPassword = Math.random().toString(36).substring(2)
    let randomEmail = "auto_" +randomUsername + "@gmail.com"
    it('Should be able to login and logout with valid credentials', () => {

        cy.visit("https://wave-trial.getbynder.com/login/")
        cy.get("#inputEmail").type(username)
        cy.get("#inputPassword").type(password)
        cy.get('button[type="submit"]').click()
        cy.get('.profile').then(function($titleText){
           const titleText = $titleText.text()
           expect(titleText).to.include("QA role Assignment Efrain DLS")
        })
        cy.url().should('include','/account/dashboard/')
        cy.get('.admin-dropdown.profile').click()
        cy.get(".action-btn.block.blue").click()
        cy.get(".cbox_messagebox").then(function($logoutMessage)
        {
           const logoutMessage= $logoutMessage.text()
           expect(logoutMessage).to.equal("You have successfully logged out.")
        })

    });

    it('Validate the error message with incorrect credentials', () => {

        cy.visit("https://wave-trial.getbynder.com/login/")
        cy.get("#inputEmail").type(randomUsername)
        cy.get("#inputPassword").type(randomPassword)
        cy.get('button[type="submit"]').click()
        cy.get(".cbox_messagebox").then(function($errorMessage){
            const errorMessage = $errorMessage.text()
            expect(errorMessage).to.equal("You have entered an incorrect username or password.")
        })
    });

     it('Validate the error message with correct username and blank password', () => {

        cy.visit("https://wave-trial.getbynder.com/login/")
        cy.get("#inputEmail").type(username)
        cy.get('button[type="submit"]').click()
        cy.get(".cbox_messagebox").then(function($errorMessage){
            const errorMessage = $errorMessage.text()
            expect(errorMessage).to.equal("Please enter your password.")
        })

     });

    //  it('Validate the error message with blank username and correct password', () => {

    //     cy.visit("https://wave-trial.getbynder.com/login/")
    //     cy.get("#inputPassword").type(password)
    //     cy.get('button[type="submit"]').click()
    //     cy.get(".cbox_messagebox").then(function($errorMessage){
    //         const errorMessage = $errorMessage.text()
    //         expect(errorMessage).to.equal("Please enter your password.")
    //     })

    //  });
});