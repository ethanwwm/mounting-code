import React from "react";
import "../styles/Project.scss";
import ProjectCard from "../components/ProjectCard";
import { NavLink } from "react-router-dom";
import { Fade } from "react-reveal";

const Project = () => {
  return (
    <div className="projects">
      <div className="navigation">
        <p>
          <NavLink to="/">
            <span className="home">Home/</span>
          </NavLink>
          Projects
        </p>
      </div>
      <Fade bottom cascade>
        <div className="cards">
          <ProjectCard
            header="MB"
            name="MakeBox"
            caption="High-tech STEM projects, delivered right to your door."
            company="Katapult Makerspace"
            year="2020"
            link="https://katapultmakerspace-makebox.com"
          />
          <ProjectCard
            header="FB"
            name="FaveBiz"
            caption="Focus on your business, and we’ll take care of the rest."
            company="Fave (Acquired Groupon Malaysia in 2017)"
            year="2019"
            link="https://favebiz.com"
          />

          <ProjectCard
            header="TS"
            name="TimeScape"
            caption="An app that helps track work and rest times."
            company="Messiah University"
            year="2020"
            // link="https://katapultmakerspace-makebox.com"
          />
          <ProjectCard
            header="GS"
            name="Gravity Simulator"
            caption="Simulate gravity on different planets."
            company="Personal project"
            year="2019"
          />

          <ProjectCard
            header="TB"
            name="Tackling Bias In A.I"
            caption="Analyze the output of a model and point out any biases within."
            company="The Oxford Foundry, University of Oxford"
            year="2019"
            link="https://www.linkedin.com/pulse/oxford-students-build-solutions-prevent-perils-bias-out-foundry/"
          />
        </div>
      </Fade>
    </div>
  );
};

export default Project;
