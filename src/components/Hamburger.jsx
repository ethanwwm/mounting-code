import React, { useState } from "react";
import { Fade } from "react-reveal";
import hamburger from "../assets/menu-outline.svg";
import "../styles/Hamburger.scss";
import rotating_text from "../assets/ETHAN.png";
import emoji from "../assets/party-emoji.svg";
import { NavLink } from "react-router-dom";

const Hamburger = () => {
  const [showLinks, setShowLinks] = useState(false);

  function openMenu() {
    console.log(document.getElementById("fullscreen").style.width);
    document.getElementById("fullscreen").style.width = "100%";
    document.getElementById("rotating-text-menu").style.opacity = "1";
    setShowLinks(true);
  }
  function closeMenu() {
    document.getElementById("fullscreen").style.width = "0%";
    document.getElementById("rotating-text-menu").style.opacity = "0";
    setTimeout(() => {
      setShowLinks(false);
    }, 500);
  }

  return (
    <React.Fragment>
      {showLinks ? undefined : (
        <Fade>
          <div
            id="hamburger-menu"
            onClick={() => {
              openMenu();
            }}
          >
            <img src={hamburger}></img>
          </div>
        </Fade>
      )}

      <div id="fullscreen">
        <p
          className="close"
          onClick={() => {
            closeMenu();
          }}
        >
          Close
        </p>
        {showLinks ? (
          <Fade top cascade>
            <div className="link-section">
              <h1
                className="link"
                onClick={() => {
                  closeMenu();
                }}
              >
                <NavLink to="/" exact>
                  Home
                </NavLink>
              </h1>

              <h1
                className="link"
                onClick={() => {
                  closeMenu();
                }}
              >
                <NavLink to="/projects" exact>
                  Projects
                </NavLink>
              </h1>

              <h1
                className="link"
                onClick={() => {
                  closeMenu();
                }}
              >
                <NavLink to="/aboutme" exact>
                  About
                </NavLink>
              </h1>
              <h1
                className="link"
                onClick={() => {
                  window.location.href = "mailto:ethanwwm@email.com";
                }}
              >
                Contact
              </h1>
            </div>
          </Fade>
        ) : undefined}

        <img id="rotating-text-menu" src={rotating_text} />

        <div className="footer-menu">
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
          {showLinks ? (
            <Fade right cascade>
              <img src={emoji} alt="" className="emoji" />
            </Fade>
          ) : undefined}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Hamburger;
