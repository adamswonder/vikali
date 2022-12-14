import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./login.css";

function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({})
  const [users, setUsers] = useState([])
  const [name, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const [authenticate, setAuthenticate] = useState(
    localStorage.getItem(localStorage.getItem("authenticate" || false))
  );

  useEffect(() => {
    fetch("https://tranquil-hollows-52790.herokuapp.com/users")
      .then((resp) => resp.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, []);

  function handleSubmit(e) {
    if (name == null || password == null) {
      alert("Fields Are Required");
      return;
    }
    e.preventDefault();
    const people = users.find((item) => item.name === name);

    if (people && people.password === password) {
      setUser(people)
      console.log(user);
      localStorage.setItem("authenticate", true);
      navigate("/app/products");
    } else {
      alert("Wrong credentials, Please check username or password");
    }
  }

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
              onChange={(e) => setUserName(e.target.value)}
              value={name}
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
              Login
            </button>
            <div className="link">
              <Link to="/signup">New to Vikali? Sign Up here</Link>
              <p>Example Login credentials- <br></br>Username:Delphia Torp <br></br>Password:BjBmG8bVuG</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
