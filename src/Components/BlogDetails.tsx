import type { Publication } from "../types";

export default function BlogDetails({ publication }: { publication: Publication }) {
  return (
    <>
      <div className="container-fluid my-4">
        <img src="../images/background.jpg" className="img-fluid rounded" alt="Blog Banner" />
      </div>
      <h1 className="text-center mb-4">{publication.titre}</h1>
      <p>{publication.contenu}</p>
      <div className="container d-flex justify-content-center align-items-center centered-card-container">
        <div className="card centered-card">
          <div className="card-body d-flex flex-column justify-content-center align-items-center">
            <img src="../images/background.jpg" className="card-img-top mb-3" alt="Card image cap" width="150" height="150" />
            <p className="card-text">{publication.datePublication}</p>
          </div>
        </div>
      </div>
      <p>{publication.contenu}</p>
    </>
  );
}