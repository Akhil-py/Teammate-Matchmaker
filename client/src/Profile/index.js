import React, { useRef, useState } from "react";
import "./profile_styles.css";

import pikachu from "../Images/surprised.webp";


function Profile() {

    const valRef = useRef();
    const lolRef = useRef();
    const dotaRef = useRef();
    const submitRef = useRef();

    const [selectedOption, setSelectedOption] = useState('');
    const valorantR = (e) => {
        console.log("ve: ", e);
        valRef.current.classList.add(e);
        lolRef.current.classList.remove(e);
        dotaRef.current.classList.remove(e);
        submitRef.current.classList.add(e);
        
    }
    const lolR = (e) => {
        console.log("le: ", e);
        lolRef.current.classList.add(e);
        valRef.current.classList.remove(e);
        dotaRef.current.classList.remove(e);
        submitRef.current.classList.add(e);
    }
    const dotaR = (e) => {
        console.log("de: ", e);
        dotaRef.current.classList.add(e);
        lolRef.current.classList.remove(e);
        valRef.current.classList.remove(e);
        submitRef.current.classList.add(e);
    }

    const gameR = (e) => {
        console.log("de: ", e);
        dotaRef.current.classList.remove(e);
        lolRef.current.classList.remove(e);
        valRef.current.classList.remove(e);
        submitRef.current.classList.remove(e);
    }
    const handleOptionChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);
        // Perform additional actions based on the selected option
        console.log(selectedValue)
        if (selectedValue === "Valorant") {
            valorantR('show');
       }
        else if (selectedValue === "League of Legends") {
            lolR('show');
        }
        else if (selectedValue === "DOTA 2") {
            dotaR('show');
        }
        else if (selectedValue ==="Game") {
            gameR('show');
        }
      };

    return(
    <div class="profile">
        <div class="left-panel">
            <div class="circle">
                <img src={pikachu} alt="pikachu"></img>
            </div>
            <div class="profile-info">
                <li>Username</li>
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
                <select onChange={handleOptionChange} class="select-chosen">
                    <option value="Game">Game</option>
                    <option value="Valorant">Valorant</option>
                    <option value="League of Legends">League of Legends</option>
                    <option value="DOTA 2">DOTA 2</option>
                </select>
                <div className="hide" ref={valRef}>
                    <select className="select-chosen" ref={valRef}>
                        <option value="Role">Role</option>
                        <option value="Controller">Controller</option>
                        <option value="Duelist">Duelist</option>
                        <option value="Initiator">Initiator</option>
                        <option value="Sentinel">Sentinel</option>
                    </select>
                    <select className="select-chosen" ref={valRef}>
                        <option value="Rank">Rank</option>
                        <option value="Iron">Iron</option>
                        <option value="Bronze">Bronze</option>
                        <option value="Gold">Gold</option>
                        <option value="Platinum">Platinum</option>
                        <option value="Diamond">Diamond</option>
                        <option value="Ascendant">Ascendant</option>
                        <option value="Immortal">Immortal</option>
                        <option value="Radiant">Radiant</option>
                    </select>
                    <select className="select-chosen" ref={valRef}>
                        <option value="Region">Region</option>
                        <option value="NA">NA</option>
                        <option value="EU">EU</option>
                        <option value="BR">BR</option>
                    </select>
                </div>
                <div className="hide" ref={lolRef}>
                    <select className="select-chosen" ref={lolRef}>
                        <option value="Role">Role</option>
                        <option value="Controller">Top</option>
                        <option value="Duelist">Jungle</option>
                        <option value="Initiator">Mid</option>
                        <option value="Sentinel">ADC</option>
                        <option value="Sentinel">Support</option>
                    </select>
                    <select className="select-chosen" ref={lolRef}>
                        <option value="Rank">Rank</option>
                        <option value="Iron">Iron</option>
                        <option value="Bronze">Bronze</option>
                        <option value="Gold">Gold</option>
                        <option value="Platinum">Platinum</option>
                        <option value="Diamond">Diamond</option>
                        <option value="Ascendant">Master</option>
                        <option value="Immortal">Grandmaster</option>
                        <option value="Radiant">Challenger</option>
                    </select>
                    <select className="select-chosen" ref={lolRef}>
                        <option value="Region">Region</option>
                        <option value="NA">NA</option>
                        <option value="EU">EU</option>
                        <option value="BR">BR</option>
                    </select>
                </div>

                <div className="hide" ref={dotaRef}>
                    <select className="select-chosen">
                        <option value="Role">Role</option>
                        <option value="Controller">Carry</option>
                        <option value="Duelist">Mid</option>
                        <option value="Initiator">Offlane</option>
                        <option value="Sentinel">Soft Support</option>
                        <option value="Sentinel">Hard Support</option>
                    </select>
                    <select className="select-chosen">
                        <option value="Rank">Rank</option>
                        <option value="Iron">Herald</option>
                        <option value="Bronze">Guardian</option>
                        <option value="Gold">Crusader</option>
                        <option value="Platinum">Archon</option>
                        <option value="Diamond">Legend</option>
                        <option value="Ascendant">Ancient</option>
                        <option value="Immortal">Divine</option>
                        <option value="Radiant">Immortal</option>
                    </select>
                    <select className="select-chosen">
                        <option value="Region">Region</option>
                        <option value="NA">NA</option>
                        <option value="EU">EU</option>
                        <option value="BR">BR</option>
                    </select>
                </div>
                <button className="hide" ref={submitRef} type="submit">Submit</button>
            </div>
        </div>
    </div>
    );
}

export default Profile;