import "./Playercard.css"
export default function Playercard(props){
    return (
        <div>
            <div className="player-container">
                <div className="profile-card">
                    <img src={require("./Images/dotabg.jpeg")} className="cover-pic"></img>
                    <img src={require("./Images/heroicon.jpeg")} className="profile-pic"></img>
                    <h1 className="name">{props.name}</h1>
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