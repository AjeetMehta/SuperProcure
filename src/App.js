import React from "react";
import "./App.css";
// import Navbar from "./components/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
// import Home from "./components/screen/Home";
import Login from "./Components/Login.js";
import Table from "./Components/Table.js";
import Admin from "./Components/Admin.js";
import User from "./Components/User";
import Home from "./Components/Home";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/user">
        <User />
      </Route>
      <Route exact path="/admin">
        <Admin />
      </Route>
      <Route exact path="/table">
        <Table />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
    </BrowserRouter>
  );
}

export default App;
