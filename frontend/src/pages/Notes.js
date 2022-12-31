import React, { useEffect, useState } from "react";
import NoteDetails from "../components/NoteDetails";
import "./Notes.css";

const Notes = () => {
  const [notes, setNotes] = useState(null);

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
      <div className="wrapper">
        <li className="add-box">
          <span className="add-icon material-symbols-outlined">add</span>
          <p>Add a new Note</p>
        </li>
        {notes && notes.map((note) => (
            <NoteDetails key={note._id} note={note}/>
          ))}
      </div>
    </>
  );
};

export default Notes;
