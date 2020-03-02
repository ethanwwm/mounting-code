import React from "react";
import LandingPage from "./views/LandingPage";
import Header from "./components/Header";
import AboutMe from "./views/AboutMe";
import Favebiz from "./views/Favebiz";
import { Router } from "@reach/router";
import "./App.css";

const App = () => {
  return (
    <React.Fragment>
      <div className="top-invisible-div" />
      <Header />
      <div className="App">
        <Router>
          <LandingPage path="/" />
          <AboutMe path="/aboutme" />
          <Favebiz path="/favebiz" />
        </Router>
      </div>
    </React.Fragment>
  );
};

export default App;
