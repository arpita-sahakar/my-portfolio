import React from "react";
import { Grid, Cell } from "react-mdl";
import "../container/App.css";

function LandingPage() {
  return (
    <div style={{ width: "100%", margin: "auto" }}>
      <Grid className="landing-grid">
        <Cell col={12}>
          <img
            src="images/jack-jill1.png"
            alt="avatar"
            className="avatar-img"
          />

          <div className="banner-text">
            <h1>Full Stack Web Developer</h1>

            <hr />
            <p>
              HTML/CSS | Bootstrap | JavaScript | MongoDb | Express | React |
              NodeJs | MySql | Sequelize | Mongoose
            </p>

            <div className="social-links">
              {/* Linkedin */}
              <a
                href="https://linkedin.com/in/arpita-kar-29b8b069"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-linkedin-square" area-hidden="true" />
              </a>
              {/* Github */}
              <a
                href="https://github.com/arpita-sahakar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-github-square" area-hidden="true" />
              </a>

              {/* StackOverflow */}
              <a
                href="https://stackoverflow.com/users/14134239/arpita-saha"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-stack-overflow" area-hidden="true" />
              </a>
            </div>
          </div>
        </Cell>
      </Grid>
    </div>
  );
}

export default LandingPage;
