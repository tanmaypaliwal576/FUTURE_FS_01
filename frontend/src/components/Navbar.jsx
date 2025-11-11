import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Portfolio</h1>
      <ul className="nav-links">
        <li>
          <Link to="/" className="nav-item">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-item">
            About
          </Link>
        </li>
        <li>
          <Link to="/project" className="nav-item">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/contact" className="nav-item">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
