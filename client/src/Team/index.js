import React from "react";
import Profilecard from "./Profilecard";
import "./team.css";


const Team = () => {
 const image = require("./images/sithuprofilepic.png");


 return (
   <div>
     <div className="ourTeam"> Our Team </div>
     <div className="profileCardDisplay">
       <Profilecard
       image={require("./images/sithuprofilepic.png")}
       name="Sithu Soe"
       role="Frontend Developer"
       website="sithusoe.website"
       email="ssoe@ucsd.edu"
       linkedin="https://www.linkedin.com/in/sithu-soe-86ba34219/?originalSubdomain=mm"
       about="I am a frontend developer with a particular interest in creating and developing new features. I have fallen in love with the art of programming and coding. I feel grateful to be able to pursue my passion in college and life."
       interests="Soccer. Wrestling. Programming. Sleeping. Talking to friends. Playing Dota 2. Learning and exploring new things."/>
       <Profilecard
       image={require("./images/calvinprofilepic.jpg")}
       name="Calvin"
       role="Frontend Developer"
       website="kevin.website"
       email="calviinnguyenn@gmail.com"
       linkedin="https://www.linkedin.com/in/calvin-nguyen-1089b51a1/"
       about="A data science and front end engineer! Hope to learn more about software engineering!"
       interests="Valorant, Gaming, Coding, Gym, Volleyball"/>
       <Profilecard
        image={require("./images/sithuprofilepic.png")}
        name="Shreya"
        role="Back-end Developer"
        website="kevin.website"
        email="kevin@ucsd.edu"
        linkedin="www.google.com"
        about="I am a frontend developer with a particular interest in creating and developing new features. I have fallen in love with the art of programming and coding. I feel grateful to be able to pursue my passion in college and life."
        interests="Soccer. Wrestling. Programming. Sleeping. Talking to friends. Playing Dota 2. Learning and exploring new things."/>
       <Profilecard
        image={require("./images/sithuprofilepic.png")}
        name="Akhil"
        role="Backend Developer"
        website="kevin.website"
        email="kevin@ucsd.edu"
        linkedin="www.google.com"
        about="I am a frontend developer with a particular interest in creating and developing new features. I have fallen in love with the art of programming and coding. I feel grateful to be able to pursue my passion in college and life."
        interests="Soccer. Wrestling. Programming. Sleeping. Talking to friends. Playing Dota 2. Learning and exploring new things."/>
       <Profilecard
        image={require("./images/sithuprofilepic.png")}
        name="Kane"
        role="Fullstack Developer"
        website="kevin.website"
        email="kevin@ucsd.edu"
        linkedin="www.google.com"
        about="I am a frontend developer with a particular interest in creating and developing new features. I have fallen in love with the art of programming and coding. I feel grateful to be able to pursue my passion in college and life."
        interests="Soccer. Wrestling. Programming. Sleeping. Talking to friends. Playing Dota 2. Learning and exploring new things."/>
       <Profilecard
        image={require("./images/sithuprofilepic.png")}
        name="Kevin"
        role="Fullstack Developer"
        website="kevin.website"
        email="kevin@ucsd.edu"
        linkedin="www.google.com"
        about="I am a frontend developer with a particular interest in creating and developing new features. I have fallen in love with the art of programming and coding. I feel grateful to be able to pursue my passion in college and life."
        interests="Soccer. Wrestling. Programming. Sleeping. Talking to friends. Playing Dota 2. Learning and exploring new things."/>
     </div>
   </div>
 );
};


export default Team;