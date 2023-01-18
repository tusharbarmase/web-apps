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
    document.body.style.overflow = "auto"
    document.querySelector(".popup-container").classList.remove("active");
  };

  const handlePost = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

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
      dispatch({ type: "CREATE_NOTE", payload: json });
    }
    setIsSubmitting(false);
  };

  const handlePatch = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

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
      dispatch({ type: "UPDATE_NOTE", payload: json });
    }

    setIsSubmitting(false);
  };

  return (
    <div className="popup-container">
      <div className="popup-form">
        <div className="form-header">
          <p>{heading}</p>
          <i className="fa-solid fa-xmark" onClick={handleClose}></i>
        </div>
        <form
          onSubmit={button_text === "Add Note" ? handlePost : handlePatch}
        >
          <div className="form-row">
            <label>Title</label>
            <input
              type="text"
              value={single_note.title}
              onChange={(e) =>
                SetSingleNote({ ...single_note, title: e.target.value })
              }
              className = {emptyFields.includes("title")? "inputs error": "inputs"}
            />
          </div>
          <div className="form-row">
            <label>Description</label>
            <textarea
              value={single_note.message}
              onChange={(e) =>
                SetSingleNote({ ...single_note, message: e.target.value })
              }
              className = {emptyFields.includes("message")? "inputs error": "inputs"}
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
