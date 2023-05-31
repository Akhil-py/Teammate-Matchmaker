import React, {useState} from "react";
import "./register_styles.css";
import { Link } from 'react-router-dom';
import API from "../API";

import reg_img from '../Images/register-img.jpeg'
import lock from '../Images/lock.png';
import person from "../Images/person_icon.png";
import discord from "../Images/discord.png";
import mail from "../Images/mail.png";
import college from "../Images/college.png";

function Register() {
    const initialRegisterData = {
        username: "",
        email: "",
        password: "",
        discord: "",
        college: "",
    };

    const [registerData, updateRegisterData] = useState(initialRegisterData);

    const handleChange = (e) => {
        updateRegisterData({
            ...registerData,

            //trim whitespace
            [e.target.name]: e.target.value.trim()
        });
    };

    const handleRegister = async (e) => {
        console.log("Register Data: ", registerData);
        console.log("Clicked!");
        e.preventDefault();
        const req = e.target;
        console.log("event: ", e);
        const payload = {
            registerInfo: registerData
        }
        console.log(JSON.stringify(payload.purchase));
        console.log(req);
        console.log(e);

        try {
            await API.sendUserData(payload);
            alert("Created successfully");
        } catch (error) {
            console.error(error);
            alert("An error occurred while trying to create the user. Please try again later.");
        }
    };

    return(
    <div>
        <head>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
            <link href="https://fonts.googleapis.com/css2?family=Khand&display=swap" rel="stylesheet"></link>
        </head>
        <div className="container">
            <div className="box">
                <div className="box1">
                    <h1>
                        Register
                    </h1>
                    <form>
                        <div className="input-container">
                            <img src={person} alt="person"></img>
                            <input type="text" id="username" name="username" placeholder="Username" onChange={handleChange}></input>
                        </div>
                        <div className="input-container">
                            <img src={mail} alt="mail"></img>
                            <input type="text" id="email" name="email" placeholder="Email (user@ucsd.edu)" onChange={handleChange}></input>
                        </div>
                        <div className="input-container">
                            <img src={lock} alt="lock"></img>
                            <input type="password" id="password" name="password" placeholder="Password" onChange={handleChange}></input>
                        </div>
                        <div className="input-container">
                            <img src={discord} alt="discord"></img>
                            <input type="text" id="discord" name="discord" placeholder="Discord Tag (example#1234)" onChange={handleChange}></input>
                        </div>
                        <div className="input-container">
                            <img src={college} alt="discord"></img>
                            <select class="college" id="college" name="college" onChange={handleChange}>
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
                            <button value="signup" className="signup-but" onClick={handleRegister}>Signup</button>
                        </Link>
                    </form>
                </div>
                <div className="box2">
                    <img src={reg_img} alt="bruh"></img>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Register;