import React, { useState } from "react";
import M from "materialize-css";
import Specific from "./Specific.js";

function User() {
  const [pincod, setpin] = useState();
  const [loading, setLoading] = useState(false);
  const [data, setDate] = useState([]);
  async function handleSubmit(e) {
    e.preventDefault();
    await fetch("https://superback.herokuapp.com/posts/pin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ pincod }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error)
          M.toast({ html: data.error, classes: "#c62828 red darken-3" });
        else {
          setDate(data);
          setLoading(true);
        }
      });
  }

  return (
    <>
      <form method="POST" onSubmit={handleSubmit}>
        <div className="mycard">
          <div className="card login-card">
            <input
              onChange={(e) => setpin(e.target.value)}
              type="text"
              name="pincode"
              placeholder="Enter Pincode"
              required
            ></input>
            <button
              type="submit"
              className="waves-effect waves-light btn #64b5f6 blue darken-1"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
      {loading && <Specific value={data} />}
    </>
  );
}

export default User;
