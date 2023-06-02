import React, {useState} from "react";
import Playercard from "./Playercard"
import "./index.css"
import API from "../API";

function League() {
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
    const [recencyValue, setRecencyValue] = useState(initialRecencyValue); 
    const [ratingValue, setRatingValue] = useState(initialRatingValue);

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
            console.log("response: ", response.data.players);
            alert("Searched successfully");
        } catch (error) {
            console.error(error);
            alert("An error occurred while trying to search. Please try again later.");
        }
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
        else if(e.target.name === "recency"){
            setRecencyValue(e.target.value);
        }
        else if(e.target.name === "rating"){
            setRatingValue(e.target.value); 
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
          setRecencyValue(initialRecencyValue);
          setRatingValue(initialRatingValue);
        }
      };
  
      const handleReset = () => {
          setRecommendation('recommended');
          setDisabled(true);
          setRankValue(initialRankValue);
          setRoleValue(initialRoleValue);
          setRegionValue(initialRegionValue);
          setRecencyValue(initialRecencyValue);   
          setRatingValue(initialRatingValue); 
        };

    return(
        <div>
            <div className="filter-container">
                <img className='dota-img' alt="damn" src={require("./Images/dota2.png")}></img>
                <form>
                    <select value={recommendation} onChange={handleRecommendationChange}>
                        <option value="recommended" >Recommended</option>
                        <option value="custom">Custom</option>
                    </select>
                    <select value={rankValue} name="rank" disabled={disabled} onChange={handleChange}>
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
                    <select value={roleValue} name="role" disabled={disabled} onChange={handleChange}>
                        <option value="role" disabled selected>Role</option>
                        <option value="carry">Carry</option>
                        <option value="mid">Mid</option>
                        <option value="offlane">Offlane</option>
                        <option value="softsupport">Soft Support</option>
                        <option value="hardsupport">Hard Support</option>
                    </select>
                   
                </form>
                <form>
                    <select value={regionValue} name="region" disabled={disabled} onChange={handleChange}>
                        <option value="region" disabled selected>Region</option>
                        <option value="sea">SE Asia</option>
                        <option value="japan">Japan</option>
                        <option value="uswest">US West</option>
                        <option value="useast">US East</option>
                    </select>
                    <select value={recencyValue} name="recency" disabled={disabled} onChange={handleChange}>
                        <option value="recency" disabled selected>Recency</option>
                        <option value="herald">24 hours</option>
                        <option value="guardian">48 hours</option>
                        <option value="crusader">72 hours</option>
                    </select>
                    <select value={ratingValue} name="rating" disabled={disabled} onChange={handleChange}>
                        <option value="rating" disabled selected>Rating</option>
                        <option value="100">100%</option>
                        <option value="gt95">&gt; 95%</option>
                        <option value="gt90">&gt; 90%</option>
                        <option value="gt85">&gt; 85%</option>
                        <option value="gt80">&gt; 80%</option>
                    </select>
                </form>
                <div className="btn-container">
                        <button onClick={handleSearch}>Search</button>
                        <button onClick={handleReset}>Reset</button>
                </div>
            </div>
            <div className="playercard-container">
                <Playercard />
                <Playercard />
                <Playercard />
            </div>
        </div>
    );
}

export default League;