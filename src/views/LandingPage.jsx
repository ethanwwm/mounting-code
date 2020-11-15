import React, { useState, useEffect } from "react";
import "../styles/LandingPage.scss";
import "../styles/LoadingScreen.css";
import { NavLink } from "react-router-dom";
import anime from "animejs/lib/anime.es.js";
import { Fade } from "react-reveal";
import Footer from "../components/Footer";
import Navbar from "../components/Header";
import graphic from "../assets/landing-page-gradient.svg";
import arrow_right from "../assets/arrow-right.svg";

const LandingPage = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="landing-page-parent">
        {graphic ? (
          <Fade top>
            <img className="graphic" src={graphic} alt="graphic" />
          </Fade>
        ) : undefined}
        <Fade cascade>
          <div className="landing-text-area">
            <h1 className="large-text">
              Let's solve your problem
              <br />
              with design.
            </h1>
            <h2>
              Hi there. I’m Ethan Wong, a design + purpose driven UI/UX designer
              and developer.
            </h2>
            <div className="buttons">
              <NavLink to="/projects" exact>
                <div className="gradient-button">
                  <p>View Projects</p>
                  <img src={arrow_right} alt="" className="arrow-right" />
                </div>
              </NavLink>

              <div
                className="outline-button"
                onClick={() => {
                  window.location.href = "mailto:ethanwwm@email.com";
                }}
              >
                <p>Let's talk!</p>
              </div>
            </div>
          </div>
        </Fade>

        <div className="footer-div">
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
};

export default LandingPage;
