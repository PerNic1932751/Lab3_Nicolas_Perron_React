import Navbar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Blog from "./Components/Blog";

export default function AppBlog() {
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