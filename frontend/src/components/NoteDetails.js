import React from "react";
import { useNotesContext } from "../hooks/useNotesContext";

//date formatting
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const NoteDetails = ({ SetButton, setHeading, note }) => {

  const { dispatch } = useNotesContext()

  const handleEdit = () => {
    setHeading("Update a note");
    SetButton("Update Note");
    document.querySelector(".popup-box").classList.add("active");
  };

  const handleDelete = async () => {
    const response = await fetch("/api/notes/" + note._id, {
      method: "DELETE"
    })

    const json = await response.json()

    if(response.ok){
      dispatch({type: "DELETE_NOTE", payload: json})
    }
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
          <span className="material-symbols-outlined" onClick={handleEdit}>edit</span>
          <span className="material-symbols-outlined" onClick={handleDelete}>delete</span>
        </div>
      </div>
    </li>
  );
};

export default NoteDetails;
