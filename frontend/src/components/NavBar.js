import "../styles/NavBar.css";
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {

  return (
    <header className="navbar-container">
      <nav className="navbar">
        <Link to="/" className="brand-logo">Webapps</Link>
        <Link to="/login" className="auth-button">SignIn</Link>
      </nav>
    </header>
  );
};

export default NavBar;
