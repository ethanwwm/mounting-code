import React from "react";
import "../styles/Menu.scss";
import { NavLink } from "react-router-dom";
import { Fade } from "react-reveal";

const Menu = () => {
  return (
    <div className="menu">
      <Fade right>
        <div className="text">
          <NavLink to="/" exact>
            <h1>Home</h1>
          </NavLink>
          <NavLink to="/projects" exact>
            <h1>Projects</h1>
          </NavLink>
          <NavLink to="/aboutme" exact>
            <h1>About</h1>
          </NavLink>
          <h1
            onClick={() => {
              window.location.href = "mailto:ethanwwm@gmail.com";
            }}
          >
            Contact
          </h1>
        </div>
      </Fade>
    </div>
  );
};

export default Menu;
