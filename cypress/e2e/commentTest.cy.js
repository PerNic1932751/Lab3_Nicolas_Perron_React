describe("Gestion des commentaires", () => {
    const publicationId = "2";
  
    beforeEach(() => {
      cy.visit(`http://localhost:5500/blog.html?id=${publicationId}`);
    });
  
  
    it("affiche le formulaire et le textarea", () => {
      cy.get("#commentForm").should("exist");
      cy.get("#commentTextarea").should("be.visible");
      cy.get("#commentForm button[type='submit']").should("be.visible");
    });
  
  
    it("envoie une requête POST à /commentaires à la soumission", () => {
      cy.intercept("POST", "http://localhost:3000/commentaires").as("postComment");
  
      cy.get("#commentTextarea").type("Mon commentaire de test.");
      cy.get("#commentForm").submit();
  
      cy.wait("@postComment").its("response.statusCode").should("be.oneOf", [200, 201]);
    });
  
    it("envoie le contenu, le publicationId et la date dans le body", () => {
      cy.intercept("POST", "http://localhost:3000/commentaires").as("postComment");
  
      const contenu = "Contenu du commentaire de test.";
      const today = new Date().toISOString().split("T")[0];
  
      cy.get("#commentTextarea").type(contenu);
      cy.get("#commentForm").submit();
  
      cy.wait("@postComment").then((interception) => {
        const body = interception.request.body;
        expect(body.contenu).to.equal(contenu);
        expect(body.publicationId).to.equal(publicationId);
        expect(body.datePublication).to.match(/^\d{4}-\d{2}-\d{2}$/);
        expect(body.datePublication).to.equal(today);
      });
    });
  
    it("envoie la requête avec le bon Content-Type JSON", () => {
      cy.intercept("POST", "http://localhost:3000/commentaires").as("postComment");
  
      cy.get("#commentTextarea").type("Test content-type.");
      cy.get("#commentForm").submit();
  
      cy.wait("@postComment").then((interception) => {
        expect(interception.request.headers["content-type"]).to.include("application/json");
      });
    });
  });