import React from "react";
import "./landing_style.css";

import league from "../Images/lol_back.png";
import valorant from "../Images/valorant.jpg";
import dota from "../Images/dota.png";

function MemberLanding() {
    return(
        <div>
            <div class="background">
                <div class="game-card">
                    <div class="text-container red">
                        <b>Valorant</b>
                    </div>
                    <div class="card-img-container">
                        <a href="/valorant">
                            <img src={valorant} alt="bruh"></img>
                        </a>
                    </div>
                </div>
                <div class="game-card">
                    <div class="text-container yellow">
                        <b>League</b>
                    </div>
                    <div class="card-img-container">
                        <a href="/league">
                            <img src={league} alt="bruh"></img>
                        </a>
                    </div>
                </div>
                <div class="game-card">
                    <div class="text-container blue">
                        <b>DOTA</b>
                    </div>
                    <div class="card-img-container">
                        <a href="/dota">
                            <img src={dota} alt="bruh"></img>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MemberLanding;