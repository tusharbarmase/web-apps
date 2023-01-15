import React from "react";
import { AppData } from "../components/AppData";
import "../styles/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="text-container">
        <div className="text">
          <p>This site currently provide following apps</p>
        </div>
      </div>
      <header className="webapps-container">
        <div className="webapp">
          {AppData.map((item, index) => {
            return (
              <Link key={index} to={item.url}>
                <i className={item.icon}></i>
                <p>{item.title}</p>
              </Link>
            );
          })}
        </div>
      </header>
    </>
  );
};

export default Home;
