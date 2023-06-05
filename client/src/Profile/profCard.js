import React from 'react';
import './profile_styles.css';

const ProfCard = (props) => {
  const { image, role, rank, region } = props;

  return (
    <div class="profile-card-profile">
        <img src={image} alt=""></img>
        <div class="card-row left">
            <span>Role:</span>
            <span>Rank:</span>
            <span>Region:</span>
        </div>
        <div class="card-row right">
            <span>{role}</span>
            <span>{rank}</span>
            <span>{region}</span>
        </div>
    </div>
  );
};

export default ProfCard;