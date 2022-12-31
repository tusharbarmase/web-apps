import React, { useEffect, useState } from "react";
import NoteDetails from "../components/NoteDetails";
import NoteForm from "../components/NoteForm";
import "./Notes.css";

const Notes = () => {
  const [notes, setNotes] = useState(null);

  const handleClick = () => {
    document.querySelector(".popup-box").classList.add("active");
  }

  useEffect(() => {
    const fetchNotes = async () => {
      const response = await fetch("/api/notes");
      const json = await response.json();

      if (response.ok) {
        setNotes(json);
      }
    };

    fetchNotes();
  }, []);

  return (
    <>
      <NoteForm heading="Add a new Note" button_text="Add Note"/>
      <div className="wrapper">
        <li className="add-box" onClick={handleClick}>
          <span className="material-symbols-outlined">add</span>
          <p>Add a new Note</p>
        </li>
        {notes &&
          notes.map((note) => <NoteDetails key={note._id} note={note} />)}
      </div>
    </>
  );
};

export default Notes;
