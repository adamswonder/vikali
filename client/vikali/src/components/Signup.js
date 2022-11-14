import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./login.css";


function Signup() {
  const navigate = useNavigate();
  const [name, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [authenticate, setAuthenticate] = useState(
    localStorage.getItem(localStorage.getItem("authenticate" || false))
  );

  function handleSubmit(e) {
    // Creates a new User
    if (name == null || password == null) {
      alert("You missed something");;
    } else {
      e.preventDefault();
      fetch("https://tranquil-hollows-52790.herokuapp.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name, password: password}),
      });
      localStorage.setItem("authenticate", true);
      alert("Account created successfully.Proceed to Login");
      navigate("/");
    }
  }
  // Testing merge conflict

  return (
    <div>
      <div className="login-body">
        <center>
          <h1> Vikali </h1>
        </center>
        <form onSubmit={handleSubmit} className="form">
          <div className="container">
            <label>Username : </label>
            <input
              className="login-input"
              type="text"
              placeholder="Enter Username"
              name="name"
              value={name}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label>Password : </label>
            <input
              className="login-input"
              type="password"
              placeholder="Enter Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="login-button" type="submit">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
