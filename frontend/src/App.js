import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Notes from "./pages/Notes";
import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Calculator from "./pages/Calculator";
import Chatroom from "./pages/Chatroom";

function App() {
  const { pathname } = useLocation();
  return (
    <div className="App">
      {pathname !== "/login" && pathname !== "/signup" ? <NavBar /> : null}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/chatroom" element={<Chatroom />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      {pathname !== "/login" && pathname !== "/signup" ? <Footer /> : null}
    </div>
  );
}

export default App;
