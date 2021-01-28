import React from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

function Contact() {
  return (
    <div className="contact-body">
      <Grid className="contact-grid">
        <Cell col={6}>
          <h2>Arpita Kar</h2>
          <img
            src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
            alt="avatar"
            style={{ height: "250px" }}
          />
          <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
            Full Stack MERN Web Developer. Passionate about coding and problem
            solving. Currently pursuing Georgia Tech Coding Bootcamp.
          </p>
        </Cell>
        <Cell col={6}>
          <h2>Contact Me</h2>
          <hr />
          <div className="contact-list">
            <List>
              <ListItem>
                <ListItemContent
                  style={{ fontSize: "30px", fontFamily: "Anton" }}
                >
                  <i className="fa fa-phone-square" aria-hidden="true" />
                  (623) 277 6540
                </ListItemContent>
              </ListItem>

              <ListItem>
                <ListItemContent
                  style={{ fontSize: "30px", fontFamily: "Anton" }}
                >
                  <i className="fa fa-fax" aria-hidden="true" />
                  (623) 277 6540
                </ListItemContent>
              </ListItem>

              <ListItem>
                <ListItemContent
                  style={{ fontSize: "30px", fontFamily: "Anton" }}
                >
                  <i className="fa fa-envelope" aria-hidden="true" />
                  arpita.sahaa@gmail.com
                </ListItemContent>
              </ListItem>

              <ListItem>
                <ListItemContent
                  style={{ fontSize: "30px", fontFamily: "Anton" }}
                >
                  <i className="fa fa-github-alt" aria-hidden="true" />
                  arpita.sahaa@gmail.com
                </ListItemContent>
              </ListItem>
            </List>
          </div>
        </Cell>
      </Grid>
    </div>
  );
}

export default Contact;
