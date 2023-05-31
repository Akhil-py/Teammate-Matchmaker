import React from "react"
import "./card.css"

export default function Profilecard(props){
    console.log(props.profilepic)
    return (
        <div className="profileCard">
        <header className="header">
            <img src={require("./images/sithuprofilepic.png")} alt="profile" width="100%" height="282px"/>
            <h1> Sithu Soe </h1>
            <h4> Frontend Developer </h4>
            <h6> sithusoe.website </h6>
            <div className="buttons">
            <button type="button" className="email-button"><img src={require("./images/mail-icon.png")} alt="linkedin-logo" width="15px" height="12x"/><span className="email-text">Email</span></button>
            <button type="button" className="linkedin-button"><img src={require("./images/linkedin-icon.png")} alt="linked2in-logo" width="15px" height="15x"/><span className="linkedin-text">Linkedin</span></button>
            </div>
        </header>
        <main className="main">
            <h2> About </h2>
            <p> I am a frontend developer with a particular interest in creating and developing new features. I have fallen in love with the art of programming and coding. I feel grateful to be able to pursue my passion in college and life. </p>
            <h2> Interests </h2>
            <p> Soccer. Wrestling. Programming. Sleeping. Talking to friends. Playing Dota 2. Learning and exploring new things.</p>
        </main>
        <footer className="footer">
            <button><img src={require("./images/linkedin-icon.png")} alt="twitter-logo" width="25px" height="25px"/></button>
            <button><a href="https://www.facebook.com/si.thusoe.125/"><img src={require("./images/fb-icon.png")} alt="facebook-logo" width="25px" height="25px" /></a></button>
            <button><img src={require("./images/instagram-icon.png")} alt="instagram-logo" width="25px" height="25px"/></button>
            <button><img src={require("./images/github-icon.png")} alt="github-logo" width="25px" height="25px"/></button>
        </footer>
        </div>
    )
}

