import React from "react";
import "./Home.css";
import Profile from "./../Images/shyam2.JPG";

function Home() {
  function calculator() {
    window.location.href = "https://calculator-mechboyshyam.netlify.app/";
  }

  function paytm() {
    window.location.href = "https://mechboyshyam-task-2-paytm.netlify.app/";
  }

  //   function phone(){
  //       window.location.href="tel:9657961608"
  //   }
  //   function email(){
  //     window.location.href="mailto:shyamkorade0@gmail.com"
  // }

  return (
    <div>
      <hr />
      <h1 className="text-center bg-danger">Resume</h1> <hr />
      <div className="container mt-5">
      {/* part 1 */}
        <div className="row d-flex">
          {/* profile photo */}
          <div className="col-4">
            <img className="profile" src={Profile} alt="jpg" />
          </div>
          {/* name of candidate */}
          <div className="col-8">
            <p class="mt-2 text">
              <span className="name">Name : Shyam Diwakar Korade.</span>
            </p>
            {/* skills of candidate */}
            <div className="buttons">
              <button className="btn btn-1">HTML</button>
              <button className="btn btn-2">CSS</button>
              <button className="btn btn-3">JAVA-SCRIPT</button>
              <button className="btn btn-4">REACT-JS</button>
            </div>
            {/* skills of candidate ends here */}
          </div>
        </div>

        {/* part 2 */}
        <div className="row">
          <div className="col-5">
            {/* experience div */}
            <div className="experience mt-5">
              <div className="topic text-center h3">Professional Experience</div>
              <div className="h6">
                1. 1.3 Year - experience as Technician in Tata Motors
                (Commercial Vehicle).
                2. One month internship in Tata Motors. <br />
              </div>
            </div>
            {/* experience div ends here*/}

            {/* project  */}
            <div className="projects mt-4">
              <div className="topic text-center h3">Projects</div>
              <div className="h6">
                1. Design and study of Vortex Generator on Air-craft (Final
                Year). <br />
                2. Calculator -
                <span className="project-btn" onClick={calculator}>
                  Click here
                </span>
                <br />
                3. Paytm front page -
                <span className="project-btn" onClick={paytm}>
                  Click here
                </span>
                <br />
              </div>
            </div>
            {/* project ends here */}

            {/* hobbies */}
            <div className="hobbies mt-4">
              <div className="h3 text-center">Hobbies</div>
              <div className="h6">
                1. Learning mechanism <br />
                2. Learning new skill's <br />
                3. Designing website's <br />
                4. Repairing <br />
                5. Listening songs <br />
                6. Visiting places <br />
                7. Riding
              </div>
            </div>
            {/* hobbies ends here */}
          </div>
          {/* <div className="col-1"></div> */}
          {/* education details  */}
          <div className="col-7 mt-5">
            <h3 className="text-center">Educational Details</h3>
            <div className="row d-flex flex-box-education">
              <div className="col-1">Qualification</div>
              <div className="col-3">College/ Course</div>
              <div className="col-2">Board/ University</div>
              <div className="col-1">Passout Year</div>
            </div>

            <div className="row d-flex mt-3 flex-box-education">
              <div className="col-1 mt-3">Full Stack</div>
              <div className="col-3">Full Stack Web Developement</div>
              <div className="col-2">Road to Code</div>
              <div className="col-1 mt-3">2023</div>
            </div>

            <div className="row d-flex mt-3 flex-box-education">
              <div className="col-1 mt-4">B.E</div>
              <div className="col-3">Dr.Babasaheb Ambedkar college of engineering and research, Nagpur.</div>
              <div className="col-2">Rastrasant Tukdoji Maharaj Nagpur</div>
              <div className="col-1 mt-4">2022</div>
            </div>

            <div className="row d-flex mt-3 flex-box-education">
              <div className="col-1 mt-3">HSC</div>
              <div className="col-3">Janta Juniour college Nagbhid</div>
              <div className="col-2">Maharastra state board, Pune</div>
              <div className="col-1 mt-3">2018</div>
            </div>

            <div className="row d-flex mt-3 flex-box-education">
              <div className="col-1 mt-3">SSC</div>
              <div className="col-3">Janta Vidyalaya, Nagbhid</div>
              <div className="col-2">Maharastra state board, Pune</div>
              <div className="col-1 mt-3">2016</div>
            </div>

          </div>
          {/* end of education detail */}
        </div>
      </div>
    </div>
  );
}

export default Home;
