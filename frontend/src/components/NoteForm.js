import React, { useState } from "react";
import { useNotesContext } from "../hooks/useNotesContext";

const NoteForm = (form) => {
  const { dispatch } = useNotesContext();
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);

  const handleClick = () => {
    document.querySelector(".popup-box").classList.remove("active");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const note = { title, message };
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
    }
    if (response.ok) {
      setTitle("");
      setMessage("");
      setError(null);
      handleClick();
      console.log("added new workout", json);
      dispatch({ type: "CREATE_NOTE", payload: json });
    }
  };

  return (
    <div className="popup-box">
      <div className="content">
        <div className="header">
          <p>{form.heading}</p>
          <span className="material-symbols-outlined" onClick={handleClick}>
            close
          </span>
        </div>
        <form className="create" onSubmit={handleSubmit}>
          <div className="row title">
            <label>Title</label>
            <input
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </div>
          <div className="row description">
            <label>Description</label>
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            ></textarea>
          </div>
          <button>{form.button_text}</button>
          {error && <div className="error">{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default NoteForm;
