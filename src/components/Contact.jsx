import React from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

function Contact() {
  return (
    <div className="contact-body">
      <Grid className="contact-grid">
        <Cell col={6}>
          <h2>Arpita</h2>
          <img
            src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
            alt="avatar"
            style={{ height: "250px" }}
          />
          <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
            accusantium ducimus eligendi, voluptate aut unde excepturi vero
            necessitatibus dolor accusamus pariatur illo culpa veritatis, in
            asperiores adipisci labore vel fugit?
          </p>
        </Cell>
        <Cell col={6}>
          <h2>Contact Me</h2>
          <hr />
          <div className="contact-list">
            <List>
              <ListItem>
                <ListItemContent style={{fontSize:"30px", fontFamily:"Anton"}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (123) 456=7890
                 </ListItemContent>
              </ListItem>

              <ListItem>
                <ListItemContent style={{fontSize:"30px", fontFamily:"Anton"}}>
                    <i className="fa fa-fax" aria-hidden="true"/>
                    (123) 456=7890
                 </ListItemContent>
              </ListItem>

              <ListItem>
                <ListItemContent style={{fontSize:"30px", fontFamily:"Anton"}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    arpita.sahaa@gmail.com
                 </ListItemContent>
              </ListItem>

              <ListItem>
                <ListItemContent style={{fontSize:"30px", fontFamily:"Anton"}}>
                    <i className="fa fa-github-alt" aria-hidden="true"/>
                    My zoom
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
