import React, { useState } from "react";
import "./logIn.css";



function LogIn() {
  const [errorMsg, setErrorMsg] = useState("");

  const signIn = async () => {
    const username = document.getElementById("username-login").value;
    const password = document.getElementById("password-login").value;
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "JSESSIONID=E63C09469D7E953EE19AC2030257601B");
    
    var raw = JSON.stringify({
      "username": username,
      "password": password
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    const response = await fetch("/csc105_backend_war_exploded/login", requestOptions);
    const data = await  response.json();
    if(typeof data !== 'undefined' && data.errorCode !== '400'){
      sessionStorage.setItem('userId',data);
      window.location.href=("/shop/product")
    }else{
      sessionStorage.setItem('userId','');
      alert('Invalid user or password');
    }
    
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
          id="username-login"
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