import React, { useRef } from "react";
import "./style.css";

import logo from "../Images/logo.png";
import logo_only from "../Images/logo_only.png";
import hamburger from "../Images/hamburger.png"

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
  console.log("l: ", values.logout);
  console.log("v: ", values.values);
  const navRef = useRef();
  const showNavBar = () => {
    console.log("ono");
    navRef.current.classList.toggle('open');
  }

  const getOut = (func) => {
    values.logout(true);
    window.location.href = "http://localhost:3000/";
  } 

  
    return(
      <div class="navbar">
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
          <link href="https://fonts.googleapis.com/css2?family=ABeeZee&display=swap" rel="stylesheet"></link>
        </head>
        <a href="/">
          <div className="logo-container">
            <img className="navlogo" src={logo_only} alt="Logo"></img>
            <img className="navname" src={logo} alt="gamed"></img>
          </div>
        </a>
        <nav className="nav-container" ref={navRef}>
          <a className="navlinks" href="/about">
            <h2 className="underline-hover-effect">
              About us
            </h2>
          </a>
          <button onClick={getOut}> Logout</button>
          <a className="navlinks" href="/team">
            <h2 className="underline-hover-effect">
              Team
            </h2>
          </a>
          <a className="navlinks" href="/contact">
            <h2 className="underline-hover-effect">
              Contact
            </h2>
          </a>
          {loginOrProfile(values)}
        </nav>
        <button className="hamburger-btn" onClick={showNavBar}>
            <img className="hamburger" src={hamburger} alt="more"></img>
        </button>
      </div>
    );
  };

  export default Navbar;