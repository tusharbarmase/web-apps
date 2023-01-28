import React from "react";
import "../styles/Music.css";

const Music = () => {
  return (
    <div className="player-container">
      <div className="music-player">
        <div className="player-header">
          <span>Sangeet </span>
          <i className="fa-solid fa-music"></i>
        </div>
        <div className="player-image">
          <img src="https://source.unsplash.com/random" alt="#" />
        </div>
        <div className="player-song">
          <p className="song-name">name</p>
          <p className="song-artist">artist</p>
        </div>
        <div className="player-progress">
          <input className="progress-bar" type="range" />
          <div className="progress-timer">
            <span className="current">0:00</span>
            <span className="end">3:40</span>
          </div>
        </div>
        <div className="player-controls">
          <i className="fa-solid fa-repeat"></i>
          <i className="fa-solid fa-backward-step"></i>
          <i className="fa-solid fa-play play-pause"></i>
          <i className="fa-solid fa-forward-step"></i>
          <i className="fa-solid fa-list"></i>
        </div>
      </div>
    </div>
  );
};

export default Music;
