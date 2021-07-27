import React from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./Education.jsx";
import Experience from "./Experience";
import "../container/App.css";
import profPic from "../images/profilePic.jpg";

function Resume() {
  return (
    <div>
      <Grid id="resumeBackground">
        <Cell col={4}>
          <div style={{ textAlign: "center" }}>
            <img
              src={profPic}
              alt="avatar"
              style={{ height: "200px" }}
            />
          </div>

          <div className="resume-leftside">
            <h2 style={{ paddingTop: "2em" }}>Arpita Kar</h2>
            <h4>Full Stack Web Developer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              Full Stack MERN Web Developer. Passionate about coding and problem
              solving. Graduated from Georgia Tech Coding Bootcamp in Full Stack Web Development utilizing MERN.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>
              8001 Lake Union Hill Way Rd,
              <br /> Alpharetta GA-30004
            </p>
            <h5>Phone</h5>
            <p>623-277-6540</p>
            <h5>Email</h5>
            <p>arpita.sahaa@gmail.com</p>
            <h5>Github</h5>
            <p>https://github.com/arpita-sahakar</p>
            <h5>Linkedin</h5>
            <p>www.linkedin.com/in/arpita-kar-29b8b069</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </div>
        </Cell>
        <Cell className="resume-right-col" col={8}>
          <h2>Education</h2>
          <Education
            startYear={2020}
            endYear={2021}
            schoolName={"Georgia-Tech"}
            schoolDesc={"Full Stack Web-Development BootCamp"}
          />

          <Education
            startYear={2011}
            endYear={2013}
            schoolName={"Makhanlal Chaturvedi University, India"}
            schoolDesc={"Master's in PR & Advertising"}
          />

          <Education
            startYear={2006}
            endYear={2009}
            schoolName={"University of Calcutta, India"}
            schoolDesc={"Bachelor in Arts"}
          />

          <hr style={{ borderTop: "3px solid #e22947" }} />

          <h2>Experience</h2>
          <Experience
            startYear={2020}
            endYear={2021}
            jobName={"Student Developer at Trilogy Education Services - Atlanta, GA"}
            jobDesc="Worked on multiple projects using MERN Stack. Refer project section."
          />
          <Experience
            startYear={2012}
            endYear={2015}
            jobName={"Asst. Sales-Marketing Manager at Hotel Ramada Navi Mumbai, India"}
            jobDesc="Worked as Asst. Sales-Marketing Manager. Handling hotel room sales. Dealing with various corporate clients for room-booking and other reservations."
          />


          <hr style={{ borderTop: "3px solid #e22947" }} />
          <h2>Skills</h2>
          {/* <Skills skill={"HTML/CSS?"} />
          <Skills skill={"JavaScript"} />
          <Skills skill={"JavaScript"} />
          <Skills skill={"JavaScript"} /> */}
          {/* <p>
            ReactJs, React Hooks, MongoDb, Mongoose, Axios, NodeJs, Express,
            MySQL, Heroku, Github, Github-pages, ORM, Sequelize, JQuery,
            JavaScript, Bootstrap, HTML, CSS.
          </p> */}
          <Grid className="demo-grid-1" style={{ fontWeight: "bold" }}>
            <Cell col={3}>ReactJs</Cell>
            <Cell col={3}>React Hooks</Cell>
            <Cell col={3}>MongoDb</Cell>
            <Cell col={3}>Mongoose</Cell>
          </Grid>
          <Grid className="demo-grid-1" style={{ fontWeight: "bold" }}>
            <Cell col={3}>Axios</Cell>
            <Cell col={3}>NodeJs</Cell>
            <Cell col={3}>Express</Cell>
            <Cell col={3}>MySQL</Cell>
          </Grid>
          <Grid className="demo-grid-1" style={{ fontWeight: "bold" }}>
            <Cell col={3}>Heroku</Cell>
            <Cell col={3}>Github</Cell>
            <Cell col={3}>Github-pages</Cell>
            <Cell col={3}>ORM</Cell>
          </Grid>
          <Grid className="demo-grid-1" style={{ fontWeight: "bold" }}>
            <Cell col={3}>Sequelize</Cell>
            <Cell col={3}>JQuery</Cell>
            <Cell col={3}>JavaScript</Cell>
            <Cell col={3}>Bootstrap</Cell>
          </Grid>
          <Grid className="demo-grid-1" style={{ fontWeight: "bold" }}>
            <Cell col={3}>HTML</Cell>
            <Cell col={3}>CSS</Cell>
            <Cell col={3}></Cell>
            <Cell col={3}></Cell>
          </Grid>
        </Cell>
      </Grid>
    </div>
  );
}

export default Resume;
