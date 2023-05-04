import React from 'react'
import "./Navbar.css";
// import { Link } from 'react-router-dom';

function Navbar() {
  async function resume(){
    window.location.href='/resume';
  }

  function about(){
    window.location.href='/about';
  }

  function home(){
    window.location.href='/';
  }

  function phone(){
    window.location.href="tel:9657961608"
}
function email(){
  window.location.href="mailto:shyamkorade0@gmail.com"
}

  return (
    <div>
       <div className="navbar-top">
        <nav class="navbar navbar-expand-lg">
          <div class="container-fluid">
            {/* <span class="navbar-brand white">Navbar</span> */}
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
                <li class="nav-item ms-5">
                  <span class="nav-link white" onClick={home} aria-current="page">
                    Home
                  </span>
                </li>
                <li class="nav-item ms-5">
                  <span class="nav-link white" onClick={resume}>Portfolio</span>
                </li>
                <li class="nav-item dropdown ms-5">
                  <span
                    class="nav-link white dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Contact 
                  </span>
                  <ul class="dropdown-menu">
                    <li>
                      <span class="dropdown-item cursor" onClick={email}>Email</span>
                    </li>
                    <li>
                      <span class="dropdown-item cursor" onClick={phone}> Mobile</span>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <span class="dropdown-item cursor">Address on Map</span>
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
                <span class="btn btn-outline-success white" onClick={about} type="submit">
                  About
                </span>
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