describe("Page de consultation d'une publication", () => {

    let publicationId;
  
    before(() => {
      cy.request("GET", "http://localhost:3000/publications").then((response) => {
        publicationId = response.body[0].id;
      });
    });
  
    beforeEach(() => {
      cy.wrap(null).then(() => {
        cy.visit(`http://localhost:5500/blog.html?id=${publicationId}`);
      });
    });
  

  
    it("fait une requête GET à /publications/:id avec le bon id", () => {
      cy.request("GET", `http://localhost:3000/publications/${publicationId}`)
        .its("status")
        .should("eq", 200);
    });
  
    it("fait une requête GET à /commentaires avec le publicationId en query param", () => {
      cy.request("GET", `http://localhost:3000/commentaires/?publicationId=${publicationId}`)
        .its("status")
        .should("eq", 200);
    });
  
  
    it("affiche le titre de la publication", () => {
      cy.request("GET", `http://localhost:3000/publications/${publicationId}`).then((response) => {
        cy.get("#publicationContainer").should("contain.text", response.body.titre);
      });
    });
  
    it("affiche le contenu de la publication", () => {
      cy.request("GET", `http://localhost:3000/publications/${publicationId}`).then((response) => {
        cy.get("#publicationContainer").should("contain.text", response.body.contenu);
      });
    });
  
    it("affiche la date de la publication", () => {
      cy.request("GET", `http://localhost:3000/publications/${publicationId}`).then((response) => {
        cy.get("#publicationContainer").should("contain.text", response.body.datePublication);
      });
    });
  
  
    it("affiche le bon nombre de commentaires", () => {
      cy.request("GET", `http://localhost:3000/commentaires/?publicationId=${publicationId}`).then((response) => {
        const count = response.body.length;
        cy.get("#commentSection .d-flex").should("have.length", count);
      });
    });
  
    it("affiche le contenu et la date de chaque commentaire", () => {
      cy.request("GET", `http://localhost:3000/commentaires/?publicationId=${publicationId}`).then((response) => {
        response.body.forEach((com) => {
          cy.get("#commentSection").should("contain.text", com.contenu);
          cy.get("#commentSection").should("contain.text", com.datePublication);
        });
      });
    });
});

