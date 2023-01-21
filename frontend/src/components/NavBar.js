import "../styles/NavBar.css";
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {

  return (
      <header className="navbar">
        <Link to="/" className="brand-logo">Webapps</Link>
        <Link to="/login" className="auth-button">SignIn</Link>
      </header>
  );
};

export default NavBar;
