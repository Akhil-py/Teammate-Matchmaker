import React from "react";
import "./styles.css";
import jett from "../Images/jett.png";
import sage from "../Images/sage.png";
import temo from "../Images/temo.png";
import val from "../Images/val.png";
import lol from "../Images/lol.png";
import yumi from "../Images/yumi.png";

function Home() {
    return (
    <div>
        <div class="container-1">
            <div class="text-box">
                <h1>🎮 Find Gamer Friends at UC San Diego</h1>
                <h1>Find you the Perfect Match🤝</h1>
                <h1>No Matter What Rank or Role You Are</h1>
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
                <h1>See all the Games We Support!</h1>
                <div class="text-img-box">
                    <div class="text-img-box-row">
                        <h1>Valorant</h1>
                        <img src={val} alt="valorant"></img>
                    </div>
                    <div class="text-img-box-row">
                        <h1>League of Legends</h1>
                        <img src={lol} alt="league"></img>
                    </div>
                </div>       
            </div>
        </div>
    </div>
    )
};

export default Home;