import React from "react";
import "./logIn.css";

function LogIn() {
  return (
    <div>
      <link rel="stylesheet" href="logIn.css" />
      <title>Daily Deal</title>
      <div className="logo">
        Daily Deal
        <p>your best shopping centre</p>
      </div>
      <div className="login">
        <p>Log In</p>
        <input
          type="text"
          name="username"
          placeholder="Email address or phone number"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <a href="../Shop/Shop.js">
          <input type="submit" Value="Log In" name="login" />
        </a>
      </div>
      <a href="../SignUp/SignUp.js">
        <input type="submit" Value="Create New Account" name="signup" />
      </a>
    </div>
  );
}

export default LogIn;
