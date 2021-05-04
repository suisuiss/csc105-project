import React, { useState } from "react";
import "./logIn.css";
import fire from "../../config/fire";

fire.auth().onAuthStateChanged((user) => {
  if (user) {
    if (
      window.location.pathname === "/" ||
      window.location.pathname === "/signup"
    ) {
      window.location.assign("/shop");
    }
  } else {
    if (
      window.location.pathname !== "/" &&
      window.location.pathname !== "/signup"
    ) {
      window.location.assign("/");
    }
  }
});

function LogIn() {
  const [errorMsg, setErrorMsg] = useState("");

  const signIn = () => {
    const email = document.getElementById("email-login").value;
    const password = document.getElementById("password-login").value;

    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((resp) => {
        console.log(resp);
        window.location.assign("/shop");
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
        setErrorMsg(err.message);
      });
  };

  return (
    <div className="login-container">
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
          id="email-login"
          name="username"
          placeholder="username"
          required
        />
        <input
          type="password"
          id="password-login"
          name="password"
          placeholder="Password"
          required
        />
        <div className="button-container">
          <span>{errorMsg}</span>
          <button id="login-button" onClick={signIn}>
            Login
          </button>
          <a id="signup-button" href="/signup">
            Create New Account
          </a>
        </div>
      </div>
    </div>
  );
}

export default LogIn;