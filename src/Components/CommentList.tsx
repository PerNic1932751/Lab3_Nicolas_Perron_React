import type { Commentaire } from "../types";
import Comment from "./Comment";

export default function CommentList({ commentaires }: { commentaires: Commentaire[] }) {
  return (
    <div id="commentSection">
      {commentaires.map((c, index) => (
        <Comment key={index} commentaire={c} />
      ))}
    </div>
  );
}