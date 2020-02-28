import React from "react";
import Fade from "react-reveal";
import "../styles/Button.css";

function randomNum() {
  let randomnumber = Math.floor(Math.random() * 100 + 1);
  return randomnumber;
}
const WhiteBackgroundButton = ({ text, link, fill }) => {
  return (
    <React.Fragment>
      {fill ? (
        <div
          className="black-filled-button"
          onClick={() => {
            window.open(`${link}`, `${randomNum()}`);
          }}
        >
          <h3>{text}</h3>
        </div>
      ) : (
        <div
          className="black-button"
          onClick={function() {
            window.open(`${link}`, `${randomNum()}`);
          }}
        >
          <h3>{text}</h3>
        </div>
      )}
    </React.Fragment>
  );
};

const BlackBackgroundButton = ({ text, link, fill }) => {
  return (
    <React.Fragment>
      {fill ? (
        <div
          className="white-filled-button"
          onClick={() => {
            window.open(`${link}`, `${randomNum()}`);
          }}
        >
          <h3>{text}</h3>
        </div>
      ) : (
        <div
          className="white-button"
          onClick={() => {
            window.open(`${link}`, `${randomNum()}`);
          }}
        >
          <h3>{text}</h3>
        </div>
      )}
    </React.Fragment>
  );
};

const Button = ({ text, link, fill, whiteBackground }) => {
  return (
    <Fade>
      {whiteBackground ? (
        <WhiteBackgroundButton text={text} link={link} fill={fill} />
      ) : (
        <BlackBackgroundButton text={text} link={link} fill={fill} />
      )}
    </Fade>
  );
};

export default Button;
