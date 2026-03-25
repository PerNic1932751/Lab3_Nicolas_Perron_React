import { useEffect, useState } from "react";
import type { Publication } from "../types";
import BlogDetails from "./BlogDetails";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

export default function Blog() {
  const [publication, setPublication] = useState<Publication | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [refreshKey, setRefreshKey] = useState(0);
  const handleCommentAdded = () => {
    setRefreshKey(prev => prev + 1); 
  };
  useEffect(() => {
    const idParam = new URLSearchParams(window.location.search).get("id");
    if (!idParam) {
      setLoading(false);
      return;
    }

    fetch(`http://localhost:3000/publications/${idParam}`)
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then((data) => setPublication(data))
      .catch(() => setError("Impossible de charger le blog."))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center mt-4">Chargement...</p>;
  if (error) return <p className="text-center text-danger mt-4">{error}</p>;
  if (!publication) return <p className="text-center mt-4">Publication introuvable.</p>;

  return (
    <div>
      <BlogDetails publication={publication} />
      <CommentList key={refreshKey} publicationId={publication.id} />
      <AddComment 
        publicationId={publication.id} 
        onCommentAdded={handleCommentAdded} 
      />
    </div>
  );
}