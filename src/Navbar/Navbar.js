import React from 'react'
import "./Navbar.css";
import { Link } from 'react-router-dom';
import insta from "./../Images/instagram.png"
import fb from "./../Images/facebook.png"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Navbar() {
  async function map(){
    window.location.href='https://goo.gl/maps/R2tXYYVTtUyBLLxUA';
  }

  function phone(){
    window.location.href="tel:9657961608"
}
  function email(){
  window.location.href="mailto:shyamkorade0@gmail.com"
}

function instagram(){
  window.location.href="https://www.instagram.com/mechboy_shyam/"
}

function facebook(){
  window.location.href="https://www.facebook.com/shyam.korade.50"
}

function cv(){
  window.location.href="https://drive.google.com/file/d/1hCzJHTeVT-b-ZvhTsyw4r-j3yQ509goC/view?usp=sharing"
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
                  <Link to="/" className='text-decoration-none btn' ><span class="nav-link white"  aria-current="page">
                    Home
                  </span></Link>
                </li>
                <li class="nav-item ms-5">
                  <Link to="/resume" className='text-decoration-none btn'><span class="nav-link white" >Portfolio</span></Link>
                </li>
                <li class="nav-item dropdown ms-5">
                  <span
                    class="nav-link mt-2 white dropdown-toggle"
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
                      <span onClick={map} class="dropdown-item cursor">Address on Map</span>
                    </li>
                  </ul>
                </li>
              </ul>
              <form class="d-flex" role="search">
              <span className="btn text-light " onClick={instagram}>
              <img className='logo' src={insta} alt="png" /> Instagram
                </span>
                <span className="btn text-light " onClick={facebook }>
                <img className='logo' src={fb} alt="png" />  Facebook
                </span>
                <span className="btn text-light " onClick={cv}>
                  Dowload CV
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