import React, { useState } from "react";
import { useNotesContext } from "../hooks/useNotesContext";
import axios from "axios";

//date formatting
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const NoteDetails = ({ SetButton, SetSingleNote, setHeading, note }) => {
  const { dispatch } = useNotesContext();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleEdit = () => {
    setHeading("Update a note");
    SetButton("Update Note");
    SetSingleNote(note);
    document.body.style.overflow = "hidden";
    document.querySelector(".popup-container").classList.add("active");
  };

  const handleDelete = async () => {
    if (isDeleting) return;

    setIsDeleting(true);
    axios
      .delete("https://webapp-server.onrender.com/api/notes/" + note._id)
      .then((response) => {
        dispatch({ type: "DELETE_NOTE", payload: response.data });
        setIsDeleting(false);
      })
      .catch((error) => {
        console.log(error);
        setIsDeleting(false);
      });
  };

  return (
    <li className="note">
      <div className="details">
        <p>{note.title}</p>
        <span>{note.message}</span>
      </div>
      <div className="bottom-content">
        <span className="date">
          {formatDistanceToNow(new Date(note.createdAt), { addSuffix: true })}
        </span>
        <div className="icons">
          <i className="fa-regular fa-pen-to-square" onClick={handleEdit}></i>
          <i className="fa-regular fa-trash" onClick={handleDelete}></i>
        </div>
      </div>
    </li>
  );
};

export default NoteDetails;
