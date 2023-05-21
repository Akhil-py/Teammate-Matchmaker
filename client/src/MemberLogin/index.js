import React from "react";
import "./login_styles.css";

import gaming from "../Images/login_img.png"
import lock from "../Images/lock.png"
import person from "../Images/person_icon.png"
import { Link } from 'react-router-dom'

function MemberLogin() {
    return(
    <div>
        <head>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
            <link href="https://fonts.googleapis.com/css2?family=Khand&display=swap" rel="stylesheet"></link>
        </head>
        <div class="container">
            <div class="box">
                <div class="box1">
                    <h1>
                        Welcome to GAMED
                    </h1>
                    <form>
                        <div class="input-container">
                            <img src={person} alt="person"></img>
                            <input type="text" id="username" name="username" placeholder="Username"></input>
                        </div>
                        <div class="input-container">
                            <img src={lock} alt="lock"></img>
                            <input type="password" id="password" name="password" placeholder="Password"></input>
                        </div>
                        <h3>Forgot your password?</h3>
                        <Link to="/memberlanding">
                            <button type="submit" value="Sign In" class="signin-but">Sign In</button>   
                        </Link>
                        <Link to="/register">
                            <button value="Register" class="reg-but">Register</button>
                        </Link>
                    </form>
                </div>
                <div class="box2">
                    <img src={gaming} alt="bruh"></img>
                </div>
            </div>
        </div>
    </div>
    );
}

export default MemberLogin;