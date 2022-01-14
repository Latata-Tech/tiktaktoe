import React from "react";
import {Link} from "react-router-dom";
import '../style/index.css'
import '../style/App.css'
import middleAssetImage from '../assets/bro.svg'
import topAssetImage from '../assets/top.svg' 
import bottomAssetImage from '../assets/bottom.svg'

import LogoComponent from "../components/LogoComponent";


const Landing  = () => {


    return (
        <div className="min-h-screen min-w-sreen  relative">

            <img src={topAssetImage} className="absolute top-0 right-0 w-screen-20" alt="top asset"  />
            <img src={bottomAssetImage} className="absolute bottom-0 right-0 w-screen-30" alt="bottom asset"  />

            <div className="container h-full w-full mx-auto px-4 md:px-8 lg:px-16">

                <div className="flex flex-col h-full w-full">

                    <div className="flex-col md:flex-row flex items-center h-full w-full">

                        <div className="flex-1">
                            <LogoComponent />
                            <p className="text-7xl font-bold font-poppins mt-14">Play</p>
                            <p className="text-5xl font-bold font-poppins mt-4">Tic Tac Toe Game</p>
                            
                            <Link to="/play">
                                <button className="mt-8 bg-primary border rounded-lg text-white text-3xl font-poppins font-bold px-24 py-4 ">Play Now</button>
                            </Link>
                        </div>
                        <div className="flex-1">
                            <img src={middleAssetImage} className="" alt="midel asset" />
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Landing