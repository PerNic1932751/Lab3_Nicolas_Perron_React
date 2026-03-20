import PublicationList from "./Components/PublicationList";
import Navbar from "./Components/NavBar";
import SearchBar from "./Components/SearchBar";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <SearchBar />
      <main className="flex-grow-1">
        <div className="container-fluid">
          <div className="row" id="publicationContainer">
            <PublicationList />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
