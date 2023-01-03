import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { NotesContextProvider } from "./context/NotesContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <NotesContextProvider>
      <NavBar/>
      <App />
      <Footer/>
    </NotesContextProvider>
  </BrowserRouter>
);
