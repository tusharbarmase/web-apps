import React, { useState, useRef, useEffect } from "react";
import "../styles/Music.css";

const Music = () => {
  const [files, setFiles] = useState([]);
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [songUrl, setSongUrl] = useState(null);
  const [songName, setSongName] = useState(null);
  const [playModeIcon, setPlayModeIcon] = useState("fa-solid fa-repeat");
  const [currentTime, setCurrentTime] = useState(0);
  const songContext = require.context("../assets/music", false, /\.(mp3|wav)$/);
  const imageContext = require.context(
    "../assets/images",
    false,
    /\.(png|jpg)$/
  );
  const [imagelink, setimagelink] = useState(
    imageContext(
      imageContext.keys()[
        Math.floor(Math.random() * imageContext.keys().length)
      ]
    )
  );

  useEffect(() => {
    audioRef.current.onpause = () => {
      setPlaying(false);
    };
    audioRef.current.onplay = () => {
      setPlaying(true);
    };
  }, []);

  const handlePlayMode = () => {
    switch (playModeIcon) {
      case "fa-solid fa-repeat":
        setPlayModeIcon("fa-solid fa-shuffle");
        break;
      case "fa-solid fa-shuffle":
        setPlayModeIcon("fa-solid fa-repeat-1");
        break;
      case "fa-solid fa-repeat-1":
        setPlayModeIcon("fa-solid fa-repeat");
        break;
      default:
        setPlayModeIcon("fa-solid fa-repeat");
        break;
    }
  };

  const handleSongList = (event) => {
    if (event.target.files) {
      let fileList = event.target.files;
      const mp3Files = Array.from(fileList).filter(
        (file) => file.type === "audio/mpeg"
      );
      setFiles(mp3Files);
    } else {
      setFiles(
        Array.from(songContext.keys()).map((key, index) => ({
          name: key.replace("./", ""),
          url: songContext(key),
        }))
      );
    }
  };

  const toggleVisiblity = () => {
    document.querySelector(".song-list").classList.toggle("show");
  };

  const handlePlay = () => {
    if (songUrl && !playing) {
      audioRef.current.play();
      setPlaying(true);
    }
  };

  const handlePause = () => {
    if (songUrl && playing) {
      audioRef.current.pause();
      setPlaying(false);
    }
  };

  const formatTime = (timeInSeconds) => {
    const date = new Date(null);
    date.setSeconds(timeInSeconds);
    return date.toISOString().slice(14, 19);
  };

  const updateProgress = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleSeek = (event) => {
    audioRef.current.currentTime = event.target.value;
  };

  const handleCurrentSong = (file) => {
    setSongName(file.name);
    if (file.url) {
      setSongUrl(file.url);
    } else {
      setSongUrl(URL.createObjectURL(file));
    }
    setimagelink(
      imageContext(
        imageContext.keys()[
          Math.floor(Math.random() * imageContext.keys().length)
        ]
      )
    );
    setTimeout(() => {
      audioRef.current.play();
      setPlaying(true);
    }, 10);
    toggleVisiblity();
  };

  const handlePrevSong = () => {
    if (songUrl) {
      const currentIndex = files.findIndex((file) => file.name === songName);
      let selectedSong = "";
      if (currentIndex === 0) {
        selectedSong = files[files.length - 1];
      } else {
        selectedSong = files[currentIndex - 1];
      }
      setSongName(selectedSong.name);
      if (selectedSong.url) {
        setSongUrl(selectedSong.url);
      } else {
        setSongUrl(URL.createObjectURL(selectedSong));
      }
      setimagelink(
        imageContext(
          imageContext.keys()[
            Math.floor(Math.random() * imageContext.keys().length)
          ]
        )
      );
      setTimeout(() => {
        audioRef.current.play();
        setPlaying(true);
      }, 10);
    }
  };

  const handleNextSong = () => {
    if (songUrl) {
      const currentIndex = files.findIndex((file) => file.name === songName);
      const remainingSongs = files.filter(
        (element) => element !== files[currentIndex]
      );
      let selectedSong = "";
      switch (playModeIcon) {
        case "fa-solid fa-repeat":
          if (currentIndex === files.length - 1) {
            selectedSong = files[0];
          } else {
            selectedSong = files[currentIndex + 1];
          }
          break;
        case "fa-solid fa-shuffle":
          selectedSong =
            remainingSongs[Math.floor(Math.random() * remainingSongs.length)];
          break;
        default:
          selectedSong = files[0];
          break;
      }
      setSongName(selectedSong.name);
      if (selectedSong.url) {
        setSongUrl(selectedSong.url);
      } else {
        setSongUrl(URL.createObjectURL(selectedSong));
      }
      setimagelink(
        imageContext(
          imageContext.keys()[
            Math.floor(Math.random() * imageContext.keys().length)
          ]
        )
      );
      setTimeout(() => {
        audioRef.current.play();
        setPlaying(true);
      }, 10);
    }
  };

  const handleSongEnd = () => {
    switch (playModeIcon) {
      case "fa-solid fa-repeat-1":
        audioRef.current.play();
        break;
      default:
        handleNextSong();
        break;
    }
  };

  return (
    <div className="player-container">
      <div className="music-player">
        <div className="player-header">
          <span>Sangeet </span>
          <i className="fa-solid fa-music"></i>
        </div>
        <div className="player-image">
          <img src={imagelink} alt="#" />
        </div>
        <p className="song-name">{songName ? songName : "No Song Selected"}</p>
        <div className="player-progress">
          <input
            className="progress-bar"
            type="range"
            value={currentTime}
            max={
              audioRef.current && !isNaN(audioRef.current.duration)
                ? audioRef.current.duration
                : 0
            }
            onChange={handleSeek}
            onMouseDown={handlePause}
            onMouseUp={handlePlay}
            onTouchStart={handlePause}
            onTouchEnd={handlePlay}
          />
          <div className="progress-timer">
            <span className="current-time">
              {audioRef.current && audioRef.current.duration
                ? formatTime(audioRef.current.currentTime)
                : "0:00"}
            </span>
            <span className="end-time">
              {audioRef.current && audioRef.current.duration
                ? formatTime(audioRef.current.duration)
                : "0:00"}
            </span>
          </div>
        </div>
        <div className="player-controls">
          <i className={playModeIcon} onClick={handlePlayMode}></i>
          <i className="fa-solid fa-backward-step" onClick={handlePrevSong}></i>
          <div
            className={
              playing ? "button-container playing" : "button-container"
            }
            onClick={playing ? handlePause : handlePlay}
          >
            <i
              className={
                playing
                  ? "fa-solid fa-pause play-pause"
                  : "fa-solid fa-play play-pause"
              }
            ></i>
          </div>
          <i className="fa-solid fa-forward-step" onClick={handleNextSong}></i>
          <i className="fa-solid fa-list-music" onClick={toggleVisiblity}></i>
        </div>
        <div className="song-list">
          <div className="list-header">
            <span>Songs</span>
            <div>
              {files.length !== 0 && (
                <i
                  className="fa-solid fa-right-from-bracket"
                  onClick={() => setFiles([])}
                ></i>
              )}
              <i className="fa-solid fa-close" onClick={toggleVisiblity}></i>
            </div>
          </div>
          <ul>
            {files.length !== 0 &&
              files.map((file, index) => (
                <li key={index} onClick={() => handleCurrentSong(file)}>
                  {file.name}
                </li>
              ))}
            {files.length === 0 && (
              <div className="online-offline">
                <label htmlFor="file-select">Play local Songs</label>
                <label onClick={handleSongList}>Play Online Songs</label>
              </div>
            )}
          </ul>
          <input
            type="file"
            id="file-select"
            onChange={handleSongList}
            multiple
          />
          <audio
            ref={audioRef}
            src={songUrl}
            onTimeUpdate={updateProgress}
            onEnded={handleSongEnd}
          />
        </div>
      </div>
    </div>
  );
};

export default Music;
