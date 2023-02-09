import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&#169;2023-2024 tusharbarmase</p>
      <div className="socials">
        <a href="https://github.com/tusharbarmase" target="_blank">
          <i className="fa-brands fa-github fa-xl"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/tushar-barmase-697153257"
          target="_blank"
        >
          <i className="fa-brands fa-linkedin fa-xl"></i>
        </a>
        <a href="mailto:tusharbarmase9630@gmail.com">
          <i className="fa-solid fa-envelope fa-xl"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
