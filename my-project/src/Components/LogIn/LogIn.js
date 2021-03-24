import React from "react";
import "./logIn.css";

function LogIn() {
  return (
    <div className="container">
      <div className="details">
        <div className="wrap-details">
          <h1>Daily Deal</h1>
          <p>your best shopping centre</p>
        </div>
      </div>
      <div className="login-box">
        <p>Log In</p>
        <input
          type="text"

          placeholder="Email address or phone number"
          required
        />
        <input
          type="text"

          placeholder="Password"
          required
        />
        <div className="button-container">
          <a id="login-button" href="/shop">
            Login
        </a>
          <a id="signup-button" href="/signup">
            Create New Account
        </a>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
