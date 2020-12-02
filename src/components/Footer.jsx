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
          <img src="https://firebasestorage.googleapis.com/v0/b/mounting-ethanwwm.appspot.com/o/instagram.svg?alt=media&token=9871fa63-f8f9-4d06-8862-624c7e441a18" alt=""/>
        </div>

        <div
          key="github"
          className="social-link"
          onClick={() => {
            window.location.href ="https://github.com/ethanwwm";
          }}
        >
          <img src="https://firebasestorage.googleapis.com/v0/b/mounting-ethanwwm.appspot.com/o/github.svg?alt=media&token=bfc09014-f19d-4c36-8f15-335d4b52958a" alt=""/>
        </div>

        <div
          key="linkedin"
          className="social-link"
          onClick={() => {
            window.location.href ="https://www.linkedin.com/in/ethan-wong-84b38952/";
          }}
        >
          <img src="https://firebasestorage.googleapis.com/v0/b/mounting-ethanwwm.appspot.com/o/linkedin.svg?alt=media&token=6942ca2d-15cc-4f87-9e8a-8bd1cb1e388b" alt=""/>
        </div>
      </div>
    </Fade>
  );
};

export default Footer;
