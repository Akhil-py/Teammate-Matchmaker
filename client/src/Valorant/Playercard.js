import "./Playercard.css"
export default function Playercard(){
    return (
        <div>
            <div className="player-container">
                <div className="profile-card">
                    <img src={require("./Images/valorantbg.jpeg")} className="cover-pic" alt="damn"></img>
                    <img src={require("./Images/valoranticon.jpeg")} className="profile-pic" alt="damn"></img>
                    <h1 className="name">Sithu Soe</h1>
                    <p>San Diego, California, United States</p>
                    <div className="row">
                        <div>
                            <h1>MID</h1>
                            <h2>ROLE</h2>
                        </div>
                        <div>
                            <h1>IMMORTAL</h1>
                            <h2>RANK</h2>
                        </div>
                        <div>
                            <h1>US WEST</h1>
                            <h2>REGION</h2>
                        </div>
                    </div>
                    <div className="button-container">
                        <button>Request Information</button>
                        <button>Send Message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}