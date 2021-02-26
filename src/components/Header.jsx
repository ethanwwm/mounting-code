import React, { useState } from "react";
import "../styles/Header.scss";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [currentPath, setCurrentPath] = useState(
    window.location.pathname.substring(1)
  );
  function returnStyle(linkName) {
    if (linkName === "home" && currentPath.length === 0) {
      return "selected";
    }

    if (linkName === currentPath) return "selected";
    else return "hover-div";
  }
  return (
    <div id="navbar">
      <NavLink to="/" exact>
        <div className={returnStyle("home")}>
          <p>home</p>
        </div>
      </NavLink>

      <NavLink to="/projects" exact>
        <div className={returnStyle("projects")}>
          <p>projects</p>
        </div>
      </NavLink>
      <NavLink to="/aboutme" exact>
        <div className={returnStyle("aboutme")}>
          <p>about me</p>
        </div>
      </NavLink>

      <div
        className="hover-div"
        onClick={() => {
          window.location.href = "mailto:ethanwwm@gmail.com";
        }}
      >
        <p>contact me</p>
      </div>
    </div>
  );
};

export default Navbar;
