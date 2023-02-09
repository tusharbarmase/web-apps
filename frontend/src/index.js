import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { HashRouter } from "react-router-dom";
import { NotesContextProvider } from "./context/NotesContext";
import { AuthContextProvider } from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <AuthContextProvider>
      <NotesContextProvider>
        <App />
      </NotesContextProvider>
    </AuthContextProvider>
  </HashRouter>
);
