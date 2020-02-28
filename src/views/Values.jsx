import React from "react";
import Fade from "react-reveal";
import "../styles/Values.css";

const Values = () => {
  return (
    <div className="values-div-parent">
      <Fade bottom>
        <h1 className="value">
          As a UI developer and a photographer, my work revolves around clean and simple designs
          that <span className="breathe">breathe.</span>
        </h1>
      </Fade>
    </div>
  );
};

export default Values;
