import React, { useRef } from "react";
import "./profile_styles.css";

import pikachu from "../Images/surprised.webp";


function Profile() {

    const navRef = useRef();
    const valorantR = () => {
        console.log("im crying");
        navRef.current.classList.toggle('valorant-show');
    }

    return(
    <div class="profile">
        <div class="left-panel">
            <div class="circle">
                <img src={pikachu} alt="pikachu"></img>
            </div>
            <div class="profile-info">
                <li>Username</li>
                <li>Password</li>
                <li>Email</li>
                <li>Discord Tag</li>
                <li>College</li>
            </div>
        </div>
        <div class="right-panel">
            My Cards
            <div class="card-collection">
                <button>Create a Card!</button>
            </div>
            <div class="pop-up-card">
                <select class="select-chosen">
                    <option value="Select">Game</option>
                    <option onClick={valorantR} value="Valorant">Valorant</option>
                    <option value="League of Legends">League of Legends</option>
                    <option value="DOTA2">DOTA 2</option>
                </select>
                <select ref={navRef} className="select-chosen hide">
                    <option value="Role">Role</option>
                    <option value="Controller">Controller</option>
                    <option value="Duelist">Duelist</option>
                    <option value="Initiator">Initiator</option>
                    <option value="Sentinel">Sentinel</option>
                </select>
            </div>
        </div>
    </div>
    );
}

export default Profile;