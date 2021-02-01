import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Projects from "./Projects";
import Resume from "./Resume"


const Main = () => (
    <Switch>
        <Route exact path="/" render={LandingPage}/>
        <Route exact path="/my-portfolio" render={LandingPage}/>
        <Route path="/aboutme" component={AboutMe}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/resume" component={Resume}/>
    </Switch>
)

export default Main
