import React, { useState } from "react";
import Project from "./Project";
import Footer from "../components/Footer";
import Values from "./Values";
import Fade from "react-reveal/Fade";
import "../styles/LandingPage.css";
import "../styles/LoadingScreen.css";
import backgroundImg from "../assets/background.png";
import arrowDown from "../assets/arrow-down.png";
import animateScrollTo from "animated-scroll-to";
import { Link } from "@reach/router";
import { Parallax } from "react-scroll-parallax";

const LoadingScreen = ({ loading }) => {
  // if (loading)
  return (
    <Fade when={loading}>
      <div className="temp">
        <div className="temp-text">
          <Fade cascade top>
            <h1>e.</h1>
          </Fade>
        </div>
      </div>
    </Fade>
  );
};

const ReturnLandingPage = () => {
  return (
    <React.Fragment>
      <Values />
      <Project />
      <Footer />
    </React.Fragment>
  );
};

const LandingPage = () => {
  const [loading, setLoading] = useState(1);
  const [unmount, setUnmount] = useState(1);

  setTimeout(() => {
    setLoading(0);
  }, 3000);

  setTimeout(() => {
    setUnmount(0);
  }, 4000);

  return (
    <React.Fragment>
      <div className="landing-page-parent">
        <Fade>
          <img
            src={backgroundImg}
            className="background-img"
            alt="background"
          />
        </Fade>
        <Parallax y={[-40, 40]}>
          <Fade top cascade>
            <div>
              <h1 className="headline">
                Solving problems one at a time with fluid code. Tim
              </h1>
            </div>

            <div>
              <p className="caption">
                Websites and tools with a focus on scalability and
                responsiveness.
              </p>
            </div>

            <div className="button-div">
              <div className="about-me-button-div">
                <Link to="aboutme">
                  <h3>About me</h3>
                </Link>
              </div>
            </div>
          </Fade>
        </Parallax>
        <div
          className="arrow-div"
          onClick={() => {
            animateScrollTo(document.querySelector(".values-div-parent"));
          }}
        >
          <p>Projects</p>
          <img src={arrowDown} className="arrow-down" alt="arrow" />
        </div>
      </div>
      {/* <LoadingScreen /> */}
      {unmount ? <LoadingScreen loading={loading} /> : <ReturnLandingPage />}
    </React.Fragment>
  );
};

export default LandingPage;
