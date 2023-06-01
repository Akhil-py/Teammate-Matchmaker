import React, {useState} from "react";
import "./login_styles.css";
import API from "../API";

import gaming from "../Images/login_img.png"
import lock from "../Images/lock.png"
import person from "../Images/person_icon.png"
import { Link } from 'react-router-dom'

function MemberLogin({sendData}) {
    const initialLoginData = {
        username: "",
        password: "",
    };

    const [loginData, updateLoginData] = useState(initialLoginData);

    const handleChange = (e) => {
        updateLoginData({
            ...loginData,

            //trim whitespace
            [e.target.name]: e.target.value.trim()
        });
    };

    const handleLogin = async (e) => {
        console.log("Login Data: ", loginData);
        console.log("event: ", e);
        e.preventDefault();
        const req = e.target;
        const payload = {
            loginInfo: loginData
        }
        console.log(JSON.stringify(payload.loginInfo));
        console.log("Request: ", req);

        try {
            const response = await API.sendLoginData(payload);
            console.log("response: ", response);
            console.log("response data success: ", response.data.success);
            console.log("userID: ", response.data.userId);
            //const UID = response.data.userId;
            if(response.data.success){
                //alert("Now logged in");
                window.location.href = "http://localhost:3000/memberlanding";
                sendData(response.data.userId);
            }else{
                alert("Wrong credentials")
            }
        } catch (error) {
            console.error(error);
            alert("Error occurred trying to login");
        }
    };

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
                            <input type="text" id="username" name="username" placeholder="Username" onChange={handleChange}></input>
                        </div>
                        <div class="input-container">
                            <img src={lock} alt="lock"></img>
                            <input type="password" id="password" name="password" placeholder="Password" onChange={handleChange}></input>
                        </div>
                        <h3>Forgot your password?</h3>
                        <button type="submit" value="Sign In" class="signin-but" onClick={handleLogin}>Sign In</button>
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