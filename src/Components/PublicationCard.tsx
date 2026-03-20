import type { Publication } from "../types";
export default function PublicationCard({ publication }: { publication: Publication }) {
    return (
      <div className="col-md-4 mb-4">
        <div className="card h-100">
          <img
            src="../images/pudge.jpg"
            className="card-img-top"
            alt="Card image cap"
          />
          <div className="card-body">
            <h2 className="card-title">{publication.titre}</h2>
            <p className="card-text">{publication.contenu}</p>
            <h6 className="card-text">{publication.auteur}</h6>
            <h6 className="card-text">{publication.datePublication}</h6>
            <a href={`/Html/blog?id=${publication.id}`}>Lire la suite</a>
          </div>
        </div>
      </div>
    );
  }