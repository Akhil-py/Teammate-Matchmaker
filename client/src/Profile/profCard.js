import React from 'react';
import './profile_styles.css';
import trash from "../Images/trash_can.png";

const ProfCard = (props) => {
  const { image, role, rank, region, in_game_username } = props;

  return (
    <div class="profile-card-profile">
        <img src={image} alt=""></img>
        <div class="card-row left">
            <span>Username: </span>
            <span>Role:</span>
            <span>Rank:</span>
            <span>Region:</span>
        </div>
        <div class="card-row right">
            <span>{in_game_username}</span>
            <span>{role}</span>
            <span>{rank}</span>
            <span>{region}</span>
        </div>
        {/* <button>
          <img src={trash} alt=""></img>
        </button> */}
    </div>
  );
};

export default ProfCard;