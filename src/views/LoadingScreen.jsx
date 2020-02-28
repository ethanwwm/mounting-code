import React, { useState } from "react";
import "../styles/LoadingScreen.css";
import Fade from "react-reveal/Fade";
import LandingPage from "./LandingPage";

const LoadingScreen = () => {
  const [loading, setLoading] = useState(1);
  const [unmount, setUnmount] = useState(1);

  setTimeout(() => {
    setLoading(0);
  }, 6000);

  setTimeout(() => {
    setUnmount(0);
  }, 7000);

  const LoadingScreen = () => {
    if (loading)
      return (
        <div className="loading-div-active">
          <div className="loading-text-active">
            <Fade top>
              <h1>mounting</h1>
            </Fade>
          </div>
        </div>
      );
    else
      return (
        <div className="loading-div-inactive">
          <div className="loading-text-inactive">
            <h1>mounting</h1>
          </div>
        </div>
      );
  };

  return <React.Fragment>{unmount ? <LoadingScreen /> : <LandingPage />}</React.Fragment>;
};

export default LoadingScreen;
