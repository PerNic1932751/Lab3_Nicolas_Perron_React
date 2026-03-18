import { useEffect, useState } from "react";

interface Publication {
  id: string;
  titre: string;
  contenu: string;
  auteur: string;
  datePublication: string;
}

export default function PublicationList() {
  const [publications, setPublications] = useState<Publication[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadData() {
      try {
        const response = await fetch("http://localhost:3000/publications");

        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }

        const data: Publication[] = await response.json();
        setPublications(data);
      } catch (err) {
        console.error("Error fetching publications:", err);
        setError("Impossible de charger les publications.");
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  if (loading) {
    return <p className="text-center mt-4">Chargement...</p>;
  }

  if (error) {
    return <p className="text-center text-danger mt-4">{error}</p>;
  }

  return (
    <div id="publicationContainer" className="row">
      {publications.map((publication) => (
        <PublicationCard key={publication.id} publication={publication} />
      ))}
    </div>
  );
}

function PublicationCard({ publication }: { publication: Publication }) {
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
          <a href={`/blog?id=${publication.id}`}>Lire la suite</a>
        </div>
      </div>
    </div>
  );
}
