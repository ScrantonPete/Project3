import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="navbar navbar-expand-lg navbar-ight bg-light">
      <a className="home" href="/">
        Main
      </a>
      <a className="eat" href="/eat">
        Eat
      </a>
      <a className="zzz" href="/sleep">
        Sleep
      </a>
      <a className="change" href="/change">
        Change
      </a>
      <a className="daily" href="/dailyLog">Summary</a>
    </div>
  );
}

export default NavBar;
