import React from "react";
import "./style.css"

import logo from './logo.png'

function Navbar() {

  function loginOrProfile(setButtonClicked) {
    if(setButtonClicked){
      return <a href="/profile">Profile</a>
    }
    return <a href="/login">Login</a>
  }

    return(
      <div className="navbar">
        <a className="logo" href="/"> 
           <img style={{width : 220, height: 60 }} src={logo} alt="Idk"></img>
          </a> 
        <nav className="navlinks">
          <a href="/about">About us</a>
          <a href="/team">Team</a>
          <a href="/contact">Contact</a>
          {loginOrProfile(false)}
        </nav>
      </div>
    );
  };

  export default Navbar;