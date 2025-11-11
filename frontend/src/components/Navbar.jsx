import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Portfolio</h1>
      <ul className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/project">Projects</Link>
        <Link to="/contact">Contact</Link>
      </ul>
    </nav>
  );
}

export default Navbar;
