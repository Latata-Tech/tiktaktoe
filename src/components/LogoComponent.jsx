import React from "react";
import icon from '../assets/logo.svg'
import "./../style/App.css"

const LogoComponent = () => {
    return (
        <div className="bg-white w-fit px-8 py-4 rounded-lg shadow-lg mt-8">
            <img src={icon} className="w-12 md:w-16 lg:w-24" alt="logo"/>
        </div>
    )
}

export default LogoComponent