describe('Sign up', function () {
    it('Visit the daraz site', function () {
        cy.visit('https://www.daraz.com.np')
        cy.title().should('eq', 'Online Shopping in Nepal | Best Deals, Prices & Discounts - Daraz.com.np')
        cy.get('#anonSignup').contains('sign up').click()
    }) 
    })