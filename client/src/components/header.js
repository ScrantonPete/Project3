import React from "react";
import "./style.css";
import NavBar from "./NavBar";

function Header() {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Catchy Site Name</h1>
        <p className="lead">Tracking Baby's Basic Needs</p>
      </div>
      <NavBar></NavBar>
    </div>
  );
}
export default Header;
