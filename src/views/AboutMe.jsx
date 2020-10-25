import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/AboutMe.scss";
import large_text from "../assets/large-text-about-me.png";
import portrait from "../assets/my-portrait.jpg";
import rotating_text from "../assets/ETHAN.png";
import background_graphic from "../assets/about-me-graphic.png";
import { Fade } from "react-reveal";
import resume from "../assets/resume.pdf";

const Footer = () => {
  return (
    <Fade right cascade>
      <div className="footer">
        <div
          key="instagram"
          className="social-link"
          onClick={() => {
            window.location.href = "https://instagram.com/ethanwong_/";
          }}
        >
          <div className="instagram svg"></div>
        </div>

        <div
          key="github"
          className="social-link"
          onClick={() => {
            window.href("https://github.com/ethanwwm");
          }}
        >
          <div className="github svg"></div>
        </div>

        <div
          key="linkedin"
          className="social-link"
          onClick={() => {
            window.href("https://www.linkedin.com/in/ethan-wong-84b38952/");
          }}
        >
          <div className="linkedin svg"></div>
        </div>
      </div>
    </Fade>
  );
};
const AboutMe = () => {
  return (
    <React.Fragment>
      <div className="about-me">
        <div className="navigation">
          <p>
            <NavLink to="/">
              <span className="home">Home/</span>
            </NavLink>
            About Me
          </p>
        </div>

        <div className="large-text">
          <img src={large_text} />
        </div>
        <div className="portrait">
          <Fade top>
            <img src={portrait} />
          </Fade>
        </div>
        <img className="background-graphic" src={background_graphic} />

        <img className="rotating-text" src={rotating_text} />

        <Footer />
      </div>
      <div className="text-area">
        <div className="text">
          <h2>
            I create digital solutions using good design, fluid code and lots of
            coffee.
          </h2>

          <p>
            Hi, I’m Ethan Wong and I’m a frontend developer and UI designer
            based in the United States. I’ve worked for teams internationally
            and have worked alongside some of the most brightest people.
          </p>
          <p>
            I’m an energetic individual that believes in detail-oriented and
            user-focused design + code. Feel free to explore my experience in
            further detail by viewing my resume through the link below.
          </p>
          <p
            className="download"
            onClick={() => {
              window.location.href =
                "https://drive.google.com/file/d/1k7zaQJIzMOV5nXYy7wX8Y72UWQ8k6j_J/view?usp=sharing";
            }}
          >
            View resume
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutMe;
