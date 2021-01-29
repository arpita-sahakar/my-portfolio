import React from "react";
import { Navigation} from "react-mdl";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <Navigation>
        <Link to="/resume"><span style={{fontWeight:"bold"}}>Resume</span></Link>
        <Link to="/aboutme"><span style={{fontWeight:"bold"}}>About Me</span></Link>
        <Link to="/projects"><span style={{fontWeight:"bold"}}>Projects</span></Link>
        <Link to="/contact"><span style={{fontWeight:"bold"}}>Contact</span></Link>
      </Navigation>
    </>
  );
}

export default Nav;
