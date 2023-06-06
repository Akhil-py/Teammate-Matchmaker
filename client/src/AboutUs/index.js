import React from "react";
import "./index.css";

function AboutUs() {
  return (
    <div className="aboutus-container">
      <div className="description">
        <p className="text">
          GAMED is an innovative website designed to bring gamers together
          based on their rank and region, revolutionizing the way players
          connect and engage in online gaming communities. Whether you're a
          casual gamer looking for like-minded individuals or a competitive
          player seeking challenging opponents, GAMED is your go-to
          destination.
        </p>
      </div>
      <div className="features">
        <div className="feature">
          <img src={require("./Images/gamerconnect.png")} alt="Gamers" className="feature-image" />
          <h2>Connect with Gamers</h2>
          <p>
            Discover and connect with gamers who share your skill level and
            passion for gaming. Forge new friendships and join gaming
            communities tailored to your interests.
          </p>
        </div>
        <div className="feature">
          <img src={require("./Images/rank.jpeg")} alt="Rank" className="feature-image" />
          <h2>Rank-based Matching</h2>
          <p>
            Our intelligent algorithm swiftly matches you with fellow gamers who
            are at a similar rank, ensuring balanced and competitive gameplay
            experiences.
          </p>
        </div>
        <div className="feature">
          <img src={require("./Images/region.png")} alt="Region" className="feature-image" />
          <h2>Regional Connections</h2>
          <p>
            Find gamers located in your region to reduce latency and foster
            local connections. Enhance your gaming experience with low-latency
            multiplayer sessions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

