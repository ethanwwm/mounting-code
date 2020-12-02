import React from "react";
import "../styles/AboutMe.scss";
import large_text from "../assets/large-text-about-me.png";
import portrait from "../assets/my-portrait.jpg";
import rotating_text from "../assets/ETHAN.png";
import background_graphic from "../assets/about-me-graphic.png";
import { Fade } from "react-reveal";
import Navbar from "../components/Header";
import download_icon from "../assets/cloud-download-outline.svg";
import download_white from "../assets/cloud-download-white.svg";
import gradient from "../assets/about-me-gradient.svg";
import don from "../assets/don-spidell.svg";
import { Parallax } from "react-scroll-parallax";
// import gradient_button from "../assets/gradient-download-button.svg";

const Footer = () => {
  return (
    <Fade right cascade>
      <div className="footer-about">
        <div
          key="instagram"
          className="social-link"
          onClick={() => {
            window.location.href = "https://instagram.com/ethanwong_/";
          }}
        >
          <img src="https://firebasestorage.googleapis.com/v0/b/mounting-ethanwwm.appspot.com/o/blue-instagram.svg?alt=media&token=582a08b8-4281-4d33-829b-fed197804eae" alt=""/>
        </div>

        <div
          key="github"
          className="social-link"
          onClick={() => {
            window.href("https://github.com/ethanwwm");
          }}
        >
          <img src="https://firebasestorage.googleapis.com/v0/b/mounting-ethanwwm.appspot.com/o/blue-github.svg?alt=media&token=97d849b1-a749-4d1b-b8e8-e02b4a515b49" alt=""/>
        </div>

        <div
          key="linkedin"
          className="social-link"
          onClick={() => {
            window.href("https://www.linkedin.com/in/ethan-wong-84b38952/");
          }}
        >
          <img src="https://firebasestorage.googleapis.com/v0/b/mounting-ethanwwm.appspot.com/o/blue-linkedin.svg?alt=media&token=1c9f66d8-99d7-493d-996f-fb9ca5431016" alt=""/>
        </div>
      </div>
    </Fade>
  );
};
const AboutMe = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div
        id="download-button"
        onClick={() => {
          window.location.href =
            "https://drive.google.com/file/d/10AgA-At9Q2CNt8DwiKLNgk8YjeegeeKi/view?usp=sharing";
        }}
      >
        <p>Download Resume</p>
        <img src={download_icon} alt="" />
      </div>
      <div className="about-me">
        {/* <div className="large-text">
          <img src={large_text} />
        </div>
        <div className="portrait">
          <Fade top>
            <img src={portrait} />
          </Fade>
        </div>
        <img className="background-graphic" src={background_graphic} /> */}

        {/* <img className="rotating-text" src={rotating_text} /> */}

        {/* <Footer /> */}

        <div className="centered-section">
          <p>Hello, I'm Ethan Wong.</p>
          <h1>A frontend developer.</h1>
          <Footer />
        </div>
      </div>
      <div className="text-area-2">
        <div className="relative-div">
          <Parallax
            className="gradient"
            y={["-50px", "200px"]}
            tagOuter="figure"
          >
            <img src={gradient} alt="" className="gradient" />
          </Parallax>

          <div className="center">
            <div className="large-text">
              <Fade cascade>
                <h1>Creative</h1>
                <h1>Developer</h1>
                <h1>Designer</h1>
                <h1>Photographer</h1>
              </Fade>

              <Fade bottom>
                <p className="first-paragraph">
                  Hi, I’m Ethan Wong and I’m a frontend developer and UI
                  designer based in the United States. I’ve worked for teams
                  internationally and have worked alongside some of the
                  brightest people.
                </p>
                <p className="next-paragraph">
                  I’m an energetic individual that believes in detail-oriented
                  and user-focused design + code. Feel free to explore my
                  experience in further detail by downloading my resume.
                </p>
                <div
                  className="download-button-gradient"
                  onClick={() => {
                    window.location.href =
                      "https://drive.google.com/file/d/10AgA-At9Q2CNt8DwiKLNgk8YjeegeeKi/view?usp=sharing";
                  }}
                >
                  <p className="text">Download Resume</p>
                  <img src={download_white} alt="" />
                </div>
              </Fade>

              {/* <img src={gradient_button} alt="" /> */}
            </div>
          </div>
          <img src={portrait} className="profile-pic" />
        </div>
      </div>

      <div className="question">
        <Fade bottom>
          <h1 className="lora">
            How did I get into frontend development and design?
          </h1>

          <div className="paragraphs">
            <p>I get asked this question a lot.</p>

            <p>
              My first job at Fave in 2019 really nailed frontend development
              and designing in me. Prior to this position, I was never a
              frontend developer and never had any frontend development
              experience - I was essentially a jack of all trades, master of
              none.
            </p>

            <p>
              Stepping into this position threw me into the deep end as
              (frankly) I was not ready to go this deep this fast. But as I
              started learning, my drive for clean designs as a photographer was
              a perfect match for frontend development, where I am able to bring
              design to life with code.
            </p>

            <p>
              Fast forward to today, I am a proud React developer and UI/UX
              designer and I continuously challenge myself with adopting new
              designs and technologies. Frontend development and design has no
              limits, and I intend to bring my skills as far as it will go.
            </p>

            <p>
              If you’d like to know more about my experience, please download my
              resume!
            </p>
            <div
              className="download-button-gradient"
              onClick={() => {
                window.location.href =
                  "https://drive.google.com/file/d/10AgA-At9Q2CNt8DwiKLNgk8YjeegeeKi/view?usp=sharing";
              }}
            >
              <p className="text">Download Resume</p>
              <img src={download_white} alt="" />
            </div>
          </div>
        </Fade>
      </div>

      <div className="reviews">
        <Fade bottom>
          <h1>What my managers say about me</h1>
          <div className="single-review">
            <img src={don} alt="" />
            <h2>Don Spidell</h2>
            <p className="company">
              Cloud Architect Lead at Summit Technology Consulting Group
            </p>

            <p>
              I have about 20 years of experience working in the IT industry and
              have seen many young professionals come and go. Ethan Wong is one
              individual I have worked with who uniquely stands out. During our
              time together, Ethan displayed great talents in front-end
              development, design, and AWS cloud.
            </p>
          </div>
        </Fade>
      </div>
    </React.Fragment>
  );
};

export default AboutMe;
