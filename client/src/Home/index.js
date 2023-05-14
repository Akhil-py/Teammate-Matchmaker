import React from "react";
import "./style.css";
import jett from "../Images/jett.png";
import sage from "../Images/sage.png";
import temo from "../Images/temo.png";
import val from "../Images/val.png";
import lol from "../Images/lol.png";
import yumi from "../Images/yumi.png";

function Home() {
    return(
    <div>
        <div class="container-1">
            <div class="text-box">
                <div class="text-content">
                    🎮 Find Gamer Friends at UC San Diego
                </div>
                <div class="text-content">
                    Find you the Perfect Match🤝
                </div>
                <div class="text-content">
                    No Matter What Rank or Role You Are
                </div>
            </div>
            <div class="img-container">
                <img src={jett} alt="bruh"></img>
                <img src={sage} alt="bruh"></img>
            </div>
        </div>
        <div class="container-2">
            <div class="img-container-2">
                <img src={temo} alt="bruh"></img>
                <img src={yumi} alt="bruh"></img>
            </div>
            <div class="text-box-2">
                <div class="text-content-2">
                    See all the Games We Support!
                </div>
            </div>
        </div>
    </div>
    );
}

export default Home;