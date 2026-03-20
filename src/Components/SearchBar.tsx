export default function SearchBar() {
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
  