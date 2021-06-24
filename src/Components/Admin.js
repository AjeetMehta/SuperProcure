import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import M from "materialize-css";

function Admin() {
  const history = useHistory();
  const [userdata, setuserdata] = useState({
    aname: "",
    password: "",
  });

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setuserdata({ ...userdata, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const { aname, password } = userdata;
    const res = await fetch(
      "https://superback.herokuapp.com/posts/adminlogin",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ aname, password }),
      }
    );
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
          <h2 className="title">Admin Login</h2>
          <input
            onChange={handleChange}
            value={userdata.aname}
            type="text"
            name="aname"
            placeholder="Name"
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

export default Admin;
