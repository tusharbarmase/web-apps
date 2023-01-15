import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer">
        <p>&#169;2023-2024 tusharbarmase</p>
        <div className="socials">
          <Link>
            <i className="fa-brands fa-github fa-xl"></i>
          </Link>
          <Link>
            <i className="fa-brands fa-linkedin fa-xl"></i>
          </Link>
          <Link>
            <i className="fa-solid fa-envelope fa-xl"></i>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
