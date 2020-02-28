import React from "react";
import "../styles/AboutMe.css";
import Fade from "react-reveal";
import myPortrait from "../assets/my-portrait.jpg";
import Footer from "../components/Footer";
import animateScrollTo from "animated-scroll-to";
import arrowDown from "../assets/arrow-down.png";

const AboutMe = () => {
  return (
    <React.Fragment>
      <div className="about-me-parent">
        <div className="about-me-child">
          <div className="my-portrait-banner">
            <Fade down cascade>
              <div className="about-me-header">
                <h1>about</h1>
              </div>
            </Fade>

            <div
              className="arrow-div-about-me"
              onClick={() => {
                animateScrollTo(document.querySelector(".text-div"));
              }}
            >
              <p>Scroll Down</p>
              <img src={arrowDown} className="arrow-down-about-me" />
            </div>
          </div>

          <div className="text-div">
            <Fade>
              <div className="about-me-headline">
                <h1>Coffee drinker, software developer, problem solver.</h1>
              </div>
            </Fade>
          </div>

          <div className="once-upon">
            <div className="section-title">
              <h1>Once upon a time in Malaysia</h1>
            </div>
            <div className="section-description">
              <p>
                I was born and raised in <strong>Kuala Lumpur, Malaysia</strong>{" "}
                where I started pursuing my love for photography at a young age.
                In 2015, I decided to dabble into code and immediately fell in
                love with the level of critical thinking involved and I am - by
                nature - a problem solver.
              </p>

              <p>
                In 2017, I attended <strong>Messiah College</strong> to pursue a
                degree in Computer Science. Throughout my time there, I
                participated in programming competitions, got involved with our
                Collaboratory (our engineering space), represented the students
                in terms of use of technology in the classroom on the college's
                committee level, and fixed software and hardware issues on
                campus as part of my work-study.
              </p>

              <p>
                After a year of attending, I applied to study abroad at the{" "}
                <strong>University of Oxford</strong> for a semester to broaden
                my knowledge, connections and skillset.{" "}
                <strong>
                  I wanted to be surrounded by some of the brightest minds in
                  the world, to understand how others process and work on ideas.
                </strong>{" "}
                I participated in one of Oxford University's largest hackathon
                and although my team and I did not win, we gained a great deal
                of insight from various standpoints.
              </p>

              <p>
                Today, I have a great deal of passion for front-end development
                and the design work that goes behind it. My design language will
                always continue to evolve and mature, but my never-ending need
                for new knowledge and collaborating will always push me to go
                the extra mile.
              </p>

              <div className="my-info">
                <div className="profile-pic">
                  <img src={myPortrait} />
                </div>
                <h1>Ethan Wong</h1>
                <p>Front End Software Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default AboutMe;
