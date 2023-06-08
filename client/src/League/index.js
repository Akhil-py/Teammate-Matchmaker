import React, {useRef, useState, useEffect} from "react";
import Playercard from "./Playercard"
import LoadingAnimation from "../Profile/loading.jsx";
import "./index.css"
import API from "../API";

function League() {
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
        game: "league-of-legends",
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
        try {
            if(recommendedPage === false){
                throw new Error('No Player Card for game created, please create one in profile for recommended options');
            }
            console.log("recommendation!!", recommendation)
            if(recommendation === "recommended"){
                console.log("UPDATING SEARCH DATA TO RECOMMENDED")

                console.log(searchData);
            }
            const payload = {
                searchInfo: searchData
            }
            const req = e.target;
            console.log("Request: ", req);
            console.log(JSON.stringify(payload.searchInfo));
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
                //console.log(site_player_data)
                var player_info = {
                    lol_username: player.lol_username,
                    site_username: site_player_data.username,
                    rank: site_player_data.leagueOfLegends.rank,
                    role: site_player_data.leagueOfLegends.role,
                    region: site_player_data.leagueOfLegends.region,
                    userid: site_player_data.dota.userid,
                    profilepic: site_player_data.profilePicture
                    // Add more fields as needed
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

    const handleRecommendationChange = async (event = { target: { value: 'recommended' } }) => {
        const value = event.target.value;
        setRecommendation(value);
        setDisabled(value === 'recommended');
        if (value === 'recommended') {
            try{
                const response = await API.getUserData(localStorage.getItem('userid'));
                const userData = response.data.userData;
                console.log("USER DATA!", userData)
                if (userData.leagueOfLegends === null)  {
                    setRecommendedPage(false); // Update the state variable
                } else {
                    setRecommendedPage(true); // Update the state variable
                    const response1 = await API.getUserData(localStorage.getItem('userid'));
                    const userData = response1.data.userData;
                    console.log(userData.leagueOfLegends.region);
    
                    updateSearchData({
                        ...initialSearchData,
                        region: userData.leagueOfLegends.region,
                        rank: userData.leagueOfLegends.rank
                    });;
                    console.log('Updated searchData:', userData.leagueOfLegends); // Log the updated searchData

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
          lolUsername={player.lol_username}
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
        <div className="background-for-games">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Khand&display=swap"></link>
            <div>
                {isLoading && (<LoadingAnimation/>)}
            </div>
            <div className="filter-container">
                <img className='league-img' alt="" src={require("./Images/league.png")}></img>
                <form>
                    <select value={recommendation} onChange={handleRecommendationChange}>
                        <option value="recommended">Recommended</option>
                        <option value="custom">Custom</option>
                    </select>
                    <select value={rankValue} name = "rank" disabled={disabled} onChange={handleChange}>
                        <option value="rank" disabled selected>Rank</option>
                        <option value="Iron">Iron</option>
                        <option value="Bronze">Bronze</option>
                        <option value="Silver">Silver</option>
                        <option value="Gold">Gold</option>
                        <option value="Platinum">Platinum</option>
                        <option value="Diamond">Diamond</option>
                        <option value="Master">Master</option>
                        <option value="Grandmaster">Grandmaster</option>
                        <option value="Challenger">Challenger</option>
                    </select>                
                </form>
                <form>
                    <select value={regionValue} name = "region" disabled={disabled} onChange={handleChange}>
                        <option value="region" disabled selected>Region</option>
                        <option value="NA">NA</option>
                        <option value="EUW">EU West</option>
                        <option value="EUE">EU East</option>
                        <option value="Korea">Korea</option>
                        <option value="OCE">Oceania</option>
                    </select>
                    <select value={roleValue} name = "role" disabled={disabled} onChange={handleChange}>
                        <option value="role" disabled selected>Role</option>
                        <option value="Top">Top</option>
                        <option value="Jungle">Jungle</option>
                        <option value="Mid">Mid</option>
                        <option value="ADC">ADC</option>
                        <option value="Support">Support</option>
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
export default League;