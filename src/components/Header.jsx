import React, { useState, ReactDOM } from "react";
import "../styles/Header.css";
import { Link } from "@reach/router";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <img src={logo} className="logo"></img>
      </Link>
    </div>
  );
};

export default Navbar;
