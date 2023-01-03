import React, { useEffect, useState } from "react";
import NoteDetails from "../components/NoteDetails";
import NoteForm from "../components/NoteForm";
import "./Notes.css";
import { useNotesContext } from "../hooks/useNotesContext";

const Notes = () => {
  const { notes, dispatch } = useNotesContext();
  const [heading, setHeading] = useState("heading");
  const [button_text, SetButton] = useState("button-text");
  const [single_note, SetSingleNote] = useState({title: "", message: ""});

  const handleAdd = () => {
    setHeading("Add a new Note");
    SetButton("Add Note");
    document.body.style.overflow = "hidden"
    document.querySelector(".popup-box").classList.add("active");
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
      <NoteForm single_note={single_note} SetSingleNote={SetSingleNote} heading={heading} button_text={button_text} />
      <div className="wrapper">
        <li className="add-box" onClick={handleAdd}>
          <span className="material-symbols-outlined">add</span>
          <p>Add a new Note</p>
        </li>
        {notes &&
          notes.map((note) => <NoteDetails key={note._id} note={note} setHeading={setHeading} SetButton={SetButton} SetSingleNote={SetSingleNote}/>)}
      </div>
    </>
  );
};

export default Notes;
