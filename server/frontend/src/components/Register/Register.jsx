import React, { useState } from "react";

import "./Register.css";
import Header from "../Header/Header";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  let register_url = window.location.origin + "/djangoapp/register";

  const register = async (e) => {
    e.preventDefault();

    const res = await fetch(register_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: userName,
        password: password,
        firstName: firstName,
        lastName: lastName,
        email: email,
      }),
    });

    const json = await res.json();
    if (json.error === "Already Registered") {
      alert("The user with same username is already registered");
      window.location.href = window.location.origin;
    } else if (json.status === "Authenticated") {
      sessionStorage.setItem("username", json.userName);
      window.location.href = window.location.origin;
    } else {
      alert("The user could not be registered.");
    }
  };

  return (
    <div>
      <Header />
      <form className="register_container" onSubmit={register}>
        <span className="header">Sign Up</span>
        <div className="inputs">
          <div className="input">
            <span className="input_field">First Name </span>
            <input
              className="input_field"
              type="text"
              name="firstName"
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="input">
            <span className="input_field">Last Name </span>
            <input
              className="input_field"
              type="text"
              name="lastName"
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="input">
            <span className="input_field">Username </span>
            <input
              className="input_field"
              type="text"
              name="username"
              placeholder="Username"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="input">
            <span className="input_field">Email </span>
            <input
              className="input_field"
              type="email"
              name="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input">
            <span className="input_field">Password </span>
            <input
              className="input_field"
              type="password"
              name="psw"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="submit_panel">
            <input className="submit" type="submit" value="Register" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
