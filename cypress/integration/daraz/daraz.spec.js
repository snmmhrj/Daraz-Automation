
describe('Daraz', function () {
    it('Visit the daraz site and go to sign up page', function () {
        cy.visit('https://www.daraz.com.np')
        cy.title().should('eq', 'Online Shopping in Nepal | Best Deals, Prices & Discounts - Daraz.com.np')
        cy.get('#anonSignup').contains('sign up').click()
        
        })

        // beforeEach(function () {
        //     // before each test, we can automatically preserve the
        //     // 'session_id' and 'remember_token' cookies. this means they
        //     // will not be cleared before the NEXT test starts.
        //     //
        //     // the name of your cookies will likely be different
        //     // this is just a simple example
        //     Cypress.Cookies.preserveOnce('_tb_token_', 'remember_token')
        //   })


        it('Redirect to sign up page', function () {
            cy.get('form').within(($form) => {
               // cy.root().submit()  
             //cy.get('button[type = "button"]').click() 
             cy.get('.mod-change-register-btn').click()
            //  cy.get('.mod-input mod-login-input-email mod-input-email', { timeout: 10000}).click().type('daraz@mailinator.com')
            // cy.get('.mod-login-input-email > input[type=text]').type('daraz@mailinator.com')
             
            //cy.get('[data-meta="Field"]').click().type('daraz@mailinator.com')
            //  cy.xpath('')

        })
    
    }) 

    it('Login', function () {
        cy.get('a[href*="/user/login"]').contains('Login').click()
        cy.xpath("//input[@type='text' and @placeholder='Please enter your Phone Number or Email']").should('be.visible').type("9841780771")
        cy.xpath("//input[@type='password' and @placeholder='Please enter your password']").type("123456654321a")
        cy.get('.mod-input-password-icon').click()
        cy.get('.mod-login-btn').click()     
        cy.wait(2000)  
    })
   
    it('Search Mobile', function () {
        cy.wait(10000)
      
        cy.xpath("//input[@type='search' and @placeholder='Search in Daraz']").type("mobile")
        cy.get('.search-box__search--2fC5').click()
    })

    it('Filter By Brand', function () {
        cy.get(':nth-child(2) > .c2uiAC > :nth-child(1) > .c1WzWT > :nth-child(4) > .ant-checkbox > .ant-checkbox-input').click()
       // cy.wait(3000)
    })

    it('Filter By Price', function () {
        cy.get('[placeholder="Min"]').type("20000")
        cy.get('[placeholder="Max"]').type("100000")
        cy.get('.ant-btn').click()
        cy.wait(3000)
    })

    it('Filter By Rating', function () {
         cy.wait(3000)
        cy.get(':nth-child(6) > .c2uiAC > :nth-child(1)').click()
      
    })

    it('Sort by ascending order', function () {
        cy.xpath("//div[contains(@class,'c3ypa1')]").scrollIntoView().should('be.visible').click({ force: true })
        cy.xpath("//div[text()='Price low to high']").scrollIntoView().should('be.visible').click()   
   })

//    it('Go to cart and remove item(s)', function () {
//     cy.get('.cart-icon > svg').click()
// })

it('Search Oliz Store and go to Oliz Home page', function () {
    cy.wait(10000)
    cy.xpath("//input[@type='search' and @placeholder='Search in Daraz']").clear()
    cy.xpath("//input[@type='search' and @placeholder='Search in Daraz']").type("Oliz Store")
    cy.get('.search-box__search--2fC5').click()
    cy.xpath("//div[@class='cRjKsc']//img", { timeout: 10000 }).eq(0).should('be.visible').click({ force: true })
    cy.wait(3000)
    cy.xpath("//div[@class='seller-name__wrapper']//a[@href]").scrollIntoView().should('be.visible').click({ force: true })
    cy.url().should("include", "/shop/oliz-store")
})

it('Enter free delivery page and click shop now', function () {
    cy.wait(2000)
    cy.get('[href="//www.daraz.com.np/wow/gcp/daraz/channel/np/LP/free-delivery-week-electronics?scm=1003.4.icms-zebra-100031662-2974971.OTHER_6043462288_7341344"] > .lzd-menu-labels-item-text').click()
    // cy.get('[data-aplus-ae="x2_60a50fc3"] > .product-item-bottom > [style="border: 0px solid black; box-sizing: border-box; display: flex; -webkit-box-orient: horizontal; flex-direction: row; place-content: flex-start center; flex-shrink: 0; cursor: pointer; position: relative; border-radius: 4px; background-image: linear-gradient(90deg, rgb(251, 148, 68) 5%, rgb(245, 114, 36) 100%); text-align: center; -webkit-box-align: center; align-items: center; -webkit-box-pack: center; padding: 12px; width: auto; height: 28px;"] > .text').click()
    // cy.xpath("//*[@id="5213589410"]/div/div/div[1]/a[1]/div/div[2]").click()
    cy.xpath("//div[@class='cRjKsc']//img", { timeout: 10000 }).eq(0).should('be.visible').click({ force: true })
    cy.get('.delivery-option-item__shipping-fee').should('have.attr','Free')
})

// it('Ask Question and verify question', function () {
//     cy.xpath("//div//button[text()='ASK QUESTIONS']", { timeout: 10000 }).scrollIntoView().should('be.visible');

//         // cy.intercept("POST", "/pdp/item/addItemSkuQA").as('askQuestion');

//         cy.intercept("POST", "/pdp/item/addItemSkuQA").as("askQuestion");

//         // cy.intercept('POST', '/pdp/item/addItemSkuQA', {
//         //     // fixture: 'askQuestion.json'
//         // }).as('addFacility')

//         // cy.xpath("//div[contains(@class,'qna-ask-box')]").eq(0).scrollIntoView().should('be.visible').click().type('Random Question Posted by Pranesh');

//         cy.xpath("//div[contains(@class,'qna-ask-box')]").eq(0).scrollIntoView().should('be.visible').click().type('Any New Year Offer on price discount?');

//         cy.xpath("//div//button[text()='ASK QUESTIONS']").click();


//         // cy.intercept("POST", "https://my.daraz.com.np/pdp/item/addItemSkuQA", { content: 'ABC Pranesh', statusCode: 200 }).as("askQuestion");




//         cy.wait('@askQuestion').then((resp) => {
//             cy.log(resp);
//             console.log(resp);
  
// })

it('Click on Save more on app and verify link', function () {
    cy.get('#topActionDownload').click()
    cy.xpath("//div[@class='app-stores']//a").eq(0).should('have.attr', 'href').and('include', 'itunes.apple.com/app/id978058048')
    cy.xpath("//div[@class='app-stores']//a").eq(1).should('have.attr', 'href').and('include', 'play.google.com/store/apps/details?id=com.daraz.android')

})

})

      