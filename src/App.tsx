import PublicationList from "./PublicationList";

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

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <a className="navbar-brand" href="index.html">
          <img src="../images/logo.png" alt="Logo" width="60" height="60" className="d-lg-none" />
          <img src="../images/logo.png" alt="Logo" width="80" height="80" className="d-none d-lg-block" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse flex-grow-1" id="navbarNav">
          <ul className="navbar-nav d-flex justify-content-evenly w-100">
            <li className="nav-item">
              <a className="nav-link active" href="index.html">Acceuil</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#option2">Option 2</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#option3">Option 3</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#option4">Option 4</a>
            </li>
          </ul>
        </div>

        <a className="nav-link d-none d-lg-block" href="#profile">
          <i className="bi bi-person-circle fs-4"></i>
        </a>
      </div>
    </nav>
  );
}

function SearchBar() {
  return (
    <div className="container-fluid my-4">
      <div className="row align-items-center justify-content-between g-3">
        <div className="col-md-4 col-12">
          <input
            className="form-control"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </div>
        <div className="col-md-4 col-12"></div>
        <div className="col-md-4 col-12 d-flex align-items-center gap-2">
          <span className="text-nowrap">Trier par:</span>
          <select className="form-select flex-grow-1" aria-label="Select">
            <option defaultValue="selected">Select</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer py-4 mt-auto">
      <div className="container">
        <div className="d-flex justify-content-center gap-4 mb-3">
          <a href="#" className="text-dark">
            <i className="bi bi-facebook fs-4"></i>
          </a>
          <a href="#" className="text-dark">
            <i className="bi bi-twitter fs-4"></i>
          </a>
          <a href="#" className="text-dark">
            <i className="bi bi-linkedin fs-4"></i>
          </a>
        </div>
        <div className="text-center">
          <p className="mb-1">Centre d'Expertise et de Perfectionnement en Informatique</p>
          <p className="mb-0">2026</p>
        </div>
      </div>
    </footer>
  );
}
