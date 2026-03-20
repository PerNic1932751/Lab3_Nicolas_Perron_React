import type { Commentaire } from "../types";

export default function Comment({ commentaire }: { commentaire: Commentaire }) {
  return (
    <div className="d-flex mb-4">
      <div className="flex-shrink-0">
        <img src="../images/defaultIcon.jpg" className="rounded-circle" alt="User Avatar" width="50" height="50" />
      </div>
      <div className="flex-grow-1 ms-3">
        <h5 className="mb-1">{commentaire.datePublication}</h5>
        <p className="mb-0">{commentaire.contenu}</p>
      </div>
    </div>
  );
}