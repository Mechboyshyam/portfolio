import React from "react";
import Navbar from "./../Navbar/Navbar.js";
import "./Home.css"

function Home() {
  return (
    <div className="home row">
      <Navbar />
      <div className="paragraph-1 ms-5 col-8 ">
        <p className="white">
          <span>Welcome_user.name</span>,<br/> I am Shyam Diwakar Korade. I have
          completed my graduation in Mechanical engineering in 2022. Currently
          working in Tata Motors as Technician in Bodyshop department.
        </p>
        <p className="white">Thanks for visiting...</p>
      </div>
    </div>
  );
}

export default Home;
