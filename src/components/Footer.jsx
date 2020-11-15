import React from "react";
import { Fade } from "react-reveal";
import "../styles/Footer.scss";

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

export default Footer;
