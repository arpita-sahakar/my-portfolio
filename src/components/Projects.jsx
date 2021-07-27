import React from "react";
import { Tabs, Tab, Grid, Cell } from "react-mdl";
import { useState } from "react";
import "../container/App.css";
import projects from "./projects_list.json";
import ProjectCard from "./ProjectCard";

function Projects() {
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (tabId) => {
    setActiveTab(tabId);
  };

  const toggle = () => {
    if (activeTab === 0) {
      return projects
        .filter((proj) => proj.tech === "react")
        .map((proj) => <ProjectCard {...proj} />);
    } else if (activeTab === 1) {
      return projects
        .filter((proj) => proj.tech === "mongo")
        .map((proj) => <ProjectCard {...proj} />);
    } else if (activeTab === 2) {
      return projects
        .filter((proj) => proj.tech === "jquery")
        .map((proj) => <ProjectCard {...proj} />);
    } else if (activeTab === 3) {
      return projects
        .filter((proj) => proj.tech === "express")
        .map((proj) => <ProjectCard {...proj} />);
    }
    // else if (activeTab === 4) {
    //   return projects
    //     .filter((proj) => proj.tech === "node")
    //     .map((proj) => <ProjectCard {...proj} />);
    // }
  };
  return (
    <div className="category-tabs">
      <Tabs activeTab={activeTab} onChange={handleChange} ripple>
        <Tab style={{ color: "black", fontWeight: "bold" }} >ReactJs</Tab>
        <Tab style={{ color: "black", fontWeight: "bold" }} >MongoDb</Tab>
        <Tab style={{ color: "black", fontWeight: "bold" }} >JQuery</Tab>
        <Tab style={{ color: "black", fontWeight: "bold" }} >ExpressJs / NodeJs</Tab>
        {/* <Tab style={{ color: "black", fontWeight: "bold" }} >NodeJs</Tab> */}
      </Tabs>

      <Grid id="proGrid">
        <Cell col={12}>
          <div className="content">
            <div className="projects-grid">{toggle()}</div>
          </div>
        </Cell>
      </Grid>
    </div>
  );
}

export default Projects;
