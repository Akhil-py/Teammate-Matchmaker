import React, {useEffect} from "react";
import "./styles.css";
import jett from "../Images/jett.png";
import sage from "../Images/sage.png";
import temo from "../Images/temo.png";
import val from "../Images/val.png";
import lol from "../Images/lol.png";
import yumi from "../Images/yumi.png";
import dota from "../Images/dota2.png";

// make sure to "npm install aos"
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
    useEffect(() => {
        AOS.init({duration: 2000});
    }, []); 
    return (
    <div>
        <div class="container-1">
            <div class="text-box" >
                <h1 data-aos="fade-down">🎮 Find Gamer Friends at UC San Diego</h1>
                <h1 data-aos="fade-right">Find you the Perfect Match🤝</h1>
                <h1 data-aos="fade-up">No Matter What Rank or Role You Are</h1>
            </div>
            <div class="img-container">
                <img src={jett} alt="bruh"></img>
                <img src={sage} alt="bruh"></img>
            </div>
        </div>
        <div class="container-2">
            <div class="img-container-2">
                <img data-aos="fade-right" src={temo} alt="bruh"></img>
                <img data-aos="fade-right" src={yumi} alt="bruh"></img>
            </div>
            <div class="text-box-2">
                <h1 data-aos="fade-down">See all the Games We Support!</h1>
                <div class="text-img-box">
                    <div class="text-img-box-row" data-aos="fade-left">
                        <h1>Valorant</h1>
                        <img src={val} alt="valorant"></img>
                    </div>
                    <div class="text-img-box-row" data-aos="fade-right">
                        <h1>League of Legends</h1>
                        <img src={lol} alt="league"></img>
                    </div>
                    <div class="text-img-box-row" data-aos="fade-right">
                        <h1>DOTA</h1>
                        <img src={dota} alt="dota"></img>
                    </div>
                </div>       
            </div>
        </div>
    </div>
    )
};

export default Home;