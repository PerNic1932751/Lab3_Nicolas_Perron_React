import { useState } from "react";

interface AddCommentProps {
  publicationId: string;
  onCommentAdded: () => void;
}

export default function AddComment({ publicationId, onCommentAdded }: AddCommentProps) {
  const [contenu, setContenu] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    const datePublication = new Date().toISOString().split("T")[0];

    try {
      const response = await fetch("http://localhost:3000/commentaires", {
        method: "POST",
        body: JSON.stringify({ publicationId, datePublication, contenu }),
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      const json = await response.json();
      console.log(json);

      setSuccess(true);
      setContenu("");
      onCommentAdded();
    } catch (err) {
      console.error(err);
      setError("Impossible d'envoyer le commentaire.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <textarea
          id="commentTextarea"
          className="form-control"
          placeholder="Écrire un commentaire..."
          rows={4}
          value={contenu}
          onChange={(e) => setContenu(e.target.value)}
          required
        />
      </div>

      {error && <p className="text-danger">{error}</p>}
      {success && <p className="text-success">Commentaire envoyé!</p>}

      <button
        type="submit"
        className="btn btn-primary"
        disabled={loading || !contenu.trim()}
      >
        {loading ? "Envoi..." : "Envoyer"}
      </button>
    </form>
  );
}