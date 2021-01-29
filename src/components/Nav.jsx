import React from "react";
import { Navigation} from "react-mdl";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <Navigation>
        <Link to="/resume">Resume</Link>
        <Link to="/aboutme">About Me</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </Navigation>
    </>
  );
}

export default Nav;
