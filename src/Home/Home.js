import React from "react";
import "./Home.css";
import Profile from "./../Images/shyam.jpg";

function Home() {
  return (
    <div>
      <div className="container mt-5">
        <div className="row d-flex">
          <div className="col-4">
            <img className="profile" src={Profile} alt="jpg" />
          </div>
          <div className="col-8">
            <p class="mt-2 text">
              <span className="name">Name : Shyam Diwakar Korade.</span>
            </p>
            <div className="buttons">
              <button className="btn btn-1">HTML</button>
              <button className="btn btn-2">CSS</button>
              <button className="btn btn-3">JAVA-SCRIPT</button>
              <button className="btn btn-4">REACT-JS</button>
            </div>
          </div>
        </div>
        <div className="experience mt-5">
          <div className="text-center h3">Professional Experience</div>
          <div className="h6">
            1. One month internship in Tata Motors. <br/>
            2. One year experience as Technician in Tata Motors (Commercial Vehicle).
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
