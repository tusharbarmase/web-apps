import React from "react";
import "../styles/Forms.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="form-container">
      <div className="auth-form">
        <div className="form-header">
          <Link to="/" className="brand-logo">
            Webapps
          </Link>
          <p>Sign in with your Account</p>
        </div>
        <form action="#">
          <div className="form-row">
            <label>Email</label>
            <input type="email" className="inputs" />
          </div>
          <div className="form-row">
            <label>Password</label>
            <input type="password" className="inputs" />
          </div>
          <button className="form-row">Login</button>
          <span>Don't have an account?</span>
          <Link className="auth-type" to="/signup">
            SignUp
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
