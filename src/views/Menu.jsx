import React from "react";
import "../styles/Menu.scss";
import { NavLink } from "react-router-dom";
import { Fade } from "react-reveal";

const Menu = () => {
  return (
    <div className="menu">
      {/* <NavLink to="/" exact>
          <div className="mobile-click-to-main"></div>
        </NavLink> */}
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
          <NavLink to="/menu" exact>
            <h1>Contact</h1>
          </NavLink>
        </div>
      </Fade>
    </div>
  );
};

export default Menu;
