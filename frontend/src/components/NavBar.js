import "../styles/NavBar.css";
import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const NavBar = () => {
  const { user } = useAuthContext();

  return (
    <header className="navbar">
      <Link to="/" className="brand-logo">
        Webapps
      </Link>
      {user && (
        <Link to="/account" className="auth-icon">
          <i className="fa-solid fa-circle-user"></i>
        </Link>
      )}
      {!user && (
        <Link to="/login" className="auth-button">
          SignIn
        </Link>
      )}
    </header>
  );
};

export default NavBar;
