import React from "react";
import { Grid, Cell } from "react-mdl";
import "../container/App.css";

function LandingPage() {
  return (
    <div style={{ width: "100%", margin: "auto" }}>
      <Grid className="landing-grid">
        <Cell col={12}>
          <img
            src="data:image/jpeg;base64,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"
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
