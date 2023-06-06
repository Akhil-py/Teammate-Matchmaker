import React from "react";
import "./loading.css";
import logo from "../Images/logo_only.png"

function LoadingAnimation() {
  return (
    <div class="loading-background">
        <div className="loading-animation">
            <img src={logo} alt="loading"></img>
        </div>
    </div>
  );
}

export default LoadingAnimation;