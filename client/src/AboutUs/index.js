import React from "react";
import "./index.css";

function AboutUS() {
  return (
    <div className="aboutus-container">
      <div className="description">
        <p className="text"> 
          Introducing GAMED - The Ultimate Platform for Connecting Gamers of
          Similar Rank and Region. GAMED is an innovative website designed to
          bring gamers together based on their rank and region, revolutionizing
          the way players connect and engage in online gaming communities.
          Whether you're a casual gamer looking for like-minded individuals or
          a competitive player seeking challenging opponents, GAMED is your
          go-to destination. With GAMED, finding gamers who share your skill
          level and reside in your region has never been easier. Say goodbye to
          endless searches and frustrating matchmaking experiences. Our
          intelligent algorithm swiftly matches you with fellow gamers who are
          not only at a similar rank but also located in your geographical
          area, enhancing your gaming experience by fostering local connections
          and reducing latency. See the slide below for more information on how we developed this 
          website!
        </p>
      </div>
      <div className="slides">
        <iframe
          src="https://docs.google.com/presentation/d/e/2PACX-1vS_118sGyzJ3cmgbaSJby5C7ux8q-uVwe1UaNU0EMLVLU0cN4TPGRgksslP8dqvZg73EmNp0sUZ_JBY/embed?start=true&loop=true&delayms=10000"
          frameBorder="0"
          width="960"
          height="569"
          allowFullScreen={true}
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          title="Google Slides"
        ></iframe>
      </div>
    </div>
  );
}

export default AboutUS;
