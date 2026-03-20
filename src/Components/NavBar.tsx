export default function Navbar() {
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