import "./Playercard.css"
import AOS from 'aos';
import React, {useState, useEffect} from "react";

export default function Playercard(values){
    const [image, setImage] = useState(null);
    //const [profilePicture, updateprofilePicture] = useState(values.profilepic);

    function decodeBase64ToImage(base64String) {
        const img = new Image();
        img.src = `data:image/png;base64,${base64String}`;
        return img;
    }

    useEffect(() => {
        AOS.init({duration: 2000});
        setImage(decodeBase64ToImage(values.profilepic))
    }, []); 

    const displayDiscord = async () => {
        console.log("pfp: ", values.profilepic);
        values.function(values);
    }

    return (
        <div>
            <div className="player-container" data-aos="fade-right">
                <div className="profile-card">
                    <div className="profileImage"></div>
                    <img src={require("./Images/dotabg.jpeg")} alt="" className="cover-pic"></img>
                    {image && <img src={image.src} alt="profile" className="profile-pic" />}
                    <h1 className="name">{values.dotaUsername}</h1>
                    <p>San Diego, California, United States</p>
                    <div className="row">
                        <div>
                            <h1>{values.role}</h1>
                            <h2>ROLE</h2>
                        </div>
                        <div>
                            <h1>{values.rank}</h1>
                            <h2>RANK</h2>
                        </div>
                        <div>
                            <h1>{values.region}</h1>
                            <h2>REGION</h2>
                        </div>
                    </div>
                    <div className="button-container">
                        <button onClick={displayDiscord}>Request Information</button>
                        <button>Send Message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}