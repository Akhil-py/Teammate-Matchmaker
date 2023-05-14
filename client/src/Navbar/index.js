import React from "react";
import "./style.css"

import logo from "./logo.png"

const loginOrProfile = (isLoggedIn) => {
  if(isLoggedIn){
    return <a class="navlinks" href="/profile">Profile</a>
  }
  return <a class="navlinks" href="/login">Member Login</a>;
}

function Navbar() {

    return(
      <div className="navbar">
        <a class="navlogo" href="/">
            <img style={{width: 220, height: 80}} src={logo} alt="Logo">
            </img>
        </a>
        <nav className="navlinks">
          <a class="navlinks" href="/about">About us</a>
          <a class="navlinks" href="/team">Team</a>
          <a class="navlinks" href="/contact">Contact</a>
          {loginOrProfile(false)}
        </nav>
      </div>
    );
  };

  export default Navbar;