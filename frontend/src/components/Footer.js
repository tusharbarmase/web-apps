import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer">
        <p>&#169;2023-2024 tusharbarmase</p>
        <div className="socials">
          <a href="#">
            <i className="fa-brands fa-github fa-xl"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-linkedin fa-xl"></i>
          </a>
          <a href="#">
            <i className="fa-solid fa-envelope fa-xl"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
