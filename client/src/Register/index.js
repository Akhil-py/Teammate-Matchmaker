import React from "react";
import "./register_styles.css";
import { Link } from 'react-router-dom';

import reg_img from '../Images/register-img.jpeg'
import lock from '../Images/lock.png';
import person from "../Images/person_icon.png";
import discord from "../Images/discord.png";
import mail from "../Images/mail.png";
import college from "../Images/college.png";

function Register() {
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
                        Register
                    </h1>
                    <form>
                        <div class="input-container">
                            <img src={person} alt="person"></img>
                            <input type="text" id="username" name="username" placeholder="Username"></input>
                        </div>
                        <div class="input-container">
                            <img src={mail} alt="mail"></img>
                            <input type="text" id="email" name="email" placeholder="Email (user@ucsd.edu)"></input>
                        </div>
                        <div class="input-container">
                            <img src={lock} alt="lock"></img>
                            <input type="password" id="password" name="password" placeholder="Password"></input>
                        </div>
                        <div class="input-container">
                            <img src={lock} alt="lock"></img>
                            <input type="password" id="password" name="password" placeholder="Confirm Password"></input>
                        </div>
                        <div class="input-container">
                            <img src={discord} alt="discord"></img>
                            <input type="text" id="discord" name="discord" placeholder="Discord Tag (example#1234)"></input>
                        </div>
                        <div class="input-container">
                            <img src={college} alt="discord"></img>
                            <select class="college">
                                <option value="Select">College</option>
                                <option value="Revelle">Revelle</option>
                                <option value="John Muir">John Muir</option>
                                <option value="Marshall">Marshall</option>
                                <option value="Warren">Warren</option>
                                <option value="ERC">ERC</option>
                                <option value="Sixth">Sixth</option>
                                <option value="Seventh">Seventh</option>
                            </select>
                        </div>
                        <Link to="/login">
                            <button value="signup" class="signup-but">Signup</button>
                        </Link>
                    </form>
                </div>
                <div class="box2">
                    <img src={reg_img} alt="bruh"></img>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Register;