import React from "react";
import {Link} from "react-router-dom";
import '../style/index.css'
import '../style/App.css'
import bro from '../assets/bro.svg'
import top from '../assets/top.svg'
import bottom from '../assets/bottom.svg'

import LogoComponent from "../components/LogoComponent";
const Landing  = () => {
    return (
        <div className="container mx-auto h-full max-h-full">
            <div className="absolute w-3/12 top-0 right-0">
                <img src={top} alt="top" />
            </div>
            <div className="grid grid-cols-2 gap-2">
                <div className="max-h-full">
                    <LogoComponent />
                    <div className="title-landing mt-6">Play</div>
                    <div className="second-landing mt-4">Tic Tac Toe Game</div>

                    <Link to="/play">
                        <button type="button" className="w-3/5 mt-60 bg-main-color text-white font-bold py-4 px-4 rounded">
                            Play Now
                        </button>
                    </Link>
                </div>
                <div className="h-full">
                    <img src={bro} alt="gamer" className="my-auto w-10/12 mt-20"/>
                </div>
            </div>
            <div className="absolute w-4/12 bottom-0 right-0">
                <img src={bottom} alt="bottom" />
            </div>
        </div>
    )
}

export default Landing