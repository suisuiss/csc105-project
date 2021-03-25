import React, { useState } from "react";
import "./signup.css";
import fire from "../../config/fire";

const SignUp = () => {
  const [user, setUser] = useState({
    name: "",
    surname: "",
    address: "",
    phoneno: "",
    email: "",
    password: "",
    confirmPassword: "",
    isValid: false,
  });

  const [errorMsg, setErrorMsg] = useState("");

  const inputChanged = (type, value) => {
    setUser((prev) => {
      return {
        ...prev,
        [type]: value,
      };
    });
  };

  const isValidInformation = () => {
    const {
      name,
      surname,
      address,
      phoneno,
      email,
      password,
      confirmPassword,
    } = user;

    return (
      !!name.length &&
      !!surname.length &&
      !!address.length &&
      !!phoneno.length &&
      !!email.length &&
      !!password.length &&
      !!confirmPassword.length &&
      password === confirmPassword
    );
  };

  const signUpClicked = () => {
    const { email, password } = user;

    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((resp) => {
        console.log(resp);
        window.location.assign("/");
      })
      .catch((err) => {
        setErrorMsg(err.message);
      });
  };

  return (
    <div>
      <div className="logo">
        Daily Deal
        <p>your best shopping centre</p>
      </div>
      <div className="signup">
        <p>Sign Up</p>
        <input
          type="text"
          placeholder="Name"
          id="name"
          onChange={(e) => inputChanged("name", e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Surname"
          id="surname"
          onChange={(e) => inputChanged("surname", e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Address"
          id="address"
          onChange={(e) => inputChanged("address", e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Email"
          id="email"
          onChange={(e) => inputChanged("email", e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Phone No."
          id="phone"
          onChange={(e) => inputChanged("phoneno", e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          onChange={(e) => inputChanged("password", e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm - Password"
          id="confirm-password"
          onChange={(e) => inputChanged("confirmPassword", e.target.value)}
          required
        />
        {isValidInformation() ? (
          <div>
            <button className="signup-button" onClick={() => signUpClicked()}>
              Sign Up
            </button>
            <span className="error-msg">{errorMsg}</span>
          </div>
        ) : (
          <div>
            <button className="disabled-signup-button">Sign Up</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignUp;