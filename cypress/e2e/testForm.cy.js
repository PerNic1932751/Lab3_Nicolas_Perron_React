describe("Formulaire d'ajout de publication", () => {

  beforeEach(() => {
    cy.visit("http://localhost:5500/pubCache.html");
  });


  it("affiche les champs titre, auteur et contenu", () => {
    cy.get("#titre").should("exist");
    cy.get("#auteur").should("exist");
    cy.get("#contenu").should("exist");
  });


  it("affiche la boîte de dialogue jQuery UI à la soumission", () => {
    cy.get("#titre").type("Mon titre");
    cy.get("#auteur").type("Mon auteur");
    cy.get("#contenu").type("Mon contenu");

    cy.get("#publicationForm button[type='submit']").click();

    cy.get("#confirmDialog").should("be.visible");
    cy.contains("Voulez-vous vraiment envoyer cette publication ?").should("be.visible");
  });

  it("affiche les boutons Confirmer et Annuler dans la boîte de dialogue", () => {
    cy.get("#titre").type("Mon titre");
    cy.get("#auteur").type("Mon auteur");
    cy.get("#contenu").type("Mon contenu");
    cy.get("#publicationForm button[type='submit']").click();

    cy.contains("button", "Confirmer").should("be.visible");
    cy.contains("button", "Annuler").should("be.visible");
  });


  it("ferme la boîte de dialogue sans envoyer si on clique Annuler", () => {
    cy.get("#titre").type("Mon titre");
    cy.get("#auteur").type("Mon auteur");
    cy.get("#contenu").type("Mon contenu");
    cy.get("#publicationForm button[type='submit']").click();

    cy.contains("button", "Annuler").click();

    cy.get("#confirmDialog").should("not.be.visible");
    cy.url().should("include", "pubCache.html");
  });


  it("envoie une requête POST à /publications avec les bonnes données", () => {
    cy.intercept("POST", "http://localhost:3000/publications", {
      statusCode: 201,
      body: { id: "99", titre: "Mon titre", auteur: "Mon auteur", contenu: "Mon contenu", datePublication: "2026-03-07" },
    }).as("postPublication");

    cy.get("#titre").type("Mon titre");
    cy.get("#auteur").type("Mon auteur");
    cy.get("#contenu").type("Mon contenu");
    cy.get("#publicationForm button[type='submit']").click();
    cy.contains("button", "Confirmer").click();

    cy.wait("@postPublication").then((interception) => {
      const body = interception.request.body;
      expect(body.titre).to.eq("Mon titre");
      expect(body.auteur).to.eq("Mon auteur");
      expect(body.contenu).to.eq("Mon contenu");
      expect(body.datePublication).to.match(/^\d{4}-\d{2}-\d{2}$/);
    });
  });


  it("redirige vers index.html après confirmation", () => {
    cy.intercept("POST", "http://localhost:3000/publications", {
      statusCode: 201,
      body: { id: "99" },
    }).as("postPublication");

    cy.get("#titre").type("Mon titre");
    cy.get("#auteur").type("Mon auteur");
    cy.get("#contenu").type("Mon contenu");
    cy.get("#publicationForm button[type='submit']").click();
    cy.contains("button", "Confirmer").click();

    cy.wait("@postPublication");
    cy.url().should("include", "index.html");
  });


  it("envoie automatiquement la date du jour sans champ dans le formulaire", () => {
    cy.intercept("POST", "http://localhost:3000/publications", {
      statusCode: 201,
      body: { id: "99" },
    }).as("postPublication");

    const today = new Date().toISOString().split("T")[0];

    cy.get("#titre").type("Mon titre");
    cy.get("#auteur").type("Mon auteur");
    cy.get("#contenu").type("Mon contenu");
    cy.get("#publicationForm button[type='submit']").click();
    cy.contains("button", "Confirmer").click();

    cy.wait("@postPublication").then((interception) => {
      expect(interception.request.body.datePublication).to.eq(today);
    });
  });
});