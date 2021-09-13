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
            Bachelor's from Calcutta University and Masters degree from Makhanlal University.
            Graduated Bootcamp on Full Stack Web Development from Georgia Tech.
            Used JavaScript , jQuery , MySQL , MongoDB , React , Node.js , Express , GitHub , HTML , CSS , Bootstrap , Jira , Agile methodology
            for all development. Started career as a trainee, promoted to Jr. developer and then to developer. Worked on enhancement and maintainance of Hotel
            Management Software. Gathering business requirements from product owner along with Backlog grooming and Sprint planning. Demo session to
            Team and Product owner
            {" "}
            <br />
            <br />
            Looking forward to obtain a position as a web application developer in a fun, fast
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
