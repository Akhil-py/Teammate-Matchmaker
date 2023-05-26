import React from "react";
import Profilecard from "./Profilecard"
import "./team.css"

const Team=() => {
    return(
        <div>
            <div className="ourTeam"> Our Team </div>
            <div className="profileCardDisplay">
                <Profilecard />
                <Profilecard />
                <Profilecard />
                <Profilecard />
                <Profilecard />
                <Profilecard />
            </div>
        </div>
    );
}

export default Team;