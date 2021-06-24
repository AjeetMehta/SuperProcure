import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link to="/admin">Admin</Link>
      <Link to="/login">Branch_Manager</Link>
      <Link to="/user">User</Link>
    </div>
  );
}

export default Home;
