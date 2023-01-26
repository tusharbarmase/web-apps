import React from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import "../styles/Account.css"

const Account = () => {
  const { user, dispatch } = useAuthContext();
  const handleLogout = () => {
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
  };

  return (
    <>
      {user && (
        <div className="account-container">
          <div>Name: {user.name}</div>
          <div>Email: {user.email}</div>
          <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
      )}
      {!user && (
        <div className="account-container">
          Error 404: Not Found
        </div>
      )}
    </>
  );
};

export default Account;
