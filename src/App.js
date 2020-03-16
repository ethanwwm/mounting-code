import React from "react";
import LandingPage from "./views/LandingPage";
import Header from "./components/Header";
import AboutMe from "./views/AboutMe";
import Favebiz from "./views/Favebiz";
import { Router } from "@reach/router";
import { ParallaxProvider } from "react-scroll-parallax";
import "./App.css";
import Scrollbar from "smooth-scrollbar";

let options = { damping: 0.1 };
Scrollbar.initAll(options);
const App = () => {
  return (
    <React.Fragment>
      <ParallaxProvider>
        <div className="top-invisible-div" />
        <Header />
        <div className="App">
          <Router>
            <LandingPage path="/" />
            <AboutMe path="/aboutme" />
            <Favebiz path="/favebiz" />
          </Router>
        </div>
      </ParallaxProvider>
    </React.Fragment>
  );
};

export default App;
