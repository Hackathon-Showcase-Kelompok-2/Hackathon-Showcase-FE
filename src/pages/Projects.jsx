import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Card from "../Projects/Card";
import ProjectFilter from "../Projects/ProjectFilter";
import ProjectList from "../Projects/ProjectList";
import CardProjects from "../Projects/CardProjects";

function Projects() {
  return (
    <div>
      <Navbar />
      <CardProjects />
      <ProjectFilter />
      <ProjectList />
      <Card />
      {/* <Footer /> */}
    </div>
  );
}
export default Projects;
