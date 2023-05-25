import React from "react";
import "./style.css";

import logo from "../Images/logo.png";
import logo_only from "../Images/logo_only.png";

const loginOrProfile = (isLoggedIn) => {
  console.log("isLoggedIn ", isLoggedIn);
  if(isLoggedIn.values){
    return <a class="navlinks" href="/profile">Profile</a>
  }
  return <a class="navlinks" href="/login">
    <h2 class="underline-hover-effect">
      Login
    </h2>
  </a>;
}

function Navbar(values) {

    return(
      <div className="navbar">
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
          <link href="https://fonts.googleapis.com/css2?family=ABeeZee&display=swap" rel="stylesheet"></link>
        </head>
        <a href="/">
          <div class="logo-container">
            <img class="navlogo" src={logo_only} alt="Logo"></img>
            <img class="navname" src={logo} alt="gamed"></img>
          </div>
        </a>
        <nav className="nav-container">
          <a className="navlinks" href="/about">
            <h2 class="underline-hover-effect">
              About us
            </h2>
          </a>
          <a className="navlinks" href="/team">
            <h2 class="underline-hover-effect">
              Team
            </h2>
          </a>
          <a className="navlinks" href="/contact">
            <h2 class="underline-hover-effect">
              Contact
            </h2>
          </a>
          {loginOrProfile(values)}
        </nav>
      </div>
    );
  };

  export default Navbar;