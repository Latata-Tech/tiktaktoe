import React from "react";
import icon from '../assets/logo.svg'
import "./../style/App.css"

const LogoComponent = () => {
    return (
        <div className="logo-container">
            <img src={icon}  alt="logo"/>
        </div>
    )
}

export default LogoComponent