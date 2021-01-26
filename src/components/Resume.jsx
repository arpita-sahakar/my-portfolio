import React from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./Education.jsx";
import Experience from "./Experience";
import Skills from "./Skills";

function Resume() {
  return (
    <div>
      <Grid>
        <Cell col={4}>
          <div style={{ textAlign: "center" }}>
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fGdpcmx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
              alt="avatar"
              style={{ height: "200px" }}
            />
          </div>
          <h2 style={{ paddingTop: "2em" }}>Arpita Kar</h2>
          <h4 style={{ color: "grey" }}>Full Stack Web Developer</h4>
          <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            nobis expedita numquam maiores quas laboriosam quidem repudiandae,
            rerum labore exercitationem quos quod fuga quasi iusto laudantium
            aperiam est. Nesciunt, iure!
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
            startYear={2020}
            endYear={2021}
            schoolName={"Georgia-Tech"}
            schoolDesc={"Full Stack Web-Development BootCamp"}
          />

          <Education
            startYear={2020}
            endYear={2021}
            schoolName={"Georgia-Tech"}
            schoolDesc={"Full Stack Web-Development BootCamp"}
          />

          <hr style={{ borderTop: "3px solid #e22947" }} />

          <h2>Experience</h2>
          <Experience
            startYear={2012}
            endYear={2015}
            jobName={"First Job"}
            jobDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                      nobis expedita numquam maiores quas laboriosam quidem repudiandae,
                      rerum labore exercitationem quos quod fuga quasi iusto laudantium
                      aperiam est. Nesciunt, iure!"
          />

          <Experience
            startYear={2018}
            endYear={2020}
            jobName={"Second Job"}
            jobDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                      nobis expedita numquam maiores quas laboriosam quidem repudiandae,
                      rerum labore exercitationem quos quod fuga quasi iusto laudantium
                      aperiam est. Nesciunt, iure!"
          />
          <hr style={{ borderTop: "3px solid #e22947" }} />
          <h2>Skills</h2>
          <Skills skill={"JavaScript"} />
          <Skills skill={"JavaScript"} />
          <Skills skill={"JavaScript"} />
          <Skills skill={"JavaScript"} />
        </Cell>
      </Grid>
    </div>
  );
}

export default Resume;
