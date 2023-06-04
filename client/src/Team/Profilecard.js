import React from "react"
import "./card.css"


export default function Profilecard(props){
   return (
       <div className="profileCard">
       <header className="header">
           <img src={props.image} className="profileImage" alt="profile-photo" width="100%" height="282px"/>
           <h1> {props.name} </h1>
           <h4> {props.role} </h4>
           <h6> {props.website} </h6>
           <div className="buttons">
            <button type="button" className="email-button" onClick={() => window.location.href = `mailto:${props.email}`}>
                <img src={require("./images/mail-icon.png")} alt="linkedin-logo" width="15px" height="12x"/>
                <span className="email-text">Email</span>
            </button>
            <button type="button" className="linkedin-button" onClick={() => window.location.href = props.linkedin}>
                <img src={require("./images/linkedin-icon.png")} alt="linkedin-logo" width="15px" height="15x"/>
                <span className="linkedin-text">Linkedin</span>
            </button>
           </div>
       </header>
       <main className="main">
           <h2> About </h2>
           <p>{props.about}</p>
           <h2> Interests </h2>
           <p> {props.interests}</p>
       </main>
       <footer className="footer">
           <button><a href={props.linkedin}><img src={require("./images/linkedin-icon.png")} alt="linkedin-logo" width="25px" height="25px"/></a></button>
           <button><a href={props.email}><img src={require("./images/fb-icon.png")} alt="facebook-logo" width="25px" height="25px"/></a></button>
           <button><a href={props.instagram}><img src={require("./images/instagram-icon.png")} alt="instagram-logo" width="25px" height="25px"/></a></button>
           <button><a href={props.github}><img src={require("./images/github-icon.png")} alt="github-logo" width="25px" height="25px"/></a></button>
       </footer>
       </div>
   )
}
