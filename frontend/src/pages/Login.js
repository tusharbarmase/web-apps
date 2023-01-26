import React, { useState } from "react";
import "../styles/Forms.css";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { dispatch } = useAuthContext();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const response = await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      localStorage.setItem("user", JSON.stringify(json));
      dispatch({ type: "LOGIN", payload: json });
      setEmail("");
      setPassword("");
      setError("");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="form-container">
      <div className="auth-form">
        <div className="form-header">
          <Link to="/" className="brand-logo">
            Webapps
          </Link>
          <p>Sign in with your Account</p>
        </div>
        <form onSubmit={handleLogin}>
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
            Login
          </button>
          <span>Don't have an account?</span>
          <Link className="auth-type" to="/signup">
            SignUp
          </Link>
          {error && <div className="error">{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default Login;
