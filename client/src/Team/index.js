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
       image={require("./images/sithuprofilepic2.jpeg")}
       name="Sithu Soe"
       role="Frontend Developer"
       website="sithusoe.website"
       email="ssoe@ucsd.edu"
       linkedin="https://www.linkedin.com/in/sithu-soe-86ba34219/?originalSubdomain=mm"
       about="I am a Math-CS major from Muir and worked as a frontend developer for this project. I enjoy creating and developing new features. I hope to learn more about back-end development this summer so that I can become a full-stack engineer."
       interests="Soccer. Wrestling. Programming. Sleeping. Talking. Playing Dota 2."
       facebook = "https://www.facebook.com/si.thusoe.125"
       instagram = "https://www.instagram.com/sithusoe04/"
       github = "https://github.com/SithuSoe04"/>
       <Profilecard
       image={require("./images/calvinprofilepic.jpg")}
       name="Calvin"
       role="Frontend Developer"
       website="calvin.website"
       email="calviinnguyenn@gmail.com"
       linkedin="https://www.linkedin.com/in/calvin-nguyen-1089b51a1/"
       about="I am a data science major, and I worked as a front end engineer for this project! I am seeking to learn more about software engineering! I have a keen interest in software engineering, machine learning, and computer vision."
       interests="Playing Valorant, Gaming, Coding, Sleeping, Working out, and Volleyball"
       facebook = "https://www.facebook.com/profile.php?id=100009305797500"
       instagram = "https://www.instagram.com/calvinn.fornia/"
       github = "https://github.com/Neniflight"/>
       <Profilecard
        image={require("./images/shreyprofilepic.JPG")}
        name="Shrey"
        role="Back-end Developer"
        website="shreya.website"
        email="s9kumar@ucsd.edu"
        linkedin="https://www.linkedin.com/in/shrey-kumar-b99470221/"
        about="I am a backend developer on this project and have a strong passion for computer science as a whole. I am very grateful to be given the opportunity to participate in ACM Projects where I have had the opportunity to further my interest in the field."
        interests="Soccer, Tennis, Basketball, Hiking, Trying out different Foods. Going out"
        facebook = ""
        instagram = "https://www.instagram.com/calvinn.fornia/"
        github = "https://github.com/Neniflight"/>
       <Profilecard
        image={require("./images/akhilprofilepic.jpg")}
        name="Akhil"
        role="Backend Developer"
        website="akhil.website"
        email="aramshankar@ucsd.edu"
        linkedin="https://www.linkedin.com/in/akhil-ramshankar/"
        about="Hi! My name is Akhil and I'm a first-year international student from Sri Lanka. I'm majoring in math-cs at Muir with hopes of becoming a software engineer in the future which fueled my motivation to participate in ACM Hack."
        interests="Programming. Snorkeling. Cycling. Gaming. Binging TV shows. Formula 1."
        facebook = ""
        instagram = "https://www.instagram.com/shrey_kumar14/"
        github = "https://github.com/shreykumar18"/>
       <Profilecard
        image={require("./images/kaneprofilepic.png")}
        name="Kane"
        role="Fullstack Developer"
        website="kane.website"
        email="kal036@ucsd.edu"
        linkedin="https://linkedin.com/in/kane-li-b5153125b"
        about="I am a first-year Computer Science major and work as this team's full-stack developer.  I enjoy creating and being a part of projects which has helped me hone my skills and contribute to the world. With a beginner's mindset, I seek to always be learning."
        interests="Swimming, Journaling, Gaming, and Traveling"
        facebook = "https://www.facebook.com/profile.php?id=100015210068746&mibextid=ZbWKwL"
        instagram = "https://www.instagram.com/kane.nak/"
        github = " https://github.com/Li-Kane"/>
       <Profilecard
        image={require("./images/kevinprofilepic.jpeg")}
        name="Kevin"
        role="Fullstack Developer"
        website="kevin.website"
        email="kec021@ucsd.edu"
        linkedin="https://www.linkedin.com/in/kevin-chan-a832b9255/"
        about="I am a 2nd-year data science major working as a full-stack engineer for this project.  I feel excited to be working on a project that is so close to what I love.  I'm always open to work on things related to gaming, software engineering, or machine learning!"
        interests="Food, Programming, Playing League of Legends, Gaming"
        facebook = ""
        instagram = "https://www.instagram.com/k_chachan/"
        github = "https://github.com/kchan2203"/>
     </div>
   </div>
 );
};


export default Team;

