describe("Chargement dynamique des publications", () => {

    beforeEach(() => {
      cy.visit("http://localhost:5500/index.html");
    });
  
    it("effectue une requête GET vers /publications au chargement", () => {
      cy.request("GET", "http://localhost:3000/publications")
        .its("status")
        .should("eq", 200);
    });
  
    it("affiche au moins une publication", () => {
      cy.get("#publicationContainer .col-md-4").should("have.length.greaterThan", 0);
    });
  
    it("chaque carte contient un titre, un auteur et une date", () => {
      cy.get("#publicationContainer .col-md-4").each(($card) => {
        cy.wrap($card).find("h2.card-title").should("not.be.empty");
        cy.wrap($card).find("h6.card-text").first().should("not.be.empty");
        cy.wrap($card).find("h6.card-text").last().should("not.be.empty");
      });
    });
  
    it("le nombre de cartes correspond au nombre de publications retournées par l'API", () => {
      cy.request("GET", "http://localhost:3000/publications").then((response) => {
        const count = response.body.length;
        cy.get("#publicationContainer .col-md-4").should("have.length", count);
      });
    });
  });