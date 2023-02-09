import React, { useState } from "react";
import { useNotesContext } from "../hooks/useNotesContext";
import axios from "axios";

const NoteForm = ({ single_note, SetSingleNote, heading, button_text }) => {
  const { dispatch } = useNotesContext();
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleClose = () => {
    SetSingleNote({ title: "", message: "" });
    setEmptyFields([]);
    setError(null);
    document.body.style.overflow = "auto";
    document.querySelector(".popup-container").classList.remove("active");
  };

  const handlePost = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const note = { title: single_note.title, message: single_note.message };
    axios
      .post("https://webapp-server.onrender.com/api/notes", note)
      .then((response) => {
        handleClose();
        dispatch({ type: "CREATE_NOTE", payload: response.data });
        setIsSubmitting(false);
      })
      .catch((error) => {
        setError(error.response.data.error);
        setEmptyFields(error.response.data.emptyFields);
        setIsSubmitting(false);
      });
  };

  const handlePatch = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const note = { title: single_note.title, message: single_note.message };
    axios
      .patch(
        "https://webapp-server.onrender.com/api/notes/" + single_note._id,
        note
      )
      .then((response) => {
        handleClose();
        dispatch({ type: "UPDATE_NOTE", payload: response.data });
        setIsSubmitting(false);
      })
      .catch((error) => {
        setError(error.response.data.error);
        setEmptyFields(error.response.data.emptyFields);
        setIsSubmitting(false);
      });
  };

  return (
    <div className="popup-container">
      <div className="popup-form">
        <div className="form-header">
          <p>{heading}</p>
          <i className="fa-solid fa-xmark" onClick={handleClose}></i>
        </div>
        <form onSubmit={button_text === "Add Note" ? handlePost : handlePatch}>
          <div className="form-row">
            <label>Title</label>
            <input
              type="text"
              value={single_note.title}
              onChange={(e) =>
                SetSingleNote({ ...single_note, title: e.target.value })
              }
              className={
                emptyFields.includes("title") ? "inputs error" : "inputs"
              }
            />
          </div>
          <div className="form-row">
            <label>Description</label>
            <textarea
              value={single_note.message}
              onChange={(e) =>
                SetSingleNote({ ...single_note, message: e.target.value })
              }
              className={
                emptyFields.includes("message") ? "inputs error" : "inputs"
              }
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
