import { useEffect, useState } from "react";
import type { Commentaire } from "../types";
import Comment from "./Comment";

export default function CommentList(
  { publicationId }: { publicationId: string }
) {
  const [commentaires, setCommentaires] = useState<Commentaire[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!publicationId) return;

    fetch(`http://localhost:3000/commentaires?publicationId=${publicationId}`)
      .then((res) => res.json())
      .then((data) => setCommentaires(data))
      .finally(() => setLoading(false));
  }, [publicationId]);

  if (loading) return <p>Chargement des commentaires...</p>;
  if (commentaires.length === 0)
    return <p>Aucun commentaire pour l'instant.</p>;

  return (
    <div>
      {commentaires.map((c) => (
        <Comment key={c.id} commentaire={c} />
      ))}
    </div>
  );
}