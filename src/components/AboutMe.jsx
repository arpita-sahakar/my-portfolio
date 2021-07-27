import React from "react";
import { Grid, Cell } from "react-mdl";

function AboutMe() {
  return (
    <div className="aboutMe">
      <Grid className="about-grid">
        <Cell col={12}>
          <h1>About Me</h1>
          <hr
            style={{
              borderTop: "3px solid #833fb2",
              width: "50%",
              margin: "auto",
            }}
          />
        </Cell>

        <Cell col={1}></Cell>
        <Cell col={10}>
          <h6
            style={{
              fontWeight: "bold",
              textAlign: "justify",
              textJustify: "inter-word",
            }}
          >
            Graduated Bootcamp on Full Stack Web Development from Georgia Tech.
            Used ReactJS, React Hooks, Mongodb, Mongoose, IndexedDB, NodeJs,
            Express, MySQL, Orm, Sequelize, JQuery, JavaScript, Bootstrap, HTML,
            CSS, Github, Heroku for all development and deployment of multiple
            projects. I want to be a Web Application Developer and Online
            Business Developer with considerable training and enterprise
            experience in Web site design and layout and in all stages of
            design, coding, and testing of Web applications, and in the
            formation, planning, and implementation of online business ventures.{" "}
            <br />
            <br />
            To obtain a position as a web application developer in a fun, fast
            paced, cutting edge environment that promotes teamwork and integrity
            and that fosters personal and professional development.
          </h6>
        </Cell>
        <Cell col={1}></Cell>
      </Grid>
    </div>
  );
}

export default AboutMe;
