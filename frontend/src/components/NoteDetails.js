import React from "react";

//date formatting
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const NoteDetails = ({ note }) => {
  return (
    <li className="note">
      <div className="details">
        <p>{note.title}</p>
        <span>{note.message}</span>
      </div>
      <div className="bottom-content">
        <span>
          {formatDistanceToNow(new Date(note.createdAt), { addSuffix: true })}
        </span>
      </div>
    </li>
  );
};

export default NoteDetails;
