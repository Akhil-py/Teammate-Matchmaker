import React, { useRef, useState } from "react";
import API from "../API";
import "./profile_styles.css";

import pikachu from "../Images/surprised.webp";


function Profile() {
    const initialRankValue = 'rank';
    const initialRoleValue = 'role';
    const initialRegionValue = 'region';
    const [rankValue, setRankValue] = useState(initialRankValue); 
    const [roleValue, setRoleValue] = useState(initialRoleValue); 
    const [regionValue, setRegionValue] = useState(initialRegionValue); 
    const user_id = localStorage.getItem('userid');

    const initialGameData = {
        user_id: user_id,
        username: "",
        game: "",
        role: "",
        rank: "",
        region: "",
    };

    const [gameData, updateGameData] = useState(initialGameData);

    const handleGameChange = (e) => {
        updateGameData({
            ...gameData,

            //trim whitespace
            [e.target.name]: e.target.value.trim()
        });

        console.log("targetname: ", e.target.value);

        if(e.target.name === "rank"){
            setRankValue(e.target.value);
        }
        else if(e.target.name === "role"){
            setRoleValue(e.target.value);
        }
        else if(e.target.name === "region"){
            setRegionValue(e.target.value);
        }
    };

    const handleGameSubmit = async (e) => {
        console.log("Game Data: ", gameData);
        console.log("event: ", e);
        e.preventDefault();
        const req = e.target;
        const payload = {
            gameInfo: gameData
        }
        JSON.stringify(payload.gameInfo);
        console.log("Payload: ", payload.gameInfo);
        console.log("Request: ", req);
        try {
            await API.sendGameData(payload);
            //console.log("Response: ", response);
            alert("Made successfully");
        } catch(error) {
            console.error(error);
            alert("An error occurred while trying to search. Please try again later.");
        }
    };

    const handleReset = () => {
        setRankValue(initialRankValue);
        setRoleValue(initialRoleValue);
        setRegionValue(initialRegionValue);
    };

    const valRef = useRef();
    const lolRef = useRef();
    const dotaRef = useRef();
    const submitRef = useRef();
    const cardRef = useRef();
    // add usernames and profile info
    // const site_player_data = (API.getUserData(localStorage.getItem('userid'))).data.userData; 
    // const username = site_player_data.username;

    const valorantR = (e) => {
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
        // Perform additional actions based on the selected option
        console.log(selectedValue)
        if (selectedValue === "valorant") {
            valorantR('show');
       }
        else if (selectedValue === "league-of-legends") {
            lolR('show');
        }
        else if (selectedValue === "dota" ){
            dotaR('show');
        }
        else if (selectedValue ==="game") {
            gameR('show');
        }
        handleGameChange(event);
        handleReset();
      };
    const createNewCard = () => {
        valRef.current.classList.toggle("hide");
    }

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
                <li>Only one profile card per game for an account!</li>
            </div>
        </div>
        <div class="right-panel">
            My Cards
            <div class="card-collection">
                <button onClick={createNewCard}>Create a Card!</button>
            </div>
            <div class="pop-up-card">
                <select onChange={handleOptionChange} class="select-chosen">
                    <option value="Game">Game</option>
                    <option value="Valorant">Valorant</option>
                    <option value="League of Legends">League of Legends</option>
                    <option value="DOTA 2">DOTA 2</option>
                </select>
                <div className="hide" ref={valRef}>
                    <select value={roleValue} name="role" onChange={handleGameChange} className="select-chosen" ref={valRef}>
                        <option value="role">Role</option>
                        <option value="controller">Controller</option>
                        <option value="duelist">Duelist</option>
                        <option value="initiator">Initiator</option>
                        <option value="sentinel">Sentinel</option>
                    </select>
                    <select value={rankValue} name="rank" onChange={handleGameChange} className="select-chosen" ref={valRef}>
                        <option value="rank">Rank</option>
                        <option value="iron">Iron</option>
                        <option value="bronze">Bronze</option>
                        <option value="gold">Gold</option>
                        <option value="platinum">Platinum</option>
                        <option value="diamond">Diamond</option>
                        <option value="ascendant">Ascendant</option>
                        <option value="immortal">Immortal</option>
                        <option value="radiant">Radiant</option>
                    </select>
                    <select value={regionValue} name="region" onChange={handleGameChange} className="select-chosen" ref={valRef}>
                        <option value="region">Region</option>
                        <option value="sea">SE Asia</option>
                        <option value="japan">Japan</option>
                        <option value="uswest">US West</option>
                        <option value="useast">US East</option>
                    </select>
                </div>
                <div className="hide" ref={lolRef}>
                    <select value={roleValue} name="role" onChange={handleGameChange} className="select-chosen" ref={lolRef}>
                        <option value="role">Role</option>
                        <option value="top">Top</option>
                        <option value="jungle">Jungle</option>
                        <option value="mid">Mid</option>
                        <option value="adc">ADC</option>
                        <option value="support">Support</option>
                    </select>
                    <select value={rankValue} name="rank" onChange={handleGameChange} className="select-chosen" ref={lolRef}>
                        <option value="rank">Rank</option>
                        <option value="iron">Iron</option>
                        <option value="bronze">Bronze</option>
                        <option value="gold">Gold</option>
                        <option value="platinum">Platinum</option>
                        <option value="diamond">Diamond</option>
                        <option value="master">Master</option>
                        <option value="grandmaster">Grandmaster</option>
                        <option value="challenger">Challenger</option>
                    </select>
                    <select value={regionValue} name="region" onChange={handleGameChange} className="select-chosen" ref={lolRef}>
                        <option value="region">Region</option>
                        <option value="sea">SE Asia</option>
                        <option value="japan">Japan</option>
                        <option value="uswest">US West</option>
                        <option value="useast">US East</option>
                    </select>
                </div>

                <div className="hide" ref={dotaRef}>
                    <select value={roleValue} name="role" onChange={handleGameChange} className="select-chosen">
                        <option value="role">Role</option>
                        <option value="carry">Carry</option>
                        <option value="mid">Mid</option>
                        <option value="offlane">Offlane</option>
                        <option value="softsupport">Soft Support</option>
                        <option value="hardsupport">Hard Support</option>
                    </select>
                    <select value={rankValue} name="rank" onChange={handleGameChange} className="select-chosen">
                        <option value="rank">Rank</option>
                        <option value="herald">Herald</option>
                        <option value="guardian">Guardian</option>
                        <option value="crusader">Crusader</option>
                        <option value="archon">Archon</option>
                        <option value="legend">Legend</option>
                        <option value="ancient">Ancient</option>
                        <option value="divine">Divine</option>
                        <option value="immortal">Immortal</option>
                    </select>
                    <select value={regionValue} name="region" onChange={handleGameChange} className="select-chosen">
                        <option value="region">Region</option>
                        <option value="sea">SE Asia</option>
                        <option value="japan">Japan</option>
                        <option value="uswest">US West</option>
                        <option value="useast">US East</option>
                    </select>
                </div>
                <button className="hide" onClick={handleGameSubmit} ref={submitRef} type="submit">Submit</button>
            </div>
        </div>
    </div>
    );
}

export default Profile;