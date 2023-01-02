import React, { useState } from "react";
import { useNotesContext } from "../hooks/useNotesContext";

const NoteForm = ({ single_note, SetSingleNote, heading, button_text }) => {
  const { dispatch } = useNotesContext();
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleClose = () => {
    SetSingleNote({ title: "", message: "" });
    setEmptyFields([]);
    setError(null);
    document.querySelector(".popup-box").classList.remove("active");
  };

  const handlePost = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    console.log(single_note);
    const note = { title: single_note.title, message: single_note.message };
    const response = await fetch("/api/notes", {
      method: "POST",
      body: JSON.stringify(note),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }
    if (response.ok) {
      handleClose();
      console.log("added new note", json);
      dispatch({ type: "CREATE_NOTE", payload: json });
    }
    setIsSubmitting(false);
  };

  const handlePatch = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    console.log(single_note);
    const note = { title: single_note.title, message: single_note.message };
    const response = await fetch("/api/notes/" + single_note._id, {
      method: "PATCH",
      body: JSON.stringify(note),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }
    if (response.ok) {
      handleClose();
      console.log("updated note");
      dispatch({ type: "UPDATE_NOTE", payload: json });
    }

    setIsSubmitting(false);
  };

  return (
    <div className="popup-box">
      <div className="content">
        <div className="header">
          <p>{heading}</p>
          <span className="material-symbols-outlined" onClick={handleClose}>
            close
          </span>
        </div>
        <form
          className="create"
          onSubmit={button_text === "Add Note" ? handlePost : handlePatch}
        >
          <div className="row title">
            <label>Title</label>
            <input
              type="text"
              value={single_note.title}
              onChange={(e) =>
                SetSingleNote({ ...single_note, title: e.target.value })
              }
              className = {emptyFields.includes("title")? "error": ""}
            />
          </div>
          <div className="row description">
            <label>Description</label>
            <textarea
              value={single_note.message}
              onChange={(e) =>
                SetSingleNote({ ...single_note, message: e.target.value })
              }
              className = {emptyFields.includes("message")? "error": ""}
            ></textarea>
          </div>
          <button disabled={isSubmitting}>{button_text}</button>
          {error && <div className="error">{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default NoteForm;
