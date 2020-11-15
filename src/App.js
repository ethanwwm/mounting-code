import React, { useState } from "react";
import LandingPage from "./views/LandingPage";
import Project from "./views/Project";
import RotatingText from "./components/RotatingText";
import Hamburger from "./components/Hamburger";
import Cursor from "./components/Cursor";
import AboutMe from "./views/AboutMe";
import { ParallaxProvider } from "react-scroll-parallax";
import "./App.scss";
import { gsap } from "gsap";
import { Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { NavLink } from "react-router-dom";
import moira from "./assets/moira.gif";

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  let downloadButton = document.getElementById("download-button");

  // 20 is an arbitrary number here, just to make you think if you need the prevScrollpos variable:
  if (currentScrollPos > 20) {
    // I am using 'display' instead of 'top':
    document.getElementById("logo").style.top = "-50px";
  } else {
    document.getElementById("logo").style.top = "50px";
  }

  if (downloadButton && currentScrollPos > 20) {
    downloadButton.style.top = "-70px";
  } else if (downloadButton && currentScrollPos < 20) {
    downloadButton.style.top = "42px";
  }

  if (window.screen.width <= 1199 && window.screen.width > 575) {
    let navbar = document.getElementById("navbar");
    if (currentScrollPos > 20) {
      // I am using 'display' instead of 'top':
      navbar.style.top = "-70px";
    } else {
      navbar.style.top = "50px";
    }
  }

  if (window.screen.width <= 575) {
    let hamburger = document.getElementById("hamburger-menu");
    if (currentScrollPos > 20) {
      // I am using 'display' instead of 'top':
      hamburger.style.left = "-70px";
    } else {
      hamburger.style.left = "40px";
    }
  }
};

const pageTransition = (node) => {
  var tl = gsap.timeline();

  tl.to(".loading-screen", {
    duration: 1,
    width: "100%",
    left: "0%",
    ease: "Expo.easeInOut",
  });

  tl.to(".loading-screen", {
    duration: 0.4,
    width: "100%",
    opacity: 0,
    left: "100%",
    ease: "Expo.easeOut",
    delay: 0,
  });
  tl.set(".loading-screen", { left: "-100%", opacity: 1 });
};

const App = () => {
  const routes = [
    { path: "/", name: "landing", Component: LandingPage },
    { path: "/projects", name: "projects", Component: Project },
    { path: "/aboutme", name: "aboutme", Component: AboutMe },
  ];

  const onEnter = (node) => {
    gsap.from([node.children[0]], 0.6, {
      y: 0,
      delay: 1.5,
      ease: "power3.InOut",
      opacity: 0,
    });
  };
  const GetALaptop = () => {
    console.log(window.screen.width);
    return (
      <div className="get-a-laptop">
        <img src={moira}></img>
        <h2>View this site on a bigger screen. Please.</h2>
        <div
          className="alright"
          onClick={() => {
            setShowScreen(false);
          }}
        >
          <p>I'll do that later</p>
        </div>
      </div>
    );
  };
  const [showScreen, setShowScreen] = useState(true);

  return (
    <React.Fragment>
      <div className="load-container">
        <div className="loading-screen"></div>
      </div>
      <div id="logo">
        <NavLink to="/" exact>
          <p>Ethan</p>
        </NavLink>
      </div>
      {window.screen.width < 768 && showScreen ? <GetALaptop /> : undefined}

      <Hamburger />
      <Cursor />

      <RotatingText />
      <ParallaxProvider>
        <div className="App">
          {routes.map(({ path, name, Component }) => {
            return name === "aboutme" ? (
              <Route key="name" path={path} exact>
                {({ match }) => (
                  <CSSTransition
                    in={match !== null}
                    timeout={500}
                    classNames="page"
                    unmountOnExit
                    onExit={pageTransition}
                  >
                    <div className="page">
                      <Component />
                    </div>
                  </CSSTransition>
                )}
              </Route>
            ) : (
              <Route key="name" path={path} exact>
                {({ match }) => (
                  <CSSTransition
                    in={match !== null}
                    timeout={500}
                    classNames="page"
                    unmountOnExit
                    onEnter={onEnter}
                    onExit={pageTransition}
                  >
                    <div className="page">
                      <Component />
                    </div>
                  </CSSTransition>
                )}
              </Route>
            );
          })}
        </div>
      </ParallaxProvider>
    </React.Fragment>
  );
};

export default App;
