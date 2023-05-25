import React from "react";
import "./contactus.css"

function Contact() {
    return(
    <div>
        <div className="container">
            <div className="leftBox">
                <div className="leftHeading">Contact Us</div>
            </div>
            <div className="rightBox">
                <div className="rightHeading">Get in Touch</div>
                <form>
                    <label>Your name:</label>
                    <input type="text" placeholder="Example: Sammy"></input>
                    <label>Email address associated with your account:</label>
                    <input type="text" placeholder="Example: sammy@ucsd.edu"></input>
                    <label>Subject</label>
                    <select>
                        <option value="select" disabled>Select</option>
                        <option value="glitchybehavior">Glitchy Behavior</option>
                        <option value="slow">Slow Website</option>
                        <option value="featurenotworking">Feature not working</option>
                    </select>
                    <label>Details</label>
                    <textarea className="details" placeholder="Example: I cannot post a new profile card"></textarea>
                </form>
                <div className="buttonContainer">
                    <button>Reset</button>
                    <button>Submit</button>
                </div>
            </div>
        </div>
    </div>
    );
}

/* <label for="cars">Choose a car:</label>

<select name="cars" id="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select> */

export default Contact;