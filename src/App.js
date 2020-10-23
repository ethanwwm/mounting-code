import React from "react";
import LandingPage from "./views/LandingPage";
import Project from "./views/Project";
import Header from "./components/Header";
import Cursor from "./components/Cursor";
import AboutMe from "./views/AboutMe";
import Maintenance from "./views/Maintenance";
import Menu from "./views/Menu";
import Favebiz from "./views/Favebiz";
import { Router } from "@reach/router";
import { ParallaxProvider } from "react-scroll-parallax";
import "./App.scss";
import Scrollbar from "smooth-scrollbar";
import { gsap } from "gsap";
import barba from "@barba/core";
import { Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

const pageTransition = (node) => {
  var tl = gsap.timeline();

  console.log(node.children[0]);

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

// async function contentAnimation() {
//   var tl = gsap.timeline();

//   tl.from(".animate-this", {
//     duration: 1,
//     y: 30,
//     opacity: 0,
//     stagger: 0.4,
//     delay: 0.2,
//   });
// }

// barba.init({
//   // sync: true,

//   transitions: [
//     {
//       // async leave(data) {
//       //   const done = this.async();

//       //   pageTransition();
//       //   await delay(1000);
//       //   done();
//       // },

//       // async enter(data) {
//       //   contentAnimation();
//       //   // pageTransition();
//       // },

//       async once(data) {
//         pageTransition();
//         // contentAnimation();
//       },
//     },
//   ],
// });

// let options = { damping: 0.1 };
// Scrollbar.initAll(options);

const App = () => {
  const routes = [
    { path: "/", name: "landing", Component: LandingPage },
    { path: "/projects", name: "projects", Component: Project },
    { path: "/menu", name: "menu", Component: Menu },
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

  return (
    <React.Fragment>
      <div className="load-container">
        <div className="loading-screen"></div>
      </div>
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
          {/* <Router>
            <LandingPage path="/" />
            <Project path="/projects" />
            <AboutMe path="/aboutme" />
            <Favebiz path="/favebiz" />
          </Router> */}
        </div>
      </ParallaxProvider>
    </React.Fragment>
  );
};

export default App;
