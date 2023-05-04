import React from "react";
import "./style.css"

function Navbar() {
    return(
      <div className="navbar">
        <nav className="navlinks">
          <a class="navlinks" href="/">Home</a>
          <a class="navlinks" href="/about">About us</a>
          <a href="/team">Team</a>
          <a href="/contact">Contact</a>
          <a href="/login">Member Login</a>
        </nav>
      </div>
    );
  };

  export default Navbar;