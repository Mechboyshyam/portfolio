import React from "react";
import "./Resume.css";
import Navbar from "../Navbar/Navbar";
import Profile from "./../Images/editedddd pic.png";

function Home() {
  function calculator() {
    window.location.href = "https://calculator-mechboyshyam.netlify.app/";
  }

  function paytm() {
    window.location.href = "https://mechboyshyam-task-2-paytm.netlify.app/";
  }

    function phone(){
        window.location.href="tel:9657961608"
    }
    function email(){
      window.location.href="mailto:shyamkorade0@gmail.com"
  }

  return (
    <div>
      <Navbar/>
      <div className="container mt-5">
        {/* part 1 */}
        <div className="row d-flex">
          {/* profile photo */}
          <div className="col-4">
            <img className="profile" src={Profile} alt="jpg" />
          </div>
          {/* name of candidate */}
          <div className="col-8">
            {/* <p className="text-center text border">Resume</p> */}
            <p class="mt-4 text">
              <span className="name">Name : Shyam Diwakar Korade.</span>
            </p>
            {/* skills of candidate */}
            <div className="buttons">
              <button className="btn btn-1">HTML</button>
              <button className="btn btn-2">CSS</button>
              <button className="btn btn-3">JAVA-SCRIPT</button>
              <button className="btn btn-4">REACT-JS</button>
              <button className="btn btn-5">Git-Hub</button>
              <button className="btn btn-6">Mongo-DB</button>
              <button className="btn btn-7">C</button>
            </div>
            {/* skills of candidate ends here */}
          </div>
        </div>

        {/* part 2 */}
        <div className="row">
          <div className="col-5">
            {/* experience div */}
            <div className="experience borderr mt-5">
              <div className="topic text-light text-center h3">
                Professional Experience
              </div>
              <div className="text-light ms-3">
                1. 1.3 Year - experience as Technician in Tata Motors
                (Commercial Vehicle). <br />
                2. One month internship in Tata Motors.
              </div>
            </div>

            {/* experience div ends here*/}

            {/* project  */}
            <div className="projects borderr mt-4">
              <div className="topic text-light text-center h3">Projects</div>
              <div className=" ms-3 text-light">
                1. Design and study of Vortex Generator on Air-craft (Final
                Year). <br />
                2. Calculator -
                <span className="project-btn text-light" onClick={calculator}>
                  click here
                </span>
                <br />
                3. Paytm front page -
                <span className="project-btn text-light" onClick={paytm}>
                  click here
                </span>
                <br />
              </div>
            </div>
            {/* project ends here */}

            {/* hobbies */}
            <div className="hobbies borderr mt-4">
              <div className="h3 text-center text-light">Hobbies</div>
              <div className=" ms-3 text-light">
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
          <div className="col-7 mt-5 borderr">
            <h3 className="text-center text-light">Educational Details</h3>
            <div className="row d-flex flex-box-education">
              <div className="col-1 mt-3 edu-row h6 text-light">Education</div>
              <div className="col-3 mt-3 h6 text-light">College/ Course</div>
              <div className="col-2 h6 text-light">Board/ University</div>
              <div className="col-1 h6 text-light">Year of passing</div>
            </div>

            <div className="row d-flex mt-3 flex-box-education">
              <div className="col-1 edu-row mt-3 text-light">Full Stack</div>
              <div className="col-3 text-light">Full Stack Web Developement</div>
              <div className="col-2 text-light">Road to Code</div>
              <div className="col-1 mt-3 text-light">2023</div>
            </div>

            <div className="row d-flex mt-3 flex-box-education">
              <div className="col-1 edu-row mt-4 text-light">B.E</div>
              <div className="col-3 text-light">
                Dr.Babasaheb Ambedkar college of engineering and research,
                Nagpur.
              </div>
              <div className="col-2 text-light">Rastrasant Tukdoji Maharaj Nagpur</div>
              <div className="col-1 mt-4 text-light">2022</div>
            </div>

            <div className="row d-flex mt-3 flex-box-education">
              <div className="col-1 edu-row mt-3 text-light">HSC</div>
              <div className="col-3 text-light">Janta Juniour college, Nagbhid</div>
              <div className="col-2 text-light">Maharastra state board, Pune</div>
              <div className="col-1 mt-3 text-light">2018</div>
            </div>

            <div className="row d-flex mt-3 flex-box-education">
              <div className="col-1 edu-row mt-3 text-light">SSC</div>
              <div className="col-3 text-light">Janta Vidyalaya, Nagbhid</div>
              <div className="col-2 text-light">Maharastra state board, Pune</div>
              <div className="col-1 mt-3 text-light">2016</div>
            </div>
          </div>
          {/* end of education detail */}

          {/* personal <details></details> */}
          <div className="mt-5 row">
            <div className="ms-2 mb-4 borderr">
              <div className="d-flex  row">
            <h3 className="text-center mb-4 mt-3 text-light">Personal Detail's</h3>
                {/* <hr /> */}
                <div className="col-2">
                  <div className="text-light">Father's name</div>
                  <div className="text-light">Mother's name</div>
                  <div className="text-light">Date of birth</div>
                  <div className="text-light">Marital status</div>
                  <div className="text-light">Gender</div>
                  <div className="text-light">Nationality</div>
                  <div className="text-light">Language known</div>
                </div>
                <div className="col-1">
                  <div className="text-light">:</div>
                  <div className="text-light">:</div>
                  <div className="text-light">:</div>
                  <div className="text-light">:</div>
                  <div className="text-light">:</div>
                  <div className="text-light">:</div>
                  <div className="text-light">:</div>
                </div>
                <div className="col-4">
                  <div className="text-light">Diwakar Shiwaram Korade.</div>
                  <div className="text-light">Jyoti Diwakar Korade</div>
                  <div className="text-light">28 Feb 2000</div>
                  <div className="text-light">Unmarried </div>
                  <div className="text-light">Male </div>
                  <div className="text-light"> Indian </div>
                  <div className="text-light">Marathi, Hindi, English and Gujarati.</div>
                  <br />
                </div>
                <div className="col-5 text-center borderrr"> <br /> <br />
                  <div className="text-light">Contact No : <span className="project-btn" onClick={phone}>+91-9657961608</span> </div>
                  <div className="text-light">Email-id : <span className="project-btn" onClick={email}>Shyamkorade0@gmail.com</span></div>
                  <div className="text-light">Address : Ward No.08, Lakshminagar, Sulezari, Nagbhid, Dist-Chandrapur 441-205</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
