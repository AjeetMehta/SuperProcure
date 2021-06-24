import React, { useState } from "react";
import M from "materialize-css";
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();
  const [userdata, setuserdata] = useState({
    branch: "",
    password: "",
  });

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setuserdata({ ...userdata, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const { branch, password } = userdata;
    const res = await fetch("https://superback.herokuapp.com/posts/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ branch, password }),
    });
    const data = await res.json();
    if (data.error)
      M.toast({ html: data.error, classes: "#c62828 red darken-3" });
    else {
      M.toast({ html: "Successfully LoggedIn" });
      history.push("/table");
    }
  }

  return (
    <form method="POST" onSubmit={handleSubmit}>
      <div className="mycard">
        <div className="card login-card">
          <h2 className="title">Manager Login</h2>
          <input
            onChange={handleChange}
            value={userdata.branch}
            type="text"
            name="branch"
            placeholder="Branch"
            required
          ></input>
          <input
            onChange={handleChange}
            value={userdata.password}
            type="password"
            name="password"
            placeholder="Password"
            required
          ></input>
          <button
            type="submit"
            className="waves-effect waves-light btn #64b5f6 blue darken-1"
          >
            SignIn
          </button>
        </div>
      </div>
    </form>
  );
}

export default Login;
