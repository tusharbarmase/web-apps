import React, { useEffect, useState } from "react";
import NoteDetails from "../components/NoteDetails";
import NoteForm from "../components/NoteForm";
import "./Notes.css";
import { useNotesContext } from "../hooks/useNotesContext";

const Notes = () => {
  const { notes, dispatch } = useNotesContext();
  const [heading, setHeading] = useState("heading");
  const [button_text, SetButton] = useState("button-text");

  const handleAdd = () => {
    document.querySelector(".popup-box").classList.add("active");
    setHeading("Add a new Note");
    SetButton("Add Note");
  };

  useEffect(() => {
    const fetchNotes = async () => {
      const response = await fetch("/api/notes");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_NOTES", payload: json });
      }
    };

    fetchNotes();
  }, [dispatch]);

  return (
    <>
      <NoteForm heading={heading} button_text={button_text} />
      <div className="wrapper">
        <li className="add-box" onClick={handleAdd}>
          <span className="material-symbols-outlined">add</span>
          <p>Add a new Note</p>
        </li>
        {notes &&
          notes.map((note) => <NoteDetails key={note._id} note={note} setHeading={setHeading} SetButton={SetButton}/>)}
      </div>
    </>
  );
};

export default Notes;
