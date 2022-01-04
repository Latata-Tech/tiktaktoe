import React from 'react'
import '../style/index.css'
import '../style/App.css'
import LogoComponent from "../components/LogoComponent";
import BoardComponent from "../components/BoardComponent";
import ScoreComponent from "../components/ScoreComponent";
import ModeComponent from "../components/ModeComponent";
import XOComponent from "../components/XOComponent";
import cross from '../assets/cross.svg'
import circle from '../assets/elipse.svg'

const Play = () => {
    return (
        <div className="container mx-auto h-full max-h-full">
            <div className="grid grid-cols-6 gap-4">
                <div className="col-start-1">
                    <LogoComponent />
                    <div className="mt-40">
                        <ModeComponent />
                        <div className="mt-10">
                            <XOComponent image={cross} title={"cross"}/>
                            <XOComponent image={circle} title={"circle"}/>
                        </div>
                    </div>
                </div>
                <div className="col-start-2 col-span-4">
                    <div className="ml-28 mt-20">
                        <div className="grid grid-cols-1">
                            <div className="p-auto ml-28 mb-20">
                                <BoardComponent />
                            </div>
                            <div className="grid grid-cols-3 gap-3">
                                <ScoreComponent status="Player 1" score={0}/>
                                <ScoreComponent status="Draw" score={0}/>
                                <ScoreComponent status="Computer" score={0}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Play