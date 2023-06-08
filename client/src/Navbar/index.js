import React, { useRef, useState, useEffect } from "react";
import "./style.css";
import API from "../API";

import logo from "../Images/logo.png";
import logo_only from "../Images/logo_only.png";
import hamburger from "../Images/hamburger.png"

function Navbar(values) {
  console.log("l: ", values.logout);
  console.log("v: ", values.values);
  console.log('nav_user_id:', localStorage.getItem('userid'));
  const navRef = useRef();

  const user_id = localStorage.getItem('userid');

  const [image, setImage] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  const showNavBar = () => {
    console.log("ono");
    navRef.current.classList.toggle('open');
  }


  const getOut = () => {
    values.logout();
    window.location.href = "https://ucsdgamed.onrender.com/";
  } 

  function decodeBase64ToImage(base64String) {
    const img = new Image();
    img.src = `data:image/png;base64,${base64String}`;
    return img;
  }

  const displayProfPic = async() => {
    if(user_id !== null){
      const user_info = (await API.getUserData(user_id)).data.userData; 
      const prof_pic = user_info.profilePicture;
      setImage(decodeBase64ToImage(prof_pic));
    }
  }

  useEffect(() => {
    displayProfPic();
}, []); 

  
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

          {/* {values.values ? <button className="navlinks"  onClick={getOut}> Logout</button> : <></>} */}
          <a className="navlinks" href="/about">
            <h2 className="underline-hover-effect">
              About us
            </h2>
          </a>
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

          {values.values ? <a href="/profile">{image &&<div class="navbar-circle"><img src={image.src} class="navbar-profile-pic" alt=""></img></div>}</a> : <a class="navlinks underline-hover-effect" href="/login">Login</a>}
          {values.values ? <a className="navlinks" href="/" onClick={getOut}><h2 className="underline-hover-effect">Logout</h2></a>:<></>}
        </nav>
        <button className="hamburger-btn" onClick={showNavBar}>
            <img className="hamburger" src={hamburger} alt="more"></img>
        </button>
      </div>
    );
  };

  export default Navbar;