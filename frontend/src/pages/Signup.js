import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="form-container">
      <div className="auth-form">
        <div className="form-header">
          <Link to="/" className="brand-logo">
            Webapps
          </Link>
          <p>Create an Account</p>
        </div>
        <form action="#">
          <div className="form-row">
            <label>Name</label>
            <input type="text" className="inputs" />
          </div>
          <div className="form-row">
            <label>Email</label>
            <input type="email" className="inputs" />
          </div>
          <div className="form-row">
            <label>Password</label>
            <input type="password" className="inputs" />
          </div>
          <button className="form-row">SignUp</button>
          <span>Already have an account?</span>
          <Link className="auth-type" to="/login">
            Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
