import Navbar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Blog from "./Components/Blog";
import "./styleSheets/custom.css";
import "./styleSheets/styleBlog.css";
import "./styleSheets/style.css";

export default function AppBlog() {
  const publicationId = new URLSearchParams(window.location.search).get("id");

  if (!publicationId) {
    return <p className="text-danger">Article introuvable.</p>;
  }

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1">
        <Blog /> 
      </main>
      <Footer />
    </div>
  );
}