import React from "react";
import "./profile_styles.css";

function Profile() {
    return(
    <div class="profile">
        <div class="left-panel">
            <div class="circle">
                <img></img>
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
            <div>
                
            </div>
        </div>
    </div>
    );
}

export default Profile;