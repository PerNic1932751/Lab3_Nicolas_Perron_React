import { useEffect, useState } from "react";
import type { Publication, Commentaire } from "../types";
import BlogDetails from "./BlogDetails";
import CommentList from "./CommentList";

export default function Blog() {
  const [publication, setPublication] = useState<Publication | null>(null);
  const [commentaires, setCommentaires] = useState<Commentaire[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const id = new URLSearchParams(window.location.search).get("id");
    if (!id) return;

    async function loadData() {
      try {
        const [resPub, resCom] = await Promise.all([
          fetch(`http://localhost:3000/publications/${id}`),
          fetch(`http://localhost:3000/commentaires/?publicationId=${id}`)
        ]);
        setPublication(await resPub.json());
        setCommentaires(await resCom.json());
      } catch (err) {
        setError("Impossible de charger le blog.");
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  if (loading) return <p className="text-center mt-4">Chargement...</p>;
  if (error) return <p className="text-center text-danger mt-4">{error}</p>;
  if (!publication) return <p className="text-center mt-4">Publication introuvable.</p>;

  return (
    <div>
      <BlogDetails publication={publication} />
      <CommentList commentaires={commentaires} />
    </div>
  );
}