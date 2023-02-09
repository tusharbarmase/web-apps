import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { dispatch } = useAuthContext();

  const handleSignup = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    axios
      .post("https://webapp-server.onrender.com/api/user/signup", {
        name,
        email,
        password,
      })
      .then((response) => {
        localStorage.setItem("user", JSON.stringify(response.data));
        dispatch({ type: "LOGIN", payload: response.data });
        setName("");
        setEmail("");
        setPassword("");
        setError("");
        setIsSubmitting(false);
      })
      .catch((error) => {
        setError(error.response.data.error);
        setIsSubmitting(false);
      });
  };

  return (
    <div className="form-container">
      <div className="auth-form">
        <div className="form-header">
          <Link to="/" className="brand-logo">
            Webapps
          </Link>
          <p>Create an Account</p>
        </div>
        <form onSubmit={handleSignup}>
          <div className="form-row">
            <label>Name</label>
            <input
              type="text"
              className="inputs"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-row">
            <label>Email</label>
            <input
              type="email"
              className="inputs"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-row">
            <label>Password</label>
            <input
              type="password"
              className="inputs"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="form-row" disabled={isSubmitting}>
            SignUp
          </button>
          <span>Already have an account?</span>
          <Link className="auth-type" to="/login">
            Login
          </Link>
          {error && <div className="error">{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default Signup;
