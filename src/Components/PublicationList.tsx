import { useEffect, useState } from "react";
import PublicationCard from "./PublicationCard";
import type { Publication } from "../types";


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
