import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Notes from "./pages/Notes";
import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Calculator from "./pages/Calculator";
import Chatroom from "./pages/Chatroom";
import Account from "./pages/Account";
import { useAuthContext } from "./hooks/useAuthContext";
import Music from "./pages/Music";

function App() {
  const { user } = useAuthContext();
  const userInfo = JSON.parse(localStorage.getItem("user"));
  const { pathname } = useLocation();
  return (
    <div className="App">
      {pathname !== "/login" && pathname !== "/signup" ? <NavBar /> : null}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/music" element={<Music />} />
        <Route
          path="/notes"
          element={userInfo ? <Notes /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/chatroom"
          element={userInfo ? <Chatroom /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/account"
          element={userInfo ? <Account /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/signup"
          element={!user ? <Signup /> : <Navigate to="/" />}
        />
      </Routes>
      {pathname !== "/login" && pathname !== "/signup" ? <Footer /> : null}
    </div>
  );
}

export default App;
