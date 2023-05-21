import React from "react";
import "./landing_style.css";

import league from "../Images/lol_back.png";
import valorant from "../Images/valorant.jpg";

function MemberLanding() {
    return(
        <div>
            <div class="background">
                <div class="game-card">
                    <div class="text-container red">
                        <b>Valorant</b>
                    </div>
                    <div class="card-img-container">
                        <img src={valorant} alt="bruh"></img>
                    </div>
                </div>
                <div class="game-card">
                    <div class="text-container yellow">
                        <b>League</b>
                    </div>
                    <div class="card-img-container">
                        <img src={league} alt="bruh"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MemberLanding;