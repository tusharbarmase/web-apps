import React, { useEffect, useState } from "react";
import NoteDetails from "../components/NoteDetails";
import NoteForm from "../components/NoteForm";
import "../styles/Notes.css";
import { useNotesContext } from "../hooks/useNotesContext";
import axios from "axios"

const Notes = () => {
  const { notes, dispatch } = useNotesContext();
  const [heading, setHeading] = useState("heading");
  const [button_text, SetButton] = useState("button-text");
  const [single_note, SetSingleNote] = useState({ title: "", message: "" });

  const handleAdd = () => {
    setHeading("Add a new Note");
    SetButton("Add Note");
    document.body.style.overflow = "hidden";
    document.querySelector(".popup-container").classList.add("active");
  };

  useEffect(() => {
    axios.get("https://webapp-server.onrender.com/api/notes")
    .then(response=>{
      dispatch({ type: "SET_NOTES", payload: response.data });
    })
    .catch(error=>{
      console.log(error)
    })
  }, [dispatch]);

  return (
    <>
      <NoteForm
        single_note={single_note}
        SetSingleNote={SetSingleNote}
        heading={heading}
        button_text={button_text}
      />
      <div className="notes-container">
        <li className="add-box" onClick={handleAdd}>
          <i className="fa-solid fa-plus"></i>
          <p>Add a new Note</p>
        </li>
        {notes &&
          notes.map((note) => (
            <NoteDetails
              key={note._id}
              note={note}
              setHeading={setHeading}
              SetButton={SetButton}
              SetSingleNote={SetSingleNote}
            />
          ))}
      </div>
    </>
  );
};

export default Notes;
