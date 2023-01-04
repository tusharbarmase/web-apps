import "./NavBar.css";
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {

  return (
    <header className="navbar-container">
      <nav className="navbar">
        <Link to="/" className="navbar-logo">Webapps</Link>
        <button>Button</button>
      </nav>
    </header>
  );
};

export default NavBar;
