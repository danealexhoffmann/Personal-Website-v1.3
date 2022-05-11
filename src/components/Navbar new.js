import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <div>
      <nav>
        <div className="nav-container">
          <div className={click ? "nav-menu active" : "nav-menu"}>
            <Link className="navItem" to="/">
              Home
            </Link>
            <Link className="navItem" to="/about">
              About
            </Link>
            <Link className="navItem" to="/projects">
              Projects
            </Link>
            <Link className="navItem" to="/contact">
              Contact
            </Link>
          </div>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
