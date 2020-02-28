import React from "react";
import "../styles/Project.css";
import Button from "../components/Button";
import gravityScreenshot from "../assets/gravity-screenshot.jpg";
import faveScreenshot from "../assets/fave-screenshot.jpg";
import oxfordScreenshot from "../assets/oxford-screenshot.jpg";
import timescapeScreenshot from "../assets/timescape-screenshot.png";
import Fade from "react-reveal/Fade";

let projects = [
  {
    title: "FaveBiz",
    caption:
      "While working at Fave Group (formerly Groupon Malaysia) in the Summer of 2019, my team and I at Fave were given the task of developing a client-side web-app that was responsive, generating large amounts of data for more than 4 million customers.",
    screenshot: (
      <Fade right>
        <div className="screenshot-div">
          <img className="screenshot" src={faveScreenshot} />
        </div>
      </Fade>
    ),
    className: "project",
    link: "https://favebiz.com"
  },
  {
    title: "Gravity Simulator",
    caption:
      "Developed for learning purposes, this website was built to simulate gravity on different planets, along with a dynamic display of balls dropping for a more visual experience.",
    screenshot: (
      <Fade left>
        <div className="screenshot-div">
          <img className="screenshot left" src={gravityScreenshot} />
        </div>
      </Fade>
    ),
    className: "project flipped",
    link: "http://gravity-simulator.xyz"
  },

  {
    title: "Tackling Bias In Tech-Based A.I. Recruitment Tools",
    caption:
      "Today, we share a pressing concern for the ethics behind people selection based A.I.'s used for analytical purposes, especially when it comes to our jobs. My team and I developed an MVP that aims to analyze the output of a model and point out any biases within.",
    screenshot: (
      <Fade right>
        <div className="screenshot-div">
          <img className="screenshot" src={oxfordScreenshot} />
        </div>
      </Fade>
    ),
    className: "project",
    link:
      "https://www.linkedin.com/pulse/oxford-students-build-solutions-prevent-perils-bias-out-foundry/"
  },
  {
    title: "TimeScape",
    caption:
      "TimeScape is an app that helps track work and rest times. This app is currently being developed by my team and I at Messiah College in conjunction with our Computer Science department. A link will be added once the project is completed.",
    screenshot: (
      <Fade left>
        <div className="screenshot-div">
          <img className="screenshot left" src={timescapeScreenshot} />
        </div>
      </Fade>
    ),
    className: "project flipped",
    link: "https://favebiz.com"
  }
];

const Project = () => {
  let compiledProjects = [];

  projects.forEach(proj => {
    compiledProjects.push(
      <div className={proj.className} key={proj.title}>
        <Fade bottom cascade>
          <div className="project-text">
            <h1 className="project-title">{proj.title}</h1>
            <p className="project-caption">{proj.caption}</p>
            {proj.title === "TimeScape" ? (
              <React.Fragment />
            ) : (
              <Button text="Visit site" fill={false} link={proj.link} whiteBackground={true} />
            )}
          </div>
        </Fade>
        {proj.screenshot}
      </div>
    );
  });

  return <div className="projects-parent">{compiledProjects}</div>;
};

export default Project;
