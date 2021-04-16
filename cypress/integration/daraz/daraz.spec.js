describe('Daraz', function () {
    it('Visit the daraz site and go to sign up page', function () {
        cy.visit('https://www.google.com')
        cy.title().should('eq', 'Online Shopping in Nepal | Best Deals, Prices & Discounts - Daraz.com.np')
        cy.get('#anonSignup').contains('sign up').click()
        

        })
        it('sign up', function () {
            cy.get('form').within(($form) => {
               // cy.root().submit()  
             //cy.get('button[type = "button"]').click() 
             cy.get('.mod-change-register-btn').click()
             //cy.get('.mod-input mod-login-input-email mod-input-email', { timeout: 10000}).click().type('daraz@mailinator.com')
             cy.xpath('')

        })
    
    }) 
    })