import React from 'react'
import "./Navbar.css";

function Navbar() {
  return (
    <div>
       <div className="navbar-top">
        <nav class="navbar navbar-expand-lg">
          <div class="container-fluid">
            <span class="navbar-brand white">Navbar</span>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <span class="nav-link white" aria-current="page">
                    Home
                  </span>
                </li>
                <li class="nav-item">
                  <span class="nav-link white">Link</span>
                </li>
                <li class="nav-item dropdown">
                  <span
                    class="nav-link white dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </span>
                  <ul class="dropdown-menu">
                    <li>
                      <span class="dropdown-item ">Action</span>
                    </li>
                    <li>
                      <span class="dropdown-item ">Another action</span>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <span class="dropdown-item ">Something else here</span>
                    </li>
                  </ul>
                </li>
              </ul>
              <form class="d-flex" role="search">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-outline-success white" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
      {/* navbar ends here */}
    </div>
  )
}

export default Navbar;