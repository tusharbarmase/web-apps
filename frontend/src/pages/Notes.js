import React from "react";
import "./Notes.css";

const Notes = () => {
  return (
    <>
      <div className="wrapper">
        <li className="add-box">
          <span className="add-icon material-symbols-outlined">add</span>
          <p>Add a new Note</p>
        </li>
        <li className="note">
          <div className="details">
            <p>This is Title</p>
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Reiciendis ea.
            </span>
          </div>
          <div className="bottom-content">
            <span>april 3, 2022</span>
          </div>
        </li>
      </div>
    </>
  );
};

export default Notes;
