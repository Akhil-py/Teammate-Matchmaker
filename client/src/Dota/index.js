import React, {useRef, useState, useEffect} from "react";
import Playercard from "./Playercard"
import LoadingAnimation from "../Profile/loading.jsx";
import "./index.css"
import API from "../API";

function Dota() {
    const initialRankValue = 'rank';
    const initialRoleValue = 'role';
    const initialRegionValue = 'region';
    const [recommendation, setRecommendation] = useState('recommended');
    const [disabled, setDisabled] = useState(true);
    const [rankValue, setRankValue] = useState(initialRankValue); 
    const [roleValue, setRoleValue] = useState(initialRoleValue); 
    const [regionValue, setRegionValue] = useState(initialRegionValue); 
    const [currentPage, setCurrentPage] = useState(1);
    const [playerData, setPlayerData] = useState([]);
    const [recommendedPage, setRecommendedPage] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const discordRef = useRef();
    const [discord, setDiscord] = useState(null);

    
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
        setIsLoading(true);
        const req = e.target;
        const payload = {
            searchInfo: searchData
        }
        console.log(JSON.stringify(payload.searchInfo));
        console.log("Request: ", req);
        try {
            if(recommendedPage === false){
                throw new Error('No Player Card for game created, please create one in profile for recommended options');
            }
            const response = await API.searchUser(payload);
            // Assuming you have the JSON response stored in a variable called 'response'
            var response_data = response;
            console.log(response.data)
            
            // Extract the 'players' array from the response
            var players = response_data.data.players;

            // Create an empty array to store player information
            var player_info_array = [];

            // Iterate through each player and add their info to the array
            for (var i = 0; i < players.length; i++) {
                var player = players[i];
                const site_player_data = (await API.getUserData(player.userid)).data.userData; 
                //console.log("Siteplayerdata: ", site_player_data)
                var player_info = {
                    dota_username: player.dota_username,
                    site_username: site_player_data.username,
                    rank: site_player_data.dota.rank,
                    role: site_player_data.dota.role,
                    region: site_player_data.dota.region,
                    userid: site_player_data.dota.userid,
                    profilepic: site_player_data.profilePicture
                };
                console.log('added player')
                player_info_array.push(player_info);
            }
            console.log("playerinfoarr: ", player_info_array)
            setPlayerData(player_info_array);
            console.log("playerData: ", playerData)

            // Now you have an array containing the information of all players

        } catch (error) {
            console.error(error);
            alert(error);
        }
        setIsLoading(false);
    };
    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
        window.scrollTo({
            top: 0,
            behavior: 'smooth' 
          });
    };
    
    const handlePreviousPage = () => {
        setCurrentPage((prevPage) => prevPage - 1);
        window.scrollTo({
            top: 0,
            behavior: 'smooth' 
          });
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

    const handleRecommendationChange = async (event = { target: { value: 'recommended' } }) => {
        const value = event.target.value;
        setRecommendation(value);
        setDisabled(value === 'recommended');
        if (value === 'recommended') {
            try{
                const response = await API.getUserData(localStorage.getItem('userid'));
                const userData = response.data.userData;
                console.log(userData.dota)
                if (userData.dota === null) {
                    setRecommendedPage(false); // Update the state variable
                } else {
                    setRecommendedPage(true); // Update the state variable
                    const response1 = await API.getUserData(localStorage.getItem('userid'));
                    const userData = response1.data.userData;
                    updateSearchData({
                        ...initialSearchData,
                        region: userData.dota.region,
                        rank: userData.dota.rank
                        
                    });
                    console.log('Updated searchData:', searchData); // Log the updated searchData
                }
            } catch (error) {
                console.error('Failed to fetch user data:', error);
            }
        } else {
            setRecommendedPage(true);
            updateSearchData(initialSearchData);
        }
    };
  
    const handleReset = () => {
        setRecommendation('recommended');
        setDisabled(true);
        handleRecommendationChange();
        setRankValue(initialRankValue);
        setRoleValue(initialRoleValue);
        setRegionValue(initialRegionValue);
        updateSearchData(initialSearchData);
        setPlayerData([]);
    };

    const displayDiscord = async(discordid) => {
        console.log("Discord id: ", discordid.userid);
        const discordUser = (await API.getUserData(discordid.userid)).data.userData; 
        console.log("Discord User: ", discordUser.discord);
        setDiscord(discordUser.discord);
        console.log("discord: ", discord);
        toggleDiscordRef();
        return null;
    }

    const toggleDiscordRef = () => {
        discordRef.current.classList.toggle("hide");
    }

    const playerCards = playerData.map((player, index) => (
        <Playercard
          key={index}
          dotaUsername={player.dota_username}
          siteUsername={player.site_username}
          rank={player.rank}
          role={player.role}
          region={player.region}
          function={displayDiscord}
          userid={player.userid}
          profilepic={player.profilepic} 
        />
      ));

    const itemsPerPage = 6;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    
    useEffect(() => {
        handleReset();
      }, []);    
    return(
        <div class="background-for-games">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Khand&display=swap"></link>
            <div>
                {isLoading && (<LoadingAnimation/>)}
            </div>
            <div className="filter-container">
                <img className='dota-img' alt="" src={require("./Images/dota2.png")}></img>
                <form>
                    <select value={recommendation} onChange={handleRecommendationChange}>
                        <option value="recommended">Recommended</option>
                        <option value="custom">Custom</option>
                    </select>
                    <select value={rankValue} name = "rank" disabled={disabled} onChange={handleChange}>
                        <option value="rank" disabled selected>Rank</option>
                        <option value="Herald">Herald</option>
                        <option value="Guardian">Guardian</option>
                        <option value="Crusader">Crusader</option>
                        <option value="Archon">Archon</option>
                        <option value="Legend">Legend</option>
                        <option value="Ancient">Ancient</option>
                        <option value="Divine">Divine</option>
                        <option value="Immortal">Immortal</option>
                    </select>                
                </form>
                <form>
                    <select value={regionValue} name = "region" disabled={disabled} onChange={handleChange}>
                        <option value="region" disabled selected>Region</option>
                        <option value="SEA">SE Asia</option>
                        <option value="Japan">Japan</option>
                        <option value="USWest">US West</option>
                        <option value="USEast">US East</option>
                    </select>
                    <select value={roleValue} name = "role" disabled={disabled} onChange={handleChange}>
                        <option value="role" disabled selected>Role</option>
                        <option value="Carry">Carry</option>
                        <option value="Mid">Mid</option>
                        <option value="Offlane">Offlane</option>
                        <option value="Soft Support">Soft Support</option>
                        <option value="Hard Support">Hard Support</option>
                    </select>  
                </form>
                <div className="btn-container">
                        <button onClick={handleSearch}>Search</button>
                        <button onClick={handleReset}>Reset</button>
                </div>
            </div>

            <div className="discord-pop-up hide" ref={discordRef}>
                <div className="discord-box-info">
                    <h2 ref={discordRef}>{discord}</h2>
                    <button class="exit-but" onClick={toggleDiscordRef}>Exit</button>
                </div>
            </div>

            <div className="playercard-container2">
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