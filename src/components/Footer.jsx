import React from "react";
import animateScrollTo from "animated-scroll-to";
import "../styles/Footer.css";

function randomNum() {
  let randomnumber = Math.floor(Math.random() * 100 + 1);
  return randomnumber;
}

const SocialLinks = () => {
  return (
    <React.Fragment>
      <div
        key="instagram"
        className="social-link"
        onClick={() => {
          window.open("https://instagram.com/ethanwong_/", `${randomNum()}`);
        }}
      >
        <div className="instagram svg"></div>
      </div>

      <div
        key="github"
        className="social-link"
        onClick={() => {
          window.open("https://github.com/ethanwwm", `${randomNum()}`);
        }}
      >
        <div className="github svg"></div>
      </div>

      <div
        key="linkedin"
        className="social-link"
        onClick={() => {
          window.open("https://www.linkedin.com/in/ethan-wong-84b38952/", `${randomNum()}`);
        }}
      >
        <div className="linkedin svg"></div>
      </div>
    </React.Fragment>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <div className="social-links">
        <SocialLinks />
      </div>
    </div>
  );
};

export default Footer;
