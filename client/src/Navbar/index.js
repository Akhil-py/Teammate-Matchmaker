import React from "react";
import "./style.css"

import logo from "./logo.png"

const loginOrProfile = (isLoggedIn) => {
  console.log("isLoggedIn ", isLoggedIn);
  if(isLoggedIn.values){
    return <a class="navlinks" href="/profile">Profile</a>
  }
  return <a class="navlinks" href="/login">Member Login</a>;
}

function Navbar(values) {

    return(
      <div className="navbar">
        <a className="navlogo" href="/">
            <img style={{width: 220, height: 80}} src={logo} alt="Logo">
            </img>
        </a>
        <nav className="navlinks">
          <a className="navlinks" href="/about">About us</a>
          <a className="navlinks" href="/team">Team</a>
          <a className="navlinks" href="/contact">Contact</a>
          {loginOrProfile(values)}
        </nav>
      </div>
    );
  };

  export default Navbar;