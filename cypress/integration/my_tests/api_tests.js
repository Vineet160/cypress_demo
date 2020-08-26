describe("RnD for API testing using cypress", () =>{
    let data

before(() =>{
    cy.fixture('apiep').then((apidata) =>{
        data = apidata
    })
})

beforeEach(() =>{
    cy.request(data.pokemon + "/25").as('pikachu')
})

it('Validate the headers', () => {
    cy.get('@pikachu')
    .its('headers')
    .its('content-type')
    .should('include', ('application/json; charset=utf-8'))
})

it("Validate status code", () =>{
    cy.get("@pikachu")
      .its('status')
      .should('equal', 200)
  })

it('Validate body', () =>{
    cy.get('@pikachu')
    .its('body')
    .should('include', { name: 'pikachu'})
})




})