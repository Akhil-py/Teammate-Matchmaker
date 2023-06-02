import React, {useState} from "react";
import Playercard from "./Playercard"
import "./index.css"
import API from "../API";

function Dota() {
    const initialRankValue = 'rank';
    const initialRoleValue = 'role';
    const initialRegionValue = 'region';
    const initialRecencyValue = 'recency';
    const initialRatingValue = 'rating';
    const [recommendation, setRecommendation] = useState('recommended');
    const [disabled, setDisabled] = useState(true);
    const [rankValue, setRankValue] = useState(initialRankValue); 
    const [roleValue, setRoleValue] = useState(initialRoleValue); 
    const [regionValue, setRegionValue] = useState(initialRegionValue); 
    const [currentPage, setCurrentPage] = useState(1);
    
    const initialSearchData = {
        game: "dota",
        role: "",
        rank: "",
        region: "",
    };

    const [searchData, updateSearchData] = useState(initialSearchData);

    const handleSearch = async (e) => {
        console.log("Search Data: ", searchData);
        console.log("event: ", e);
        e.preventDefault();
        const req = e.target;
        const payload = {
            searchInfo: searchData
        }
        console.log(JSON.stringify(payload.searchInfo));
        console.log("Request: ", req);

        try {
            const response = await API.searchUser(payload);
            // Assuming you have the JSON response stored in a variable called 'response'
            var response_data =  response;
            console.log(response.data)

            // Extract the 'players' array from the response
            var players = response_data.data.players;

            // Create an empty array to store player information
            var player_info_array = [];

            // Iterate through each player and add their info to the array
            for (var i = 0; i < players.length; i++) {
                var player = players[i];
                const site_player_data = (await API.getUserData(player.userid)).data.userData; 
                //console.log(site_player_data)
                var player_info = {
                    dota_username: player.dota_username,
                    site_username: site_player_data.username,
                    rank: site_player_data.dota.rank,
                    role: site_player_data.dota.role,
                    region: site_player_data.dota.region
                    // Add more fields as needed
                };
                console.log('added player')
                player_info_array.push(player_info);
            }
            console.log(player_info_array)

            // Now you have an array containing the information of all players

            alert("Searched successfully");
        } catch (error) {
            console.error(error);
            alert("An error occurred while trying to search. Please try again later.");
        }
    };
    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };
    
    const handlePreviousPage = () => {
        setCurrentPage((prevPage) => prevPage - 1);
    };

    const handleChange = (e) => {
        if(e.target.name === "rank" ||
            e.target.name === "role" || 
            e.target.name === "region"){
                updateSearchData({
                    ...searchData,
        
                    //trim whitespace
                    [e.target.name]: e.target.value.trim()
                });
            }

        console.log("event: " , e.target.name);

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

    const handleRecommendationChange = (event) => {
        const value = event.target.value;
        setRecommendation(value);
        setDisabled(value === 'recommended');
        if (value === 'recommended') {
          setRankValue(initialRankValue);
          setRoleValue(initialRoleValue);
          setRegionValue(initialRegionValue);
        }
      };
  
    const handleReset = () => {
        setRecommendation('recommended');
        setDisabled(true);
        setRankValue(initialRankValue);
        setRoleValue(initialRoleValue);
        setRegionValue(initialRegionValue);
    };
    const playerCards = [
        <Playercard key={1} name = "Sithu Soe"/>,
        <Playercard key={2} name = "Akhil"/>,
        <Playercard key={3} name = "Kane"/>,
        <Playercard key={4} name = "Shreya"/>,
        <Playercard key={5} name = "Calvin"/>,
        <Playercard key={6} name = "Kevin"/>,
        <Playercard key={7} name = "Sithu Soe 2"/>,
        <Playercard key={8} name = "Akhil 2"/>,
        <Playercard key={9} name = "Kane 2"/>,
        <Playercard key={10} name = "Shreya 2"/>,
        <Playercard key={11} name = "Calvin 2"/>,
        <Playercard key={12} name = "Kevin 2"/>,
        <Playercard key={13} name = "Sithu Soe 3"/>,
        <Playercard key={14} name = "Akhil 3"/>,
        <Playercard key={15} name = "Kane 3"/>,
    ];

    const itemsPerPage = 6;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    

    return(
        <div>
            <div className="filter-container">
                <img className='dota-img' src={require("./Images/dota2.png")}></img>
                <form>
                    <select value={recommendation} onChange={handleRecommendationChange}>
                        <option value="recommended" >Recommended</option>
                        <option value="custom">Custom</option>
                    </select>
                    <select value={rankValue} name = "rank" disabled={disabled} onChange={handleChange}>
                        <option value="rank" disabled selected>Rank</option>
                        <option value="herald">Herald</option>
                        <option value="guardian">Guardian</option>
                        <option value="crusader">Crusader</option>
                        <option value="archon">Archon</option>
                        <option value="legend">Legend</option>
                        <option value="ancient">Ancient</option>
                        <option value="Divine">Divine</option>
                        <option value="Immortal">Immortal</option>
                    </select>                
                </form>
                <form>
                    <select value={regionValue} name = "region" disabled={disabled} onChange={handleChange}>
                        <option value="region" disabled selected>Region</option>
                        <option value="sea">SE Asia</option>
                        <option value="japan">Japan</option>
                        <option value="uswest">US West</option>
                        <option value="useast">US East</option>
                    </select>
                    <select value={roleValue} name = "role" disabled={disabled} onChange={handleChange}>
                        <option value="role" disabled selected>Role</option>
                        <option value="carry">Carry</option>
                        <option value="mid">Mid</option>
                        <option value="offlane">Offlane</option>
                        <option value="softsupport">Soft Support</option>
                        <option value="hardsupport">Hard Support</option>
                    </select>  
                </form>
                <div className="btn-container">
                        <button onClick={handleSearch}>Search</button>
                        <button onClick={handleReset}>Reset</button>
                </div>
            </div>
            <div className="playercard-container">
                {playerCards.slice(startIndex, endIndex)}
            </div>
            <div className="pagination-container">
                {currentPage > 1 && (
                <button onClick={handlePreviousPage}>Back</button>
                )}
                {endIndex < playerCards.length && (
                <button onClick={handleNextPage}>Next</button>
                )}
            </div>
        </div>
    );
}   
export default Dota;