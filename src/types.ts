export interface Publication {
    id: string;
    titre: string;
    contenu: string;
    auteur: string;
    datePublication: string;
  }
  export interface Commentaire {
    id: string;
    publicationId: string;
    contenu: string;
    datePublication: string;
  }