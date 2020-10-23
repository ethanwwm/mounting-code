import React, { useState } from "react";
import "../styles/LandingPage.scss";
import "../styles/LoadingScreen.css";
import { NavLink } from "react-router-dom";
import anime from "animejs/lib/anime.es.js";
import { Fade } from "react-reveal";

const Navbar = () => {
  return (
    <Fade top cascade>
      <div className="navbar">
        <p className="green">home</p>

        <NavLink to="/projects" exact>
          <div className="hover-div">
            <p>projects</p>
          </div>
        </NavLink>
        <NavLink to="/aboutme" exact>
          <div className="hover-div">
            <p>about me</p>
          </div>
        </NavLink>

        <div
          className="hover-div"
          onClick={() => {
            window.location.href = "mailto:ethanwwm@email.com";
          }}
        >
          <p>contact me</p>
        </div>
      </div>
    </Fade>
  );
};

const Banner = () => {
  return (
    <React.Fragment>
      <div className="banner">
        <Fade left cascade>
          <div
            className="title animate-this"
            onClick={() => {
              document.querySelector(".footer").className = "footer selected";
            }}
          >
            <h1>Hello.</h1>

            <h1 className="name">
              I'm <br />
              Ethan
              <br /> Wong.
            </h1>
          </div>
        </Fade>
      </div>
      <Navbar />
    </React.Fragment>
  );
};

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

const LandingPage = () => {
  return (
    <div className="landing-page-parent">
      <h1></h1>
      <NavLink to="/menu" exact>
        <div className="mobile-click-to-menu"></div>
      </NavLink>
      <Banner />
      <Footer />
      <p className="tap-anywhere">tap anywhere</p>
    </div>
  );
};

export default LandingPage;
