import "../styles/NavBar.css";
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const userInfo = JSON.parse(localStorage.getItem("user"));

  return (
    <header className="navbar">
      <Link to="/" className="brand-logo">
        Webapps
      </Link>
      {userInfo && (
        <Link to="/account" className="auth-icon">
          <i className="fa-solid fa-circle-user"></i>
        </Link>
      )}
      {!userInfo && (
        <Link to="/login" className="auth-button">
          SignIn
        </Link>
      )}
    </header>
  );
};

export default NavBar;
