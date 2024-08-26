import React from "react";
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">Jeffrey Valdez</a>
      </div>
      <div className="navbar-right">
        <div className="navbar-links">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="navbar-resume">
          <a href="/resume.pdf" className="resume-button">
            CV Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
