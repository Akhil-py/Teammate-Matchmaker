import React from "react";
import "./profile_styles.css";

import pikachu from "../Images/surprised.webp";

function Profile() {
    return(
    <div class="profile">
        <div class="left-panel">
            <div class="circle">
                <img src={pikachu}></img>
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
            <div card-collection>
                <button>Create a Card!</button>
            </div>
        </div>
    </div>
    );
}

export default Profile;