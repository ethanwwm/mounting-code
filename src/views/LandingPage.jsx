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

// fetch('https://firebasestorage.googleapis.com/v0/b/mounting-ethanwwm.appspot.com/o/landing-page-gradient.svg?alt=media&token=070e018b-3a68-4d8f-9ef6-600a5aaf129c').then((res)=>{
//   console.log(res)
// }).catch(()=>{
//   console.log('failed to get')
// })

const LandingPage = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="landing-page-parent">
        {graphic ? (
          <Fade top>
            <img
              className="graphic"
              src="https://firebasestorage.googleapis.com/v0/b/mounting-ethanwwm.appspot.com/o/landing-page-gradient.svg?alt=media&token=070e018b-3a68-4d8f-9ef6-600a5aaf129c"
              alt="graphic"
            />
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
                  window.location.href = "mailto:ethanwwm@gmail.com";
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
